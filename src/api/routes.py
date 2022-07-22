"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import json




api = Blueprint('api', __name__)

with open('db.json') as f:
    data = json.load(f)

@api.route("/token", methods=["POST"])
def login():
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email = email, password = password).one_or_none()
    if user is None:
        return jsonify({"msg":"Invalid"})
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token)



@api.route('/register', methods=["POST"])
def register(): 
    if request.json is None:
        return jsonify({"msg":"Invalid"})
    
    user = User.create(request.json)
    print(user)
    return jsonify({}), 201

@api.route('/user', methods=["GET"])
def getusers():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200


@api.route('/product', methods = ["POST"])
@jwt_required()
def  postproduct():
    data = request.json
    user_id = get_jwt_identity()
    user = User.filter.get(user_id)
    data['user_id'] = user.id
    data['username'] = user.username
    print(data)
    product = Product(**data)
    db.session.add(product)
    db.session.commit()
    print(product)
    return jsonify({"msg":"success updating"})


@api.route('/product', methods = ["GET"])
def getproduct():
    products = Product.query.all()
    all_products = list(map(lambda x: x.serialize(), products))
    return jsonify(all_products), 200
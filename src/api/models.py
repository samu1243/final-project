from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(50), unique=True,  nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    product = db.relationship('Product', backref='user', lazy=True, uselist= True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username":self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    @classmethod
    def create(cls, data):
        try: 
            new_user = cls(**data)
            db.session.add(new_user)
            db.session.commit()
            return new_user
        except Exception as error:
            db.session.rollback()
            print(error, "there was an error")
            return None

class Product(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    server_from = db.Column(db.String(120), unique=False, nullable=False)
    server_to = db.Column(db.String(120), unique=False, nullable=False)
    gold_trade = db.Column(db.Integer(), unique=False, nullable=False)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
      
    def __init__ (self, server_from, server_to, gold_trade, user_id, user_name):
        self.id = id
        self.server_from = server_from
        self.server_to = server_to
        self.gold_trade = gold_trade
        self.user_id = user_id
    
    def serialize(self):
        return {
            "id": self.id,
            "server_from": self.server_from,
            "server_to": self.server_to,
            "gold_trade": self.gold_trade,
            "user_id": self.user_id,
            "username": User.query.get(self.user_id).username
        }
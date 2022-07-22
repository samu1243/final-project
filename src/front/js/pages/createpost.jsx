import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SearchBar from "../component/searchbar.jsx";

function CreatePost() {
  const { store, actions } = useContext(Context);
  const [serverFrom, setServerFrom] = useState("");
  const [serverTo, setServerTo] = useState("");
  const [goldTrade, setGoldTrade] = useState("");
  const postTrade = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        gold_trade: goldTrade,
        server_from: serverFrom,
        server_to: serverTo,
      }),
    };
    fetch(
      "https://3001-4geeksacade-reactflaskh-uwxf6oceact.ws-us53.gitpod.io/api/product",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => actions.getProduct());
  };

  return (
    <div className="create-post">
      {!store.token ? (
        <div>create an account or login to create a post!</div>
      ) : (
        <div className="post-inputs">
          <span id="post-title">Create your own post</span>
          <input
            id="input1"
            placeholder="Server from"
            value={serverFrom}
            onChange={(e) => {
              setServerFrom(e.target.value);
            }}
          ></input>
          <input
            id="input2"
            placeholder="Server to"
            value={serverTo}
            onChange={(e) => {
              setServerTo(e.target.value);
            }}
          ></input>
          <input
            id="input3"
            placeholder="Amount to trade"
            value={goldTrade}
            onChange={(e) => {
              setGoldTrade(e.target.value);
            }}
          ></input>
          <button className="button-30" onClick={postTrade}></button>
        </div>
      )}
    </div>
  );
}

export default CreatePost;

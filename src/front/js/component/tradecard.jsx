import React, { useState } from "react";
// import data from "../../../../db.json";
import {
  faClipboard,
  faCoins,
  faCopy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function TradeCard({ data }) {
  const [onChange, setOnChange] = useState(false);
  const [copy, setCopy] = useState(false);
  React.state = {
    value: `/w ${data.username}-${data.server_from} Hi ${data.username}! I'd like to trade with you. Found you on WoW Trade!`,
    copied: false,
  };

  return (
    <div className="card-container">
      <div className="card-servers">
        <div className="card-map">
          <div key={data.id} className="servers-api">
            <div className="server-from">From: {data.server_from}</div>
            <div className="server-to">To: {data.server_to}</div>
          </div>
          <div className="gold-trade">
            Currency: {data.gold_trade} <FontAwesomeIcon icon={faCoins} />
          </div>
          <div className="user-trade">
            <span className="username-hover">
              <FontAwesomeIcon icon={faUser} /> {data.username}
            </span>
            <button
              bsclass="btn-custom"
              className="button-28"
              onClick={() => {
                setOnChange(!onChange);
              }}
            >
              {onChange == true ? "Hide" : "Trade"}
            </button>
          </div>
          {onChange === true && (
            <div>
              <input
                id="tradecard-input"
                type="text"
                defaultValue={React.state.value}
              ></input>
              <CopyToClipboard text={React.state.value}>
                <button className="copy-button" onClick={setCopy}>
                  {copy ? (
                    <FontAwesomeIcon icon={faClipboard} />
                  ) : (
                    <FontAwesomeIcon icon={faCopy} />
                  )}
                </button>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

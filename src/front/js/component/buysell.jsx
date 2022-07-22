import React, { useContext } from "react";
import { TradeCard } from "./tradecard.jsx";
import data from "../../../../db.json";
import { Context } from "../store/appContext.js";

function BuySell() {
  const { store } = useContext(Context);
  return (
    <div className="buysell">
      <div className="d-flex column">
        <div className="from-div">
          <span className="from-span">From</span>
        </div>
        <div className="to-div">
          <span className="to-span">To</span>
        </div>
      </div>
      {store.data && store.serchBarInput && store.serchBarInput.length > 0
        ? store.data
            .filter((data, i) => {
              return data.server_to
                .toLowerCase()
                .includes(store.serchBarInput.toLowerCase());
            })
            .map((data, i) => {
              return <TradeCard data={data} key={i} />;
            })
        : store.data && store.data.map((data, i) => {
            return <TradeCard data={data} key={i} />;
          })}
    </div>
  );
}

export default BuySell;

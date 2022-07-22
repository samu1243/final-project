import React from "react";
import WebNav from "../component/navbar.jsx";
import BodyImage from "../component/body.jsx";
//include images into your bundle
import TradeOffers from "../component/tradeoptions.jsx";
import BuySell from "../component/buysell.jsx";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <div className="nav-div">
        <WebNav />
      </div>
      <BodyImage />
      <TradeOffers />
      <div className="section-below">
        <BuySell />
      </div>
    </div>
  );
};

export default Home;

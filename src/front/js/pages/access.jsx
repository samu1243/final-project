import React from "react";
import { AccountBox } from "../component/accountbox/index.jsx";
import { Footer } from "../component/footer.jsx";
import WebNav from "../component/navbar.jsx";

function Access() {
  return (

    <div className="main-access">
      <div className="access-div d-flex justify-content-center">
        <AccountBox />
      </div>
    </div>
  );
}

export default Access;

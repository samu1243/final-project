//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Home from "./pages/home.js";
import Layout from "./layout.jsx";

//render your react application
ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.querySelector("#app")
);

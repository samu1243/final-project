import React from "react";
import WebNav from "./component/navbar.jsx";
import About from "./pages/about.jsx";
import ContactUs from "./pages/contact.jsx";
import Faq from "./pages/faq.jsx";
import Home from "./pages/home.js";
import Tos from "./pages/tos.jsx";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./component/footer.jsx";
import injectContext from "./store/appContext.js";
import Access from "./pages/access.jsx";
import CreatePost from "./pages/createpost.jsx";

const Layout = () => {
  return (
    <div className="layout">
      <WebNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/terms-of-service" element={<Tos />} />
        <Route exact path="/about-me" element={<About />} />
        <Route exact path="/access" element={<Access />} />
        <Route exact path="/create-post" element={<CreatePost/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default injectContext(Layout);

import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer row text-center">
      <div className="links">
        <h2>Links</h2>
        <div className="d-flex row morelinks">
          <span id="sfaq">
            <Link to="/faq">F.A.Q.</Link>
          </span>
          <span id="scontact">
            <Link to="/contact">Contact Us</Link>
          </span>
          <span id="sterms">
            <Link to="/terms-of-service">Terms of Service</Link>
          </span>
          <span id="sabout">
            <Link to="/about-me">About Me</Link>
          </span>
        </div>
      </div>
      <div className="disclaimer">
        <span id="disclaimer-title">Disclaimer</span>
        <div>
          <span id="disclaimer-text">
            World of Warcraft and Blizzard Entertainment are registered
            trademarks of Blizzard Entertainment, Inc in the U.S. and/or other
            countries. All World of Warcraft art, images, and lore are the sole
            property of Blizzard Entertainment, Inc. and have been reproduced
            here in an effort to assist the World of Warcraft player community.
            All other trademarks are the property of their respective owners.
            WoW Trade is a fan site and it will behave as such.
          </span>
        </div>
      </div>
    </div>
  );
}

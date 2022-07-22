import { Discord, Github, Twitter } from "react-bootstrap-icons";
import React, { useState } from "react";

function IconDiv() {
  return (
    <div className="side-container">
      <div>
        <h2>
          If you have any questions, suggestions or anything to say, send me an
          email at{" "}
          <a style={{ textDecoration: "none" }}>samueldjekki@gmail.com</a>
        </h2>
      </div>
      <div className="text-party" onClick={() => setIcon(!icon)}>
        Follow me on my socials if you'd like, or send me a message there!
      </div>

      <div className="icon-party">
        <a
          className="a1"
          href="https://discordapp.com/users/258830033026547713"
        >
          <Discord style={{ textDecoration: "none" }} />
        </a>
        <a className="a2" href="https://twitter.com/Zamu_wow">
          <Twitter />
        </a>
        <a className="a3" href="https://github.com/samu1243">
          <Github />
        </a>
      </div>
    </div>
  );
}

export default IconDiv;

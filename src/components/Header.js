import React from "react";
import Trollface from "../images/troll-face.png";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img className="troll-face" src={Trollface} alt="troll face" />
        <h1 className="header-big">Meme Generator</h1>
      </div>
      <h5 className="header-small">React Course - Project 3</h5>
    </header>
  );
}

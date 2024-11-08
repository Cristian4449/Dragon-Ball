import React from "react";

import "./Header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div id="navbar">
      <img
        id="fondo"
        src="https://i.pinimg.com/originals/21/ca/7e/21ca7ea955f494d983bec549484c6054.png"
        alt=""
      />
      <h1 id="titulo">Personajes</h1>
      <NavBar />
    </div>
  );
};

export default Header;

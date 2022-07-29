import React from "react";
import Logo from "../iconosol.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="logoHenry">
      <img className="logo" src={Logo} alt="not found"></img>
      <p className="textClima">CLIMA</p>
      <p className="text1">.IO</p>
      <div className="separadorBarra">{<SearchBar onSearch={onSearch} />}</div>
    </div>
  );
}

export default Nav;

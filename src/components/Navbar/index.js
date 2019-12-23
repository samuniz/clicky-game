import React from "react";
import "./style.css";

function Navbar(props) {
  return (
      <nav className="navbar">
          <p className="navbar-brand">Clicky Game</p>
          <span className="navbar-text">
          Score: {props.score} | Top Score
          </span> 
      </nav>
  
  );
}

export default Navbar;

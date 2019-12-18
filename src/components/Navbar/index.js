import React from "react";
import "./style.css";

function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <p className="navbar-brand">Clicky Game</p>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        You guessed ...
      </li>
    </ul>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item">
      Score 0 | 
      </li>
      <li className="nav-item">
        Top Score 12
      </li>
    </ul>
  </div>      
          
      </nav>
  
  );
}

export default Navbar;

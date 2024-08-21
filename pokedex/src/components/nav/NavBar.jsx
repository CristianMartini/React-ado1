import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="https://cdn.icon-icons.com/icons2/851/PNG/512/Pokedex_tool_icon-icons.com_67529.png" alt="" height={"40px"} width={"40px"} />
       
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Mais Pokemons</a></li>
       
      </ul>
      <div className="navbar-cta">
        <a href="#signup" className="btn-primary">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;

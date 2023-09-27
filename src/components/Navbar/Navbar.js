import React from "react";
import "./Navbar.scss";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

export function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-apps">
        <a href="https://github.com/felipevees">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/juan-velasquez-escobar-a9a74123b/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="Navbar-sections">
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#portfolio">Portafolio</a>
        <a href="/#contactar">Contactar</a>
      </div>
    </div>
  );
}

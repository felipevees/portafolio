import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import CV from "../../assets/files/CV.pdf";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function Navbar() {
  const [isButtonVisible, setButtonVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setButtonVisibility(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`Navbar navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}
    >
      <div className="Navbar-apps ">
        <a href="https://github.com/felipevees">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/juan-velasquez-escobar-a9a74123b/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href={CV} download>
          <h1 style={{ margin: "0", padding: "0" }}>CV</h1>
        </a>
        {isButtonVisible && (
          <button
            className="navbar toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
      </div>
      <div
        className={`Navbar-sections ${isButtonVisible && " navbar-collapse"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#portfolio">
              Portafolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#contactar">
              Contactar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

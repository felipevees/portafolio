import React, { useState, useEffect, useContext } from "react";
import "./Navbar.scss";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import CV from "../../assets/files/CVESPAÑOL.pdf";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LanguageContext from "../../context/LanguageContext";

export function Navbar() {
  const [isButtonVisible, setButtonVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { language } = useContext(LanguageContext);

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
        <a href="https://www.linkedin.com/in/felipe-velasquez-escobar-a9a74123b/">
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
        className={`Navbar-sections ${
          isButtonVisible && "collapse navbar-collapse"
        }`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#home">
              {language && language == "ES"
                ? "Inicio"
                : language == "EN"
                ? "Home"
                : "Inicio"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#about">
              {language && language == "ES"
                ? "Sobre mi"
                : language == "EN"
                ? "About me"
                : "Sobre mi"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#skills">
              {language && language == "ES"
                ? "Habilidades"
                : language == "EN"
                ? "Skills"
                : "Habilidades"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#portfolio">
              {language && language == "ES"
                ? "Portafolio"
                : language == "EN"
                ? "Portfolio"
                : "Portafolio"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/#contactar">
              {language && language == "ES"
                ? "Contactar"
                : language == "EN"
                ? "Reach out"
                : "Contactar"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React, { useContext } from "react";
import "./About.scss";
import person from "../../assets/img/persona.jpg";
import wave2 from "../../assets/img/image9.png";

import LanguageContext from "../../context/LanguageContext";

export function About() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="About" id="about">
      <div className="About__top">
        <img src={wave2} alt="wave" />
      </div>
      <div className="About__container">
        <div className="About__content">
          <div className="About__div1">
            <h1 className="fs-1 ">
              {language && language == "ES"
                ? "SOBRE MI"
                : language == "EN"
                ? "ABOUT ME"
                : "Sobre mi"}
            </h1>
            <p className="fs-5">
              {language && language == "ES" ? ES : language == "EN" ? EN : ES}
            </p>
          </div>
          <div className="About__div2">
            <div>
              <img src={person} alt="person" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const EN =
  "Frontend Developer with experience in JavaScript, React, Django, and REST API consumption. I have knowledge in developing responsive designs using tools like Sass, Bootstrap, Semantic UI, and MUI. I use Git and GitHub for efficient version control. I am currently focusing on strengthening my knowledge in Clean Architecture, Redux, and TypeScript. I am passionate about technology, programming and continuous learning.";
const ES =
  "Desarrollador Frontend con experiencia en JavaScript, React, Django y consumo de APIs REST. Poseo conocimientos en el desarrollo de diseños responsivos utilizando herramientas como Sass, Bootstrap, Semantic UI y MUI. Utilizo Git y GitHub para un control de versiones eficiente. Me estoy enfocando en fortalecer mis conocimientos en Clean Architecture, Redux y TypeScript. Me apasiona la tecnologia, la programacion y el aprendizaje constante.";

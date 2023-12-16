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
            <h1>
              {language && language == "ES"
                ? "Sobre mi"
                : language == "EN"
                ? "About me"
                : "Sobre mi"}
            </h1>
            <p>
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
  "I'm a junior developer who's passionate about technology and programming. I'm really good at building responsive and useful websites. I'm excited about working in a team where I can contribute my skills and learn new things, acquiring new skills to keep growing as a professional.";
const ES =
  "Soy un programador junior apasionado por la tecnologia y la programación. Soy bueno creando paginas web responsivas y utiles. Me emociona trabajar en un equipo en el cual pueda aportar mis conocimientos y aprender nuevas cosas y habilidades para crecer como profesional.";

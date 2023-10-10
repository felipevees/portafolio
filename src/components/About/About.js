import React from "react";
import "./About.scss";
import person from "../../assets/img/persona.jpg";
import wave2 from "../../assets/img/image3.png";

export function About() {
  return (
    <div className="About" id="about">
      <div className="About__top">
        <img src={wave2} alt="wave" />
      </div>
      <div className="About__container">
        <div className="About__content">
          <div className="About__div1">
            <h1>Sobre mi</h1>
            <p>
              Soy un programador junior apasionado por la tecnologia y la
              programación. Soy bueno creando paginas web responsivas y utiles.
              Me emociona trabajar en un equipo en el cual pueda aportar mis
              conocimientos y aprender nuevas cosas y habilidades para crecer
              como profesional.
            </p>
          </div>
          <div className="About__separator"></div>
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

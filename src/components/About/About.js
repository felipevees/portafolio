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
              Soy una persona apasionada por la tecnología y la programación. Mi
              objetivo principal es adquirir conocimientos y habilidades en
              todas las áreas relacionadas con la programación, con el fin de
              convertirme en un profesional versátil y competente.
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

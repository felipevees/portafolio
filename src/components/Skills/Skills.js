import React, { useContext } from "react";
import "./Skills.scss";
import LanguageContext from "../../context/LanguageContext";

import html from "../../assets/icons/html-vanilla.png";
import scss from "../../assets/icons/scss.png";
import react from "../../assets/icons/react-vanilla.png";
import redux from "../../assets/icons/redux.png";
import typescript from "../../assets/icons/typescript.png";
import bootstrap from "../../assets/icons/bootstrap.png";
import django from "../../assets/icons/django.png";
import sql from "../../assets/icons/sql.png";
import git from "../../assets/icons/git.png";
import javascript from "../../assets/icons/javascript.png";

export function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="Skills" id="skills">
      <div className="Skills__container">
        <div className="Skills__content">
          <div>
            <h1 style={{ fontSize: "45px", marginBottom: "20px" }}>
              {language && language == "ES"
                ? "Habilidades"
                : language == "EN"
                ? "Skills"
                : "Habilidades"}
            </h1>
          </div>
          <div className="Skills__skills">
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={react} alt="react" />
              </div>
              <div className="Skills__card__skill">
                <h1>React</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={redux} alt="react" />
              </div>
              <div className="Skills__card__skill">
                <h1>Redux</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img
                  style={{ borderRadius: "12px" }}
                  src={javascript}
                  alt="javascript"
                />
              </div>
              <div className="Skills__card__skill">
                <h1>Javascript</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img
                  style={{ borderRadius: "12px" }}
                  src={typescript}
                  alt="javascript"
                />
              </div>
              <div className="Skills__card__skill">
                <h1>Typescript</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img className="django" src={django} alt="django" />
              </div>
              <div className="Skills__card__skill">
                <h1>Django</h1>
              </div>
            </div>

            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={html} alt="html" />
              </div>
              <div className="Skills__card__skill">
                <h1>HTML</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={scss} alt="html" />
              </div>
              <div className="Skills__card__skill">
                <h1>SASS</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={sql} alt="sql" />
              </div>
              <div className="Skills__card__skill">
                <h1>SQL</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={git} alt="git" />
              </div>
              <div className="Skills__card__skill">
                <h1>Git</h1>
              </div>
            </div>
            <div className="Skills__card">
              <div className="Skills__card__image">
                <img src={bootstrap} alt="git" />
              </div>
              <div className="Skills__card__skill">
                <h1>Bootstrap</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

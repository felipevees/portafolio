import React from "react";
import "./Skills.scss";
import html from "../../assets/icons/html-vanilla.png";
import react from "../../assets/icons/react-vanilla.png";
import django from "../../assets/icons/django.png";
import sql from "../../assets/icons/sql.png";
import javascript from "../../assets/icons/javascript.png";
import github from "../../assets/icons/github.png";

export function Skills() {
  return (
    <div className="Skills" id="skills">
      <div className="Skills__container">
        <div className="Skills__content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "45px", marginBottom: "20px" }}>Skills</h1>
            <h1>Entry level</h1>
          </div>
          <div className="Skills__skills">
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
                <img src={react} alt="react" />
              </div>
              <div className="Skills__card__skill">
                <h1>React</h1>
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
                <img src={html} alt="html" />
              </div>
              <div className="Skills__card__skill">
                <h1>HTML y CSS</h1>
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
                <img src={github} alt="git" />
              </div>
              <div className="Skills__card__skill">
                <h1>Git y GitHub</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

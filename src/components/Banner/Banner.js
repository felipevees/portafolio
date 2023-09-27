import React from "react";
import "./Banner.scss";
import reactLogo from "../../assets/icons/react.png";
import django from "../../assets/icons/django.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";

export function Banner() {
  return (
    <div className="Banner" id="home">
      <div className="Banner__div">
        <h1>
          Juan Felipe
          <br />
          Velasquez Escobar
        </h1>
        <p>Web Developer</p>
      </div>
      <div>
        <div className="container">
          <div className="box1">
            <div className="box1__content">
              <div>
                <img src={reactLogo} alt="react logo" />
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="box2__content">
              <div>
                <img className="django" src={django} alt="django" />
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="box3__content">
              <div>
                <img src={html} alt="html" />
              </div>
            </div>
          </div>
          <div className="box4">
            <div className="box4__content">
              <div>
                <img src={css} alt="css" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

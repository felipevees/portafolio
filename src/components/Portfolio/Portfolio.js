import React, { useContext } from "react";
import "./Portfolio.scss";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";

import tecnocredito from "../../assets/img/tecnocredito/home.PNG";
import icard from "../../assets/img/icard/client/home.PNG";
import recipe from "../../assets/img/recipe/home1.PNG";

export function Portfolio() {
  const navigate = useNavigate();

  const { language } = useContext(LanguageContext);

  return (
    <div className="Portfolio" id="portfolio">
      <div className="Portfolio__container">
        <div className="Portfolio__content">
          <h1>
            {language && language == "ES"
              ? "Proyectos recientes"
              : language == "EN"
              ? "Recent projects"
              : "Proyectos recientes"}
          </h1>

          <div className="Portfolio__content__box">
            <div className="Portfolio__content__box__card1">
              <span>Tecnocredito</span>
              <figure>
                <img src={tecnocredito} alt="tecnocredito" />
                <div className="Portfolio__content__box__card1__capa">
                  <h1>Tecnocredito</h1>
                  <button onClick={() => navigate("/tecnocredito")}>
                    {language && language == "ES"
                      ? "Detalles"
                      : language == "EN"
                      ? "Details"
                      : "Detalles"}
                  </button>
                </div>
              </figure>
            </div>

            <div className="Portfolio__content__box__card2">
              <span>Recipe app</span>
              <figure>
                <img src={recipe} alt="recipe" />
                <div className="Portfolio__content__box__card2__capa">
                  <h1>Recipe app</h1>
                  <button onClick={() => navigate("/recipeapp")}>
                    {language && language == "ES"
                      ? "Detalles"
                      : language == "EN"
                      ? "Details"
                      : "Detalles"}
                  </button>
                </div>
              </figure>
            </div>
            <div className="Portfolio__content__box__card3">
              <span>icard</span>
              <figure>
                <img src={icard} alt="icard" />
                <div className="Portfolio__content__box__card3__capa">
                  <h1>icard</h1>
                  <button onClick={() => navigate("/icard")}>
                    {language && language == "ES"
                      ? "Detalles"
                      : language == "EN"
                      ? "Details"
                      : "Detalles"}
                  </button>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

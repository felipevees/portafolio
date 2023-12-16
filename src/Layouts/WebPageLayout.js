import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.scss";
import LanguageContext from "../context/LanguageContext";

export function WebPageLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { language } = useContext(LanguageContext);

  const code = () => {
    if (location.pathname === "/recipeapp") {
      window.location.href = "https://github.com/felipevees/recipe_app";
    } else if (location.pathname === "/tecnocredito") {
      window.location.href = "https://github.com/felipevees/tecno-punto";
    } else if (location.pathname === "/icard") {
      window.location.href = "https://github.com/felipevees/iCard";
    }
  };

  const nextProjectButton1 = () => {
    if (location.pathname === "/recipeapp") {
      navigate("/icard");
    } else if (location.pathname === "/tecnocredito") {
      navigate("/recipeapp");
    } else if (location.pathname === "/icard") {
      navigate("/recipeapp");
    }
  };
  const nextProjectButton2 = () => {
    if (location.pathname === "/recipeapp") {
      navigate("/tecnocredito");
    } else if (location.pathname === "/tecnocredito") {
      navigate("/icard");
    } else if (location.pathname === "/icard") {
      navigate("/tecnocredito");
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between m-5">
        <div>
          <button onClick={code} type="button" className="btn">
            {language && language == "ES"
              ? "Codigo"
              : language == "EN"
              ? "Code"
              : "Codigo"}
          </button>
        </div>

        <div>
          <button
            onClick={() => navigate("/#portfolio")}
            type="button"
            className="btn"
          >
            {language && language == "ES"
              ? "Volver"
              : language == "EN"
              ? "Return"
              : "Volver"}
          </button>
        </div>
      </div>
      {children}
      <div className="d-flex flex-row-reverse fixed-bottom m-5">
        <div className="ms-3">
          <button onClick={nextProjectButton2} type="button" className="btn">
            {location.pathname === "/tecnocredito"
              ? "icard"
              : location.pathname === "/recipeapp"
              ? "Tecnocredito"
              : location.pathname === "/icard"
              ? "Tecnocredito"
              : ""}
          </button>
        </div>
        <div>
          <button onClick={nextProjectButton1} type="button" className="btn">
            {location.pathname === "/tecnocredito"
              ? "Recipe app"
              : location.pathname === "/recipeapp"
              ? "icard"
              : location.pathname === "/icard"
              ? "Recipe app"
              : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

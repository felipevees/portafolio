import React from "react";
import error404 from "../assets/img/error-404.png";
import "../App.scss";

export function Error404() {
  return (
    <div className="Error404">
      <img src={error404} alt="error 404" />
    </div>
  );
}

import React from "react";
import "./Circular.scss";

export function Circular({ percentage }) {
  return (
    <div className="Circular">
      <svg x="0px" y="0px" viewBox="0 0 200 200">
        <circle
          className="Circular__progress-line"
          cx="100"
          cy="100"
          r="80"
        ></circle>
        <circle
          className={`Circular__path ${percentage}`}
          cx="100"
          cy="100"
          r="80"
        ></circle>
      </svg>
      <div className="Circular__percentage">
        {percentage === "django"
          ? "75%"
          : percentage === "react"
          ? "85%"
          : percentage === "htmlcss"
          ? "85%"
          : percentage === "sql"
          ? "75%"
          : percentage === "git"
          ? "80%"
          : percentage === "javascript"
          ? "80%"
          : "0"}
      </div>
    </div>
  );
}

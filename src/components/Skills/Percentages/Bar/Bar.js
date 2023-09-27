import React from "react";
import "./Bar.scss";

export function Bar({ percentage }) {
  return (
    <div className="Bar">
      <div className={`Bar__progress-line ${percentage}`}>
        <span></span>
      </div>
    </div>
  );
}

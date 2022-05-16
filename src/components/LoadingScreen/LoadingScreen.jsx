import React from "react";
import "./LoadingScreen.sass";

export default function LoadingScreen(props) {
  return (
    <div className="loading-wrapper">
      <div className="loading-text">Loading</div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}

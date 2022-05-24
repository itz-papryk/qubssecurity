import React, { useState, useEffect } from "react";
import "./App.sass";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

export default function App() {
  const [loaded, isLoading] = useState(false);
  return (
    <div className="wrapper">
      {!loaded && <LoadingScreen isLoading={isLoading} />}
    </div>
  );
}

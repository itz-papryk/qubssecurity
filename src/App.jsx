import React, { useState } from "react";
import "./App.sass";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import MainScreen from "./components/MainScreen/MainScreen";

export default function App() {
  const [loaded, isLoading] = useState(false);
  return (
    <div className="wrapper">
      {!loaded ? <LoadingScreen isLoading={isLoading} /> : <MainScreen />}
    </div>
  );
}

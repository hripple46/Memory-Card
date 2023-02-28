import "./App.css";
import React, { useState } from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <div className="cardContainer">
        <Card cardId="1" />
        <Card cardId="2" />
        <Card cardId="3" />
      </div>
    </div>
  );
}

export default App;

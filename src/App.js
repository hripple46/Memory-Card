import "./App.css";
import React, { useState } from "react";
import Card from "./Card";

function App() {
  let displayCards = () => {
    let arrayOfCards = [1, 2, 3, 4];
    let newArrayOfCards = arrayOfCards.map((index) => (
      <Card cardId={index} key={index} />
    ));
    return <div className="cardContainer">{newArrayOfCards}</div>;
  };

  return <div>{displayCards()}</div>;
}

export default App;

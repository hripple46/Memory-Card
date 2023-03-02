import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card() {
  let initialCards = [
    { id: 0, clicked: false },
    { id: 1, clicked: false },
    { id: 2, clicked: false },
  ];

  let [cards, setCards] = useState(initialCards);

  let updateClickedStatus = (e) => {
    console.log(cards);
    console.log(e.target.id);
    let newArray = [...cards];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(e.target.id)) {
        newArray[i].clicked = true;
      }
    }
    console.log(newArray);
    setCards(newArray);
  };

  return (
    <div>
      {cards.map((index) => (
        <div
          className="card"
          id={index.id}
          key={index.id}
          onClick={updateClickedStatus}
        />
      ))}
    </div>
  );
}

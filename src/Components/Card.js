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
    //console.log(cards);
    //console.log(e.target.id);
    let newArray = [...cards];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(e.target.id)) {
        newArray[i].clicked = true;
      }
    }
    //console.log(newArray);
    setCards(newArray);
    shuffleArray();
  };

  let shuffleArray = () => {
    let shuffledArray = [...cards];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    console.log(shuffledArray);
    setCards(shuffledArray);
  };

  return (
    <div>
      {cards.map((index) => (
        <div
          className="card"
          id={index.id}
          key={index.id}
          onClick={updateClickedStatus}
        >
          {`${index.id}`}
          <br />
          {"Clicked : " + `${index.clicked}`}
        </div>
      ))}
    </div>
  );
}

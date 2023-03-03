import React, { useState, useEffect } from "react";
import "./Card.css";
import Gameboard from "./Scoreboard";

export default function Card() {
  let initialCards = [
    { id: 0, clicked: false },
    { id: 1, clicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
    { id: 4, clicked: false },
  ];

  let [cards, setCards] = useState(initialCards);
  let [clickStatus, setClickStatus] = useState(0);

  let updateClickedStatus = (e) => {
    //console.log(cards);
    //console.log(e.target.id);
    let newArray = [...cards];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(e.target.id)) {
        console.log(newArray[i].clicked);
        //changing click state to update effect in Gameboard component
        if (!newArray[i].clicked) {
          setClickStatus(clickStatus + 1);
        } else {
          setClickStatus(0);
        }
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
      <Gameboard currentScore={clickStatus} />
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

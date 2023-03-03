import React, { useEffect, useState } from "react";
import "./Scoreboard.css";

export default function Gameboard(props) {
  let [highScore, setHighScore] = useState(0);

  let updateHighScore = () => {
    if (props.currentScore > highScore) {
      setHighScore(props.currentScore);
    }
  };

  return (
    <div className="scoreboard">
      {updateHighScore(props.currentScore)}
      <div id="currentScore">
        <h2>Current Score</h2>
        <h3>{props.currentScore}</h3>
      </div>
      <div id="highScore">
        <h2>High Score</h2>
        <h3>{highScore}</h3>
      </div>
    </div>
  );
}

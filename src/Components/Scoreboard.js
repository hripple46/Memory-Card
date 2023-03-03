import React, { useEffect, useState } from "react";

export default function Gameboard(props) {
  return (
    <div>
      <div id="currentScore">
        <h2>Current Score: </h2>
        <h3>{props.currentScore}</h3>
      </div>
      <div id="highScore">
        <h2>High Score: </h2>
        <h3>{props.highScore}</h3>
      </div>
    </div>
  );
}

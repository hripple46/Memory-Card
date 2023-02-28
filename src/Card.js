import React, { useState, useEffect } from "react";
import "./Card.css";

export default function Card(props) {
  let [clickedStatus, setClickedStatus] = useState("Not Clicked");

  let updateClickedStatus = () => {
    setClickedStatus("Clicked");
    console.log(props.cardId + " : " + clickedStatus);
  };

  return (
    <div className="card" id={props.cardId} onClick={updateClickedStatus}></div>
  );
}

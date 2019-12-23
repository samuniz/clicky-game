import React from "react"
import "./style.css";

function Score(props) {
  return (
    <ul>
      <li className="scoreTally">Score: {props.score}</li>
      <li>Top Score</li>
    </ul>
  );
}

export default Score;


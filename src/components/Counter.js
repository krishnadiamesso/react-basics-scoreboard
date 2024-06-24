import React from "react";
import PropTypes from "prop-types";

const Counter = ({ id, changeScore, score }) => {

  const decrementScore = (e) => {
    changeScore(id, 1);
  }

  const  incrementScore= (e) => {
    changeScore(id, -1);
  }

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={incrementScore}
      >-</button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={decrementScore}
      >+</button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired
};

export default Counter;

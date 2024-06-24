import React, { memo } from "react";
import Counter from "./Counter";
import Icon from "./Icon";
import PropTypes from "prop-types";

const Player = ({
                  changeScore,
                  removePlayer,
                  name,
                  score,
                  id,
                  isHighScore = false,
                }) => {

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        <Icon isHighScore={isHighScore} />
        {name}
      </span>

      <Counter score={score} changeScore={changeScore} id={id} />
    </div>);
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
};

Player.propTypes = {
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  isHighScore: PropTypes.bool.isRequired
};

export default memo(Player, playerPropsAreEqual);
// export default Player
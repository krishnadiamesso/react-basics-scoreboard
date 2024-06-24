import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);
  // const [nextPlayerId, setNextPlayerId] = useState(players.length + 1);
  const nextPlayerId = useRef(players.length + 1);

  const [highScore, setHighScore] = useState(0);


  const handleRemovePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  };

  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if ((player.id === id) && (player.score + delta >= 0)) {
          return { ...player, score: player.score + delta };
        }
        return player;
      }));
  };


  const addPlayer = (name) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId.current
      }
    ]);
    nextPlayerId.current += 1;

    // setNextPlayerId((prevId) => prevId + 1)
  };


  useEffect(() => {
    const scores = players.map(p => p.score);
    const maxScore = Math.max(...scores);
    setHighScore(maxScore);
  }, [players, highScore]);


  return (

    <div className="scoreboard">
      <Header players={players} />

      {/* Players list */}
      {players.map((player) => (
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          score={player.score}
          changeScore={handleScoreChange}
          isHighScore={player.score === highScore && highScore !== 0}
        />
      ))}
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  )
    ;
};

export default App;

import React, { useState, useEffect } from "react";

const Stopwatch = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(prevState => !prevState);
  };

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{elapsedTime}</span>
        <button onClick={handleClick}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Stopwatch;
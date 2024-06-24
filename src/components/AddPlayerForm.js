import React, { useState, useRef } from "react";

const AddPlayerForm = ({ addPlayer }) => {
  const [value, setValue] = useState("");
  const playerInput = useRef();

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(value);
    setValue("");
  };


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a player's name" value={value} onChange={handleValueChange}
               ref={playerInput} />
        <input type="submit" value="Add Player" />
      </form>
    </>
  );
};

export default AddPlayerForm;
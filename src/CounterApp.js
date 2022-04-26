import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //useState
  const [counter, setCounter] = useState(0);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  //handleAdd
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  //handleReset
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

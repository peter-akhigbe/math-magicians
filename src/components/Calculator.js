import React, { useState } from 'react';
import Buttons from './Buttons';
import DisplayResult from './DisplayResult';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (event) => {
    const buttonName = event.target.textContent;
    setState(calculate(state, buttonName));
  };

  const divStyles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const containerStyles = {
    width: 'max-content',
    backgroundColor: 'lightgray',
  };

  return (
    <div style={divStyles}>
      <h2>Let&apos;s do some math!</h2>
      <div style={containerStyles} className="container">
        <DisplayResult value={state.next || state.total || '0'} />
        <Buttons clickHandler={clickHandler} />
      </div>
    </div>
  );
};

export default Calculator;

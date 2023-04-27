import './Calculator.css';

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

  return (
    <div className="container">
      <DisplayResult value={state.next || state.total || '0'} />
      <Buttons clickHandler={clickHandler} />
    </div>
  );
};

export default Calculator;

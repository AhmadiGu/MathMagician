import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const buttonClick = (element) => {
    setState(calculate(state, element.target.textContent));
  };

  const { next } = state;
  const { total } = state;
  const { operation } = state;

  return (
    <div className="container">
      <div className="calculate-place">
        {total}
        {operation}
        {next}

      </div>
      <div className="functions-place">

        <div className="rows">
          <button type="button" onClick={buttonClick} className="btn-gray">AC</button>
          <button type="button" onClick={buttonClick} className="btn-gray">+/-</button>
          <button type="button" onClick={buttonClick} className="btn-gray">%</button>
          <button type="button" onClick={buttonClick} className="btn-orang">÷</button>
        </div>

        <div className="rows">
          <button type="button" onClick={buttonClick} className="btn-gray">7</button>
          <button type="button" onClick={buttonClick} className="btn-gray">8</button>
          <button type="button" onClick={buttonClick} className="btn-gray">9</button>
          <button type="button" onClick={buttonClick} className="btn-orang">x</button>
        </div>
        <div className="rows">
          <button type="button" onClick={buttonClick} className="btn-gray">4</button>
          <button type="button" onClick={buttonClick} className="btn-gray">5</button>
          <button type="button" onClick={buttonClick} className="btn-gray">6</button>
          <button type="button" onClick={buttonClick} className="btn-orang">-</button>
        </div>
        <div className="rows">
          <button type="button" onClick={buttonClick} className="btn-gray">1</button>
          <button type="button" onClick={buttonClick} className="btn-gray">2</button>
          <button type="button" onClick={buttonClick} className="btn-gray">3</button>
          <button type="button" onClick={buttonClick} className="btn-orang">+</button>
        </div>
        <div className="rows">
          <button type="button" onClick={buttonClick} className="btn-gray zero">0</button>
          <button type="button" onClick={buttonClick} className="btn-gray">.</button>
          <button type="button" onClick={buttonClick} className="btn-orang">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;

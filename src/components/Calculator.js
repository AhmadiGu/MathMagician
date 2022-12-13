import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculate-place">0</div>
        <div className="functions-place">

          <div className="rows">
            <button type="button" className="btn-gray">AC</button>
            <button type="button" className="btn-gray">+/-</button>
            <button type="button" className="btn-gray">%</button>
            <button type="button" className="btn-orang">÷</button>
          </div>

          <div className="rows">
            <button type="button" className="btn-gray">7</button>
            <button type="button" className="btn-gray">8</button>
            <button type="button" className="btn-gray">9</button>
            <button type="button" className="btn-orang">x</button>
          </div>
          <div className="rows">
            <button type="button" className="btn-gray">4</button>
            <button type="button" className="btn-gray">5</button>
            <button type="button" className="btn-gray">6</button>
            <button type="button" className="btn-orang">-</button>
          </div>
          <div className="rows">
            <button type="button" className="btn-gray">1</button>
            <button type="button" className="btn-gray">2</button>
            <button type="button" className="btn-gray">3</button>
            <button type="button" className="btn-orang">+</button>
          </div>
          <div className="rows">
            <button type="button" className="btn-gray zero">0</button>
            <button type="button" className="btn-gray">.</button>
            <button type="button" className="btn-orang">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;

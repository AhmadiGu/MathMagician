import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, operation: null, next: null };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(element) {
    this.setState((state) => calculate(state, element.target.textContent));
  }

  render() {
    const { next } = this.state;
    const { total } = this.state;
    const { operation } = this.state;

    return (
      <div className="container">
        <div className="calculate-place">
          {total}
          {operation}
          {next}

        </div>
        <div className="functions-place">

          <div className="rows">
            <button type="button" onClick={this.buttonClick} className="btn-gray">AC</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">+/-</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">%</button>
            <button type="button" onClick={this.buttonClick} className="btn-orang">÷</button>
          </div>

          <div className="rows">
            <button type="button" onClick={this.buttonClick} className="btn-gray">7</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">8</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">9</button>
            <button type="button" onClick={this.buttonClick} className="btn-orang">x</button>
          </div>
          <div className="rows">
            <button type="button" onClick={this.buttonClick} className="btn-gray">4</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">5</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">6</button>
            <button type="button" onClick={this.buttonClick} className="btn-orang">-</button>
          </div>
          <div className="rows">
            <button type="button" onClick={this.buttonClick} className="btn-gray">1</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">2</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">3</button>
            <button type="button" onClick={this.buttonClick} className="btn-orang">+</button>
          </div>
          <div className="rows">
            <button type="button" onClick={this.buttonClick} className="btn-gray zero">0</button>
            <button type="button" onClick={this.buttonClick} className="btn-gray">.</button>
            <button type="button" onClick={this.buttonClick} className="btn-orang">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;

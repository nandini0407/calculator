import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      operator: "",
      result: ""
    };

    this.update = this.update.bind(this);
    this.compute.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  compute() {
    let result;
    switch (this.state.operator) {
      case "add":
        result = this.add();
        break;
      case "subtract":
        result = this.subtract();
        break;
      case "multiply":
        result = this.multiply();
        break;
      case "divide":
        result = this.divide();
        break;
    }
    this.reset(result);
  }

  reset(result) {
    this.setState({
      first: "",
      second: "",
      operator: "",
      result: result
    });
  }

  add() {
    return String(Number(this.state.first) + Number(this.state.second));
  }

  subtract() {
    return String(Number(this.state.first) - Number(this.state.second));
  }

  multiply() {
    return String(Number(this.state.first) - Number(this.state.second));
  }

  divide() {
    if (this.state.second === "0") {
      return "Zero Division Error!";
    } else {
      return String(Number(this.state.first) / Number(this.state.second));
    }
  }

  render() {
    return (
      <div className="calculator">
        <div className="text-input">
          <input
            type="text"
            className="text-box"
            placeholder="First"
            onChange={ this.update('first') }
            />
          <input
            type="text"
            className="text-box"
            placeholder="Second"
            onChange={ this.update('second') }
            />
        </div>
        <div className="radio-buttons">
          <label>
            Add
            <input
              type="radio"
              name="operation"
              value="add"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'add'}
              />
          </label>
          <label>
            Subtract
            <input
              type="radio"
              name="operation"
              value="subtract"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'subtract'}
              />
          </label>
          <label>
            Multiply
            <input
              type="radio"
              name="operation"
              value="multiply"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'multiply'}
              />
          </label>
          <label>
            Divide
            <input
              type="radio"
              name="operation"
              value="divide"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'divide'}
              />
          </label>
        </div>
        <div className="compute-result">
          <button
            onClick={ this.compute.bind(this) }
            className="compute-button"
            >Compute</button>
          <div className="result-1">
            Your result is :
          </div>
          <div className="result-2">
            { this.state.result }
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

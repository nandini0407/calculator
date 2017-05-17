import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
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
    return String(Number(this.state.first) * Number(this.state.second));
  }

  divide() {
    if (this.state.second === "0") {
      return "Zero Division Error!";
    } else {
      return String((Number(this.state.first) / Number(this.state.second)).toFixed(2));
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
            value={ this.state.first }
            onChange={ this.update('first') }
            />
          <input
            type="text"
            className="text-box"
            placeholder="Second"
            value={ this.state.second }
            onChange={ this.update('second') }
            />
        </div>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="operation"
              value="add"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'add'}
              />
            Add
          </label>
          <label>
            <input
              type="radio"
              name="operation"
              value="subtract"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'subtract'}
              />
            Subtract
          </label>
          <label>
            <input
              type="radio"
              name="operation"
              value="multiply"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'multiply'}
              />
            Multiply
          </label>
          <label>
            <input
              type="radio"
              name="operation"
              value="divide"
              onChange={ this.update('operator') }
              checked={ this.state.operator === 'divide'}
              />
            Divide
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

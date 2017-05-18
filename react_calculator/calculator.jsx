import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      operator: "",
    };

    this.clearScreen = this.clearScreen.bind(this);
    this.evaluateDigit = this.evaluateDigit.bind(this);
    this.evaluateDecimal = this.evaluateDecimal.bind(this);
    this.evaluateOperator = this.evaluateOperator.bind(this);
    this.evaluateEquals = this.evaluateEquals.bind(this);
  }

  handleOperator(val) {
    switch (val) {
      case 4:
        return "+";
      case 3:
        return "-";
      case 2:
        return "*";
      case 1:
        return "/";
    }
  }

  performOperation() {
    let result;
    switch (this.state.operator) {
      case "+":
        result = this.add();
        break;
      case "-":
        result = this.subtract();
        break;
      case "*":
        result = this.multiply();
        break;
      case "/":
        result = this.divide();
        break;
    }
    this.setState({
      first: result,
      second: "",
      operator: "",
    });
  }

  evaluateEquals(e) {
    e.preventDefault();
    if (this.state.second === "") {
      this.setState({
        operator: ""
      });
    } else {
      this.performOperation();
    }
  }

  evaluateDecimal(e) {
    e.preventDefault();
    if (this.state.operator === "") {
      this.setState({
        first: this.state.first + "."
      });
    } else {
      this.setState({
        second: this.state.second + "."
      });
    }
  }

  evaluateDigit(e) {
    e.preventDefault();
    if (this.state.first === "Zero Division!") {
      this.setState({
        first: e.target.value,
        second: "",
        operator: ""
       });
    } else if (this.state.operator === "") {
      this.setState({ first: this.state.first + e.target.value });
    } else {
      this.setState({ second: this.state.second + e.target.value });
    }
  }

  evaluateOperator(e) {
    e.preventDefault();
    let operator = this.handleOperator(e.target.value);
    if (this.state.operator === "") {
      this.setState({ operator: operator });
    } else {
      this.performOperation();
      this.setState({
        operator: operator
      });
    }
  }

  clearScreen(e) {
    e.preventDefault();
    this.setState({
      first: "",
      second: "",
      operator: ""
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
      return "Zero Division!";
    } else {
      return String((Number(this.state.first) / Number(this.state.second)).toFixed(2));
    }
  }

  // values in the li elements corresond to the follwing :
  // 1: divide, 2: multiply, 3: subtract, 4: add, 5: equals(=), 6: decimal point
  render() {
    let val = (this.state.second === "") ? this.state.first : this.state.second;
    return (
      <div className="calculator">
        <div className="screen-wrapper">
          <div className="screen">{ val }</div>
        </div>
        <div className="keyPad">
          <ul className="calc-btn-row">
            <li key={1} className="btn lst number" onClick={ this.evaluateDigit } value="7" >7</li>
            <li key={2} className="btn lst number" onClick={ this.evaluateDigit } value="8" >8</li>
            <li key={3} className="btn lst number" onClick={ this.evaluateDigit } value="9" >9</li>
            <li key={4} className="btn lst operator" onClick={ this.evaluateOperator } value="1" >/</li>
          </ul>
          <ul className="calc-btn-row">
            <li key={1} className="btn lst number" onClick={ this.evaluateDigit } value="4" >4</li>
            <li key={2} className="btn lst number" onClick={ this.evaluateDigit } value="5" >5</li>
            <li key={3} className="btn lst number" onClick={ this.evaluateDigit } value="6" >6</li>
            <li key={4} className="btn lst operator" onClick={ this.evaluateOperator } value="2" >*</li>
          </ul>
          <ul className="calc-btn-row">
            <li key={1} className="btn lst number" onClick={ this.evaluateDigit } value="1" >1</li>
            <li key={2} className="btn lst number" onClick={ this.evaluateDigit } value="2" >2</li>
            <li key={3} className="btn lst number" onClick={ this.evaluateDigit } value="3" >3</li>
            <li key={4} className="btn lst operator" onClick={ this.evaluateOperator } value="3" >-</li>
          </ul>
          <ul className="last-row">
            <ul key={1} className="left-last-row lst">
              <li key={1} className="btn clear" onClick={ this.clearScreen } value="C" >C</li>
              <li key={2} className="btn decimal" onClick={ this.evaluateDecimal } value="6" >.</li>
            </ul>
            <li key={2} className="btn lst number" onClick={ this.evaluateDigit } value="0" >0</li>
            <li key={3} className="btn lst operator" onClick={ this.evaluateEquals } value="5" >=</li>
            <li key={4} className="btn lst operator" onClick={ this.evaluateOperator } value="4" >+</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calculator;

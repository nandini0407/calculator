
class Compute {
  constructor() {
    this.first = "";
    this.operator = "";
    this.second = "";
  }

  handleEquals() {
    if (this.second === "") {
      this.operator = "";
      return this.first;
    } else {
      this.performOperation();
    }
  }

  performOperation() {
    switch (this.operator) {
      case '+':
        this.add();
        break;
      case '-':
        this.subtract();
        break;
      case '*':
        this.multiply();
        break;
      case '/':
        this.divide();
        break;
    }
    this.second = "";
    this.operator = "";
  }

  evaluateDigit(e) {
    e.preventDefault();
    if (this.operator === "") {
      this.first += e.target.value;
      this.renderResult(this.first);
    } else {
      this.second += e.target.value;
      this.renderResult(this.second);
    }
  }

  evaluateOperator(e) {
    e.preventDefault();
    if (e.target.value === "=") {
      this.handleEquals();
    } else if (this.operator === "") {
      this.operator = e.target.value;
    } else {
      this.performOperation();
      this.operator = e.target.value;
    }
    this.renderResult(this.first);
  }

  add() {
    this.first = String(Number(this.first) + Number(this.second));
  }

  subtract() {
    this.first = String(Number(this.first) - Number(this.second));
  }

  multiply() {
    this.first = String(Number(this.first) * Number(this.second));
  }

  divide() {
    if (this.second === "0") {
      this.first = "Zero Division!";
    } else {
      this.first = String(Number(this.first) / Number(this.second));
    }
  }

  clearScreen() {
    this.first = "";
    this.operator = "";
    this.second = "";
    this.renderResult();
  }

  renderResult(num) {
    let screen = document.getElementById("screen");
    screen.textContent = num;
  }
}

export default Compute;

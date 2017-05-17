// export const computeCalc = (e) => {
//   e.preventDefault();
//   let first = Number(e.target.children[0].children[0].children[0].value);
//   let second = Number(e.target.children[0].children[1].children[0].value);
//   let radioNodes = e.target.children[1].children;
//   let operator;
//   for(let i=0; i<radioNodes.length; i++) {
//     if (radioNodes[i].children[0].checked) {
//       operator = radioNodes[i].children[0].value;
//     }
//   }
//   let result = 0;
//   switch (operator) {
//     case '+':
//       result = add(first, second);
//       break;
//     case '-':
//       result = subtract(first, second);
//       break;
//     case '*':
//       result = multiply(first, second);
//       break;
//     case '/':
//       result = divide(first, second);
//       break;
//   }
//   renderResult(result);
// };
//
// const add = (first, second) => {
//   return first + second;
// };
//
// const subtract = (first, second) => {
//   return first - second;
// };
//
// const multiply = (first, second) => {
//   return first * second;
// };
//
// const divide = (first, second) => {
//   if (second === 0) {
//     return "Zero division! Try again";
//   } else {
//     return first / second;
//   }
// };
//
// const renderResult = (result) => {
//   let res = document.getElementById("result");
//   res.textContent = result;
// };

class Compute {
  constructor() {
    this.first = "";
    this.operator = "";
    this.second = "";
  }

  evaluateDigit(e) {
    e.preventDefault();
    if (this.operator === "") {
      this.first += e.target.value;
    } else if (this.operator === "=") {

    } else {
      this.second += e.target.value;
    }
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

  evaluateOperator(e) {
    e.preventDefault();
    console.log("operator");
    console.log(typeof e.target.value);
    if (e.target.value === "=") {
      this.handleEquals();
    } else if (this.operator === "") {
      this.operator = e.target.value;
    } else {
      this.performOperation();
    }
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
}

export default Compute;

export const computeCalc = (e) => {
  e.preventDefault();
  let first = Number(e.target.children[0].children[0].children[0].value);
  let second = Number(e.target.children[0].children[1].children[0].value);
  let radioNodes = e.target.children[1].children;
  let operator;
  for(let i=0; i<radioNodes.length; i++) {
    if (radioNodes[i].children[0].checked) {
      operator = radioNodes[i].children[0].value;
    }
  }
  let result = 0;
  switch (operator) {
    case '+':
      result = add(first, second);
      break;
    case '-':
      result = subtract(first, second);
      break;
    case '*':
      result = multiply(first, second);
      break;
    case '/':
      result = divide(first, second);
      break;
  }
  renderResult(result);
};

const add = (first, second) => {
  return first + second;
};

const subtract = (first, second) => {
  return first - second;
};

const multiply = (first, second) => {
  return first * second;
};

const divide = (first, second) => {
  if (second === 0) {
    return "Zero division! Try again";
  } else {
    return first / second;
  }
};

const renderResult = (result) => {
  let res = document.getElementById("result");
  res.textContent = result;
};

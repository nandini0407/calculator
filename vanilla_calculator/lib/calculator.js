// import * as Utils from './compute';
import Compute from './compute';

document.addEventListener('DOMContentLoaded', () => {
  // var calcForm = document.getElementById('calc-form');
  // calcForm.addEventListener('submit', Utils.computeCalc);

  let numList = document.getElementsByClassName("number");
  let opList = document.getElementsByClassName("operator");
  let comp = new Compute();
  for(let i=0; i<numList.length; i++) {
    numList[i].addEventListener("click", comp.evaluateDigit);
  }
  for(let i=0; i<opList.length; i++) {
    opList[i].addEventListener("click", comp.evaluateOperator);
  }
});

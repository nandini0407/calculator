import * as Utils from './compute';

document.addEventListener('DOMContentLoaded', () => {
  var calcForm = document.getElementById('calc-form');
  calcForm.addEventListener('submit', Utils.computeCalc);
  
});

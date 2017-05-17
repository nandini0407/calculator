import Compute from './compute.js';

document.addEventListener('DOMContentLoaded', () => {
  var calcForm = document.getElementById("calc-form");
  calcForm.addEventListener('submit', Compute.compute);
});

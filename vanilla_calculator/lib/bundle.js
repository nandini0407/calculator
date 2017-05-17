/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Compute);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compute__ = __webpack_require__(0);
// import * as Utils from './compute';


document.addEventListener('DOMContentLoaded', () => {
  // var calcForm = document.getElementById('calc-form');
  // calcForm.addEventListener('submit', Utils.computeCalc);

  let numList = document.getElementsByClassName("number");
  let opList = document.getElementsByClassName("operator");
  let comp = new __WEBPACK_IMPORTED_MODULE_0__compute__["a" /* default */]();
  for(let i=0; i<numList.length; i++) {
    numList[i].addEventListener("click", comp.evaluateDigit);
  }
  for(let i=0; i<opList.length; i++) {
    opList[i].addEventListener("click", comp.evaluateOperator);
  }
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
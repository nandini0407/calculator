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

/* harmony default export */ __webpack_exports__["a"] = (Compute);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compute__ = __webpack_require__(0);


document.addEventListener('DOMContentLoaded', () => {
  let numList = document.getElementsByClassName("number");
  let opList = document.getElementsByClassName("operator");
  let clr = document.getElementsByClassName("clear")[0];
  let comp = new __WEBPACK_IMPORTED_MODULE_0__compute__["a" /* default */]();
  for(let i=0; i<numList.length; i++) {
    numList[i].addEventListener("click", comp.evaluateDigit.bind(comp));
  }
  for(let i=0; i<opList.length; i++) {
    opList[i].addEventListener("click", comp.evaluateOperator.bind(comp));
  }
  clr.addEventListener("click", comp.clearScreen.bind(comp));
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
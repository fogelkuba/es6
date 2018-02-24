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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('arrow functions');

document.addEventListener('DOMContentLoaded', function () {

  // const calc = (a = 2, b = 3) => {
  //     return a + b;
  // }
  //
  // console.log(calc());
  /* end */});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// console.log('class');
//
// document.addEventListener('DOMContentLoaded', ()=> {
//
//     class Person {
//         constructor(name, title){
//             this.name = name;
//             this.title = title;
//         }
//
//         displayData(){
//             console.log(`${this.name} is a great ${this.title}`)
//         }
//
//     }
//
//     let john = new Person('John', 'Dentist');
//     john.displayData();
//
// /* end */ })


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('const');

document.addEventListener('DOMContentLoaded', function () {

    // const car = 'honda';
    // car = 'bmw';

    // const car = ['honda', 'audi', 'nissan'];
    // console.log(car);
    // car.push('bmw');
    // console.log(car)

    // const car = {
    //     brand: 'bmw',
    //     model: 'm3',
    //     doors: 2,
    //     engine: '3.0l'
    // };
    // console.log(car);
    // car.brand = 'audi';
    // car.model = 'a4';
    // car.doors = 4;
    // car.engine = '4,2l'
    // console.log(car)

    /* end */});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('default paramater');

document.addEventListener('DOMContentLoaded', function () {

    // function cars(car1='BMW', car2="Audi"){
    //     console.log(car1, car2)
    // }
    // console.log('Car list:')
    // cars();
    // cars('Rover');

    /* end */});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('let & var');
document.addEventListener('DOMContentLoaded', function () {

    // const article = document.querySelector('article');
    //
    // for (let i = 1; i <= 10; i++) {
    //     var box = document.createElement('div');
    //     box.addEventListener('click', function(){
    //         console.log(`hello ${i}`)
    //     })
    //     article.appendChild(box);
    // }


    /* end */});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('scripts');

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('shorthand');

document.addEventListener('DOMContentLoaded', function () {

    var person = {};
    person.name = 'john';
    person.log = function () {
        console.log(undefined.name);
    };

    /* end */
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('spread operator');

document.addEventListener('DOMContentLoaded', function () {
  // 
  // var adults = ['John', 'Peter', 'Maria'];
  // var kids = ['Johnnie', 'Pablito', 'Mary'];
  // console.log(kids);
  // console.log(...kids);
  // var people = ['Juan', 'Williams', ...kids, ...adults];
  // console.log(people);
  // console.log(...people);
  //
  // var send = function(username, email, pass){ console.log("DATA SENT", username, email, pass) };
  // let fromBackend = ['Rico', 'rico@rico.com', 12456];
  // send(...fromBackend)
  //
  // var cars = [
  //     {brand: 'honda', doors: 4},
  //     {brand: 'bmw', doors: 2},
  // ];
  // var newCars = [
  //     {brand: 'audi', doors: 3},
  //     {brand: 'mercedes', doors: 4},
  // ];
  // cars.push(...newCars);
  // console.log(cars)

  /* end */});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('template literals');

document.addEventListener('DOMContentLoaded', function () {
    // let name = 'Jay';
    // let msg = `My name is ${name}`;
    // console.log(msg)
    //
    // let name2 = 'Jay';
    // let msg2  = `?      . . . . . . .     My name is ${name}            ?`;
    // console.log(msg2)

    // let name3 = function(){
    //     return 'Jay 3'
    // };
    // let msg2 = `who is the best? ${name3()} is!!1`;
    // console.log(msg2)

    /* end */});

/***/ })
/******/ ]);
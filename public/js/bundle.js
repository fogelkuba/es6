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
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('scripts');

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('spread operator');

document.addEventListener('DOMContentLoaded', function () {
    var _console, _console2;

    var adults = ['John', 'Peter', 'Maria'];
    var kids = ['Johnnie', 'Pablito', 'Mary'];
    console.log(kids);
    (_console = console).log.apply(_console, kids);
    var people = ['Juan', 'Williams'].concat(kids, adults);
    console.log(people);
    (_console2 = console).log.apply(_console2, _toConsumableArray(people));

    var send = function send(username, email, pass) {
        console.log("DATA SENT", username, email, pass);
    };
    var fromBackend = ['Rico', 'rico@rico.com', 12456];
    send.apply(undefined, fromBackend);

    var cars = [{ brand: 'honda', doors: 4 }, { brand: 'bmw', doors: 2 }];
    var newCars = [{ brand: 'audi', doors: 3 }, { brand: 'mercedes', doors: 4 }];
    cars.push.apply(cars, newCars);
    console.log(cars);

    /* end */
});

/***/ }),
/* 5 */
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
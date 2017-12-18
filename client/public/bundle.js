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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Film = __webpack_require__(3);
const Review = __webpack_require__(4);

const getFilms = function () {
  const review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  const review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });

  const film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  });

  const film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  film1.addReview(review1);
  film2.addReview(review2);

  return [film1, film2];
}

module.exports = getFilms;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const UI = function (container) {
  this.container = container;
}

UI.prototype.createText = function (text, label) {
  const p = document.createElement("p");
  p.innerText = label + text;
  return p;
}

UI.prototype.appendText = function (element, text, label) {
  const pTag = this.createText(text, label);
  element.appendChild(pTag);
}

UI.prototype.createReview = function (container, review) {
  this.appendText(container, review.comment, "Comment: ");
  this.appendText(container, review.rating, "Rating: ");
  this.appendText(container, review.author, "Author: ");
}

UI.prototype.render = function (films) {
  for (let film of films) {
    const li = document.createElement("li");
    this.appendText(li, film.title, "Film: ");

    for (let review of film.reviews) {
      this.createReview(li, review);
    }

    this.container.appendChild(li);
  }
}

module.exports = UI;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const getFilms = __webpack_require__(0);
const UI = __webpack_require__(1);

const app = function () {
  const container = document.querySelector('#films');
  const ui = new UI(container);

  const films = getFilms();
  ui.render(films);
}

document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const Film = function (options) {
  this.title = options.title;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
}

Film.prototype.addReview = function (review) {
  this.reviews.push(review);
}

module.exports = Film;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const Review = function (options) {
  this.comment = options.comment;
  this.rating = options.rating;
  this.author = options.author;
}

module.exports = Review;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
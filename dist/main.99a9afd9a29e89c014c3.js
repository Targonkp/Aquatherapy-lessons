/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 142:
/***/ (function() {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mainEl = document.querySelector('main');
mainEl.classList.add('animation-transition'); //получаю родительский элемент и убираю перезагрузку страницы при клике по одной из ссылок, входящих в него

document.querySelector('.nav-menu').addEventListener('click', function (e) {
  e.preventDefault();

  if (event.target.classList.contains('nav-menu__link')) {
    //получаю ссылку активного элемента (по которому был совершен клик)
    var currentActiveLink = event.target.href;
    document.body.style.overflow = 'hidden';
    mainEl.classList.add('animation-transition'); //устанавливаю счетчик для перехода по кликнутой ссылке

    setTimeout(function () {
      location.reload(true);
      document.location.href = currentActiveLink;
    }, 700);
  }
});
setTimeout(function () {
  mainEl.classList.remove('animation-transition');
}, 500);
document.querySelector('.nav-menu').addEventListener('click', function (event) {
  _toConsumableArray(document.querySelectorAll('.nav-menu__link')).forEach(function (event) {
    return event.classList.remove('nav-menu__link-active');
  });

  if (event.target.classList.contains('nav-menu__link')) {
    currentActiveElement = event.target;
    console.log(currentActiveElement);
    event.target.classList.add('nav-menu__link-active');
  }
});

/***/ }),

/***/ 94:
/***/ (function() {

var formRecord = document.querySelector('#formRecord input[type=submit]');
var buttonRecords = document.querySelectorAll('.button-record');
var modalEl = document.querySelector('.modal');
var modalCloseEl = document.querySelector('.modal__close');
var burgerMenu = document.getElementById('menu-toggle'); //вызываю модальное окно записи

buttonRecords.forEach(function (item) {
  return item.addEventListener('click', function () {
    modalEl.classList.add('modal_active');
    document.body.style.overflow = 'hidden';
  });
}); //закрываю модальное окно записи по клику на close

modalCloseEl.addEventListener('click', function () {
  modalEl.classList.remove('modal_active');
  document.body.style.overflow = 'visible';
}); //закрываю модальное окно записи по клику вне формы

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal_active')) {
    modalEl.classList.remove('modal_active');
    document.body.style.overflow = 'visible';
  }
}); //бургер меню

burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('open');

  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
}); //записываю текущий title

var currentTitle = document.querySelector('title').textContent; //отвечает за изменение title

document.addEventListener('visibilitychange', function () {
  //если браузер свернули или осуществлен переход на другую вкладку
  if (document.hidden) {
    document.querySelector('title').textContent = 'Вы отошли';
  } else {
    document.querySelector('title').textContent = currentTitle;
  }
}); // let bodyTest;
// let testFunc = () => {
//     fetch("test.html")
//         .then(response => {return response.text()})
//         .then(data => {
//             console.log(data);
//             bodyTest = data;
//         })
// }
//
// testFunc();
//
// setTimeout(
//     () => {
//         console.log(bodyTest)
//         let newEl = document.createElement("div");
//         newEl.innerHTML = bodyTest;
//         document.body.appendChild(newEl);
//     }, 3000
// )

/***/ }),

/***/ 387:
/***/ (function() {

//если есть обертка слайдера, то применяю функцию
if (document.querySelector('.reviews-wrap') !== null) {
  //функция, отвечающая за размер movingEl для margin-left, в зависимости от размера экрана
  var sliderMoving = function sliderMoving() {
    if (document.documentElement.clientWidth > 768) {
      movingEl = 540;
      sliderChange(sliderElements, indexEl);
    }

    if (document.documentElement.clientWidth <= 768 && document.documentElement.clientWidth > 480) {
      movingEl = 420;
      sliderChange(sliderElements, indexEl);
    }

    if (document.documentElement.clientWidth <= 480) {
      movingEl = 300;
      sliderChange(sliderElements, indexEl);
    }
  };

  //функция для создания точек слайдера
  var createDots = function createDots(array, index) {
    //выполняю проверку длины массива, чтбы не возникала ошибка с навешиванием активного класса
    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        var dotEl = document.createElement('span');
        dotEl.className = 'slider-dots__element';
        dotsWrap.appendChild(dotEl);
      }

      dotsList = document.querySelectorAll('.slider-dots__element');
      dotsList[index].classList.add('slider-dots__element_active');
    }
  };

  //функция, отвечающая за смену слайдера
  var sliderChange = function sliderChange(array, index) {
    array.forEach(function (item) {
      return item.classList.remove('review_active');
    });
    array[index].classList.add('review_active'); //получаю значение margin, на которое необходимо перемещать слайдер

    var changeMargin = (index - 1) * movingEl; //задаю обертке отрицательный margin, чтобы двигать слайдер

    sliderWrap.style.marginLeft = -changeMargin + 'px';
  }; //навешиваю обработчик на общего родителя точек


  //получаю количество слайдеров
  var sliderElements = document.querySelectorAll('.review'); //получаю родителя для точек слайдера

  var dotsWrap = document.querySelector('.slider-dots'); //получаю обертку слайдов

  var sliderWrap = document.querySelector('.reviews-wrap'); //задаю переменную для списка точек

  var dotsList; //задаю начальный индекс для элементов слайдера

  var indexEl = Math.floor(sliderElements.length / 2); //значение единицы margin-left

  var movingEl;
  sliderMoving(); //слежу за изменением размеров окна

  window.addEventListener('resize', sliderMoving);
  createDots(sliderElements, indexEl);
  dotsWrap.addEventListener('click', function (event) {
    var dotsList = Array.from(document.querySelectorAll('.slider-dots__element'));

    if (event.target.classList.contains('slider-dots__element')) {
      dotsList.forEach(function (item) {
        item.classList.remove('slider-dots__element_active');
      });
      event.target.classList.add('slider-dots__element_active');
    }

    indexEl = dotsList.findIndex(function (index) {
      return index.classList.contains('slider-dots__element_active');
    });
    sliderChange(sliderElements, indexEl);
  });
  setTimeout(function sliderRun() {
    if (indexEl < sliderElements.length - 1) {
      indexEl++;
    } else {
      indexEl = 0;
    } //удаляю у всех точек активный класс


    dotsList.forEach(function (item) {
      item.classList.remove('slider-dots__element_active');
    }); //задаю активный класс точке с текущим index

    dotsList[indexEl].classList.add('slider-dots__element_active'); //вызываю функцию изменения слайдера

    sliderChange(sliderElements, indexEl);
    setTimeout(sliderRun, 5000);
  }, 5000);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(387);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_animation_js__WEBPACK_IMPORTED_MODULE_2__);




}();
/******/ })()
;
//# sourceMappingURL=main.99a9afd9a29e89c014c3.js.map
!function(){var e={142:function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".nav-menu").addEventListener("click",(function(t){var n;(n=document.querySelectorAll(".nav-menu__link"),function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return e.classList.remove("nav-menu__link-active")})),t.target.classList.contains("nav-menu__link")&&t.target.classList.add("nav-menu__link-active")}))},94:function(){document.querySelector("#formRecord input[type=submit]");var e=document.querySelectorAll(".button-record"),t=document.querySelector(".modal"),n=document.querySelector(".modal__close"),r=document.getElementById("menu-toggle");e.forEach((function(e){return e.addEventListener("click",(function(){t.classList.add("modal_active")}))})),n.addEventListener("click",(function(){t.classList.remove("modal_active")})),r.addEventListener("click",(function(){r.classList.toggle("open")}))},387:function(){var e=document.querySelectorAll(".review"),t=document.querySelector(".slider-dots"),n=document.querySelector(".reviews-wrap");!function(e){if(e.length>0){for(var n=0;n<e.length;n++){var r=document.createElement("span");r.className="slider-dots__element",t.appendChild(r)}document.querySelectorAll(".slider-dots__element")[0].classList.add("slider-dots__element_active")}}(e),e.forEach((function(e){return e.style.display="none"})),n.querySelector(".review_active").style.display="block",n.querySelector(".review_active").previousElementSibling.style.display="block",n.querySelector(".review_active").nextElementSibling.style.display="block"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(94),n(387),n(142)}()}();
//# sourceMappingURL=main.a34e269d8671200863d6.js.map
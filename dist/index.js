/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CODE_KEY": () => (/* binding */ CODE_KEY),
/* harmony export */   "EN_KEY_LAYOUT": () => (/* binding */ EN_KEY_LAYOUT),
/* harmony export */   "KEYS_DATA": () => (/* binding */ KEYS_DATA),
/* harmony export */   "RU_KEY_LAYOUT": () => (/* binding */ RU_KEY_LAYOUT)
/* harmony export */ });
var KEYS_DATA = {
  Backquote: {
    ru: 'ё',
    en: '`',
    ruShift: 'Ё',
    enShift: '~'
  },
  Digit1: {
    ru: '1',
    en: '1',
    ruShift: '!',
    enShift: '!'
  },
  Digit2: {
    ru: '2',
    en: '2',
    ruShift: '"',
    enShift: '@'
  },
  Digit3: {
    ru: '3',
    en: '3',
    ruShift: '№',
    enShift: '#'
  },
  Digit4: {
    ru: '4',
    en: '4',
    ruShift: ';',
    enShift: '$'
  },
  Digit5: {
    ru: '5',
    en: '5',
    ruShift: '%',
    enShift: '%'
  },
  Digit6: {
    ru: '6',
    en: '6',
    ruShift: ':',
    enShift: '^'
  },
  Digit7: {
    ru: '7',
    en: '7',
    ruShift: '?',
    enShift: '&'
  },
  Digit8: {
    ru: '8',
    en: '8',
    ruShift: '*',
    enShift: '*'
  },
  Digit9: {
    ru: '9',
    en: '9',
    ruShift: '(',
    enShift: '('
  },
  Digit0: {
    ru: '0',
    en: '0',
    ruShift: ')',
    enShift: ')'
  },
  Minus: {
    ru: '-',
    en: '-',
    ruShift: '_',
    enShift: '_'
  },
  Equal: {
    ru: '=',
    en: '=',
    ruShift: '+',
    enShift: '+'
  },
  BracketLeft: {
    ru: 'х',
    en: '[',
    ruShift: 'Х',
    enShift: '{'
  },
  BracketRight: {
    ru: 'ъ',
    en: ']',
    ruShift: 'Ъ',
    enShift: '}'
  },
  Backslash: {
    ru: '\\',
    en: '\\',
    ruShift: '/',
    enShift: '|'
  },
  Semicolon: {
    ru: 'ж',
    en: ';',
    ruShift: 'Ж',
    enShift: ':'
  },
  Quote: {
    ru: 'э',
    en: "'",
    ruShift: 'Э',
    enShift: '"'
  },
  Comma: {
    ru: 'б',
    en: ',',
    ruShift: 'Б',
    enShift: '<'
  },
  Period: {
    ru: 'ю',
    en: '.',
    ruShift: 'Ю',
    enShift: '>'
  },
  Slash: {
    ru: '.',
    en: '/',
    ruShift: ',',
    enShift: '?'
  }
};
var EN_KEY_LAYOUT = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "Shift", "Ctrl", "Alt", "space", "Alt", "Ctr"];
var RU_KEY_LAYOUT = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift", "Ctrl", "Alt", "space", "Alt", "Ctr"];
var CODE_KEY = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _localStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStore */ "./src/localStore.js");






(0,_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();
var keysContainer = document.querySelector('.keyboard__keys');
window.addEventListener("DOMContentLoaded", (0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.createKeys)(_constants__WEBPACK_IMPORTED_MODULE_4__.EN_KEY_LAYOUT));
keysContainer.addEventListener("mousedown", function (event) {
  (0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.getChar)(event.target);
});
keysContainer.addEventListener("mouseup", function (event) {
  var btn = event.target;
  _keyboard__WEBPACK_IMPORTED_MODULE_3__.pressed["delete"](btn.dataset.id);
  if (btn.dataset.id === 'ShiftRight' || btn.dataset.id === 'ShiftLeft') (0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.upShift)();
});
document.addEventListener('keydown', function (event) {
  var activeKey = document.querySelector("[data-id=".concat(event.code, "]"));

  if (activeKey) {
    activeKey.classList.add("keyboard__key--dark");
    _keyboard__WEBPACK_IMPORTED_MODULE_3__.pressed.add(event.code);
    event.preventDefault();
    (0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.getChar)(activeKey);
  }

  ;
});
document.addEventListener('keyup', function (event) {
  var activeKey = document.querySelector("[data-id=".concat(event.code, "]"));

  if (activeKey) {
    activeKey.classList.remove('keyboard__key--dark');
    _keyboard__WEBPACK_IMPORTED_MODULE_3__.pressed["delete"](event.code);
    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') (0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.upShift)();
  }
});
window.addEventListener('beforeunload', _localStore__WEBPACK_IMPORTED_MODULE_5__.setLocalStorage);
window.addEventListener('load', _localStore__WEBPACK_IMPORTED_MODULE_5__.getLocalStorage);

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLang": () => (/* binding */ changeLang),
/* harmony export */   "createKeys": () => (/* binding */ createKeys),
/* harmony export */   "getChar": () => (/* binding */ getChar),
/* harmony export */   "pressed": () => (/* binding */ pressed),
/* harmony export */   "pressedShift": () => (/* binding */ pressedShift),
/* harmony export */   "properties": () => (/* binding */ properties),
/* harmony export */   "upShift": () => (/* binding */ upShift)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

var properties = {
  capsLock: false,
  lang: "en"
};
var pressed = new Set();

function createKeys(keyLayout) {
  var keysContainer = document.querySelector('.keyboard__keys');
  keysContainer.innerHTML = '';
  var fragment = document.createDocumentFragment();
  keyLayout.forEach(function (key, i) {
    var keyElement = document.createElement("button");
    keyElement.dataset.id = _constants__WEBPACK_IMPORTED_MODULE_0__.CODE_KEY[i];
    var insertLineBreak = ['Backspace', 'Backslash', 'Enter', 'ShiftRight'].indexOf(_constants__WEBPACK_IMPORTED_MODULE_0__.CODE_KEY[i]) !== -1; // keyElement.setAttribute("type", "button");

    keyElement.classList.add("keyboard__key");

    switch (key) {
      case "Backspace":
        keyElement.classList.add("keyboard__key--big");
        keyElement.innerText = key;
        break;

      case "Caps":
        keyElement.classList.add("keyboard__key--big");
        keyElement.classList.add("keyboard__key--activebutonn");
        keyElement.innerText = key;
        if (properties.capsLock) keyElement.classList.add("keyboard__key--active");
        break;

      case "Enter":
        keyElement.classList.add("keyboard__key--big");
        keyElement.innerText = key;
        break;

      case "space":
        keyElement.classList.add("keyboard__key--space");
        break;

      case "Shift":
        keyElement.classList.add("keyboard__key--big");
        keyElement.innerText = key;
        break;

      case "Alt":
      case "Сtrl":
        keyElement.innerText = key;
        break;

      default:
        if (properties.capsLock) {
          keyElement.innerText = key.toUpperCase();
        } else {
          keyElement.innerText = key;
        }

        break;
    }

    ;
    fragment.appendChild(keyElement);
    if (insertLineBreak) fragment.append(document.createElement("br"));
  });
  keysContainer.append(fragment);
}

;

function pressedCaps(btn) {
  var keys = document.querySelectorAll('.keyboard__key');
  properties.capsLock = !properties.capsLock;
  btn.classList.toggle("keyboard__key--active");
  keys.forEach(function (key) {
    if (key.innerText.length === 1) {
      if (properties.capsLock) {
        key.textContent = key.textContent.toUpperCase();
      } else {
        key.textContent = key.textContent.toLowerCase();
      }

      ;
    }

    ;
  });
}

function changeLang() {
  if (properties.lang === 'en') {
    properties.lang = 'ru';
    createKeys(_constants__WEBPACK_IMPORTED_MODULE_0__.RU_KEY_LAYOUT);
  } else {
    properties.lang = 'en';
    createKeys(_constants__WEBPACK_IMPORTED_MODULE_0__.EN_KEY_LAYOUT);
  }
}

function pressedShift() {
  var keys = document.querySelectorAll('.keyboard__key');
  keys.forEach(function (key) {
    if (key.dataset.id in _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS_DATA) {
      key.textContent = properties.lang === "en" ? _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS_DATA[key.dataset.id].enShift : _constants__WEBPACK_IMPORTED_MODULE_0__.KEYS_DATA[key.dataset.id].ruShift;
    } else {
      if (key.innerText.length === 1) {
        key.textContent = properties.capsLock ? key.textContent.toLowerCase() : key.textContent.toUpperCase();
      }

      ;
    }
  });
}

;

function getChar(btn) {
  var inputText = document.querySelector('.textarea'); // const btn = event.target;

  pressed.add(btn.dataset.id);

  if (btn.dataset.id === 'Space') {
    inputText.value += ' ';
    return;
  }

  ;

  if (btn.dataset.id === "Enter") {
    inputText.value += "\n";
    return;
  }

  ;

  if (btn.dataset.id === "Tab") {
    inputText.value += "  ";
    return;
  }

  ;

  if (btn.dataset.id === "Backspace") {
    inputText.value = inputText.value.slice(0, inputText.value.length - 1);
    return;
  }

  ;

  if (btn.textContent.length === 1) {
    inputText.value += btn.textContent;
    return;
  }

  ;

  if (btn.dataset.id === 'CapsLock') {
    pressedCaps(btn);
    return;
  }

  ;

  if (pressed.has('ControlLeft') && pressed.has('ShiftLeft')) {
    changeLang();
  } else {
    if (pressed.has('ShiftRight') || pressed.has('ShiftLeft')) pressedShift();
  }

  ;
}

function upShift() {
  if (properties.lang === 'en') {
    createKeys(_constants__WEBPACK_IMPORTED_MODULE_0__.EN_KEY_LAYOUT);
  } else if (properties.lang === 'ru') {
    createKeys(_constants__WEBPACK_IMPORTED_MODULE_0__.RU_KEY_LAYOUT);
  }
}

;


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayout)
/* harmony export */ });
function getLayout() {
  var head = document.createElement("header");
  head.classList.add('header');
  var titleH1 = document.createElement("h1");
  var bodyTeg = document.body;
  var wraper = document.createElement("div");
  wraper.classList.add('wraper');
  bodyTeg.append(wraper);
  wraper.append(head);
  titleH1.innerText = "Виртуальная клавиатура";
  head.append(titleH1);
  var main = document.createElement("main");
  wraper.append(main);
  var rubric = document.createElement("p");
  rubric.classList.add('text');
  rubric.innerText = "Клавиатура создана в операционной системе Windows. Для переключения языка используйте комбинацию: левыe ctrl + shift";
  main.append(rubric);
  var textarea = document.createElement("textarea");
  textarea.classList.add('textarea');
  textarea.placeholder = "Тут будет текст";
  main.append(textarea);
  var keyboard = document.createElement("div");
  keyboard.classList.add('keyboard');
  main.append(keyboard);
  var keysContainer = document.createElement("div");
  keysContainer.classList.add('keyboard__keys');
  keyboard.append(keysContainer);
}

/***/ }),

/***/ "./src/localStore.js":
/*!***************************!*\
  !*** ./src/localStore.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    _keyboard__WEBPACK_IMPORTED_MODULE_0__.properties.lang = localStorage.getItem('lang');

    if (_keyboard__WEBPACK_IMPORTED_MODULE_0__.properties.lang === 'en') {
      (0,_keyboard__WEBPACK_IMPORTED_MODULE_0__.createKeys)(_constants__WEBPACK_IMPORTED_MODULE_1__.EN_KEY_LAYOUT);
    } else if (_keyboard__WEBPACK_IMPORTED_MODULE_0__.properties.lang === 'ru') {
      (0,_keyboard__WEBPACK_IMPORTED_MODULE_0__.createKeys)(_constants__WEBPACK_IMPORTED_MODULE_1__.RU_KEY_LAYOUT);
    }
  }
}

;

function setLocalStorage() {
  localStorage.setItem('lang', _keyboard__WEBPACK_IMPORTED_MODULE_0__.properties.lang);
}



/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles.css");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
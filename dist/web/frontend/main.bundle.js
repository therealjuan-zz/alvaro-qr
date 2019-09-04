/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/web/frontend/main.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/web/frontend/styles.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/web/frontend/styles.css ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".login {\n    width: 360px;\n  }\n\n  .terminal-selector {\n      width: 60vw;\n  }\n\n  .page {\n    padding: 8% 0 0;\n    margin: auto;\n  }\n\n  .form,\n  .terminal {\n    position: relative;\n    z-index: 1;\n    background: #FFFFFF;\n    max-width: 100%;\n    margin: 0 auto 100px;\n    padding: 45px;\n    text-align: center;\n    box-shadow: 10px 10px 0 0 rgba(65, 0, 125, 1);\n  }\n\n  .form input,\n  .form button {\n    font-family: \"Open Sans\", sans-serif;\n    outline: 0;\n    width: 100%;\n    border: 0;\n    padding: 15px;\n  }\n\n  .form input {\n    background: #f2f2f2;\n    margin: 0 0 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n  }\n  .form button {\n    text-transform: uppercase;\n    background: #5500AA;\n    color: #FFFFFF;\n    font-size: 14px;\n    -webkit-transition: all 0.3 ease;\n    transition: all 0.3 ease;\n    cursor: pointer;\n  }\n  .form button:hover,.form button:active,.form button:focus {\n    background: #3F017C;\n  }\n\n  .form .otp-form img {\n      margin-bottom: 15px;\n  }\n  .container {\n    position: relative;\n    z-index: 1;\n    max-width: 300px;\n    margin: 0 auto;\n  }\n  .container:before, .container:after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n\n  body {\n    background: #5500AA; /* fallback for old browsers */\n    background: -webkit-linear-gradient(right, #5500AA, #3F017C);\n    background: -moz-linear-gradient(right, #5500AA, #3F017C);\n    background: -o-linear-gradient(right, #5500AA, #3F017C);\n    background: linear-gradient(to left, #5500AA, #3F017C);\n    font-family: \"Open Sans\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/web/frontend/terminal.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/web/frontend/terminal.css ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "  .tabs-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n  }\n\n  label {\n    cursor: pointer;\n    display: inline-block;\n    text-align: left;\n    background: #240047;\n    color: white;\n    padding: 10px 20px;\n    border-right: 1px solid rgba(0,0,0,0.1);\n    &:last-of-type {\n      border-right: 0;\n    }\n  }\n\n  input[type=\"radio\"] {\n    display: none;\n  }\n\n  input[id=\"tab-1\"]:checked ~ .tabs-wrapper .label-tab-1,\n  input[id=\"tab-2\"]:checked ~ .tabs-wrapper .label-tab-2,\n  input[id=\"tab-3\"]:checked ~ .tabs-wrapper .label-tab-3 {\n    background: white;\n    color: black;\n  }\n\n  .tab {\n    display: none;\n    width: 100%;\n    background: white;\n    color: black;\n    padding: 40px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    box-shadow: 5px 5px 13px -6px rgba(0,0,0,0.29);\n    p {\n      text-align: left;\n      padding: 0;\n    }\n  }\n\n  input[id=\"tab-1\"]:checked ~ .tab-1,\n  input[id=\"tab-2\"]:checked ~ .tab-2,\n  input[id=\"tab-3\"]:checked ~ .tab-3 {\n    display: block;\n  }\n", ""]);


/***/ }),

/***/ "./src/web/frontend/auth.tsx":
/*!***********************************!*\
  !*** ./src/web/frontend/auth.tsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Auth {
    constructor() {
        this.authenticated = false;
        this.authenticated = false;
    }
    login(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        return this.authenticated;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new Auth());


/***/ }),

/***/ "./src/web/frontend/main.tsx":
/*!***********************************!*\
  !*** ./src/web/frontend/main.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _passcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passcode */ "./src/web/frontend/passcode.tsx");
/* harmony import */ var _twofactor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./twofactor */ "./src/web/frontend/twofactor.tsx");
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminal */ "./src/web/frontend/terminal.tsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/web/frontend/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth */ "./src/web/frontend/auth.tsx");
/* harmony import */ var _otp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./otp */ "./src/web/frontend/otp.tsx");









class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* BrowserRouter */ "a"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "App" }, (!_auth__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].isAuthenticated()) ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { exact: true, path: "/", component: _passcode__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] })) : (!_otp__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].isAuthenticated() ?
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { exact: true, path: "/two-factor", component: _twofactor__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"] })
                : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], { exact: true, path: "/terminal", component: _terminal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] })))));
    }
}
;
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));


/***/ }),

/***/ "./src/web/frontend/otp.tsx":
/*!**********************************!*\
  !*** ./src/web/frontend/otp.tsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class OTP {
    constructor() {
        this.authenticated = false;
        this.authenticated = false;
    }
    login(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        console.log(this);
        return this.authenticated;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (new OTP());


/***/ }),

/***/ "./src/web/frontend/passcode.tsx":
/*!***************************************!*\
  !*** ./src/web/frontend/passcode.tsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/web/frontend/auth.tsx");


const Passcode = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "login page" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { className: "passcode-form" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", placeholder: "passcode" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { id: "submit-passcode", onClick: () => _auth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].login(() => {
                        props.history.push('/two-factor');
                    }) }, "Submit passcode")))));
};
/* harmony default export */ __webpack_exports__["a"] = (Passcode);


/***/ }),

/***/ "./src/web/frontend/styles.css":
/*!*************************************!*\
  !*** ./src/web/frontend/styles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/web/frontend/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/web/frontend/terminal.css":
/*!***************************************!*\
  !*** ./src/web/frontend/terminal.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./terminal.css */ "./node_modules/css-loader/dist/cjs.js!./src/web/frontend/terminal.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/web/frontend/terminal.tsx":
/*!***************************************!*\
  !*** ./src/web/frontend/terminal.tsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _terminal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terminal.css */ "./src/web/frontend/terminal.css");
/* harmony import */ var _terminal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_terminal_css__WEBPACK_IMPORTED_MODULE_1__);


const Terminal = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "terminal-selector page" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "radio", name: "tab", id: "tab-1", defaultChecked: true }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "radio", name: "tab", id: "tab-2" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "radio", name: "tab", id: "tab-3" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tabs-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "tab-1", className: "label-tab-1" }, "Terminal 1"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "tab-2", className: "label-tab-2" }, "Terminal 2"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "tab-3", className: "label-tab-3" }, "Terminal 3")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "terminal" }, "Terminal window goes here")));
};
/* harmony default export */ __webpack_exports__["a"] = (Terminal);


/***/ }),

/***/ "./src/web/frontend/twofactor.tsx":
/*!****************************************!*\
  !*** ./src/web/frontend/twofactor.tsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _otp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp */ "./src/web/frontend/otp.tsx");


const Twofactor = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "login page" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { className: "otp-form" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: "https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a", width: "100%" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", placeholder: "otp" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { id: "otp-code", onClick: () => _otp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].login(() => {
                        props.history.push('/terminal');
                    }) }, "Enter OTP code")))));
};
/* harmony default export */ __webpack_exports__["a"] = (Twofactor);


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
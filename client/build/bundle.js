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

var requestHelper = __webpack_require__(1)
var viewer = __webpack_require__(2)

var app = function() {

  requestHelper.getRequest("http://localhost:3000/api/shops", function(shops) {
    viewer.renderHome(shops);
  })

}

window.addEventListener("DOMContentLoaded", app);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var requestHelper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      callback(data);
    })

    xhr.send();
  }
}

module.exports = requestHelper;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var viewer = {}
viewer.renderHome = function(shops) {
  for(var shop of shops) {
    this.renderShop(shop);
  }
}

viewer.renderShop = function(shop) {
  var mainDiv = document.getElementById("primary");
  var shopDiv = document.createElement("div");
  shopDiv.className = "shop-div";

  var p = document.createElement("p");
  p.innerHTML = "<b>" + shop.name + "</b><br>Address: " + shop.address + "<br>" +
  "Coffee Prices:";
  var ul = document.createElement("ul");
  for(var coffee in shop.coffeePrices) {
    this.renderList(coffee, ul, shop)
  }
  shopDiv.appendChild(p)
  shopDiv.appendChild(ul)
  mainDiv.appendChild(shopDiv)
}

viewer.renderList = function(item, anchor, shop) {
  var li = document.createElement("li")
  li.innerText = item + ":  £" + shop.coffeePrices[item];
  anchor.appendChild(li)
}

module.exports = viewer;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
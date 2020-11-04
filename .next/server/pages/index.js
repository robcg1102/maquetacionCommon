module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "react-material-ui-carousel");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\rober\\Desktop\\maquetacion\\components\\Carousel.js";




function CarouselComp(props) {
  var items = props.items;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    indicators: false,
    children: items.map((item, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
      item: item
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

function Item(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: "carouselBar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "contentCarousel",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "contentText",
        children: props.item.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.item.imgsrc,
      alt: props.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CarouselComp);

/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./components/navigation.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remixicon_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remixicon/fonts/remixicon.css */ "./node_modules/remixicon/fonts/remixicon.css");
/* harmony import */ var remixicon_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remixicon_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\rober\\Desktop\\maquetacion\\components\\Container.js";




const Container = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "shortcut icon",
      href: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/logo_nqvtbv.png",
      type: "image/x-icon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container p-4",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\rober\\Desktop\\maquetacion\\components\\Footer.js";

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "brands",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/truper_zhsgth.png",
        alt: "Truper",
        style: {
          height: "30px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/phillips_gjenwo.png",
        alt: "Phillips"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/coflex_lo9jxk.png",
        alt: "Coflex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/teka_apzohv.png",
        alt: "Teka"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/steren_qa8ei0.png",
        alt: "Steren",
        style: {
          height: "50px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "contact",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cardContact",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "CONT\xC1CTANOS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "justifyText leftPos",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-phone-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined), " (555) 530 9858"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cardContact",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "CON\xD3CENOS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Acerca de nosotros"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Nuestro equipo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Nuestro servicio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Responsabilidad social"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: "Atenci\xF3n a proveedores"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cardContact",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Compra segura"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Aceptamos tarjetas de cr\xE9dito, d\xE9bito, prepago y pagos en efectivo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "https://res.cloudinary.com/robcg1102/image/upload/v1604380868/maq_img/cards_swx80q.png",
          alt: "cards"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "termsRights",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "terms",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA9 All Rights Reserved"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "terms cond",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
              children: "T"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined), "\xE9rminos y condiciones"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("u", {
              children: "A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined), "viso de privacidad"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\rober\\Desktop\\maquetacion\\components\\Items.js";








const Items = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "itemsSection",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: props.section
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      style: {
        width: "85%",
        margin: "auto",
        marginBottom: "7px",
        color: "#5349DB"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "new_items",
      children: props.items.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "root",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: item.imgsrc,
            alt: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "ri-heart-line cardHeart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
              variant: "body2",
              component: "p",
              className: "contentItem",
              children: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: "priceTag",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["$", item.price.toLocaleString("en", {
              useGrouping: true
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
            size: "small",
            color: "primary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-shopping-cart-2-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, undefined), " Agregar al carrito"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        textAlign: "right",
        marginRight: "9%",
        fontSize: "20px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        size: "small",
        style: {
          fontSize: "15px",
          color: "#5349DB"
        },
        children: ["Ver m\xE1s ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "ri-arrow-right-line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\rober\\Desktop\\maquetacion\\components\\navigation.js";






const Navigation = () => {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "navBar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "searchLogo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/logo_nqvtbv.png",
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
          id: "standard-basic",
          label: "Buscar producto..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "options",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "optionMenu",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-user-3-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Mi cuenta"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "optionMenu",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-heart-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Mis favoritos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "optionMenu",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-upload-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Cargar pedido masivo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "optionMenu",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-shopping-cart-2-fill"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Mi carrito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "barDrop",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "menuDrop",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
            onClick: handleClick,
            style: {
              color: "white"
            },
            children: ["Departamentos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-arrow-drop-down-line",
              style: {
                color: "white"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
            onClick: handleClick,
            style: {
              color: "white"
            },
            children: ["Marcas", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "ri-arrow-drop-down-line",
              style: {
                color: "white"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
            id: "simple-menu",
            anchorEl: anchorEl,
            keepMounted: true,
            open: Boolean(anchorEl),
            onClose: handleClose,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: handleClose,
              children: "Coflex"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: handleClose,
              children: "Phillips"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: handleClose,
              children: "Steren"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: handleClose,
              children: "Teka"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onClick: handleClose,
              children: "Truper"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "price-tag",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "justifyText",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "OFERTAS "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://res.cloudinary.com/robcg1102/image/upload/v1604531550/maq_img/tag_finsgj.png",
            alt: "tag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./node_modules/remixicon/fonts/remixicon.css":
/*!****************************************************!*\
  !*** ./node_modules/remixicon/fonts/remixicon.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Items */ "./components/Items.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data */ "./services/data.js");

var _jsxFileName = "C:\\Users\\rober\\Desktop\\maquetacion\\pages\\index.js";






const Index = () => {
  const {
    newItems,
    topSelling,
    itemsCarousel
  } = _services_data__WEBPACK_IMPORTED_MODULE_5__["default"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: itemsCarousel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Items__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: newItems,
      section: "Nuevos productos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "guarantee",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cardGuarantee",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/envios_q0wcb4.png",
            alt: "envios"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Env\xEDos y devoluciones"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Entrega garantizada en m\xE1ximo de 48 horas."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cardGuarantee",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/devolucion_m5gbfk.png",
            alt: "garantia"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Garant\xEDa de devoluci\xF3n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Clientes 100% satisfechos."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cardGuarantee",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/clientes_vjedk8.png",
            alt: "satisfechos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Clientes satisfechos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Ofrecemos la mejor variedad de productos."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Items__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: topSelling,
      section: "M\xE1s vendidos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./services/data.js":
/*!**************************!*\
  !*** ./services/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dataService = {
  newItems: [{
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/1_q9bcwj.jpg",
    content: "Martillo Truper",
    price: 205.68
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/2_hh4aon.jpg",
    content: "Cable bimetal unipolar calibre 10 rojo Voltmex",
    price: 405.18
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/3_scnswx.jpg",
    content: "Compresor de banda de 50 lts COM-3450 Oakland",
    price: 4508.46
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/4_bkdfqv.jpg",
    content: "Carreta roja, UIF060-B3",
    price: 1040.75
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/5_pd2zna.jpg",
    content: "Atornillador inalámbrico 6V con estuche, batería y cargador DCF060-B3",
    price: 1215.63
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/6_yndnyl.jpg",
    content: "Atornillador inalámbrico 6V con estuche, batería y cargador DCF060-B3",
    price: 1215.63
  }],
  topSelling: [{
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/7_lwcco5.jpg",
    content: "Taladro inalámbrico 1/2 20V con 2 baterías y cargador DCD777D2-B3",
    price: 3956.7
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/8_vwggk2.jpg",
    content: "Lámpara de led suburbana solar con sensor de movimiento 40w LAM-036 kley",
    price: 586.93
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/9_z23zd3.jpg",
    content: "Placa lucek espejo con 2 apagadores sencillos y 1 contacto negro BP19-CEN (10)+",
    price: 88.19
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/4_bkdfqv.jpg",
    content: "Carreta roja, UIF060-B3",
    price: 1040.75
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/5_pd2zna.jpg",
    content: "Atornillador inalámbrico 6V con estuche, batería y cargador DCF060-B3",
    price: 1215.63
  }, {
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355699/maq_img/6_yndnyl.jpg",
    content: "Atornillador inalámbrico 6V con estuche, batería y cargador DCF060-B3",
    price: 1215.63
  }],
  itemsCarousel: [{
    name: "Aionik",
    description: "Conoce la nueva línea de placas",
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/corrousel_f5ekyy.jpg"
  }, {
    name: "Calentadores",
    description: "Descuento del 30% en nuestros calentadores",
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604431327/maq_img/carousel2_z4nuxk.jpg"
  }, {
    name: "Baño",
    description: "Muebles de baño con el 35% de descuento",
    imgsrc: "https://res.cloudinary.com/robcg1102/image/upload/v1604431327/maq_img/carousel3_hziq2r.jpg"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (dataService);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-material-ui-carousel":
/*!*********************************************!*\
  !*** external "react-material-ui-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-material-ui-carousel");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW1zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9kYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb21wIiwicHJvcHMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiSXRlbSIsImRlc2NyaXB0aW9uIiwiaW1nc3JjIiwibmFtZSIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJGb290ZXIiLCJoZWlnaHQiLCJJdGVtcyIsInNlY3Rpb24iLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiaW5kZXgiLCJjb250ZW50IiwicHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwidGV4dEFsaWduIiwibWFyZ2luUmlnaHQiLCJmb250U2l6ZSIsIk5hdmlnYXRpb24iLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJCb29sZWFuIiwiSW5kZXgiLCJuZXdJdGVtcyIsInRvcFNlbGxpbmciLCJpdGVtc0Nhcm91c2VsIiwiZGF0YVNlcnZpY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LEVBbUNWO0FBQ0VmLFVBQU0sRUFDSixvRkFGSjtBQUdFYyxXQUFPLEVBQ0wsdUVBSko7QUFLRUMsU0FBSyxFQUFFO0FBTFQsR0FuQ1UsQ0ExQ007QUFxRmxCbUIsZUFBYSxFQUFFLENBQ2I7QUFDRWpDLFFBQUksRUFBRSxRQURSO0FBRUVGLGVBQVcsRUFBRSxpQ0FGZjtBQUdFQyxVQUFNLEVBQ0o7QUFKSixHQURhLEVBT2I7QUFDRUMsUUFBSSxFQUFFLGNBRFI7QUFFRUYsZUFBVyxFQUFFLDRDQUZmO0FBR0VDLFVBQU0sRUFDSjtBQUpKLEdBUGEsRUFhYjtBQUNFQyxRQUFJLEVBQUUsTUFEUjtBQUVFRixlQUFXLEVBQUUseUNBRmY7QUFHRUMsVUFBTSxFQUNKO0FBSkosR0FiYTtBQXJGRyxDQUFwQjtBQTJHZW1DLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDM0dBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2Fyb3VzZWxDb21wKHByb3BzKSB7XHJcbiAgdmFyIGl0ZW1zID0gcHJvcHMuaXRlbXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWwgaW5kaWNhdG9ycz17ZmFsc2V9PlxyXG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgPEl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvQ2Fyb3VzZWw+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSXRlbShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgY2xhc3NOYW1lPVwiY2Fyb3VzZWxCYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50Q2Fyb3VzZWxcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50VGV4dFwiPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5pdGVtLmltZ3NyY30gYWx0PXtwcm9wcy5pdGVtLm5hbWV9IC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsQ29tcDtcclxuIiwiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCAncmVtaXhpY29uL2ZvbnRzL3JlbWl4aWNvbi5jc3MnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1NzAxL21hcV9pbWcvbG9nb19ucXZ0YnYucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcbiIsImNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZHNcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1NzAxL21hcV9pbWcvdHJ1cGVyX3poc2d0aC5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiVHJ1cGVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzMHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU3MDEvbWFxX2ltZy9waGlsbGlwc19namVud28ucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlBoaWxsaXBzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU3MDAvbWFxX2ltZy9jb2ZsZXhfbG85anhrLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJDb2ZsZXhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTcwMS9tYXFfaW1nL3Rla2FfYXB6b2h2LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJUZWthXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU3MDEvbWFxX2ltZy9zdGVyZW5fcWE4ZWkwLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJTdGVyZW5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250YWN0XCI+XHJcbiAgICAgICAgICA8aDQ+Q09OVMOBQ1RBTk9TPC9oND5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImp1c3RpZnlUZXh0IGxlZnRQb3NcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1waG9uZS1maWxsXCI+PC9pPiAoNTU1KSA1MzAgOTg1OFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250YWN0XCI+XHJcbiAgICAgICAgICA8aDQ+Q09Ow5NDRU5PUzwvaDQ+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGxpPkFjZXJjYSBkZSBub3NvdHJvczwvbGk+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8bGk+TnVlc3RybyBlcXVpcG88L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGxpPk51ZXN0cm8gc2VydmljaW88L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlJlc3BvbnNhYmlsaWRhZCBzb2NpYWw8L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGxpPkF0ZW5jacOzbiBhIHByb3ZlZWRvcmVzPC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250YWN0XCI+XHJcbiAgICAgICAgICA8aDQ+Q29tcHJhIHNlZ3VyYTwvaDQ+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgQWNlcHRhbW9zIHRhcmpldGFzIGRlIGNyw6lkaXRvLCBkw6liaXRvLCBwcmVwYWdvIHkgcGFnb3MgZW4gZWZlY3Rpdm9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM4MDg2OC9tYXFfaW1nL2NhcmRzX3N3eDgwcS5wbmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJjYXJkc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXJtc1JpZ2h0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXNcIj5cclxuICAgICAgICAgIDxwPiZjb3B5OyBBbGwgUmlnaHRzIFJlc2VydmVkPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybXMgY29uZFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPHU+VDwvdT7DqXJtaW5vcyB5IGNvbmRpY2lvbmVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDx1PkE8L3U+dmlzbyBkZSBwcml2YWNpZGFkXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuY29uc3QgSXRlbXMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1NlY3Rpb25cIj5cclxuICAgICAgPGgzPntwcm9wcy5zZWN0aW9ufTwvaDM+XHJcbiAgICAgIDxoclxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogXCI4NSVcIixcclxuICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiN3B4XCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjNTM0OURCXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdfaXRlbXNcIj5cclxuICAgICAgICB7cHJvcHMuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicm9vdFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nc3JjfSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLWhlYXJ0LWxpbmUgY2FyZEhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50SXRlbVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgPENhcmRBY3Rpb25zIGNsYXNzTmFtZT1cInByaWNlVGFnXCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtpdGVtLnByaWNlLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwgeyB1c2VHcm91cGluZzogdHJ1ZSB9KX08L3A+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLXNob3BwaW5nLWNhcnQtMi1maWxsXCI+PC9pPiBBZ3JlZ2FyIGFsIGNhcnJpdG9cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCI5JVwiLCBmb250U2l6ZTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGNvbG9yOiBcIiM1MzQ5REJcIiB9fT5cclxuICAgICAgICAgIFZlciBtw6FzIDxpIGNsYXNzTmFtZT1cInJpLWFycm93LXJpZ2h0LWxpbmVcIj48L2k+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtcztcclxuIiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2QmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hMb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTcwMS9tYXFfaW1nL2xvZ29fbnF2dGJ2LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgbGFiZWw9XCJCdXNjYXIgcHJvZHVjdG8uLi5cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uTWVudVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLXVzZXItMy1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxwPk1pIGN1ZW50YTwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbk1lbnVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1oZWFydC1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxwPk1pcyBmYXZvcml0b3M8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25NZW51XCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktdXBsb2FkLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHA+Q2FyZ2FyIHBlZGlkbyBtYXNpdm88L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25NZW51XCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktc2hvcHBpbmctY2FydC0yLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHA+TWkgY2Fycml0bzwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhckRyb3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVEcm9wXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVwYXJ0YW1lbnRvc1xyXG4gICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyaS1hcnJvdy1kcm9wLWRvd24tbGluZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNYXJjYXNcclxuICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmktYXJyb3ctZHJvcC1kb3duLWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Db2ZsZXg8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UGhpbGxpcHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+U3RlcmVuPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlRla2E8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+VHJ1cGVyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS10YWdcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwianVzdGlmeVRleHRcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGI+T0ZFUlRBUyA8L2I+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQ1MzE1NTAvbWFxX2ltZy90YWdfZmluc2dqLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwidGFnXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWxDb21wIGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XHJcbmltcG9ydCBJdGVtcyBmcm9tIFwiLi4vY29tcG9uZW50cy9JdGVtc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IGRhdGFTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9kYXRhXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB7IG5ld0l0ZW1zLCB0b3BTZWxsaW5nLCBpdGVtc0Nhcm91c2VsIH0gPSBkYXRhU2VydmljZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICAgIDxDYXJvdXNlbENvbXAgaXRlbXM9e2l0ZW1zQ2Fyb3VzZWx9IC8+XHJcbiAgICAgIDxJdGVtcyBpdGVtcz17bmV3SXRlbXN9IHNlY3Rpb249XCJOdWV2b3MgcHJvZHVjdG9zXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJndWFyYW50ZWVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRHdWFyYW50ZWVcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTcwMS9tYXFfaW1nL2Vudmlvc19xMHdjYjQucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJlbnZpb3NcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGg0PkVudsOtb3MgeSBkZXZvbHVjaW9uZXM8L2g0PlxyXG4gICAgICAgICAgPHA+RW50cmVnYSBnYXJhbnRpemFkYSBlbiBtw6F4aW1vIGRlIDQ4IGhvcmFzLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRHdWFyYW50ZWVcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTcwMS9tYXFfaW1nL2Rldm9sdWNpb25fbTVnYmZrLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiZ2FyYW50aWFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGg0PkdhcmFudMOtYSBkZSBkZXZvbHVjacOzbjwvaDQ+XHJcbiAgICAgICAgICA8cD5DbGllbnRlcyAxMDAlIHNhdGlzZmVjaG9zLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRHdWFyYW50ZWVcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTcwMC9tYXFfaW1nL2NsaWVudGVzX3ZqZWRrOC5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cInNhdGlzZmVjaG9zXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxoND5DbGllbnRlcyBzYXRpc2ZlY2hvczwvaDQ+XHJcbiAgICAgICAgICA8cD5PZnJlY2Vtb3MgbGEgbWVqb3IgdmFyaWVkYWQgZGUgcHJvZHVjdG9zLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxJdGVtcyBpdGVtcz17dG9wU2VsbGluZ30gc2VjdGlvbj1cIk3DoXMgdmVuZGlkb3NcIiAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImNvbnN0IGRhdGFTZXJ2aWNlID0ge1xyXG4gIG5ld0l0ZW1zOiBbXHJcbiAgICB7XHJcbiAgICAgIGltZ3NyYzpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU2OTkvbWFxX2ltZy8xX3E5YmN3ai5qcGdcIixcclxuICAgICAgY29udGVudDogXCJNYXJ0aWxsbyBUcnVwZXJcIixcclxuICAgICAgcHJpY2U6IDIwNS42OCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZ3NyYzpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU2OTkvbWFxX2ltZy8yX2hoNGFvbi5qcGdcIixcclxuICAgICAgY29udGVudDogXCJDYWJsZSBiaW1ldGFsIHVuaXBvbGFyIGNhbGlicmUgMTAgcm9qbyBWb2x0bWV4XCIsXHJcbiAgICAgIHByaWNlOiA0MDUuMTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1Njk5L21hcV9pbWcvM19zY25zd3guanBnXCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiQ29tcHJlc29yIGRlIGJhbmRhIGRlIDUwIGx0cyBDT00tMzQ1MCBPYWtsYW5kXCIsXHJcbiAgICAgIHByaWNlOiA0NTA4LjQ2LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1nc3JjOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTY5OS9tYXFfaW1nLzRfYmtkZnF2LmpwZ1wiLFxyXG4gICAgICBjb250ZW50OiBcIkNhcnJldGEgcm9qYSwgVUlGMDYwLUIzXCIsXHJcbiAgICAgIHByaWNlOiAxMDQwLjc1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1nc3JjOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTY5OS9tYXFfaW1nLzVfcGQyem5hLmpwZ1wiLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiQXRvcm5pbGxhZG9yIGluYWzDoW1icmljbyA2ViBjb24gZXN0dWNoZSwgYmF0ZXLDrWEgeSBjYXJnYWRvciBEQ0YwNjAtQjNcIixcclxuICAgICAgcHJpY2U6IDEyMTUuNjMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1Njk5L21hcV9pbWcvNl95bmRueWwuanBnXCIsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJBdG9ybmlsbGFkb3IgaW5hbMOhbWJyaWNvIDZWIGNvbiBlc3R1Y2hlLCBiYXRlcsOtYSB5IGNhcmdhZG9yIERDRjA2MC1CM1wiLFxyXG4gICAgICBwcmljZTogMTIxNS42MyxcclxuICAgIH0sXHJcbiAgXSxcclxuXHJcbiAgdG9wU2VsbGluZzogW1xyXG4gICAge1xyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1NzAwL21hcV9pbWcvN19sd2NjbzUuanBnXCIsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJUYWxhZHJvIGluYWzDoW1icmljbyAxLzIgMjBWIGNvbiAyIGJhdGVyw61hcyB5IGNhcmdhZG9yIERDRDc3N0QyLUIzXCIsXHJcbiAgICAgIHByaWNlOiAzOTU2LjcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1NzAwL21hcV9pbWcvOF92d2dnazIuanBnXCIsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJMw6FtcGFyYSBkZSBsZWQgc3VidXJiYW5hIHNvbGFyIGNvbiBzZW5zb3IgZGUgbW92aW1pZW50byA0MHcgTEFNLTAzNiBrbGV5XCIsXHJcbiAgICAgIHByaWNlOiA1ODYuOTMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1NzAwL21hcV9pbWcvOV96MjN6ZDMuanBnXCIsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJQbGFjYSBsdWNlayBlc3Blam8gY29uIDIgYXBhZ2Fkb3JlcyBzZW5jaWxsb3MgeSAxIGNvbnRhY3RvIG5lZ3JvIEJQMTktQ0VOICgxMCkrXCIsXHJcbiAgICAgIHByaWNlOiA4OC4xOSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZ3NyYzpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU2OTkvbWFxX2ltZy80X2JrZGZxdi5qcGdcIixcclxuICAgICAgY29udGVudDogXCJDYXJyZXRhIHJvamEsIFVJRjA2MC1CM1wiLFxyXG4gICAgICBwcmljZTogMTA0MC43NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZ3NyYzpcclxuICAgICAgICBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3JvYmNnMTEwMi9pbWFnZS91cGxvYWQvdjE2MDQzNTU2OTkvbWFxX2ltZy81X3BkMnpuYS5qcGdcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIkF0b3JuaWxsYWRvciBpbmFsw6FtYnJpY28gNlYgY29uIGVzdHVjaGUsIGJhdGVyw61hIHkgY2FyZ2Fkb3IgRENGMDYwLUIzXCIsXHJcbiAgICAgIHByaWNlOiAxMjE1LjYzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1nc3JjOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcm9iY2cxMTAyL2ltYWdlL3VwbG9hZC92MTYwNDM1NTY5OS9tYXFfaW1nLzZfeW5kbnlsLmpwZ1wiLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiQXRvcm5pbGxhZG9yIGluYWzDoW1icmljbyA2ViBjb24gZXN0dWNoZSwgYmF0ZXLDrWEgeSBjYXJnYWRvciBEQ0YwNjAtQjNcIixcclxuICAgICAgcHJpY2U6IDEyMTUuNjMsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaXRlbXNDYXJvdXNlbDogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFpb25pa1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb25vY2UgbGEgbnVldmEgbMOtbmVhIGRlIHBsYWNhc1wiLFxyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0MzU1NzAxL21hcV9pbWcvY29ycm91c2VsX2Y1ZWt5eS5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQ2FsZW50YWRvcmVzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2N1ZW50byBkZWwgMzAlIGVuIG51ZXN0cm9zIGNhbGVudGFkb3Jlc1wiLFxyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0NDMxMzI3L21hcV9pbWcvY2Fyb3VzZWwyX3o0bnV4ay5qcGdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQmHDsW9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTXVlYmxlcyBkZSBiYcOxbyBjb24gZWwgMzUlIGRlIGRlc2N1ZW50b1wiLFxyXG4gICAgICBpbWdzcmM6XHJcbiAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yb2JjZzExMDIvaW1hZ2UvdXBsb2FkL3YxNjA0NDMxMzI3L21hcV9pbWcvY2Fyb3VzZWwzX2h6aXEyci5qcGdcIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGFTZXJ2aWNlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contentTypes_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__contentTypes_css__);


var ContentTypes = {
	kicker: function kicker(value) {
		return '<div class="' + __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.kicker + '"><code>' + value + '</code></div>';
	},
	bigNumber: function bigNumber(value) {
		return '<p class="' + __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.bigNumber + '">' + value + '</p>';
	},
	factText: function factText(value) {
		return '<p class="' + __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.factText + '">' + value + '</p>';
	},
	image: function image(value) {
		return '<img class="' + __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.image + '" src="' + value.source + '" alt="' + value.alt + '" />';
	},
	sideImg: function sideImg(value) {
		return '<div class="' + __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.sideImg + '" style="background-image: url(' + value.source + ')"></div>';
	}
};

/* harmony default export */ exports["a"] = ContentTypes;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/d2aaa8ba43c24397614e569d9ecd42f5.jpg";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_content__ = __webpack_require__(9);


var STATE = {
	kicker: 'Kicker text',
	title: 'Fact cards title',
	intro: 'Fact cards introduction',
	appid: '#appContainer',
	content: __WEBPACK_IMPORTED_MODULE_0__content_content__["a" /* default */]

};

/* harmony default export */ exports["a"] = STATE;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullWidth_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullWidth_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fullWidth_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentTypes__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var FullWidthCard = function () {
	function FullWidthCard(card) {
		_classCallCheck(this, FullWidthCard);

		this.cardStyle = card.cardStyle;
		this.content = card.content;
		this.size = card.size || 1;
	}

	_createClass(FullWidthCard, [{
		key: 'render',
		value: function render() {
			return '<div class="' + __WEBPACK_IMPORTED_MODULE_0__fullWidth_css___default.a.card + ' "  >\n\t\t\t<div class="' + __WEBPACK_IMPORTED_MODULE_0__fullWidth_css___default.a.contentWrapper + '" >\n\t\t\t\t' + this.content.map(function (elem) {
				return __WEBPACK_IMPORTED_MODULE_1__contentTypes__["a" /* default */][elem.type](elem.value);
			}).join('') + ' \n\t\t\t</div>\n\t\t</div>';
		}
	}]);

	return FullWidthCard;
}();

/* harmony default export */ exports["a"] = FullWidthCard;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numberCard_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numberCard_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__numberCard_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentTypes__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




// const contentTypes = {
// 	kicker: value => `<div class="${Styles.kicker}"><code>${value}</code></div>`,
// 	bigNumber: value => `<p class="${Styles.bigNumber}">${value}</p>`,
// 	factText: value => `<p class="${Styles.factText}">${value}</p>`,
// 	image: value => `<img src="${value.source}" alt="${value.alt}" />`,
// }

var NumberCard = function () {
	function NumberCard(card) {
		_classCallCheck(this, NumberCard);

		this.cardStyle = card.cardStyle;
		this.content = card.content;
		this.size = card.size || 1;
	}

	_createClass(NumberCard, [{
		key: 'render',
		value: function render() {
			return '<div class="' + __WEBPACK_IMPORTED_MODULE_0__numberCard_css___default.a.card + '" data-size="' + (this.size > 1 ? 'full' : 'small') + '" data-type="' + this.cardStyle + '">\n\t\t\t<div class="' + __WEBPACK_IMPORTED_MODULE_0__numberCard_css___default.a.contentWrapper + '" >\n\t\t\t\t' + this.content.map(function (elem) {
				return __WEBPACK_IMPORTED_MODULE_1__contentTypes__["a" /* default */][elem.type](elem.value);
			}).join('') + '\n\t\t\t</div>\n\t\t</div>';
		}
	}]);

	return NumberCard;
}();

/* harmony default export */ exports["a"] = NumberCard;

/***/ },
/* 5 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"app__common___JWRTf boilerplate__reset___GlCEE","cardContainer":"app__cardContainer___2PAcP","titleWrapper":"app__titleWrapper___1kCHL","kicker":"app__kicker___2klhx app__common___JWRTf boilerplate__reset___GlCEE","title":"app__title___1kFDE app__common___JWRTf boilerplate__reset___GlCEE","intro":"app__intro___2HPmW app__common___JWRTf boilerplate__reset___GlCEE"};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_test_jpg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_test_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_test_jpg__);


var FullWidthCard = {
	cardStyle: 'FullWidthCard',
	backgroundImage: '',
	backgroundColor: '',
	size: 2,

	content: [{
		type: 'sideImg',
		value: {
			source: __WEBPACK_IMPORTED_MODULE_0__images_test_jpg___default.a,
			alt: 'Image caption text'
		}
	}, {
		type: 'factText',
		value: 'Facts about something interesting Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
	}]
};

/* harmony default export */ exports["a"] = FullWidthCard;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_test_jpg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_test_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_test_jpg__);


var BigNumberCard = {
	cardStyle: 'number',
	backgroundImage: '',
	backgroundColor: '',
	size: 1,

	content: [{
		type: 'bigNumber',
		value: '123'
	}, {
		type: 'factText',
		value: 'Facts about something interesting'
	}]
};

/* harmony default export */ exports["a"] = BigNumberCard;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var BigNumberCard2 = {
	cardStyle: 'number',
	backgroundImage: '',
	backgroundColor: '',
	size: 1,

	content: [{
		type: 'bigNumber',
		value: '123456'
	}, {
		type: 'factText',
		value: 'Facts about something interesting'
	}]
};

/* harmony default export */ exports["a"] = BigNumberCard2;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards_number__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_number2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_fullWidth__ = __webpack_require__(6);




var content = {
	cards: [__WEBPACK_IMPORTED_MODULE_0__cards_number__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__cards_number2__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__cards_fullWidth__["a" /* default */]]

};

/* harmony default export */ exports["a"] = content;

/***/ },
/* 10 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"contentTypes__common___w04bs","kicker":"contentTypes__kicker___R94iu contentTypes__common___w04bs","bigNumber":"contentTypes__bigNumber___tvvEQ contentTypes__common___w04bs","card":"contentTypes__card___1cIfe","factText":"contentTypes__factText___19ZeM contentTypes__common___w04bs","image":"contentTypes__image___23VYR","sideImg":"contentTypes__sideImg___rI4Zk"};

/***/ },
/* 11 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"fullWidth__common___2UxXt","card":"fullWidth__card___3QtKq"};

/***/ },
/* 12 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"numberCard__common____DWoP","card":"numberCard__card___26wJK","flex1":"numberCard__flex1___1ik2R","flex2":"numberCard__flex2___2GUxD","flex3":"numberCard__flex3___3Q_mj","flex4":"numberCard__flex4___3QktS","flex5":"numberCard__flex5___1KGxC","contentWrapper":"numberCard__contentWrapper___1Z-WK numberCard__common____DWoP"};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_cards_number_numberCard__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_cards_fullWidth_fullWidth__ = __webpack_require__(3);


// import * as util from './functions/utility'




// const { isMobileDevice } = util // true or false
var APP = document.querySelector(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appid);

function buildCards() {
	var allCards = __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].content.cards.map(function (card) {
		if (card.cardStyle === 'number') return new __WEBPACK_IMPORTED_MODULE_2__templates_cards_number_numberCard__["a" /* default */](card);
		if (card.cardStyle === 'FullWidthCard') return new __WEBPACK_IMPORTED_MODULE_3__templates_cards_fullWidth_fullWidth__["a" /* default */](card);
	});
	return '<section class="' + __WEBPACK_IMPORTED_MODULE_0__app_css___default.a.titleWrapper + '">\n\t\t<div class="' + __WEBPACK_IMPORTED_MODULE_0__app_css___default.a.kicker + '"><code>' + __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].kicker + '</code></div>\n\t\t<h2 class="' + __WEBPACK_IMPORTED_MODULE_0__app_css___default.a.title + '">' + __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].title + '</h2>\n\t\t<h4 class="' + __WEBPACK_IMPORTED_MODULE_0__app_css___default.a.intro + '">' + __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].intro + '</h4>\n\t</section>\n\t<section class="' + __WEBPACK_IMPORTED_MODULE_0__app_css___default.a.cardContainer + '">' + allCards.map(function (card) {
		return card.render();
	}).join('') + '</section>';
}

APP.innerHTML = buildCards();

/***/ }
/******/ ]);
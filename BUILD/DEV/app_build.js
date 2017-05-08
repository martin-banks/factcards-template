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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_content__ = __webpack_require__(6);


const STATE = {
	kicker: 'Kicker text',
	title: 'Fact cards title',
	intro: 'Fact cards introduction',
	appid: '#appContainer',
	content: __WEBPACK_IMPORTED_MODULE_0__content_content__["a" /* default */]

};

/* harmony default export */ exports["a"] = STATE;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numberCard_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numberCard_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__numberCard_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentTypes__ = __webpack_require__(7);



// const contentTypes = {
// 	kicker: value => `<div class="${Styles.kicker}"><code>${value}</code></div>`,
// 	bigNumber: value => `<p class="${Styles.bigNumber}">${value}</p>`,
// 	factText: value => `<p class="${Styles.factText}">${value}</p>`,
// 	image: value => `<img src="${value.source}" alt="${value.alt}" />`,
// }

class NumberCard {
	constructor(card) {
		this.cardStyle = card.cardStyle;
		this.content = card.content;
		this.size = card.size || 1;
	}

	render() {
		return `<div class="${__WEBPACK_IMPORTED_MODULE_0__numberCard_css___default.a.card}" data-size="${this.size > 1 ? 'full' : 'small'}" data-type="${this.cardStyle}">
			<div class="${__WEBPACK_IMPORTED_MODULE_0__numberCard_css___default.a.contentWrapper}" >
				${this.content.map(elem => __WEBPACK_IMPORTED_MODULE_1__contentTypes__["a" /* default */][elem.type](elem.value)).join('')}
			</div>
		</div>`;
	}

}

/* harmony default export */ exports["a"] = NumberCard;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"app__common___JWRTf boilerplate__reset___GlCEE","cardContainer":"app__cardContainer___2PAcP","titleWrapper":"app__titleWrapper___1kCHL","kicker":"app__kicker___2klhx app__common___JWRTf boilerplate__reset___GlCEE","title":"app__title___1kFDE app__common___JWRTf boilerplate__reset___GlCEE","intro":"app__intro___2HPmW app__common___JWRTf boilerplate__reset___GlCEE"};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_test_jpg__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_test_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_test_jpg__);


const FullWidthCard = {
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const BigNumberCard = {
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
const BigNumberCard2 = {
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

/* harmony default export */ exports["a"] = BigNumberCard2;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cards_number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_number2__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_fullWidth__ = __webpack_require__(3);




const content = {
	cards: [__WEBPACK_IMPORTED_MODULE_0__cards_number__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__cards_number2__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__cards_fullWidth__["a" /* default */]]

};

/* harmony default export */ exports["a"] = content;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contentTypes_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__contentTypes_css__);


const ContentTypes = {
	kicker: value => `<div class="${__WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.kicker}"><code>${value}</code></div>`,
	bigNumber: value => `<p class="${__WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.bigNumber}">${value}</p>`,
	factText: value => `<p class="${__WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.factText}">${value}</p>`,
	image: value => `<img src="${value.source}" alt="${value.alt}" />`,
	sideImg: value => `<div class="${__WEBPACK_IMPORTED_MODULE_0__contentTypes_css___default.a.sideImg}" style="background-image: url(${value.source})"></div>`
};

/* harmony default export */ exports["a"] = ContentTypes;

/***/ },
/* 8 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"contentTypes__common___w04bs","kicker":"contentTypes__kicker___R94iu contentTypes__common___w04bs","bigNumber":"contentTypes__bigNumber___tvvEQ contentTypes__common___w04bs","card":"contentTypes__card___1cIfe","factText":"contentTypes__factText___19ZeM contentTypes__common___w04bs","sideImg":"contentTypes__sideImg___rI4Zk"};

/***/ },
/* 9 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"numberCard__common____DWoP","card":"numberCard__card___26wJK","flex1":"numberCard__flex1___1ik2R","flex2":"numberCard__flex2___2GUxD","flex3":"numberCard__flex3___3Q_mj","flex4":"numberCard__flex4___3QktS","flex5":"numberCard__flex5___1KGxC","contentWrapper":"numberCard__contentWrapper___1Z-WK numberCard__common____DWoP"};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/d2aaa8ba43c24397614e569d9ecd42f5.jpg";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_cards_number_numberCard__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_cards_fullWidth_fullWidth__ = __webpack_require__(12);


// import * as util from './functions/utility'




// const { isMobileDevice } = util // true or false
const APP = document.querySelector(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appid);

function buildCards() {
	const allCards = __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].content.cards.map(card => {
		if (card.cardStyle === 'number') return new __WEBPACK_IMPORTED_MODULE_2__templates_cards_number_numberCard__["a" /* default */](card);
		if (card.cardStyle === 'FullWidthCard') return new __WEBPACK_IMPORTED_MODULE_3__templates_cards_fullWidth_fullWidth__["a" /* default */](card);
	});
	return `
		<section class="${__WEBPACK_IMPORTED_MODULE_0__app_css___default.a.titleWrapper}">
			<div class="${__WEBPACK_IMPORTED_MODULE_0__app_css___default.a.kicker}"><code>${__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].kicker}</code></div>
			<h2 class="${__WEBPACK_IMPORTED_MODULE_0__app_css___default.a.title}">${__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].title}</h2>
			<h4 class="${__WEBPACK_IMPORTED_MODULE_0__app_css___default.a.intro}">${__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].intro}</h4>
		</section>
		<section class="${__WEBPACK_IMPORTED_MODULE_0__app_css___default.a.cardContainer}">${allCards.map(card => card.render()).join('')}</section>
		`;
}

APP.innerHTML = buildCards();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullWidth_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullWidth_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fullWidth_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentTypes__ = __webpack_require__(7);



class FullWidthCard {
	constructor(card) {
		this.cardStyle = card.cardStyle;
		this.content = card.content;
		this.size = card.size || 1;
	}

	render() {
		return `<div class="${__WEBPACK_IMPORTED_MODULE_0__fullWidth_css___default.a.card} "  >
			<div class="${__WEBPACK_IMPORTED_MODULE_0__fullWidth_css___default.a.contentWrapper}" >
				${this.content.map(elem => __WEBPACK_IMPORTED_MODULE_1__contentTypes__["a" /* default */][elem.type](elem.value)).join('')} 
			</div>
		</div>`;
	}

}

/* harmony default export */ exports["a"] = FullWidthCard;

/***/ },
/* 13 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"common":"fullWidth__common___2UxXt","card":"fullWidth__card___3QtKq"};

/***/ }
/******/ ]);
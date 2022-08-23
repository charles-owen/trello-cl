/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./vendor/cl/trello/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/trello/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_TrelloFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/TrelloFactory */ "./vendor/cl/trello/js/TrelloFactory.js");

_js_TrelloFactory__WEBPACK_IMPORTED_MODULE_0__.TrelloFactory.create(Site.Site);

/***/ }),

/***/ "./vendor/cl/trello/js/TrelloFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/trello/js/TrelloFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrelloFactory": () => (/* binding */ TrelloFactory)
/* harmony export */ });
/* harmony import */ var _TrelloSprinterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrelloSprinterView */ "./vendor/cl/trello/js/TrelloSprinterView.js");

var TrelloFactory = function TrelloFactory() {};

TrelloFactory.create = function (site) {
  site.start(function () {
    var elements = document.querySelectorAll('div.cl-trello-sprinter');

    for (var i = 0; i < elements.length; i++) {
      new _TrelloSprinterView__WEBPACK_IMPORTED_MODULE_0__.TrelloSprinterView(site, elements[i]);
    }
  });
};

/***/ }),

/***/ "./vendor/cl/trello/js/TrelloSprinterView.js":
/*!***************************************************!*\
  !*** ./vendor/cl/trello/js/TrelloSprinterView.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrelloSprinterView": () => (/* binding */ TrelloSprinterView)
/* harmony export */ });
/* harmony import */ var trello_sprinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trello-sprinter */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/index.js");

var TrelloSprinterView = function TrelloSprinterView(site, element) {
  var json = JSON.parse(element.innerText);
  element.innerText = '';
  element.style.display = 'block';
  var options = {
    sel: element,
    key: json.key,
    board: json.team,
    views: json.views,
    after: json.after
  };

  if (json.cards !== undefined) {
    options.cards = json.cards;
  }

  new trello_sprinter__WEBPACK_IMPORTED_MODULE_0__["default"](options);
};

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plus.png */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/img/plus.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/minus.png */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/img/minus.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.trello-sprinter {\n  margin: 0;\n}\ndiv.trello-sprinter h2 {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n  font-size: 1em;\n  margin: 0;\n}\ndiv.trello-sprinter p.trello-status {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\ndiv.trello-sprinter p.trello-msg {\n  text-align: center;\n  font-style: italic;\n  font-size: 0.9em;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\ndiv.trello-sprinter p.center {\n  text-align: center;\n}\ndiv.trello-sprinter div.trello-view {\n  background: white;\n  color: black;\n}\ndiv.trello-sprinter div.trello-view h3 {\n  border-top: 2px solid black;\n  margin: 0;\n  padding: 0.25em 0 0.25em 20px;\n}\ndiv.trello-sprinter div.trello-view h3 span.date {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 0.7em;\n  float: right;\n  padding-top: 0.25em;\n}\ndiv.trello-sprinter div.trello-view p.trello-completed-header {\n  text-align: center;\n  font-weight: bold;\n  background: black;\n  color: deepskyblue;\n}\ndiv.trello-sprinter .trello-plus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\ndiv.trello-sprinter .trello-minus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\ndiv.trello-sprinter .trello-plus, div.trello-sprinter .trello-minus {\n  background-repeat: no-repeat;\n  background-position: left center;\n  background-size: 16px 16px;\n  cursor: pointer;\n}\ndiv.trello-sprinter div.trello-expand {\n  position: relative;\n  display: none;\n  overflow: auto;\n  background: #f0f0f0;\n  padding: 0.25em;\n  margin-bottom: 6pt;\n  border: 1pt solid gray;\n  word-wrap: normal;\n}\ndiv.trello-sprinter div.trello-expand, div.trello-sprinter .trello-errors {\n  -moz-box-shadow: 6pt 6px 10pt #888;\n  -webkit-box-shadow: 6pt 6px 10pt #888;\n  box-shadow: 6pt 6px 10pt #888;\n}\ndiv.trello-sprinter p.trello-count {\n  margin: 0 0 1em 0;\n  text-align: center;\n  font-size: 0.85em;\n}\ndiv.trello-sprinter div.trello-card {\n  padding-left: 2em;\n  padding-right: 2em;\n}\ndiv.trello-sprinter div.trello-card h4 {\n  background-color: #81d0fd;\n  margin: 0.5em 0 0 0;\n  padding: 0 0.25em;\n}\ndiv.trello-sprinter div.trello-card h4 span.trello-date {\n  font-weight: normal;\n  font-size: 0.9em;\n  float: right;\n  padding-top: 0.25em;\n}\ndiv.trello-sprinter div.trello-card .trello-card-members {\n  margin: 0 0.25em;\n  font-size: 0.85em;\n  font-style: italic;\n}\ndiv.trello-sprinter div.trello-description {\n  margin: 0.5em 1em;\n}\ndiv.trello-sprinter div.trello-description p {\n  margin: 0 0 0.25em 0;\n  font-size: 0.9em;\n}\ndiv.trello-sprinter div.trello-comments {\n  margin: 0 2em;\n}\ndiv.trello-sprinter div.trello-comments h5 {\n  margin: 0;\n  padding: 0 0.25em;\n  background-color: #ccc;\n  font-size: 0.8em;\n  font-weight: normal;\n  font-style: italic;\n}\ndiv.trello-sprinter div.trello-comments h5 span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\ndiv.trello-sprinter div.trello-comments p {\n  margin: 0 0.25em;\n  font-size: 0.9em;\n}\ndiv.trello-sprinter div.trello-updates {\n  margin: 1em 2em;\n}\ndiv.trello-sprinter div.trello-updates p {\n  margin: 0;\n  padding: 0 0.25em;\n  font-size: 0.8em;\n  font-style: italic;\n}\ndiv.trello-sprinter div.trello-updates p span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\ndiv.trello-sprinter div.trello-updates p span.list {\n  font-style: normal;\n  font-weight: bold;\n}\ndiv.trello-sprinter div.trello-sprints {\n  background: white;\n  color: black;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors {\n  background: #c41425;\n  color: white;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-warnings {\n  background: #ff80df;\n  color: black;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  background: #f0f0f0;\n  color: black;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n  margin-bottom: 1em;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors, div.trello-sprinter div.trello-sprints div.trello-warnings, div.trello-sprinter div.trello-sprints div.trello-members {\n  position: relative;\n  overflow: auto;\n  padding: 0 1em 1em 1em;\n  margin: 1em 3em 6pt 3em;\n  border: 1pt solid gray;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors p, div.trello-sprinter div.trello-sprints div.trello-warnings p, div.trello-sprinter div.trello-sprints div.trello-members p {\n  font-size: 1.1em;\n  margin: 0;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors span.trello-code, div.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code, div.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n  font-weight: bold;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors h3, div.trello-sprinter div.trello-sprints div.trello-errors h4, div.trello-sprinter div.trello-sprints div.trello-warnings h3, div.trello-sprinter div.trello-sprints div.trello-warnings h4, div.trello-sprinter div.trello-sprints div.trello-members h3, div.trello-sprinter div.trello-sprints div.trello-members h4 {\n  margin: 0;\n  padding: 0.25em 0;\n  text-align: center;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors div.trello-info, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info {\n  border-top: 1px solid black;\n}\ndiv.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {\n  margin: 1em 0;\n}\ndiv.trello-sprinter div.trello-sprint-table {\n  overflow: auto;\n}", "",{"version":3,"sources":["webpack://./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;AALF;AAOE;EACE,kBAAA;EACA,iBAAA;EACA,mBAZU;EAaV,YAAA;EACA,cAAA;EACA,SAAA;AALJ;AAQE;EACE,kBAAA;EACA,iBAAA;EACA,mBArBU;EAsBV,YAAA;AANJ;AASE;EACE,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBA9BU;EA+BV,YAAA;AAPJ;AAUE;EACE,kBAAA;AARJ;AAWE;EACE,iBAAA;EACA,YAAA;AATJ;AAWI;EACE,2BAAA;EACA,SAAA;EACA,6BAAA;AATN;AAWM;EACE,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AATR;AAaI;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAXN;AAeE;EACE,yDAAA;AAbJ;AAgBE;EACE,yDAAA;AAdJ;AAiBE;EACE,4BAAA;EACA,gCAAA;EACA,0BAAA;EACA,eAAA;AAfJ;AAkBE;EACE,kBAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;AAhBJ;AAoBE;EACE,kCAAA;EACA,qCAAA;EACA,6BAAA;AAlBJ;AAqBE;EACE,iBAAA;EACA,kBAAA;EACA,iBAAA;AAnBJ;AAuBE;EACE,iBAAA;EACA,kBAAA;AArBJ;AAuBI;EACE,yBA5Gc;EA6Gd,mBAAA;EACA,iBAAA;AArBN;AAwBI;EACE,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AAtBN;AAyBI;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;AAvBN;AA6BE;EAME,iBAAA;AAhCJ;AA2BI;EACE,oBAAA;EACA,gBAAA;AAzBN;AAgCE;EACE,aAAA;AA9BJ;AAgCI;EACE,SAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AA9BN;AAgCM;EACE,mBAAA;EACA,kBAAA;EACA,YAAA;AA9BR;AAkCI;EACE,gBAAA;EACA,gBAAA;AAhCN;AAqCE;EACE,eAAA;AAnCJ;AAqCI;EACE,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AAnCN;AAqCM;EACE,mBAAA;EACA,kBAAA;EACA,YAAA;AAnCR;AAsCM;EACE,kBAAA;EACA,iBAAA;AApCR;AA0CE;EACE,iBAAA;EACA,YAAA;AAxCJ;AA0CI;EACE,mBA/LS;EAgMT,YAAA;AAxCN;AA2CI;EACE,mBAnMW;EAoMX,YAAA;AAzCN;AA4CI;EACE,mBAvMW;EAwMX,YAAA;AA1CN;AA4CM;EACE,kBAAA;AA1CR;AA8CI;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,uBAAA;EACA,sBAAA;EACA,iBAAA;EACA,gBAAA;AA5CN;AA8CM;EACE,gBAAA;EACA,SAAA;AA5CR;AA+CM;EACE,iBAAA;AA7CR;AAgDM;EACE,SAAA;EACA,iBAAA;EACA,kBAAA;AA9CR;AAiDM;EACE,2BAAA;AA/CR;AAiDQ;EACE,aAAA;AA/CV;AAqDE;EACE,cAAA;AAnDJ","sourcesContent":["$trello-blue: #026AA7;\n$trello-card-title: #81d0fd;\n$trello-error: #c41425;\n$trello-warning: #ff80df;\n$trello-members: #f0f0f0;\n\ndiv.trello-sprinter {\n  margin: 0;\n\n  h2 {\n    text-align: center;\n    padding: 0.25em 0;\n    background: $trello-blue;\n    color: white;\n    font-size: 1em;\n    margin: 0;\n  }\n\n  p.trello-status {\n    text-align: center;\n    padding: 0.25em 0;\n    background: $trello-blue;\n    color: white;\n  }\n\n  p.trello-msg {\n    text-align: center;\n    font-style: italic;\n    font-size: 0.9em;\n    padding: 0.25em 0;\n    background: $trello-blue;\n    color: white;\n  }\n\n  p.center {\n    text-align: center;\n  }\n\n  div.trello-view {\n    background: white;\n    color: black;\n\n    h3 {\n      border-top: 2px solid black;\n      margin: 0;\n      padding: 0.25em 0 0.25em 20px;\n\n      span.date {\n        font-weight: normal;\n        font-style: normal;\n        font-size: 0.7em;\n        float: right;\n        padding-top: 0.25em;\n      }\n    }\n\n    p.trello-completed-header {\n      text-align: center;\n      font-weight: bold;\n      background: black;\n      color: deepskyblue;\n    }\n  }\n\n  .trello-plus {\n    background-image: url('img/plus.png');\n  }\n\n  .trello-minus {\n    background-image: url('img/minus.png');\n  }\n\n  .trello-plus, .trello-minus {\n    background-repeat: no-repeat;\n    background-position: left center;\n    background-size: 16px 16px;\n    cursor: pointer;\n  }\n\n  div.trello-expand {\n    position: relative;\n    display: none;\n    overflow: auto;\n    background: #f0f0f0;\n    padding: 0.25em;\n    margin-bottom: 6pt;\n    border: 1pt solid gray;\n    word-wrap: normal;\n  }\n\n  // Shadows\n  div.trello-expand, .trello-errors {\n    -moz-box-shadow: 6pt 6px 10pt #888;\n    -webkit-box-shadow: 6pt 6px 10pt #888;\n    box-shadow: 6pt 6px 10pt #888;\n  }\n\n  p.trello-count {\n    margin: 0 0 1em 0;\n    text-align: center;\n    font-size: 0.85em;\n  }\n\n\n  div.trello-card {\n    padding-left: 2em;\n    padding-right: 2em;\n\n    h4 {\n      background-color: $trello-card-title;\n      margin: 0.5em 0 0 0;\n      padding: 0 0.25em;\n    }\n\n    h4 span.trello-date {\n      font-weight: normal;\n      font-size: 0.9em;\n      float: right;\n      padding-top: 0.25em;\n    }\n\n    .trello-card-members {\n      margin: 0 0.25em;\n      font-size: 0.85em;\n      font-style: italic;\n    }\n  }\n\n\n\n  div.trello-description {\n    p {\n      margin: 0 0 0.25em 0;\n      font-size: 0.9em;\n    }\n\n    margin: 0.5em 1em;\n  }\n\n\n  div.trello-comments {\n    margin: 0 2em;\n\n    h5 {\n      margin: 0;\n      padding: 0 0.25em;\n      background-color: #ccc;\n      font-size: 0.8em;\n      font-weight: normal;\n      font-style: italic;\n\n      span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right;\n      }\n    }\n\n    p {\n      margin: 0 0.25em;\n      font-size: 0.9em;\n    }\n  }\n\n\n  div.trello-updates {\n    margin: 1em 2em;\n\n    p {\n      margin: 0;\n      padding: 0 0.25em;\n      font-size: 0.8em;\n      font-style: italic;\n\n      span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right;\n      }\n\n      span.list {\n        font-style: normal;\n        font-weight: bold;\n      }\n\n    }\n  }\n\n  div.trello-sprints {\n    background: white;\n    color: black;\n\n    div.trello-errors {\n      background: $trello-error;\n      color: white;\n    }\n\n    div.trello-warnings {\n      background: $trello-warning;\n      color: black;\n    }\n\n    div.trello-members {\n      background: $trello-members;\n      color: black;\n\n      div.trello-member {\n        margin-bottom: 1em;\n      }\n    }\n\n    div.trello-errors, div.trello-warnings, div.trello-members {\n      position: relative;\n      overflow: auto;\n      padding: 0 1em 1em 1em;\n      margin: 1em 3em 6pt 3em;\n      border: 1pt solid gray;\n      word-wrap: normal;\n      font-size: 0.9em;\n\n      p {\n        font-size: 1.1em;\n        margin: 0;\n      }\n\n      span.trello-code {\n        font-weight: bold;\n      }\n\n      h3, h4 {\n        margin: 0;\n        padding: 0.25em 0;\n        text-align: center;\n      }\n\n      div.trello-info {\n        border-top: 1px solid black;\n\n        p {\n          margin: 1em 0;\n        }\n      }\n    }\n  }\n\n  div.trello-sprint-table {\n    overflow: auto;\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-45f75bcb4b/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!../../../resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../../__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./trello.scss */ "./.yarn/__virtual__/css-loader-virtual-c29e00cf0e/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-28c0e7b474/0/cache/sass-loader-npm-13.0.2-ca68afd73d-6306712cc7.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4[0].rules[0].use[3]!./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _virtual_style_loader_virtual_45f75bcb4b_0_cache_style_loader_npm_3_3_1_4bbb6ec77f_470feef680_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _virtual_css_loader_virtual_c29e00cf0e_0_cache_css_loader_npm_6_7_1_b93a2de0d4_170fdbc630_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_28c0e7b474_0_cache_sass_loader_npm_13_0_2_ca68afd73d_6306712cc7_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_0_rules_0_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./.yarn/cache/trello-connect-npm-2.0.7-2f2481cf50-d9edb4a517.zip/node_modules/trello-connect/index.js":
/*!*************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-connect-npm-2.0.7-2f2481cf50-d9edb4a517.zip/node_modules/trello-connect/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrelloConnect": () => (/* binding */ TrelloConnect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const defaultOptions = {
	version: 1,
	"apiEndpoint": "https://api.trello.com",
	"authEndpoint": "https://trello.com",
	"intentEndpoint": "https://trello.com",
	key: '',

	// Prefix to apply to local storage. Useful to
	// disambiguate multiple uses on the same site
	localPrefix: '',
};

/**
 * Merge two Javascript objects into a single result.
 * @param obj1 First object
 * @param obj2 Second object. Second object values take precedence.
 */
const merge = function(obj1, obj2) {
	var obj = {};

	for(const key in obj1) {
		if(obj1.hasOwnProperty(key)) {
			obj[key] = obj1[key];
		}
	}

	for(const key in obj2) {
		if(obj2.hasOwnProperty(key)) {
			obj[key] = obj2[key];
		}
	}

	return obj;
}

// Local storage address for storing the token while connected
const TokenStorage = '_n9s5Ryg8wa';

const TrelloConnect = function(options) {
	var that = this;

	options = merge(defaultOptions, options);

	let token = '';

	/**
	 * Initialize.
	 */
	function initialize() {
		// Till we know otherwise
		that.state = TrelloConnect.DISCONNECTED;

		//
		// See if there is a token in the current URL
		//
		const href = window.location.href;
		const re = /#token=(.*)$/;
		const matches = href.match(re);
		if(matches !== null && matches.length > 1) {
			token = matches[1];

			const localStorage = window.localStorage;
			localStorage.setItem(options.localPrefix + TokenStorage, token);
			window.location = window.location.origin + window.location.pathname + window.location.search;
		}

		//
		// Is there a token in local storage?
		//
		const localStorage = window.localStorage;
		token = localStorage.getItem(options.localPrefix + TokenStorage, token);
		if(token !== null && token.length > 0) {
			that.state = TrelloConnect.CONNECTED;
		}
	}

	/**
	 * Authorize with Trello
	 *
	 * Redirects to the Trello authorization endpoint, which redirects back
	 * to this page after authorization with the token in the URL.
	 */
	this.authorize = function() {
		const return_url = encodeURIComponent(window.location.href);
		const url = `${options.authEndpoint}/${options.version}/authorize?expiration=never&name=${options.name}&` +
			`callback_method=fragment&scope=read&response_type=token&key=${options.key}&return_url=${return_url}`;
		window.location = url;
	}

	/**
	 * Disconnect from Trello.
	 *
	 * This forgets the token in local storage.
	 *
	 */
	this.disconnect = function() {
		const localStorage = window.localStorage;
		localStorage.removeItem(options.localPrefix + TokenStorage);
		token = '';
	}

	/**
	 * Perform a GET query for Trello
	 * @param url The board URL after the version, like "/member/me/boards?fields=all"
	 * @param success Function called on success with data argument
	 * @param failure Function called on failure with data argument
	 * @param msg Optional element to put rate limiting message into
	 */
	this.get = function(url, success, failure, msg) {

		let tries = 1;

		let maxtries = 5;  // Maximum number of tries
		let backoff = 10;   // seconds
		let backoffIncrease = 1.25; // Amount to increase backoff after each try

		function trelloGet() {
			var request = new XMLHttpRequest();
			request.open('GET', `${options.apiEndpoint}/${options.version}/${url}&key=${options.key}&token=${token}`, true);

			request.onload = function() {
				if (request.status >= 200 && request.status < 400) {
					// Success!
					const data = JSON.parse(request.responseText);
					success(data);
				} else {
					// We reached our target server, but it returned an error
					failure()
				}
			};

			request.onerror = function() {
				if(+request.status === 429 && tries < maxtries) {
					tries++;
					if(msg !== undefined) {
						msg.innerText = "Rate limited, attempt " + tries + " after " +
							backoff.toFixed(0) + " seconds";
						setTimeout(function() {
							trelloGet();
						}, backoff * 1000);
						backoff *= backoffIncrease;
					}
				} else {
					failure();
				}
			};

			request.send();
		}

		trelloGet();
	}

	initialize();
}

TrelloConnect.DISCONNECTED = 'D';
TrelloConnect.CONNECTED = 'C';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrelloConnect);


/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/index.js":
/*!***************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrelloSprinter": () => (/* reexport safe */ _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__.TrelloSprinter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello.scss */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/trello.scss");
/* harmony import */ var _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/TrelloSprinter */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/TrelloSprinter.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__.TrelloSprinter);



/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Board.js":
/*!*******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Board.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Board": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Member.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/List.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Update */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Update.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Comment.js");
/*
 * Representation of a Trello Board
 */







const Board = function(data, options) {

	this.data = data;
	this.id = data.id;
	this.name = data.name;
	this.lists = [];
	this.members = {};
	this.options = options;

	this.find_card  = function(id) {
		for(var i=0; i<this.lists.length; i++) {
			var card = this.lists[i].find_card(id);
			if(card !== null) {
				return card;
			}
		}

		return null;
	}

	this.add_member = function(member) {
		this.members[member.id] = member;
	}
}

Board.fetch = function(trello, name, options, msg, success, failure) {
	msg.innerText = 'Fetching board ' + name;

	/// Keeps track of how many open async calls there are right now
	let active = 0;

	// Will be set to point to a new Board object
	let board = null;

	async_start();
	trello.get("/member/me/boards?fields=all",
		(data) => {
			for(var i=0; i<data.length;  i++) {
				var boardData = data[i];
				if(boardData.name.toLowerCase() === name.toLowerCase()) {
					// We have found the board (if not closed)
					if(!boardData.closed) {
						// Create the board object
						board = new Board(boardData, options);

						// Fetch the membership
						fetch_membership(board);

						// Fetch the lists for the board
						fetch_lists(board);

						break;
					}
				}
			}

			if(board === null) {
				failure("Unable to find Trello board " + name);
				return;
			}

			async_end();
		},
		(data) => {
			failure("Unable to fetch Trello boards")
		},
		msg
	)

	/**
	 * Fetch the membership of the board.
	 * @param board Board to fetch for
	 */
	function fetch_membership(board) {
		async_start();
		trello.get("/board/" + board.id + "/members?fields=all",
			function(data) {
				data.forEach(function(memberData) {
					var member = new _Member__WEBPACK_IMPORTED_MODULE_0__.Member(board, memberData);
					board.add_member(member);
				});
				async_end();
			},
			function(data) { failure("Unable to fetch Trello membership") },
			msg
		)
	}


	function fetch_lists(board) {
		msg.innerText = "Fetching lists for " + name;

		async_start();
		trello.get("/boards/" + board.id + "/lists?filter=open",
			function(data) {
				data.forEach(function(listData) {
					if(!listData.closed) {
						var list = new _List__WEBPACK_IMPORTED_MODULE_1__.List(board, listData);
						board.lists.push(list);
					}
				});

				fetch_cards(board);
				async_end();
			},
			function(data) { failure("Unable to fetch Trello lists") },
			msg
		)
	}

	/**
	 * Fetch all cards as a single batch operation.
	 * @param board Board we are fetching for
	 */
	function fetch_cards(board) {
		msg.innerText = "Fetching cards";

		// Collect up all URLs for all of the lists
		var urls = '';
		for(var i=0; i<board.lists.length; i++) {
			var list = board.lists[i];
			if(urls.length > 0) {
				urls += ',';
			}
			urls += "/lists/" + list.id + "/cards/open";
		}

		// Get get it
		async_start();
		trello.get("/batch?urls=" + urls,
			function(data) {
				// Loop over the result for each provided URL
				for(let i=0; i<data.length && i<board.lists.length; i++) {
					const list = board.lists[i];
					const cardsData = data[i][200];

					cardsData.forEach(function(cardData) {
						if(!cardData.closed) {
							const card = new _Card__WEBPACK_IMPORTED_MODULE_2__.Card(board, list, cardData);
							if(options.after !== null) {
								if(card.created.getTime() / 1000 > options.after) {
									list.add_card(card);
								}
							} else {
								list.add_card(card);
							}



						}
					});
				}

				fetch_actions(board);
				async_end();
			},
			function(data) { failure("Unable to fetch Trello cards") },
			msg
		)
	}


	function fetch_actions(board) {
		async_start();
		trello.get("/board/" + board.id + "/actions?filter=commentCard,updateCard:idList&limit=1000",
			function(data) {
				data.forEach(function(action) {
					if(!action.closed) {
						if(action.type === "commentCard") {
							let card = board.find_card(action.data.card.id);
							if(card !== null) {
								var comment = new _Comment__WEBPACK_IMPORTED_MODULE_4__.Comment(board, card, action);
								card.comments.push(comment);
							}
							//console.log(action);
						} else if(action.type === 'updateCard') {
							let card = board.find_card(action.data.card.id);
							if(card !== null) {
								var update = new _Update__WEBPACK_IMPORTED_MODULE_3__.Update(board, card, action);
								card.updates.push(update);
							}
							//console.log(action);
						}
					}
				});

				board.lists.forEach(function(list) {
					list.cards.forEach(function(card) {
						card.sort_updates();
					})
				});
				async_end();
			},
			function(data) { failure("Unable to fetch Trello card information") },
			msg
		)
	}


	function async_start() {
		active++;
	}

	function async_end() {
		active--;
		if(active === 0) {
			success(board);
		}
	}
}

Board.prototype.find_list = function(name) {
	name = name.toLowerCase();

	for(var i=0; i<this.lists.length; i++) {
		var list = this.lists[i];
		if(list.name.toLowerCase() === name) {
			return list;
		}
	}

	return null;
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/BoardView.js":
/*!***********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/BoardView.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardView": () => (/* binding */ BoardView)
/* harmony export */ });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/**
 * @file
 * Standard Trello board view
 */



const BoardView = function(div, board) {
    _DataView__WEBPACK_IMPORTED_MODULE_0__.DataView.call(this);

    this.present = function() {
		let view = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div', 'trello-view');
	    div.appendChild(view);

	    for(let list of board.lists) {
			presentList(view, list);
	    }
    }

    const presentList = (view, list) => {
    	const header = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('h3', 'trello-plus');
    	header.innerText = list.name;
    	view.appendChild(header);

    	const expander = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div', 'trello-expand');
    	expander.style.display = 'none';
    	view.appendChild(expander);

    	header.addEventListener('click', (event) => {
    		if(expander.style.display === 'none') {
    			expander.style.display = 'block';
    			_Util__WEBPACK_IMPORTED_MODULE_1__.Util.removeClass(header, 'trello-plus');
    			_Util__WEBPACK_IMPORTED_MODULE_1__.Util.addClass(header, 'trello-minus');
		    } else {
    			expander.style.display = 'none';
			    _Util__WEBPACK_IMPORTED_MODULE_1__.Util.removeClass(header, 'trello-minus');
			    _Util__WEBPACK_IMPORTED_MODULE_1__.Util.addClass(header, 'trello-plus');
		    }
	    });

    	let count = list.count_members();

	    let members = '<em>Cards:</em>[' + list.cards.length + '] ';
	    for(var c in count) {
		    if(count.hasOwnProperty(c)) {
			    members += count[c].member.name + ':[' + count[c].cnt + ']&nbsp;&nbsp;';
		    }
	    }

	    const countEl = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('p', 'trello-count');
	    expander.appendChild(countEl);
	    countEl.innerHTML = members;

	    for(let card of list.cards) {
	    	presentCard(expander, card);
	    }
    }

    let presentCard = (div, card) => {
	    //
	    // Heading
	    //
	    let date = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.formatDatetime(card.created);

		let cardDiv = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div', 'trello-card');
		div.appendChild(cardDiv);
		cardDiv.innerHTML = `<h4><span class="trello-date">${date}</span>${card.name}</h4>`;

	    //
	    // Members
	    //
	    let members = '';
	    for(let id of card.members) {
		    var member = card.board.members[id];
		    if(members.length > 0) {
			    members += ' / ';
		    }
		    members += '<span>' + member.name + '</span>';
	    }

	    let membersP = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('p', 'trello-card-members')
	    cardDiv.appendChild(membersP);
	    membersP.innerHTML = members;


	    //
	    // Description
	    //
	    let desc = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div', 'trello-description');
	    cardDiv.appendChild(desc);
	    desc.innerHTML = card.desc;

	    presentComments(cardDiv, card);
	    presentUpdates(cardDiv, card);
    }
    this.presentCard = presentCard;

    let presentComments = (div, card) => {
	    if(card.comments.length === 0) {
		    return;
	    }

	    let commentDiv = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div', 'trello-comments');
	    div.appendChild(commentDiv);

		for(let comment of card.comments) {
			let member = card.board.members[comment.member];
			let memberName = member !== undefined ? member.name : "undefined";
			let date = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.formatDatetime(comment.date);

			let h5 = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('h5');
			commentDiv.appendChild(h5);
			h5.innerHTML = `<span class="trello-date">${date}</span>${memberName}`;

			let textDiv = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div');
			commentDiv.appendChild(textDiv);
			textDiv.innerHTML = comment.text;
		}
    }

    let presentUpdates = (div, card) => {
	    if(card.updates.length === 0) {
		    return;
	    }

	    let updateDiv = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.createElement('div', 'trello-updates');
	    div.appendChild(updateDiv);

	    for(let update of card.updates) {
		    var member = card.board.members[update.member];
		    var memberName = member !== undefined ? member.name : "undefined";
		    var date = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.formatDatetime(update.date);
		    let p = document.createElement('p');
		    updateDiv.appendChild(p);
		    p.innerHTML = '<span class="date">' + date + '</span> ' + memberName +
			    ' moved from <span class="list">' + update.listBefore +
			    '</span> to <span class="list">' + update.listAfter + '</span>';
	    }
    }
}

/// @cond
BoardView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__.DataView.prototype);
BoardView.prototype.constructor = BoardView;
/// @endcond


/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Card.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Card.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/**
 * @file
 * Representation of a Trello list in a board
 */



const Card = function(board, list, data) {
    var that = this;

    this.board = board;
    this.list = list;
    this.id = data.id;
    this.name = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.strip_tags(data.name);
    this.data = data;
    this.desc = '<p>' +
        _Util__WEBPACK_IMPORTED_MODULE_0__.Util.strip_tags(data.desc).replace(/\n/gm, '<p>') +
        '</p>';
    this.created = new Date(parseInt(data.id.substr(0, 8), 16) * 1000);

    this.members = [];

    data.idMembers.forEach(function(id) {
        that.members.push(id);
    });

    this.comments = [];
    this.updates = [];
}

Card.prototype.sort_updates = function() {
    this.updates.sort(function(a, b) {
        if(a.date < b.date) {
            return -1;
        } else if(a.date == b.date) {
            return 0;
        } else {
            return 1;
        }
    });
}

/**
 * Determine the last time this card was moved.
 * This is used to determine when a completed card was
 * moved to Completed.
 */
Card.prototype.final_time = function() {
    if(this.updates.length > 0) {
        return this.updates[this.updates.length-1].date;
    }

    return this.created;
}

/**
 * Count members from a collection of cards.
 * @param board Board object
 * @param list array of Card objects
 * @returns object with id as property to object {cnt: ?, member: ?}
 */
Card.count_members = function(board, list) {
    var count = {};

    list.forEach(function(card) {
        card.members.forEach(function(id) {
            var member = board.members[id];
            if(count.hasOwnProperty(member.id)) {
                count[member.id].cnt++;
            } else {
                count[member.id] = {cnt: 1, member: member};
            }
        })
    });

    return count;
}


/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Comment.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Comment.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/**
 * @file
 * Representation of a Trello comment on a card
 */



/**
 Array
 (
 [id] => 57eec1ca22684646b1193abd
 [idMemberCreator] => 57ec1bdafeedcbbc73d600d1
 [data] => Array
 (
 [list] => Array
 (
 [name] => Design
 [id] => 57e920a2b34518203fd5f319
 )

 [board] => Array
 (
 [shortLink] => i9eXE4yJ
 [name] => Project 1 Team: Arbo
 [id] => 57e9204ac3f323f1785d7be4
 )

 [card] => Array
 (
 [shortLink] => Fggvd4nX
 [idShort] => 21
 [name] => Visual Paradigm Class Design
 [id] => 57eec0776fd005f7b81c8239
 )

 [text] => Visual Paradigm Class Design
 )

 [type] => commentCard
 [date] => 2016-09-30T19:49:30.974Z
 [memberCreator] => Array
 (
 [id] => 57ec1bdafeedcbbc73d600d1
 [avatarHash] =>
 [fullName] => Brittany Galliers
 [initials] => BG
 [username] => brittanygalliers1
 )
 * @param board
 * @param card
 * @param data
 * @constructor
 */
const Comment = function(board, card, data) {
    this.board = board;
    this.card = card;
    this.member = data.idMemberCreator;
    this.text = '<p>' +
        _Util__WEBPACK_IMPORTED_MODULE_0__.Util.strip_tags(data.data.text).replace(/\n/gm, '<p>') +
        '</p>';

    this.data = data;
    this.date = new Date(Date.parse(data.date));
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DataView.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DataView.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataView": () => (/* binding */ DataView)
/* harmony export */ });
/*
 * Base object for views of Trello data.
 */

const DataView = function() {

}

DataView.prototype.present = function(div, board) {}




/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DisconnectedView.js":
/*!******************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DisconnectedView.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisconnectedView": () => (/* binding */ DisconnectedView)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");


const DisconnectedView = function(element, trello, options) {
	// Ensure empty
	element.innerHTML = '';

	let div = document.createElement('div');
	element.appendChild(div);
	_Util__WEBPACK_IMPORTED_MODULE_0__.Util.addClass(div, 'trello-sprinter');

	let p = document.createElement('p');
	div.appendChild(p);
	_Util__WEBPACK_IMPORTED_MODULE_0__.Util.addClass(p, 'center');

	let button = document.createElement('button');
	p.appendChild(button);
	button.innerText = 'Connect to Trello';
	button.addEventListener('click', (event) => {
		event.preventDefault();
		trello.authorize();
	})
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/List.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/List.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Card.js");
/**
 * @file
 * Representation of a Trello list in a board
 */



const List = function(board, data) {
    this.board = board;
    this.id = data.id;
    this.name = data.name;
    this.data = data;
    this.cards = [];

    this.cards_by_id = {};
}

List.prototype.add_card = function(card) {
    this.cards.push(card);
    this.cards_by_id[card.id] = card;
}

List.prototype.find_card = function(id) {
    if(this.cards_by_id.hasOwnProperty(id)) {
        return this.cards_by_id[id];
    }

    return null;
}

List.prototype.count_members = function() {
    return _Card__WEBPACK_IMPORTED_MODULE_0__.Card.count_members(this.board, this.cards);
}



/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/MainView.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/MainView.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainView": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Board.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/BoardView.js");
/* harmony import */ var _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprints/SprintView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintView.js");
/* harmony import */ var _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprints/SprintTableView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintTableView.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisconnectedView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DisconnectedView.js");







const MainView = function(element, trello, options) {
	// Ensure empty
	element.innerHTML = '';

	let div = document.createElement('div');
	element.appendChild(div);
	_Util__WEBPACK_IMPORTED_MODULE_0__.Util.addClass(div, 'trello-sprinter');

	let p = document.createElement('p');
	div.appendChild(p);
	_Util__WEBPACK_IMPORTED_MODULE_0__.Util.addClass(p, 'center');

	let button = document.createElement('button');
	p.appendChild(button);
	button.innerText = 'Disconnect';
	button.addEventListener('click', (event) => {
		event.preventDefault();
		trello.disconnect();

		new _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__.DisconnectedView(element, trello, options);
	})


	let pStatus = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.createElement('p', 'trello-status');
	pStatus.innerText = 'Connecting to Trello...';
	div.appendChild(pStatus);

	let pMsg = _Util__WEBPACK_IMPORTED_MODULE_0__.Util.createElement('p', 'trello-msg');
	div.appendChild(pMsg);

	_Board__WEBPACK_IMPORTED_MODULE_1__.Board.fetch(trello, options.board, options, pMsg, (board) => {
		// Success
		pStatus.innerText = 'Trello Board: ' + board.name;
		pMsg.parentNode.removeChild(pMsg);

		for(let view in options.views) {
			switch(view) {
				case 'board':
					let v = new _BoardView__WEBPACK_IMPORTED_MODULE_2__.BoardView(div, board);
					v.present();
					break;

				case 'sprint':
					v = new _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__.SprintView(div, board, options.views.sprint);
					v.present();
					break;

				case 'sprintTable':
					v = new _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__.SprintTableView(div, board, options.views.sprintTable);
					v.present();
					break;
			}
		}
	}, (msg) => {
		// Failure
		pMsg.parentNode.removeChild(pMsg);
		pStatus.innerText = msg;
	});

	//trello.fetch();

}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Member.js":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Member.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": () => (/* binding */ Member)
/* harmony export */ });
/*
 * Representation of a Trello member in a board
 */

const Member = function(board, data) {
    this.board = board;
    this.id = data.id;
    this.name = data.fullName;
    this.data = data;
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprint.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprint.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprint": () => (/* binding */ Sprint)
/* harmony export */ });
/*
 * Represents a single sprint in the sprints analysis
 */

const Sprint = function(sprints, start, end) {
    this.sprints = sprints;
    this.start_meeting = start;
    this.end_meeting = end;

    this.completed = [];
}

Sprint.prototype.end_time = function() {
    return new Date(this.end_meeting.created.getTime() +
        (this.sprints.sprint_time_slop * 1000));
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintMember.js":
/*!**********************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintMember.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SprintMember": () => (/* binding */ SprintMember)
/* harmony export */ });
/**
 * @file
 * Team member statistics for a sprint
 */

const SprintMember = function(sprints, member) {
    this.member = member;
    this.sprints = sprints;

    this.meetings_count = 0;
    this.meetings_attended = 0;
    
    this.completed_count = 0;
    this.completed_total = 0;
    
    this.reviews_count = 0;
    this.reviews_total = 0;
}

SprintMember.prototype.meetings_percentage = function() {
    if(this.meetings_count <= this.sprints.meetings_slop) {
        return '(insufficient meetings)';
    }

    var per = this.meetings_attended / (this.meetings_count - this.sprints.meetings_slop);
    if(per > 1) {
        per = 1;
    }

    return per.toFixed(2);
}

SprintMember.prototype.completed_factor = function(teamSize) {
    if(this.completed_total === 0) {
        return 0;
    }

    var factor = this.completed_count /
        (this.completed_total / teamSize * this.sprints.completed_factor);
    if(factor > 1) {
        factor = 1;
    }
    
    return factor.toFixed(2);
}

SprintMember.prototype.reviewing_factor = function(teamSize) {
    if(this.reviews_total === 0) {
        return 0;
    }

    var factor = this.reviews_count /
        (this.reviews_total / teamSize * this.sprints.reviewing_factor);
    if(factor > 1) {
        factor = 1;
    }

    return factor.toFixed(2);
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintTableView.js":
/*!*************************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintTableView.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SprintTableView": () => (/* binding */ SprintTableView)
/* harmony export */ });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/BoardView.js");
/*
 * Trello board view that displays sprint result in a table.
 */






const SprintTableView = function(div, board, options) {
    _DataView__WEBPACK_IMPORTED_MODULE_0__.DataView.call(this);

    let addHeadings = true;
    if(options.addHeadings !== undefined) {
        addHeadings = options.addHeadings;
    }

    this.present = function() {
        const view = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-sprint-table');
        div.appendChild(view);

	    const table = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('table');
	    view.appendChild(table);

        if(options.class !== undefined) {
	        _Util__WEBPACK_IMPORTED_MODULE_2__.Util.addClass(table, options.class);
        }

	    //
	    // Create the sprint analysis
	    //
	    const sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__.Sprints(board);
	    const teamSize = sprints.num_members();

	    if(addHeadings) {
		    tableHeading(table, board, sprints);
	    }

	    var rowHTML = '';
	    function item(data) {
		    rowHTML += '<td>' + data + '</td>';
	    }

	    for(var id in sprints.members) {
		    if(sprints.members.hasOwnProperty(id)) {
			    var member = sprints.members[id];
			    var id = member.member.id;

			    rowHTML = '';

			    // Our statistics
			    item(board.name);
			    item(teamSize);
			    item(member.member.name);
			    item(member.meetings_attended);
			    item(member.meetings_count);
			    item(member.meetings_percentage());
			    item(member.completed_count);
			    item(member.completed_total);
			    item(member.completed_factor(teamSize));
			    item(member.reviews_count);
			    item(member.reviews_total);
			    item(member.reviewing_factor(teamSize));
			    item(sprints.sprints.length);

			    sprints.sprints.forEach(function(sprint) {
				    var cnt = 0;
				    sprint.completed.forEach(function(card) {
					    if(card.members.length == 1 && card.members[0] == id) {
						    cnt++;
					    }
				    });

				    item(cnt);
				    item(sprint.completed.length);
			    });

			    if(!isNaN(addHeadings)) {
				    for(var i=sprints.sprints.length; i<addHeadings; i++) {
					    item("&nbsp;");
					    item("&nbsp;");
				    }
			    }

			    const tr = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('tr');
			    tr.innerHTML = rowHTML;
			    table.appendChild(tr);
		    }
	    }
    }

    const tableHeading = function(table, board, sprints) {
        const tr = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('tr');
        table.appendChild(tr);

        if(options.tr1class !== undefined) {
            _Util__WEBPACK_IMPORTED_MODULE_2__.Util.addClass(tr, options.tr1class);
        }

	    var rowHTML = '';
	    function item(data) {
		    rowHTML += '<th><div>' + data + '</div></th>';
	    }

	    item("Team");
	    item("#");
	    item("Member");
	    item("Attended");
	    item("Total");
	    item("%");
	    item("Completed");
	    item("Total");
	    item("%");
	    item("Reviews");
	    item("Total");
	    item("%");
	    item("Sprints");

	    if(addHeadings === true) {
		    for(var i=1; i<=sprints.sprints.length; i++) {
			    item(i);
			    item("#");
		    }
	    } else {
		    for(var i=1; i<=addHeadings; i++) {
			    item(i);
			    item("#");
		    }
	    }

        tr.innerHTML = rowHTML;
    }
}

/// @cond
SprintTableView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__.DataView.prototype);
SprintTableView.prototype.constructor = SprintTableView;
/// @endcond


SprintTableView.prototype.table_headings = function(board, sprints) {

}



/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintView.js":
/*!********************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintView.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SprintView": () => (/* binding */ SprintView)
/* harmony export */ });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/BoardView.js");
/**
 * @file
 * Trello board view that displays sprint results
 */






const SprintView = function(div, board) {
    _DataView__WEBPACK_IMPORTED_MODULE_0__.DataView.call(this);

    // This uses BoardView to draw what it knows how to draw
    const board_view = new _BoardView__WEBPACK_IMPORTED_MODULE_4__.BoardView(div, board);

    this.present = function() {
	    //
	    // Create the sprint analysis
	    //
	    const sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__.Sprints(board);

		let view = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-sprints');
		div.appendChild(view);

	    let h2 = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('h2');
	    h2.innerText = 'Sprints Analysis';
	    view.appendChild(h2);

		present_errors(view, sprints);
		present_warnings(view, sprints);

	    if(sprints.errors.length > 0) {
	        return;
	    }

	    present_sprints(view, sprints);
		present_members(view, sprints);
    }

    let present_errors = function(div, sprints) {
	    if(sprints.errors.length === 0) {
	        return;
	    }

	    let errors = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-errors');
	    div.appendChild(errors);

	    errors.innerHTML = '<h3>Errors</h3>';

	    for(let error of sprints.errors) {
	    	let p = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('p');
	    	errors.appendChild(p);
	    	p.innerHTML = '<span class="trello-code">' + error.code + ':</span> ' + error.msg;
	    }
    }

    let present_warnings = function(div, sprints) {
    	if(sprints.warnings.length === 0) {
    		return;
    	}

	    let warnings = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-warnings');
	    div.appendChild(warnings);

	    warnings.innerHTML = '<h3>Warnings</h3>';

	    for(let warning of sprints.warnings) {
		    let p = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('p');
		    warnings.appendChild(p);
		    p.innerHTML = '<span class="trello-code">' + warning.code + ':</span> ' + warning.msg;
	    }
    }

    let present_sprints = function(div, sprints) {
		let view = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-view');
		div.appendChild(view);

	    for(var s=1; s<=sprints.sprints.length; s++) {
	        var sprint = sprints.sprints[s-1];
	        present_sprint(view, sprints, s, sprint);
	    }
    }

    let present_sprint = function(div, sprints, num, sprint) {
	    const fmDate = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.formatDatetime(sprint.start_meeting.created);
	    const toDate = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.formatDatetime(sprint.end_meeting.created);
	    const completed = sprint.completed.length;

	    //
	    // Member counts for completed
	    //
        const counts = _Card__WEBPACK_IMPORTED_MODULE_3__.Card.count_members(sprints.board, sprint.completed);

	    let totalCompleted = 0;
	    for(let sprint of sprints.sprints) {
		    totalCompleted += sprint.completed.length;
	    }


	    let completionFactor = 0.00;
	    if(totalCompleted > 0) {
	        completionFactor = completed / (totalCompleted / sprints.sprints.length * 0.8);
	        if(completionFactor > 1) {
	            completionFactor = 1;
	        }
	    }

	    completionFactor = completionFactor.toFixed(2);

	    const header = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('h3', 'trello-plus');
	    div.appendChild(header);
	    header.innerHTML = '<span class="date">' + completed +
         ' tasks ' + completionFactor + ' / ' + fmDate + ' to ' + toDate +
         '</span>Sprint: ' + num;

	    const expander = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-expand');
	    expander.style.display = 'none';
	    div.appendChild(expander);

	    header.addEventListener('click', (event) => {
		    if(expander.style.display === 'none') {
			    expander.style.display = 'block';
			    _Util__WEBPACK_IMPORTED_MODULE_2__.Util.removeClass(header, 'trello-plus');
			    _Util__WEBPACK_IMPORTED_MODULE_2__.Util.addClass(header, 'trello-minus');
		    } else {
			    expander.style.display = 'none';
			    _Util__WEBPACK_IMPORTED_MODULE_2__.Util.removeClass(header, 'trello-minus');
			    _Util__WEBPACK_IMPORTED_MODULE_2__.Util.addClass(header, 'trello-plus');
		    }
	    });

        board_view.presentCard(expander, sprint.start_meeting);
        board_view.presentCard(expander, sprint.end_meeting);

	    //
	    // Completed
	    //
	    let pCompleted = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('p', 'trello-completed-header');
	    expander.appendChild(pCompleted);
	    pCompleted.innerText = 'Sprint Completed Tasks';

	    let pMembers = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('p', 'trello-count');
	    expander.appendChild(pMembers);

	    let members = '<em>Completed:</em>[' + sprint.completed.length + '] ';
	    for(var c in counts) {
	        if(counts.hasOwnProperty(c)) {
	            members += counts[c].member.name + ':[' + counts[c].cnt + ']&nbsp;&nbsp;';
	        }
	    }

	    pMembers.innerHTML = members;

	    //
	    // Present completed cards
	    //
	    for(let i=0; i<sprint.completed.length; i++) {
	        let completed = sprint.completed[i];
	        board_view.presentCard(expander, completed);
	    }
    }

    let present_members = function(div, sprints) {
    	let membersDiv = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-members');
    	div.appendChild(membersDiv);

	    for(var id in sprints.members) {
	        if(sprints.members.hasOwnProperty(id)) {
	            var member = sprints.members[id];
	            present_member(membersDiv, sprints, member);
	        }
	    }

		present_info(membersDiv, sprints);
    }

    let present_member = function(div, sprints, member) {
    	let memberDiv = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-member');
    	div.appendChild(memberDiv);

	    let meetings = sprints.meetings_slop === 1 ? ' meeting' : ' meetings';
	    let teamSize = sprints.num_members();

	    memberDiv.innerHTML = '<h4>' + member.member.name + '</h4>' +

	        '<p>Meetings attended: ' + member.meetings_attended + '/' + member.meetings_count +
	        ' percentage: ' + member.meetings_percentage() +
	        ' <em>You are allowed to miss ' + sprints.meetings_slop + meetings +  '</em>' +
	        '</p>' +

	        '<p>Tasks completed: ' + member.completed_count +
	        '/' + (member.completed_total / teamSize).toFixed(2) + ' for a completion factor of: ' +
	        member.completed_factor(teamSize) + '</p>' +

	        '<p>Reviews completed: ' + member.reviews_count + ' for a reviewing factor of: ' +
	        member.reviewing_factor(teamSize) + '</p>';
    }

    let present_info = function(div, sprints) {
    	const infoDiv = _Util__WEBPACK_IMPORTED_MODULE_2__.Util.createElement('div', 'trello-info');
    	div.appendChild(infoDiv);

    	infoDiv.innerHTML = '<p>The completion factor for tasks is based on a metric that every' +
		    ' team member is expected to complete ' + (sprints.completed_factor * 100).toFixed(0) + '% of' +
		    ' an equal distribution of tasks. Values less than 1.00 indicate that you will be' +
		    ' losing points on the assignment.</p>' +
		    '<p>The reviewing factor for tasks is based on a metric that every team member' +
		    ' is expected to review ' + (sprints.reviewing_factor * 100).toFixed(0) + '% of an equal' +
		    ' distribution of tasks. This factor is based on a metric that 90% of tasks should' +
		    ' be programming tasks. Values less than 1.00 indicate that you will be' +
		    ' losing points on the assignment.</p>'
    }
}

/// @cond
SprintView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__.DataView.prototype);
SprintView.prototype.constructor = SprintView;
/// @endcond


/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js":
/*!*****************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprints": () => (/* binding */ Sprints)
/* harmony export */ });
/* harmony import */ var _Sprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprint */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/Sprint.js");
/* harmony import */ var _SprintMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SprintMember */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Sprints/SprintMember.js");
/*
 * Sprint analysis of Trello board
 */




const Sprints = function(board) {
    var that = this;

    /// Number of missed meetings allow
    this.meetings_slop = 1;


    /// Number of seconds after meeting time to consider completed
    /// in a current sprint in seconds.
    this.sprint_time_slop = 5 * 60 * 60;   // 5 hours
    
    /// Each users is expected to complete 80% of his share of tasks
    this.completed_factor = 0.8;
    
    /// Each users is expected to complete 80% of 90% of the task count in reviews
    this.reviewing_factor = 0.8 * 0.9;

    this.board = board;

    this.errors = [];
    this.warnings = [];

    this.members = {};
    this.sprints = [];

    this.design = null;
    this.risks = null;
    this.meetings = null;
    this.todo = null;
    this.sprint_active = null;
    this.sprint_completed = null;
    this.completed = null;

    //
    // Copy over the members
    //
    for(var id in board.members) {
        var member = board.members[id];
        if(member.name.toLowerCase() === "cse335") {
            continue;
        }

        this.members[id] = new _SprintMember__WEBPACK_IMPORTED_MODULE_1__.SprintMember(this, member);
    }

    //
    // Find all of the required lists
    //
    this.find_lists();

    if(this.errors.length > 0) {
        this.error('e900');
        return;
    }

    //
    // Order testing
    //
    this.order_test();

    //
    // Determine attendance
    //
    this.meeting_attendance();

    //
    // Convert meetings into sprints
    //
    this.create_sprints();

    //
    // Sort completed into sprints
    //
    this.sort_completed();

    //
    // Completed statistics
    //
    this.completed_statistics();
}

/**
 * Ensure all required lists exist.
 */
Sprints.prototype.find_lists = function() {
    // Find the "Design" list
    this.design = this.board.find_list('Design');
    if(this.design === null) {
        this.error('e001');
    }

    // Find the "Risks" list
    this.risks = this.board.find_list('Risks');
    if(this.risks === null) {
        this.error('e002');
    }

    // Find the "Meetings" list
    this.meetings = this.board.find_list('Meetings');
    if(this.meetings === null) {
        this.error('e003');
    }

    // Find the "To Do" list
    this.todo = this.board.find_list('To Do');
    if(this.todo === null) {
        this.error('e004');
    }

    // Find the "This Sprint Active" list
    this.sprint_active = this.board.find_list('This Sprint Active');
    if(this.sprint_active === null) {
        this.error('e005');
    }

    // Find the "This Sprint Completed" list
    this.sprint_completed = this.board.find_list('This Sprint Completed');
    if(this.sprint_completed === null) {
        this.error('e006');
    }

    // Find the "Completed" list
    this.completed = this.board.find_list('Completed');
    if(this.completed === null) {
        this.error('e007');
    }
}

/**
 * Ensure lists are in the right order
 */
Sprints.prototype.order_test = function() {
    const order = this.board.options.cards;

    for(var i=0; i<order.length; i++) {
        if(this.board.lists[i].name.toLowerCase() !== order[i].toLowerCase()) {
            this.warning('w001');
            return;
        }
    }
}

/**
 * Count meeting attendance for a user
 */
Sprints.prototype.meeting_attendance = function() {
    var that = this;

    var meetings_count = this.meetings.cards.length;
    for(var id in this.members) {
        var member = this.members[id];
        member.meetings_count = meetings_count;
        member.meetings_attended = 0;
    }

    this.meetings.cards.forEach(function(card) {
        card.members.forEach(function(id) {
            var member = that.find_member(id);
            if(member !== null) {
                member.meetings_attended++;
            }
        });
    });

}

Sprints.prototype.create_sprints = function() {
    var meetings = this.meetings.cards.slice();

    meetings.sort(function(a, b) {
        if(a.created < b.created) {
            return -1;
        } else if(a.created === b.created) {
            return 0;
        } else {
            return 1;
        }
    });

    for(var i=0; i<(meetings.length - 1); i++) {
        this.sprints.push(new _Sprint__WEBPACK_IMPORTED_MODULE_0__.Sprint(this, meetings[i], meetings[i+1]));
    }
}

Sprints.prototype.sort_completed = function() {
    var that = this;

    var completed = this.completed.cards.slice();
    completed.sort(function(a, b) {
        var at = a.final_time();
        var bt = b.final_time();
        if(at === bt) {
            return 0;
        } else if(at < bt) {
            return -1;
        }

        return 1;
    });

    completed.forEach(function(completed) {
        //
        // Was this card ever in the risk list?
        //
        let risk = false;
        for(let update of completed.updates) {
            if(update.listBefore === 'Risk') {
                risk = true;
            }
        }

        //
        // We ignore "risk" cards
        //
        if(!risk) {
            const date = completed.final_time();
            let i=0;
            for( ; i<that.sprints.length;  i++) {
                const sprint = that.sprints[i];
                if(date <= sprint.end_time()) {
                    break;
                }
            }

            if(i >= that.sprints.length) {
                i = that.sprints.length - 1;
            }

            const sprint = that.sprints[i];
            sprint.completed.push(completed);
        }

    });
}

Sprints.prototype.completed_statistics = function() {
    var completed_count = 0;
    var reviews_total = 0;

    for(var i=0; i<this.sprints.length; i++) {
        const sprint = this.sprints[i];
        completed_count += sprint.completed.length;

        for(let j=0; j<sprint.completed.length; j++) {
            const completed = sprint.completed[j];

            if(completed.members.length === 1) {
                const id = completed.members[0];
                const member = this.find_member(id);
                if(member !== null) {
                    member.completed_count++;
                }
            } else if(completed.members.length === 0) {
                this.warning("w002", "Completed task <em>" + completed.name +
                    "</em> has no team members assigned. Nobody will get credit for that task.")
            } else {
                this.warning("w003", "Completed task <em>" + completed.name +
                "</em> has more than one team member assigned. Nobody will get credit for that task.");
            }

            // Are they any reviews?
            if(completed.comments.length > 0) {
                reviews_total++;
                const id = completed.comments[0].member;
                const member = this.find_member(id);
                if(member !== null) {
                    member.reviews_count++;
                }
            }
        }
    }

    for(var id in this.members) {
        this.members[id].completed_total = completed_count;
        this.members[id].reviews_total = reviews_total;
    }
}

Sprints.prototype.find_member = function(id) {
    if(this.members.hasOwnProperty(id)) {
        return this.members[id];
    }

    return null;
}

Sprints.prototype.num_members = function() {
    var cnt = 0;

    for(var id in this.members) {
        if(this.members.hasOwnProperty(id)) {
            cnt++;
        }
    }

    return cnt;
}

Sprints.prototype.error = function(code) {
    // Does the error already exist?
    for(var i=0; i<this.errors.length;  i++) {
        var error = this.errors[i];
        if(error.code === code) {
            return;
        }
    }

    switch(code) {
        case 'e001':
            this.errors.push({code: code, msg: "There is no list named 'Design'"});
            break;

        case 'e002':
            this.errors.push({code: code, msg: "There is no list named 'Risks'"});
            break;

        case 'e003':
            this.errors.push({code: code, msg: "There is no list named 'Meetings'"});
            break;

        case 'e004':
            this.errors.push({code: code, msg: "There is no list named 'To Do'"});
            break;

        case 'e005':
            this.errors.push({code: code, msg: "There is no list named 'This Sprint Active'"});
            break;

        case 'e006':
            this.errors.push({code: code, msg: "There is no list named 'This Sprint Completed'"});
            break;

        case 'e007':
            this.errors.push({code: code, msg: "There is no list named 'Completed'"});
            break;

        case 'e900':
            this.errors.push({code: code, msg: "Fatal errors, unable to proceed with sprints analysis"});
            break;
    }
}

Sprints.prototype.warning = function(code, msg) {
    if(msg !== undefined) {
        this.warnings.push({code: code, msg: msg});
        return;
    }

    switch(code) {
        case 'w001':
            var msg = "Your lists are not in the correct order. " +
                "The exact order should be:";

            let first = true;
            for(const card of this.board.options.cards) {
                if(first) {
                    first = false;
                } else {
                    msg += ',';
                }

                msg += ' ' + card;
            }

            this.warnings.push({code: code, msg: msg});
            break;

    }
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/TrelloSprinter.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/TrelloSprinter.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrelloSprinter": () => (/* binding */ TrelloSprinter)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/options.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisconnectedView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/DisconnectedView.js");
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainView */ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/MainView.js");
/* harmony import */ var trello_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! trello-connect */ "./.yarn/cache/trello-connect-npm-2.0.7-2f2481cf50-d9edb4a517.zip/node_modules/trello-connect/index.js");






const TrelloSprinter = function(userOptions) {
	// Default and supplied options
	const opts = _Util__WEBPACK_IMPORTED_MODULE_1__.Util.merge(_options__WEBPACK_IMPORTED_MODULE_0__.options, userOptions);

	const trello = new trello_connect__WEBPACK_IMPORTED_MODULE_4__.TrelloConnect(opts);

	_Util__WEBPACK_IMPORTED_MODULE_1__.Util.ready(() => {
		let elements;
		if(opts.sel.nodeType) {
			elements = [opts.sel];
		} else {
			elements = document.querySelectorAll(opts.sel);
		}

		for(let i=0; i<elements.length; i++) {
			switch(trello.state) {
				case trello_connect__WEBPACK_IMPORTED_MODULE_4__.TrelloConnect.DISCONNECTED:
					new _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__.DisconnectedView(elements[i], trello, opts);
					break;

				default:
					new _MainView__WEBPACK_IMPORTED_MODULE_3__.MainView(elements[i], trello, opts);
					break;
			}
		}
	});



}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Update.js":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Update.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update": () => (/* binding */ Update)
/* harmony export */ });
/**
 * @file
 * Representation of a Trello update on a card
 */

const Update = function(board, card, data) {
    this.board = board;
    this.card = card; 
    this.data = data;
    this.member = data.idMemberCreator;
    this.listBefore = data.data.listBefore.name;
    this.listAfter = data.data.listAfter.name;
    this.date = new Date(Date.parse(data.date));
}



/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/Util.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });

const Util = function() {}

Util.merge = function(obj1, obj2) {
	var obj = {};

	for(const key in obj1) {
		if(obj1.hasOwnProperty(key)) {
			obj[key] = obj1[key];
		}
	}

	for(const key in obj2) {
		if(obj2.hasOwnProperty(key)) {
			obj[key] = obj2[key];
		}
	}

	return obj;
}

/**
 * Remove all HTML tags from a string.
 * @param str String to process
 * @returns string without tags
 */
Util.strip_tags = function(str) {
	return str.replace(/<(?:.|\n)*?>/gm, '');
}

Util.createElement = function(type, cls) {
	let e = document.createElement(type);
	if(cls !== undefined) {
		Util.addClass(e, cls);
	}

	return e;
}

Util.addClass = function(el, classNames) {
	const names = classNames.split(' ');
	for(const name of names) {
		if (el.classList)
			el.classList.add(name);
		else
			el.className += ' ' + name;
	}
}

Util.removeClass = function(el, className) {
	if (el.classList)
		el.classList.remove(className);
	else
		el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

Util.ready = function(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}


/**
 * Convert a JavaScript Date object to a string.
 *
 * This uses formatting that is subset of the PHP date() function.
 * @param date Date object
 * @param format Optional format string (default is 'n-d-Y h:ia').
 * @returns {string}
 */
Util.formatDatetime = function(date, format) {

	function pad(i, n) {
		var s = '' + i;
		while(s.length < n) {
			s = '0' + s;
		}

		return s;
	}

	if(format === undefined) {
		format = 'n-d-Y h:ia';
	}

	var hours = date.getHours();
	var hour = hours;
	var am = 'a';
	if(hours == 0) {
		hour = 12;
	} else if(hours == 12) {
		am = 'p';
	} else if(hours > 12) {
		hour = hours - 12;
		am = 'p';
	}

	var str = '';
	for(var i=0; i<format.length; i++) {
		switch(format.charAt(i)) {
			case 'n':
				str += date.getMonth() + 1;
				break;

			case 'm':
				str += pad(date.getMonth() + 1, 2);
				break;

			case 'd':
				str += pad(date.getDate(), 2);
				break;

			case 'Y':
				str += date.getFullYear();
				break;

			case 'g':
				str += hour;
				break;

			case 'h':
				str += pad(hour, 2);
				break;

			case 'i':
				str += pad(date.getMinutes(), 2);
				break;

			case 's':
				str += pad(date.getSeconds(), 2);
				break;

			case 'a':
				str += am;
				break;

			default:
				str += format.charAt(i);
				break;
		}
	}

	return str;
}

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/options.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/src/options.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });

const options = {
	sel: '#trello',
	version: 1,
	"apiEndpoint": "https://api.trello.com",
	"authEndpoint": "https://trello.com",
	"intentEndpoint": "https://trello.com",
	key: '',

	// Prefix to apply to local storage. Useful to
	// disambiguate multiple uses on the same site
	localPrefix: '',

	// Name of the board we are fetching
	board: '',

	/** Optional: Only consider meetings after this time (Unix time) */
	after: null,

	views: {
		'board': {},
		'sprint': {}
	},

	name: 'TrelloSprinter',

	// Default cards
	cards: ['Design', 'Risks', 'Meetings',
		'To Do', 'This Sprint Active',
		'This Sprint Completed', 'Completed']
};



/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/img/minus.png":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/img/minus.png ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/img/plus.png":
/*!*******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.0-961b797bad-04fb8281de.zip/node_modules/trello-sprinter/img/plus.png ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII=";

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Trello": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./vendor/cl/trello/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci90cmVsbG8uc2NzcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci90cmVsbG8uc2Nzcz80OWIwIiwid2VicGFjazovL2NvdXJzZWxpYi8uLy55YXJuL2NhY2hlL3RyZWxsby1jb25uZWN0LW5wbS0yLjAuNy0yZjI0ODFjZjUwLWQ5ZWRiNGE1MTcuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tY29ubmVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMC05NjFiNzk3YmFkLTA0ZmI4MjgxZGUuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMC05NjFiNzk3YmFkLTA0ZmI4MjgxZGUuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0Rpc2Nvbm5lY3RlZFZpZXcuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMC05NjFiNzk3YmFkLTA0ZmI4MjgxZGUuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0xpc3QuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMC05NjFiNzk3YmFkLTA0ZmI4MjgxZGUuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjAtOTYxYjc5N2JhZC0wNGZiODI4MWRlLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMC05NjFiNzk3YmFkLTA0ZmI4MjgxZGUuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjAtOTYxYjc5N2JhZC0wNGZiODI4MWRlLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludE1lbWJlci5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMC05NjFiNzk3YmFkLTA0ZmI4MjgxZGUuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50Vmlldy5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjAtOTYxYjc5N2JhZC0wNGZiODI4MWRlLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9UcmVsbG9TcHJpbnRlci5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4wLTk2MWI3OTdiYWQtMDRmYjgyODFkZS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvVXBkYXRlLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjAtOTYxYjc5N2JhZC0wNGZiODI4MWRlLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VdGlsLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjAtOTYxYjc5N2JhZC0wNGZiODI4MWRlLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1RyZWxsb0ZhY3Rvcnl9IGZyb20gJy4vanMvVHJlbGxvRmFjdG9yeSc7XG5cblRyZWxsb0ZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XG4iLCJpbXBvcnQge1RyZWxsb1NwcmludGVyVmlld30gZnJvbSAnLi9UcmVsbG9TcHJpbnRlclZpZXcnO1xuXG5leHBvcnQgY29uc3QgVHJlbGxvRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xufVxuXG5UcmVsbG9GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcblxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XG5cdFx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXRyZWxsby1zcHJpbnRlcicpO1xuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRuZXcgVHJlbGxvU3ByaW50ZXJWaWV3KHNpdGUsIGVsZW1lbnRzW2ldKTtcblx0XHR9XG5cdH0pO1xufSIsImltcG9ydCBUcmVsbG9TcHJpbnRlciBmcm9tIFwidHJlbGxvLXNwcmludGVyXCI7XG5cbmV4cG9ydCBjb25zdCBUcmVsbG9TcHJpbnRlclZpZXcgPSBmdW5jdGlvbihzaXRlLCBlbGVtZW50KSB7XG5cdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQuaW5uZXJUZXh0KTtcblx0ZWxlbWVudC5pbm5lclRleHQgPSAnJztcblx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHR2YXIgb3B0aW9ucyA9IHtcblx0XHRzZWw6IGVsZW1lbnQsXG5cdFx0a2V5OiBqc29uLmtleSxcblx0XHRib2FyZDoganNvbi50ZWFtLFxuXHRcdHZpZXdzOiBqc29uLnZpZXdzLFxuXHRcdGFmdGVyOiBqc29uLmFmdGVyXG5cdH07XG5cblx0aWYoanNvbi5jYXJkcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5jYXJkcyA9IGpzb24uY2FyZHM7XG5cdH1cblxuXHRuZXcgVHJlbGxvU3ByaW50ZXIob3B0aW9ucyk7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1jMjllMDBjZjBlLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjEtYjkzYTJkZTBkNC0xNzBmZGJjNjMwLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWMyOWUwMGNmMGUvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjcuMS1iOTNhMmRlMGQ0LTE3MGZkYmM2MzAuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtYzI5ZTAwY2YwZS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuNy4xLWI5M2EyZGUwZDQtMTcwZmRiYzYzMC56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3BsdXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWludXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi50cmVsbG8tc3ByaW50ZXIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLXN0YXR1cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgcC5jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgaDMge1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDAgMC4yNWVtIDIwcHg7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IGgzIHNwYW4uZGF0ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmctdG9wOiAwLjI1ZW07XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IHAudHJlbGxvLWNvbXBsZXRlZC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLXBsdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzLCBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDZwdDtcXG4gIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWV4cGFuZCwgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLWVycm9ycyB7XFxuICAtbW96LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gIGJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLWNvdW50IHtcXG4gIG1hcmdpbjogMCAwIDFlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIHtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkMGZkO1xcbiAgbWFyZ2luOiAwLjVlbSAwIDAgMDtcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgLnRyZWxsby1jYXJkLW1lbWJlcnMge1xcbiAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwLjVlbSAxZW07XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiBwIHtcXG4gIG1hcmdpbjogMCAwIDAuMjVlbSAwO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHtcXG4gIG1hcmdpbjogMCAyZW07XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyBoNSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHAge1xcbiAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHtcXG4gIG1hcmdpbjogMWVtIDJlbTtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHNwYW4ubGlzdCB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHtcXG4gIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mge1xcbiAgYmFja2dyb3VuZDogI2ZmODBkZjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLW1lbWJlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xcbiAgbWFyZ2luOiAxZW0gM2VtIDZwdCAzZW07XFxuICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHNwYW4udHJlbGxvLWNvZGUsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mgc3Bhbi50cmVsbG8tY29kZSwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHNwYW4udHJlbGxvLWNvZGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8sIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLWluZm8ge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBkaXYudHJlbGxvLWluZm8gcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8gcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8taW5mbyBwIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnQtdGFibGUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjAtOTYxYjc5N2JhZC0wNGZiODI4MWRlLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3RyZWxsby5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0UsU0FBQTtBQUxGO0FBT0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBWlU7RUFhVixZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQXJCVTtFQXNCVixZQUFBO0FBTko7QUFTRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBOUJVO0VBK0JWLFlBQUE7QUFQSjtBQVVFO0VBQ0Usa0JBQUE7QUFSSjtBQVdFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBVEo7QUFXSTtFQUNFLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBVE47QUFXTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVRSO0FBYUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhOO0FBZUU7RUFDRSx5REFBQTtBQWJKO0FBZ0JFO0VBQ0UseURBQUE7QUFkSjtBQWlCRTtFQUNFLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFmSjtBQWtCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFvQkU7RUFDRSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7QUFsQko7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuQko7QUF1QkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBckJKO0FBdUJJO0VBQ0UseUJBNUdjO0VBNkdkLG1CQUFBO0VBQ0EsaUJBQUE7QUFyQk47QUF3Qkk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdEJOO0FBeUJJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdkJOO0FBNkJFO0VBTUUsaUJBQUE7QUFoQ0o7QUEyQkk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBekJOO0FBZ0NFO0VBQ0UsYUFBQTtBQTlCSjtBQWdDSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBOUJOO0FBZ0NNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUE5QlI7QUFrQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBaENOO0FBcUNFO0VBQ0UsZUFBQTtBQW5DSjtBQXFDSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQ047QUFxQ007RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW5DUjtBQXNDTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFwQ1I7QUEwQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUF4Q0o7QUEwQ0k7RUFDRSxtQkEvTFM7RUFnTVQsWUFBQTtBQXhDTjtBQTJDSTtFQUNFLG1CQW5NVztFQW9NWCxZQUFBO0FBekNOO0FBNENJO0VBQ0UsbUJBdk1XO0VBd01YLFlBQUE7QUExQ047QUE0Q007RUFDRSxrQkFBQTtBQTFDUjtBQThDSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUE1Q047QUE4Q007RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUE1Q1I7QUErQ007RUFDRSxpQkFBQTtBQTdDUjtBQWdETTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBOUNSO0FBaURNO0VBQ0UsMkJBQUE7QUEvQ1I7QUFpRFE7RUFDRSxhQUFBO0FBL0NWO0FBcURFO0VBQ0UsY0FBQTtBQW5ESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdHJlbGxvLWJsdWU6ICMwMjZBQTc7XFxuJHRyZWxsby1jYXJkLXRpdGxlOiAjODFkMGZkO1xcbiR0cmVsbG8tZXJyb3I6ICNjNDE0MjU7XFxuJHRyZWxsby13YXJuaW5nOiAjZmY4MGRmO1xcbiR0cmVsbG8tbWVtYmVyczogI2YwZjBmMDtcXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIHtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogJHRyZWxsby1ibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICBwLnRyZWxsby1zdGF0dXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAkdHJlbGxvLWJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIHAudHJlbGxvLW1zZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogJHRyZWxsby1ibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBwLmNlbnRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIGRpdi50cmVsbG8tdmlldyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIGgzIHtcXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAwIDAuMjVlbSAyMHB4O1xcblxcbiAgICAgIHNwYW4uZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHAudHJlbGxvLWNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBjb2xvcjogZGVlcHNreWJsdWU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50cmVsbG8tcGx1cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1nL3BsdXMucG5nJyk7XFxuICB9XFxuXFxuICAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWcvbWludXMucG5nJyk7XFxuICB9XFxuXFxuICAudHJlbGxvLXBsdXMsIC50cmVsbG8tbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGRpdi50cmVsbG8tZXhwYW5kIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHQ7XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgfVxcblxcbiAgLy8gU2hhZG93c1xcbiAgZGl2LnRyZWxsby1leHBhbmQsIC50cmVsbG8tZXJyb3JzIHtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gICAgYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICB9XFxuXFxuICBwLnRyZWxsby1jb3VudCB7XFxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgfVxcblxcblxcbiAgZGl2LnRyZWxsby1jYXJkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG5cXG4gICAgaDQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0cmVsbG8tY2FyZC10aXRsZTtcXG4gICAgICBtYXJnaW46IDAuNWVtIDAgMCAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICB9XFxuXFxuICAgIGg0IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG4gICAgfVxcblxcbiAgICAudHJlbGxvLWNhcmQtbWVtYmVycyB7XFxuICAgICAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG4gIH1cXG5cXG5cXG5cXG4gIGRpdi50cmVsbG8tZGVzY3JpcHRpb24ge1xcbiAgICBwIHtcXG4gICAgICBtYXJnaW46IDAgMCAwLjI1ZW0gMDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICB9XFxuXFxuICAgIG1hcmdpbjogMC41ZW0gMWVtO1xcbiAgfVxcblxcblxcbiAgZGl2LnRyZWxsby1jb21tZW50cyB7XFxuICAgIG1hcmdpbjogMCAyZW07XFxuXFxuICAgIGg1IHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcblxcbiAgICAgIHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICB9XFxuICB9XFxuXFxuXFxuICBkaXYudHJlbGxvLXVwZGF0ZXMge1xcbiAgICBtYXJnaW46IDFlbSAyZW07XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgICBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgfVxcblxcbiAgICAgIHNwYW4ubGlzdCB7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB9XFxuXFxuICAgIH1cXG4gIH1cXG5cXG4gIGRpdi50cmVsbG8tc3ByaW50cyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgIGRpdi50cmVsbG8tZXJyb3JzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkdHJlbGxvLWVycm9yO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICBkaXYudHJlbGxvLXdhcm5pbmdzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkdHJlbGxvLXdhcm5pbmc7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuXFxuICAgIGRpdi50cmVsbG8tbWVtYmVycyB7XFxuICAgICAgYmFja2dyb3VuZDogJHRyZWxsby1tZW1iZXJzO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG5cXG4gICAgICBkaXYudHJlbGxvLW1lbWJlciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGRpdi50cmVsbG8tZXJyb3JzLCBkaXYudHJlbGxvLXdhcm5pbmdzLCBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xcbiAgICAgIG1hcmdpbjogMWVtIDNlbSA2cHQgM2VtO1xcbiAgICAgIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICAgICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG5cXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgfVxcblxcbiAgICAgIHNwYW4udHJlbGxvLWNvZGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgfVxcblxcbiAgICAgIGgzLCBoNCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgZGl2LnRyZWxsby1pbmZvIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2LnRyZWxsby1zcHJpbnQtdGFibGUge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTQ1Zjc1YmNiNGIvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4xLTRiYmI2ZWM3N2YtNDcwZmVlZjY4MC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNDVmNzViY2I0Yi8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tMy4zLjEtNGJiYjZlYzc3Zi00NzBmZWVmNjgwLnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWMyOWUwMGNmMGUvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjcuMS1iOTNhMmRlMGQ0LTE3MGZkYmM2MzAuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci1ucG0tNS4wLjAtOWI0NDEwNjdjOS02ZDQ4MzczM2E0LnppcC9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3Nhc3MtbG9hZGVyLXZpcnR1YWwtMjhjMGU3YjQ3NC8wL2NhY2hlL3Nhc3MtbG9hZGVyLW5wbS0xMy4wLjItY2E2OGFmZDczZC02MzA2NzEyY2M3LnppcC9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNFswXS5ydWxlc1swXS51c2VbM10hLi90cmVsbG8uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1jMjllMDBjZjBlLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi43LjEtYjkzYTJkZTBkNC0xNzBmZGJjNjMwLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLTI4YzBlN2I0NzQvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMC4yLWNhNjhhZmQ3M2QtNjMwNjcxMmNjNy56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTRbMF0ucnVsZXNbMF0udXNlWzNdIS4vdHJlbGxvLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHR2ZXJzaW9uOiAxLFxuXHRcImFwaUVuZHBvaW50XCI6IFwiaHR0cHM6Ly9hcGkudHJlbGxvLmNvbVwiLFxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXG5cdGtleTogJycsXG5cblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xuXHQvLyBkaXNhbWJpZ3VhdGUgbXVsdGlwbGUgdXNlcyBvbiB0aGUgc2FtZSBzaXRlXG5cdGxvY2FsUHJlZml4OiAnJyxcbn07XG5cbi8qKlxuICogTWVyZ2UgdHdvIEphdmFzY3JpcHQgb2JqZWN0cyBpbnRvIGEgc2luZ2xlIHJlc3VsdC5cbiAqIEBwYXJhbSBvYmoxIEZpcnN0IG9iamVjdFxuICogQHBhcmFtIG9iajIgU2Vjb25kIG9iamVjdC4gU2Vjb25kIG9iamVjdCB2YWx1ZXMgdGFrZSBwcmVjZWRlbmNlLlxuICovXG5jb25zdCBtZXJnZSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcblx0dmFyIG9iaiA9IHt9O1xuXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMSkge1xuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoyKSB7XG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqO1xufVxuXG4vLyBMb2NhbCBzdG9yYWdlIGFkZHJlc3MgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHdoaWxlIGNvbm5lY3RlZFxuY29uc3QgVG9rZW5TdG9yYWdlID0gJ19uOXM1UnlnOHdhJztcblxuZXhwb3J0IGNvbnN0IFRyZWxsb0Nvbm5lY3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdHZhciB0aGF0ID0gdGhpcztcblxuXHRvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdGxldCB0b2tlbiA9ICcnO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcblx0XHQvLyBUaWxsIHdlIGtub3cgb3RoZXJ3aXNlXG5cdFx0dGhhdC5zdGF0ZSA9IFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEO1xuXG5cdFx0Ly9cblx0XHQvLyBTZWUgaWYgdGhlcmUgaXMgYSB0b2tlbiBpbiB0aGUgY3VycmVudCBVUkxcblx0XHQvL1xuXHRcdGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCByZSA9IC8jdG9rZW49KC4qKSQvO1xuXHRcdGNvbnN0IG1hdGNoZXMgPSBocmVmLm1hdGNoKHJlKTtcblx0XHRpZihtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0dG9rZW4gPSBtYXRjaGVzWzFdO1xuXG5cdFx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBJcyB0aGVyZSBhIHRva2VuIGluIGxvY2FsIHN0b3JhZ2U/XG5cdFx0Ly9cblx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXHRcdHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xuXHRcdGlmKHRva2VuICE9PSBudWxsICYmIHRva2VuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkNPTk5FQ1RFRDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQXV0aG9yaXplIHdpdGggVHJlbGxvXG5cdCAqXG5cdCAqIFJlZGlyZWN0cyB0byB0aGUgVHJlbGxvIGF1dGhvcml6YXRpb24gZW5kcG9pbnQsIHdoaWNoIHJlZGlyZWN0cyBiYWNrXG5cdCAqIHRvIHRoaXMgcGFnZSBhZnRlciBhdXRob3JpemF0aW9uIHdpdGggdGhlIHRva2VuIGluIHRoZSBVUkwuXG5cdCAqL1xuXHR0aGlzLmF1dGhvcml6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IHJldHVybl91cmwgPSBlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXHRcdGNvbnN0IHVybCA9IGAke29wdGlvbnMuYXV0aEVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vYXV0aG9yaXplP2V4cGlyYXRpb249bmV2ZXImbmFtZT0ke29wdGlvbnMubmFtZX0mYCArXG5cdFx0XHRgY2FsbGJhY2tfbWV0aG9kPWZyYWdtZW50JnNjb3BlPXJlYWQmcmVzcG9uc2VfdHlwZT10b2tlbiZrZXk9JHtvcHRpb25zLmtleX0mcmV0dXJuX3VybD0ke3JldHVybl91cmx9YDtcblx0XHR3aW5kb3cubG9jYXRpb24gPSB1cmw7XG5cdH1cblxuXHQvKipcblx0ICogRGlzY29ubmVjdCBmcm9tIFRyZWxsby5cblx0ICpcblx0ICogVGhpcyBmb3JnZXRzIHRoZSB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlLlxuXHQgKlxuXHQgKi9cblx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlKTtcblx0XHR0b2tlbiA9ICcnO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBlcmZvcm0gYSBHRVQgcXVlcnkgZm9yIFRyZWxsb1xuXHQgKiBAcGFyYW0gdXJsIFRoZSBib2FyZCBVUkwgYWZ0ZXIgdGhlIHZlcnNpb24sIGxpa2UgXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCJcblx0ICogQHBhcmFtIHN1Y2Nlc3MgRnVuY3Rpb24gY2FsbGVkIG9uIHN1Y2Nlc3Mgd2l0aCBkYXRhIGFyZ3VtZW50XG5cdCAqIEBwYXJhbSBmYWlsdXJlIEZ1bmN0aW9uIGNhbGxlZCBvbiBmYWlsdXJlIHdpdGggZGF0YSBhcmd1bWVudFxuXHQgKiBAcGFyYW0gbXNnIE9wdGlvbmFsIGVsZW1lbnQgdG8gcHV0IHJhdGUgbGltaXRpbmcgbWVzc2FnZSBpbnRvXG5cdCAqL1xuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKHVybCwgc3VjY2VzcywgZmFpbHVyZSwgbXNnKSB7XG5cblx0XHRsZXQgdHJpZXMgPSAxO1xuXG5cdFx0bGV0IG1heHRyaWVzID0gNTsgIC8vIE1heGltdW0gbnVtYmVyIG9mIHRyaWVzXG5cdFx0bGV0IGJhY2tvZmYgPSAxMDsgICAvLyBzZWNvbmRzXG5cdFx0bGV0IGJhY2tvZmZJbmNyZWFzZSA9IDEuMjU7IC8vIEFtb3VudCB0byBpbmNyZWFzZSBiYWNrb2ZmIGFmdGVyIGVhY2ggdHJ5XG5cblx0XHRmdW5jdGlvbiB0cmVsbG9HZXQoKSB7XG5cdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0cmVxdWVzdC5vcGVuKCdHRVQnLCBgJHtvcHRpb25zLmFwaUVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vJHt1cmx9JmtleT0ke29wdGlvbnMua2V5fSZ0b2tlbj0ke3Rva2VufWAsIHRydWUpO1xuXG5cdFx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG5cdFx0XHRcdFx0Ly8gU3VjY2VzcyFcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0c3VjY2VzcyhkYXRhKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3Jcblx0XHRcdFx0XHRmYWlsdXJlKClcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCtyZXF1ZXN0LnN0YXR1cyA9PT0gNDI5ICYmIHRyaWVzIDwgbWF4dHJpZXMpIHtcblx0XHRcdFx0XHR0cmllcysrO1xuXHRcdFx0XHRcdGlmKG1zZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRtc2cuaW5uZXJUZXh0ID0gXCJSYXRlIGxpbWl0ZWQsIGF0dGVtcHQgXCIgKyB0cmllcyArIFwiIGFmdGVyIFwiICtcblx0XHRcdFx0XHRcdFx0YmFja29mZi50b0ZpeGVkKDApICsgXCIgc2Vjb25kc1wiO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dHJlbGxvR2V0KCk7XG5cdFx0XHRcdFx0XHR9LCBiYWNrb2ZmICogMTAwMCk7XG5cdFx0XHRcdFx0XHRiYWNrb2ZmICo9IGJhY2tvZmZJbmNyZWFzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZmFpbHVyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXF1ZXN0LnNlbmQoKTtcblx0XHR9XG5cblx0XHR0cmVsbG9HZXQoKTtcblx0fVxuXG5cdGluaXRpYWxpemUoKTtcbn1cblxuVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQgPSAnRCc7XG5UcmVsbG9Db25uZWN0LkNPTk5FQ1RFRCA9ICdDJztcblxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvQ29ubmVjdDtcbiIsImltcG9ydCAnLi90cmVsbG8uc2Nzcyc7XG5cbmltcG9ydCB7VHJlbGxvU3ByaW50ZXJ9IGZyb20gJy4vc3JjL1RyZWxsb1NwcmludGVyJztcblxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvU3ByaW50ZXI7XG5leHBvcnQge1RyZWxsb1NwcmludGVyfTtcbiIsIi8qXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBCb2FyZFxuICovXG5cbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL01lbWJlcic7XG5pbXBvcnQge0xpc3R9IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQge0NhcmR9IGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQge1VwZGF0ZX0gZnJvbSAnLi9VcGRhdGUnO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnO1xuXG5leHBvcnQgY29uc3QgQm9hcmQgPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XG5cblx0dGhpcy5kYXRhID0gZGF0YTtcblx0dGhpcy5pZCA9IGRhdGEuaWQ7XG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcblx0dGhpcy5saXN0cyA9IFtdO1xuXHR0aGlzLm1lbWJlcnMgPSB7fTtcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuXHR0aGlzLmZpbmRfY2FyZCAgPSBmdW5jdGlvbihpZCkge1xuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjYXJkID0gdGhpcy5saXN0c1tpXS5maW5kX2NhcmQoaWQpO1xuXHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gY2FyZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRoaXMuYWRkX21lbWJlciA9IGZ1bmN0aW9uKG1lbWJlcikge1xuXHRcdHRoaXMubWVtYmVyc1ttZW1iZXIuaWRdID0gbWVtYmVyO1xuXHR9XG59XG5cbkJvYXJkLmZldGNoID0gZnVuY3Rpb24odHJlbGxvLCBuYW1lLCBvcHRpb25zLCBtc2csIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcblx0bXNnLmlubmVyVGV4dCA9ICdGZXRjaGluZyBib2FyZCAnICsgbmFtZTtcblxuXHQvLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgb3BlbiBhc3luYyBjYWxscyB0aGVyZSBhcmUgcmlnaHQgbm93XG5cdGxldCBhY3RpdmUgPSAwO1xuXG5cdC8vIFdpbGwgYmUgc2V0IHRvIHBvaW50IHRvIGEgbmV3IEJvYXJkIG9iamVjdFxuXHRsZXQgYm9hcmQgPSBudWxsO1xuXG5cdGFzeW5jX3N0YXJ0KCk7XG5cdHRyZWxsby5nZXQoXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCIsXG5cdFx0KGRhdGEpID0+IHtcblx0XHRcdGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyAgaSsrKSB7XG5cdFx0XHRcdHZhciBib2FyZERhdGEgPSBkYXRhW2ldO1xuXHRcdFx0XHRpZihib2FyZERhdGEubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHQvLyBXZSBoYXZlIGZvdW5kIHRoZSBib2FyZCAoaWYgbm90IGNsb3NlZClcblx0XHRcdFx0XHRpZighYm9hcmREYXRhLmNsb3NlZCkge1xuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBib2FyZCBvYmplY3Rcblx0XHRcdFx0XHRcdGJvYXJkID0gbmV3IEJvYXJkKGJvYXJkRGF0YSwgb3B0aW9ucyk7XG5cblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBtZW1iZXJzaGlwXG5cdFx0XHRcdFx0XHRmZXRjaF9tZW1iZXJzaGlwKGJvYXJkKTtcblxuXHRcdFx0XHRcdFx0Ly8gRmV0Y2ggdGhlIGxpc3RzIGZvciB0aGUgYm9hcmRcblx0XHRcdFx0XHRcdGZldGNoX2xpc3RzKGJvYXJkKTtcblxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGJvYXJkID09PSBudWxsKSB7XG5cdFx0XHRcdGZhaWx1cmUoXCJVbmFibGUgdG8gZmluZCBUcmVsbG8gYm9hcmQgXCIgKyBuYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhc3luY19lbmQoKTtcblx0XHR9LFxuXHRcdChkYXRhKSA9PiB7XG5cdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBib2FyZHNcIilcblx0XHR9LFxuXHRcdG1zZ1xuXHQpXG5cblx0LyoqXG5cdCAqIEZldGNoIHRoZSBtZW1iZXJzaGlwIG9mIHRoZSBib2FyZC5cblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHRvIGZldGNoIGZvclxuXHQgKi9cblx0ZnVuY3Rpb24gZmV0Y2hfbWVtYmVyc2hpcChib2FyZCkge1xuXHRcdGFzeW5jX3N0YXJ0KCk7XG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZC9cIiArIGJvYXJkLmlkICsgXCIvbWVtYmVycz9maWVsZHM9YWxsXCIsXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihtZW1iZXJEYXRhKSB7XG5cdFx0XHRcdFx0dmFyIG1lbWJlciA9IG5ldyBNZW1iZXIoYm9hcmQsIG1lbWJlckRhdGEpO1xuXHRcdFx0XHRcdGJvYXJkLmFkZF9tZW1iZXIobWVtYmVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbWVtYmVyc2hpcFwiKSB9LFxuXHRcdFx0bXNnXG5cdFx0KVxuXHR9XG5cblxuXHRmdW5jdGlvbiBmZXRjaF9saXN0cyhib2FyZCkge1xuXHRcdG1zZy5pbm5lclRleHQgPSBcIkZldGNoaW5nIGxpc3RzIGZvciBcIiArIG5hbWU7XG5cblx0XHRhc3luY19zdGFydCgpO1xuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmRzL1wiICsgYm9hcmQuaWQgKyBcIi9saXN0cz9maWx0ZXI9b3BlblwiLFxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24obGlzdERhdGEpIHtcblx0XHRcdFx0XHRpZighbGlzdERhdGEuY2xvc2VkKSB7XG5cdFx0XHRcdFx0XHR2YXIgbGlzdCA9IG5ldyBMaXN0KGJvYXJkLCBsaXN0RGF0YSk7XG5cdFx0XHRcdFx0XHRib2FyZC5saXN0cy5wdXNoKGxpc3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0ZmV0Y2hfY2FyZHMoYm9hcmQpO1xuXHRcdFx0XHRhc3luY19lbmQoKTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGxpc3RzXCIpIH0sXG5cdFx0XHRtc2dcblx0XHQpXG5cdH1cblxuXHQvKipcblx0ICogRmV0Y2ggYWxsIGNhcmRzIGFzIGEgc2luZ2xlIGJhdGNoIG9wZXJhdGlvbi5cblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHdlIGFyZSBmZXRjaGluZyBmb3Jcblx0ICovXG5cdGZ1bmN0aW9uIGZldGNoX2NhcmRzKGJvYXJkKSB7XG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgY2FyZHNcIjtcblxuXHRcdC8vIENvbGxlY3QgdXAgYWxsIFVSTHMgZm9yIGFsbCBvZiB0aGUgbGlzdHNcblx0XHR2YXIgdXJscyA9ICcnO1xuXHRcdGZvcih2YXIgaT0wOyBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgbGlzdCA9IGJvYXJkLmxpc3RzW2ldO1xuXHRcdFx0aWYodXJscy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHVybHMgKz0gJywnO1xuXHRcdFx0fVxuXHRcdFx0dXJscyArPSBcIi9saXN0cy9cIiArIGxpc3QuaWQgKyBcIi9jYXJkcy9vcGVuXCI7XG5cdFx0fVxuXG5cdFx0Ly8gR2V0IGdldCBpdFxuXHRcdGFzeW5jX3N0YXJ0KCk7XG5cdFx0dHJlbGxvLmdldChcIi9iYXRjaD91cmxzPVwiICsgdXJscyxcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0Ly8gTG9vcCBvdmVyIHRoZSByZXN1bHQgZm9yIGVhY2ggcHJvdmlkZWQgVVJMXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPGRhdGEubGVuZ3RoICYmIGk8Ym9hcmQubGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gYm9hcmQubGlzdHNbaV07XG5cdFx0XHRcdFx0Y29uc3QgY2FyZHNEYXRhID0gZGF0YVtpXVsyMDBdO1xuXG5cdFx0XHRcdFx0Y2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oY2FyZERhdGEpIHtcblx0XHRcdFx0XHRcdGlmKCFjYXJkRGF0YS5jbG9zZWQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgY2FyZCA9IG5ldyBDYXJkKGJvYXJkLCBsaXN0LCBjYXJkRGF0YSk7XG5cdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMuYWZ0ZXIgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRpZihjYXJkLmNyZWF0ZWQuZ2V0VGltZSgpIC8gMTAwMCA+IG9wdGlvbnMuYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3QuYWRkX2NhcmQoY2FyZCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxpc3QuYWRkX2NhcmQoY2FyZCk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZldGNoX2FjdGlvbnMoYm9hcmQpO1xuXHRcdFx0XHRhc3luY19lbmQoKTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmRzXCIpIH0sXG5cdFx0XHRtc2dcblx0XHQpXG5cdH1cblxuXG5cdGZ1bmN0aW9uIGZldGNoX2FjdGlvbnMoYm9hcmQpIHtcblx0XHRhc3luY19zdGFydCgpO1xuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL2FjdGlvbnM/ZmlsdGVyPWNvbW1lbnRDYXJkLHVwZGF0ZUNhcmQ6aWRMaXN0JmxpbWl0PTEwMDBcIixcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xuXHRcdFx0XHRcdGlmKCFhY3Rpb24uY2xvc2VkKSB7XG5cdFx0XHRcdFx0XHRpZihhY3Rpb24udHlwZSA9PT0gXCJjb21tZW50Q2FyZFwiKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudChib2FyZCwgY2FyZCwgYWN0aW9uKTtcblx0XHRcdFx0XHRcdFx0XHRjYXJkLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhhY3Rpb24pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSAndXBkYXRlQ2FyZCcpIHtcblx0XHRcdFx0XHRcdFx0bGV0IGNhcmQgPSBib2FyZC5maW5kX2NhcmQoYWN0aW9uLmRhdGEuY2FyZC5pZCk7XG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gbmV3IFVwZGF0ZShib2FyZCwgY2FyZCwgYWN0aW9uKTtcblx0XHRcdFx0XHRcdFx0XHRjYXJkLnVwZGF0ZXMucHVzaCh1cGRhdGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGJvYXJkLmxpc3RzLmZvckVhY2goZnVuY3Rpb24obGlzdCkge1xuXHRcdFx0XHRcdGxpc3QuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XG5cdFx0XHRcdFx0XHRjYXJkLnNvcnRfdXBkYXRlcygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhc3luY19lbmQoKTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmQgaW5mb3JtYXRpb25cIikgfSxcblx0XHRcdG1zZ1xuXHRcdClcblx0fVxuXG5cblx0ZnVuY3Rpb24gYXN5bmNfc3RhcnQoKSB7XG5cdFx0YWN0aXZlKys7XG5cdH1cblxuXHRmdW5jdGlvbiBhc3luY19lbmQoKSB7XG5cdFx0YWN0aXZlLS07XG5cdFx0aWYoYWN0aXZlID09PSAwKSB7XG5cdFx0XHRzdWNjZXNzKGJvYXJkKTtcblx0XHR9XG5cdH1cbn1cblxuQm9hcmQucHJvdG90eXBlLmZpbmRfbGlzdCA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGxpc3QgPSB0aGlzLmxpc3RzW2ldO1xuXHRcdGlmKGxpc3QubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4gbGlzdDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBTdGFuZGFyZCBUcmVsbG8gYm9hcmQgdmlld1xuICovXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuL0RhdGFWaWV3JztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcblxuZXhwb3J0IGNvbnN0IEJvYXJkVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdmlldycpO1xuXHQgICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xuXG5cdCAgICBmb3IobGV0IGxpc3Qgb2YgYm9hcmQubGlzdHMpIHtcblx0XHRcdHByZXNlbnRMaXN0KHZpZXcsIGxpc3QpO1xuXHQgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByZXNlbnRMaXN0ID0gKHZpZXcsIGxpc3QpID0+IHtcbiAgICBcdGNvbnN0IGhlYWRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDMnLCAndHJlbGxvLXBsdXMnKTtcbiAgICBcdGhlYWRlci5pbm5lclRleHQgPSBsaXN0Lm5hbWU7XG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBcdGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xuICAgIFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBcdHZpZXcuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xuXG4gICAgXHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBcdFx0aWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgXHRcdFx0VXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xuICAgIFx0XHRcdFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XG5cdFx0ICAgIH0gZWxzZSB7XG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcblx0XHQgICAgfVxuXHQgICAgfSk7XG5cbiAgICBcdGxldCBjb3VudCA9IGxpc3QuY291bnRfbWVtYmVycygpO1xuXG5cdCAgICBsZXQgbWVtYmVycyA9ICc8ZW0+Q2FyZHM6PC9lbT5bJyArIGxpc3QuY2FyZHMubGVuZ3RoICsgJ10gJztcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudCkge1xuXHRcdCAgICBpZihjb3VudC5oYXNPd25Qcm9wZXJ0eShjKSkge1xuXHRcdFx0ICAgIG1lbWJlcnMgKz0gY291bnRbY10ubWVtYmVyLm5hbWUgKyAnOlsnICsgY291bnRbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xuXHRcdCAgICB9XG5cdCAgICB9XG5cblx0ICAgIGNvbnN0IGNvdW50RWwgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChjb3VudEVsKTtcblx0ICAgIGNvdW50RWwuaW5uZXJIVE1MID0gbWVtYmVycztcblxuXHQgICAgZm9yKGxldCBjYXJkIG9mIGxpc3QuY2FyZHMpIHtcblx0ICAgIFx0cHJlc2VudENhcmQoZXhwYW5kZXIsIGNhcmQpO1xuXHQgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmVzZW50Q2FyZCA9IChkaXYsIGNhcmQpID0+IHtcblx0ICAgIC8vXG5cdCAgICAvLyBIZWFkaW5nXG5cdCAgICAvL1xuXHQgICAgbGV0IGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKGNhcmQuY3JlYXRlZCk7XG5cblx0XHRsZXQgY2FyZERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jYXJkJyk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuXHRcdGNhcmREaXYuaW5uZXJIVE1MID0gYDxoND48c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke2NhcmQubmFtZX08L2g0PmA7XG5cblx0ICAgIC8vXG5cdCAgICAvLyBNZW1iZXJzXG5cdCAgICAvL1xuXHQgICAgbGV0IG1lbWJlcnMgPSAnJztcblx0ICAgIGZvcihsZXQgaWQgb2YgY2FyZC5tZW1iZXJzKSB7XG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbaWRdO1xuXHRcdCAgICBpZihtZW1iZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdCAgICBtZW1iZXJzICs9ICcgLyAnO1xuXHRcdCAgICB9XG5cdFx0ICAgIG1lbWJlcnMgKz0gJzxzcGFuPicgKyBtZW1iZXIubmFtZSArICc8L3NwYW4+Jztcblx0ICAgIH1cblxuXHQgICAgbGV0IG1lbWJlcnNQID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jYXJkLW1lbWJlcnMnKVxuXHQgICAgY2FyZERpdi5hcHBlbmRDaGlsZChtZW1iZXJzUCk7XG5cdCAgICBtZW1iZXJzUC5pbm5lckhUTUwgPSBtZW1iZXJzO1xuXG5cblx0ICAgIC8vXG5cdCAgICAvLyBEZXNjcmlwdGlvblxuXHQgICAgLy9cblx0ICAgIGxldCBkZXNjID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWRlc2NyaXB0aW9uJyk7XG5cdCAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuXHQgICAgZGVzYy5pbm5lckhUTUwgPSBjYXJkLmRlc2M7XG5cblx0ICAgIHByZXNlbnRDb21tZW50cyhjYXJkRGl2LCBjYXJkKTtcblx0ICAgIHByZXNlbnRVcGRhdGVzKGNhcmREaXYsIGNhcmQpO1xuICAgIH1cbiAgICB0aGlzLnByZXNlbnRDYXJkID0gcHJlc2VudENhcmQ7XG5cbiAgICBsZXQgcHJlc2VudENvbW1lbnRzID0gKGRpdiwgY2FyZCkgPT4ge1xuXHQgICAgaWYoY2FyZC5jb21tZW50cy5sZW5ndGggPT09IDApIHtcblx0XHQgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBsZXQgY29tbWVudERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jb21tZW50cycpO1xuXHQgICAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xuXG5cdFx0Zm9yKGxldCBjb21tZW50IG9mIGNhcmQuY29tbWVudHMpIHtcblx0XHRcdGxldCBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbY29tbWVudC5tZW1iZXJdO1xuXHRcdFx0bGV0IG1lbWJlck5hbWUgPSBtZW1iZXIgIT09IHVuZGVmaW5lZCA/IG1lbWJlci5uYW1lIDogXCJ1bmRlZmluZWRcIjtcblx0XHRcdGxldCBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShjb21tZW50LmRhdGUpO1xuXG5cdFx0XHRsZXQgaDUgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdFx0XHRjb21tZW50RGl2LmFwcGVuZENoaWxkKGg1KTtcblx0XHRcdGg1LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke21lbWJlck5hbWV9YDtcblxuXHRcdFx0bGV0IHRleHREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblx0XHRcdHRleHREaXYuaW5uZXJIVE1MID0gY29tbWVudC50ZXh0O1xuXHRcdH1cbiAgICB9XG5cbiAgICBsZXQgcHJlc2VudFVwZGF0ZXMgPSAoZGl2LCBjYXJkKSA9PiB7XG5cdCAgICBpZihjYXJkLnVwZGF0ZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0ICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgbGV0IHVwZGF0ZURpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby11cGRhdGVzJyk7XG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQodXBkYXRlRGl2KTtcblxuXHQgICAgZm9yKGxldCB1cGRhdGUgb2YgY2FyZC51cGRhdGVzKSB7XG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbdXBkYXRlLm1lbWJlcl07XG5cdFx0ICAgIHZhciBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0ICAgIHZhciBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZSh1cGRhdGUuZGF0ZSk7XG5cdFx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdCAgICB1cGRhdGVEaXYuYXBwZW5kQ2hpbGQocCk7XG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBkYXRlICsgJzwvc3Bhbj4gJyArIG1lbWJlck5hbWUgK1xuXHRcdFx0ICAgICcgbW92ZWQgZnJvbSA8c3BhbiBjbGFzcz1cImxpc3RcIj4nICsgdXBkYXRlLmxpc3RCZWZvcmUgK1xuXHRcdFx0ICAgICc8L3NwYW4+IHRvIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEFmdGVyICsgJzwvc3Bhbj4nO1xuXHQgICAgfVxuICAgIH1cbn1cblxuLy8vIEBjb25kXG5Cb2FyZFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xuQm9hcmRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJvYXJkVmlldztcbi8vLyBAZW5kY29uZFxuIiwiLyoqXG4gKiBAZmlsZVxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbGlzdCBpbiBhIGJvYXJkXG4gKi9cblxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0LCBkYXRhKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gVXRpbC5zdHJpcF90YWdzKGRhdGEubmFtZSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmRlc2MgPSAnPHA+JyArXG4gICAgICAgIFV0aWwuc3RyaXBfdGFncyhkYXRhLmRlc2MpLnJlcGxhY2UoL1xcbi9nbSwgJzxwPicpICtcbiAgICAgICAgJzwvcD4nO1xuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaWQuc3Vic3RyKDAsIDgpLCAxNikgKiAxMDAwKTtcblxuICAgIHRoaXMubWVtYmVycyA9IFtdO1xuXG4gICAgZGF0YS5pZE1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgICAgICB0aGF0Lm1lbWJlcnMucHVzaChpZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbW1lbnRzID0gW107XG4gICAgdGhpcy51cGRhdGVzID0gW107XG59XG5cbkNhcmQucHJvdG90eXBlLnNvcnRfdXBkYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudXBkYXRlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZihhLmRhdGUgPT0gYi5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSBsYXN0IHRpbWUgdGhpcyBjYXJkIHdhcyBtb3ZlZC5cbiAqIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiBhIGNvbXBsZXRlZCBjYXJkIHdhc1xuICogbW92ZWQgdG8gQ29tcGxldGVkLlxuICovXG5DYXJkLnByb3RvdHlwZS5maW5hbF90aW1lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy51cGRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1t0aGlzLnVwZGF0ZXMubGVuZ3RoLTFdLmRhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlZDtcbn1cblxuLyoqXG4gKiBDb3VudCBtZW1iZXJzIGZyb20gYSBjb2xsZWN0aW9uIG9mIGNhcmRzLlxuICogQHBhcmFtIGJvYXJkIEJvYXJkIG9iamVjdFxuICogQHBhcmFtIGxpc3QgYXJyYXkgb2YgQ2FyZCBvYmplY3RzXG4gKiBAcmV0dXJucyBvYmplY3Qgd2l0aCBpZCBhcyBwcm9wZXJ0eSB0byBvYmplY3Qge2NudDogPywgbWVtYmVyOiA/fVxuICovXG5DYXJkLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbihib2FyZCwgbGlzdCkge1xuICAgIHZhciBjb3VudCA9IHt9O1xuXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcbiAgICAgICAgICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KG1lbWJlci5pZCkpIHtcbiAgICAgICAgICAgICAgICBjb3VudFttZW1iZXIuaWRdLmNudCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3VudFttZW1iZXIuaWRdID0ge2NudDogMSwgbWVtYmVyOiBtZW1iZXJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvdW50O1xufVxuIiwiLyoqXG4gKiBAZmlsZVxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gY29tbWVudCBvbiBhIGNhcmRcbiAqL1xuXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcblxuLyoqXG4gQXJyYXlcbiAoXG4gW2lkXSA9PiA1N2VlYzFjYTIyNjg0NjQ2YjExOTNhYmRcbiBbaWRNZW1iZXJDcmVhdG9yXSA9PiA1N2VjMWJkYWZlZWRjYmJjNzNkNjAwZDFcbiBbZGF0YV0gPT4gQXJyYXlcbiAoXG4gW2xpc3RdID0+IEFycmF5XG4gKFxuIFtuYW1lXSA9PiBEZXNpZ25cbiBbaWRdID0+IDU3ZTkyMGEyYjM0NTE4MjAzZmQ1ZjMxOVxuIClcblxuIFtib2FyZF0gPT4gQXJyYXlcbiAoXG4gW3Nob3J0TGlua10gPT4gaTllWEU0eUpcbiBbbmFtZV0gPT4gUHJvamVjdCAxIFRlYW06IEFyYm9cbiBbaWRdID0+IDU3ZTkyMDRhYzNmMzIzZjE3ODVkN2JlNFxuIClcblxuIFtjYXJkXSA9PiBBcnJheVxuIChcbiBbc2hvcnRMaW5rXSA9PiBGZ2d2ZDRuWFxuIFtpZFNob3J0XSA9PiAyMVxuIFtuYW1lXSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXG4gW2lkXSA9PiA1N2VlYzA3NzZmZDAwNWY3YjgxYzgyMzlcbiApXG5cbiBbdGV4dF0gPT4gVmlzdWFsIFBhcmFkaWdtIENsYXNzIERlc2lnblxuIClcblxuIFt0eXBlXSA9PiBjb21tZW50Q2FyZFxuIFtkYXRlXSA9PiAyMDE2LTA5LTMwVDE5OjQ5OjMwLjk3NFpcbiBbbWVtYmVyQ3JlYXRvcl0gPT4gQXJyYXlcbiAoXG4gW2lkXSA9PiA1N2VjMWJkYWZlZWRjYmJjNzNkNjAwZDFcbiBbYXZhdGFySGFzaF0gPT5cbiBbZnVsbE5hbWVdID0+IEJyaXR0YW55IEdhbGxpZXJzXG4gW2luaXRpYWxzXSA9PiBCR1xuIFt1c2VybmFtZV0gPT4gYnJpdHRhbnlnYWxsaWVyczFcbiApXG4gKiBAcGFyYW0gYm9hcmRcbiAqIEBwYXJhbSBjYXJkXG4gKiBAcGFyYW0gZGF0YVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBDb21tZW50ID0gZnVuY3Rpb24oYm9hcmQsIGNhcmQsIGRhdGEpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5jYXJkID0gY2FyZDtcbiAgICB0aGlzLm1lbWJlciA9IGRhdGEuaWRNZW1iZXJDcmVhdG9yO1xuICAgIHRoaXMudGV4dCA9ICc8cD4nICtcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGF0YS50ZXh0KS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXG4gICAgICAgICc8L3A+JztcblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRhLmRhdGUpKTtcbn0iLCIvKlxuICogQmFzZSBvYmplY3QgZm9yIHZpZXdzIG9mIFRyZWxsbyBkYXRhLlxuICovXG5cbmV4cG9ydCBjb25zdCBEYXRhVmlldyA9IGZ1bmN0aW9uKCkge1xuXG59XG5cbkRhdGFWaWV3LnByb3RvdHlwZS5wcmVzZW50ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge31cblxuXG4iLCJpbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IERpc2Nvbm5lY3RlZFZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcblx0Ly8gRW5zdXJlIGVtcHR5XG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XG5cblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcblx0VXRpbC5hZGRDbGFzcyhwLCAnY2VudGVyJyk7XG5cblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdCB0byBUcmVsbG8nO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRyZWxsby5hdXRob3JpemUoKTtcblx0fSlcbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcbiAqL1xuXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vQ2FyZCc7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gZnVuY3Rpb24oYm9hcmQsIGRhdGEpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5jYXJkcyA9IFtdO1xuXG4gICAgdGhpcy5jYXJkc19ieV9pZCA9IHt9O1xufVxuXG5MaXN0LnByb3RvdHlwZS5hZGRfY2FyZCA9IGZ1bmN0aW9uKGNhcmQpIHtcbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgdGhpcy5jYXJkc19ieV9pZFtjYXJkLmlkXSA9IGNhcmQ7XG59XG5cbkxpc3QucHJvdG90eXBlLmZpbmRfY2FyZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgaWYodGhpcy5jYXJkc19ieV9pZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHNfYnlfaWRbaWRdO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5MaXN0LnByb3RvdHlwZS5jb3VudF9tZW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIENhcmQuY291bnRfbWVtYmVycyh0aGlzLmJvYXJkLCB0aGlzLmNhcmRzKTtcbn1cblxuIiwiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL0JvYXJkJztcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tICcuL0JvYXJkVmlldyc7XG5pbXBvcnQge1NwcmludFZpZXd9IGZyb20gXCIuL1NwcmludHMvU3ByaW50Vmlld1wiO1xuaW1wb3J0IHtTcHJpbnRUYWJsZVZpZXd9IGZyb20gJy4vU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcnO1xuaW1wb3J0IHtEaXNjb25uZWN0ZWRWaWV3fSBmcm9tIFwiLi9EaXNjb25uZWN0ZWRWaWV3XCI7XG5cbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xuXHQvLyBFbnN1cmUgZW1wdHlcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcblxuXHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcblxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblx0YnV0dG9uLmlubmVyVGV4dCA9ICdEaXNjb25uZWN0Jztcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0cmVsbG8uZGlzY29ubmVjdCgpO1xuXG5cdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKTtcblx0fSlcblxuXG5cdGxldCBwU3RhdHVzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1zdGF0dXMnKTtcblx0cFN0YXR1cy5pbm5lclRleHQgPSAnQ29ubmVjdGluZyB0byBUcmVsbG8uLi4nO1xuXHRkaXYuYXBwZW5kQ2hpbGQocFN0YXR1cyk7XG5cblx0bGV0IHBNc2cgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLW1zZycpO1xuXHRkaXYuYXBwZW5kQ2hpbGQocE1zZyk7XG5cblx0Qm9hcmQuZmV0Y2godHJlbGxvLCBvcHRpb25zLmJvYXJkLCBvcHRpb25zLCBwTXNnLCAoYm9hcmQpID0+IHtcblx0XHQvLyBTdWNjZXNzXG5cdFx0cFN0YXR1cy5pbm5lclRleHQgPSAnVHJlbGxvIEJvYXJkOiAnICsgYm9hcmQubmFtZTtcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XG5cblx0XHRmb3IobGV0IHZpZXcgaW4gb3B0aW9ucy52aWV3cykge1xuXHRcdFx0c3dpdGNoKHZpZXcpIHtcblx0XHRcdFx0Y2FzZSAnYm9hcmQnOlxuXHRcdFx0XHRcdGxldCB2ID0gbmV3IEJvYXJkVmlldyhkaXYsIGJvYXJkKTtcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdzcHJpbnQnOlxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VmlldyhkaXYsIGJvYXJkLCBvcHRpb25zLnZpZXdzLnNwcmludCk7XG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnc3ByaW50VGFibGUnOlxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VGFibGVWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50VGFibGUpO1xuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgKG1zZykgPT4ge1xuXHRcdC8vIEZhaWx1cmVcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XG5cdFx0cFN0YXR1cy5pbm5lclRleHQgPSBtc2c7XG5cdH0pO1xuXG5cdC8vdHJlbGxvLmZldGNoKCk7XG5cbn0iLCIvKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbWVtYmVyIGluIGEgYm9hcmRcbiAqL1xuXG5leHBvcnQgY29uc3QgTWVtYmVyID0gZnVuY3Rpb24oYm9hcmQsIGRhdGEpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5mdWxsTmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xufSIsIi8qXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIHNwcmludCBpbiB0aGUgc3ByaW50cyBhbmFseXNpc1xuICovXG5cbmV4cG9ydCBjb25zdCBTcHJpbnQgPSBmdW5jdGlvbihzcHJpbnRzLCBzdGFydCwgZW5kKSB7XG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcbiAgICB0aGlzLnN0YXJ0X21lZXRpbmcgPSBzdGFydDtcbiAgICB0aGlzLmVuZF9tZWV0aW5nID0gZW5kO1xuXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcbn1cblxuU3ByaW50LnByb3RvdHlwZS5lbmRfdGltZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmVuZF9tZWV0aW5nLmNyZWF0ZWQuZ2V0VGltZSgpICtcbiAgICAgICAgKHRoaXMuc3ByaW50cy5zcHJpbnRfdGltZV9zbG9wICogMTAwMCkpO1xufSIsIi8qKlxuICogQGZpbGVcbiAqIFRlYW0gbWVtYmVyIHN0YXRpc3RpY3MgZm9yIGEgc3ByaW50XG4gKi9cblxuZXhwb3J0IGNvbnN0IFNwcmludE1lbWJlciA9IGZ1bmN0aW9uKHNwcmludHMsIG1lbWJlcikge1xuICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xuICAgIHRoaXMuc3ByaW50cyA9IHNwcmludHM7XG5cbiAgICB0aGlzLm1lZXRpbmdzX2NvdW50ID0gMDtcbiAgICB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkID0gMDtcbiAgICBcbiAgICB0aGlzLmNvbXBsZXRlZF9jb3VudCA9IDA7XG4gICAgdGhpcy5jb21wbGV0ZWRfdG90YWwgPSAwO1xuICAgIFxuICAgIHRoaXMucmV2aWV3c19jb3VudCA9IDA7XG4gICAgdGhpcy5yZXZpZXdzX3RvdGFsID0gMDtcbn1cblxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5tZWV0aW5nc19wZXJjZW50YWdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5tZWV0aW5nc19jb3VudCA8PSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCkge1xuICAgICAgICByZXR1cm4gJyhpbnN1ZmZpY2llbnQgbWVldGluZ3MpJztcbiAgICB9XG5cbiAgICB2YXIgcGVyID0gdGhpcy5tZWV0aW5nc19hdHRlbmRlZCAvICh0aGlzLm1lZXRpbmdzX2NvdW50IC0gdGhpcy5zcHJpbnRzLm1lZXRpbmdzX3Nsb3ApO1xuICAgIGlmKHBlciA+IDEpIHtcbiAgICAgICAgcGVyID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVyLnRvRml4ZWQoMik7XG59XG5cblNwcmludE1lbWJlci5wcm90b3R5cGUuY29tcGxldGVkX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XG4gICAgaWYodGhpcy5jb21wbGV0ZWRfdG90YWwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGZhY3RvciA9IHRoaXMuY29tcGxldGVkX2NvdW50IC9cbiAgICAgICAgKHRoaXMuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMuY29tcGxldGVkX2ZhY3Rvcik7XG4gICAgaWYoZmFjdG9yID4gMSkge1xuICAgICAgICBmYWN0b3IgPSAxO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmFjdG9yLnRvRml4ZWQoMik7XG59XG5cblNwcmludE1lbWJlci5wcm90b3R5cGUucmV2aWV3aW5nX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XG4gICAgaWYodGhpcy5yZXZpZXdzX3RvdGFsID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBmYWN0b3IgPSB0aGlzLnJldmlld3NfY291bnQgL1xuICAgICAgICAodGhpcy5yZXZpZXdzX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMucmV2aWV3aW5nX2ZhY3Rvcik7XG4gICAgaWYoZmFjdG9yID4gMSkge1xuICAgICAgICBmYWN0b3IgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBmYWN0b3IudG9GaXhlZCgyKTtcbn0iLCIvKlxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0IGluIGEgdGFibGUuXG4gKi9cbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4uL0RhdGFWaWV3JztcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XG5pbXBvcnQge0NhcmR9IGZyb20gXCIuLi9DYXJkXCI7XG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xuXG5leHBvcnQgY29uc3QgU3ByaW50VGFibGVWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCwgb3B0aW9ucykge1xuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XG5cbiAgICBsZXQgYWRkSGVhZGluZ3MgPSB0cnVlO1xuICAgIGlmKG9wdGlvbnMuYWRkSGVhZGluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhZGRIZWFkaW5ncyA9IG9wdGlvbnMuYWRkSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50LXRhYmxlJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcblxuXHQgICAgY29uc3QgdGFibGUgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICAgICAgICBpZihvcHRpb25zLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgICBVdGlsLmFkZENsYXNzKHRhYmxlLCBvcHRpb25zLmNsYXNzKTtcbiAgICAgICAgfVxuXG5cdCAgICAvL1xuXHQgICAgLy8gQ3JlYXRlIHRoZSBzcHJpbnQgYW5hbHlzaXNcblx0ICAgIC8vXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xuXHQgICAgY29uc3QgdGVhbVNpemUgPSBzcHJpbnRzLm51bV9tZW1iZXJzKCk7XG5cblx0ICAgIGlmKGFkZEhlYWRpbmdzKSB7XG5cdFx0ICAgIHRhYmxlSGVhZGluZyh0YWJsZSwgYm9hcmQsIHNwcmludHMpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgcm93SFRNTCA9ICcnO1xuXHQgICAgZnVuY3Rpb24gaXRlbShkYXRhKSB7XG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0ZD4nICsgZGF0YSArICc8L3RkPic7XG5cdCAgICB9XG5cblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XG5cdFx0ICAgIGlmKHNwcmludHMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcblx0XHRcdCAgICB2YXIgbWVtYmVyID0gc3ByaW50cy5tZW1iZXJzW2lkXTtcblx0XHRcdCAgICB2YXIgaWQgPSBtZW1iZXIubWVtYmVyLmlkO1xuXG5cdFx0XHQgICAgcm93SFRNTCA9ICcnO1xuXG5cdFx0XHQgICAgLy8gT3VyIHN0YXRpc3RpY3Ncblx0XHRcdCAgICBpdGVtKGJvYXJkLm5hbWUpO1xuXHRcdFx0ICAgIGl0ZW0odGVhbVNpemUpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lbWJlci5uYW1lKTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCk7XG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfY291bnQpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX3BlcmNlbnRhZ2UoKSk7XG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2NvdW50KTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfdG90YWwpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpKTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX2NvdW50KTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX3RvdGFsKTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdpbmdfZmFjdG9yKHRlYW1TaXplKSk7XG5cdFx0XHQgICAgaXRlbShzcHJpbnRzLnNwcmludHMubGVuZ3RoKTtcblxuXHRcdFx0ICAgIHNwcmludHMuc3ByaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNwcmludCkge1xuXHRcdFx0XHQgICAgdmFyIGNudCA9IDA7XG5cdFx0XHRcdCAgICBzcHJpbnQuY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xuXHRcdFx0XHRcdCAgICBpZihjYXJkLm1lbWJlcnMubGVuZ3RoID09IDEgJiYgY2FyZC5tZW1iZXJzWzBdID09IGlkKSB7XG5cdFx0XHRcdFx0XHQgICAgY250Kys7XG5cdFx0XHRcdFx0ICAgIH1cblx0XHRcdFx0ICAgIH0pO1xuXG5cdFx0XHRcdCAgICBpdGVtKGNudCk7XG5cdFx0XHRcdCAgICBpdGVtKHNwcmludC5jb21wbGV0ZWQubGVuZ3RoKTtcblx0XHRcdCAgICB9KTtcblxuXHRcdFx0ICAgIGlmKCFpc05hTihhZGRIZWFkaW5ncykpIHtcblx0XHRcdFx0ICAgIGZvcih2YXIgaT1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBpPGFkZEhlYWRpbmdzOyBpKyspIHtcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcblx0XHRcdFx0ICAgIH1cblx0XHRcdCAgICB9XG5cblx0XHRcdCAgICBjb25zdCB0ciA9IFV0aWwuY3JlYXRlRWxlbWVudCgndHInKTtcblx0XHRcdCAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xuXHRcdFx0ICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcblx0XHQgICAgfVxuXHQgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlSGVhZGluZyA9IGZ1bmN0aW9uKHRhYmxlLCBib2FyZCwgc3ByaW50cykge1xuICAgICAgICBjb25zdCB0ciA9IFV0aWwuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuXG4gICAgICAgIGlmKG9wdGlvbnMudHIxY2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgVXRpbC5hZGRDbGFzcyh0ciwgb3B0aW9ucy50cjFjbGFzcyk7XG4gICAgICAgIH1cblxuXHQgICAgdmFyIHJvd0hUTUwgPSAnJztcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xuXHRcdCAgICByb3dIVE1MICs9ICc8dGg+PGRpdj4nICsgZGF0YSArICc8L2Rpdj48L3RoPic7XG5cdCAgICB9XG5cblx0ICAgIGl0ZW0oXCJUZWFtXCIpO1xuXHQgICAgaXRlbShcIiNcIik7XG5cdCAgICBpdGVtKFwiTWVtYmVyXCIpO1xuXHQgICAgaXRlbShcIkF0dGVuZGVkXCIpO1xuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xuXHQgICAgaXRlbShcIiVcIik7XG5cdCAgICBpdGVtKFwiQ29tcGxldGVkXCIpO1xuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xuXHQgICAgaXRlbShcIiVcIik7XG5cdCAgICBpdGVtKFwiUmV2aWV3c1wiKTtcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcblx0ICAgIGl0ZW0oXCIlXCIpO1xuXHQgICAgaXRlbShcIlNwcmludHNcIik7XG5cblx0ICAgIGlmKGFkZEhlYWRpbmdzID09PSB0cnVlKSB7XG5cdFx0ICAgIGZvcih2YXIgaT0xOyBpPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdCAgICBpdGVtKGkpO1xuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xuXHRcdCAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9YWRkSGVhZGluZ3M7IGkrKykge1xuXHRcdFx0ICAgIGl0ZW0oaSk7XG5cdFx0XHQgICAgaXRlbShcIiNcIik7XG5cdFx0ICAgIH1cblx0ICAgIH1cblxuICAgICAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xuICAgIH1cbn1cblxuLy8vIEBjb25kXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFRhYmxlVmlldztcbi8vLyBAZW5kY29uZFxuXG5cblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUudGFibGVfaGVhZGluZ3MgPSBmdW5jdGlvbihib2FyZCwgc3ByaW50cykge1xuXG59XG5cbiIsIi8qKlxuICogQGZpbGVcbiAqIFRyZWxsbyBib2FyZCB2aWV3IHRoYXQgZGlzcGxheXMgc3ByaW50IHJlc3VsdHNcbiAqL1xuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xuaW1wb3J0IHtTcHJpbnRzfSBmcm9tICcuL1NwcmludHMnO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tIFwiLi4vQm9hcmRWaWV3XCI7XG5cbmV4cG9ydCBjb25zdCBTcHJpbnRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XG5cbiAgICAvLyBUaGlzIHVzZXMgQm9hcmRWaWV3IHRvIGRyYXcgd2hhdCBpdCBrbm93cyBob3cgdG8gZHJhd1xuICAgIGNvbnN0IGJvYXJkX3ZpZXcgPSBuZXcgQm9hcmRWaWV3KGRpdiwgYm9hcmQpO1xuXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XG5cdCAgICAvL1xuXHQgICAgLy8gQ3JlYXRlIHRoZSBzcHJpbnQgYW5hbHlzaXNcblx0ICAgIC8vXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xuXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50cycpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcblxuXHQgICAgbGV0IGgyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXHQgICAgaDIuaW5uZXJUZXh0ID0gJ1NwcmludHMgQW5hbHlzaXMnO1xuXHQgICAgdmlldy5hcHBlbmRDaGlsZChoMik7XG5cblx0XHRwcmVzZW50X2Vycm9ycyh2aWV3LCBzcHJpbnRzKTtcblx0XHRwcmVzZW50X3dhcm5pbmdzKHZpZXcsIHNwcmludHMpO1xuXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBwcmVzZW50X3NwcmludHModmlldywgc3ByaW50cyk7XG5cdFx0cHJlc2VudF9tZW1iZXJzKHZpZXcsIHNwcmludHMpO1xuICAgIH1cblxuICAgIGxldCBwcmVzZW50X2Vycm9ycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xuXHQgICAgaWYoc3ByaW50cy5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICBsZXQgZXJyb3JzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWVycm9ycycpO1xuXHQgICAgZGl2LmFwcGVuZENoaWxkKGVycm9ycyk7XG5cblx0ICAgIGVycm9ycy5pbm5lckhUTUwgPSAnPGgzPkVycm9yczwvaDM+JztcblxuXHQgICAgZm9yKGxldCBlcnJvciBvZiBzcHJpbnRzLmVycm9ycykge1xuXHQgICAgXHRsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xuXHQgICAgXHRlcnJvcnMuYXBwZW5kQ2hpbGQocCk7XG5cdCAgICBcdHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgZXJyb3IuY29kZSArICc6PC9zcGFuPiAnICsgZXJyb3IubXNnO1xuXHQgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmVzZW50X3dhcm5pbmdzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XG4gICAgXHRpZihzcHJpbnRzLndhcm5pbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgIFx0XHRyZXR1cm47XG4gICAgXHR9XG5cblx0ICAgIGxldCB3YXJuaW5ncyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby13YXJuaW5ncycpO1xuXHQgICAgZGl2LmFwcGVuZENoaWxkKHdhcm5pbmdzKTtcblxuXHQgICAgd2FybmluZ3MuaW5uZXJIVE1MID0gJzxoMz5XYXJuaW5nczwvaDM+JztcblxuXHQgICAgZm9yKGxldCB3YXJuaW5nIG9mIHNwcmludHMud2FybmluZ3MpIHtcblx0XHQgICAgbGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHQgICAgd2FybmluZ3MuYXBwZW5kQ2hpbGQocCk7XG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgd2FybmluZy5jb2RlICsgJzo8L3NwYW4+ICcgKyB3YXJuaW5nLm1zZztcblx0ICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJlc2VudF9zcHJpbnRzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdmlldycpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcblxuXHQgICAgZm9yKHZhciBzPTE7IHM8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IHMrKykge1xuXHQgICAgICAgIHZhciBzcHJpbnQgPSBzcHJpbnRzLnNwcmludHNbcy0xXTtcblx0ICAgICAgICBwcmVzZW50X3NwcmludCh2aWV3LCBzcHJpbnRzLCBzLCBzcHJpbnQpO1xuXHQgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmVzZW50X3NwcmludCA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cywgbnVtLCBzcHJpbnQpIHtcblx0ICAgIGNvbnN0IGZtRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LnN0YXJ0X21lZXRpbmcuY3JlYXRlZCk7XG5cdCAgICBjb25zdCB0b0RhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHNwcmludC5lbmRfbWVldGluZy5jcmVhdGVkKTtcblx0ICAgIGNvbnN0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xuXG5cdCAgICAvL1xuXHQgICAgLy8gTWVtYmVyIGNvdW50cyBmb3IgY29tcGxldGVkXG5cdCAgICAvL1xuICAgICAgICBjb25zdCBjb3VudHMgPSBDYXJkLmNvdW50X21lbWJlcnMoc3ByaW50cy5ib2FyZCwgc3ByaW50LmNvbXBsZXRlZCk7XG5cblx0ICAgIGxldCB0b3RhbENvbXBsZXRlZCA9IDA7XG5cdCAgICBmb3IobGV0IHNwcmludCBvZiBzcHJpbnRzLnNwcmludHMpIHtcblx0XHQgICAgdG90YWxDb21wbGV0ZWQgKz0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XG5cdCAgICB9XG5cblxuXHQgICAgbGV0IGNvbXBsZXRpb25GYWN0b3IgPSAwLjAwO1xuXHQgICAgaWYodG90YWxDb21wbGV0ZWQgPiAwKSB7XG5cdCAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IGNvbXBsZXRlZCAvICh0b3RhbENvbXBsZXRlZCAvIHNwcmludHMuc3ByaW50cy5sZW5ndGggKiAwLjgpO1xuXHQgICAgICAgIGlmKGNvbXBsZXRpb25GYWN0b3IgPiAxKSB7XG5cdCAgICAgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSAxO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgY29tcGxldGlvbkZhY3RvciA9IGNvbXBsZXRpb25GYWN0b3IudG9GaXhlZCgyKTtcblxuXHQgICAgY29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xuXHQgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cdCAgICBoZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBjb21wbGV0ZWQgK1xuICAgICAgICAgJyB0YXNrcyAnICsgY29tcGxldGlvbkZhY3RvciArICcgLyAnICsgZm1EYXRlICsgJyB0byAnICsgdG9EYXRlICtcbiAgICAgICAgICc8L3NwYW4+U3ByaW50OiAnICsgbnVtO1xuXG5cdCAgICBjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcblx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xuXG5cdCAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHQgICAgaWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XG5cdFx0ICAgIH0gZWxzZSB7XG5cdFx0XHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcblx0XHQgICAgfVxuXHQgICAgfSk7XG5cbiAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgc3ByaW50LnN0YXJ0X21lZXRpbmcpO1xuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuZW5kX21lZXRpbmcpO1xuXG5cdCAgICAvL1xuXHQgICAgLy8gQ29tcGxldGVkXG5cdCAgICAvL1xuXHQgICAgbGV0IHBDb21wbGV0ZWQgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvbXBsZXRlZC1oZWFkZXInKTtcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBDb21wbGV0ZWQpO1xuXHQgICAgcENvbXBsZXRlZC5pbm5lclRleHQgPSAnU3ByaW50IENvbXBsZXRlZCBUYXNrcyc7XG5cblx0ICAgIGxldCBwTWVtYmVycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBNZW1iZXJzKTtcblxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNvbXBsZXRlZDo8L2VtPlsnICsgc3ByaW50LmNvbXBsZXRlZC5sZW5ndGggKyAnXSAnO1xuXHQgICAgZm9yKHZhciBjIGluIGNvdW50cykge1xuXHQgICAgICAgIGlmKGNvdW50cy5oYXNPd25Qcm9wZXJ0eShjKSkge1xuXHQgICAgICAgICAgICBtZW1iZXJzICs9IGNvdW50c1tjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudHNbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcE1lbWJlcnMuaW5uZXJIVE1MID0gbWVtYmVycztcblxuXHQgICAgLy9cblx0ICAgIC8vIFByZXNlbnQgY29tcGxldGVkIGNhcmRzXG5cdCAgICAvL1xuXHQgICAgZm9yKGxldCBpPTA7IGk8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgIGxldCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2ldO1xuXHQgICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIGNvbXBsZXRlZCk7XG5cdCAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRfbWVtYmVycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xuICAgIFx0bGV0IG1lbWJlcnNEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tbWVtYmVycycpO1xuICAgIFx0ZGl2LmFwcGVuZENoaWxkKG1lbWJlcnNEaXYpO1xuXG5cdCAgICBmb3IodmFyIGlkIGluIHNwcmludHMubWVtYmVycykge1xuXHQgICAgICAgIGlmKHNwcmludHMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcblx0ICAgICAgICAgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XG5cdCAgICAgICAgICAgIHByZXNlbnRfbWVtYmVyKG1lbWJlcnNEaXYsIHNwcmludHMsIG1lbWJlcik7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG5cdFx0cHJlc2VudF9pbmZvKG1lbWJlcnNEaXYsIHNwcmludHMpO1xuICAgIH1cblxuICAgIGxldCBwcmVzZW50X21lbWJlciA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cywgbWVtYmVyKSB7XG4gICAgXHRsZXQgbWVtYmVyRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcicpO1xuICAgIFx0ZGl2LmFwcGVuZENoaWxkKG1lbWJlckRpdik7XG5cblx0ICAgIGxldCBtZWV0aW5ncyA9IHNwcmludHMubWVldGluZ3Nfc2xvcCA9PT0gMSA/ICcgbWVldGluZycgOiAnIG1lZXRpbmdzJztcblx0ICAgIGxldCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcblxuXHQgICAgbWVtYmVyRGl2LmlubmVySFRNTCA9ICc8aDQ+JyArIG1lbWJlci5tZW1iZXIubmFtZSArICc8L2g0PicgK1xuXG5cdCAgICAgICAgJzxwPk1lZXRpbmdzIGF0dGVuZGVkOiAnICsgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkICsgJy8nICsgbWVtYmVyLm1lZXRpbmdzX2NvdW50ICtcblx0ICAgICAgICAnIHBlcmNlbnRhZ2U6ICcgKyBtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpICtcblx0ICAgICAgICAnIDxlbT5Zb3UgYXJlIGFsbG93ZWQgdG8gbWlzcyAnICsgc3ByaW50cy5tZWV0aW5nc19zbG9wICsgbWVldGluZ3MgKyAgJzwvZW0+JyArXG5cdCAgICAgICAgJzwvcD4nICtcblxuXHQgICAgICAgICc8cD5UYXNrcyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIuY29tcGxldGVkX2NvdW50ICtcblx0ICAgICAgICAnLycgKyAobWVtYmVyLmNvbXBsZXRlZF90b3RhbCAvIHRlYW1TaXplKS50b0ZpeGVkKDIpICsgJyBmb3IgYSBjb21wbGV0aW9uIGZhY3RvciBvZjogJyArXG5cdCAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nICtcblxuXHQgICAgICAgICc8cD5SZXZpZXdzIGNvbXBsZXRlZDogJyArIG1lbWJlci5yZXZpZXdzX2NvdW50ICsgJyBmb3IgYSByZXZpZXdpbmcgZmFjdG9yIG9mOiAnICtcblx0ICAgICAgICBtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPic7XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRfaW5mbyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xuICAgIFx0Y29uc3QgaW5mb0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1pbmZvJyk7XG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XG5cbiAgICBcdGluZm9EaXYuaW5uZXJIVE1MID0gJzxwPlRoZSBjb21wbGV0aW9uIGZhY3RvciBmb3IgdGFza3MgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCBldmVyeScgK1xuXHRcdCAgICAnIHRlYW0gbWVtYmVyIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlICcgKyAoc3ByaW50cy5jb21wbGV0ZWRfZmFjdG9yICogMTAwKS50b0ZpeGVkKDApICsgJyUgb2YnICtcblx0XHQgICAgJyBhbiBlcXVhbCBkaXN0cmlidXRpb24gb2YgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXG5cdFx0ICAgICcgbG9zaW5nIHBvaW50cyBvbiB0aGUgYXNzaWdubWVudC48L3A+JyArXG5cdFx0ICAgICc8cD5UaGUgcmV2aWV3aW5nIGZhY3RvciBmb3IgdGFza3MgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCBldmVyeSB0ZWFtIG1lbWJlcicgK1xuXHRcdCAgICAnIGlzIGV4cGVjdGVkIHRvIHJldmlldyAnICsgKHNwcmludHMucmV2aWV3aW5nX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mIGFuIGVxdWFsJyArXG5cdFx0ICAgICcgZGlzdHJpYnV0aW9uIG9mIHRhc2tzLiBUaGlzIGZhY3RvciBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IDkwJSBvZiB0YXNrcyBzaG91bGQnICtcblx0XHQgICAgJyBiZSBwcm9ncmFtbWluZyB0YXNrcy4gVmFsdWVzIGxlc3MgdGhhbiAxLjAwIGluZGljYXRlIHRoYXQgeW91IHdpbGwgYmUnICtcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nXG4gICAgfVxufVxuXG4vLy8gQGNvbmRcblNwcmludFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xuU3ByaW50Vmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRWaWV3O1xuLy8vIEBlbmRjb25kXG4iLCIvKlxuICogU3ByaW50IGFuYWx5c2lzIG9mIFRyZWxsbyBib2FyZFxuICovXG5cbmltcG9ydCB7U3ByaW50fSBmcm9tIFwiLi9TcHJpbnRcIjtcbmltcG9ydCB7U3ByaW50TWVtYmVyfSBmcm9tIFwiLi9TcHJpbnRNZW1iZXJcIjtcblxuZXhwb3J0IGNvbnN0IFNwcmludHMgPSBmdW5jdGlvbihib2FyZCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIC8vLyBOdW1iZXIgb2YgbWlzc2VkIG1lZXRpbmdzIGFsbG93XG4gICAgdGhpcy5tZWV0aW5nc19zbG9wID0gMTtcblxuXG4gICAgLy8vIE51bWJlciBvZiBzZWNvbmRzIGFmdGVyIG1lZXRpbmcgdGltZSB0byBjb25zaWRlciBjb21wbGV0ZWRcbiAgICAvLy8gaW4gYSBjdXJyZW50IHNwcmludCBpbiBzZWNvbmRzLlxuICAgIHRoaXMuc3ByaW50X3RpbWVfc2xvcCA9IDUgKiA2MCAqIDYwOyAgIC8vIDUgaG91cnNcbiAgICBcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgaGlzIHNoYXJlIG9mIHRhc2tzXG4gICAgdGhpcy5jb21wbGV0ZWRfZmFjdG9yID0gMC44O1xuICAgIFxuICAgIC8vLyBFYWNoIHVzZXJzIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlIDgwJSBvZiA5MCUgb2YgdGhlIHRhc2sgY291bnQgaW4gcmV2aWV3c1xuICAgIHRoaXMucmV2aWV3aW5nX2ZhY3RvciA9IDAuOCAqIDAuOTtcblxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcblxuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy53YXJuaW5ncyA9IFtdO1xuXG4gICAgdGhpcy5tZW1iZXJzID0ge307XG4gICAgdGhpcy5zcHJpbnRzID0gW107XG5cbiAgICB0aGlzLmRlc2lnbiA9IG51bGw7XG4gICAgdGhpcy5yaXNrcyA9IG51bGw7XG4gICAgdGhpcy5tZWV0aW5ncyA9IG51bGw7XG4gICAgdGhpcy50b2RvID0gbnVsbDtcbiAgICB0aGlzLnNwcmludF9hY3RpdmUgPSBudWxsO1xuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IG51bGw7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBudWxsO1xuXG4gICAgLy9cbiAgICAvLyBDb3B5IG92ZXIgdGhlIG1lbWJlcnNcbiAgICAvL1xuICAgIGZvcih2YXIgaWQgaW4gYm9hcmQubWVtYmVycykge1xuICAgICAgICB2YXIgbWVtYmVyID0gYm9hcmQubWVtYmVyc1tpZF07XG4gICAgICAgIGlmKG1lbWJlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiY3NlMzM1XCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXSA9IG5ldyBTcHJpbnRNZW1iZXIodGhpcywgbWVtYmVyKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIEZpbmQgYWxsIG9mIHRoZSByZXF1aXJlZCBsaXN0c1xuICAgIC8vXG4gICAgdGhpcy5maW5kX2xpc3RzKCk7XG5cbiAgICBpZih0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2U5MDAnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gT3JkZXIgdGVzdGluZ1xuICAgIC8vXG4gICAgdGhpcy5vcmRlcl90ZXN0KCk7XG5cbiAgICAvL1xuICAgIC8vIERldGVybWluZSBhdHRlbmRhbmNlXG4gICAgLy9cbiAgICB0aGlzLm1lZXRpbmdfYXR0ZW5kYW5jZSgpO1xuXG4gICAgLy9cbiAgICAvLyBDb252ZXJ0IG1lZXRpbmdzIGludG8gc3ByaW50c1xuICAgIC8vXG4gICAgdGhpcy5jcmVhdGVfc3ByaW50cygpO1xuXG4gICAgLy9cbiAgICAvLyBTb3J0IGNvbXBsZXRlZCBpbnRvIHNwcmludHNcbiAgICAvL1xuICAgIHRoaXMuc29ydF9jb21wbGV0ZWQoKTtcblxuICAgIC8vXG4gICAgLy8gQ29tcGxldGVkIHN0YXRpc3RpY3NcbiAgICAvL1xuICAgIHRoaXMuY29tcGxldGVkX3N0YXRpc3RpY3MoKTtcbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHJlcXVpcmVkIGxpc3RzIGV4aXN0LlxuICovXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX2xpc3RzID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gRmluZCB0aGUgXCJEZXNpZ25cIiBsaXN0XG4gICAgdGhpcy5kZXNpZ24gPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnRGVzaWduJyk7XG4gICAgaWYodGhpcy5kZXNpZ24gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMScpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIFwiUmlza3NcIiBsaXN0XG4gICAgdGhpcy5yaXNrcyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdSaXNrcycpO1xuICAgIGlmKHRoaXMucmlza3MgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMicpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIFwiTWVldGluZ3NcIiBsaXN0XG4gICAgdGhpcy5tZWV0aW5ncyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdNZWV0aW5ncycpO1xuICAgIGlmKHRoaXMubWVldGluZ3MgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMycpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIFwiVG8gRG9cIiBsaXN0XG4gICAgdGhpcy50b2RvID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RvIERvJyk7XG4gICAgaWYodGhpcy50b2RvID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDQnKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIHRoZSBcIlRoaXMgU3ByaW50IEFjdGl2ZVwiIGxpc3RcbiAgICB0aGlzLnNwcmludF9hY3RpdmUgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVGhpcyBTcHJpbnQgQWN0aXZlJyk7XG4gICAgaWYodGhpcy5zcHJpbnRfYWN0aXZlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDUnKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIHRoZSBcIlRoaXMgU3ByaW50IENvbXBsZXRlZFwiIGxpc3RcbiAgICB0aGlzLnNwcmludF9jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVGhpcyBTcHJpbnQgQ29tcGxldGVkJyk7XG4gICAgaWYodGhpcy5zcHJpbnRfY29tcGxldGVkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDYnKTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIHRoZSBcIkNvbXBsZXRlZFwiIGxpc3RcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdDb21wbGV0ZWQnKTtcbiAgICBpZih0aGlzLmNvbXBsZXRlZCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVycm9yKCdlMDA3Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBsaXN0cyBhcmUgaW4gdGhlIHJpZ2h0IG9yZGVyXG4gKi9cblNwcmludHMucHJvdG90eXBlLm9yZGVyX3Rlc3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuYm9hcmQub3B0aW9ucy5jYXJkcztcblxuICAgIGZvcih2YXIgaT0wOyBpPG9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRoaXMuYm9hcmQubGlzdHNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBvcmRlcltpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICB0aGlzLndhcm5pbmcoJ3cwMDEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBDb3VudCBtZWV0aW5nIGF0dGVuZGFuY2UgZm9yIGEgdXNlclxuICovXG5TcHJpbnRzLnByb3RvdHlwZS5tZWV0aW5nX2F0dGVuZGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgbWVldGluZ3NfY291bnQgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLmxlbmd0aDtcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5tZW1iZXJzW2lkXTtcbiAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2NvdW50ID0gbWVldGluZ3NfY291bnQ7XG4gICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5tZWV0aW5ncy5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGF0LmZpbmRfbWVtYmVyKGlkKTtcbiAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufVxuXG5TcHJpbnRzLnByb3RvdHlwZS5jcmVhdGVfc3ByaW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBtZWV0aW5ncyA9IHRoaXMubWVldGluZ3MuY2FyZHMuc2xpY2UoKTtcblxuICAgIG1lZXRpbmdzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBpZihhLmNyZWF0ZWQgPCBiLmNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmKGEuY3JlYXRlZCA9PT0gYi5jcmVhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3IodmFyIGk9MDsgaTwobWVldGluZ3MubGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgICB0aGlzLnNwcmludHMucHVzaChuZXcgU3ByaW50KHRoaXMsIG1lZXRpbmdzW2ldLCBtZWV0aW5nc1tpKzFdKSk7XG4gICAgfVxufVxuXG5TcHJpbnRzLnByb3RvdHlwZS5zb3J0X2NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBjb21wbGV0ZWQgPSB0aGlzLmNvbXBsZXRlZC5jYXJkcy5zbGljZSgpO1xuICAgIGNvbXBsZXRlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIGF0ID0gYS5maW5hbF90aW1lKCk7XG4gICAgICAgIHZhciBidCA9IGIuZmluYWxfdGltZSgpO1xuICAgICAgICBpZihhdCA9PT0gYnQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2UgaWYoYXQgPCBidCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSk7XG5cbiAgICBjb21wbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihjb21wbGV0ZWQpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2FzIHRoaXMgY2FyZCBldmVyIGluIHRoZSByaXNrIGxpc3Q/XG4gICAgICAgIC8vXG4gICAgICAgIGxldCByaXNrID0gZmFsc2U7XG4gICAgICAgIGZvcihsZXQgdXBkYXRlIG9mIGNvbXBsZXRlZC51cGRhdGVzKSB7XG4gICAgICAgICAgICBpZih1cGRhdGUubGlzdEJlZm9yZSA9PT0gJ1Jpc2snKSB7XG4gICAgICAgICAgICAgICAgcmlzayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1xuICAgICAgICAvLyBXZSBpZ25vcmUgXCJyaXNrXCIgY2FyZHNcbiAgICAgICAgLy9cbiAgICAgICAgaWYoIXJpc2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBjb21wbGV0ZWQuZmluYWxfdGltZSgpO1xuICAgICAgICAgICAgbGV0IGk9MDtcbiAgICAgICAgICAgIGZvciggOyBpPHRoYXQuc3ByaW50cy5sZW5ndGg7ICBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XG4gICAgICAgICAgICAgICAgaWYoZGF0ZSA8PSBzcHJpbnQuZW5kX3RpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGkgPj0gdGhhdC5zcHJpbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGkgPSB0aGF0LnNwcmludHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3ByaW50ID0gdGhhdC5zcHJpbnRzW2ldO1xuICAgICAgICAgICAgc3ByaW50LmNvbXBsZXRlZC5wdXNoKGNvbXBsZXRlZCk7XG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG5TcHJpbnRzLnByb3RvdHlwZS5jb21wbGV0ZWRfc3RhdGlzdGljcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21wbGV0ZWRfY291bnQgPSAwO1xuICAgIHZhciByZXZpZXdzX3RvdGFsID0gMDtcblxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcHJpbnQgPSB0aGlzLnNwcmludHNbaV07XG4gICAgICAgIGNvbXBsZXRlZF9jb3VudCArPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcblxuICAgICAgICBmb3IobGV0IGo9MDsgajxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2pdO1xuXG4gICAgICAgICAgICBpZihjb21wbGV0ZWQubWVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbXBsZXRlZC5tZW1iZXJzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuZmluZF9tZW1iZXIoaWQpO1xuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBtZW1iZXIuY29tcGxldGVkX2NvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDJcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9lbT4gaGFzIG5vIHRlYW0gbWVtYmVycyBhc3NpZ25lZC4gTm9ib2R5IHdpbGwgZ2V0IGNyZWRpdCBmb3IgdGhhdCB0YXNrLlwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoXCJ3MDAzXCIsIFwiQ29tcGxldGVkIHRhc2sgPGVtPlwiICsgY29tcGxldGVkLm5hbWUgK1xuICAgICAgICAgICAgICAgIFwiPC9lbT4gaGFzIG1vcmUgdGhhbiBvbmUgdGVhbSBtZW1iZXIgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFyZSB0aGV5IGFueSByZXZpZXdzP1xuICAgICAgICAgICAgaWYoY29tcGxldGVkLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXZpZXdzX3RvdGFsKys7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjb21wbGV0ZWQuY29tbWVudHNbMF0ubWVtYmVyO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuZmluZF9tZW1iZXIoaWQpO1xuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBtZW1iZXIucmV2aWV3c19jb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0uY29tcGxldGVkX3RvdGFsID0gY29tcGxldGVkX2NvdW50O1xuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdLnJldmlld3NfdG90YWwgPSByZXZpZXdzX3RvdGFsO1xuICAgIH1cbn1cblxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9tZW1iZXIgPSBmdW5jdGlvbihpZCkge1xuICAgIGlmKHRoaXMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVyc1tpZF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cblNwcmludHMucHJvdG90eXBlLm51bV9tZW1iZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNudCA9IDA7XG5cbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xuICAgICAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICBjbnQrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbnQ7XG59XG5cblNwcmludHMucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oY29kZSkge1xuICAgIC8vIERvZXMgdGhlIGVycm9yIGFscmVhZHkgZXhpc3Q/XG4gICAgZm9yKHZhciBpPTA7IGk8dGhpcy5lcnJvcnMubGVuZ3RoOyAgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuZXJyb3JzW2ldO1xuICAgICAgICBpZihlcnJvci5jb2RlID09PSBjb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2goY29kZSkge1xuICAgICAgICBjYXNlICdlMDAxJzpcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdEZXNpZ24nXCJ9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2UwMDInOlxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1Jpc2tzJ1wifSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlMDAzJzpcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdNZWV0aW5ncydcIn0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZTAwNCc6XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVG8gRG8nXCJ9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2UwMDUnOlxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RoaXMgU3ByaW50IEFjdGl2ZSdcIn0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZTAwNic6XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQ29tcGxldGVkJ1wifSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlMDA3JzpcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdDb21wbGV0ZWQnXCJ9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2U5MDAnOlxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIkZhdGFsIGVycm9ycywgdW5hYmxlIHRvIHByb2NlZWQgd2l0aCBzcHJpbnRzIGFuYWx5c2lzXCJ9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuU3ByaW50cy5wcm90b3R5cGUud2FybmluZyA9IGZ1bmN0aW9uKGNvZGUsIG1zZykge1xuICAgIGlmKG1zZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBtc2d9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgIGNhc2UgJ3cwMDEnOlxuICAgICAgICAgICAgdmFyIG1zZyA9IFwiWW91ciBsaXN0cyBhcmUgbm90IGluIHRoZSBjb3JyZWN0IG9yZGVyLiBcIiArXG4gICAgICAgICAgICAgICAgXCJUaGUgZXhhY3Qgb3JkZXIgc2hvdWxkIGJlOlwiO1xuXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgZm9yKGNvbnN0IGNhcmQgb2YgdGhpcy5ib2FyZC5vcHRpb25zLmNhcmRzKSB7XG4gICAgICAgICAgICAgICAgaWYoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJywnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1zZyArPSAnICcgKyBjYXJkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLndhcm5pbmdzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogbXNnfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgIH1cbn0iLCJpbXBvcnQge29wdGlvbnN9IGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcbmltcG9ydCB7TWFpblZpZXd9IGZyb20gJy4vTWFpblZpZXcnO1xuaW1wb3J0IHtUcmVsbG9Db25uZWN0fSBmcm9tICd0cmVsbG8tY29ubmVjdCc7XG5cbmV4cG9ydCBjb25zdCBUcmVsbG9TcHJpbnRlciA9IGZ1bmN0aW9uKHVzZXJPcHRpb25zKSB7XG5cdC8vIERlZmF1bHQgYW5kIHN1cHBsaWVkIG9wdGlvbnNcblx0Y29uc3Qgb3B0cyA9IFV0aWwubWVyZ2Uob3B0aW9ucywgdXNlck9wdGlvbnMpO1xuXG5cdGNvbnN0IHRyZWxsbyA9IG5ldyBUcmVsbG9Db25uZWN0KG9wdHMpO1xuXG5cdFV0aWwucmVhZHkoKCkgPT4ge1xuXHRcdGxldCBlbGVtZW50cztcblx0XHRpZihvcHRzLnNlbC5ub2RlVHlwZSkge1xuXHRcdFx0ZWxlbWVudHMgPSBbb3B0cy5zZWxdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWwpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzd2l0Y2godHJlbGxvLnN0YXRlKSB7XG5cdFx0XHRcdGNhc2UgVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQ6XG5cdFx0XHRcdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRuZXcgTWFpblZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXG5cbn0iLCIvKipcbiAqIEBmaWxlXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyB1cGRhdGUgb24gYSBjYXJkXG4gKi9cblxuZXhwb3J0IGNvbnN0IFVwZGF0ZSA9IGZ1bmN0aW9uKGJvYXJkLCBjYXJkLCBkYXRhKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMuY2FyZCA9IGNhcmQ7IFxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcbiAgICB0aGlzLmxpc3RCZWZvcmUgPSBkYXRhLmRhdGEubGlzdEJlZm9yZS5uYW1lO1xuICAgIHRoaXMubGlzdEFmdGVyID0gZGF0YS5kYXRhLmxpc3RBZnRlci5uYW1lO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IFV0aWwgPSBmdW5jdGlvbigpIHt9XG5cblV0aWwubWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XG5cdHZhciBvYmogPSB7fTtcblxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdG9ialtrZXldID0gb2JqMVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0b2JqW2tleV0gPSBvYmoyW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIEhUTUwgdGFncyBmcm9tIGEgc3RyaW5nLlxuICogQHBhcmFtIHN0ciBTdHJpbmcgdG8gcHJvY2Vzc1xuICogQHJldHVybnMgc3RyaW5nIHdpdGhvdXQgdGFnc1xuICovXG5VdGlsLnN0cmlwX3RhZ3MgPSBmdW5jdGlvbihzdHIpIHtcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC88KD86LnxcXG4pKj8+L2dtLCAnJyk7XG59XG5cblV0aWwuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGNscykge1xuXHRsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdGlmKGNscyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0VXRpbC5hZGRDbGFzcyhlLCBjbHMpO1xuXHR9XG5cblx0cmV0dXJuIGU7XG59XG5cblV0aWwuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lcykge1xuXHRjb25zdCBuYW1lcyA9IGNsYXNzTmFtZXMuc3BsaXQoJyAnKTtcblx0Zm9yKGNvbnN0IG5hbWUgb2YgbmFtZXMpIHtcblx0XHRpZiAoZWwuY2xhc3NMaXN0KVxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHRlbHNlXG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gJyAnICsgbmFtZTtcblx0fVxufVxuXG5VdGlsLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xuXHRpZiAoZWwuY2xhc3NMaXN0KVxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcblx0ZWxzZVxuXHRcdGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XG59XG5cblV0aWwucmVhZHkgPSBmdW5jdGlvbihmbikge1xuXHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG5cdFx0Zm4oKTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdCB0byBhIHN0cmluZy5cbiAqXG4gKiBUaGlzIHVzZXMgZm9ybWF0dGluZyB0aGF0IGlzIHN1YnNldCBvZiB0aGUgUEhQIGRhdGUoKSBmdW5jdGlvbi5cbiAqIEBwYXJhbSBkYXRlIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0gZm9ybWF0IE9wdGlvbmFsIGZvcm1hdCBzdHJpbmcgKGRlZmF1bHQgaXMgJ24tZC1ZIGg6aWEnKS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblV0aWwuZm9ybWF0RGF0ZXRpbWUgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXQpIHtcblxuXHRmdW5jdGlvbiBwYWQoaSwgbikge1xuXHRcdHZhciBzID0gJycgKyBpO1xuXHRcdHdoaWxlKHMubGVuZ3RoIDwgbikge1xuXHRcdFx0cyA9ICcwJyArIHM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHM7XG5cdH1cblxuXHRpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdGZvcm1hdCA9ICduLWQtWSBoOmlhJztcblx0fVxuXG5cdHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0dmFyIGhvdXIgPSBob3Vycztcblx0dmFyIGFtID0gJ2EnO1xuXHRpZihob3VycyA9PSAwKSB7XG5cdFx0aG91ciA9IDEyO1xuXHR9IGVsc2UgaWYoaG91cnMgPT0gMTIpIHtcblx0XHRhbSA9ICdwJztcblx0fSBlbHNlIGlmKGhvdXJzID4gMTIpIHtcblx0XHRob3VyID0gaG91cnMgLSAxMjtcblx0XHRhbSA9ICdwJztcblx0fVxuXG5cdHZhciBzdHIgPSAnJztcblx0Zm9yKHZhciBpPTA7IGk8Zm9ybWF0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0c3dpdGNoKGZvcm1hdC5jaGFyQXQoaSkpIHtcblx0XHRcdGNhc2UgJ24nOlxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ20nOlxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnZCc6XG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXREYXRlKCksIDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnWSc6XG5cdFx0XHRcdHN0ciArPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdnJzpcblx0XHRcdFx0c3RyICs9IGhvdXI7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdoJzpcblx0XHRcdFx0c3RyICs9IHBhZChob3VyLCAyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2knOlxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TWludXRlcygpLCAyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3MnOlxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAyKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2EnOlxuXHRcdFx0XHRzdHIgKz0gYW07XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRzdHIgKz0gZm9ybWF0LmNoYXJBdChpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn0iLCJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuXHRzZWw6ICcjdHJlbGxvJyxcblx0dmVyc2lvbjogMSxcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcblx0XCJpbnRlbnRFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxuXHRrZXk6ICcnLFxuXG5cdC8vIFByZWZpeCB0byBhcHBseSB0byBsb2NhbCBzdG9yYWdlLiBVc2VmdWwgdG9cblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxuXHRsb2NhbFByZWZpeDogJycsXG5cblx0Ly8gTmFtZSBvZiB0aGUgYm9hcmQgd2UgYXJlIGZldGNoaW5nXG5cdGJvYXJkOiAnJyxcblxuXHQvKiogT3B0aW9uYWw6IE9ubHkgY29uc2lkZXIgbWVldGluZ3MgYWZ0ZXIgdGhpcyB0aW1lIChVbml4IHRpbWUpICovXG5cdGFmdGVyOiBudWxsLFxuXG5cdHZpZXdzOiB7XG5cdFx0J2JvYXJkJzoge30sXG5cdFx0J3NwcmludCc6IHt9XG5cdH0sXG5cblx0bmFtZTogJ1RyZWxsb1NwcmludGVyJyxcblxuXHQvLyBEZWZhdWx0IGNhcmRzXG5cdGNhcmRzOiBbJ0Rlc2lnbicsICdSaXNrcycsICdNZWV0aW5ncycsXG5cdFx0J1RvIERvJywgJ1RoaXMgU3ByaW50IEFjdGl2ZScsXG5cdFx0J1RoaXMgU3ByaW50IENvbXBsZXRlZCcsICdDb21wbGV0ZWQnXVxufTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiVHJlbGxvXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvdXJzZWxpYlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlRyZWxsb0ZhY3RvcnkiLCJjcmVhdGUiLCJTaXRlIiwiVHJlbGxvU3ByaW50ZXJWaWV3Iiwic2l0ZSIsInN0YXJ0IiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiVHJlbGxvU3ByaW50ZXIiLCJlbGVtZW50IiwianNvbiIsIkpTT04iLCJwYXJzZSIsImlubmVyVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsIm9wdGlvbnMiLCJzZWwiLCJrZXkiLCJib2FyZCIsInRlYW0iLCJ2aWV3cyIsImFmdGVyIiwiY2FyZHMiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkcse335"] = self["webpackChunkcse335"] || []).push([["Trello"],{

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
/* harmony export */   TrelloFactory: () => (/* binding */ TrelloFactory)
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
/* harmony export */   TrelloSprinterView: () => (/* binding */ TrelloSprinterView)
/* harmony export */ });
/* harmony import */ var trello_sprinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trello-sprinter */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/index.js");

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

/***/ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/getUrl.js */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plus.png */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/img/plus.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/minus.png */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/img/minus.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `div.trello-sprinter {
  margin: 0;
}
div.trello-sprinter h2 {
  text-align: center;
  padding: 0.25em 0;
  background: #026AA7;
  color: white;
  font-size: 1em;
  margin: 0;
}
div.trello-sprinter p.trello-status {
  text-align: center;
  padding: 0.25em 0;
  background: #026AA7;
  color: white;
}
div.trello-sprinter p.trello-msg {
  text-align: center;
  font-style: italic;
  font-size: 0.9em;
  padding: 0.25em 0;
  background: #026AA7;
  color: white;
}
div.trello-sprinter p.center {
  text-align: center;
}
div.trello-sprinter div.trello-view {
  background: white;
  color: black;
}
div.trello-sprinter div.trello-view h3 {
  border-top: 2px solid black;
  margin: 0;
  padding: 0.25em 0 0.25em 20px;
}
div.trello-sprinter div.trello-view h3 span.date {
  font-weight: normal;
  font-style: normal;
  font-size: 0.7em;
  float: right;
  padding-top: 0.25em;
}
div.trello-sprinter div.trello-view p.trello-completed-header {
  text-align: center;
  font-weight: bold;
  background: black;
  color: deepskyblue;
}
div.trello-sprinter .trello-plus {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
div.trello-sprinter .trello-minus {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
div.trello-sprinter .trello-plus, div.trello-sprinter .trello-minus {
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 16px 16px;
  cursor: pointer;
}
div.trello-sprinter div.trello-expand {
  position: relative;
  display: none;
  overflow: auto;
  background: #f0f0f0;
  padding: 0.25em;
  margin-bottom: 6pt;
  border: 1pt solid gray;
  word-wrap: normal;
}
div.trello-sprinter div.trello-expand, div.trello-sprinter .trello-errors {
  -moz-box-shadow: 6pt 6px 10pt #888;
  -webkit-box-shadow: 6pt 6px 10pt #888;
  box-shadow: 6pt 6px 10pt #888;
}
div.trello-sprinter p.trello-count {
  margin: 0 0 1em 0;
  text-align: center;
  font-size: 0.85em;
}
div.trello-sprinter div.trello-card {
  padding-left: 2em;
  padding-right: 2em;
}
div.trello-sprinter div.trello-card h4 {
  background-color: #81d0fd;
  margin: 0.5em 0 0 0;
  padding: 0 0.25em;
}
div.trello-sprinter div.trello-card h4 span.trello-date {
  font-weight: normal;
  font-size: 0.9em;
  float: right;
  padding-top: 0.25em;
}
div.trello-sprinter div.trello-card .trello-card-members {
  margin: 0 0.25em;
  font-size: 0.85em;
  font-style: italic;
}
div.trello-sprinter div.trello-description {
  margin: 0.5em 1em;
}
div.trello-sprinter div.trello-description p {
  margin: 0 0 0.25em 0;
  font-size: 0.9em;
}
div.trello-sprinter div.trello-comments {
  margin: 0 2em;
}
div.trello-sprinter div.trello-comments h5 {
  margin: 0;
  padding: 0 0.25em;
  background-color: #ccc;
  font-size: 0.8em;
  font-weight: normal;
  font-style: italic;
}
div.trello-sprinter div.trello-comments h5 span.trello-date {
  font-weight: normal;
  font-style: normal;
  float: right;
}
div.trello-sprinter div.trello-comments p {
  margin: 0 0.25em;
  font-size: 0.9em;
}
div.trello-sprinter div.trello-updates {
  margin: 1em 2em;
}
div.trello-sprinter div.trello-updates p {
  margin: 0;
  padding: 0 0.25em;
  font-size: 0.8em;
  font-style: italic;
}
div.trello-sprinter div.trello-updates p span.trello-date {
  font-weight: normal;
  font-style: normal;
  float: right;
}
div.trello-sprinter div.trello-updates p span.list {
  font-style: normal;
  font-weight: bold;
}
div.trello-sprinter div.trello-sprints {
  background: white;
  color: black;
}
div.trello-sprinter div.trello-sprints div.trello-errors {
  background: #c41425;
  color: white;
}
div.trello-sprinter div.trello-sprints div.trello-warnings {
  background: #ff80df;
  color: black;
}
div.trello-sprinter div.trello-sprints div.trello-members {
  background: #f0f0f0;
  color: black;
}
div.trello-sprinter div.trello-sprints div.trello-members div.trello-member {
  margin-bottom: 1em;
}
div.trello-sprinter div.trello-sprints div.trello-errors, div.trello-sprinter div.trello-sprints div.trello-warnings, div.trello-sprinter div.trello-sprints div.trello-members {
  position: relative;
  overflow: auto;
  padding: 0 1em 1em 1em;
  margin: 1em 3em 6pt 3em;
  border: 1pt solid gray;
  word-wrap: normal;
  font-size: 0.9em;
}
div.trello-sprinter div.trello-sprints div.trello-errors p, div.trello-sprinter div.trello-sprints div.trello-warnings p, div.trello-sprinter div.trello-sprints div.trello-members p {
  font-size: 1.1em;
  margin: 0;
}
div.trello-sprinter div.trello-sprints div.trello-errors span.trello-code, div.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code, div.trello-sprinter div.trello-sprints div.trello-members span.trello-code {
  font-weight: bold;
}
div.trello-sprinter div.trello-sprints div.trello-errors h3, div.trello-sprinter div.trello-sprints div.trello-errors h4, div.trello-sprinter div.trello-sprints div.trello-warnings h3, div.trello-sprinter div.trello-sprints div.trello-warnings h4, div.trello-sprinter div.trello-sprints div.trello-members h3, div.trello-sprinter div.trello-sprints div.trello-members h4 {
  margin: 0;
  padding: 0.25em 0;
  text-align: center;
}
div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info {
  border-top: 1px solid black;
}
div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {
  margin: 1em 0;
}
div.trello-sprinter div.trello-sprint-table {
  overflow: auto;
}`, "",{"version":3,"sources":["webpack://./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;AALF;AAOE;EACE,kBAAA;EACA,iBAAA;EACA,mBAZU;EAaV,YAAA;EACA,cAAA;EACA,SAAA;AALJ;AAQE;EACE,kBAAA;EACA,iBAAA;EACA,mBArBU;EAsBV,YAAA;AANJ;AASE;EACE,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBA9BU;EA+BV,YAAA;AAPJ;AAUE;EACE,kBAAA;AARJ;AAWE;EACE,iBAAA;EACA,YAAA;AATJ;AAWI;EACE,2BAAA;EACA,SAAA;EACA,6BAAA;AATN;AAWM;EACE,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AATR;AAaI;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAXN;AAeE;EACE,yDAAA;AAbJ;AAgBE;EACE,yDAAA;AAdJ;AAiBE;EACE,4BAAA;EACA,gCAAA;EACA,0BAAA;EACA,eAAA;AAfJ;AAkBE;EACE,kBAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,iBAAA;AAhBJ;AAoBE;EACE,kCAAA;EACA,qCAAA;EACA,6BAAA;AAlBJ;AAqBE;EACE,iBAAA;EACA,kBAAA;EACA,iBAAA;AAnBJ;AAuBE;EACE,iBAAA;EACA,kBAAA;AArBJ;AAuBI;EACE,yBA5Gc;EA6Gd,mBAAA;EACA,iBAAA;AArBN;AAwBI;EACE,mBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;AAtBN;AAyBI;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;AAvBN;AA6BE;EAME,iBAAA;AAhCJ;AA2BI;EACE,oBAAA;EACA,gBAAA;AAzBN;AAgCE;EACE,aAAA;AA9BJ;AAgCI;EACE,SAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AA9BN;AAgCM;EACE,mBAAA;EACA,kBAAA;EACA,YAAA;AA9BR;AAkCI;EACE,gBAAA;EACA,gBAAA;AAhCN;AAqCE;EACE,eAAA;AAnCJ;AAqCI;EACE,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AAnCN;AAqCM;EACE,mBAAA;EACA,kBAAA;EACA,YAAA;AAnCR;AAsCM;EACE,kBAAA;EACA,iBAAA;AApCR;AA0CE;EACE,iBAAA;EACA,YAAA;AAxCJ;AA0CI;EACE,mBA/LS;EAgMT,YAAA;AAxCN;AA2CI;EACE,mBAnMW;EAoMX,YAAA;AAzCN;AA4CI;EACE,mBAvMW;EAwMX,YAAA;AA1CN;AA4CM;EACE,kBAAA;AA1CR;AA8CI;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,uBAAA;EACA,sBAAA;EACA,iBAAA;EACA,gBAAA;AA5CN;AA8CM;EACE,gBAAA;EACA,SAAA;AA5CR;AA+CM;EACE,iBAAA;AA7CR;AAgDM;EACE,SAAA;EACA,iBAAA;EACA,kBAAA;AA9CR;AAiDM;EACE,2BAAA;AA/CR;AAiDQ;EACE,aAAA;AA/CV;AAqDE;EACE,cAAA;AAnDJ","sourcesContent":["$trello-blue: #026AA7;\n$trello-card-title: #81d0fd;\n$trello-error: #c41425;\n$trello-warning: #ff80df;\n$trello-members: #f0f0f0;\n\ndiv.trello-sprinter {\n  margin: 0;\n\n  h2 {\n    text-align: center;\n    padding: 0.25em 0;\n    background: $trello-blue;\n    color: white;\n    font-size: 1em;\n    margin: 0;\n  }\n\n  p.trello-status {\n    text-align: center;\n    padding: 0.25em 0;\n    background: $trello-blue;\n    color: white;\n  }\n\n  p.trello-msg {\n    text-align: center;\n    font-style: italic;\n    font-size: 0.9em;\n    padding: 0.25em 0;\n    background: $trello-blue;\n    color: white;\n  }\n\n  p.center {\n    text-align: center;\n  }\n\n  div.trello-view {\n    background: white;\n    color: black;\n\n    h3 {\n      border-top: 2px solid black;\n      margin: 0;\n      padding: 0.25em 0 0.25em 20px;\n\n      span.date {\n        font-weight: normal;\n        font-style: normal;\n        font-size: 0.7em;\n        float: right;\n        padding-top: 0.25em;\n      }\n    }\n\n    p.trello-completed-header {\n      text-align: center;\n      font-weight: bold;\n      background: black;\n      color: deepskyblue;\n    }\n  }\n\n  .trello-plus {\n    background-image: url('img/plus.png');\n  }\n\n  .trello-minus {\n    background-image: url('img/minus.png');\n  }\n\n  .trello-plus, .trello-minus {\n    background-repeat: no-repeat;\n    background-position: left center;\n    background-size: 16px 16px;\n    cursor: pointer;\n  }\n\n  div.trello-expand {\n    position: relative;\n    display: none;\n    overflow: auto;\n    background: #f0f0f0;\n    padding: 0.25em;\n    margin-bottom: 6pt;\n    border: 1pt solid gray;\n    word-wrap: normal;\n  }\n\n  // Shadows\n  div.trello-expand, .trello-errors {\n    -moz-box-shadow: 6pt 6px 10pt #888;\n    -webkit-box-shadow: 6pt 6px 10pt #888;\n    box-shadow: 6pt 6px 10pt #888;\n  }\n\n  p.trello-count {\n    margin: 0 0 1em 0;\n    text-align: center;\n    font-size: 0.85em;\n  }\n\n\n  div.trello-card {\n    padding-left: 2em;\n    padding-right: 2em;\n\n    h4 {\n      background-color: $trello-card-title;\n      margin: 0.5em 0 0 0;\n      padding: 0 0.25em;\n    }\n\n    h4 span.trello-date {\n      font-weight: normal;\n      font-size: 0.9em;\n      float: right;\n      padding-top: 0.25em;\n    }\n\n    .trello-card-members {\n      margin: 0 0.25em;\n      font-size: 0.85em;\n      font-style: italic;\n    }\n  }\n\n\n\n  div.trello-description {\n    p {\n      margin: 0 0 0.25em 0;\n      font-size: 0.9em;\n    }\n\n    margin: 0.5em 1em;\n  }\n\n\n  div.trello-comments {\n    margin: 0 2em;\n\n    h5 {\n      margin: 0;\n      padding: 0 0.25em;\n      background-color: #ccc;\n      font-size: 0.8em;\n      font-weight: normal;\n      font-style: italic;\n\n      span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right;\n      }\n    }\n\n    p {\n      margin: 0 0.25em;\n      font-size: 0.9em;\n    }\n  }\n\n\n  div.trello-updates {\n    margin: 1em 2em;\n\n    p {\n      margin: 0;\n      padding: 0 0.25em;\n      font-size: 0.8em;\n      font-style: italic;\n\n      span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right;\n      }\n\n      span.list {\n        font-style: normal;\n        font-weight: bold;\n      }\n\n    }\n  }\n\n  div.trello-sprints {\n    background: white;\n    color: black;\n\n    div.trello-errors {\n      background: $trello-error;\n      color: white;\n    }\n\n    div.trello-warnings {\n      background: $trello-warning;\n      color: black;\n    }\n\n    div.trello-members {\n      background: $trello-members;\n      color: black;\n\n      div.trello-member {\n        margin-bottom: 1em;\n      }\n    }\n\n    div.trello-errors, div.trello-warnings, div.trello-members {\n      position: relative;\n      overflow: auto;\n      padding: 0 1em 1em 1em;\n      margin: 1em 3em 6pt 3em;\n      border: 1pt solid gray;\n      word-wrap: normal;\n      font-size: 0.9em;\n\n      p {\n        font-size: 1.1em;\n        margin: 0;\n      }\n\n      span.trello-code {\n        font-weight: bold;\n      }\n\n      h3, h4 {\n        margin: 0;\n        padding: 0.25em 0;\n        text-align: center;\n      }\n\n      div.trello-info {\n        border-top: 1px solid black;\n\n        p {\n          margin: 1em 0;\n        }\n      }\n    }\n  }\n\n  div.trello-sprint-table {\n    overflow: auto;\n  }\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-8c26280a4f/0/cache/style-loader-npm-3.3.3-2e8bbeeac4-f59c953f56.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!../../../resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!../../../../__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./trello.scss */ "./.yarn/__virtual__/css-loader-virtual-d466d19429/0/cache/css-loader-npm-6.8.1-30d84b4cf1-7c1784247b.zip/node_modules/css-loader/dist/cjs.js!./.yarn/cache/resolve-url-loader-npm-5.0.0-9b441067c9-6d483733a4.zip/node_modules/resolve-url-loader/index.js!./.yarn/__virtual__/sass-loader-virtual-971d656d1d/0/cache/sass-loader-npm-13.3.2-82bfeae746-7394a8d1b8.zip/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-4.use[3]!./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _virtual_style_loader_virtual_8c26280a4f_0_cache_style_loader_npm_3_3_3_2e8bbeeac4_f59c953f56_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _virtual_css_loader_virtual_d466d19429_0_cache_css_loader_npm_6_8_1_30d84b4cf1_7c1784247b_zip_node_modules_css_loader_dist_cjs_js_resolve_url_loader_npm_5_0_0_9b441067c9_6d483733a4_zip_node_modules_resolve_url_loader_index_js_virtual_sass_loader_virtual_971d656d1d_0_cache_sass_loader_npm_13_3_2_82bfeae746_7394a8d1b8_zip_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_4_use_3_trello_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./.yarn/cache/trello-connect-npm-2.0.7-2f2481cf50-d9edb4a517.zip/node_modules/trello-connect/index.js":
/*!*************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-connect-npm-2.0.7-2f2481cf50-d9edb4a517.zip/node_modules/trello-connect/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrelloConnect: () => (/* binding */ TrelloConnect),
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/index.js":
/*!***************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrelloSprinter: () => (/* reexport safe */ _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__.TrelloSprinter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello.scss */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/trello.scss");
/* harmony import */ var _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/TrelloSprinter */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/TrelloSprinter.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__.TrelloSprinter);



/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Board.js":
/*!*******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Board.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Member.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/List.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Update */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Update.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Comment.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/BoardView.js":
/*!***********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/BoardView.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardView: () => (/* binding */ BoardView)
/* harmony export */ });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Card.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Card.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Comment.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Comment.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comment: () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DataView.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DataView.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataView: () => (/* binding */ DataView)
/* harmony export */ });
/*
 * Base object for views of Trello data.
 */

const DataView = function() {

}

DataView.prototype.present = function(div, board) {}




/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DisconnectedView.js":
/*!******************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DisconnectedView.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisconnectedView: () => (/* binding */ DisconnectedView)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");


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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/List.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/List.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Card.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/MainView.js":
/*!**********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/MainView.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainView: () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Board.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/BoardView.js");
/* harmony import */ var _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprints/SprintView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintView.js");
/* harmony import */ var _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprints/SprintTableView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintTableView.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisconnectedView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DisconnectedView.js");







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
					let boardView = new _BoardView__WEBPACK_IMPORTED_MODULE_2__.BoardView(div, board);
					boardView.present();
					break;

				case 'sprint':
					let sprintView = new _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__.SprintView(div, board, options.views.sprint);
					sprintView.present();
					break;

				case 'sprintTable':
					let sprintTableView = new _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__.SprintTableView(div, board, options.views.sprintTable);
					sprintTableView.present();
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Member.js":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Member.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Member: () => (/* binding */ Member)
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprint.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprint.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sprint: () => (/* binding */ Sprint)
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintMember.js":
/*!**********************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintMember.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SprintMember: () => (/* binding */ SprintMember)
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintTableView.js":
/*!*************************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintTableView.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SprintTableView: () => (/* binding */ SprintTableView)
/* harmony export */ });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/BoardView.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintView.js":
/*!********************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintView.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SprintView: () => (/* binding */ SprintView)
/* harmony export */ });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/BoardView.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js":
/*!*****************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprints.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sprints: () => (/* binding */ Sprints)
/* harmony export */ });
/* harmony import */ var _Sprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprint */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/Sprint.js");
/* harmony import */ var _SprintMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SprintMember */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Sprints/SprintMember.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/TrelloSprinter.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/TrelloSprinter.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrelloSprinter: () => (/* binding */ TrelloSprinter)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/options.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisconnectedView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/DisconnectedView.js");
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainView */ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/MainView.js");
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Update.js":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Update.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Update: () => (/* binding */ Update)
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js":
/*!******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/Util.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Util: () => (/* binding */ Util)
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/options.js":
/*!*********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/src/options.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   options: () => (/* binding */ options)
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

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/img/minus.png":
/*!********************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/img/minus.png ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC";

/***/ }),

/***/ "./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/img/plus.png":
/*!*******************************************************************************************************************!*\
  !*** ./.yarn/cache/trello-sprinter-npm-2.1.1-c1e7ebb887-06599893b1.zip/node_modules/trello-sprinter/img/plus.png ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII=";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor","Course","Users","common"], () => (__webpack_exec__("./vendor/cl/trello/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMktBQTJLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FB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LCtDQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7QUFJRjs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pKTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3RyZWxsby9qcy9UcmVsbG9TcHJpbnRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3MiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/OTc4MSIsIndlYnBhY2s6Ly9jc2UzMzUvLi8ueWFybi9jYWNoZS90cmVsbG8tY29ubmVjdC1ucG0tMi4wLjctMmYyNDgxY2Y1MC1kOWVkYjRhNTE3LnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLWNvbm5lY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkLmpzIiwid2VicGFjazovL2NzZTMzNS8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjEtYzFlN2ViYjg4Ny0wNjU5OTg5M2IxLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0RhdGFWaWV3LmpzIiwid2VicGFjazovL2NzZTMzNS8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjEtYzFlN2ViYjg4Ny0wNjU5OTg5M2IxLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9EaXNjb25uZWN0ZWRWaWV3LmpzIiwid2VicGFjazovL2NzZTMzNS8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjEtYzFlN2ViYjg4Ny0wNjU5OTg5M2IxLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9MaXN0LmpzIiwid2VicGFjazovL2NzZTMzNS8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjEtYzFlN2ViYjg4Ny0wNjU5OTg5M2IxLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NYWluVmlldy5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4xLWMxZTdlYmI4ODctMDY1OTk4OTNiMS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvTWVtYmVyLmpzIiwid2VicGFjazovL2NzZTMzNS8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjEtYzFlN2ViYjg4Ny0wNjU5OTg5M2IxLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludC5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4xLWMxZTdlYmI4ODctMDY1OTk4OTNiMS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRNZW1iZXIuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50VGFibGVWaWV3LmpzIiwid2VicGFjazovL2NzZTMzNS8uLy55YXJuL2NhY2hlL3RyZWxsby1zcHJpbnRlci1ucG0tMi4xLjEtYzFlN2ViYjg4Ny0wNjU5OTg5M2IxLnppcC9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludFZpZXcuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50cy5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4xLWMxZTdlYmI4ODctMDY1OTk4OTNiMS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvVHJlbGxvU3ByaW50ZXIuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vLnlhcm4vY2FjaGUvdHJlbGxvLXNwcmludGVyLW5wbS0yLjEuMS1jMWU3ZWJiODg3LTA2NTk5ODkzYjEuemlwL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4xLWMxZTdlYmI4ODctMDY1OTk4OTNiMS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4xLWMxZTdlYmI4ODctMDY1OTk4OTNiMS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvb3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7VHJlbGxvRmFjdG9yeX0gZnJvbSAnLi9qcy9UcmVsbG9GYWN0b3J5JztcblxuVHJlbGxvRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcbiIsImltcG9ydCB7VHJlbGxvU3ByaW50ZXJWaWV3fSBmcm9tICcuL1RyZWxsb1NwcmludGVyVmlldyc7XG5cbmV4cG9ydCBjb25zdCBUcmVsbG9GYWN0b3J5ID0gZnVuY3Rpb24oKSB7XG59XG5cblRyZWxsb0ZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xuXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcblx0XHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtdHJlbGxvLXNwcmludGVyJyk7XG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5ldyBUcmVsbG9TcHJpbnRlclZpZXcoc2l0ZSwgZWxlbWVudHNbaV0pO1xuXHRcdH1cblx0fSk7XG59IiwiaW1wb3J0IFRyZWxsb1NwcmludGVyIGZyb20gXCJ0cmVsbG8tc3ByaW50ZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyVmlldyA9IGZ1bmN0aW9uKHNpdGUsIGVsZW1lbnQpIHtcblx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC5pbm5lclRleHQpO1xuXHRlbGVtZW50LmlubmVyVGV4dCA9ICcnO1xuXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdHZhciBvcHRpb25zID0ge1xuXHRcdHNlbDogZWxlbWVudCxcblx0XHRrZXk6IGpzb24ua2V5LFxuXHRcdGJvYXJkOiBqc29uLnRlYW0sXG5cdFx0dmlld3M6IGpzb24udmlld3MsXG5cdFx0YWZ0ZXI6IGpzb24uYWZ0ZXJcblx0fTtcblxuXHRpZihqc29uLmNhcmRzICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmNhcmRzID0ganNvbi5jYXJkcztcblx0fVxuXG5cdG5ldyBUcmVsbG9TcHJpbnRlcihvcHRpb25zKTtcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLWQ0NjZkMTk0MjkvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS02LjguMS0zMGQ4NGI0Y2YxLTdjMTc4NDI0N2IuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtZDQ2NmQxOTQyOS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGx1cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9taW51cy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaXYudHJlbGxvLXNwcmludGVyIHtcbiAgbWFyZ2luOiAwO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yNWVtIDA7XG4gIGJhY2tncm91bmQ6ICMwMjZBQTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMDtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1ZW0gMDtcbiAgYmFja2dyb3VuZDogIzAyNkFBNztcbiAgY29sb3I6IHdoaXRlO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1tc2cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZzogMC4yNWVtIDA7XG4gIGJhY2tncm91bmQ6ICMwMjZBQTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgcC5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjI1ZW0gMjBweDtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IGgzIHNwYW4uZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgcC50cmVsbG8tY29tcGxldGVkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogZGVlcHNreWJsdWU7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1taW51cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzLCBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBwYWRkaW5nOiAwLjI1ZW07XG4gIG1hcmdpbi1ib3R0b206IDZwdDtcbiAgYm9yZGVyOiAxcHQgc29saWQgZ3JheTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZXhwYW5kLCBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tZXJyb3JzIHtcbiAgLW1vei1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcbiAgYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLWNvdW50IHtcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWQwZmQ7XG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgaDQgc3Bhbi50cmVsbG8tZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIC50cmVsbG8tY2FyZC1tZW1iZXJzIHtcbiAgbWFyZ2luOiAwIDAuMjVlbTtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMC41ZW0gMWVtO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHAge1xuICBtYXJnaW46IDAgMCAwLjI1ZW0gMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyB7XG4gIG1hcmdpbjogMCAyZW07XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUgc3Bhbi50cmVsbG8tZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHAge1xuICBtYXJnaW46IDAgMC4yNWVtO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMge1xuICBtYXJnaW46IDFlbSAyZW07XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCBzcGFuLnRyZWxsby1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmbG9hdDogcmlnaHQ7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHNwYW4ubGlzdCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyB7XG4gIGJhY2tncm91bmQ6ICNjNDE0MjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mge1xuICBiYWNrZ3JvdW5kOiAjZmY4MGRmO1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBjb2xvcjogYmxhY2s7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1tZW1iZXIge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcbiAgbWFyZ2luOiAxZW0gM2VtIDZwdCAzZW07XG4gIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgcCB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG1hcmdpbjogMDtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHNwYW4udHJlbGxvLWNvZGUsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mgc3Bhbi50cmVsbG8tY29kZSwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHNwYW4udHJlbGxvLWNvZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBkaXYudHJlbGxvLWluZm8sIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLWluZm8gcCB7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8ueWFybi9jYWNoZS90cmVsbG8tc3ByaW50ZXItbnBtLTIuMS4xLWMxZTdlYmI4ODctMDY1OTk4OTNiMS56aXAvbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci90cmVsbG8uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLFNBQUE7QUFMRjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQVpVO0VBYVYsWUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBTEo7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFyQlU7RUFzQlYsWUFBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQTlCVTtFQStCVixZQUFBO0FBUEo7QUFVRTtFQUNFLGtCQUFBO0FBUko7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBV0k7RUFDRSwyQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBQVROO0FBV007RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFYTjtBQWVFO0VBQ0UseURBQUE7QUFiSjtBQWdCRTtFQUNFLHlEQUFBO0FBZEo7QUFpQkU7RUFDRSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBZko7QUFrQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBaEJKO0FBb0JFO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0FBbEJKO0FBcUJFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbkJKO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQXJCSjtBQXVCSTtFQUNFLHlCQTVHYztFQTZHZCxtQkFBQTtFQUNBLGlCQUFBO0FBckJOO0FBd0JJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXRCTjtBQXlCSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXZCTjtBQTZCRTtFQU1FLGlCQUFBO0FBaENKO0FBMkJJO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQXpCTjtBQWdDRTtFQUNFLGFBQUE7QUE5Qko7QUFnQ0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTlCTjtBQWdDTTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBOUJSO0FBa0NJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWhDTjtBQXFDRTtFQUNFLGVBQUE7QUFuQ0o7QUFxQ0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbkNOO0FBcUNNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFuQ1I7QUFzQ007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBcENSO0FBMENFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBeENKO0FBMENJO0VBQ0UsbUJBL0xTO0VBZ01ULFlBQUE7QUF4Q047QUEyQ0k7RUFDRSxtQkFuTVc7RUFvTVgsWUFBQTtBQXpDTjtBQTRDSTtFQUNFLG1CQXZNVztFQXdNWCxZQUFBO0FBMUNOO0FBNENNO0VBQ0Usa0JBQUE7QUExQ1I7QUE4Q0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBNUNOO0FBOENNO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBNUNSO0FBK0NNO0VBQ0UsaUJBQUE7QUE3Q1I7QUFnRE07RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTlDUjtBQWlETTtFQUNFLDJCQUFBO0FBL0NSO0FBaURRO0VBQ0UsYUFBQTtBQS9DVjtBQXFERTtFQUNFLGNBQUE7QUFuREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHRyZWxsby1ibHVlOiAjMDI2QUE3O1xcbiR0cmVsbG8tY2FyZC10aXRsZTogIzgxZDBmZDtcXG4kdHJlbGxvLWVycm9yOiAjYzQxNDI1O1xcbiR0cmVsbG8td2FybmluZzogI2ZmODBkZjtcXG4kdHJlbGxvLW1lbWJlcnM6ICNmMGYwZjA7XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciB7XFxuICBtYXJnaW46IDA7XFxuXFxuICBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICR0cmVsbG8tYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgcC50cmVsbG8tc3RhdHVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogJHRyZWxsby1ibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBwLnRyZWxsby1tc2cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICR0cmVsbG8tYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgcC5jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBkaXYudHJlbGxvLXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBoMyB7XFxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjI1ZW0gMjBweDtcXG5cXG4gICAgICBzcGFuLmRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBwLnRyZWxsby1jb21wbGV0ZWQtaGVhZGVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgICAgY29sb3I6IGRlZXBza3libHVlO1xcbiAgICB9XFxuICB9XFxuXFxuICAudHJlbGxvLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltZy9wbHVzLnBuZycpO1xcbiAgfVxcblxcbiAgLnRyZWxsby1taW51cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1nL21pbnVzLnBuZycpO1xcbiAgfVxcblxcbiAgLnRyZWxsby1wbHVzLCAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBkaXYudHJlbGxvLWV4cGFuZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB0O1xcbiAgICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIH1cXG5cXG4gIC8vIFNoYWRvd3NcXG4gIGRpdi50cmVsbG8tZXhwYW5kLCAudHJlbGxvLWVycm9ycyB7XFxuICAgIC1tb3otYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICAgIGJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgfVxcblxcbiAgcC50cmVsbG8tY291bnQge1xcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuODVlbTtcXG4gIH1cXG5cXG5cXG4gIGRpdi50cmVsbG8tY2FyZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuXFxuICAgIGg0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHJlbGxvLWNhcmQtdGl0bGU7XFxuICAgICAgbWFyZ2luOiAwLjVlbSAwIDAgMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgfVxcblxcbiAgICBoNCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07XFxuICAgIH1cXG5cXG4gICAgLnRyZWxsby1jYXJkLW1lbWJlcnMge1xcbiAgICAgIG1hcmdpbjogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxuICB9XFxuXFxuXFxuXFxuICBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHtcXG4gICAgcCB7XFxuICAgICAgbWFyZ2luOiAwIDAgMC4yNWVtIDA7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgfVxcblxcbiAgICBtYXJnaW46IDAuNWVtIDFlbTtcXG4gIH1cXG5cXG5cXG4gIGRpdi50cmVsbG8tY29tbWVudHMge1xcbiAgICBtYXJnaW46IDAgMmVtO1xcblxcbiAgICBoNSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgICBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIG1hcmdpbjogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgfVxcbiAgfVxcblxcblxcbiAgZGl2LnRyZWxsby11cGRhdGVzIHtcXG4gICAgbWFyZ2luOiAxZW0gMmVtO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuXFxuICAgICAgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgIH1cXG5cXG4gICAgICBzcGFuLmxpc3Qge1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgfVxcblxcbiAgICB9XFxuICB9XFxuXFxuICBkaXYudHJlbGxvLXNwcmludHMge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcblxcbiAgICBkaXYudHJlbGxvLWVycm9ycyB7XFxuICAgICAgYmFja2dyb3VuZDogJHRyZWxsby1lcnJvcjtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgZGl2LnRyZWxsby13YXJuaW5ncyB7XFxuICAgICAgYmFja2dyb3VuZDogJHRyZWxsby13YXJuaW5nO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgfVxcblxcbiAgICBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgICAgIGJhY2tncm91bmQ6ICR0cmVsbG8tbWVtYmVycztcXG4gICAgICBjb2xvcjogYmxhY2s7XFxuXFxuICAgICAgZGl2LnRyZWxsby1tZW1iZXIge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBkaXYudHJlbGxvLWVycm9ycywgZGl2LnRyZWxsby13YXJuaW5ncywgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcXG4gICAgICBtYXJnaW46IDFlbSAzZW0gNnB0IDNlbTtcXG4gICAgICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuXFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIH1cXG5cXG4gICAgICBzcGFuLnRyZWxsby1jb2RlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMywgaDQge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIGRpdi50cmVsbG8taW5mbyB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIGRpdi50cmVsbG8tc3ByaW50LXRhYmxlIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICB9XFxuXFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC04YzI2MjgwYTRmLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC04YzI2MjgwYTRmLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS0zLjMuMy0yZThiYmVlYWM0LWY1OWM5NTNmNTYuemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLThjMjYyODBhNGYvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTMuMy4zLTJlOGJiZWVhYzQtZjU5Yzk1M2Y1Ni56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC1kNDY2ZDE5NDI5LzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNi44LjEtMzBkODRiNGNmMS03YzE3ODQyNDdiLnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9yZXNvbHZlLXVybC1sb2FkZXItbnBtLTUuMC4wLTliNDQxMDY3YzktNmQ0ODM3MzNhNC56aXAvbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9zYXNzLWxvYWRlci12aXJ0dWFsLTk3MWQ2NTZkMWQvMC9jYWNoZS9zYXNzLWxvYWRlci1ucG0tMTMuMy4yLTgyYmZlYWU3NDYtNzM5NGE4ZDFiOC56aXAvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQudXNlWzNdIS4vdHJlbGxvLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtZDQ2NmQxOTQyOS8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTYuOC4xLTMwZDg0YjRjZjEtN2MxNzg0MjQ3Yi56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vcmVzb2x2ZS11cmwtbG9hZGVyLW5wbS01LjAuMC05YjQ0MTA2N2M5LTZkNDgzNzMzYTQuemlwL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vX192aXJ0dWFsX18vc2Fzcy1sb2FkZXItdmlydHVhbC05NzFkNjU2ZDFkLzAvY2FjaGUvc2Fzcy1sb2FkZXItbnBtLTEzLjMuMi04MmJmZWFlNzQ2LTczOTRhOGQxYjguemlwL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVszXSEuL3RyZWxsby5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0dmVyc2lvbjogMSxcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcblx0XCJpbnRlbnRFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxuXHRrZXk6ICcnLFxuXG5cdC8vIFByZWZpeCB0byBhcHBseSB0byBsb2NhbCBzdG9yYWdlLiBVc2VmdWwgdG9cblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxuXHRsb2NhbFByZWZpeDogJycsXG59O1xuXG4vKipcbiAqIE1lcmdlIHR3byBKYXZhc2NyaXB0IG9iamVjdHMgaW50byBhIHNpbmdsZSByZXN1bHQuXG4gKiBAcGFyYW0gb2JqMSBGaXJzdCBvYmplY3RcbiAqIEBwYXJhbSBvYmoyIFNlY29uZCBvYmplY3QuIFNlY29uZCBvYmplY3QgdmFsdWVzIHRha2UgcHJlY2VkZW5jZS5cbiAqL1xuY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XG5cdHZhciBvYmogPSB7fTtcblxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdG9ialtrZXldID0gb2JqMVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0b2JqW2tleV0gPSBvYmoyW2tleV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cblxuLy8gTG9jYWwgc3RvcmFnZSBhZGRyZXNzIGZvciBzdG9yaW5nIHRoZSB0b2tlbiB3aGlsZSBjb25uZWN0ZWRcbmNvbnN0IFRva2VuU3RvcmFnZSA9ICdfbjlzNVJ5Zzh3YSc7XG5cbmV4cG9ydCBjb25zdCBUcmVsbG9Db25uZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0b3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuXHRsZXQgdG9rZW4gPSAnJztcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG5cdFx0Ly8gVGlsbCB3ZSBrbm93IG90aGVyd2lzZVxuXHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDtcblxuXHRcdC8vXG5cdFx0Ly8gU2VlIGlmIHRoZXJlIGlzIGEgdG9rZW4gaW4gdGhlIGN1cnJlbnQgVVJMXG5cdFx0Ly9cblx0XHRjb25zdCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3QgcmUgPSAvI3Rva2VuPSguKikkLztcblx0XHRjb25zdCBtYXRjaGVzID0gaHJlZi5tYXRjaChyZSk7XG5cdFx0aWYobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHRva2VuID0gbWF0Y2hlc1sxXTtcblxuXHRcdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gSXMgdGhlcmUgYSB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlP1xuXHRcdC8vXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblx0XHR0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcblx0XHRpZih0b2tlbiAhPT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5DT05ORUNURUQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEF1dGhvcml6ZSB3aXRoIFRyZWxsb1xuXHQgKlxuXHQgKiBSZWRpcmVjdHMgdG8gdGhlIFRyZWxsbyBhdXRob3JpemF0aW9uIGVuZHBvaW50LCB3aGljaCByZWRpcmVjdHMgYmFja1xuXHQgKiB0byB0aGlzIHBhZ2UgYWZ0ZXIgYXV0aG9yaXphdGlvbiB3aXRoIHRoZSB0b2tlbiBpbiB0aGUgVVJMLlxuXHQgKi9cblx0dGhpcy5hdXRob3JpemUgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCByZXR1cm5fdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblx0XHRjb25zdCB1cmwgPSBgJHtvcHRpb25zLmF1dGhFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259L2F1dGhvcml6ZT9leHBpcmF0aW9uPW5ldmVyJm5hbWU9JHtvcHRpb25zLm5hbWV9JmAgK1xuXHRcdFx0YGNhbGxiYWNrX21ldGhvZD1mcmFnbWVudCZzY29wZT1yZWFkJnJlc3BvbnNlX3R5cGU9dG9rZW4ma2V5PSR7b3B0aW9ucy5rZXl9JnJldHVybl91cmw9JHtyZXR1cm5fdXJsfWA7XG5cdFx0d2luZG93LmxvY2F0aW9uID0gdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc2Nvbm5lY3QgZnJvbSBUcmVsbG8uXG5cdCAqXG5cdCAqIFRoaXMgZm9yZ2V0cyB0aGUgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZS5cblx0ICpcblx0ICovXG5cdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSk7XG5cdFx0dG9rZW4gPSAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBQZXJmb3JtIGEgR0VUIHF1ZXJ5IGZvciBUcmVsbG9cblx0ICogQHBhcmFtIHVybCBUaGUgYm9hcmQgVVJMIGFmdGVyIHRoZSB2ZXJzaW9uLCBsaWtlIFwiL21lbWJlci9tZS9ib2FyZHM/ZmllbGRzPWFsbFwiXG5cdCAqIEBwYXJhbSBzdWNjZXNzIEZ1bmN0aW9uIGNhbGxlZCBvbiBzdWNjZXNzIHdpdGggZGF0YSBhcmd1bWVudFxuXHQgKiBAcGFyYW0gZmFpbHVyZSBGdW5jdGlvbiBjYWxsZWQgb24gZmFpbHVyZSB3aXRoIGRhdGEgYXJndW1lbnRcblx0ICogQHBhcmFtIG1zZyBPcHRpb25hbCBlbGVtZW50IHRvIHB1dCByYXRlIGxpbWl0aW5nIG1lc3NhZ2UgaW50b1xuXHQgKi9cblx0dGhpcy5nZXQgPSBmdW5jdGlvbih1cmwsIHN1Y2Nlc3MsIGZhaWx1cmUsIG1zZykge1xuXG5cdFx0bGV0IHRyaWVzID0gMTtcblxuXHRcdGxldCBtYXh0cmllcyA9IDU7ICAvLyBNYXhpbXVtIG51bWJlciBvZiB0cmllc1xuXHRcdGxldCBiYWNrb2ZmID0gMTA7ICAgLy8gc2Vjb25kc1xuXHRcdGxldCBiYWNrb2ZmSW5jcmVhc2UgPSAxLjI1OyAvLyBBbW91bnQgdG8gaW5jcmVhc2UgYmFja29mZiBhZnRlciBlYWNoIHRyeVxuXG5cdFx0ZnVuY3Rpb24gdHJlbGxvR2V0KCkge1xuXHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdHJlcXVlc3Qub3BlbignR0VUJywgYCR7b3B0aW9ucy5hcGlFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259LyR7dXJsfSZrZXk9JHtvcHRpb25zLmtleX0mdG9rZW49JHt0b2tlbn1gLCB0cnVlKTtcblxuXHRcdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xuXHRcdFx0XHRcdC8vIFN1Y2Nlc3MhXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuXHRcdFx0XHRcdHN1Y2Nlc3MoZGF0YSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgcmVhY2hlZCBvdXIgdGFyZ2V0IHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yXG5cdFx0XHRcdFx0ZmFpbHVyZSgpXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZigrcmVxdWVzdC5zdGF0dXMgPT09IDQyOSAmJiB0cmllcyA8IG1heHRyaWVzKSB7XG5cdFx0XHRcdFx0dHJpZXMrKztcblx0XHRcdFx0XHRpZihtc2cgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0bXNnLmlubmVyVGV4dCA9IFwiUmF0ZSBsaW1pdGVkLCBhdHRlbXB0IFwiICsgdHJpZXMgKyBcIiBhZnRlciBcIiArXG5cdFx0XHRcdFx0XHRcdGJhY2tvZmYudG9GaXhlZCgwKSArIFwiIHNlY29uZHNcIjtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHRyZWxsb0dldCgpO1xuXHRcdFx0XHRcdFx0fSwgYmFja29mZiAqIDEwMDApO1xuXHRcdFx0XHRcdFx0YmFja29mZiAqPSBiYWNrb2ZmSW5jcmVhc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZhaWx1cmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmVxdWVzdC5zZW5kKCk7XG5cdFx0fVxuXG5cdFx0dHJlbGxvR2V0KCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCk7XG59XG5cblRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEID0gJ0QnO1xuVHJlbGxvQ29ubmVjdC5DT05ORUNURUQgPSAnQyc7XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWxsb0Nvbm5lY3Q7XG4iLCJpbXBvcnQgJy4vdHJlbGxvLnNjc3MnO1xuXG5pbXBvcnQge1RyZWxsb1NwcmludGVyfSBmcm9tICcuL3NyYy9UcmVsbG9TcHJpbnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWxsb1NwcmludGVyO1xuZXhwb3J0IHtUcmVsbG9TcHJpbnRlcn07XG4iLCIvKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gQm9hcmRcbiAqL1xuXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXInO1xuaW1wb3J0IHtMaXN0fSBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IHtVcGRhdGV9IGZyb20gJy4vVXBkYXRlJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50JztcblxuZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xuXG5cdHRoaXMuZGF0YSA9IGRhdGE7XG5cdHRoaXMuaWQgPSBkYXRhLmlkO1xuXHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG5cdHRoaXMubGlzdHMgPSBbXTtcblx0dGhpcy5tZW1iZXJzID0ge307XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cblx0dGhpcy5maW5kX2NhcmQgID0gZnVuY3Rpb24oaWQpIHtcblx0XHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2FyZCA9IHRoaXMubGlzdHNbaV0uZmluZF9jYXJkKGlkKTtcblx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGNhcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0aGlzLmFkZF9tZW1iZXIgPSBmdW5jdGlvbihtZW1iZXIpIHtcblx0XHR0aGlzLm1lbWJlcnNbbWVtYmVyLmlkXSA9IG1lbWJlcjtcblx0fVxufVxuXG5Cb2FyZC5mZXRjaCA9IGZ1bmN0aW9uKHRyZWxsbywgbmFtZSwgb3B0aW9ucywgbXNnLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG5cdG1zZy5pbm5lclRleHQgPSAnRmV0Y2hpbmcgYm9hcmQgJyArIG5hbWU7XG5cblx0Ly8vIEtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IG9wZW4gYXN5bmMgY2FsbHMgdGhlcmUgYXJlIHJpZ2h0IG5vd1xuXHRsZXQgYWN0aXZlID0gMDtcblxuXHQvLyBXaWxsIGJlIHNldCB0byBwb2ludCB0byBhIG5ldyBCb2FyZCBvYmplY3Rcblx0bGV0IGJvYXJkID0gbnVsbDtcblxuXHRhc3luY19zdGFydCgpO1xuXHR0cmVsbG8uZ2V0KFwiL21lbWJlci9tZS9ib2FyZHM/ZmllbGRzPWFsbFwiLFxuXHRcdChkYXRhKSA9PiB7XG5cdFx0XHRmb3IodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgIGkrKykge1xuXHRcdFx0XHR2YXIgYm9hcmREYXRhID0gZGF0YVtpXTtcblx0XHRcdFx0aWYoYm9hcmREYXRhLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0Ly8gV2UgaGF2ZSBmb3VuZCB0aGUgYm9hcmQgKGlmIG5vdCBjbG9zZWQpXG5cdFx0XHRcdFx0aWYoIWJvYXJkRGF0YS5jbG9zZWQpIHtcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgYm9hcmQgb2JqZWN0XG5cdFx0XHRcdFx0XHRib2FyZCA9IG5ldyBCb2FyZChib2FyZERhdGEsIG9wdGlvbnMpO1xuXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbWVtYmVyc2hpcFxuXHRcdFx0XHRcdFx0ZmV0Y2hfbWVtYmVyc2hpcChib2FyZCk7XG5cblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBsaXN0cyBmb3IgdGhlIGJvYXJkXG5cdFx0XHRcdFx0XHRmZXRjaF9saXN0cyhib2FyZCk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihib2FyZCA9PT0gbnVsbCkge1xuXHRcdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZpbmQgVHJlbGxvIGJvYXJkIFwiICsgbmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXN5bmNfZW5kKCk7XG5cdFx0fSxcblx0XHQoZGF0YSkgPT4ge1xuXHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gYm9hcmRzXCIpXG5cdFx0fSxcblx0XHRtc2dcblx0KVxuXG5cdC8qKlxuXHQgKiBGZXRjaCB0aGUgbWVtYmVyc2hpcCBvZiB0aGUgYm9hcmQuXG5cdCAqIEBwYXJhbSBib2FyZCBCb2FyZCB0byBmZXRjaCBmb3Jcblx0ICovXG5cdGZ1bmN0aW9uIGZldGNoX21lbWJlcnNoaXAoYm9hcmQpIHtcblx0XHRhc3luY19zdGFydCgpO1xuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL21lbWJlcnM/ZmllbGRzPWFsbFwiLFxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24obWVtYmVyRGF0YSkge1xuXHRcdFx0XHRcdHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyKGJvYXJkLCBtZW1iZXJEYXRhKTtcblx0XHRcdFx0XHRib2FyZC5hZGRfbWVtYmVyKG1lbWJlcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhc3luY19lbmQoKTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIG1lbWJlcnNoaXBcIikgfSxcblx0XHRcdG1zZ1xuXHRcdClcblx0fVxuXG5cblx0ZnVuY3Rpb24gZmV0Y2hfbGlzdHMoYm9hcmQpIHtcblx0XHRtc2cuaW5uZXJUZXh0ID0gXCJGZXRjaGluZyBsaXN0cyBmb3IgXCIgKyBuYW1lO1xuXG5cdFx0YXN5bmNfc3RhcnQoKTtcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkcy9cIiArIGJvYXJkLmlkICsgXCIvbGlzdHM/ZmlsdGVyPW9wZW5cIixcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGxpc3REYXRhKSB7XG5cdFx0XHRcdFx0aWYoIWxpc3REYXRhLmNsb3NlZCkge1xuXHRcdFx0XHRcdFx0dmFyIGxpc3QgPSBuZXcgTGlzdChib2FyZCwgbGlzdERhdGEpO1xuXHRcdFx0XHRcdFx0Ym9hcmQubGlzdHMucHVzaChsaXN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGZldGNoX2NhcmRzKGJvYXJkKTtcblx0XHRcdFx0YXN5bmNfZW5kKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBsaXN0c1wiKSB9LFxuXHRcdFx0bXNnXG5cdFx0KVxuXHR9XG5cblx0LyoqXG5cdCAqIEZldGNoIGFsbCBjYXJkcyBhcyBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXG5cdCAqIEBwYXJhbSBib2FyZCBCb2FyZCB3ZSBhcmUgZmV0Y2hpbmcgZm9yXG5cdCAqL1xuXHRmdW5jdGlvbiBmZXRjaF9jYXJkcyhib2FyZCkge1xuXHRcdG1zZy5pbm5lclRleHQgPSBcIkZldGNoaW5nIGNhcmRzXCI7XG5cblx0XHQvLyBDb2xsZWN0IHVwIGFsbCBVUkxzIGZvciBhbGwgb2YgdGhlIGxpc3RzXG5cdFx0dmFyIHVybHMgPSAnJztcblx0XHRmb3IodmFyIGk9MDsgaTxib2FyZC5saXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGxpc3QgPSBib2FyZC5saXN0c1tpXTtcblx0XHRcdGlmKHVybHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR1cmxzICs9ICcsJztcblx0XHRcdH1cblx0XHRcdHVybHMgKz0gXCIvbGlzdHMvXCIgKyBsaXN0LmlkICsgXCIvY2FyZHMvb3BlblwiO1xuXHRcdH1cblxuXHRcdC8vIEdldCBnZXQgaXRcblx0XHRhc3luY19zdGFydCgpO1xuXHRcdHRyZWxsby5nZXQoXCIvYmF0Y2g/dXJscz1cIiArIHVybHMsXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdC8vIExvb3Agb3ZlciB0aGUgcmVzdWx0IGZvciBlYWNoIHByb3ZpZGVkIFVSTFxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aCAmJiBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGJvYXJkLmxpc3RzW2ldO1xuXHRcdFx0XHRcdGNvbnN0IGNhcmRzRGF0YSA9IGRhdGFbaV1bMjAwXTtcblxuXHRcdFx0XHRcdGNhcmRzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGNhcmREYXRhKSB7XG5cdFx0XHRcdFx0XHRpZighY2FyZERhdGEuY2xvc2VkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChib2FyZCwgbGlzdCwgY2FyZERhdGEpO1xuXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLmFmdGVyICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYoY2FyZC5jcmVhdGVkLmdldFRpbWUoKSAvIDEwMDAgPiBvcHRpb25zLmFmdGVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblxuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmZXRjaF9hY3Rpb25zKGJvYXJkKTtcblx0XHRcdFx0YXN5bmNfZW5kKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkc1wiKSB9LFxuXHRcdFx0bXNnXG5cdFx0KVxuXHR9XG5cblxuXHRmdW5jdGlvbiBmZXRjaF9hY3Rpb25zKGJvYXJkKSB7XG5cdFx0YXN5bmNfc3RhcnQoKTtcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkL1wiICsgYm9hcmQuaWQgKyBcIi9hY3Rpb25zP2ZpbHRlcj1jb21tZW50Q2FyZCx1cGRhdGVDYXJkOmlkTGlzdCZsaW1pdD0xMDAwXCIsXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcblx0XHRcdFx0XHRpZighYWN0aW9uLmNsb3NlZCkge1xuXHRcdFx0XHRcdFx0aWYoYWN0aW9uLnR5cGUgPT09IFwiY29tbWVudENhcmRcIikge1xuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcblx0XHRcdFx0XHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBjb21tZW50ID0gbmV3IENvbW1lbnQoYm9hcmQsIGNhcmQsIGFjdGlvbik7XG5cdFx0XHRcdFx0XHRcdFx0Y2FyZC5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihhY3Rpb24udHlwZSA9PT0gJ3VwZGF0ZUNhcmQnKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IG5ldyBVcGRhdGUoYm9hcmQsIGNhcmQsIGFjdGlvbik7XG5cdFx0XHRcdFx0XHRcdFx0Y2FyZC51cGRhdGVzLnB1c2godXBkYXRlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGFjdGlvbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRib2FyZC5saXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcblx0XHRcdFx0XHRsaXN0LmNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xuXHRcdFx0XHRcdFx0Y2FyZC5zb3J0X3VwZGF0ZXMoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YXN5bmNfZW5kKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkIGluZm9ybWF0aW9uXCIpIH0sXG5cdFx0XHRtc2dcblx0XHQpXG5cdH1cblxuXG5cdGZ1bmN0aW9uIGFzeW5jX3N0YXJ0KCkge1xuXHRcdGFjdGl2ZSsrO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXN5bmNfZW5kKCkge1xuXHRcdGFjdGl2ZS0tO1xuXHRcdGlmKGFjdGl2ZSA9PT0gMCkge1xuXHRcdFx0c3VjY2Vzcyhib2FyZCk7XG5cdFx0fVxuXHR9XG59XG5cbkJvYXJkLnByb3RvdHlwZS5maW5kX2xpc3QgPSBmdW5jdGlvbihuYW1lKSB7XG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0Zm9yKHZhciBpPTA7IGk8dGhpcy5saXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBsaXN0ID0gdGhpcy5saXN0c1tpXTtcblx0XHRpZihsaXN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59IiwiLyoqXG4gKiBAZmlsZVxuICogU3RhbmRhcmQgVHJlbGxvIGJvYXJkIHZpZXdcbiAqL1xuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi9EYXRhVmlldyc7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XG5cbmV4cG9ydCBjb25zdCBCb2FyZFZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7XG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcblxuXHQgICAgZm9yKGxldCBsaXN0IG9mIGJvYXJkLmxpc3RzKSB7XG5cdFx0XHRwcmVzZW50TGlzdCh2aWV3LCBsaXN0KTtcblx0ICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmVzZW50TGlzdCA9ICh2aWV3LCBsaXN0KSA9PiB7XG4gICAgXHRjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XG4gICAgXHRoZWFkZXIuaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xuICAgIFx0dmlldy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgXHRjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcbiAgICBcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGV4cGFuZGVyKTtcblxuICAgIFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgXHRcdGlmKGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIFx0XHRcdFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcbiAgICBcdFx0XHRVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xuXHRcdCAgICB9IGVsc2Uge1xuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XG5cdFx0ICAgIH1cblx0ICAgIH0pO1xuXG4gICAgXHRsZXQgY291bnQgPSBsaXN0LmNvdW50X21lbWJlcnMoKTtcblxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNhcmRzOjwvZW0+WycgKyBsaXN0LmNhcmRzLmxlbmd0aCArICddICc7XG5cdCAgICBmb3IodmFyIGMgaW4gY291bnQpIHtcblx0XHQgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkoYykpIHtcblx0XHRcdCAgICBtZW1iZXJzICs9IGNvdW50W2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50W2NdLmNudCArICddJm5ic3A7Jm5ic3A7Jztcblx0XHQgICAgfVxuXHQgICAgfVxuXG5cdCAgICBjb25zdCBjb3VudEVsID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb3VudCcpO1xuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQoY291bnRFbCk7XG5cdCAgICBjb3VudEVsLmlubmVySFRNTCA9IG1lbWJlcnM7XG5cblx0ICAgIGZvcihsZXQgY2FyZCBvZiBsaXN0LmNhcmRzKSB7XG5cdCAgICBcdHByZXNlbnRDYXJkKGV4cGFuZGVyLCBjYXJkKTtcblx0ICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJlc2VudENhcmQgPSAoZGl2LCBjYXJkKSA9PiB7XG5cdCAgICAvL1xuXHQgICAgLy8gSGVhZGluZ1xuXHQgICAgLy9cblx0ICAgIGxldCBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShjYXJkLmNyZWF0ZWQpO1xuXG5cdFx0bGV0IGNhcmREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY2FyZCcpO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcblx0XHRjYXJkRGl2LmlubmVySFRNTCA9IGA8aDQ+PHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHtjYXJkLm5hbWV9PC9oND5gO1xuXG5cdCAgICAvL1xuXHQgICAgLy8gTWVtYmVyc1xuXHQgICAgLy9cblx0ICAgIGxldCBtZW1iZXJzID0gJyc7XG5cdCAgICBmb3IobGV0IGlkIG9mIGNhcmQubWVtYmVycykge1xuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW2lkXTtcblx0XHQgICAgaWYobWVtYmVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHQgICAgbWVtYmVycyArPSAnIC8gJztcblx0XHQgICAgfVxuXHRcdCAgICBtZW1iZXJzICs9ICc8c3Bhbj4nICsgbWVtYmVyLm5hbWUgKyAnPC9zcGFuPic7XG5cdCAgICB9XG5cblx0ICAgIGxldCBtZW1iZXJzUCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY2FyZC1tZW1iZXJzJylcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQobWVtYmVyc1ApO1xuXHQgICAgbWVtYmVyc1AuaW5uZXJIVE1MID0gbWVtYmVycztcblxuXG5cdCAgICAvL1xuXHQgICAgLy8gRGVzY3JpcHRpb25cblx0ICAgIC8vXG5cdCAgICBsZXQgZGVzYyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1kZXNjcmlwdGlvbicpO1xuXHQgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkZXNjKTtcblx0ICAgIGRlc2MuaW5uZXJIVE1MID0gY2FyZC5kZXNjO1xuXG5cdCAgICBwcmVzZW50Q29tbWVudHMoY2FyZERpdiwgY2FyZCk7XG5cdCAgICBwcmVzZW50VXBkYXRlcyhjYXJkRGl2LCBjYXJkKTtcbiAgICB9XG4gICAgdGhpcy5wcmVzZW50Q2FyZCA9IHByZXNlbnRDYXJkO1xuXG4gICAgbGV0IHByZXNlbnRDb21tZW50cyA9IChkaXYsIGNhcmQpID0+IHtcblx0ICAgIGlmKGNhcmQuY29tbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0ICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgbGV0IGNvbW1lbnREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY29tbWVudHMnKTtcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChjb21tZW50RGl2KTtcblxuXHRcdGZvcihsZXQgY29tbWVudCBvZiBjYXJkLmNvbW1lbnRzKSB7XG5cdFx0XHRsZXQgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW2NvbW1lbnQubWVtYmVyXTtcblx0XHRcdGxldCBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0XHRsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY29tbWVudC5kYXRlKTtcblxuXHRcdFx0bGV0IGg1ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZChoNSk7XG5cdFx0XHRoNS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHttZW1iZXJOYW1lfWA7XG5cblx0XHRcdGxldCB0ZXh0RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cdFx0XHR0ZXh0RGl2LmlubmVySFRNTCA9IGNvbW1lbnQudGV4dDtcblx0XHR9XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRVcGRhdGVzID0gKGRpdiwgY2FyZCkgPT4ge1xuXHQgICAgaWYoY2FyZC51cGRhdGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdCAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIGxldCB1cGRhdGVEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdXBkYXRlcycpO1xuXHQgICAgZGl2LmFwcGVuZENoaWxkKHVwZGF0ZURpdik7XG5cblx0ICAgIGZvcihsZXQgdXBkYXRlIG9mIGNhcmQudXBkYXRlcykge1xuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW3VwZGF0ZS5tZW1iZXJdO1xuXHRcdCAgICB2YXIgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xuXHRcdCAgICB2YXIgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUodXBkYXRlLmRhdGUpO1xuXHRcdCAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHQgICAgdXBkYXRlRGl2LmFwcGVuZENoaWxkKHApO1xuXHRcdCAgICBwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImRhdGVcIj4nICsgZGF0ZSArICc8L3NwYW4+ICcgKyBtZW1iZXJOYW1lICtcblx0XHRcdCAgICAnIG1vdmVkIGZyb20gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QmVmb3JlICtcblx0XHRcdCAgICAnPC9zcGFuPiB0byA8c3BhbiBjbGFzcz1cImxpc3RcIj4nICsgdXBkYXRlLmxpc3RBZnRlciArICc8L3NwYW4+Jztcblx0ICAgIH1cbiAgICB9XG59XG5cbi8vLyBAY29uZFxuQm9hcmRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcbkJvYXJkVmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCb2FyZFZpZXc7XG4vLy8gQGVuZGNvbmRcbiIsIi8qKlxuICogQGZpbGVcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxuICovXG5cbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcblxuZXhwb3J0IGNvbnN0IENhcmQgPSBmdW5jdGlvbihib2FyZCwgbGlzdCwgZGF0YSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IFV0aWwuc3RyaXBfdGFncyhkYXRhLm5hbWUpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5kZXNjID0gJzxwPicgK1xuICAgICAgICBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5kZXNjKS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXG4gICAgICAgICc8L3A+JztcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhLmlkLnN1YnN0cigwLCA4KSwgMTYpICogMTAwMCk7XG5cbiAgICB0aGlzLm1lbWJlcnMgPSBbXTtcblxuICAgIGRhdGEuaWRNZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgdGhhdC5tZW1iZXJzLnB1c2goaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xuICAgIHRoaXMudXBkYXRlcyA9IFtdO1xufVxuXG5DYXJkLnByb3RvdHlwZS5zb3J0X3VwZGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVwZGF0ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYoYS5kYXRlID09IGIuZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIERldGVybWluZSB0aGUgbGFzdCB0aW1lIHRoaXMgY2FyZCB3YXMgbW92ZWQuXG4gKiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gYSBjb21wbGV0ZWQgY2FyZCB3YXNcbiAqIG1vdmVkIHRvIENvbXBsZXRlZC5cbiAqL1xuQ2FyZC5wcm90b3R5cGUuZmluYWxfdGltZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMudXBkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aC0xXS5kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZWQ7XG59XG5cbi8qKlxuICogQ291bnQgbWVtYmVycyBmcm9tIGEgY29sbGVjdGlvbiBvZiBjYXJkcy5cbiAqIEBwYXJhbSBib2FyZCBCb2FyZCBvYmplY3RcbiAqIEBwYXJhbSBsaXN0IGFycmF5IG9mIENhcmQgb2JqZWN0c1xuICogQHJldHVybnMgb2JqZWN0IHdpdGggaWQgYXMgcHJvcGVydHkgdG8gb2JqZWN0IHtjbnQ6ID8sIG1lbWJlcjogP31cbiAqL1xuQ2FyZC5jb3VudF9tZW1iZXJzID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QpIHtcbiAgICB2YXIgY291bnQgPSB7fTtcblxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICB2YXIgbWVtYmVyID0gYm9hcmQubWVtYmVyc1tpZF07XG4gICAgICAgICAgICBpZihjb3VudC5oYXNPd25Qcm9wZXJ0eShtZW1iZXIuaWQpKSB7XG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXS5jbnQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXSA9IHtjbnQ6IDEsIG1lbWJlcjogbWVtYmVyfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiBjb3VudDtcbn1cbiIsIi8qKlxuICogQGZpbGVcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGNvbW1lbnQgb24gYSBjYXJkXG4gKi9cblxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XG5cbi8qKlxuIEFycmF5XG4gKFxuIFtpZF0gPT4gNTdlZWMxY2EyMjY4NDY0NmIxMTkzYWJkXG4gW2lkTWVtYmVyQ3JlYXRvcl0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXG4gW2RhdGFdID0+IEFycmF5XG4gKFxuIFtsaXN0XSA9PiBBcnJheVxuIChcbiBbbmFtZV0gPT4gRGVzaWduXG4gW2lkXSA9PiA1N2U5MjBhMmIzNDUxODIwM2ZkNWYzMTlcbiApXG5cbiBbYm9hcmRdID0+IEFycmF5XG4gKFxuIFtzaG9ydExpbmtdID0+IGk5ZVhFNHlKXG4gW25hbWVdID0+IFByb2plY3QgMSBUZWFtOiBBcmJvXG4gW2lkXSA9PiA1N2U5MjA0YWMzZjMyM2YxNzg1ZDdiZTRcbiApXG5cbiBbY2FyZF0gPT4gQXJyYXlcbiAoXG4gW3Nob3J0TGlua10gPT4gRmdndmQ0blhcbiBbaWRTaG9ydF0gPT4gMjFcbiBbbmFtZV0gPT4gVmlzdWFsIFBhcmFkaWdtIENsYXNzIERlc2lnblxuIFtpZF0gPT4gNTdlZWMwNzc2ZmQwMDVmN2I4MWM4MjM5XG4gKVxuXG4gW3RleHRdID0+IFZpc3VhbCBQYXJhZGlnbSBDbGFzcyBEZXNpZ25cbiApXG5cbiBbdHlwZV0gPT4gY29tbWVudENhcmRcbiBbZGF0ZV0gPT4gMjAxNi0wOS0zMFQxOTo0OTozMC45NzRaXG4gW21lbWJlckNyZWF0b3JdID0+IEFycmF5XG4gKFxuIFtpZF0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXG4gW2F2YXRhckhhc2hdID0+XG4gW2Z1bGxOYW1lXSA9PiBCcml0dGFueSBHYWxsaWVyc1xuIFtpbml0aWFsc10gPT4gQkdcbiBbdXNlcm5hbWVdID0+IGJyaXR0YW55Z2FsbGllcnMxXG4gKVxuICogQHBhcmFtIGJvYXJkXG4gKiBAcGFyYW0gY2FyZFxuICogQHBhcmFtIGRhdGFcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgQ29tbWVudCA9IGZ1bmN0aW9uKGJvYXJkLCBjYXJkLCBkYXRhKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMuY2FyZCA9IGNhcmQ7XG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcbiAgICB0aGlzLnRleHQgPSAnPHA+JyArXG4gICAgICAgIFV0aWwuc3RyaXBfdGFncyhkYXRhLmRhdGEudGV4dCkucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xuICAgICAgICAnPC9wPic7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XG59IiwiLypcbiAqIEJhc2Ugb2JqZWN0IGZvciB2aWV3cyBvZiBUcmVsbG8gZGF0YS5cbiAqL1xuXG5leHBvcnQgY29uc3QgRGF0YVZpZXcgPSBmdW5jdGlvbigpIHtcblxufVxuXG5EYXRhVmlldy5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHt9XG5cblxuIiwiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XG5cbmV4cG9ydCBjb25zdCBEaXNjb25uZWN0ZWRWaWV3ID0gZnVuY3Rpb24oZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKSB7XG5cdC8vIEVuc3VyZSBlbXB0eVxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuXHRVdGlsLmFkZENsYXNzKGRpdiwgJ3RyZWxsby1zcHJpbnRlcicpO1xuXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkaXYuYXBwZW5kQ2hpbGQocCk7XG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xuXG5cdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgdG8gVHJlbGxvJztcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0cmVsbG8uYXV0aG9yaXplKCk7XG5cdH0pXG59IiwiLyoqXG4gKiBAZmlsZVxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbGlzdCBpbiBhIGJvYXJkXG4gKi9cblxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xuXG5leHBvcnQgY29uc3QgTGlzdCA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY2FyZHMgPSBbXTtcblxuICAgIHRoaXMuY2FyZHNfYnlfaWQgPSB7fTtcbn1cblxuTGlzdC5wcm90b3R5cGUuYWRkX2NhcmQgPSBmdW5jdGlvbihjYXJkKSB7XG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xuICAgIHRoaXMuY2FyZHNfYnlfaWRbY2FyZC5pZF0gPSBjYXJkO1xufVxuXG5MaXN0LnByb3RvdHlwZS5maW5kX2NhcmQgPSBmdW5jdGlvbihpZCkge1xuICAgIGlmKHRoaXMuY2FyZHNfYnlfaWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzX2J5X2lkW2lkXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuTGlzdC5wcm90b3R5cGUuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBDYXJkLmNvdW50X21lbWJlcnModGhpcy5ib2FyZCwgdGhpcy5jYXJkcyk7XG59XG5cbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9Cb2FyZCc7XG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSAnLi9Cb2FyZFZpZXcnO1xuaW1wb3J0IHtTcHJpbnRWaWV3fSBmcm9tIFwiLi9TcHJpbnRzL1NwcmludFZpZXdcIjtcbmltcG9ydCB7U3ByaW50VGFibGVWaWV3fSBmcm9tICcuL1NwcmludHMvU3ByaW50VGFibGVWaWV3JztcbmltcG9ydCB7RGlzY29ubmVjdGVkVmlld30gZnJvbSBcIi4vRGlzY29ubmVjdGVkVmlld1wiO1xuXG5leHBvcnQgY29uc3QgTWFpblZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcblx0Ly8gRW5zdXJlIGVtcHR5XG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XG5cblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcblx0VXRpbC5hZGRDbGFzcyhwLCAnY2VudGVyJyk7XG5cblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnRGlzY29ubmVjdCc7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dHJlbGxvLmRpc2Nvbm5lY3QoKTtcblxuXHRcdG5ldyBEaXNjb25uZWN0ZWRWaWV3KGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucyk7XG5cdH0pXG5cblxuXHRsZXQgcFN0YXR1cyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tc3RhdHVzJyk7XG5cdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcgdG8gVHJlbGxvLi4uJztcblx0ZGl2LmFwcGVuZENoaWxkKHBTdGF0dXMpO1xuXG5cdGxldCBwTXNnID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1tc2cnKTtcblx0ZGl2LmFwcGVuZENoaWxkKHBNc2cpO1xuXG5cdEJvYXJkLmZldGNoKHRyZWxsbywgb3B0aW9ucy5ib2FyZCwgb3B0aW9ucywgcE1zZywgKGJvYXJkKSA9PiB7XG5cdFx0Ly8gU3VjY2Vzc1xuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ1RyZWxsbyBCb2FyZDogJyArIGJvYXJkLm5hbWU7XG5cdFx0cE1zZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBNc2cpO1xuXG5cdFx0Zm9yKGxldCB2aWV3IGluIG9wdGlvbnMudmlld3MpIHtcblx0XHRcdHN3aXRjaCh2aWV3KSB7XG5cdFx0XHRcdGNhc2UgJ2JvYXJkJzpcblx0XHRcdFx0XHRsZXQgYm9hcmRWaWV3ID0gbmV3IEJvYXJkVmlldyhkaXYsIGJvYXJkKTtcblx0XHRcdFx0XHRib2FyZFZpZXcucHJlc2VudCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3NwcmludCc6XG5cdFx0XHRcdFx0bGV0IHNwcmludFZpZXcgPSBuZXcgU3ByaW50VmlldyhkaXYsIGJvYXJkLCBvcHRpb25zLnZpZXdzLnNwcmludCk7XG5cdFx0XHRcdFx0c3ByaW50Vmlldy5wcmVzZW50KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnc3ByaW50VGFibGUnOlxuXHRcdFx0XHRcdGxldCBzcHJpbnRUYWJsZVZpZXcgPSBuZXcgU3ByaW50VGFibGVWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50VGFibGUpO1xuXHRcdFx0XHRcdHNwcmludFRhYmxlVmlldy5wcmVzZW50KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCAobXNnKSA9PiB7XG5cdFx0Ly8gRmFpbHVyZVxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcblx0XHRwU3RhdHVzLmlubmVyVGV4dCA9IG1zZztcblx0fSk7XG5cblx0Ly90cmVsbG8uZmV0Y2goKTtcblxufSIsIi8qXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBtZW1iZXIgaW4gYSBib2FyZFxuICovXG5cbmV4cG9ydCBjb25zdCBNZW1iZXIgPSBmdW5jdGlvbihib2FyZCwgZGF0YSkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG59IiwiLypcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgc3ByaW50IGluIHRoZSBzcHJpbnRzIGFuYWx5c2lzXG4gKi9cblxuZXhwb3J0IGNvbnN0IFNwcmludCA9IGZ1bmN0aW9uKHNwcmludHMsIHN0YXJ0LCBlbmQpIHtcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xuICAgIHRoaXMuc3RhcnRfbWVldGluZyA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kX21lZXRpbmcgPSBlbmQ7XG5cbiAgICB0aGlzLmNvbXBsZXRlZCA9IFtdO1xufVxuXG5TcHJpbnQucHJvdG90eXBlLmVuZF90aW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZW5kX21lZXRpbmcuY3JlYXRlZC5nZXRUaW1lKCkgK1xuICAgICAgICAodGhpcy5zcHJpbnRzLnNwcmludF90aW1lX3Nsb3AgKiAxMDAwKSk7XG59IiwiLyoqXG4gKiBAZmlsZVxuICogVGVhbSBtZW1iZXIgc3RhdGlzdGljcyBmb3IgYSBzcHJpbnRcbiAqL1xuXG5leHBvcnQgY29uc3QgU3ByaW50TWVtYmVyID0gZnVuY3Rpb24oc3ByaW50cywgbWVtYmVyKSB7XG4gICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcblxuICAgIHRoaXMubWVldGluZ3NfY291bnQgPSAwO1xuICAgIHRoaXMubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xuICAgIFxuICAgIHRoaXMuY29tcGxldGVkX2NvdW50ID0gMDtcbiAgICB0aGlzLmNvbXBsZXRlZF90b3RhbCA9IDA7XG4gICAgXG4gICAgdGhpcy5yZXZpZXdzX2NvdW50ID0gMDtcbiAgICB0aGlzLnJldmlld3NfdG90YWwgPSAwO1xufVxuXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLm1lZXRpbmdzX3BlcmNlbnRhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLm1lZXRpbmdzX2NvdW50IDw9IHRoaXMuc3ByaW50cy5tZWV0aW5nc19zbG9wKSB7XG4gICAgICAgIHJldHVybiAnKGluc3VmZmljaWVudCBtZWV0aW5ncyknO1xuICAgIH1cblxuICAgIHZhciBwZXIgPSB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkIC8gKHRoaXMubWVldGluZ3NfY291bnQgLSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCk7XG4gICAgaWYocGVyID4gMSkge1xuICAgICAgICBwZXIgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBwZXIudG9GaXhlZCgyKTtcbn1cblxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5jb21wbGV0ZWRfZmFjdG9yID0gZnVuY3Rpb24odGVhbVNpemUpIHtcbiAgICBpZih0aGlzLmNvbXBsZXRlZF90b3RhbCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgZmFjdG9yID0gdGhpcy5jb21wbGV0ZWRfY291bnQgL1xuICAgICAgICAodGhpcy5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSAqIHRoaXMuc3ByaW50cy5jb21wbGV0ZWRfZmFjdG9yKTtcbiAgICBpZihmYWN0b3IgPiAxKSB7XG4gICAgICAgIGZhY3RvciA9IDE7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWN0b3IudG9GaXhlZCgyKTtcbn1cblxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5yZXZpZXdpbmdfZmFjdG9yID0gZnVuY3Rpb24odGVhbVNpemUpIHtcbiAgICBpZih0aGlzLnJldmlld3NfdG90YWwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGZhY3RvciA9IHRoaXMucmV2aWV3c19jb3VudCAvXG4gICAgICAgICh0aGlzLnJldmlld3NfdG90YWwgLyB0ZWFtU2l6ZSAqIHRoaXMuc3ByaW50cy5yZXZpZXdpbmdfZmFjdG9yKTtcbiAgICBpZihmYWN0b3IgPiAxKSB7XG4gICAgICAgIGZhY3RvciA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xufSIsIi8qXG4gKiBUcmVsbG8gYm9hcmQgdmlldyB0aGF0IGRpc3BsYXlzIHNwcmludCByZXN1bHQgaW4gYSB0YWJsZS5cbiAqL1xuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xuaW1wb3J0IHtTcHJpbnRzfSBmcm9tICcuL1NwcmludHMnO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tIFwiLi4vQm9hcmRWaWV3XCI7XG5cbmV4cG9ydCBjb25zdCBTcHJpbnRUYWJsZVZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkLCBvcHRpb25zKSB7XG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcblxuICAgIGxldCBhZGRIZWFkaW5ncyA9IHRydWU7XG4gICAgaWYob3B0aW9ucy5hZGRIZWFkaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFkZEhlYWRpbmdzID0gb3B0aW9ucy5hZGRIZWFkaW5ncztcbiAgICB9XG5cbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1zcHJpbnQtdGFibGUnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xuXG5cdCAgICBjb25zdCB0YWJsZSA9IFV0aWwuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gICAgICAgIGlmKG9wdGlvbnMuY2xhc3MgIT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgIFV0aWwuYWRkQ2xhc3ModGFibGUsIG9wdGlvbnMuY2xhc3MpO1xuICAgICAgICB9XG5cblx0ICAgIC8vXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xuXHQgICAgLy9cblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XG5cdCAgICBjb25zdCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcblxuXHQgICAgaWYoYWRkSGVhZGluZ3MpIHtcblx0XHQgICAgdGFibGVIZWFkaW5nKHRhYmxlLCBib2FyZCwgc3ByaW50cyk7XG5cdCAgICB9XG5cblx0ICAgIHZhciByb3dIVE1MID0gJyc7XG5cdCAgICBmdW5jdGlvbiBpdGVtKGRhdGEpIHtcblx0XHQgICAgcm93SFRNTCArPSAnPHRkPicgKyBkYXRhICsgJzwvdGQ+Jztcblx0ICAgIH1cblxuXHQgICAgZm9yKHZhciBpZCBpbiBzcHJpbnRzLm1lbWJlcnMpIHtcblx0XHQgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xuXHRcdFx0ICAgIHZhciBtZW1iZXIgPSBzcHJpbnRzLm1lbWJlcnNbaWRdO1xuXHRcdFx0ICAgIHZhciBpZCA9IG1lbWJlci5tZW1iZXIuaWQ7XG5cblx0XHRcdCAgICByb3dIVE1MID0gJyc7XG5cblx0XHRcdCAgICAvLyBPdXIgc3RhdGlzdGljc1xuXHRcdFx0ICAgIGl0ZW0oYm9hcmQubmFtZSk7XG5cdFx0XHQgICAgaXRlbSh0ZWFtU2l6ZSk7XG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVtYmVyLm5hbWUpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkKTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19jb3VudCk7XG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpKTtcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfY291bnQpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF90b3RhbCk7XG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld3NfY291bnQpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld3NfdG90YWwpO1xuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpKTtcblx0XHRcdCAgICBpdGVtKHNwcmludHMuc3ByaW50cy5sZW5ndGgpO1xuXG5cdFx0XHQgICAgc3ByaW50cy5zcHJpbnRzLmZvckVhY2goZnVuY3Rpb24oc3ByaW50KSB7XG5cdFx0XHRcdCAgICB2YXIgY250ID0gMDtcblx0XHRcdFx0ICAgIHNwcmludC5jb21wbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XG5cdFx0XHRcdFx0ICAgIGlmKGNhcmQubWVtYmVycy5sZW5ndGggPT0gMSAmJiBjYXJkLm1lbWJlcnNbMF0gPT0gaWQpIHtcblx0XHRcdFx0XHRcdCAgICBjbnQrKztcblx0XHRcdFx0XHQgICAgfVxuXHRcdFx0XHQgICAgfSk7XG5cblx0XHRcdFx0ICAgIGl0ZW0oY250KTtcblx0XHRcdFx0ICAgIGl0ZW0oc3ByaW50LmNvbXBsZXRlZC5sZW5ndGgpO1xuXHRcdFx0ICAgIH0pO1xuXG5cdFx0XHQgICAgaWYoIWlzTmFOKGFkZEhlYWRpbmdzKSkge1xuXHRcdFx0XHQgICAgZm9yKHZhciBpPXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGk8YWRkSGVhZGluZ3M7IGkrKykge1xuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xuXHRcdFx0XHQgICAgfVxuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXHRcdFx0ICAgIHRyLmlubmVySFRNTCA9IHJvd0hUTUw7XG5cdFx0XHQgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xuXHRcdCAgICB9XG5cdCAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGVIZWFkaW5nID0gZnVuY3Rpb24odGFibGUsIGJvYXJkLCBzcHJpbnRzKSB7XG4gICAgICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XG5cbiAgICAgICAgaWYob3B0aW9ucy50cjFjbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBVdGlsLmFkZENsYXNzKHRyLCBvcHRpb25zLnRyMWNsYXNzKTtcbiAgICAgICAgfVxuXG5cdCAgICB2YXIgcm93SFRNTCA9ICcnO1xuXHQgICAgZnVuY3Rpb24gaXRlbShkYXRhKSB7XG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0aD48ZGl2PicgKyBkYXRhICsgJzwvZGl2PjwvdGg+Jztcblx0ICAgIH1cblxuXHQgICAgaXRlbShcIlRlYW1cIik7XG5cdCAgICBpdGVtKFwiI1wiKTtcblx0ICAgIGl0ZW0oXCJNZW1iZXJcIik7XG5cdCAgICBpdGVtKFwiQXR0ZW5kZWRcIik7XG5cdCAgICBpdGVtKFwiVG90YWxcIik7XG5cdCAgICBpdGVtKFwiJVwiKTtcblx0ICAgIGl0ZW0oXCJDb21wbGV0ZWRcIik7XG5cdCAgICBpdGVtKFwiVG90YWxcIik7XG5cdCAgICBpdGVtKFwiJVwiKTtcblx0ICAgIGl0ZW0oXCJSZXZpZXdzXCIpO1xuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xuXHQgICAgaXRlbShcIiVcIik7XG5cdCAgICBpdGVtKFwiU3ByaW50c1wiKTtcblxuXHQgICAgaWYoYWRkSGVhZGluZ3MgPT09IHRydWUpIHtcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0ICAgIGl0ZW0oaSk7XG5cdFx0XHQgICAgaXRlbShcIiNcIik7XG5cdFx0ICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdFx0ICAgIGZvcih2YXIgaT0xOyBpPD1hZGRIZWFkaW5nczsgaSsrKSB7XG5cdFx0XHQgICAgaXRlbShpKTtcblx0XHRcdCAgICBpdGVtKFwiI1wiKTtcblx0XHQgICAgfVxuXHQgICAgfVxuXG4gICAgICAgIHRyLmlubmVySFRNTCA9IHJvd0hUTUw7XG4gICAgfVxufVxuXG4vLy8gQGNvbmRcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaW50VGFibGVWaWV3O1xuLy8vIEBlbmRjb25kXG5cblxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS50YWJsZV9oZWFkaW5ncyA9IGZ1bmN0aW9uKGJvYXJkLCBzcHJpbnRzKSB7XG5cbn1cblxuIiwiLyoqXG4gKiBAZmlsZVxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0c1xuICovXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL1V0aWwnO1xuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcblxuZXhwb3J0IGNvbnN0IFNwcmludFZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7XG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcblxuICAgIC8vIFRoaXMgdXNlcyBCb2FyZFZpZXcgdG8gZHJhdyB3aGF0IGl0IGtub3dzIGhvdyB0byBkcmF3XG4gICAgY29uc3QgYm9hcmRfdmlldyA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XG5cbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcblx0ICAgIC8vXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xuXHQgICAgLy9cblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XG5cblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1zcHJpbnRzJyk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xuXG5cdCAgICBsZXQgaDIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cdCAgICBoMi5pbm5lclRleHQgPSAnU3ByaW50cyBBbmFseXNpcyc7XG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKGgyKTtcblxuXHRcdHByZXNlbnRfZXJyb3JzKHZpZXcsIHNwcmludHMpO1xuXHRcdHByZXNlbnRfd2FybmluZ3Modmlldywgc3ByaW50cyk7XG5cblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHByZXNlbnRfc3ByaW50cyh2aWV3LCBzcHJpbnRzKTtcblx0XHRwcmVzZW50X21lbWJlcnModmlldywgc3ByaW50cyk7XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRfZXJyb3JzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIGxldCBlcnJvcnMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXJyb3JzJyk7XG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXJyb3JzKTtcblxuXHQgICAgZXJyb3JzLmlubmVySFRNTCA9ICc8aDM+RXJyb3JzPC9oMz4nO1xuXG5cdCAgICBmb3IobGV0IGVycm9yIG9mIHNwcmludHMuZXJyb3JzKSB7XG5cdCAgICBcdGxldCBwID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdCAgICBcdGVycm9ycy5hcHBlbmRDaGlsZChwKTtcblx0ICAgIFx0cC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyBlcnJvci5jb2RlICsgJzo8L3NwYW4+ICcgKyBlcnJvci5tc2c7XG5cdCAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRfd2FybmluZ3MgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcbiAgICBcdGlmKHNwcmludHMud2FybmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgXHRcdHJldHVybjtcbiAgICBcdH1cblxuXHQgICAgbGV0IHdhcm5pbmdzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXdhcm5pbmdzJyk7XG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQod2FybmluZ3MpO1xuXG5cdCAgICB3YXJuaW5ncy5pbm5lckhUTUwgPSAnPGgzPldhcm5pbmdzPC9oMz4nO1xuXG5cdCAgICBmb3IobGV0IHdhcm5pbmcgb2Ygc3ByaW50cy53YXJuaW5ncykge1xuXHRcdCAgICBsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdCAgICB3YXJuaW5ncy5hcHBlbmRDaGlsZChwKTtcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyB3YXJuaW5nLmNvZGUgKyAnOjwvc3Bhbj4gJyArIHdhcm5pbmcubXNnO1xuXHQgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmVzZW50X3NwcmludHMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xuXG5cdCAgICBmb3IodmFyIHM9MTsgczw9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgcysrKSB7XG5cdCAgICAgICAgdmFyIHNwcmludCA9IHNwcmludHMuc3ByaW50c1tzLTFdO1xuXHQgICAgICAgIHByZXNlbnRfc3ByaW50KHZpZXcsIHNwcmludHMsIHMsIHNwcmludCk7XG5cdCAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRfc3ByaW50ID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzLCBudW0sIHNwcmludCkge1xuXHQgICAgY29uc3QgZm1EYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShzcHJpbnQuc3RhcnRfbWVldGluZy5jcmVhdGVkKTtcblx0ICAgIGNvbnN0IHRvRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LmVuZF9tZWV0aW5nLmNyZWF0ZWQpO1xuXHQgICAgY29uc3QgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XG5cblx0ICAgIC8vXG5cdCAgICAvLyBNZW1iZXIgY291bnRzIGZvciBjb21wbGV0ZWRcblx0ICAgIC8vXG4gICAgICAgIGNvbnN0IGNvdW50cyA9IENhcmQuY291bnRfbWVtYmVycyhzcHJpbnRzLmJvYXJkLCBzcHJpbnQuY29tcGxldGVkKTtcblxuXHQgICAgbGV0IHRvdGFsQ29tcGxldGVkID0gMDtcblx0ICAgIGZvcihsZXQgc3ByaW50IG9mIHNwcmludHMuc3ByaW50cykge1xuXHRcdCAgICB0b3RhbENvbXBsZXRlZCArPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcblx0ICAgIH1cblxuXG5cdCAgICBsZXQgY29tcGxldGlvbkZhY3RvciA9IDAuMDA7XG5cdCAgICBpZih0b3RhbENvbXBsZXRlZCA+IDApIHtcblx0ICAgICAgICBjb21wbGV0aW9uRmFjdG9yID0gY29tcGxldGVkIC8gKHRvdGFsQ29tcGxldGVkIC8gc3ByaW50cy5zcHJpbnRzLmxlbmd0aCAqIDAuOCk7XG5cdCAgICAgICAgaWYoY29tcGxldGlvbkZhY3RvciA+IDEpIHtcblx0ICAgICAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IDE7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBjb21wbGV0aW9uRmFjdG9yID0gY29tcGxldGlvbkZhY3Rvci50b0ZpeGVkKDIpO1xuXG5cdCAgICBjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblx0ICAgIGhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGNvbXBsZXRlZCArXG4gICAgICAgICAnIHRhc2tzICcgKyBjb21wbGV0aW9uRmFjdG9yICsgJyAvICcgKyBmbURhdGUgKyAnIHRvICcgKyB0b0RhdGUgK1xuICAgICAgICAgJzwvc3Bhbj5TcHJpbnQ6ICcgKyBudW07XG5cblx0ICAgIGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xuXHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChleHBhbmRlcik7XG5cblx0ICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdCAgICBpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcblx0XHQgICAgfSBlbHNlIHtcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xuXHRcdCAgICB9XG5cdCAgICB9KTtcblxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuc3RhcnRfbWVldGluZyk7XG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5lbmRfbWVldGluZyk7XG5cblx0ICAgIC8vXG5cdCAgICAvLyBDb21wbGV0ZWRcblx0ICAgIC8vXG5cdCAgICBsZXQgcENvbXBsZXRlZCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY29tcGxldGVkLWhlYWRlcicpO1xuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocENvbXBsZXRlZCk7XG5cdCAgICBwQ29tcGxldGVkLmlubmVyVGV4dCA9ICdTcHJpbnQgQ29tcGxldGVkIFRhc2tzJztcblxuXHQgICAgbGV0IHBNZW1iZXJzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb3VudCcpO1xuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocE1lbWJlcnMpO1xuXG5cdCAgICBsZXQgbWVtYmVycyA9ICc8ZW0+Q29tcGxldGVkOjwvZW0+WycgKyBzcHJpbnQuY29tcGxldGVkLmxlbmd0aCArICddICc7XG5cdCAgICBmb3IodmFyIGMgaW4gY291bnRzKSB7XG5cdCAgICAgICAgaWYoY291bnRzLmhhc093blByb3BlcnR5KGMpKSB7XG5cdCAgICAgICAgICAgIG1lbWJlcnMgKz0gY291bnRzW2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50c1tjXS5jbnQgKyAnXSZuYnNwOyZuYnNwOyc7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBwTWVtYmVycy5pbm5lckhUTUwgPSBtZW1iZXJzO1xuXG5cdCAgICAvL1xuXHQgICAgLy8gUHJlc2VudCBjb21wbGV0ZWQgY2FyZHNcblx0ICAgIC8vXG5cdCAgICBmb3IobGV0IGk9MDsgaTxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbaV07XG5cdCAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgY29tcGxldGVkKTtcblx0ICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJlc2VudF9tZW1iZXJzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XG4gICAgXHRsZXQgbWVtYmVyc0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXJzJyk7XG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyc0Rpdik7XG5cblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XG5cdCAgICAgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xuXHQgICAgICAgICAgICB2YXIgbWVtYmVyID0gc3ByaW50cy5tZW1iZXJzW2lkXTtcblx0ICAgICAgICAgICAgcHJlc2VudF9tZW1iZXIobWVtYmVyc0Rpdiwgc3ByaW50cywgbWVtYmVyKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cblx0XHRwcmVzZW50X2luZm8obWVtYmVyc0Rpdiwgc3ByaW50cyk7XG4gICAgfVxuXG4gICAgbGV0IHByZXNlbnRfbWVtYmVyID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzLCBtZW1iZXIpIHtcbiAgICBcdGxldCBtZW1iZXJEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tbWVtYmVyJyk7XG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyRGl2KTtcblxuXHQgICAgbGV0IG1lZXRpbmdzID0gc3ByaW50cy5tZWV0aW5nc19zbG9wID09PSAxID8gJyBtZWV0aW5nJyA6ICcgbWVldGluZ3MnO1xuXHQgICAgbGV0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xuXG5cdCAgICBtZW1iZXJEaXYuaW5uZXJIVE1MID0gJzxoND4nICsgbWVtYmVyLm1lbWJlci5uYW1lICsgJzwvaDQ+JyArXG5cblx0ICAgICAgICAnPHA+TWVldGluZ3MgYXR0ZW5kZWQ6ICcgKyBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgKyAnLycgKyBtZW1iZXIubWVldGluZ3NfY291bnQgK1xuXHQgICAgICAgICcgcGVyY2VudGFnZTogJyArIG1lbWJlci5tZWV0aW5nc19wZXJjZW50YWdlKCkgK1xuXHQgICAgICAgICcgPGVtPllvdSBhcmUgYWxsb3dlZCB0byBtaXNzICcgKyBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgKyBtZWV0aW5ncyArICAnPC9lbT4nICtcblx0ICAgICAgICAnPC9wPicgK1xuXG5cdCAgICAgICAgJzxwPlRhc2tzIGNvbXBsZXRlZDogJyArIG1lbWJlci5jb21wbGV0ZWRfY291bnQgK1xuXHQgICAgICAgICcvJyArIChtZW1iZXIuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUpLnRvRml4ZWQoMikgKyAnIGZvciBhIGNvbXBsZXRpb24gZmFjdG9yIG9mOiAnICtcblx0ICAgICAgICBtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPicgK1xuXG5cdCAgICAgICAgJzxwPlJldmlld3MgY29tcGxldGVkOiAnICsgbWVtYmVyLnJldmlld3NfY291bnQgKyAnIGZvciBhIHJldmlld2luZyBmYWN0b3Igb2Y6ICcgK1xuXHQgICAgICAgIG1lbWJlci5yZXZpZXdpbmdfZmFjdG9yKHRlYW1TaXplKSArICc8L3A+JztcbiAgICB9XG5cbiAgICBsZXQgcHJlc2VudF9pbmZvID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XG4gICAgXHRjb25zdCBpbmZvRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWluZm8nKTtcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcblxuICAgIFx0aW5mb0Rpdi5pbm5lckhUTUwgPSAnPHA+VGhlIGNvbXBsZXRpb24gZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5JyArXG5cdFx0ICAgICcgdGVhbSBtZW1iZXIgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgJyArIChzcHJpbnRzLmNvbXBsZXRlZF9mYWN0b3IgKiAxMDApLnRvRml4ZWQoMCkgKyAnJSBvZicgK1xuXHRcdCAgICAnIGFuIGVxdWFsIGRpc3RyaWJ1dGlvbiBvZiB0YXNrcy4gVmFsdWVzIGxlc3MgdGhhbiAxLjAwIGluZGljYXRlIHRoYXQgeW91IHdpbGwgYmUnICtcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nICtcblx0XHQgICAgJzxwPlRoZSByZXZpZXdpbmcgZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5IHRlYW0gbWVtYmVyJyArXG5cdFx0ICAgICcgaXMgZXhwZWN0ZWQgdG8gcmV2aWV3ICcgKyAoc3ByaW50cy5yZXZpZXdpbmdfZmFjdG9yICogMTAwKS50b0ZpeGVkKDApICsgJyUgb2YgYW4gZXF1YWwnICtcblx0XHQgICAgJyBkaXN0cmlidXRpb24gb2YgdGFza3MuIFRoaXMgZmFjdG9yIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgOTAlIG9mIHRhc2tzIHNob3VsZCcgK1xuXHRcdCAgICAnIGJlIHByb2dyYW1taW5nIHRhc2tzLiBWYWx1ZXMgbGVzcyB0aGFuIDEuMDAgaW5kaWNhdGUgdGhhdCB5b3Ugd2lsbCBiZScgK1xuXHRcdCAgICAnIGxvc2luZyBwb2ludHMgb24gdGhlIGFzc2lnbm1lbnQuPC9wPidcbiAgICB9XG59XG5cbi8vLyBAY29uZFxuU3ByaW50Vmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XG5TcHJpbnRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFZpZXc7XG4vLy8gQGVuZGNvbmRcbiIsIi8qXG4gKiBTcHJpbnQgYW5hbHlzaXMgb2YgVHJlbGxvIGJvYXJkXG4gKi9cblxuaW1wb3J0IHtTcHJpbnR9IGZyb20gXCIuL1NwcmludFwiO1xuaW1wb3J0IHtTcHJpbnRNZW1iZXJ9IGZyb20gXCIuL1NwcmludE1lbWJlclwiO1xuXG5leHBvcnQgY29uc3QgU3ByaW50cyA9IGZ1bmN0aW9uKGJvYXJkKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgLy8vIE51bWJlciBvZiBtaXNzZWQgbWVldGluZ3MgYWxsb3dcbiAgICB0aGlzLm1lZXRpbmdzX3Nsb3AgPSAxO1xuXG5cbiAgICAvLy8gTnVtYmVyIG9mIHNlY29uZHMgYWZ0ZXIgbWVldGluZyB0aW1lIHRvIGNvbnNpZGVyIGNvbXBsZXRlZFxuICAgIC8vLyBpbiBhIGN1cnJlbnQgc3ByaW50IGluIHNlY29uZHMuXG4gICAgdGhpcy5zcHJpbnRfdGltZV9zbG9wID0gNSAqIDYwICogNjA7ICAgLy8gNSBob3Vyc1xuICAgIFxuICAgIC8vLyBFYWNoIHVzZXJzIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlIDgwJSBvZiBoaXMgc2hhcmUgb2YgdGFza3NcbiAgICB0aGlzLmNvbXBsZXRlZF9mYWN0b3IgPSAwLjg7XG4gICAgXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIDkwJSBvZiB0aGUgdGFzayBjb3VudCBpbiByZXZpZXdzXG4gICAgdGhpcy5yZXZpZXdpbmdfZmFjdG9yID0gMC44ICogMC45O1xuXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB0aGlzLndhcm5pbmdzID0gW107XG5cbiAgICB0aGlzLm1lbWJlcnMgPSB7fTtcbiAgICB0aGlzLnNwcmludHMgPSBbXTtcblxuICAgIHRoaXMuZGVzaWduID0gbnVsbDtcbiAgICB0aGlzLnJpc2tzID0gbnVsbDtcbiAgICB0aGlzLm1lZXRpbmdzID0gbnVsbDtcbiAgICB0aGlzLnRvZG8gPSBudWxsO1xuICAgIHRoaXMuc3ByaW50X2FjdGl2ZSA9IG51bGw7XG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gbnVsbDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IG51bGw7XG5cbiAgICAvL1xuICAgIC8vIENvcHkgb3ZlciB0aGUgbWVtYmVyc1xuICAgIC8vXG4gICAgZm9yKHZhciBpZCBpbiBib2FyZC5tZW1iZXJzKSB7XG4gICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcbiAgICAgICAgaWYobWVtYmVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJjc2UzMzVcIikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdID0gbmV3IFNwcmludE1lbWJlcih0aGlzLCBtZW1iZXIpO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gRmluZCBhbGwgb2YgdGhlIHJlcXVpcmVkIGxpc3RzXG4gICAgLy9cbiAgICB0aGlzLmZpbmRfbGlzdHMoKTtcblxuICAgIGlmKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTkwMCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBPcmRlciB0ZXN0aW5nXG4gICAgLy9cbiAgICB0aGlzLm9yZGVyX3Rlc3QoKTtcblxuICAgIC8vXG4gICAgLy8gRGV0ZXJtaW5lIGF0dGVuZGFuY2VcbiAgICAvL1xuICAgIHRoaXMubWVldGluZ19hdHRlbmRhbmNlKCk7XG5cbiAgICAvL1xuICAgIC8vIENvbnZlcnQgbWVldGluZ3MgaW50byBzcHJpbnRzXG4gICAgLy9cbiAgICB0aGlzLmNyZWF0ZV9zcHJpbnRzKCk7XG5cbiAgICAvL1xuICAgIC8vIFNvcnQgY29tcGxldGVkIGludG8gc3ByaW50c1xuICAgIC8vXG4gICAgdGhpcy5zb3J0X2NvbXBsZXRlZCgpO1xuXG4gICAgLy9cbiAgICAvLyBDb21wbGV0ZWQgc3RhdGlzdGljc1xuICAgIC8vXG4gICAgdGhpcy5jb21wbGV0ZWRfc3RhdGlzdGljcygpO1xufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcmVxdWlyZWQgbGlzdHMgZXhpc3QuXG4gKi9cblNwcmludHMucHJvdG90eXBlLmZpbmRfbGlzdHMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBGaW5kIHRoZSBcIkRlc2lnblwiIGxpc3RcbiAgICB0aGlzLmRlc2lnbiA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdEZXNpZ24nKTtcbiAgICBpZih0aGlzLmRlc2lnbiA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVycm9yKCdlMDAxJyk7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgXCJSaXNrc1wiIGxpc3RcbiAgICB0aGlzLnJpc2tzID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1Jpc2tzJyk7XG4gICAgaWYodGhpcy5yaXNrcyA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVycm9yKCdlMDAyJyk7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgXCJNZWV0aW5nc1wiIGxpc3RcbiAgICB0aGlzLm1lZXRpbmdzID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ01lZXRpbmdzJyk7XG4gICAgaWYodGhpcy5tZWV0aW5ncyA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVycm9yKCdlMDAzJyk7XG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgXCJUbyBEb1wiIGxpc3RcbiAgICB0aGlzLnRvZG8gPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVG8gRG8nKTtcbiAgICBpZih0aGlzLnRvZG8gPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNCcpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQWN0aXZlXCIgbGlzdFxuICAgIHRoaXMuc3ByaW50X2FjdGl2ZSA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUaGlzIFNwcmludCBBY3RpdmUnKTtcbiAgICBpZih0aGlzLnNwcmludF9hY3RpdmUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNScpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQ29tcGxldGVkXCIgbGlzdFxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUaGlzIFNwcmludCBDb21wbGV0ZWQnKTtcbiAgICBpZih0aGlzLnNwcmludF9jb21wbGV0ZWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNicpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgdGhlIFwiQ29tcGxldGVkXCIgbGlzdFxuICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0NvbXBsZXRlZCcpO1xuICAgIGlmKHRoaXMuY29tcGxldGVkID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDcnKTtcbiAgICB9XG59XG5cbi8qKlxuICogRW5zdXJlIGxpc3RzIGFyZSBpbiB0aGUgcmlnaHQgb3JkZXJcbiAqL1xuU3ByaW50cy5wcm90b3R5cGUub3JkZXJfdGVzdCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5ib2FyZC5vcHRpb25zLmNhcmRzO1xuXG4gICAgZm9yKHZhciBpPTA7IGk8b3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGhpcy5ib2FyZC5saXN0c1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IG9yZGVyW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMud2FybmluZygndzAwMScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENvdW50IG1lZXRpbmcgYXR0ZW5kYW5jZSBmb3IgYSB1c2VyXG4gKi9cblNwcmludHMucHJvdG90eXBlLm1lZXRpbmdfYXR0ZW5kYW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBtZWV0aW5nc19jb3VudCA9IHRoaXMubWVldGluZ3MuY2FyZHMubGVuZ3RoO1xuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XG4gICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLm1lbWJlcnNbaWRdO1xuICAgICAgICBtZW1iZXIubWVldGluZ3NfY291bnQgPSBtZWV0aW5nc19jb3VudDtcbiAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLm1lZXRpbmdzLmNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xuICAgICAgICBjYXJkLm1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoYXQuZmluZF9tZW1iZXIoaWQpO1xuICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59XG5cblNwcmludHMucHJvdG90eXBlLmNyZWF0ZV9zcHJpbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG1lZXRpbmdzID0gdGhpcy5tZWV0aW5ncy5jYXJkcy5zbGljZSgpO1xuXG4gICAgbWVldGluZ3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIGlmKGEuY3JlYXRlZCA8IGIuY3JlYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2UgaWYoYS5jcmVhdGVkID09PSBiLmNyZWF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvcih2YXIgaT0wOyBpPChtZWV0aW5ncy5sZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuc3ByaW50cy5wdXNoKG5ldyBTcHJpbnQodGhpcywgbWVldGluZ3NbaV0sIG1lZXRpbmdzW2krMV0pKTtcbiAgICB9XG59XG5cblNwcmludHMucHJvdG90eXBlLnNvcnRfY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmNhcmRzLnNsaWNlKCk7XG4gICAgY29tcGxldGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICB2YXIgYXQgPSBhLmZpbmFsX3RpbWUoKTtcbiAgICAgICAgdmFyIGJ0ID0gYi5maW5hbF90aW1lKCk7XG4gICAgICAgIGlmKGF0ID09PSBidCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSBpZihhdCA8IGJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMTtcbiAgICB9KTtcblxuICAgIGNvbXBsZXRlZC5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBsZXRlZCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyBXYXMgdGhpcyBjYXJkIGV2ZXIgaW4gdGhlIHJpc2sgbGlzdD9cbiAgICAgICAgLy9cbiAgICAgICAgbGV0IHJpc2sgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCB1cGRhdGUgb2YgY29tcGxldGVkLnVwZGF0ZXMpIHtcbiAgICAgICAgICAgIGlmKHVwZGF0ZS5saXN0QmVmb3JlID09PSAnUmlzaycpIHtcbiAgICAgICAgICAgICAgICByaXNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIGlnbm9yZSBcInJpc2tcIiBjYXJkc1xuICAgICAgICAvL1xuICAgICAgICBpZighcmlzaykge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGNvbXBsZXRlZC5maW5hbF90aW1lKCk7XG4gICAgICAgICAgICBsZXQgaT0wO1xuICAgICAgICAgICAgZm9yKCA7IGk8dGhhdC5zcHJpbnRzLmxlbmd0aDsgIGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcbiAgICAgICAgICAgICAgICBpZihkYXRlIDw9IHNwcmludC5lbmRfdGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaSA+PSB0aGF0LnNwcmludHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaSA9IHRoYXQuc3ByaW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XG4gICAgICAgICAgICBzcHJpbnQuY29tcGxldGVkLnB1c2goY29tcGxldGVkKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG59XG5cblNwcmludHMucHJvdG90eXBlLmNvbXBsZXRlZF9zdGF0aXN0aWNzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBsZXRlZF9jb3VudCA9IDA7XG4gICAgdmFyIHJldmlld3NfdG90YWwgPSAwO1xuXG4gICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zcHJpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNwcmludCA9IHRoaXMuc3ByaW50c1tpXTtcbiAgICAgICAgY29tcGxldGVkX2NvdW50ICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xuXG4gICAgICAgIGZvcihsZXQgaj0wOyBqPHNwcmludC5jb21wbGV0ZWQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbal07XG5cbiAgICAgICAgICAgIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gY29tcGxldGVkLm1lbWJlcnNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XG4gICAgICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwMlwiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgXCI8L2VtPiBoYXMgbm8gdGVhbSBtZW1iZXJzIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDNcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXG4gICAgICAgICAgICAgICAgXCI8L2VtPiBoYXMgbW9yZSB0aGFuIG9uZSB0ZWFtIG1lbWJlciBhc3NpZ25lZC4gTm9ib2R5IHdpbGwgZ2V0IGNyZWRpdCBmb3IgdGhhdCB0YXNrLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXJlIHRoZXkgYW55IHJldmlld3M/XG4gICAgICAgICAgICBpZihjb21wbGV0ZWQuY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldmlld3NfdG90YWwrKztcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNvbXBsZXRlZC5jb21tZW50c1swXS5tZW1iZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XG4gICAgICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5yZXZpZXdzX2NvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5jb21wbGV0ZWRfdG90YWwgPSBjb21wbGV0ZWRfY291bnQ7XG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0ucmV2aWV3c190b3RhbCA9IHJldmlld3NfdG90YWw7XG4gICAgfVxufVxuXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX21lbWJlciA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzW2lkXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuU3ByaW50cy5wcm90b3R5cGUubnVtX21lbWJlcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY250ID0gMDtcblxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XG4gICAgICAgIGlmKHRoaXMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGNudCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNudDtcbn1cblxuU3ByaW50cy5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbihjb2RlKSB7XG4gICAgLy8gRG9lcyB0aGUgZXJyb3IgYWxyZWFkeSBleGlzdD9cbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmVycm9ycy5sZW5ndGg7ICBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5lcnJvcnNbaV07XG4gICAgICAgIGlmKGVycm9yLmNvZGUgPT09IGNvZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaChjb2RlKSB7XG4gICAgICAgIGNhc2UgJ2UwMDEnOlxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0Rlc2lnbidcIn0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZTAwMic6XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnUmlza3MnXCJ9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2UwMDMnOlxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ01lZXRpbmdzJ1wifSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlMDA0JzpcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUbyBEbydcIn0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZTAwNSc6XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQWN0aXZlJ1wifSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlMDA2JzpcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBDb21wbGV0ZWQnXCJ9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2UwMDcnOlxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0NvbXBsZXRlZCdcIn0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZTkwMCc6XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiRmF0YWwgZXJyb3JzLCB1bmFibGUgdG8gcHJvY2VlZCB3aXRoIHNwcmludHMgYW5hbHlzaXNcIn0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5TcHJpbnRzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24oY29kZSwgbXNnKSB7XG4gICAgaWYobXNnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IG1zZ30pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoKGNvZGUpIHtcbiAgICAgICAgY2FzZSAndzAwMSc6XG4gICAgICAgICAgICB2YXIgbXNnID0gXCJZb3VyIGxpc3RzIGFyZSBub3QgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIFwiICtcbiAgICAgICAgICAgICAgICBcIlRoZSBleGFjdCBvcmRlciBzaG91bGQgYmU6XCI7XG5cbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICBmb3IoY29uc3QgY2FyZCBvZiB0aGlzLmJvYXJkLm9wdGlvbnMuY2FyZHMpIHtcbiAgICAgICAgICAgICAgICBpZihmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1zZyArPSAnLCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXNnICs9ICcgJyArIGNhcmQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBtc2d9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgfVxufSIsImltcG9ydCB7b3B0aW9uc30gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcbmltcG9ydCB7RGlzY29ubmVjdGVkVmlld30gZnJvbSBcIi4vRGlzY29ubmVjdGVkVmlld1wiO1xuaW1wb3J0IHtNYWluVmlld30gZnJvbSAnLi9NYWluVmlldyc7XG5pbXBvcnQge1RyZWxsb0Nvbm5lY3R9IGZyb20gJ3RyZWxsby1jb25uZWN0JztcblxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyID0gZnVuY3Rpb24odXNlck9wdGlvbnMpIHtcblx0Ly8gRGVmYXVsdCBhbmQgc3VwcGxpZWQgb3B0aW9uc1xuXHRjb25zdCBvcHRzID0gVXRpbC5tZXJnZShvcHRpb25zLCB1c2VyT3B0aW9ucyk7XG5cblx0Y29uc3QgdHJlbGxvID0gbmV3IFRyZWxsb0Nvbm5lY3Qob3B0cyk7XG5cblx0VXRpbC5yZWFkeSgoKSA9PiB7XG5cdFx0bGV0IGVsZW1lbnRzO1xuXHRcdGlmKG9wdHMuc2VsLm5vZGVUeXBlKSB7XG5cdFx0XHRlbGVtZW50cyA9IFtvcHRzLnNlbF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNlbCk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHN3aXRjaCh0cmVsbG8uc3RhdGUpIHtcblx0XHRcdFx0Y2FzZSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDpcblx0XHRcdFx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdG5ldyBNYWluVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cblxufSIsIi8qKlxuICogQGZpbGVcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIHVwZGF0ZSBvbiBhIGNhcmRcbiAqL1xuXG5leHBvcnQgY29uc3QgVXBkYXRlID0gZnVuY3Rpb24oYm9hcmQsIGNhcmQsIGRhdGEpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5jYXJkID0gY2FyZDsgXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLm1lbWJlciA9IGRhdGEuaWRNZW1iZXJDcmVhdG9yO1xuICAgIHRoaXMubGlzdEJlZm9yZSA9IGRhdGEuZGF0YS5saXN0QmVmb3JlLm5hbWU7XG4gICAgdGhpcy5saXN0QWZ0ZXIgPSBkYXRhLmRhdGEubGlzdEFmdGVyLm5hbWU7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRhLmRhdGUpKTtcbn1cblxuIiwiXG5leHBvcnQgY29uc3QgVXRpbCA9IGZ1bmN0aW9uKCkge31cblxuVXRpbC5tZXJnZSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcblx0dmFyIG9iaiA9IHt9O1xuXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMSkge1xuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoyKSB7XG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgSFRNTCB0YWdzIGZyb20gYSBzdHJpbmcuXG4gKiBAcGFyYW0gc3RyIFN0cmluZyB0byBwcm9jZXNzXG4gKiBAcmV0dXJucyBzdHJpbmcgd2l0aG91dCB0YWdzXG4gKi9cblV0aWwuc3RyaXBfdGFncyA9IGZ1bmN0aW9uKHN0cikge1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoLzwoPzoufFxcbikqPz4vZ20sICcnKTtcbn1cblxuVXRpbC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24odHlwZSwgY2xzKSB7XG5cdGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0aWYoY2xzICE9PSB1bmRlZmluZWQpIHtcblx0XHRVdGlsLmFkZENsYXNzKGUsIGNscyk7XG5cdH1cblxuXHRyZXR1cm4gZTtcbn1cblxuVXRpbC5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWVzKSB7XG5cdGNvbnN0IG5hbWVzID0gY2xhc3NOYW1lcy5zcGxpdCgnICcpO1xuXHRmb3IoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuXHRcdGlmIChlbC5jbGFzc0xpc3QpXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdGVsc2Vcblx0XHRcdGVsLmNsYXNzTmFtZSArPSAnICcgKyBuYW1lO1xuXHR9XG59XG5cblV0aWwucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XG5cdGlmIChlbC5jbGFzc0xpc3QpXG5cdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHRlbHNlXG5cdFx0ZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcbn1cblxuVXRpbC5yZWFkeSA9IGZ1bmN0aW9uKGZuKSB7XG5cdGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcblx0XHRmbigpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG5cdH1cbn1cblxuXG4vKipcbiAqIENvbnZlcnQgYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0IHRvIGEgc3RyaW5nLlxuICpcbiAqIFRoaXMgdXNlcyBmb3JtYXR0aW5nIHRoYXQgaXMgc3Vic2V0IG9mIHRoZSBQSFAgZGF0ZSgpIGZ1bmN0aW9uLlxuICogQHBhcmFtIGRhdGUgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSBmb3JtYXQgT3B0aW9uYWwgZm9ybWF0IHN0cmluZyAoZGVmYXVsdCBpcyAnbi1kLVkgaDppYScpLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuVXRpbC5mb3JtYXREYXRldGltZSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xuXG5cdGZ1bmN0aW9uIHBhZChpLCBuKSB7XG5cdFx0dmFyIHMgPSAnJyArIGk7XG5cdFx0d2hpbGUocy5sZW5ndGggPCBuKSB7XG5cdFx0XHRzID0gJzAnICsgcztcblx0XHR9XG5cblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9ybWF0ID0gJ24tZC1ZIGg6aWEnO1xuXHR9XG5cblx0dmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHR2YXIgaG91ciA9IGhvdXJzO1xuXHR2YXIgYW0gPSAnYSc7XG5cdGlmKGhvdXJzID09IDApIHtcblx0XHRob3VyID0gMTI7XG5cdH0gZWxzZSBpZihob3VycyA9PSAxMikge1xuXHRcdGFtID0gJ3AnO1xuXHR9IGVsc2UgaWYoaG91cnMgPiAxMikge1xuXHRcdGhvdXIgPSBob3VycyAtIDEyO1xuXHRcdGFtID0gJ3AnO1xuXHR9XG5cblx0dmFyIHN0ciA9ICcnO1xuXHRmb3IodmFyIGk9MDsgaTxmb3JtYXQubGVuZ3RoOyBpKyspIHtcblx0XHRzd2l0Y2goZm9ybWF0LmNoYXJBdChpKSkge1xuXHRcdFx0Y2FzZSAnbic6XG5cdFx0XHRcdHN0ciArPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbSc6XG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSwgMik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdkJzpcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldERhdGUoKSwgMik7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdZJzpcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2cnOlxuXHRcdFx0XHRzdHIgKz0gaG91cjtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2gnOlxuXHRcdFx0XHRzdHIgKz0gcGFkKGhvdXIsIDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnaSc6XG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRNaW51dGVzKCksIDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAncyc6XG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRTZWNvbmRzKCksIDIpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYSc6XG5cdFx0XHRcdHN0ciArPSBhbTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHN0ciArPSBmb3JtYXQuY2hhckF0KGkpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufSIsIlxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XG5cdHNlbDogJyN0cmVsbG8nLFxuXHR2ZXJzaW9uOiAxLFxuXHRcImFwaUVuZHBvaW50XCI6IFwiaHR0cHM6Ly9hcGkudHJlbGxvLmNvbVwiLFxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXG5cdGtleTogJycsXG5cblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xuXHQvLyBkaXNhbWJpZ3VhdGUgbXVsdGlwbGUgdXNlcyBvbiB0aGUgc2FtZSBzaXRlXG5cdGxvY2FsUHJlZml4OiAnJyxcblxuXHQvLyBOYW1lIG9mIHRoZSBib2FyZCB3ZSBhcmUgZmV0Y2hpbmdcblx0Ym9hcmQ6ICcnLFxuXG5cdC8qKiBPcHRpb25hbDogT25seSBjb25zaWRlciBtZWV0aW5ncyBhZnRlciB0aGlzIHRpbWUgKFVuaXggdGltZSkgKi9cblx0YWZ0ZXI6IG51bGwsXG5cblx0dmlld3M6IHtcblx0XHQnYm9hcmQnOiB7fSxcblx0XHQnc3ByaW50Jzoge31cblx0fSxcblxuXHRuYW1lOiAnVHJlbGxvU3ByaW50ZXInLFxuXG5cdC8vIERlZmF1bHQgY2FyZHNcblx0Y2FyZHM6IFsnRGVzaWduJywgJ1Jpc2tzJywgJ01lZXRpbmdzJyxcblx0XHQnVG8gRG8nLCAnVGhpcyBTcHJpbnQgQWN0aXZlJyxcblx0XHQnVGhpcyBTcHJpbnQgQ29tcGxldGVkJywgJ0NvbXBsZXRlZCddXG59O1xuXG4iXSwibmFtZXMiOlsiVHJlbGxvRmFjdG9yeSIsImNyZWF0ZSIsIlNpdGUiLCJUcmVsbG9TcHJpbnRlclZpZXciLCJzaXRlIiwic3RhcnQiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJUcmVsbG9TcHJpbnRlciIsImVsZW1lbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3B0aW9ucyIsInNlbCIsImtleSIsImJvYXJkIiwidGVhbSIsInZpZXdzIiwiYWZ0ZXIiLCJjYXJkcyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=
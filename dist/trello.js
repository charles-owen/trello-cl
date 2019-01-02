(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Trello"] = factory();
	else
		root["Trello"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Trello"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/trello-sprinter/trello.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/trello-sprinter/trello.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.trello-sprinter {\n  margin: 0;\n}\n\ndiv.trello-sprinter h2 {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n  font-size: 1em;\n  margin: 0;\n}\n\ndiv.trello-sprinter p.trello-status {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\n\ndiv.trello-sprinter p.trello-msg {\n  text-align: center;\n  font-style: italic;\n  font-size: 0.9em;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\n\ndiv.trello-sprinter p.center {\n  text-align: center;\n}\n\ndiv.trello-sprinter div.trello-view {\n  background: white;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-view h3 {\n  border-top: 2px solid black;\n  margin: 0;\n  padding: 0.25em 0 0.25em 20px;\n}\n\ndiv.trello-sprinter div.trello-view h3 span.date {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 0.7em;\n  float: right;\n  padding-top: 0.25em;\n}\n\ndiv.trello-sprinter div.trello-view p.trello-completed-header {\n  text-align: center;\n  font-weight: bold;\n  background: black;\n  color: deepskyblue;\n}\n\ndiv.trello-sprinter .trello-plus {\n  background-image: url(" + escape(__webpack_require__(/*! ./img/plus.png */ "./packages/trello-sprinter/img/plus.png")) + ");\n}\n\ndiv.trello-sprinter .trello-minus {\n  background-image: url(" + escape(__webpack_require__(/*! ./img/minus.png */ "./packages/trello-sprinter/img/minus.png")) + ");\n}\n\ndiv.trello-sprinter .trello-plus,\ndiv.trello-sprinter .trello-minus {\n  background-repeat: no-repeat;\n  background-position: left center;\n  background-size: 16px 16px;\n  cursor: pointer;\n}\n\ndiv.trello-sprinter div.trello-expand {\n  position: relative;\n  display: none;\n  overflow: auto;\n  background: #f0f0f0;\n  padding: 0.25em;\n  margin-bottom: 6pt;\n  border: 1pt solid gray;\n  word-wrap: normal;\n}\n\ndiv.trello-sprinter div.trello-expand,\ndiv.trello-sprinter .trello-errors {\n  -moz-box-shadow: 6pt 6px 10pt #888;\n  -webkit-box-shadow: 6pt 6px 10pt #888;\n  box-shadow: 6pt 6px 10pt #888;\n}\n\ndiv.trello-sprinter p.trello-count {\n  margin: 0 0 1em 0;\n  text-align: center;\n  font-size: 0.85em;\n}\n\ndiv.trello-sprinter div.trello-card {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\ndiv.trello-sprinter div.trello-card h4 {\n  background-color: #81d0fd;\n  margin: 0.5em 0 0 0;\n  padding: 0 0.25em;\n}\n\ndiv.trello-sprinter div.trello-card h4 span.trello-date {\n  font-weight: normal;\n  font-size: 0.9em;\n  float: right;\n  padding-top: 0.25em;\n}\n\ndiv.trello-sprinter div.trello-card .trello-card-members {\n  margin: 0 0.25em;\n  font-size: 0.85em;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-description {\n  margin: 0.5em 1em;\n}\n\ndiv.trello-sprinter div.trello-description p {\n  margin: 0 0 0.25em 0;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-comments {\n  margin: 0 2em;\n}\n\ndiv.trello-sprinter div.trello-comments h5 {\n  margin: 0;\n  padding: 0 0.25em;\n  background-color: #ccc;\n  font-size: 0.8em;\n  font-weight: normal;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-comments h5 span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\n\ndiv.trello-sprinter div.trello-comments p {\n  margin: 0 0.25em;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-updates {\n  margin: 1em 2em;\n}\n\ndiv.trello-sprinter div.trello-updates p {\n  margin: 0;\n  padding: 0 0.25em;\n  font-size: 0.8em;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-updates p span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\n\ndiv.trello-sprinter div.trello-updates p span.list {\n  font-style: normal;\n  font-weight: bold;\n}\n\ndiv.trello-sprinter div.trello-sprints {\n  background: white;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors {\n  background: #c41425;\n  color: white;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-warnings {\n  background: #ff80df;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  background: #f0f0f0;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n  margin-bottom: 1em;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings,\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  position: relative;\n  overflow: auto;\n  padding: 0 1em 1em 1em;\n  margin: 1em 3em 6pt 3em;\n  border: 1pt solid gray;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors p,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings p,\ndiv.trello-sprinter div.trello-sprints div.trello-members p {\n  font-size: 1.1em;\n  margin: 0;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors span.trello-code,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code,\ndiv.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n  font-weight: bold;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors h3,\ndiv.trello-sprinter div.trello-sprints div.trello-errors h4,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings h3,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings h4,\ndiv.trello-sprinter div.trello-sprints div.trello-members h3,\ndiv.trello-sprinter div.trello-sprints div.trello-members h4 {\n  margin: 0;\n  padding: 0.25em 0;\n  text-align: center;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors div.trello-info,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info,\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-info {\n  border-top: 1px solid black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p,\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {\n  margin: 1em 0;\n}\n\ndiv.trello-sprinter div.trello-sprint-table {\n  overflow: auto;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/trello-connect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/trello-connect/index.js ***!
  \**********************************************/
/*! exports provided: TrelloConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloConnect", function() { return TrelloConnect; });

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

/* harmony default export */ __webpack_exports__["default"] = (TrelloConnect);


/***/ }),

/***/ "./packages/trello-sprinter/img/minus.png":
/*!************************************************!*\
  !*** ./packages/trello-sprinter/img/minus.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./packages/trello-sprinter/img/plus.png":
/*!***********************************************!*\
  !*** ./packages/trello-sprinter/img/plus.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII="

/***/ }),

/***/ "./packages/trello-sprinter/index.js":
/*!*******************************************!*\
  !*** ./packages/trello-sprinter/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello.scss */ "./packages/trello-sprinter/trello.scss");
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trello_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/TrelloSprinter */ "./packages/trello-sprinter/src/TrelloSprinter.js");


/* harmony default export */ __webpack_exports__["default"] = (_src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__["TrelloSprinter"]);

/***/ }),

/***/ "./packages/trello-sprinter/src/Board.js":
/*!***********************************************!*\
  !*** ./packages/trello-sprinter/src/Board.js ***!
  \***********************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member */ "./packages/trello-sprinter/src/Member.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./packages/trello-sprinter/src/List.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./packages/trello-sprinter/src/Card.js");
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Update */ "./packages/trello-sprinter/src/Update.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment */ "./packages/trello-sprinter/src/Comment.js");
/*
 * Representation of a Trello Board
 */





var Board = function Board(data) {
  this.data = data;
  this.id = data.id;
  this.name = data.name;
  this.lists = [];
  this.members = {};

  this.find_card = function (id) {
    for (var i = 0; i < this.lists.length; i++) {
      var card = this.lists[i].find_card(id);

      if (card !== null) {
        return card;
      }
    }

    return null;
  };

  this.add_member = function (member) {
    this.members[member.id] = member;
  };
};

Board.fetch = function (trello, name, msg, success, failure) {
  msg.innerText = 'Fetching board ' + name; /// Keeps track of how many open async calls there are right now

  var active = 0; // Will be set to point to a new Board object

  var board = null;
  async_start();
  trello.get("/member/me/boards?fields=all", function (data) {
    for (var i = 0; i < data.length; i++) {
      var boardData = data[i];

      if (boardData.name.toLowerCase() === name.toLowerCase()) {
        // We have found the board (if not closed)
        if (!boardData.closed) {
          // Create the board object
          board = new Board(boardData); // Fetch the membership

          fetch_membership(board); // Fetch the lists for the board

          fetch_lists(board);
          break;
        }
      }
    }

    if (board === null) {
      failure("Unable to find Trello board " + name);
      return;
    }

    async_end();
  }, function (data) {
    failure("Unable to fetch Trello boards");
  }, msg);
  /**
   * Fetch the membership of the board.
   * @param board Board to fetch for
   */

  function fetch_membership(board) {
    async_start();
    trello.get("/board/" + board.id + "/members?fields=all", function (data) {
      data.forEach(function (memberData) {
        var member = new _Member__WEBPACK_IMPORTED_MODULE_0__["Member"](board, memberData);
        board.add_member(member);
      });
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello membership");
    }, msg);
  }

  function fetch_lists(board) {
    msg.innerText = "Fetching lists for " + name;
    async_start();
    trello.get("/boards/" + board.id + "/lists?filter=open", function (data) {
      data.forEach(function (listData) {
        if (!listData.closed) {
          var list = new _List__WEBPACK_IMPORTED_MODULE_1__["List"](board, listData);
          board.lists.push(list);
        }
      });
      fetch_cards(board);
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello lists");
    }, msg);
  }
  /**
   * Fetch all cards as a single batch operation.
   * @param board Board we are fetching for
   */


  function fetch_cards(board) {
    msg.innerText = "Fetching cards"; // Collect up all URLs for all of the lists

    var urls = '';

    for (var i = 0; i < board.lists.length; i++) {
      var list = board.lists[i];

      if (urls.length > 0) {
        urls += ',';
      }

      urls += "/lists/" + list.id + "/cards/open";
    } // Get get it


    async_start();
    trello.get("/batch?urls=" + urls, function (data) {
      // Loop over the result for each provided URL
      for (var i = 0; i < data.length && i < board.lists.length; i++) {
        var list = board.lists[i];
        var cardsData = data[i][200];
        cardsData.forEach(function (cardData) {
          if (!cardData.closed) {
            var card = new _Card__WEBPACK_IMPORTED_MODULE_2__["Card"](board, list, cardData);
            list.add_card(card);
          }
        });
      }

      fetch_actions(board);
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello cards");
    }, msg);
  }

  function fetch_actions(board) {
    async_start();
    trello.get("/board/" + board.id + "/actions?filter=commentCard,updateCard:idList&limit=1000", function (data) {
      data.forEach(function (action) {
        if (!action.closed) {
          if (action.type === "commentCard") {
            var card = board.find_card(action.data.card.id);

            if (card !== null) {
              var comment = new _Comment__WEBPACK_IMPORTED_MODULE_4__["Comment"](board, card, action);
              card.comments.push(comment);
            } else {
              console.log("card not found");
            } //console.log(action);

          } else if (action.type === 'updateCard') {
            var _card = board.find_card(action.data.card.id);

            if (_card !== null) {
              var update = new _Update__WEBPACK_IMPORTED_MODULE_3__["Update"](board, _card, action);

              _card.updates.push(update);
            } //console.log(action);

          }
        }
      });
      board.lists.forEach(function (list) {
        list.cards.forEach(function (card) {
          card.sort_updates();
        });
      });
      async_end();
    }, function (data) {
      failure("Unable to fetch Trello card information");
    }, msg);
  }

  function async_start() {
    active++;
  }

  function async_end() {
    active--;

    if (active === 0) {
      success(board);
    }
  }
};

Board.prototype.find_list = function (name) {
  name = name.toLowerCase();

  for (var i = 0; i < this.lists.length; i++) {
    var list = this.lists[i];

    if (list.name.toLowerCase() === name) {
      return list;
    }
  }

  return null;
};

/***/ }),

/***/ "./packages/trello-sprinter/src/BoardView.js":
/*!***************************************************!*\
  !*** ./packages/trello-sprinter/src/BoardView.js ***!
  \***************************************************/
/*! exports provided: BoardView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardView", function() { return BoardView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataView */ "./packages/trello-sprinter/src/DataView.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./packages/trello-sprinter/src/Util.js");
/**
 * @file
 * Standard Trello board view
 */


var BoardView = function BoardView(div, board) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);

  this.present = function () {
    var view = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-view');
    div.appendChild(view);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = board.lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var list = _step.value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    board.lists.forEach(function (list) {
      presentList(view, list);
    });
  };

  var presentList = function presentList(view, list) {
    var header = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('h3', 'trello-plus');
    header.innerText = list.name;
    view.appendChild(header);
    var expander = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-expand');
    expander.style.display = 'none';
    view.appendChild(expander);
    header.addEventListener('click', function (event) {
      if (expander.style.display === 'none') {
        expander.style.display = 'block';
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].removeClass(header, 'trello-plus');
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].addClass(header, 'trello-minus');
      } else {
        expander.style.display = 'none';
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].removeClass(header, 'trello-minus');
        _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].addClass(header, 'trello-plus');
      }
    });
    var count = list.count_members();
    var members = '<em>Cards:</em>[' + list.cards.length + '] ';

    for (var c in count) {
      if (count.hasOwnProperty(c)) {
        members += count[c].member.name + ':[' + count[c].cnt + ']&nbsp;&nbsp;';
      }
    }

    var countEl = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('p', 'trello-count');
    expander.appendChild(countEl);
    countEl.innerHTML = members;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = list.cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var card = _step2.value;
        presentCard(expander, card);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  var presentCard = function presentCard(div, card) {
    //
    // Heading
    //
    var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(card.created);
    var cardDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-card');
    div.appendChild(cardDiv);
    cardDiv.innerHTML = "<h4><span class=\"trello-date\">".concat(date, "</span>").concat(card.name, "</h4>"); //
    // Members
    //

    var members = '';
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = card.members[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var id = _step3.value;
        var member = card.board.members[id];

        if (members.length > 0) {
          members += ' / ';
        }

        members += '<span>' + member.name + '</span>';
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var membersP = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('p', 'trello-card-members');
    cardDiv.appendChild(membersP);
    membersP.innerHTML = members; //
    // Description
    //

    var desc = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-description');
    cardDiv.appendChild(desc);
    desc.innerHTML = card.desc;
    presentComments(cardDiv, card);
    presentUpdates(cardDiv, card);
  };

  this.presentCard = presentCard;

  var presentComments = function presentComments(div, card) {
    if (card.comments.length === 0) {
      return;
    }

    var commentDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-comments');
    div.appendChild(commentDiv);
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = card.comments[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var comment = _step4.value;
        var member = card.board.members[comment.member];
        var memberName = member !== undefined ? member.name : "undefined";
        var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(comment.date);
        var h5 = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('h5');
        commentDiv.appendChild(h5);
        h5.innerHTML = "<span class=\"trello-date\">".concat(date, "</span>").concat(memberName);
        var textDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div');
        commentDiv.appendChild(textDiv);
        textDiv.innerHTML = comment.text;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  };

  var presentUpdates = function presentUpdates(div, card) {
    if (card.updates.length === 0) {
      return;
    }

    var updateDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-updates');
    div.appendChild(updateDiv);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = card.updates[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var update = _step5.value;
        var member = card.board.members[update.member];
        var memberName = member !== undefined ? member.name : "undefined";
        var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(update.date);
        var p = document.createElement('p');
        updateDiv.appendChild(p);
        p.innerHTML = '<span class="date">' + date + '</span> ' + memberName + ' moved from <span class="list">' + update.listBefore + '</span> to <span class="list">' + update.listAfter + '</span>';
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  };
}; /// @cond

BoardView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
BoardView.prototype.constructor = BoardView; /// @endcond

/***/ }),

/***/ "./packages/trello-sprinter/src/Card.js":
/*!**********************************************!*\
  !*** ./packages/trello-sprinter/src/Card.js ***!
  \**********************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./packages/trello-sprinter/src/Util.js");
/**
 * @file
 * Representation of a Trello list in a board
 */

var Card = function Card(board, list, data) {
  var that = this;
  this.board = board;
  this.list = list;
  this.id = data.id;
  this.name = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.name);
  this.data = data;
  this.desc = '<p>' + _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.desc).replace(/\n/gm, '<p>') + '</p>';
  this.created = new Date(parseInt(data.id.substr(0, 8), 16) * 1000);
  this.members = [];
  data.idMembers.forEach(function (id) {
    that.members.push(id);
  });
  this.comments = [];
  this.updates = [];
};

Card.prototype.sort_updates = function () {
  this.updates.sort(function (a, b) {
    if (a.date < b.date) {
      return -1;
    } else if (a.date == b.date) {
      return 0;
    } else {
      return 1;
    }
  });
};
/**
 * Determine the last time this card was moved.
 * This is used to determine when a completed card was
 * moved to Completed.
 */


Card.prototype.final_time = function () {
  if (this.updates.length > 0) {
    return this.updates[this.updates.length - 1].date;
  }

  return this.created;
};
/**
 * Count members from a collection of cards.
 * @param board Board object
 * @param list array of Card objects
 * @returns object with id as property to object {cnt: ?, member: ?}
 */


Card.count_members = function (board, list) {
  var count = {};
  list.forEach(function (card) {
    card.members.forEach(function (id) {
      var member = board.members[id];

      if (count.hasOwnProperty(member.id)) {
        count[member.id].cnt++;
      } else {
        count[member.id] = {
          cnt: 1,
          member: member
        };
      }
    });
  });
  return count;
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Comment.js":
/*!*************************************************!*\
  !*** ./packages/trello-sprinter/src/Comment.js ***!
  \*************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./packages/trello-sprinter/src/Util.js");
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

var Comment = function Comment(board, card, data) {
  this.board = board;
  this.card = card;
  this.member = data.idMemberCreator;
  this.text = '<p>' + _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.data.text).replace(/\n/gm, '<p>') + '</p>';
  this.data = data;
  this.date = new Date(Date.parse(data.date));
};

/***/ }),

/***/ "./packages/trello-sprinter/src/DataView.js":
/*!**************************************************!*\
  !*** ./packages/trello-sprinter/src/DataView.js ***!
  \**************************************************/
/*! exports provided: DataView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataView", function() { return DataView; });
/*
 * Base object for views of Trello data.
 */
var DataView = function DataView() {};

DataView.prototype.present = function (div, board) {};

/***/ }),

/***/ "./packages/trello-sprinter/src/DisconnectedView.js":
/*!**********************************************************!*\
  !*** ./packages/trello-sprinter/src/DisconnectedView.js ***!
  \**********************************************************/
/*! exports provided: DisconnectedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedView", function() { return DisconnectedView; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./packages/trello-sprinter/src/Util.js");

var DisconnectedView = function DisconnectedView(element, trello, options) {
  // Ensure empty
  element.innerHTML = '';
  var div = document.createElement('div');
  element.appendChild(div);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(div, 'trello-sprinter');
  var p = document.createElement('p');
  div.appendChild(p);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(p, 'center');
  var button = document.createElement('button');
  p.appendChild(button);
  button.innerText = 'Connect to Trello';
  button.addEventListener('click', function (event) {
    event.preventDefault();
    trello.authorize();
  });
};

/***/ }),

/***/ "./packages/trello-sprinter/src/List.js":
/*!**********************************************!*\
  !*** ./packages/trello-sprinter/src/List.js ***!
  \**********************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./packages/trello-sprinter/src/Card.js");
/**
 * @file
 * Representation of a Trello list in a board
 */

var List = function List(board, data) {
  this.board = board;
  this.id = data.id;
  this.name = data.name;
  this.data = data;
  this.cards = [];
  this.cards_by_id = {};
};

List.prototype.add_card = function (card) {
  this.cards.push(card);
  this.cards_by_id[card.id] = card;
};

List.prototype.find_card = function (id) {
  if (this.cards_by_id.hasOwnProperty(id)) {
    return this.cards_by_id[id];
  }

  return null;
};

List.prototype.count_members = function () {
  return _Card__WEBPACK_IMPORTED_MODULE_0__["Card"].count_members(this.board, this.cards);
};

/***/ }),

/***/ "./packages/trello-sprinter/src/MainView.js":
/*!**************************************************!*\
  !*** ./packages/trello-sprinter/src/MainView.js ***!
  \**************************************************/
/*! exports provided: MainView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainView", function() { return MainView; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./packages/trello-sprinter/src/Util.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./packages/trello-sprinter/src/Board.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardView */ "./packages/trello-sprinter/src/BoardView.js");
/* harmony import */ var _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprints/SprintView */ "./packages/trello-sprinter/src/Sprints/SprintView.js");
/* harmony import */ var _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprints/SprintTableView */ "./packages/trello-sprinter/src/Sprints/SprintTableView.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisconnectedView */ "./packages/trello-sprinter/src/DisconnectedView.js");






var MainView = function MainView(element, trello, options) {
  // Ensure empty
  element.innerHTML = '';
  var div = document.createElement('div');
  element.appendChild(div);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(div, 'trello-sprinter');
  var p = document.createElement('p');
  div.appendChild(p);
  _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(p, 'center');
  var button = document.createElement('button');
  p.appendChild(button);
  button.innerText = 'Disconnect';
  button.addEventListener('click', function (event) {
    event.preventDefault();
    trello.disconnect();
    new _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__["DisconnectedView"](element, trello, options);
  });
  var pStatus = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].createElement('p', 'trello-status');
  pStatus.innerText = 'Connecting to Trello...';
  div.appendChild(pStatus);
  var pMsg = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].createElement('p', 'trello-msg');
  div.appendChild(pMsg);
  _Board__WEBPACK_IMPORTED_MODULE_1__["Board"].fetch(trello, options.board, pMsg, function (board) {
    // Success
    pStatus.innerText = 'Trello Board: ' + board.name;
    pMsg.parentNode.removeChild(pMsg);

    for (var view in options.views) {
      switch (view) {
        case 'board':
          var v = new _BoardView__WEBPACK_IMPORTED_MODULE_2__["BoardView"](div, board);
          v.present();
          break;

        case 'sprint':
          v = new _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__["SprintView"](div, board, options.views.sprint);
          v.present();
          break;

        case 'sprintTable':
          v = new _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__["SprintTableView"](div, board, options.views.sprintTable);
          v.present();
          break;
      }
    }
  }, function (msg) {
    // Failure
    pMsg.parentNode.removeChild(pMsg);
    pStatus.innerText = msg;
  }); //trello.fetch();
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Member.js":
/*!************************************************!*\
  !*** ./packages/trello-sprinter/src/Member.js ***!
  \************************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/*
 * Representation of a Trello member in a board
 */
var Member = function Member(board, data) {
  this.board = board;
  this.id = data.id;
  this.name = data.fullName;
  this.data = data;
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Sprints/Sprint.js":
/*!********************************************************!*\
  !*** ./packages/trello-sprinter/src/Sprints/Sprint.js ***!
  \********************************************************/
/*! exports provided: Sprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprint", function() { return Sprint; });
/*
 * Represents a single sprint in the sprints analysis
 */
var Sprint = function Sprint(sprints, start, end) {
  this.sprints = sprints;
  this.start_meeting = start;
  this.end_meeting = end;
  this.completed = [];
};

Sprint.prototype.end_time = function () {
  return new Date(this.end_meeting.created.getTime() + this.sprints.sprint_time_slop * 1000);
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Sprints/SprintMember.js":
/*!**************************************************************!*\
  !*** ./packages/trello-sprinter/src/Sprints/SprintMember.js ***!
  \**************************************************************/
/*! exports provided: SprintMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintMember", function() { return SprintMember; });
/**
 * @file
 * Team member statistics for a sprint
 */
var SprintMember = function SprintMember(sprints, member) {
  this.member = member;
  this.sprints = sprints;
  this.meetings_count = 0;
  this.meetings_attended = 0;
  this.completed_count = 0;
  this.completed_total = 0;
  this.reviews_count = 0;
  this.reviews_total = 0;
};

SprintMember.prototype.meetings_percentage = function () {
  if (this.meetings_count <= this.sprints.meetings_slop) {
    return '(insufficient meetings)';
  }

  var per = this.meetings_attended / (this.meetings_count - this.sprints.meetings_slop);

  if (per > 1) {
    per = 1;
  }

  return per.toFixed(2);
};

SprintMember.prototype.completed_factor = function (teamSize) {
  if (this.completed_total === 0) {
    return 0;
  }

  var factor = this.completed_count / (this.completed_total / teamSize * this.sprints.completed_factor);

  if (factor > 1) {
    factor = 1;
  }

  return factor.toFixed(2);
};

SprintMember.prototype.reviewing_factor = function (teamSize) {
  if (this.reviews_total === 0) {
    return 0;
  }

  var factor = this.reviews_count / (this.reviews_total / teamSize * this.sprints.reviewing_factor);

  if (factor > 1) {
    factor = 1;
  }

  return factor.toFixed(2);
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Sprints/SprintTableView.js":
/*!*****************************************************************!*\
  !*** ./packages/trello-sprinter/src/Sprints/SprintTableView.js ***!
  \*****************************************************************/
/*! exports provided: SprintTableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintTableView", function() { return SprintTableView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./packages/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./packages/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./packages/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./packages/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./packages/trello-sprinter/src/BoardView.js");
/*
 * Trello board view that displays sprint result in a table.
 */





var SprintTableView = function SprintTableView(div, board, options) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);
  var addHeadings = true;

  if (options.addHeadings !== undefined) {
    addHeadings = options.addHeadings;
  }

  this.present = function () {
    var view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-sprint-table');
    div.appendChild(view);
    var table = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('table');
    view.appendChild(table);

    if (options.class !== undefined) {
      _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(table, options.class);
    } //
    // Create the sprint analysis
    //


    var sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__["Sprints"](board);
    var teamSize = sprints.num_members();

    if (addHeadings) {
      tableHeading(table, board, sprints);
    }

    var rowHTML = '';

    function item(data) {
      rowHTML += '<td>' + data + '</td>';
    }

    for (var id in sprints.members) {
      if (sprints.members.hasOwnProperty(id)) {
        var member = sprints.members[id];
        var id = member.member.id;
        rowHTML = ''; // Our statistics

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
        sprints.sprints.forEach(function (sprint) {
          var cnt = 0;
          sprint.completed.forEach(function (card) {
            if (card.members.length == 1 && card.members[0] == id) {
              cnt++;
            }
          });
          item(cnt);
          item(sprint.completed.length);
        });

        if (!isNaN(addHeadings)) {
          for (var i = sprints.sprints.length; i < addHeadings; i++) {
            item("&nbsp;");
            item("&nbsp;");
          }
        }

        var tr = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('tr');
        tr.innerHTML = rowHTML;
        table.appendChild(tr);
      }
    }
  };

  var tableHeading = function tableHeading(table, board, sprints) {
    var tr = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('tr');
    table.appendChild(tr);

    if (options.tr1class !== undefined) {
      _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(tr, options.tr1class);
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

    if (addHeadings === true) {
      for (var i = 1; i <= sprints.sprints.length; i++) {
        item(i);
        item("#");
      }
    } else {
      for (var i = 1; i <= addHeadings; i++) {
        item(i);
        item("#");
      }
    }

    tr.innerHTML = rowHTML;
  };
}; /// @cond

SprintTableView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
SprintTableView.prototype.constructor = SprintTableView; /// @endcond

SprintTableView.prototype.table_headings = function (board, sprints) {};

/***/ }),

/***/ "./packages/trello-sprinter/src/Sprints/SprintView.js":
/*!************************************************************!*\
  !*** ./packages/trello-sprinter/src/Sprints/SprintView.js ***!
  \************************************************************/
/*! exports provided: SprintView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintView", function() { return SprintView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./packages/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./packages/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./packages/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./packages/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./packages/trello-sprinter/src/BoardView.js");
/**
 * @file
 * Trello board view that displays sprint results
 */





var SprintView = function SprintView(div, board) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this); // This uses BoardView to draw what it knows how to draw

  var board_view = new _BoardView__WEBPACK_IMPORTED_MODULE_4__["BoardView"](div, board);

  this.present = function () {
    //
    // Create the sprint analysis
    //
    var sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__["Sprints"](board);
    var view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-sprints');
    div.appendChild(view);
    var h2 = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('h2');
    h2.innerText = 'Sprints Analysis';
    view.appendChild(h2);
    present_errors(view, sprints);
    present_warnings(view, sprints);

    if (sprints.errors.length > 0) {
      return;
    }

    present_sprints(view, sprints);
    present_members(view, sprints);
  };

  var present_errors = function present_errors(div, sprints) {
    if (sprints.errors.length === 0) {
      return;
    }

    var errors = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-errors');
    div.appendChild(errors);
    errors.innerHTML = '<h3>Errors</h3>';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sprints.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var error = _step.value;
        var p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
        errors.appendChild(p);
        p.innerHTML = '<span class="trello-code">' + error.code + ':</span> ' + error.msg;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var present_warnings = function present_warnings(div, sprints) {
    if (sprints.warnings.length === 0) {
      return;
    }

    var warnings = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-warnings');
    div.appendChild(warnings);
    warnings.innerHTML = '<h3>Warnings</h3>';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = sprints.warnings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var warning = _step2.value;
        var p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
        warnings.appendChild(p);
        p.innerHTML = '<span class="trello-code">' + warning.code + ':</span> ' + warning.msg;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  var present_sprints = function present_sprints(div, sprints) {
    var view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-view');
    div.appendChild(view);

    for (var s = 1; s <= sprints.sprints.length; s++) {
      var sprint = sprints.sprints[s - 1];
      present_sprint(view, sprints, s, sprint);
    }
  };

  var present_sprint = function present_sprint(div, sprints, num, sprint) {
    var fmDate = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatDatetime(sprint.start_meeting.created);
    var toDate = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatDatetime(sprint.end_meeting.created);
    var completed = sprint.completed.length; //
    // Member counts for completed
    //

    var counts = _Card__WEBPACK_IMPORTED_MODULE_3__["Card"].count_members(sprints.board, sprint.completed);
    var totalCompleted = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = sprints.sprints[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _sprint = _step3.value;
        totalCompleted += _sprint.completed.length;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var completionFactor = 0.00;

    if (totalCompleted > 0) {
      completionFactor = completed / (totalCompleted / sprints.sprints.length * 0.8);

      if (completionFactor > 1) {
        completionFactor = 1;
      }
    }

    completionFactor = completionFactor.toFixed(2);
    var header = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('h3', 'trello-plus');
    div.appendChild(header);
    header.innerHTML = '<span class="date">' + completed + ' tasks ' + completionFactor + ' / ' + fmDate + ' to ' + toDate + '</span>Sprint: ' + num;
    var expander = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-expand');
    expander.style.display = 'none';
    div.appendChild(expander);
    header.addEventListener('click', function (event) {
      if (expander.style.display === 'none') {
        expander.style.display = 'block';
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].removeClass(header, 'trello-plus');
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(header, 'trello-minus');
      } else {
        expander.style.display = 'none';
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].removeClass(header, 'trello-minus');
        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(header, 'trello-plus');
      }
    });
    board_view.presentCard(expander, sprint.start_meeting);
    board_view.presentCard(expander, sprint.end_meeting); //
    // Completed
    //

    var pCompleted = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p', 'trello-completed-header');
    expander.appendChild(pCompleted);
    pCompleted.innerText = 'Sprint Completed Tasks';
    var pMembers = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p', 'trello-count');
    expander.appendChild(pMembers);
    var members = '<em>Completed:</em>[' + sprint.completed.length + '] ';

    for (var c in counts) {
      if (counts.hasOwnProperty(c)) {
        members += counts[c].member.name + ':[' + counts[c].cnt + ']&nbsp;&nbsp;';
      }
    }

    pMembers.innerHTML = members; //
    // Present completed cards
    //

    for (var i = 0; i < sprint.completed.length; i++) {
      var _completed = sprint.completed[i];
      board_view.presentCard(expander, _completed);
    }
  };

  var present_members = function present_members(div, sprints) {
    var membersDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-members');
    div.appendChild(membersDiv);

    for (var id in sprints.members) {
      if (sprints.members.hasOwnProperty(id)) {
        var member = sprints.members[id];
        present_member(membersDiv, sprints, member);
      }
    }

    present_info(membersDiv, sprints);
  };

  var present_member = function present_member(div, sprints, member) {
    var memberDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-member');
    div.appendChild(memberDiv);
    var meetings = sprints.meetings_slop === 1 ? ' meeting' : ' meetings';
    var teamSize = sprints.num_members();
    memberDiv.innerHTML = '<h4>' + member.member.name + '</h4>' + '<p>Meetings attended: ' + member.meetings_attended + '/' + member.meetings_count + ' percentage: ' + member.meetings_percentage() + ' <em>You are allowed to miss ' + sprints.meetings_slop + meetings + '</em>' + '</p>' + '<p>Tasks completed: ' + member.completed_count + '/' + (member.completed_total / teamSize).toFixed(2) + ' for a completion factor of: ' + member.completed_factor(teamSize) + '</p>' + '<p>Reviews completed: ' + member.reviews_count + ' for a reviewing factor of: ' + member.reviewing_factor(teamSize) + '</p>';
  };

  var present_info = function present_info(div, sprints) {
    var infoDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-info');
    div.appendChild(infoDiv);
    infoDiv.innerHTML = '<p>The completion factor for tasks is based on a metric that every' + ' team member is expected to complete ' + (sprints.completed_factor * 100).toFixed(0) + '% of' + ' an equal distribution of tasks. Values less than 1.00 indicate that you will be' + ' losing points on the assignment.</p>' + '<p>The reviewing factor for tasks is based on a metric that every team member' + ' is expected to review ' + (sprints.reviewing_factor * 100).toFixed(0) + '% of an equal' + ' distribution of tasks. This factor is based on a metric that 90% of tasks should' + ' be programming tasks. Values less than 1.00 indicate that you will be' + ' losing points on the assignment.</p>';
  };
}; /// @cond

SprintView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
SprintView.prototype.constructor = SprintView; /// @endcond

/***/ }),

/***/ "./packages/trello-sprinter/src/Sprints/Sprints.js":
/*!*********************************************************!*\
  !*** ./packages/trello-sprinter/src/Sprints/Sprints.js ***!
  \*********************************************************/
/*! exports provided: Sprints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprints", function() { return Sprints; });
/* harmony import */ var _Sprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprint */ "./packages/trello-sprinter/src/Sprints/Sprint.js");
/* harmony import */ var _SprintMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SprintMember */ "./packages/trello-sprinter/src/Sprints/SprintMember.js");
/*
 * Sprint analysis of Trello board
 */


var Sprints = function Sprints(board) {
  var that = this; /// Number of missed meetings allow

  this.meetings_slop = 1; /// Number of seconds after meeting time to consider completed
  /// in a current sprint in seconds.

  this.sprint_time_slop = 5 * 60 * 60; // 5 hours
  /// Each users is expected to complete 80% of his share of tasks

  this.completed_factor = 0.8; /// Each users is expected to complete 80% of 90% of the task count in reviews

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
  this.completed = null; //
  // Copy over the members
  //

  for (var id in board.members) {
    var member = board.members[id];

    if (member.name.toLowerCase() === "cse335") {
      continue;
    }

    this.members[id] = new _SprintMember__WEBPACK_IMPORTED_MODULE_1__["SprintMember"](this, member);
  } //
  // Find all of the required lists
  //


  this.find_lists();

  if (this.errors.length > 0) {
    this.error('e900');
    return;
  } //
  // Order testing
  //


  this.order_test(); //
  // Determine attendance
  //

  this.meeting_attendance(); //
  // Convert meetings into sprints
  //

  this.create_sprints(); //
  // Sort completed into sprints
  //

  this.sort_completed(); //
  // Completed statistics
  //

  this.completed_statistics();
};
/**
 * Ensure all required lists exist.
 */

Sprints.prototype.find_lists = function () {
  // Find the "Design" list
  this.design = this.board.find_list('Design');

  if (this.design === null) {
    this.error('e001');
  } // Find the "Risks" list


  this.risks = this.board.find_list('Risks');

  if (this.risks === null) {
    this.error('e002');
  } // Find the "Meetings" list


  this.meetings = this.board.find_list('Meetings');

  if (this.meetings === null) {
    this.error('e003');
  } // Find the "To Do" list


  this.todo = this.board.find_list('To Do');

  if (this.todo === null) {
    this.error('e004');
  } // Find the "This Sprint Active" list


  this.sprint_active = this.board.find_list('This Sprint Active');

  if (this.sprint_active === null) {
    this.error('e005');
  } // Find the "This Sprint Completed" list


  this.sprint_completed = this.board.find_list('This Sprint Completed');

  if (this.sprint_completed === null) {
    this.error('e006');
  } // Find the "Completed" list


  this.completed = this.board.find_list('Completed');

  if (this.completed === null) {
    this.error('e007');
  }
};
/**
 * Ensure lists are in the right order
 */


Sprints.prototype.order_test = function () {
  var order = ['Design', 'Risks', 'Meetings', 'To Do', 'This Sprint Active', 'This Sprint Completed', 'Completed'];

  for (var i = 0; i < order.length; i++) {
    if (this.board.lists[i].name.toLowerCase() !== order[i].toLowerCase()) {
      this.warning('w001');
      return;
    }
  }
};
/**
 * Count meeting attendance for a user
 */


Sprints.prototype.meeting_attendance = function () {
  var that = this;
  var meetings_count = this.meetings.cards.length;

  for (var id in this.members) {
    var member = this.members[id];
    member.meetings_count = meetings_count;
    member.meetings_attended = 0;
  }

  this.meetings.cards.forEach(function (card) {
    card.members.forEach(function (id) {
      var member = that.find_member(id);

      if (member !== null) {
        member.meetings_attended++;
      }
    });
  });
};

Sprints.prototype.create_sprints = function () {
  var meetings = this.meetings.cards.slice();
  meetings.sort(function (a, b) {
    if (a.created < b.created) {
      return -1;
    } else if (a.created === b.created) {
      return 0;
    } else {
      return 1;
    }
  });

  for (var i = 0; i < meetings.length - 1; i++) {
    this.sprints.push(new _Sprint__WEBPACK_IMPORTED_MODULE_0__["Sprint"](this, meetings[i], meetings[i + 1]));
  }
};

Sprints.prototype.sort_completed = function () {
  var that = this;
  var completed = this.completed.cards.slice();
  completed.sort(function (a, b) {
    var at = a.final_time();
    var bt = b.final_time();

    if (at === bt) {
      return 0;
    } else if (at < bt) {
      return -1;
    }

    return 1;
  });
  completed.forEach(function (completed) {
    //
    // We ignore "risk" cards
    //
    if (completed.name.toLowerCase().indexOf("risk") === -1) {
      var date = completed.final_time();

      for (var i = 0; i < that.sprints.length; i++) {
        var sprint = that.sprints[i];

        if (date <= sprint.end_time()) {
          break;
        }
      }

      if (i >= that.sprints.length) {
        i = that.sprints.length - 1;
      }

      var sprint = that.sprints[i];
      sprint.completed.push(completed);
    }
  });
};

Sprints.prototype.completed_statistics = function () {
  var completed_count = 0;
  var reviews_total = 0;

  for (var i = 0; i < this.sprints.length; i++) {
    var sprint = this.sprints[i];
    completed_count += sprint.completed.length;

    for (var j = 0; j < sprint.completed.length; j++) {
      var completed = sprint.completed[j];

      if (completed.members.length === 1) {
        var id = completed.members[0];
        var member = this.find_member(id);

        if (member !== null) {
          member.completed_count++;
        }
      } else if (completed.members.length === 0) {
        this.warning("w002", "Completed task <em>" + completed.name + "</em> has no team members assigned. Nobody will get credit for that task.");
      } else {
        this.warning("w003", "Completed task <em>" + completed.name + "</em> has more than one team member assigned. Nobody will get credit for that task.");
      } // Are they any reviews?


      if (completed.comments.length > 0) {
        reviews_total++;
        var id = completed.comments[0].member;
        var member = this.find_member(id);

        if (member !== null) {
          member.reviews_count++;
        }
      }
    }
  }

  for (var id in this.members) {
    this.members[id].completed_total = completed_count;
    this.members[id].reviews_total = reviews_total;
  }
};

Sprints.prototype.find_member = function (id) {
  if (this.members.hasOwnProperty(id)) {
    return this.members[id];
  }

  return null;
};

Sprints.prototype.num_members = function () {
  var cnt = 0;

  for (var id in this.members) {
    if (this.members.hasOwnProperty(id)) {
      cnt++;
    }
  }

  return cnt;
};

Sprints.prototype.error = function (code) {
  // Does the error already exist?
  for (var i = 0; i < this.errors.length; i++) {
    var error = this.errors[i];

    if (error.code === code) {
      return;
    }
  }

  switch (code) {
    case 'e001':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Design'"
      });
      break;

    case 'e002':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Risks'"
      });
      break;

    case 'e003':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Meetings'"
      });
      break;

    case 'e004':
      this.errors.push({
        code: code,
        msg: "There is no list named 'To Do'"
      });
      break;

    case 'e005':
      this.errors.push({
        code: code,
        msg: "There is no list named 'This Sprint Active'"
      });
      break;

    case 'e006':
      this.errors.push({
        code: code,
        msg: "There is no list named 'This Sprint Completed'"
      });
      break;

    case 'e007':
      this.errors.push({
        code: code,
        msg: "There is no list named 'Completed'"
      });
      break;

    case 'e900':
      this.errors.push({
        code: code,
        msg: "Fatal errors, unable to proceed with sprints analysis"
      });
      break;
  }
};

Sprints.prototype.warning = function (code, msg) {
  if (msg !== undefined) {
    this.warnings.push({
      code: code,
      msg: msg
    });
    return;
  }

  switch (code) {
    case 'w001':
      this.warnings.push({
        code: code,
        msg: "Your lists are not in the correct order. " + "The exact order should be: Design, Risks, Meetings, To Do, " + "This Sprint Active, This Sprint Completed, " + "Completed"
      });
      break;
  }
};

/***/ }),

/***/ "./packages/trello-sprinter/src/TrelloSprinter.js":
/*!********************************************************!*\
  !*** ./packages/trello-sprinter/src/TrelloSprinter.js ***!
  \********************************************************/
/*! exports provided: TrelloSprinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloSprinter", function() { return TrelloSprinter; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./packages/trello-sprinter/src/options.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./packages/trello-sprinter/src/Util.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisconnectedView */ "./packages/trello-sprinter/src/DisconnectedView.js");
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainView */ "./packages/trello-sprinter/src/MainView.js");
/* harmony import */ var trello_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! trello-connect */ "./node_modules/trello-connect/index.js");





var TrelloSprinter = function TrelloSprinter(userOptions) {
  // Default and supplied options
  var opts = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].merge(_options__WEBPACK_IMPORTED_MODULE_0__["options"], userOptions);
  var trello = new trello_connect__WEBPACK_IMPORTED_MODULE_4__["TrelloConnect"](opts);
  _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].ready(function () {
    var elements;

    if (opts.sel.nodeType) {
      elements = [opts.sel];
    } else {
      elements = document.querySelectorAll(opts.sel);
    }

    for (var i = 0; i < elements.length; i++) {
      switch (trello.state) {
        case trello_connect__WEBPACK_IMPORTED_MODULE_4__["TrelloConnect"].DISCONNECTED:
          new _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__["DisconnectedView"](elements[i], trello, opts);
          break;

        default:
          new _MainView__WEBPACK_IMPORTED_MODULE_3__["MainView"](elements[i], trello, opts);
          break;
      }
    }
  });
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Update.js":
/*!************************************************!*\
  !*** ./packages/trello-sprinter/src/Update.js ***!
  \************************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/**
 * @file
 * Representation of a Trello update on a card
 */
var Update = function Update(board, card, data) {
  this.board = board;
  this.card = card;
  this.data = data;
  this.member = data.idMemberCreator;
  this.listBefore = data.data.listBefore.name;
  this.listAfter = data.data.listAfter.name;
  this.date = new Date(Date.parse(data.date));
};

/***/ }),

/***/ "./packages/trello-sprinter/src/Util.js":
/*!**********************************************!*\
  !*** ./packages/trello-sprinter/src/Util.js ***!
  \**********************************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
var Util = function Util() {};

Util.merge = function (obj1, obj2) {
  var obj = {};

  for (var key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      obj[key] = obj1[key];
    }
  }

  for (var _key in obj2) {
    if (obj2.hasOwnProperty(_key)) {
      obj[_key] = obj2[_key];
    }
  }

  return obj;
};
/**
 * Remove all HTML tags from a string.
 * @param str String to process
 * @returns string without tags
 */


Util.strip_tags = function (str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
};

Util.createElement = function (type, cls) {
  var e = document.createElement(type);

  if (cls !== undefined) {
    Util.addClass(e, cls);
  }

  return e;
};

Util.addClass = function (el, classNames) {
  var names = classNames.split(' ');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;
      if (el.classList) el.classList.add(name);else el.className += ' ' + name;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

Util.removeClass = function (el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

Util.ready = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};
/**
 * Convert a JavaScript Date object to a string.
 *
 * This uses formatting that is subset of the PHP date() function.
 * @param date Date object
 * @param format Optional format string (default is 'n-d-Y h:ia').
 * @returns {string}
 */


Util.formatDatetime = function (date, format) {
  function pad(i, n) {
    var s = '' + i;

    while (s.length < n) {
      s = '0' + s;
    }

    return s;
  }

  if (format === undefined) {
    format = 'n-d-Y h:ia';
  }

  var hours = date.getHours();
  var hour = hours;
  var am = 'a';

  if (hours == 0) {
    hour = 12;
  } else if (hours == 12) {
    am = 'p';
  } else if (hours > 12) {
    hour = hours - 12;
    am = 'p';
  }

  var str = '';

  for (var i = 0; i < format.length; i++) {
    switch (format.charAt(i)) {
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
};

/***/ }),

/***/ "./packages/trello-sprinter/src/options.js":
/*!*************************************************!*\
  !*** ./packages/trello-sprinter/src/options.js ***!
  \*************************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var options = {
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
  views: {
    'board': {},
    'sprint': {}
  },
  name: 'TrelloSprinter'
};

/***/ }),

/***/ "./packages/trello-sprinter/trello.scss":
/*!**********************************************!*\
  !*** ./packages/trello-sprinter/trello.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/trello-sprinter/trello.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("430e1c38", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/trello-sprinter/trello.scss", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/lib/loader.js?sourceMap!./trello.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/trello-sprinter/trello.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/trello/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/trello/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_TrelloFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/TrelloFactory */ "./vendor/cl/trello/js/TrelloFactory.js");

_js_TrelloFactory__WEBPACK_IMPORTED_MODULE_0__["TrelloFactory"].create(Site.Site);

/***/ }),

/***/ "./vendor/cl/trello/js/TrelloFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/trello/js/TrelloFactory.js ***!
  \**********************************************/
/*! exports provided: TrelloFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloFactory", function() { return TrelloFactory; });
/* harmony import */ var _TrelloSprinterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrelloSprinterView */ "./vendor/cl/trello/js/TrelloSprinterView.js");

var TrelloFactory = function TrelloFactory() {};

TrelloFactory.create = function (site) {
  site.start(function () {
    var elements = document.querySelectorAll('div.cl-trello-sprinter');

    for (var i = 0; i < elements.length; i++) {
      new _TrelloSprinterView__WEBPACK_IMPORTED_MODULE_0__["TrelloSprinterView"](site, elements[i]);
    }
  });
};

/***/ }),

/***/ "./vendor/cl/trello/js/TrelloSprinterView.js":
/*!***************************************************!*\
  !*** ./vendor/cl/trello/js/TrelloSprinterView.js ***!
  \***************************************************/
/*! exports provided: TrelloSprinterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloSprinterView", function() { return TrelloSprinterView; });
/* harmony import */ var trello_sprinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trello-sprinter */ "./packages/trello-sprinter/index.js");

var TrelloSprinterView = function TrelloSprinterView(site, element) {
  var json = JSON.parse(element.innerText);
  element.innerText = '';
  element.style.display = 'block';
  var trello = new trello_sprinter__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sel: element,
    key: json.key,
    board: json.team,
    views: json.views
  });
};

/***/ })

},[["./vendor/cl/trello/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci90cmVsbG8uc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLWNvbm5lY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9wbHVzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9EaXNjb25uZWN0ZWRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludE1lbWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50VGFibGVWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVHJlbGxvU3ByaW50ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VdGlsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/NjkwMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJUcmVsbG9TcHJpbnRlciIsIkJvYXJkIiwiZGF0YSIsImlkIiwibmFtZSIsImxpc3RzIiwibWVtYmVycyIsImZpbmRfY2FyZCIsImkiLCJsZW5ndGgiLCJjYXJkIiwiYWRkX21lbWJlciIsIm1lbWJlciIsImZldGNoIiwidHJlbGxvIiwibXNnIiwic3VjY2VzcyIsImZhaWx1cmUiLCJpbm5lclRleHQiLCJhY3RpdmUiLCJib2FyZCIsImFzeW5jX3N0YXJ0IiwiZ2V0IiwiYm9hcmREYXRhIiwidG9Mb3dlckNhc2UiLCJjbG9zZWQiLCJmZXRjaF9tZW1iZXJzaGlwIiwiZmV0Y2hfbGlzdHMiLCJhc3luY19lbmQiLCJmb3JFYWNoIiwibWVtYmVyRGF0YSIsIk1lbWJlciIsImxpc3REYXRhIiwibGlzdCIsIkxpc3QiLCJwdXNoIiwiZmV0Y2hfY2FyZHMiLCJ1cmxzIiwiY2FyZHNEYXRhIiwiY2FyZERhdGEiLCJDYXJkIiwiYWRkX2NhcmQiLCJmZXRjaF9hY3Rpb25zIiwiYWN0aW9uIiwidHlwZSIsImNvbW1lbnQiLCJDb21tZW50IiwiY29tbWVudHMiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiVXBkYXRlIiwidXBkYXRlcyIsImNhcmRzIiwic29ydF91cGRhdGVzIiwicHJvdG90eXBlIiwiZmluZF9saXN0IiwiQm9hcmRWaWV3IiwiZGl2IiwiRGF0YVZpZXciLCJjYWxsIiwicHJlc2VudCIsInZpZXciLCJVdGlsIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicHJlc2VudExpc3QiLCJoZWFkZXIiLCJleHBhbmRlciIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb3VudCIsImNvdW50X21lbWJlcnMiLCJjIiwiaGFzT3duUHJvcGVydHkiLCJjbnQiLCJjb3VudEVsIiwiaW5uZXJIVE1MIiwicHJlc2VudENhcmQiLCJkYXRlIiwiZm9ybWF0RGF0ZXRpbWUiLCJjcmVhdGVkIiwiY2FyZERpdiIsIm1lbWJlcnNQIiwiZGVzYyIsInByZXNlbnRDb21tZW50cyIsInByZXNlbnRVcGRhdGVzIiwiY29tbWVudERpdiIsIm1lbWJlck5hbWUiLCJ1bmRlZmluZWQiLCJoNSIsInRleHREaXYiLCJ0ZXh0IiwidXBkYXRlRGl2IiwicCIsImRvY3VtZW50IiwibGlzdEJlZm9yZSIsImxpc3RBZnRlciIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidGhhdCIsInN0cmlwX3RhZ3MiLCJyZXBsYWNlIiwiRGF0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaWRNZW1iZXJzIiwic29ydCIsImEiLCJiIiwiZmluYWxfdGltZSIsImlkTWVtYmVyQ3JlYXRvciIsInBhcnNlIiwiRGlzY29ubmVjdGVkVmlldyIsImVsZW1lbnQiLCJvcHRpb25zIiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJhdXRob3JpemUiLCJjYXJkc19ieV9pZCIsIk1haW5WaWV3IiwiZGlzY29ubmVjdCIsInBTdGF0dXMiLCJwTXNnIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmlld3MiLCJ2IiwiU3ByaW50VmlldyIsInNwcmludCIsIlNwcmludFRhYmxlVmlldyIsInNwcmludFRhYmxlIiwiZnVsbE5hbWUiLCJTcHJpbnQiLCJzcHJpbnRzIiwic3RhcnQiLCJlbmQiLCJzdGFydF9tZWV0aW5nIiwiZW5kX21lZXRpbmciLCJjb21wbGV0ZWQiLCJlbmRfdGltZSIsImdldFRpbWUiLCJzcHJpbnRfdGltZV9zbG9wIiwiU3ByaW50TWVtYmVyIiwibWVldGluZ3NfY291bnQiLCJtZWV0aW5nc19hdHRlbmRlZCIsImNvbXBsZXRlZF9jb3VudCIsImNvbXBsZXRlZF90b3RhbCIsInJldmlld3NfY291bnQiLCJyZXZpZXdzX3RvdGFsIiwibWVldGluZ3NfcGVyY2VudGFnZSIsIm1lZXRpbmdzX3Nsb3AiLCJwZXIiLCJ0b0ZpeGVkIiwiY29tcGxldGVkX2ZhY3RvciIsInRlYW1TaXplIiwiZmFjdG9yIiwicmV2aWV3aW5nX2ZhY3RvciIsImFkZEhlYWRpbmdzIiwidGFibGUiLCJjbGFzcyIsIlNwcmludHMiLCJudW1fbWVtYmVycyIsInRhYmxlSGVhZGluZyIsInJvd0hUTUwiLCJpdGVtIiwiaXNOYU4iLCJ0ciIsInRyMWNsYXNzIiwidGFibGVfaGVhZGluZ3MiLCJib2FyZF92aWV3IiwiaDIiLCJwcmVzZW50X2Vycm9ycyIsInByZXNlbnRfd2FybmluZ3MiLCJlcnJvcnMiLCJwcmVzZW50X3NwcmludHMiLCJwcmVzZW50X21lbWJlcnMiLCJlcnJvciIsImNvZGUiLCJ3YXJuaW5ncyIsIndhcm5pbmciLCJzIiwicHJlc2VudF9zcHJpbnQiLCJudW0iLCJmbURhdGUiLCJ0b0RhdGUiLCJjb3VudHMiLCJ0b3RhbENvbXBsZXRlZCIsImNvbXBsZXRpb25GYWN0b3IiLCJwQ29tcGxldGVkIiwicE1lbWJlcnMiLCJtZW1iZXJzRGl2IiwicHJlc2VudF9tZW1iZXIiLCJwcmVzZW50X2luZm8iLCJtZW1iZXJEaXYiLCJtZWV0aW5ncyIsImluZm9EaXYiLCJkZXNpZ24iLCJyaXNrcyIsInRvZG8iLCJzcHJpbnRfYWN0aXZlIiwic3ByaW50X2NvbXBsZXRlZCIsImZpbmRfbGlzdHMiLCJvcmRlcl90ZXN0IiwibWVldGluZ19hdHRlbmRhbmNlIiwiY3JlYXRlX3NwcmludHMiLCJzb3J0X2NvbXBsZXRlZCIsImNvbXBsZXRlZF9zdGF0aXN0aWNzIiwib3JkZXIiLCJmaW5kX21lbWJlciIsInNsaWNlIiwiYXQiLCJidCIsImluZGV4T2YiLCJqIiwidXNlck9wdGlvbnMiLCJvcHRzIiwibWVyZ2UiLCJUcmVsbG9Db25uZWN0IiwicmVhZHkiLCJlbGVtZW50cyIsInNlbCIsIm5vZGVUeXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXRlIiwiRElTQ09OTkVDVEVEIiwib2JqMSIsIm9iajIiLCJvYmoiLCJrZXkiLCJzdHIiLCJjbHMiLCJlIiwiZWwiLCJjbGFzc05hbWVzIiwibmFtZXMiLCJzcGxpdCIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsInJlbW92ZSIsIlJlZ0V4cCIsImpvaW4iLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsImZvcm1hdCIsInBhZCIsIm4iLCJob3VycyIsImdldEhvdXJzIiwiaG91ciIsImFtIiwiY2hhckF0IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInZlcnNpb24iLCJsb2NhbFByZWZpeCIsIlRyZWxsb0ZhY3RvcnkiLCJTaXRlIiwic2l0ZSIsIlRyZWxsb1NwcmludGVyVmlldyIsImpzb24iLCJKU09OIiwidGVhbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLGFBQWEsbUJBQU8sQ0FBQyxvR0FBaUQ7QUFDdEUsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx3QkFBd0IsY0FBYyxHQUFHLDRCQUE0Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixpQkFBaUIsbUJBQW1CLGNBQWMsR0FBRyx5Q0FBeUMsdUJBQXVCLHNCQUFzQix3QkFBd0IsaUJBQWlCLEdBQUcsc0NBQXNDLHVCQUF1Qix1QkFBdUIscUJBQXFCLHNCQUFzQix3QkFBd0IsaUJBQWlCLEdBQUcsa0NBQWtDLHVCQUF1QixHQUFHLHlDQUF5QyxzQkFBc0IsaUJBQWlCLEdBQUcsNENBQTRDLGdDQUFnQyxjQUFjLGtDQUFrQyxHQUFHLHNEQUFzRCx3QkFBd0IsdUJBQXVCLHFCQUFxQixpQkFBaUIsd0JBQXdCLEdBQUcsbUVBQW1FLHVCQUF1QixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLHNDQUFzQyxxQ0FBcUMsbUJBQU8sQ0FBQywrREFBZ0IsUUFBUSxHQUFHLHVDQUF1QyxxQ0FBcUMsbUJBQU8sQ0FBQyxpRUFBaUIsUUFBUSxHQUFHLDBFQUEwRSxpQ0FBaUMscUNBQXFDLCtCQUErQixvQkFBb0IsR0FBRywyQ0FBMkMsdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLG9CQUFvQix1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VixFQUFhQSxDQUFDLEdBQUN5TixRQUFRLENBQUN4TixNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNwQyxVQUFJcVEsc0VBQUosQ0FBdUJELElBQXZCLEVBQTZCM0MsUUFBUSxDQUFDek4sQ0FBRCxDQUFyQztBQUNBO0FBQ0QsR0FMRDtBQU1BLENBUkQsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNcVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFTRCxJQUFULEVBQWVySixPQUFmLEVBQXdCO0FBQ3pELE1BQU11SixJQUFJLEdBQUdDLElBQUksQ0FBQzFKLEtBQUwsQ0FBV0UsT0FBTyxDQUFDckcsU0FBbkIsQ0FBYjtBQUNBcUcsU0FBTyxDQUFDckcsU0FBUixHQUFvQixFQUFwQjtBQUNBcUcsU0FBTyxDQUFDbEQsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUEsTUFBSXhELE1BQU0sR0FBRyxJQUFJZCx1REFBSixDQUFtQjtBQUMvQmtPLE9BQUcsRUFBRTNHLE9BRDBCO0FBRS9CbUgsT0FBRyxFQUFFb0MsSUFBSSxDQUFDcEMsR0FGcUI7QUFHL0J0TixTQUFLLEVBQUUwUCxJQUFJLENBQUNFLElBSG1CO0FBSS9CN0ksU0FBSyxFQUFFMkksSUFBSSxDQUFDM0k7QUFKbUIsR0FBbkIsQ0FBYjtBQU1BLENBWE0sQyIsImZpbGUiOiJ0cmVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUcmVsbG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHJlbGxvXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYudHJlbGxvLXNwcmludGVyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1zdGF0dXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIHAuY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IGgzIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuMjVlbSAyMHB4O1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyBzcGFuLmRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBwLnRyZWxsby1jb21wbGV0ZWQtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogZGVlcHNreWJsdWU7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcvcGx1cy5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy9taW51cy5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cyxcXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDZwdDtcXG4gIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWV4cGFuZCxcXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tZXJyb3JzIHtcXG4gIC1tb3otYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tY291bnQge1xcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQge1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWQwZmQ7XFxuICBtYXJnaW46IDAuNWVtIDAgMCAwO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCAudHJlbGxvLWNhcmQtbWVtYmVycyB7XFxuICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHAge1xcbiAgbWFyZ2luOiAwIDAgMC4yNWVtIDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMge1xcbiAgbWFyZ2luOiAwIDJlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgcCB7XFxuICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMge1xcbiAgbWFyZ2luOiAxZW0gMmVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi5saXN0IHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMge1xcbiAgYmFja2dyb3VuZDogI2M0MTQyNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyB7XFxuICBiYWNrZ3JvdW5kOiAjZmY4MGRmO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8tbWVtYmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xcbiAgbWFyZ2luOiAxZW0gM2VtIDZwdCAzZW07XFxuICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBwLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgcCxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgcCB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBzcGFuLnRyZWxsby1jb2RlLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mgc3Bhbi50cmVsbG8tY29kZSxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgc3Bhbi50cmVsbG8tY29kZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDQsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoMyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGg0LFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBoMyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGRpdi50cmVsbG8taW5mbyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvIHAsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8gcCxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHAge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludC10YWJsZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNZXJnZSB0d28gSmF2YXNjcmlwdCBvYmplY3RzIGludG8gYSBzaW5nbGUgcmVzdWx0LlxyXG4gKiBAcGFyYW0gb2JqMSBGaXJzdCBvYmplY3RcclxuICogQHBhcmFtIG9iajIgU2Vjb25kIG9iamVjdC4gU2Vjb25kIG9iamVjdCB2YWx1ZXMgdGFrZSBwcmVjZWRlbmNlLlxyXG4gKi9cclxuY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLy8gTG9jYWwgc3RvcmFnZSBhZGRyZXNzIGZvciBzdG9yaW5nIHRoZSB0b2tlbiB3aGlsZSBjb25uZWN0ZWRcclxuY29uc3QgVG9rZW5TdG9yYWdlID0gJ19uOXM1UnlnOHdhJztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9Db25uZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0b3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuXHJcblx0bGV0IHRva2VuID0gJyc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFRpbGwgd2Uga25vdyBvdGhlcndpc2VcclxuXHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gU2VlIGlmIHRoZXJlIGlzIGEgdG9rZW4gaW4gdGhlIGN1cnJlbnQgVVJMXHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0Y29uc3QgcmUgPSAvI3Rva2VuPSguKikkLztcclxuXHRcdGNvbnN0IG1hdGNoZXMgPSBocmVmLm1hdGNoKHJlKTtcclxuXHRcdGlmKG1hdGNoZXMgIT09IG51bGwgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHRva2VuID0gbWF0Y2hlc1sxXTtcclxuXHJcblx0XHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIElzIHRoZXJlIGEgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZT9cclxuXHRcdC8vXHJcblx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlLCB0b2tlbik7XHJcblx0XHRpZih0b2tlbiAhPT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkNPTk5FQ1RFRDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEF1dGhvcml6ZSB3aXRoIFRyZWxsb1xyXG5cdCAqXHJcblx0ICogUmVkaXJlY3RzIHRvIHRoZSBUcmVsbG8gYXV0aG9yaXphdGlvbiBlbmRwb2ludCwgd2hpY2ggcmVkaXJlY3RzIGJhY2tcclxuXHQgKiB0byB0aGlzIHBhZ2UgYWZ0ZXIgYXV0aG9yaXphdGlvbiB3aXRoIHRoZSB0b2tlbiBpbiB0aGUgVVJMLlxyXG5cdCAqL1xyXG5cdHRoaXMuYXV0aG9yaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCByZXR1cm5fdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdGNvbnN0IHVybCA9IGAke29wdGlvbnMuYXV0aEVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vYXV0aG9yaXplP2V4cGlyYXRpb249bmV2ZXImbmFtZT0ke29wdGlvbnMubmFtZX0mYCArXHJcblx0XHRcdGBjYWxsYmFja19tZXRob2Q9ZnJhZ21lbnQmc2NvcGU9cmVhZCZyZXNwb25zZV90eXBlPXRva2VuJmtleT0ke29wdGlvbnMua2V5fSZyZXR1cm5fdXJsPSR7cmV0dXJuX3VybH1gO1xyXG5cdFx0d2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzY29ubmVjdCBmcm9tIFRyZWxsby5cclxuXHQgKlxyXG5cdCAqIFRoaXMgZm9yZ2V0cyB0aGUgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZS5cclxuXHQgKlxyXG5cdCAqL1xyXG5cdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UpO1xyXG5cdFx0dG9rZW4gPSAnJztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm0gYSBHRVQgcXVlcnkgZm9yIFRyZWxsb1xyXG5cdCAqIEBwYXJhbSB1cmwgVGhlIGJvYXJkIFVSTCBhZnRlciB0aGUgdmVyc2lvbiwgbGlrZSBcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIlxyXG5cdCAqIEBwYXJhbSBzdWNjZXNzIEZ1bmN0aW9uIGNhbGxlZCBvbiBzdWNjZXNzIHdpdGggZGF0YSBhcmd1bWVudFxyXG5cdCAqIEBwYXJhbSBmYWlsdXJlIEZ1bmN0aW9uIGNhbGxlZCBvbiBmYWlsdXJlIHdpdGggZGF0YSBhcmd1bWVudFxyXG5cdCAqIEBwYXJhbSBtc2cgT3B0aW9uYWwgZWxlbWVudCB0byBwdXQgcmF0ZSBsaW1pdGluZyBtZXNzYWdlIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKHVybCwgc3VjY2VzcywgZmFpbHVyZSwgbXNnKSB7XHJcblxyXG5cdFx0bGV0IHRyaWVzID0gMTtcclxuXHJcblx0XHRsZXQgbWF4dHJpZXMgPSA1OyAgLy8gTWF4aW11bSBudW1iZXIgb2YgdHJpZXNcclxuXHRcdGxldCBiYWNrb2ZmID0gMTA7ICAgLy8gc2Vjb25kc1xyXG5cdFx0bGV0IGJhY2tvZmZJbmNyZWFzZSA9IDEuMjU7IC8vIEFtb3VudCB0byBpbmNyZWFzZSBiYWNrb2ZmIGFmdGVyIGVhY2ggdHJ5XHJcblxyXG5cdFx0ZnVuY3Rpb24gdHJlbGxvR2V0KCkge1xyXG5cdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0XHRyZXF1ZXN0Lm9wZW4oJ0dFVCcsIGAke29wdGlvbnMuYXBpRW5kcG9pbnR9LyR7b3B0aW9ucy52ZXJzaW9ufS8ke3VybH0ma2V5PSR7b3B0aW9ucy5rZXl9JnRva2VuPSR7dG9rZW59YCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuXHRcdFx0XHRcdC8vIFN1Y2Nlc3MhXHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0XHRzdWNjZXNzKGRhdGEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3JcclxuXHRcdFx0XHRcdGZhaWx1cmUoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKCtyZXF1ZXN0LnN0YXR1cyA9PT0gNDI5ICYmIHRyaWVzIDwgbWF4dHJpZXMpIHtcclxuXHRcdFx0XHRcdHRyaWVzKys7XHJcblx0XHRcdFx0XHRpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRtc2cuaW5uZXJUZXh0ID0gXCJSYXRlIGxpbWl0ZWQsIGF0dGVtcHQgXCIgKyB0cmllcyArIFwiIGFmdGVyIFwiICtcclxuXHRcdFx0XHRcdFx0XHRiYWNrb2ZmLnRvRml4ZWQoMCkgKyBcIiBzZWNvbmRzXCI7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJlbGxvR2V0KCk7XHJcblx0XHRcdFx0XHRcdH0sIGJhY2tvZmYgKiAxMDAwKTtcclxuXHRcdFx0XHRcdFx0YmFja29mZiAqPSBiYWNrb2ZmSW5jcmVhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZhaWx1cmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXF1ZXN0LnNlbmQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0cmVsbG9HZXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQgPSAnRCc7XHJcblRyZWxsb0Nvbm5lY3QuQ09OTkVDVEVEID0gJ0MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvQ29ubmVjdDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBWjFKUkVGVWVOcWtrcjFPQWtFUXgrZnVoa1Bna0s4Z2hZWllHUHpvN0dqRnhNSmVRN1RRemxqaEd4aHM5QTJNaFkwVjJtdU1pZm9BSnBhUUdCK0F3ME5QanVPQSszSjM0ZWc4TUU3eVQyWTMrL3Z2N094d3J1dkNmd0wzVCtyQTgzd01FY3RrWFNUS2pHRmtvb3BsV2NlTzQzeWo0OWhBVkY3TkJVckZqV2xJeHdWZitrTzFNNVdIVnVtbGF0TGxFYS9yT2hBVnQ5Y2prSkJjSU02K29tZTJDbUhHVUJZMVRhTk9tVlNNWndjbWlWUk1BTUt4cDJLNzNXS2I1RDBURzlER2V4enFlb2NsdG0wemVXR2FKaTBUT2gyRDViWTlNQmNFQkVtU3dPT3cyKzJPS3FESzd6ejUzbjV6bG9OZXJ3Y2VoNWJsanNveWpCNWtzd1gvZjhjRytYWUJQQTQ1RGxsaUdIMVNWaCt1VDhPK0Jvb3lSUXc0OERneVB5R1c5UHNPQkFJaXRGb2RYd05SREE3QkFZZWlHQjAyUjZUTGlVZlk0ekFZWkltc3FId21uUkFuZ3VXbUNZU1QyY1c2OGdxelM3dHpYeHJrRitkREVJMGdhOUp2VWxTQXE5czIxSnY4WmUxeDc1NGpKc2xJUExld3NuWnhLQ1dYTndHNG1URmoxR2gvMXU2cXp3Zm51dnIyVGcxb042Si9hc0FnNkdScFB3SU1BRmNBemF3VnpRUjRBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFkdEpSRUZVZU5xa1V6c3ZCRkVVUGpOelpoWTdhejNDRmg0UmtmV3FOS0pGb2xEb3lJYUNUbFIwU3FHaEVwMG9OS3FsRWdrUkNYNkFSSWRFWkxXV3dkclpzWTk1dWZldU8zWnNzZ29uK1hMUDZ6dHo3amwzQk5kMTRUK0NjMnRQSUlwaUdCRlhpUjBqaVB6QlNSTEVMY3RhY1J6bkF4M0hCb0xWZ2FpOEdCdXJoYVk2cVNMN0pXVkg0bWZweGF0Yms1cExvbUVZUUJDYkdnMUN2ZW9DcVZ3Uk5HZHlwSVp4S0JkMVhhZVZJbzFoa1NXVXlzVFNEVHVQdHZwOS9zYXdCSVRIcm9xWlRKbzV5WDNLQ3ZEWWJ6OGRQSStoWVh3eXhiWnRCaTZtYVFLUEpSS1BKRllzSWtrSXFxcDZNY3psY2w0SEZFUFRGMldEbTF5KzkvU0RqU2prODNuZ1BMUXMxMnNybTgxRGUvdUlsNXhJbkxPenMzUDBaKy80VE5ZdUFlZWhJQ0JUc3RrQ2Fhc0ErK3MxWHZKZ3JCamJYLzlacmFaVmtRSUNjQjU1UDlWTUtSUWNrR1VGMHVuUGtxOFZZNlUrUlFuNFlxZ29vZS9oS05UMDNiMnRiWkNkc2l5VXpZWHpNQkJnU2xKTGlaR21lc1dYZExncGY2L1Q5TC9sVnhNSUw4aytiR2pYME5JejAvcXV3MUIzUnpXRWdzaUdWQndVTUhDYlFrc0I3QjFuNE9sVjNMMDduejJsdlRVRTY2SmRmY003QzJwRDd6aUEwRno1WDNLZk0yOTNKN2VYODl0RzZ2NkJGcURUQ0pVTjRHK2hMMHYvRW1BQW9OWGxHOTd2bkhvQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCAnLi90cmVsbG8uc2Nzcyc7XHJcblxyXG5pbXBvcnQge1RyZWxsb1NwcmludGVyfSBmcm9tICcuL3NyYy9UcmVsbG9TcHJpbnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmVsbG9TcHJpbnRlcjtcclxuIiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gQm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IHtVcGRhdGV9IGZyb20gJy4vVXBkYXRlJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuXHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHR0aGlzLmxpc3RzID0gW107XHJcblx0dGhpcy5tZW1iZXJzID0ge307XHJcblxyXG5cdHRoaXMuZmluZF9jYXJkICA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjYXJkID0gdGhpcy5saXN0c1tpXS5maW5kX2NhcmQoaWQpO1xyXG5cdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNhcmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRoaXMuYWRkX21lbWJlciA9IGZ1bmN0aW9uKG1lbWJlcikge1xyXG5cdFx0dGhpcy5tZW1iZXJzW21lbWJlci5pZF0gPSBtZW1iZXI7XHJcblx0fVxyXG59XHJcblxyXG5Cb2FyZC5mZXRjaCA9IGZ1bmN0aW9uKHRyZWxsbywgbmFtZSwgbXNnLCBzdWNjZXNzLCBmYWlsdXJlKSB7XHJcblx0bXNnLmlubmVyVGV4dCA9ICdGZXRjaGluZyBib2FyZCAnICsgbmFtZTtcclxuXHJcblx0Ly8vIEtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IG9wZW4gYXN5bmMgY2FsbHMgdGhlcmUgYXJlIHJpZ2h0IG5vd1xyXG5cdGxldCBhY3RpdmUgPSAwO1xyXG5cclxuXHQvLyBXaWxsIGJlIHNldCB0byBwb2ludCB0byBhIG5ldyBCb2FyZCBvYmplY3RcclxuXHRsZXQgYm9hcmQgPSBudWxsO1xyXG5cclxuXHRhc3luY19zdGFydCgpO1xyXG5cdHRyZWxsby5nZXQoXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCIsXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgIGkrKykge1xyXG5cdFx0XHRcdHZhciBib2FyZERhdGEgPSBkYXRhW2ldO1xyXG5cdFx0XHRcdGlmKGJvYXJkRGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0Ly8gV2UgaGF2ZSBmb3VuZCB0aGUgYm9hcmQgKGlmIG5vdCBjbG9zZWQpXHJcblx0XHRcdFx0XHRpZighYm9hcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgdGhlIGJvYXJkIG9iamVjdFxyXG5cdFx0XHRcdFx0XHRib2FyZCA9IG5ldyBCb2FyZChib2FyZERhdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRmV0Y2ggdGhlIG1lbWJlcnNoaXBcclxuXHRcdFx0XHRcdFx0ZmV0Y2hfbWVtYmVyc2hpcChib2FyZCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbGlzdHMgZm9yIHRoZSBib2FyZFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9saXN0cyhib2FyZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGJvYXJkID09PSBudWxsKSB7XHJcblx0XHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmaW5kIFRyZWxsbyBib2FyZCBcIiArIG5hbWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0KGRhdGEpID0+IHtcclxuXHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gYm9hcmRzXCIpXHJcblx0XHR9LFxyXG5cdFx0bXNnXHJcblx0KVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaCB0aGUgbWVtYmVyc2hpcCBvZiB0aGUgYm9hcmQuXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHRvIGZldGNoIGZvclxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGZldGNoX21lbWJlcnNoaXAoYm9hcmQpIHtcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkL1wiICsgYm9hcmQuaWQgKyBcIi9tZW1iZXJzP2ZpZWxkcz1hbGxcIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihtZW1iZXJEYXRhKSB7XHJcblx0XHRcdFx0XHR2YXIgbWVtYmVyID0gbmV3IE1lbWJlcihib2FyZCwgbWVtYmVyRGF0YSk7XHJcblx0XHRcdFx0XHRib2FyZC5hZGRfbWVtYmVyKG1lbWJlcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbWVtYmVyc2hpcFwiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9saXN0cyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgbGlzdHMgZm9yIFwiICsgbmFtZTtcclxuXHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZHMvXCIgKyBib2FyZC5pZCArIFwiL2xpc3RzP2ZpbHRlcj1vcGVuXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24obGlzdERhdGEpIHtcclxuXHRcdFx0XHRcdGlmKCFsaXN0RGF0YS5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxpc3QgPSBuZXcgTGlzdChib2FyZCwgbGlzdERhdGEpO1xyXG5cdFx0XHRcdFx0XHRib2FyZC5saXN0cy5wdXNoKGxpc3QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRmZXRjaF9jYXJkcyhib2FyZCk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbGlzdHNcIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaCBhbGwgY2FyZHMgYXMgYSBzaW5nbGUgYmF0Y2ggb3BlcmF0aW9uLlxyXG5cdCAqIEBwYXJhbSBib2FyZCBCb2FyZCB3ZSBhcmUgZmV0Y2hpbmcgZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfY2FyZHMoYm9hcmQpIHtcclxuXHRcdG1zZy5pbm5lclRleHQgPSBcIkZldGNoaW5nIGNhcmRzXCI7XHJcblxyXG5cdFx0Ly8gQ29sbGVjdCB1cCBhbGwgVVJMcyBmb3IgYWxsIG9mIHRoZSBsaXN0c1xyXG5cdFx0dmFyIHVybHMgPSAnJztcclxuXHRcdGZvcih2YXIgaT0wOyBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdGlmKHVybHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHVybHMgKz0gJywnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVybHMgKz0gXCIvbGlzdHMvXCIgKyBsaXN0LmlkICsgXCIvY2FyZHMvb3BlblwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEdldCBnZXQgaXRcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JhdGNoP3VybHM9XCIgKyB1cmxzLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Ly8gTG9vcCBvdmVyIHRoZSByZXN1bHQgZm9yIGVhY2ggcHJvdmlkZWQgVVJMXHJcblx0XHRcdFx0Zm9yKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGggJiYgaTxib2FyZC5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGxpc3QgPSBib2FyZC5saXN0c1tpXTtcclxuXHRcdFx0XHRcdHZhciBjYXJkc0RhdGEgPSBkYXRhW2ldWzIwMF07XHJcblxyXG5cdFx0XHRcdFx0Y2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oY2FyZERhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYoIWNhcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjYXJkID0gbmV3IENhcmQoYm9hcmQsIGxpc3QsIGNhcmREYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZldGNoX2FjdGlvbnMoYm9hcmQpO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmRzXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGZldGNoX2FjdGlvbnMoYm9hcmQpIHtcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkL1wiICsgYm9hcmQuaWQgKyBcIi9hY3Rpb25zP2ZpbHRlcj1jb21tZW50Q2FyZCx1cGRhdGVDYXJkOmlkTGlzdCZsaW1pdD0xMDAwXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcblx0XHRcdFx0XHRpZighYWN0aW9uLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRpZihhY3Rpb24udHlwZSA9PT0gXCJjb21tZW50Q2FyZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcmQgPSBib2FyZC5maW5kX2NhcmQoYWN0aW9uLmRhdGEuY2FyZC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudChib2FyZCwgY2FyZCwgYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcmQuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjYXJkIG5vdCBmb3VuZFwiKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoYWN0aW9uLnR5cGUgPT09ICd1cGRhdGVDYXJkJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBuZXcgVXBkYXRlKGJvYXJkLCBjYXJkLCBhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FyZC51cGRhdGVzLnB1c2godXBkYXRlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGJvYXJkLmxpc3RzLmZvckVhY2goZnVuY3Rpb24obGlzdCkge1xyXG5cdFx0XHRcdFx0bGlzdC5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuXHRcdFx0XHRcdFx0Y2FyZC5zb3J0X3VwZGF0ZXMoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gY2FyZCBpbmZvcm1hdGlvblwiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBhc3luY19zdGFydCgpIHtcclxuXHRcdGFjdGl2ZSsrO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXN5bmNfZW5kKCkge1xyXG5cdFx0YWN0aXZlLS07XHJcblx0XHRpZihhY3RpdmUgPT09IDApIHtcclxuXHRcdFx0c3VjY2Vzcyhib2FyZCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5Cb2FyZC5wcm90b3R5cGUuZmluZF9saXN0ID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBsaXN0ID0gdGhpcy5saXN0c1tpXTtcclxuXHRcdGlmKGxpc3QubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XHJcblx0XHRcdHJldHVybiBsaXN0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogU3RhbmRhcmQgVHJlbGxvIGJvYXJkIHZpZXdcclxuICovXHJcbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9hcmRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgZm9yKGxldCBsaXN0IG9mIGJvYXJkLmxpc3RzKSB7XHJcblxyXG5cdCAgICB9XHJcblx0ICAgIGJvYXJkLmxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcclxuXHRcdCAgICBwcmVzZW50TGlzdCh2aWV3LCBsaXN0KTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJlc2VudExpc3QgPSAodmlldywgbGlzdCkgPT4ge1xyXG4gICAgXHRjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XHJcbiAgICBcdGhlYWRlci5pbm5lclRleHQgPSBsaXN0Lm5hbWU7XHJcbiAgICBcdHZpZXcuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBcdGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xyXG4gICAgXHRleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGV4cGFuZGVyKTtcclxuXHJcbiAgICBcdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgXHRcdGlmKGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBcdFx0XHRVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcbiAgICBcdFx0XHRVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0ICAgIH0gZWxzZSB7XHJcbiAgICBcdFx0XHRleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuICAgIFx0bGV0IGNvdW50ID0gbGlzdC5jb3VudF9tZW1iZXJzKCk7XHJcblxyXG5cdCAgICBsZXQgbWVtYmVycyA9ICc8ZW0+Q2FyZHM6PC9lbT5bJyArIGxpc3QuY2FyZHMubGVuZ3RoICsgJ10gJztcclxuXHQgICAgZm9yKHZhciBjIGluIGNvdW50KSB7XHJcblx0XHQgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkoYykpIHtcclxuXHRcdFx0ICAgIG1lbWJlcnMgKz0gY291bnRbY10ubWVtYmVyLm5hbWUgKyAnOlsnICsgY291bnRbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29uc3QgY291bnRFbCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQoY291bnRFbCk7XHJcblx0ICAgIGNvdW50RWwuaW5uZXJIVE1MID0gbWVtYmVycztcclxuXHJcblx0ICAgIGZvcihsZXQgY2FyZCBvZiBsaXN0LmNhcmRzKSB7XHJcblx0ICAgIFx0cHJlc2VudENhcmQoZXhwYW5kZXIsIGNhcmQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRDYXJkID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBIZWFkaW5nXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShjYXJkLmNyZWF0ZWQpO1xyXG5cclxuXHRcdGxldCBjYXJkRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWNhcmQnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcclxuXHRcdGNhcmREaXYuaW5uZXJIVE1MID0gYDxoND48c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke2NhcmQubmFtZX08L2g0PmA7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBNZW1iZXJzXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBtZW1iZXJzID0gJyc7XHJcblx0ICAgIGZvcihsZXQgaWQgb2YgY2FyZC5tZW1iZXJzKSB7XHJcblx0XHQgICAgdmFyIG1lbWJlciA9IGNhcmQuYm9hcmQubWVtYmVyc1tpZF07XHJcblx0XHQgICAgaWYobWVtYmVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCAgICBtZW1iZXJzICs9ICcgLyAnO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBtZW1iZXJzICs9ICc8c3Bhbj4nICsgbWVtYmVyLm5hbWUgKyAnPC9zcGFuPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCBtZW1iZXJzUCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY2FyZC1tZW1iZXJzJylcclxuXHQgICAgY2FyZERpdi5hcHBlbmRDaGlsZChtZW1iZXJzUCk7XHJcblx0ICAgIG1lbWJlcnNQLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gRGVzY3JpcHRpb25cclxuXHQgICAgLy9cclxuXHQgICAgbGV0IGRlc2MgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZGVzY3JpcHRpb24nKTtcclxuXHQgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkZXNjKTtcclxuXHQgICAgZGVzYy5pbm5lckhUTUwgPSBjYXJkLmRlc2M7XHJcblxyXG5cdCAgICBwcmVzZW50Q29tbWVudHMoY2FyZERpdiwgY2FyZCk7XHJcblx0ICAgIHByZXNlbnRVcGRhdGVzKGNhcmREaXYsIGNhcmQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmVzZW50Q2FyZCA9IHByZXNlbnRDYXJkO1xyXG5cclxuICAgIGxldCBwcmVzZW50Q29tbWVudHMgPSAoZGl2LCBjYXJkKSA9PiB7XHJcblx0ICAgIGlmKGNhcmQuY29tbWVudHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgY29tbWVudERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jb21tZW50cycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWVudERpdik7XHJcblxyXG5cdFx0Zm9yKGxldCBjb21tZW50IG9mIGNhcmQuY29tbWVudHMpIHtcclxuXHRcdFx0bGV0IG1lbWJlciA9IGNhcmQuYm9hcmQubWVtYmVyc1tjb21tZW50Lm1lbWJlcl07XHJcblx0XHRcdGxldCBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcblx0XHRcdGxldCBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShjb21tZW50LmRhdGUpO1xyXG5cclxuXHRcdFx0bGV0IGg1ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG5cdFx0XHRjb21tZW50RGl2LmFwcGVuZENoaWxkKGg1KTtcclxuXHRcdFx0aDUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidHJlbGxvLWRhdGVcIj4ke2RhdGV9PC9zcGFuPiR7bWVtYmVyTmFtZX1gO1xyXG5cclxuXHRcdFx0bGV0IHRleHREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRjb21tZW50RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG5cdFx0XHR0ZXh0RGl2LmlubmVySFRNTCA9IGNvbW1lbnQudGV4dDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudFVwZGF0ZXMgPSAoZGl2LCBjYXJkKSA9PiB7XHJcblx0ICAgIGlmKGNhcmQudXBkYXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCB1cGRhdGVEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdXBkYXRlcycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQodXBkYXRlRGl2KTtcclxuXHJcblx0ICAgIGZvcihsZXQgdXBkYXRlIG9mIGNhcmQudXBkYXRlcykge1xyXG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbdXBkYXRlLm1lbWJlcl07XHJcblx0XHQgICAgdmFyIG1lbWJlck5hbWUgPSBtZW1iZXIgIT09IHVuZGVmaW5lZCA/IG1lbWJlci5uYW1lIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdCAgICB2YXIgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUodXBkYXRlLmRhdGUpO1xyXG5cdFx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ICAgIHVwZGF0ZURpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRcdCAgICBwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImRhdGVcIj4nICsgZGF0ZSArICc8L3NwYW4+ICcgKyBtZW1iZXJOYW1lICtcclxuXHRcdFx0ICAgICcgbW92ZWQgZnJvbSA8c3BhbiBjbGFzcz1cImxpc3RcIj4nICsgdXBkYXRlLmxpc3RCZWZvcmUgK1xyXG5cdFx0XHQgICAgJzwvc3Bhbj4gdG8gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QWZ0ZXIgKyAnPC9zcGFuPic7XHJcblx0ICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8vIEBjb25kXHJcbkJvYXJkVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XHJcbkJvYXJkVmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCb2FyZFZpZXc7XHJcbi8vLyBAZW5kY29uZFxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbGlzdCBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSBmdW5jdGlvbihib2FyZCwgbGlzdCwgZGF0YSkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IFV0aWwuc3RyaXBfdGFncyhkYXRhLm5hbWUpO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuZGVzYyA9ICc8cD4nICtcclxuICAgICAgICBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5kZXNjKS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXHJcbiAgICAgICAgJzwvcD4nO1xyXG4gICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUocGFyc2VJbnQoZGF0YS5pZC5zdWJzdHIoMCwgOCksIDE2KSAqIDEwMDApO1xyXG5cclxuICAgIHRoaXMubWVtYmVycyA9IFtdO1xyXG5cclxuICAgIGRhdGEuaWRNZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICB0aGF0Lm1lbWJlcnMucHVzaChpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICB0aGlzLnVwZGF0ZXMgPSBbXTtcclxufVxyXG5cclxuQ2FyZC5wcm90b3R5cGUuc29ydF91cGRhdGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnVwZGF0ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5kYXRlID09IGIuZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB0aGUgbGFzdCB0aW1lIHRoaXMgY2FyZCB3YXMgbW92ZWQuXHJcbiAqIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiBhIGNvbXBsZXRlZCBjYXJkIHdhc1xyXG4gKiBtb3ZlZCB0byBDb21wbGV0ZWQuXHJcbiAqL1xyXG5DYXJkLnByb3RvdHlwZS5maW5hbF90aW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZih0aGlzLnVwZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aC0xXS5kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudCBtZW1iZXJzIGZyb20gYSBjb2xsZWN0aW9uIG9mIGNhcmRzLlxyXG4gKiBAcGFyYW0gYm9hcmQgQm9hcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBsaXN0IGFycmF5IG9mIENhcmQgb2JqZWN0c1xyXG4gKiBAcmV0dXJucyBvYmplY3Qgd2l0aCBpZCBhcyBwcm9wZXJ0eSB0byBvYmplY3Qge2NudDogPywgbWVtYmVyOiA/fVxyXG4gKi9cclxuQ2FyZC5jb3VudF9tZW1iZXJzID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QpIHtcclxuICAgIHZhciBjb3VudCA9IHt9O1xyXG5cclxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbWJlciA9IGJvYXJkLm1lbWJlcnNbaWRdO1xyXG4gICAgICAgICAgICBpZihjb3VudC5oYXNPd25Qcm9wZXJ0eShtZW1iZXIuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFttZW1iZXIuaWRdLmNudCsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXSA9IHtjbnQ6IDEsIG1lbWJlcjogbWVtYmVyfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGNvbW1lbnQgb24gYSBjYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XHJcblxyXG4vKipcclxuIEFycmF5XHJcbiAoXHJcbiBbaWRdID0+IDU3ZWVjMWNhMjI2ODQ2NDZiMTE5M2FiZFxyXG4gW2lkTWVtYmVyQ3JlYXRvcl0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXHJcbiBbZGF0YV0gPT4gQXJyYXlcclxuIChcclxuIFtsaXN0XSA9PiBBcnJheVxyXG4gKFxyXG4gW25hbWVdID0+IERlc2lnblxyXG4gW2lkXSA9PiA1N2U5MjBhMmIzNDUxODIwM2ZkNWYzMTlcclxuIClcclxuXHJcbiBbYm9hcmRdID0+IEFycmF5XHJcbiAoXHJcbiBbc2hvcnRMaW5rXSA9PiBpOWVYRTR5SlxyXG4gW25hbWVdID0+IFByb2plY3QgMSBUZWFtOiBBcmJvXHJcbiBbaWRdID0+IDU3ZTkyMDRhYzNmMzIzZjE3ODVkN2JlNFxyXG4gKVxyXG5cclxuIFtjYXJkXSA9PiBBcnJheVxyXG4gKFxyXG4gW3Nob3J0TGlua10gPT4gRmdndmQ0blhcclxuIFtpZFNob3J0XSA9PiAyMVxyXG4gW25hbWVdID0+IFZpc3VhbCBQYXJhZGlnbSBDbGFzcyBEZXNpZ25cclxuIFtpZF0gPT4gNTdlZWMwNzc2ZmQwMDVmN2I4MWM4MjM5XHJcbiApXHJcblxyXG4gW3RleHRdID0+IFZpc3VhbCBQYXJhZGlnbSBDbGFzcyBEZXNpZ25cclxuIClcclxuXHJcbiBbdHlwZV0gPT4gY29tbWVudENhcmRcclxuIFtkYXRlXSA9PiAyMDE2LTA5LTMwVDE5OjQ5OjMwLjk3NFpcclxuIFttZW1iZXJDcmVhdG9yXSA9PiBBcnJheVxyXG4gKFxyXG4gW2lkXSA9PiA1N2VjMWJkYWZlZWRjYmJjNzNkNjAwZDFcclxuIFthdmF0YXJIYXNoXSA9PlxyXG4gW2Z1bGxOYW1lXSA9PiBCcml0dGFueSBHYWxsaWVyc1xyXG4gW2luaXRpYWxzXSA9PiBCR1xyXG4gW3VzZXJuYW1lXSA9PiBicml0dGFueWdhbGxpZXJzMVxyXG4gKVxyXG4gKiBAcGFyYW0gYm9hcmRcclxuICogQHBhcmFtIGNhcmRcclxuICogQHBhcmFtIGRhdGFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29tbWVudCA9IGZ1bmN0aW9uKGJvYXJkLCBjYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmNhcmQgPSBjYXJkO1xyXG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcclxuICAgIHRoaXMudGV4dCA9ICc8cD4nICtcclxuICAgICAgICBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5kYXRhLnRleHQpLnJlcGxhY2UoL1xcbi9nbSwgJzxwPicpICtcclxuICAgICAgICAnPC9wPic7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XHJcbn0iLCIvKlxyXG4gKiBCYXNlIG9iamVjdCBmb3Igdmlld3Mgb2YgVHJlbGxvIGRhdGEuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFWaWV3ID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG5EYXRhVmlldy5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHt9XHJcblxyXG5cclxuIiwiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGlzY29ubmVjdGVkVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xyXG5cdC8vIEVuc3VyZSBlbXB0eVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcclxuXHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xyXG5cclxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdCB0byBUcmVsbG8nO1xyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRyZWxsby5hdXRob3JpemUoKTtcclxuXHR9KVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gZnVuY3Rpb24oYm9hcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNhcmRzX2J5X2lkID0ge307XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmFkZF9jYXJkID0gZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xyXG4gICAgdGhpcy5jYXJkc19ieV9pZFtjYXJkLmlkXSA9IGNhcmQ7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmZpbmRfY2FyZCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBpZih0aGlzLmNhcmRzX2J5X2lkLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzX2J5X2lkW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIENhcmQuY291bnRfbWVtYmVycyh0aGlzLmJvYXJkLCB0aGlzLmNhcmRzKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSAnLi9Cb2FyZFZpZXcnO1xyXG5pbXBvcnQge1NwcmludFZpZXd9IGZyb20gXCIuL1NwcmludHMvU3ByaW50Vmlld1wiO1xyXG5pbXBvcnQge1NwcmludFRhYmxlVmlld30gZnJvbSAnLi9TcHJpbnRzL1NwcmludFRhYmxlVmlldyc7XHJcbmltcG9ydCB7RGlzY29ubmVjdGVkVmlld30gZnJvbSBcIi4vRGlzY29ubmVjdGVkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5WaWV3ID0gZnVuY3Rpb24oZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKSB7XHJcblx0Ly8gRW5zdXJlIGVtcHR5XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRVdGlsLmFkZENsYXNzKGRpdiwgJ3RyZWxsby1zcHJpbnRlcicpO1xyXG5cclxuXHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0VXRpbC5hZGRDbGFzcyhwLCAnY2VudGVyJyk7XHJcblxyXG5cdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0YnV0dG9uLmlubmVyVGV4dCA9ICdEaXNjb25uZWN0JztcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0cmVsbG8uZGlzY29ubmVjdCgpO1xyXG5cclxuXHRcdG5ldyBEaXNjb25uZWN0ZWRWaWV3KGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucyk7XHJcblx0fSlcclxuXHJcblxyXG5cdGxldCBwU3RhdHVzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1zdGF0dXMnKTtcclxuXHRwU3RhdHVzLmlubmVyVGV4dCA9ICdDb25uZWN0aW5nIHRvIFRyZWxsby4uLic7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHBTdGF0dXMpO1xyXG5cclxuXHRsZXQgcE1zZyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tbXNnJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHBNc2cpO1xyXG5cclxuXHRCb2FyZC5mZXRjaCh0cmVsbG8sIG9wdGlvbnMuYm9hcmQsIHBNc2csIChib2FyZCkgPT4ge1xyXG5cdFx0Ly8gU3VjY2Vzc1xyXG5cdFx0cFN0YXR1cy5pbm5lclRleHQgPSAnVHJlbGxvIEJvYXJkOiAnICsgYm9hcmQubmFtZTtcclxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcclxuXHJcblx0XHRmb3IobGV0IHZpZXcgaW4gb3B0aW9ucy52aWV3cykge1xyXG5cdFx0XHRzd2l0Y2godmlldykge1xyXG5cdFx0XHRcdGNhc2UgJ2JvYXJkJzpcclxuXHRcdFx0XHRcdGxldCB2ID0gbmV3IEJvYXJkVmlldyhkaXYsIGJvYXJkKTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NwcmludCc6XHJcblx0XHRcdFx0XHR2ID0gbmV3IFNwcmludFZpZXcoZGl2LCBib2FyZCwgb3B0aW9ucy52aWV3cy5zcHJpbnQpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnc3ByaW50VGFibGUnOlxyXG5cdFx0XHRcdFx0diA9IG5ldyBTcHJpbnRUYWJsZVZpZXcoZGl2LCBib2FyZCwgb3B0aW9ucy52aWV3cy5zcHJpbnRUYWJsZSk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgKG1zZykgPT4ge1xyXG5cdFx0Ly8gRmFpbHVyZVxyXG5cdFx0cE1zZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBNc2cpO1xyXG5cdFx0cFN0YXR1cy5pbm5lclRleHQgPSBtc2c7XHJcblx0fSk7XHJcblxyXG5cdC8vdHJlbGxvLmZldGNoKCk7XHJcblxyXG59IiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbWVtYmVyIGluIGEgYm9hcmRcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgTWVtYmVyID0gZnVuY3Rpb24oYm9hcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5mdWxsTmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbn0iLCIvKlxyXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIHNwcmludCBpbiB0aGUgc3ByaW50cyBhbmFseXNpc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnQgPSBmdW5jdGlvbihzcHJpbnRzLCBzdGFydCwgZW5kKSB7XHJcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xyXG4gICAgdGhpcy5zdGFydF9tZWV0aW5nID0gc3RhcnQ7XHJcbiAgICB0aGlzLmVuZF9tZWV0aW5nID0gZW5kO1xyXG5cclxuICAgIHRoaXMuY29tcGxldGVkID0gW107XHJcbn1cclxuXHJcblNwcmludC5wcm90b3R5cGUuZW5kX3RpbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmVuZF9tZWV0aW5nLmNyZWF0ZWQuZ2V0VGltZSgpICtcclxuICAgICAgICAodGhpcy5zcHJpbnRzLnNwcmludF90aW1lX3Nsb3AgKiAxMDAwKSk7XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogVGVhbSBtZW1iZXIgc3RhdGlzdGljcyBmb3IgYSBzcHJpbnRcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50TWVtYmVyID0gZnVuY3Rpb24oc3ByaW50cywgbWVtYmVyKSB7XHJcbiAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcclxuICAgIHRoaXMuc3ByaW50cyA9IHNwcmludHM7XHJcblxyXG4gICAgdGhpcy5tZWV0aW5nc19jb3VudCA9IDA7XHJcbiAgICB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkID0gMDtcclxuICAgIFxyXG4gICAgdGhpcy5jb21wbGV0ZWRfY291bnQgPSAwO1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfdG90YWwgPSAwO1xyXG4gICAgXHJcbiAgICB0aGlzLnJldmlld3NfY291bnQgPSAwO1xyXG4gICAgdGhpcy5yZXZpZXdzX3RvdGFsID0gMDtcclxufVxyXG5cclxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5tZWV0aW5nc19wZXJjZW50YWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZih0aGlzLm1lZXRpbmdzX2NvdW50IDw9IHRoaXMuc3ByaW50cy5tZWV0aW5nc19zbG9wKSB7XHJcbiAgICAgICAgcmV0dXJuICcoaW5zdWZmaWNpZW50IG1lZXRpbmdzKSc7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBlciA9IHRoaXMubWVldGluZ3NfYXR0ZW5kZWQgLyAodGhpcy5tZWV0aW5nc19jb3VudCAtIHRoaXMuc3ByaW50cy5tZWV0aW5nc19zbG9wKTtcclxuICAgIGlmKHBlciA+IDEpIHtcclxuICAgICAgICBwZXIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwZXIudG9GaXhlZCgyKTtcclxufVxyXG5cclxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5jb21wbGV0ZWRfZmFjdG9yID0gZnVuY3Rpb24odGVhbVNpemUpIHtcclxuICAgIGlmKHRoaXMuY29tcGxldGVkX3RvdGFsID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZhY3RvciA9IHRoaXMuY29tcGxldGVkX2NvdW50IC9cclxuICAgICAgICAodGhpcy5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSAqIHRoaXMuc3ByaW50cy5jb21wbGV0ZWRfZmFjdG9yKTtcclxuICAgIGlmKGZhY3RvciA+IDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZmFjdG9yLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUucmV2aWV3aW5nX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XHJcbiAgICBpZih0aGlzLnJldmlld3NfdG90YWwgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmFjdG9yID0gdGhpcy5yZXZpZXdzX2NvdW50IC9cclxuICAgICAgICAodGhpcy5yZXZpZXdzX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMucmV2aWV3aW5nX2ZhY3Rvcik7XHJcbiAgICBpZihmYWN0b3IgPiAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFjdG9yLnRvRml4ZWQoMik7XHJcbn0iLCIvKlxyXG4gKiBUcmVsbG8gYm9hcmQgdmlldyB0aGF0IGRpc3BsYXlzIHNwcmludCByZXN1bHQgaW4gYSB0YWJsZS5cclxuICovXHJcbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4uL0RhdGFWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRzfSBmcm9tICcuL1NwcmludHMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuLi9DYXJkXCI7XHJcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tIFwiLi4vQm9hcmRWaWV3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50VGFibGVWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCwgb3B0aW9ucykge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgYWRkSGVhZGluZ3MgPSB0cnVlO1xyXG4gICAgaWYob3B0aW9ucy5hZGRIZWFkaW5ncyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYWRkSGVhZGluZ3MgPSBvcHRpb25zLmFkZEhlYWRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50LXRhYmxlJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgY29uc3QgdGFibGUgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgIFV0aWwuYWRkQ2xhc3ModGFibGUsIG9wdGlvbnMuY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENyZWF0ZSB0aGUgc3ByaW50IGFuYWx5c2lzXHJcblx0ICAgIC8vXHJcblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XHJcblx0ICAgIGNvbnN0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xyXG5cclxuXHQgICAgaWYoYWRkSGVhZGluZ3MpIHtcclxuXHRcdCAgICB0YWJsZUhlYWRpbmcodGFibGUsIGJvYXJkLCBzcHJpbnRzKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIHJvd0hUTUwgPSAnJztcclxuXHQgICAgZnVuY3Rpb24gaXRlbShkYXRhKSB7XHJcblx0XHQgICAgcm93SFRNTCArPSAnPHRkPicgKyBkYXRhICsgJzwvdGQ+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZm9yKHZhciBpZCBpbiBzcHJpbnRzLm1lbWJlcnMpIHtcclxuXHRcdCAgICBpZihzcHJpbnRzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0XHRcdCAgICB2YXIgbWVtYmVyID0gc3ByaW50cy5tZW1iZXJzW2lkXTtcclxuXHRcdFx0ICAgIHZhciBpZCA9IG1lbWJlci5tZW1iZXIuaWQ7XHJcblxyXG5cdFx0XHQgICAgcm93SFRNTCA9ICcnO1xyXG5cclxuXHRcdFx0ICAgIC8vIE91ciBzdGF0aXN0aWNzXHJcblx0XHRcdCAgICBpdGVtKGJvYXJkLm5hbWUpO1xyXG5cdFx0XHQgICAgaXRlbSh0ZWFtU2l6ZSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZW1iZXIubmFtZSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19wZXJjZW50YWdlKCkpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2NvdW50KTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF90b3RhbCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfZmFjdG9yKHRlYW1TaXplKSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX2NvdW50KTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld3NfdG90YWwpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xyXG5cdFx0XHQgICAgaXRlbShzcHJpbnRzLnNwcmludHMubGVuZ3RoKTtcclxuXHJcblx0XHRcdCAgICBzcHJpbnRzLnNwcmludHMuZm9yRWFjaChmdW5jdGlvbihzcHJpbnQpIHtcclxuXHRcdFx0XHQgICAgdmFyIGNudCA9IDA7XHJcblx0XHRcdFx0ICAgIHNwcmludC5jb21wbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcblx0XHRcdFx0XHQgICAgaWYoY2FyZC5tZW1iZXJzLmxlbmd0aCA9PSAxICYmIGNhcmQubWVtYmVyc1swXSA9PSBpZCkge1xyXG5cdFx0XHRcdFx0XHQgICAgY250Kys7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICB9KTtcclxuXHJcblx0XHRcdFx0ICAgIGl0ZW0oY250KTtcclxuXHRcdFx0XHQgICAgaXRlbShzcHJpbnQuY29tcGxldGVkLmxlbmd0aCk7XHJcblx0XHRcdCAgICB9KTtcclxuXHJcblx0XHRcdCAgICBpZighaXNOYU4oYWRkSGVhZGluZ3MpKSB7XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaT1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBpPGFkZEhlYWRpbmdzOyBpKyspIHtcclxuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xyXG5cdFx0XHRcdFx0ICAgIGl0ZW0oXCImbmJzcDtcIik7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdCAgICBjb25zdCB0ciA9IFV0aWwuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHRcdFx0ICAgIHRyLmlubmVySFRNTCA9IHJvd0hUTUw7XHJcblx0XHRcdCAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFibGVIZWFkaW5nID0gZnVuY3Rpb24odGFibGUsIGJvYXJkLCBzcHJpbnRzKSB7XHJcbiAgICAgICAgY29uc3QgdHIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRyMWNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgVXRpbC5hZGRDbGFzcyh0ciwgb3B0aW9ucy50cjFjbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdmFyIHJvd0hUTUwgPSAnJztcclxuXHQgICAgZnVuY3Rpb24gaXRlbShkYXRhKSB7XHJcblx0XHQgICAgcm93SFRNTCArPSAnPHRoPjxkaXY+JyArIGRhdGEgKyAnPC9kaXY+PC90aD4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpdGVtKFwiVGVhbVwiKTtcclxuXHQgICAgaXRlbShcIiNcIik7XHJcblx0ICAgIGl0ZW0oXCJNZW1iZXJcIik7XHJcblx0ICAgIGl0ZW0oXCJBdHRlbmRlZFwiKTtcclxuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xyXG5cdCAgICBpdGVtKFwiJVwiKTtcclxuXHQgICAgaXRlbShcIkNvbXBsZXRlZFwiKTtcclxuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xyXG5cdCAgICBpdGVtKFwiJVwiKTtcclxuXHQgICAgaXRlbShcIlJldmlld3NcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJTcHJpbnRzXCIpO1xyXG5cclxuXHQgICAgaWYoYWRkSGVhZGluZ3MgPT09IHRydWUpIHtcclxuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCAgICBpdGVtKGkpO1xyXG5cdFx0XHQgICAgaXRlbShcIiNcIik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIGZvcih2YXIgaT0xOyBpPD1hZGRIZWFkaW5nczsgaSsrKSB7XHJcblx0XHRcdCAgICBpdGVtKGkpO1xyXG5cdFx0XHQgICAgaXRlbShcIiNcIik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHRyLmlubmVySFRNTCA9IHJvd0hUTUw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaW50VGFibGVWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuXHJcblxyXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlLnRhYmxlX2hlYWRpbmdzID0gZnVuY3Rpb24oYm9hcmQsIHNwcmludHMpIHtcclxuXHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUcmVsbG8gYm9hcmQgdmlldyB0aGF0IGRpc3BsYXlzIHNwcmludCByZXN1bHRzXHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludFZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7XHJcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIC8vIFRoaXMgdXNlcyBCb2FyZFZpZXcgdG8gZHJhdyB3aGF0IGl0IGtub3dzIGhvdyB0byBkcmF3XHJcbiAgICBjb25zdCBib2FyZF92aWV3ID0gbmV3IEJvYXJkVmlldyhkaXYsIGJvYXJkKTtcclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ3JlYXRlIHRoZSBzcHJpbnQgYW5hbHlzaXNcclxuXHQgICAgLy9cclxuXHQgICAgY29uc3Qgc3ByaW50cyA9IG5ldyBTcHJpbnRzKGJvYXJkKTtcclxuXHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1zcHJpbnRzJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBsZXQgaDIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblx0ICAgIGgyLmlubmVyVGV4dCA9ICdTcHJpbnRzIEFuYWx5c2lzJztcclxuXHQgICAgdmlldy5hcHBlbmRDaGlsZChoMik7XHJcblxyXG5cdFx0cHJlc2VudF9lcnJvcnModmlldywgc3ByaW50cyk7XHJcblx0XHRwcmVzZW50X3dhcm5pbmdzKHZpZXcsIHNwcmludHMpO1xyXG5cclxuXHQgICAgaWYoc3ByaW50cy5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBwcmVzZW50X3NwcmludHModmlldywgc3ByaW50cyk7XHJcblx0XHRwcmVzZW50X21lbWJlcnModmlldywgc3ByaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfZXJyb3JzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgZXJyb3JzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWVycm9ycycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXJyb3JzKTtcclxuXHJcblx0ICAgIGVycm9ycy5pbm5lckhUTUwgPSAnPGgzPkVycm9yczwvaDM+JztcclxuXHJcblx0ICAgIGZvcihsZXQgZXJyb3Igb2Ygc3ByaW50cy5lcnJvcnMpIHtcclxuXHQgICAgXHRsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBcdGVycm9ycy5hcHBlbmRDaGlsZChwKTtcclxuXHQgICAgXHRwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInRyZWxsby1jb2RlXCI+JyArIGVycm9yLmNvZGUgKyAnOjwvc3Bhbj4gJyArIGVycm9yLm1zZztcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3dhcm5pbmdzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcbiAgICBcdGlmKHNwcmludHMud2FybmluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBcdFx0cmV0dXJuO1xyXG4gICAgXHR9XHJcblxyXG5cdCAgICBsZXQgd2FybmluZ3MgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8td2FybmluZ3MnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHdhcm5pbmdzKTtcclxuXHJcblx0ICAgIHdhcm5pbmdzLmlubmVySFRNTCA9ICc8aDM+V2FybmluZ3M8L2gzPic7XHJcblxyXG5cdCAgICBmb3IobGV0IHdhcm5pbmcgb2Ygc3ByaW50cy53YXJuaW5ncykge1xyXG5cdFx0ICAgIGxldCBwID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHQgICAgd2FybmluZ3MuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyB3YXJuaW5nLmNvZGUgKyAnOjwvc3Bhbj4gJyArIHdhcm5pbmcubXNnO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfc3ByaW50cyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdmlldycpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgZm9yKHZhciBzPTE7IHM8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IHMrKykge1xyXG5cdCAgICAgICAgdmFyIHNwcmludCA9IHNwcmludHMuc3ByaW50c1tzLTFdO1xyXG5cdCAgICAgICAgcHJlc2VudF9zcHJpbnQodmlldywgc3ByaW50cywgcywgc3ByaW50KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3NwcmludCA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cywgbnVtLCBzcHJpbnQpIHtcclxuXHQgICAgY29uc3QgZm1EYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShzcHJpbnQuc3RhcnRfbWVldGluZy5jcmVhdGVkKTtcclxuXHQgICAgY29uc3QgdG9EYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShzcHJpbnQuZW5kX21lZXRpbmcuY3JlYXRlZCk7XHJcblx0ICAgIGNvbnN0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gTWVtYmVyIGNvdW50cyBmb3IgY29tcGxldGVkXHJcblx0ICAgIC8vXHJcbiAgICAgICAgY29uc3QgY291bnRzID0gQ2FyZC5jb3VudF9tZW1iZXJzKHNwcmludHMuYm9hcmQsIHNwcmludC5jb21wbGV0ZWQpO1xyXG5cclxuXHQgICAgbGV0IHRvdGFsQ29tcGxldGVkID0gMDtcclxuXHQgICAgZm9yKGxldCBzcHJpbnQgb2Ygc3ByaW50cy5zcHJpbnRzKSB7XHJcblx0XHQgICAgdG90YWxDb21wbGV0ZWQgKz0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XHJcblx0ICAgIH1cclxuXHJcblxyXG5cdCAgICBsZXQgY29tcGxldGlvbkZhY3RvciA9IDAuMDA7XHJcblx0ICAgIGlmKHRvdGFsQ29tcGxldGVkID4gMCkge1xyXG5cdCAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IGNvbXBsZXRlZCAvICh0b3RhbENvbXBsZXRlZCAvIHNwcmludHMuc3ByaW50cy5sZW5ndGggKiAwLjgpO1xyXG5cdCAgICAgICAgaWYoY29tcGxldGlvbkZhY3RvciA+IDEpIHtcclxuXHQgICAgICAgICAgICBjb21wbGV0aW9uRmFjdG9yID0gMTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29tcGxldGlvbkZhY3RvciA9IGNvbXBsZXRpb25GYWN0b3IudG9GaXhlZCgyKTtcclxuXHJcblx0ICAgIGNvbnN0IGhlYWRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDMnLCAndHJlbGxvLXBsdXMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblx0ICAgIGhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGNvbXBsZXRlZCArXHJcbiAgICAgICAgICcgdGFza3MgJyArIGNvbXBsZXRpb25GYWN0b3IgKyAnIC8gJyArIGZtRGF0ZSArICcgdG8gJyArIHRvRGF0ZSArXHJcbiAgICAgICAgICc8L3NwYW4+U3ByaW50OiAnICsgbnVtO1xyXG5cclxuXHQgICAgY29uc3QgZXhwYW5kZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXhwYW5kJyk7XHJcblx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChleHBhbmRlcik7XHJcblxyXG5cdCAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuXHRcdFx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgc3ByaW50LnN0YXJ0X21lZXRpbmcpO1xyXG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5lbmRfbWVldGluZyk7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDb21wbGV0ZWRcclxuXHQgICAgLy9cclxuXHQgICAgbGV0IHBDb21wbGV0ZWQgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvbXBsZXRlZC1oZWFkZXInKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocENvbXBsZXRlZCk7XHJcblx0ICAgIHBDb21wbGV0ZWQuaW5uZXJUZXh0ID0gJ1NwcmludCBDb21wbGV0ZWQgVGFza3MnO1xyXG5cclxuXHQgICAgbGV0IHBNZW1iZXJzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb3VudCcpO1xyXG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChwTWVtYmVycyk7XHJcblxyXG5cdCAgICBsZXQgbWVtYmVycyA9ICc8ZW0+Q29tcGxldGVkOjwvZW0+WycgKyBzcHJpbnQuY29tcGxldGVkLmxlbmd0aCArICddICc7XHJcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudHMpIHtcclxuXHQgICAgICAgIGlmKGNvdW50cy5oYXNPd25Qcm9wZXJ0eShjKSkge1xyXG5cdCAgICAgICAgICAgIG1lbWJlcnMgKz0gY291bnRzW2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50c1tjXS5jbnQgKyAnXSZuYnNwOyZuYnNwOyc7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHBNZW1iZXJzLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBQcmVzZW50IGNvbXBsZXRlZCBjYXJkc1xyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IobGV0IGk9MDsgaTxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICBsZXQgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZFtpXTtcclxuXHQgICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIGNvbXBsZXRlZCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9tZW1iZXJzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcbiAgICBcdGxldCBtZW1iZXJzRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcnMnKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKG1lbWJlcnNEaXYpO1xyXG5cclxuXHQgICAgZm9yKHZhciBpZCBpbiBzcHJpbnRzLm1lbWJlcnMpIHtcclxuXHQgICAgICAgIGlmKHNwcmludHMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuXHQgICAgICAgICAgICB2YXIgbWVtYmVyID0gc3ByaW50cy5tZW1iZXJzW2lkXTtcclxuXHQgICAgICAgICAgICBwcmVzZW50X21lbWJlcihtZW1iZXJzRGl2LCBzcHJpbnRzLCBtZW1iZXIpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdFx0cHJlc2VudF9pbmZvKG1lbWJlcnNEaXYsIHNwcmludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X21lbWJlciA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cywgbWVtYmVyKSB7XHJcbiAgICBcdGxldCBtZW1iZXJEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tbWVtYmVyJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChtZW1iZXJEaXYpO1xyXG5cclxuXHQgICAgbGV0IG1lZXRpbmdzID0gc3ByaW50cy5tZWV0aW5nc19zbG9wID09PSAxID8gJyBtZWV0aW5nJyA6ICcgbWVldGluZ3MnO1xyXG5cdCAgICBsZXQgdGVhbVNpemUgPSBzcHJpbnRzLm51bV9tZW1iZXJzKCk7XHJcblxyXG5cdCAgICBtZW1iZXJEaXYuaW5uZXJIVE1MID0gJzxoND4nICsgbWVtYmVyLm1lbWJlci5uYW1lICsgJzwvaDQ+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPk1lZXRpbmdzIGF0dGVuZGVkOiAnICsgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkICsgJy8nICsgbWVtYmVyLm1lZXRpbmdzX2NvdW50ICtcclxuXHQgICAgICAgICcgcGVyY2VudGFnZTogJyArIG1lbWJlci5tZWV0aW5nc19wZXJjZW50YWdlKCkgK1xyXG5cdCAgICAgICAgJyA8ZW0+WW91IGFyZSBhbGxvd2VkIHRvIG1pc3MgJyArIHNwcmludHMubWVldGluZ3Nfc2xvcCArIG1lZXRpbmdzICsgICc8L2VtPicgK1xyXG5cdCAgICAgICAgJzwvcD4nICtcclxuXHJcblx0ICAgICAgICAnPHA+VGFza3MgY29tcGxldGVkOiAnICsgbWVtYmVyLmNvbXBsZXRlZF9jb3VudCArXHJcblx0ICAgICAgICAnLycgKyAobWVtYmVyLmNvbXBsZXRlZF90b3RhbCAvIHRlYW1TaXplKS50b0ZpeGVkKDIpICsgJyBmb3IgYSBjb21wbGV0aW9uIGZhY3RvciBvZjogJyArXHJcblx0ICAgICAgICBtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPicgK1xyXG5cclxuXHQgICAgICAgICc8cD5SZXZpZXdzIGNvbXBsZXRlZDogJyArIG1lbWJlci5yZXZpZXdzX2NvdW50ICsgJyBmb3IgYSByZXZpZXdpbmcgZmFjdG9yIG9mOiAnICtcclxuXHQgICAgICAgIG1lbWJlci5yZXZpZXdpbmdfZmFjdG9yKHRlYW1TaXplKSArICc8L3A+JztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9pbmZvID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcbiAgICBcdGNvbnN0IGluZm9EaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8taW5mbycpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XHJcblxyXG4gICAgXHRpbmZvRGl2LmlubmVySFRNTCA9ICc8cD5UaGUgY29tcGxldGlvbiBmYWN0b3IgZm9yIHRhc2tzIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgZXZlcnknICtcclxuXHRcdCAgICAnIHRlYW0gbWVtYmVyIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlICcgKyAoc3ByaW50cy5jb21wbGV0ZWRfZmFjdG9yICogMTAwKS50b0ZpeGVkKDApICsgJyUgb2YnICtcclxuXHRcdCAgICAnIGFuIGVxdWFsIGRpc3RyaWJ1dGlvbiBvZiB0YXNrcy4gVmFsdWVzIGxlc3MgdGhhbiAxLjAwIGluZGljYXRlIHRoYXQgeW91IHdpbGwgYmUnICtcclxuXHRcdCAgICAnIGxvc2luZyBwb2ludHMgb24gdGhlIGFzc2lnbm1lbnQuPC9wPicgK1xyXG5cdFx0ICAgICc8cD5UaGUgcmV2aWV3aW5nIGZhY3RvciBmb3IgdGFza3MgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCBldmVyeSB0ZWFtIG1lbWJlcicgK1xyXG5cdFx0ICAgICcgaXMgZXhwZWN0ZWQgdG8gcmV2aWV3ICcgKyAoc3ByaW50cy5yZXZpZXdpbmdfZmFjdG9yICogMTAwKS50b0ZpeGVkKDApICsgJyUgb2YgYW4gZXF1YWwnICtcclxuXHRcdCAgICAnIGRpc3RyaWJ1dGlvbiBvZiB0YXNrcy4gVGhpcyBmYWN0b3IgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCA5MCUgb2YgdGFza3Mgc2hvdWxkJyArXHJcblx0XHQgICAgJyBiZSBwcm9ncmFtbWluZyB0YXNrcy4gVmFsdWVzIGxlc3MgdGhhbiAxLjAwIGluZGljYXRlIHRoYXQgeW91IHdpbGwgYmUnICtcclxuXHRcdCAgICAnIGxvc2luZyBwb2ludHMgb24gdGhlIGFzc2lnbm1lbnQuPC9wPidcclxuICAgIH1cclxufVxyXG5cclxuLy8vIEBjb25kXHJcblNwcmludFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5TcHJpbnRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFZpZXc7XHJcbi8vLyBAZW5kY29uZFxyXG4iLCIvKlxyXG4gKiBTcHJpbnQgYW5hbHlzaXMgb2YgVHJlbGxvIGJvYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtTcHJpbnR9IGZyb20gXCIuL1NwcmludFwiO1xyXG5pbXBvcnQge1NwcmludE1lbWJlcn0gZnJvbSBcIi4vU3ByaW50TWVtYmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50cyA9IGZ1bmN0aW9uKGJvYXJkKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgLy8vIE51bWJlciBvZiBtaXNzZWQgbWVldGluZ3MgYWxsb3dcclxuICAgIHRoaXMubWVldGluZ3Nfc2xvcCA9IDE7XHJcblxyXG5cclxuICAgIC8vLyBOdW1iZXIgb2Ygc2Vjb25kcyBhZnRlciBtZWV0aW5nIHRpbWUgdG8gY29uc2lkZXIgY29tcGxldGVkXHJcbiAgICAvLy8gaW4gYSBjdXJyZW50IHNwcmludCBpbiBzZWNvbmRzLlxyXG4gICAgdGhpcy5zcHJpbnRfdGltZV9zbG9wID0gNSAqIDYwICogNjA7ICAgLy8gNSBob3Vyc1xyXG4gICAgXHJcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgaGlzIHNoYXJlIG9mIHRhc2tzXHJcbiAgICB0aGlzLmNvbXBsZXRlZF9mYWN0b3IgPSAwLjg7XHJcbiAgICBcclxuICAgIC8vLyBFYWNoIHVzZXJzIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlIDgwJSBvZiA5MCUgb2YgdGhlIHRhc2sgY291bnQgaW4gcmV2aWV3c1xyXG4gICAgdGhpcy5yZXZpZXdpbmdfZmFjdG9yID0gMC44ICogMC45O1xyXG5cclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuXHJcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgdGhpcy53YXJuaW5ncyA9IFtdO1xyXG5cclxuICAgIHRoaXMubWVtYmVycyA9IHt9O1xyXG4gICAgdGhpcy5zcHJpbnRzID0gW107XHJcblxyXG4gICAgdGhpcy5kZXNpZ24gPSBudWxsO1xyXG4gICAgdGhpcy5yaXNrcyA9IG51bGw7XHJcbiAgICB0aGlzLm1lZXRpbmdzID0gbnVsbDtcclxuICAgIHRoaXMudG9kbyA9IG51bGw7XHJcbiAgICB0aGlzLnNwcmludF9hY3RpdmUgPSBudWxsO1xyXG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gbnVsbDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gbnVsbDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29weSBvdmVyIHRoZSBtZW1iZXJzXHJcbiAgICAvL1xyXG4gICAgZm9yKHZhciBpZCBpbiBib2FyZC5tZW1iZXJzKSB7XHJcbiAgICAgICAgdmFyIG1lbWJlciA9IGJvYXJkLm1lbWJlcnNbaWRdO1xyXG4gICAgICAgIGlmKG1lbWJlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiY3NlMzM1XCIpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdID0gbmV3IFNwcmludE1lbWJlcih0aGlzLCBtZW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBGaW5kIGFsbCBvZiB0aGUgcmVxdWlyZWQgbGlzdHNcclxuICAgIC8vXHJcbiAgICB0aGlzLmZpbmRfbGlzdHMoKTtcclxuXHJcbiAgICBpZih0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTkwMCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gT3JkZXIgdGVzdGluZ1xyXG4gICAgLy9cclxuICAgIHRoaXMub3JkZXJfdGVzdCgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBEZXRlcm1pbmUgYXR0ZW5kYW5jZVxyXG4gICAgLy9cclxuICAgIHRoaXMubWVldGluZ19hdHRlbmRhbmNlKCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvbnZlcnQgbWVldGluZ3MgaW50byBzcHJpbnRzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5jcmVhdGVfc3ByaW50cygpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBTb3J0IGNvbXBsZXRlZCBpbnRvIHNwcmludHNcclxuICAgIC8vXHJcbiAgICB0aGlzLnNvcnRfY29tcGxldGVkKCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvbXBsZXRlZCBzdGF0aXN0aWNzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfc3RhdGlzdGljcygpO1xyXG59XHJcblxyXG4vKipcclxuICogRW5zdXJlIGFsbCByZXF1aXJlZCBsaXN0cyBleGlzdC5cclxuICovXHJcblNwcmludHMucHJvdG90eXBlLmZpbmRfbGlzdHMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIEZpbmQgdGhlIFwiRGVzaWduXCIgbGlzdFxyXG4gICAgdGhpcy5kZXNpZ24gPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnRGVzaWduJyk7XHJcbiAgICBpZih0aGlzLmRlc2lnbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlJpc2tzXCIgbGlzdFxyXG4gICAgdGhpcy5yaXNrcyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdSaXNrcycpO1xyXG4gICAgaWYodGhpcy5yaXNrcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDInKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIk1lZXRpbmdzXCIgbGlzdFxyXG4gICAgdGhpcy5tZWV0aW5ncyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdNZWV0aW5ncycpO1xyXG4gICAgaWYodGhpcy5tZWV0aW5ncyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlRvIERvXCIgbGlzdFxyXG4gICAgdGhpcy50b2RvID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RvIERvJyk7XHJcbiAgICBpZih0aGlzLnRvZG8gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUaGlzIFNwcmludCBBY3RpdmVcIiBsaXN0XHJcbiAgICB0aGlzLnNwcmludF9hY3RpdmUgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVGhpcyBTcHJpbnQgQWN0aXZlJyk7XHJcbiAgICBpZih0aGlzLnNwcmludF9hY3RpdmUgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA1Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUaGlzIFNwcmludCBDb21wbGV0ZWRcIiBsaXN0XHJcbiAgICB0aGlzLnNwcmludF9jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVGhpcyBTcHJpbnQgQ29tcGxldGVkJyk7XHJcbiAgICBpZih0aGlzLnNwcmludF9jb21wbGV0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJDb21wbGV0ZWRcIiBsaXN0XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdDb21wbGV0ZWQnKTtcclxuICAgIGlmKHRoaXMuY29tcGxldGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRW5zdXJlIGxpc3RzIGFyZSBpbiB0aGUgcmlnaHQgb3JkZXJcclxuICovXHJcblNwcmludHMucHJvdG90eXBlLm9yZGVyX3Rlc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBvcmRlciA9IFsnRGVzaWduJywgJ1Jpc2tzJywgJ01lZXRpbmdzJyxcclxuICAgICAgICAnVG8gRG8nLCAnVGhpcyBTcHJpbnQgQWN0aXZlJyxcclxuICAgICAgICAnVGhpcyBTcHJpbnQgQ29tcGxldGVkJywgJ0NvbXBsZXRlZCddO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPG9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZC5saXN0c1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IG9yZGVyW2ldLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nKCd3MDAxJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudCBtZWV0aW5nIGF0dGVuZGFuY2UgZm9yIGEgdXNlclxyXG4gKi9cclxuU3ByaW50cy5wcm90b3R5cGUubWVldGluZ19hdHRlbmRhbmNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIG1lZXRpbmdzX2NvdW50ID0gdGhpcy5tZWV0aW5ncy5jYXJkcy5sZW5ndGg7XHJcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLm1lbWJlcnNbaWRdO1xyXG4gICAgICAgIG1lbWJlci5tZWV0aW5nc19jb3VudCA9IG1lZXRpbmdzX2NvdW50O1xyXG4gICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZWV0aW5ncy5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICBjYXJkLm1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhhdC5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuY3JlYXRlX3NwcmludHMgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBtZWV0aW5ncyA9IHRoaXMubWVldGluZ3MuY2FyZHMuc2xpY2UoKTtcclxuXHJcbiAgICBtZWV0aW5ncy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZihhLmNyZWF0ZWQgPCBiLmNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZihhLmNyZWF0ZWQgPT09IGIuY3JlYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTwobWVldGluZ3MubGVuZ3RoIC0gMSk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuc3ByaW50cy5wdXNoKG5ldyBTcHJpbnQodGhpcywgbWVldGluZ3NbaV0sIG1lZXRpbmdzW2krMV0pKTtcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuc29ydF9jb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB2YXIgY29tcGxldGVkID0gdGhpcy5jb21wbGV0ZWQuY2FyZHMuc2xpY2UoKTtcclxuICAgIGNvbXBsZXRlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICB2YXIgYXQgPSBhLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICB2YXIgYnQgPSBiLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICBpZihhdCA9PT0gYnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIGlmKGF0IDwgYnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb21wbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihjb21wbGV0ZWQpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGlnbm9yZSBcInJpc2tcIiBjYXJkc1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYoY29tcGxldGVkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwicmlza1wiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBjb21wbGV0ZWQuZmluYWxfdGltZSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGF0LnNwcmludHMubGVuZ3RoOyAgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ByaW50ID0gdGhhdC5zcHJpbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0ZSA8PSBzcHJpbnQuZW5kX3RpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpID49IHRoYXQuc3ByaW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGkgPSB0aGF0LnNwcmludHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcclxuICAgICAgICAgICAgc3ByaW50LmNvbXBsZXRlZC5wdXNoKGNvbXBsZXRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5jb21wbGV0ZWRfc3RhdGlzdGljcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNvbXBsZXRlZF9jb3VudCA9IDA7XHJcbiAgICB2YXIgcmV2aWV3c190b3RhbCA9IDA7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zcHJpbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHNwcmludCA9IHRoaXMuc3ByaW50c1tpXTtcclxuICAgICAgICBjb21wbGV0ZWRfY291bnQgKz0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaj0wOyBqPHNwcmludC5jb21wbGV0ZWQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbal07XHJcblxyXG4gICAgICAgICAgICBpZihjb21wbGV0ZWQubWVtYmVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbXBsZXRlZC5tZW1iZXJzWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoXCJ3MDAyXCIsIFwiQ29tcGxldGVkIHRhc2sgPGVtPlwiICsgY29tcGxldGVkLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9lbT4gaGFzIG5vIHRlYW0gbWVtYmVycyBhc3NpZ25lZC4gTm9ib2R5IHdpbGwgZ2V0IGNyZWRpdCBmb3IgdGhhdCB0YXNrLlwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwM1wiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcclxuICAgICAgICAgICAgICAgIFwiPC9lbT4gaGFzIG1vcmUgdGhhbiBvbmUgdGVhbSBtZW1iZXIgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFyZSB0aGV5IGFueSByZXZpZXdzP1xyXG4gICAgICAgICAgICBpZihjb21wbGV0ZWQuY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3c190b3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gY29tcGxldGVkLmNvbW1lbnRzWzBdLm1lbWJlcjtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5yZXZpZXdzX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdLmNvbXBsZXRlZF90b3RhbCA9IGNvbXBsZXRlZF9jb3VudDtcclxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdLnJldmlld3NfdG90YWwgPSByZXZpZXdzX3RvdGFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX21lbWJlciA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVyc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLm51bV9tZW1iZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY250ID0gMDtcclxuXHJcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIGlmKHRoaXMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbnQ7XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oY29kZSkge1xyXG4gICAgLy8gRG9lcyB0aGUgZXJyb3IgYWxyZWFkeSBleGlzdD9cclxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuZXJyb3JzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuZXJyb3JzW2ldO1xyXG4gICAgICAgIGlmKGVycm9yLmNvZGUgPT09IGNvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2goY29kZSkge1xyXG4gICAgICAgIGNhc2UgJ2UwMDEnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnRGVzaWduJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDAyJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1Jpc2tzJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDAzJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ01lZXRpbmdzJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA0JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RvIERvJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA1JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RoaXMgU3ByaW50IEFjdGl2ZSdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNic6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBDb21wbGV0ZWQnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDcnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnQ29tcGxldGVkJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlOTAwJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIkZhdGFsIGVycm9ycywgdW5hYmxlIHRvIHByb2NlZWQgd2l0aCBzcHJpbnRzIGFuYWx5c2lzXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLndhcm5pbmcgPSBmdW5jdGlvbihjb2RlLCBtc2cpIHtcclxuICAgIGlmKG1zZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IG1zZ30pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2goY29kZSkge1xyXG4gICAgICAgIGNhc2UgJ3cwMDEnOlxyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmdzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJZb3VyIGxpc3RzIGFyZSBub3QgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIFwiICtcclxuICAgICAgICAgICAgXCJUaGUgZXhhY3Qgb3JkZXIgc2hvdWxkIGJlOiBEZXNpZ24sIFJpc2tzLCBNZWV0aW5ncywgVG8gRG8sIFwiICtcclxuICAgICAgICAgICAgXCJUaGlzIFNwcmludCBBY3RpdmUsIFRoaXMgU3ByaW50IENvbXBsZXRlZCwgXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJDb21wbGV0ZWRcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge29wdGlvbnN9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuaW1wb3J0IHtEaXNjb25uZWN0ZWRWaWV3fSBmcm9tIFwiLi9EaXNjb25uZWN0ZWRWaWV3XCI7XHJcbmltcG9ydCB7TWFpblZpZXd9IGZyb20gJy4vTWFpblZpZXcnO1xyXG5pbXBvcnQge1RyZWxsb0Nvbm5lY3R9IGZyb20gJ3RyZWxsby1jb25uZWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9TcHJpbnRlciA9IGZ1bmN0aW9uKHVzZXJPcHRpb25zKSB7XHJcblx0Ly8gRGVmYXVsdCBhbmQgc3VwcGxpZWQgb3B0aW9uc1xyXG5cdHZhciBvcHRzID0gVXRpbC5tZXJnZShvcHRpb25zLCB1c2VyT3B0aW9ucyk7XHJcblxyXG5cdHZhciB0cmVsbG8gPSBuZXcgVHJlbGxvQ29ubmVjdChvcHRzKTtcclxuXHJcblx0VXRpbC5yZWFkeSgoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHM7XHJcblx0XHRpZihvcHRzLnNlbC5ub2RlVHlwZSkge1xyXG5cdFx0XHRlbGVtZW50cyA9IFtvcHRzLnNlbF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHN3aXRjaCh0cmVsbG8uc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEOlxyXG5cdFx0XHRcdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdG5ldyBNYWluVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gdXBkYXRlIG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGUgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDsgXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcclxuICAgIHRoaXMubGlzdEJlZm9yZSA9IGRhdGEuZGF0YS5saXN0QmVmb3JlLm5hbWU7XHJcbiAgICB0aGlzLmxpc3RBZnRlciA9IGRhdGEuZGF0YS5saXN0QWZ0ZXIubmFtZTtcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgVXRpbCA9IGZ1bmN0aW9uKCkge31cclxuXHJcblV0aWwubWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbGwgSFRNTCB0YWdzIGZyb20gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHIgU3RyaW5nIHRvIHByb2Nlc3NcclxuICogQHJldHVybnMgc3RyaW5nIHdpdGhvdXQgdGFnc1xyXG4gKi9cclxuVXRpbC5zdHJpcF90YWdzID0gZnVuY3Rpb24oc3RyKSB7XHJcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC88KD86LnxcXG4pKj8+L2dtLCAnJyk7XHJcbn1cclxuXHJcblV0aWwuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGNscykge1xyXG5cdGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHRpZihjbHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0VXRpbC5hZGRDbGFzcyhlLCBjbHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGU7XHJcbn1cclxuXHJcblV0aWwuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lcykge1xyXG5cdGNvbnN0IG5hbWVzID0gY2xhc3NOYW1lcy5zcGxpdCgnICcpO1xyXG5cdGZvcihjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcblx0XHRpZiAoZWwuY2xhc3NMaXN0KVxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gJyAnICsgbmFtZTtcclxuXHR9XHJcbn1cclxuXHJcblV0aWwucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsLmNsYXNzTGlzdClcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRlbHNlXHJcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG59XHJcblxyXG5VdGlsLnJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcclxuXHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdCB0byBhIHN0cmluZy5cclxuICpcclxuICogVGhpcyB1c2VzIGZvcm1hdHRpbmcgdGhhdCBpcyBzdWJzZXQgb2YgdGhlIFBIUCBkYXRlKCkgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBkYXRlIERhdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBmb3JtYXQgT3B0aW9uYWwgZm9ybWF0IHN0cmluZyAoZGVmYXVsdCBpcyAnbi1kLVkgaDppYScpLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuVXRpbC5mb3JtYXREYXRldGltZSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xyXG5cclxuXHRmdW5jdGlvbiBwYWQoaSwgbikge1xyXG5cdFx0dmFyIHMgPSAnJyArIGk7XHJcblx0XHR3aGlsZShzLmxlbmd0aCA8IG4pIHtcclxuXHRcdFx0cyA9ICcwJyArIHM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Zm9ybWF0ID0gJ24tZC1ZIGg6aWEnO1xyXG5cdH1cclxuXHJcblx0dmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdHZhciBob3VyID0gaG91cnM7XHJcblx0dmFyIGFtID0gJ2EnO1xyXG5cdGlmKGhvdXJzID09IDApIHtcclxuXHRcdGhvdXIgPSAxMjtcclxuXHR9IGVsc2UgaWYoaG91cnMgPT0gMTIpIHtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH0gZWxzZSBpZihob3VycyA+IDEyKSB7XHJcblx0XHRob3VyID0gaG91cnMgLSAxMjtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH1cclxuXHJcblx0dmFyIHN0ciA9ICcnO1xyXG5cdGZvcih2YXIgaT0wOyBpPGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0c3dpdGNoKGZvcm1hdC5jaGFyQXQoaSkpIHtcclxuXHRcdFx0Y2FzZSAnbic6XHJcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdtJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZCc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldERhdGUoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdZJzpcclxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZyc6XHJcblx0XHRcdFx0c3RyICs9IGhvdXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdoJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGhvdXIsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaSc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldE1pbnV0ZXMoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdzJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2EnOlxyXG5cdFx0XHRcdHN0ciArPSBhbTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RyICs9IGZvcm1hdC5jaGFyQXQoaSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xyXG5cdHNlbDogJyN0cmVsbG8nLFxyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgYm9hcmQgd2UgYXJlIGZldGNoaW5nXHJcblx0Ym9hcmQ6ICcnLFxyXG5cclxuXHR2aWV3czoge1xyXG5cdFx0J2JvYXJkJzoge30sXHJcblx0XHQnc3ByaW50Jzoge31cclxuXHR9LFxyXG5cclxuXHRuYW1lOiAnVHJlbGxvU3ByaW50ZXInXHJcbn07XHJcblxyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MzBlMWMzOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcclxuaW1wb3J0IHtUcmVsbG9GYWN0b3J5fSBmcm9tICcuL2pzL1RyZWxsb0ZhY3RvcnknO1xyXG5cclxuVHJlbGxvRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuIiwiaW1wb3J0IHtUcmVsbG9TcHJpbnRlclZpZXd9IGZyb20gJy4vVHJlbGxvU3ByaW50ZXJWaWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9GYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtdHJlbGxvLXNwcmludGVyJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXcgVHJlbGxvU3ByaW50ZXJWaWV3KHNpdGUsIGVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSIsImltcG9ydCBUcmVsbG9TcHJpbnRlciBmcm9tIFwidHJlbGxvLXNwcmludGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvU3ByaW50ZXJWaWV3ID0gZnVuY3Rpb24oc2l0ZSwgZWxlbWVudCkge1xyXG5cdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQuaW5uZXJUZXh0KTtcclxuXHRlbGVtZW50LmlubmVyVGV4dCA9ICcnO1xyXG5cdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdGxldCB0cmVsbG8gPSBuZXcgVHJlbGxvU3ByaW50ZXIoe1xyXG5cdFx0c2VsOiBlbGVtZW50LFxyXG5cdFx0a2V5OiBqc29uLmtleSxcclxuXHRcdGJvYXJkOiBqc29uLnRlYW0sXHJcblx0XHR2aWV3czoganNvbi52aWV3c1xyXG5cdH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
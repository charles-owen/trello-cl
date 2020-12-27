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
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "4d3e1d26e8652257d607";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Trello": 0
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/trello/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/trello-sprinter/trello.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/trello-sprinter/trello.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/plus.png */ "./node_modules/trello-sprinter/img/plus.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/minus.png */ "./node_modules/trello-sprinter/img/minus.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "div.trello-sprinter {\n  margin: 0; }\n  div.trello-sprinter h2 {\n    text-align: center;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white;\n    font-size: 1em;\n    margin: 0; }\n  div.trello-sprinter p.trello-status {\n    text-align: center;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white; }\n  div.trello-sprinter p.trello-msg {\n    text-align: center;\n    font-style: italic;\n    font-size: 0.9em;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white; }\n  div.trello-sprinter p.center {\n    text-align: center; }\n  div.trello-sprinter div.trello-view {\n    background: white;\n    color: black; }\n    div.trello-sprinter div.trello-view h3 {\n      border-top: 2px solid black;\n      margin: 0;\n      padding: 0.25em 0 0.25em 20px; }\n      div.trello-sprinter div.trello-view h3 span.date {\n        font-weight: normal;\n        font-style: normal;\n        font-size: 0.7em;\n        float: right;\n        padding-top: 0.25em; }\n    div.trello-sprinter div.trello-view p.trello-completed-header {\n      text-align: center;\n      font-weight: bold;\n      background: black;\n      color: deepskyblue; }\n  div.trello-sprinter .trello-plus {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n  div.trello-sprinter .trello-minus {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n  div.trello-sprinter .trello-plus, div.trello-sprinter .trello-minus {\n    background-repeat: no-repeat;\n    background-position: left center;\n    background-size: 16px 16px;\n    cursor: pointer; }\n  div.trello-sprinter div.trello-expand {\n    position: relative;\n    display: none;\n    overflow: auto;\n    background: #f0f0f0;\n    padding: 0.25em;\n    margin-bottom: 6pt;\n    border: 1pt solid gray;\n    word-wrap: normal; }\n  div.trello-sprinter div.trello-expand, div.trello-sprinter .trello-errors {\n    -moz-box-shadow: 6pt 6px 10pt #888;\n    -webkit-box-shadow: 6pt 6px 10pt #888;\n    box-shadow: 6pt 6px 10pt #888; }\n  div.trello-sprinter p.trello-count {\n    margin: 0 0 1em 0;\n    text-align: center;\n    font-size: 0.85em; }\n  div.trello-sprinter div.trello-card {\n    padding-left: 2em;\n    padding-right: 2em; }\n    div.trello-sprinter div.trello-card h4 {\n      background-color: #81d0fd;\n      margin: 0.5em 0 0 0;\n      padding: 0 0.25em; }\n    div.trello-sprinter div.trello-card h4 span.trello-date {\n      font-weight: normal;\n      font-size: 0.9em;\n      float: right;\n      padding-top: 0.25em; }\n    div.trello-sprinter div.trello-card .trello-card-members {\n      margin: 0 0.25em;\n      font-size: 0.85em;\n      font-style: italic; }\n  div.trello-sprinter div.trello-description {\n    margin: 0.5em 1em; }\n    div.trello-sprinter div.trello-description p {\n      margin: 0 0 0.25em 0;\n      font-size: 0.9em; }\n  div.trello-sprinter div.trello-comments {\n    margin: 0 2em; }\n    div.trello-sprinter div.trello-comments h5 {\n      margin: 0;\n      padding: 0 0.25em;\n      background-color: #ccc;\n      font-size: 0.8em;\n      font-weight: normal;\n      font-style: italic; }\n      div.trello-sprinter div.trello-comments h5 span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right; }\n    div.trello-sprinter div.trello-comments p {\n      margin: 0 0.25em;\n      font-size: 0.9em; }\n  div.trello-sprinter div.trello-updates {\n    margin: 1em 2em; }\n    div.trello-sprinter div.trello-updates p {\n      margin: 0;\n      padding: 0 0.25em;\n      font-size: 0.8em;\n      font-style: italic; }\n      div.trello-sprinter div.trello-updates p span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right; }\n      div.trello-sprinter div.trello-updates p span.list {\n        font-style: normal;\n        font-weight: bold; }\n  div.trello-sprinter div.trello-sprints {\n    background: white;\n    color: black; }\n    div.trello-sprinter div.trello-sprints div.trello-errors {\n      background: #c41425;\n      color: white; }\n    div.trello-sprinter div.trello-sprints div.trello-warnings {\n      background: #ff80df;\n      color: black; }\n    div.trello-sprinter div.trello-sprints div.trello-members {\n      background: #f0f0f0;\n      color: black; }\n      div.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n        margin-bottom: 1em; }\n    div.trello-sprinter div.trello-sprints div.trello-errors, div.trello-sprinter div.trello-sprints div.trello-warnings, div.trello-sprinter div.trello-sprints div.trello-members {\n      position: relative;\n      overflow: auto;\n      padding: 0 1em 1em 1em;\n      margin: 1em 3em 6pt 3em;\n      border: 1pt solid gray;\n      word-wrap: normal;\n      font-size: 0.9em; }\n      div.trello-sprinter div.trello-sprints div.trello-errors p, div.trello-sprinter div.trello-sprints div.trello-warnings p, div.trello-sprinter div.trello-sprints div.trello-members p {\n        font-size: 1.1em;\n        margin: 0; }\n      div.trello-sprinter div.trello-sprints div.trello-errors span.trello-code, div.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code, div.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n        font-weight: bold; }\n      div.trello-sprinter div.trello-sprints div.trello-errors h3, div.trello-sprinter div.trello-sprints div.trello-errors h4, div.trello-sprinter div.trello-sprints div.trello-warnings h3, div.trello-sprinter div.trello-sprints div.trello-warnings h4, div.trello-sprinter div.trello-sprints div.trello-members h3, div.trello-sprinter div.trello-sprints div.trello-members h4 {\n        margin: 0;\n        padding: 0.25em 0;\n        text-align: center; }\n      div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info {\n        border-top: 1px solid black; }\n        div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {\n          margin: 1em 0; }\n  div.trello-sprinter div.trello-sprint-table {\n    overflow: auto; }\n", ""]);
// Exports
module.exports = exports;


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

/***/ "./node_modules/trello-sprinter/img/minus.png":
/*!****************************************************!*\
  !*** ./node_modules/trello-sprinter/img/minus.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./node_modules/trello-sprinter/img/plus.png":
/*!***************************************************!*\
  !*** ./node_modules/trello-sprinter/img/plus.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII=");

/***/ }),

/***/ "./node_modules/trello-sprinter/index.js":
/*!***********************************************!*\
  !*** ./node_modules/trello-sprinter/index.js ***!
  \***********************************************/
/*! exports provided: default, TrelloSprinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello.scss */ "./node_modules/trello-sprinter/trello.scss");
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trello_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/TrelloSprinter */ "./node_modules/trello-sprinter/src/TrelloSprinter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrelloSprinter", function() { return _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__["TrelloSprinter"]; });





/* harmony default export */ __webpack_exports__["default"] = (_src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__["TrelloSprinter"]);



/***/ }),

/***/ "./node_modules/trello-sprinter/src/Board.js":
/*!***************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Board.js ***!
  \***************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member */ "./node_modules/trello-sprinter/src/Member.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./node_modules/trello-sprinter/src/List.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Update */ "./node_modules/trello-sprinter/src/Update.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment */ "./node_modules/trello-sprinter/src/Comment.js");
/*
 * Representation of a Trello Board
 */







const Board = function(data) {

	this.data = data;
	this.id = data.id;
	this.name = data.name;
	this.lists = [];
	this.members = {};

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
						board = new Board(boardData);

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
					var member = new _Member__WEBPACK_IMPORTED_MODULE_0__["Member"](board, memberData);
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
						var list = new _List__WEBPACK_IMPORTED_MODULE_1__["List"](board, listData);
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
							const card = new _Card__WEBPACK_IMPORTED_MODULE_2__["Card"](board, list, cardData);
							console.log(card);
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
								var comment = new _Comment__WEBPACK_IMPORTED_MODULE_4__["Comment"](board, card, action);
								card.comments.push(comment);
							}
							//console.log(action);
						} else if(action.type === 'updateCard') {
							let card = board.find_card(action.data.card.id);
							if(card !== null) {
								var update = new _Update__WEBPACK_IMPORTED_MODULE_3__["Update"](board, card, action);
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

/***/ "./node_modules/trello-sprinter/src/BoardView.js":
/*!*******************************************************!*\
  !*** ./node_modules/trello-sprinter/src/BoardView.js ***!
  \*******************************************************/
/*! exports provided: BoardView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardView", function() { return BoardView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataView */ "./node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./node_modules/trello-sprinter/src/Util.js");
/**
 * @file
 * Standard Trello board view
 */



const BoardView = function(div, board) {
    _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);

    this.present = function() {
		let view = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-view');
	    div.appendChild(view);

	    for(let list of board.lists) {
			presentList(view, list);
	    }
    }

    const presentList = (view, list) => {
    	const header = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('h3', 'trello-plus');
    	header.innerText = list.name;
    	view.appendChild(header);

    	const expander = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-expand');
    	expander.style.display = 'none';
    	view.appendChild(expander);

    	header.addEventListener('click', (event) => {
    		if(expander.style.display === 'none') {
    			expander.style.display = 'block';
    			_Util__WEBPACK_IMPORTED_MODULE_1__["Util"].removeClass(header, 'trello-plus');
    			_Util__WEBPACK_IMPORTED_MODULE_1__["Util"].addClass(header, 'trello-minus');
		    } else {
    			expander.style.display = 'none';
			    _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].removeClass(header, 'trello-minus');
			    _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].addClass(header, 'trello-plus');
		    }
	    });

    	let count = list.count_members();

	    let members = '<em>Cards:</em>[' + list.cards.length + '] ';
	    for(var c in count) {
		    if(count.hasOwnProperty(c)) {
			    members += count[c].member.name + ':[' + count[c].cnt + ']&nbsp;&nbsp;';
		    }
	    }

	    const countEl = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('p', 'trello-count');
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
	    let date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(card.created);

		let cardDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-card');
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

	    let membersP = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('p', 'trello-card-members')
	    cardDiv.appendChild(membersP);
	    membersP.innerHTML = members;


	    //
	    // Description
	    //
	    let desc = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-description');
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

	    let commentDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-comments');
	    div.appendChild(commentDiv);

		for(let comment of card.comments) {
			let member = card.board.members[comment.member];
			let memberName = member !== undefined ? member.name : "undefined";
			let date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(comment.date);

			let h5 = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('h5');
			commentDiv.appendChild(h5);
			h5.innerHTML = `<span class="trello-date">${date}</span>${memberName}`;

			let textDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div');
			commentDiv.appendChild(textDiv);
			textDiv.innerHTML = comment.text;
		}
    }

    let presentUpdates = (div, card) => {
	    if(card.updates.length === 0) {
		    return;
	    }

	    let updateDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-updates');
	    div.appendChild(updateDiv);

	    for(let update of card.updates) {
		    var member = card.board.members[update.member];
		    var memberName = member !== undefined ? member.name : "undefined";
		    var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(update.date);
		    let p = document.createElement('p');
		    updateDiv.appendChild(p);
		    p.innerHTML = '<span class="date">' + date + '</span> ' + memberName +
			    ' moved from <span class="list">' + update.listBefore +
			    '</span> to <span class="list">' + update.listAfter + '</span>';
	    }
    }
}

/// @cond
BoardView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
BoardView.prototype.constructor = BoardView;
/// @endcond


/***/ }),

/***/ "./node_modules/trello-sprinter/src/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Card.js ***!
  \**************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/trello-sprinter/src/Util.js");
/**
 * @file
 * Representation of a Trello list in a board
 */



const Card = function(board, list, data) {
    var that = this;

    this.board = board;
    this.list = list;
    this.id = data.id;
    this.name = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.name);
    this.data = data;
    this.desc = '<p>' +
        _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.desc).replace(/\n/gm, '<p>') +
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

/***/ "./node_modules/trello-sprinter/src/Comment.js":
/*!*****************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Comment.js ***!
  \*****************************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/trello-sprinter/src/Util.js");
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
        _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].strip_tags(data.data.text).replace(/\n/gm, '<p>') +
        '</p>';

    this.data = data;
    this.date = new Date(Date.parse(data.date));
}

/***/ }),

/***/ "./node_modules/trello-sprinter/src/DataView.js":
/*!******************************************************!*\
  !*** ./node_modules/trello-sprinter/src/DataView.js ***!
  \******************************************************/
/*! exports provided: DataView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataView", function() { return DataView; });
/*
 * Base object for views of Trello data.
 */

const DataView = function() {

}

DataView.prototype.present = function(div, board) {}




/***/ }),

/***/ "./node_modules/trello-sprinter/src/DisconnectedView.js":
/*!**************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/DisconnectedView.js ***!
  \**************************************************************/
/*! exports provided: DisconnectedView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedView", function() { return DisconnectedView; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/trello-sprinter/src/Util.js");


const DisconnectedView = function(element, trello, options) {
	// Ensure empty
	element.innerHTML = '';

	let div = document.createElement('div');
	element.appendChild(div);
	_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(div, 'trello-sprinter');

	let p = document.createElement('p');
	div.appendChild(p);
	_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(p, 'center');

	let button = document.createElement('button');
	p.appendChild(button);
	button.innerText = 'Connect to Trello';
	button.addEventListener('click', (event) => {
		event.preventDefault();
		trello.authorize();
	})
}

/***/ }),

/***/ "./node_modules/trello-sprinter/src/List.js":
/*!**************************************************!*\
  !*** ./node_modules/trello-sprinter/src/List.js ***!
  \**************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./node_modules/trello-sprinter/src/Card.js");
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
    return _Card__WEBPACK_IMPORTED_MODULE_0__["Card"].count_members(this.board, this.cards);
}



/***/ }),

/***/ "./node_modules/trello-sprinter/src/MainView.js":
/*!******************************************************!*\
  !*** ./node_modules/trello-sprinter/src/MainView.js ***!
  \******************************************************/
/*! exports provided: MainView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainView", function() { return MainView; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./node_modules/trello-sprinter/src/Board.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardView */ "./node_modules/trello-sprinter/src/BoardView.js");
/* harmony import */ var _Sprints_SprintView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprints/SprintView */ "./node_modules/trello-sprinter/src/Sprints/SprintView.js");
/* harmony import */ var _Sprints_SprintTableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprints/SprintTableView */ "./node_modules/trello-sprinter/src/Sprints/SprintTableView.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisconnectedView */ "./node_modules/trello-sprinter/src/DisconnectedView.js");







const MainView = function(element, trello, options) {
	// Ensure empty
	element.innerHTML = '';

	let div = document.createElement('div');
	element.appendChild(div);
	_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(div, 'trello-sprinter');

	let p = document.createElement('p');
	div.appendChild(p);
	_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].addClass(p, 'center');

	let button = document.createElement('button');
	p.appendChild(button);
	button.innerText = 'Disconnect';
	button.addEventListener('click', (event) => {
		event.preventDefault();
		trello.disconnect();

		new _DisconnectedView__WEBPACK_IMPORTED_MODULE_5__["DisconnectedView"](element, trello, options);
	})


	let pStatus = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].createElement('p', 'trello-status');
	pStatus.innerText = 'Connecting to Trello...';
	div.appendChild(pStatus);

	let pMsg = _Util__WEBPACK_IMPORTED_MODULE_0__["Util"].createElement('p', 'trello-msg');
	div.appendChild(pMsg);

	_Board__WEBPACK_IMPORTED_MODULE_1__["Board"].fetch(trello, options.board, options, pMsg, (board) => {
		// Success
		pStatus.innerText = 'Trello Board: ' + board.name;
		pMsg.parentNode.removeChild(pMsg);

		for(let view in options.views) {
			switch(view) {
				case 'board':
					let v = new _BoardView__WEBPACK_IMPORTED_MODULE_2__["BoardView"](div, board);
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
	}, (msg) => {
		// Failure
		pMsg.parentNode.removeChild(pMsg);
		pStatus.innerText = msg;
	});

	//trello.fetch();

}

/***/ }),

/***/ "./node_modules/trello-sprinter/src/Member.js":
/*!****************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Member.js ***!
  \****************************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
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

/***/ "./node_modules/trello-sprinter/src/Sprints/Sprint.js":
/*!************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Sprints/Sprint.js ***!
  \************************************************************/
/*! exports provided: Sprint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprint", function() { return Sprint; });
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

/***/ "./node_modules/trello-sprinter/src/Sprints/SprintMember.js":
/*!******************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Sprints/SprintMember.js ***!
  \******************************************************************/
/*! exports provided: SprintMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintMember", function() { return SprintMember; });
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

/***/ "./node_modules/trello-sprinter/src/Sprints/SprintTableView.js":
/*!*********************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Sprints/SprintTableView.js ***!
  \*********************************************************************/
/*! exports provided: SprintTableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintTableView", function() { return SprintTableView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./node_modules/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./node_modules/trello-sprinter/src/BoardView.js");
/*
 * Trello board view that displays sprint result in a table.
 */






const SprintTableView = function(div, board, options) {
    _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);

    let addHeadings = true;
    if(options.addHeadings !== undefined) {
        addHeadings = options.addHeadings;
    }

    this.present = function() {
        const view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-sprint-table');
        div.appendChild(view);

	    const table = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('table');
	    view.appendChild(table);

        if(options.class !== undefined) {
	        _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(table, options.class);
        }

	    //
	    // Create the sprint analysis
	    //
	    const sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__["Sprints"](board);
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

			    const tr = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('tr');
			    tr.innerHTML = rowHTML;
			    table.appendChild(tr);
		    }
	    }
    }

    const tableHeading = function(table, board, sprints) {
        const tr = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('tr');
        table.appendChild(tr);

        if(options.tr1class !== undefined) {
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
SprintTableView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
SprintTableView.prototype.constructor = SprintTableView;
/// @endcond


SprintTableView.prototype.table_headings = function(board, sprints) {

}



/***/ }),

/***/ "./node_modules/trello-sprinter/src/Sprints/SprintView.js":
/*!****************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Sprints/SprintView.js ***!
  \****************************************************************/
/*! exports provided: SprintView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SprintView", function() { return SprintView; });
/* harmony import */ var _DataView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataView */ "./node_modules/trello-sprinter/src/DataView.js");
/* harmony import */ var _Sprints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprints */ "./node_modules/trello-sprinter/src/Sprints/Sprints.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./node_modules/trello-sprinter/src/Card.js");
/* harmony import */ var _BoardView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoardView */ "./node_modules/trello-sprinter/src/BoardView.js");
/**
 * @file
 * Trello board view that displays sprint results
 */






const SprintView = function(div, board) {
    _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);

    // This uses BoardView to draw what it knows how to draw
    const board_view = new _BoardView__WEBPACK_IMPORTED_MODULE_4__["BoardView"](div, board);

    this.present = function() {
	    //
	    // Create the sprint analysis
	    //
	    const sprints = new _Sprints__WEBPACK_IMPORTED_MODULE_1__["Sprints"](board);

		let view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-sprints');
		div.appendChild(view);

	    let h2 = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('h2');
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

	    let errors = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-errors');
	    div.appendChild(errors);

	    errors.innerHTML = '<h3>Errors</h3>';

	    for(let error of sprints.errors) {
	    	let p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
	    	errors.appendChild(p);
	    	p.innerHTML = '<span class="trello-code">' + error.code + ':</span> ' + error.msg;
	    }
    }

    let present_warnings = function(div, sprints) {
    	if(sprints.warnings.length === 0) {
    		return;
    	}

	    let warnings = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-warnings');
	    div.appendChild(warnings);

	    warnings.innerHTML = '<h3>Warnings</h3>';

	    for(let warning of sprints.warnings) {
		    let p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
		    warnings.appendChild(p);
		    p.innerHTML = '<span class="trello-code">' + warning.code + ':</span> ' + warning.msg;
	    }
    }

    let present_sprints = function(div, sprints) {
		let view = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-view');
		div.appendChild(view);

	    for(var s=1; s<=sprints.sprints.length; s++) {
	        var sprint = sprints.sprints[s-1];
	        present_sprint(view, sprints, s, sprint);
	    }
    }

    let present_sprint = function(div, sprints, num, sprint) {
	    const fmDate = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatDatetime(sprint.start_meeting.created);
	    const toDate = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].formatDatetime(sprint.end_meeting.created);
	    const completed = sprint.completed.length;

	    //
	    // Member counts for completed
	    //
        const counts = _Card__WEBPACK_IMPORTED_MODULE_3__["Card"].count_members(sprints.board, sprint.completed);

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

	    const header = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('h3', 'trello-plus');
	    div.appendChild(header);
	    header.innerHTML = '<span class="date">' + completed +
         ' tasks ' + completionFactor + ' / ' + fmDate + ' to ' + toDate +
         '</span>Sprint: ' + num;

	    const expander = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-expand');
	    expander.style.display = 'none';
	    div.appendChild(expander);

	    header.addEventListener('click', (event) => {
		    if(expander.style.display === 'none') {
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
        board_view.presentCard(expander, sprint.end_meeting);

	    //
	    // Completed
	    //
	    let pCompleted = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p', 'trello-completed-header');
	    expander.appendChild(pCompleted);
	    pCompleted.innerText = 'Sprint Completed Tasks';

	    let pMembers = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p', 'trello-count');
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
    	let membersDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-members');
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
    	let memberDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-member');
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
    	const infoDiv = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-info');
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
SprintView.prototype = Object.create(_DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].prototype);
SprintView.prototype.constructor = SprintView;
/// @endcond


/***/ }),

/***/ "./node_modules/trello-sprinter/src/Sprints/Sprints.js":
/*!*************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Sprints/Sprints.js ***!
  \*************************************************************/
/*! exports provided: Sprints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprints", function() { return Sprints; });
/* harmony import */ var _Sprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprint */ "./node_modules/trello-sprinter/src/Sprints/Sprint.js");
/* harmony import */ var _SprintMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SprintMember */ "./node_modules/trello-sprinter/src/Sprints/SprintMember.js");
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

        this.members[id] = new _SprintMember__WEBPACK_IMPORTED_MODULE_1__["SprintMember"](this, member);
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
    var order = ['Design', 'Risks', 'Meetings',
        'To Do', 'This Sprint Active',
        'This Sprint Completed', 'Completed'];

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
        this.sprints.push(new _Sprint__WEBPACK_IMPORTED_MODULE_0__["Sprint"](this, meetings[i], meetings[i+1]));
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
        // We ignore "risk" cards
        //
        if(completed.name.toLowerCase().indexOf("risk") === -1) {
            var date = completed.final_time();
            for(var i=0; i<that.sprints.length;  i++) {
                var sprint = that.sprints[i];
                if(date <= sprint.end_time()) {
                    break;
                }
            }

            if(i >= that.sprints.length) {
                i = that.sprints.length - 1;
            }

            var sprint = that.sprints[i];
            sprint.completed.push(completed);
        }

    });
}

Sprints.prototype.completed_statistics = function() {
    var completed_count = 0;
    var reviews_total = 0;

    for(var i=0; i<this.sprints.length; i++) {
        var sprint = this.sprints[i];
        completed_count += sprint.completed.length;

        for(var j=0; j<sprint.completed.length; j++) {
            var completed = sprint.completed[j];

            if(completed.members.length === 1) {
                var id = completed.members[0];
                var member = this.find_member(id);
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
                var id = completed.comments[0].member;
                var member = this.find_member(id);
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
            this.warnings.push({code: code, msg: "Your lists are not in the correct order. " +
            "The exact order should be: Design, Risks, Meetings, To Do, " +
            "This Sprint Active, This Sprint Completed, " +
                "Completed"});
            break;

    }
}

/***/ }),

/***/ "./node_modules/trello-sprinter/src/TrelloSprinter.js":
/*!************************************************************!*\
  !*** ./node_modules/trello-sprinter/src/TrelloSprinter.js ***!
  \************************************************************/
/*! exports provided: TrelloSprinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloSprinter", function() { return TrelloSprinter; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./node_modules/trello-sprinter/src/options.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./node_modules/trello-sprinter/src/Util.js");
/* harmony import */ var _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisconnectedView */ "./node_modules/trello-sprinter/src/DisconnectedView.js");
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainView */ "./node_modules/trello-sprinter/src/MainView.js");
/* harmony import */ var trello_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! trello-connect */ "./node_modules/trello-connect/index.js");






const TrelloSprinter = function(userOptions) {
	// Default and supplied options
	const opts = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].merge(_options__WEBPACK_IMPORTED_MODULE_0__["options"], userOptions);

	const trello = new trello_connect__WEBPACK_IMPORTED_MODULE_4__["TrelloConnect"](opts);

	_Util__WEBPACK_IMPORTED_MODULE_1__["Util"].ready(() => {
		let elements;
		if(opts.sel.nodeType) {
			elements = [opts.sel];
		} else {
			elements = document.querySelectorAll(opts.sel);
		}

		for(let i=0; i<elements.length; i++) {
			switch(trello.state) {
				case trello_connect__WEBPACK_IMPORTED_MODULE_4__["TrelloConnect"].DISCONNECTED:
					new _DisconnectedView__WEBPACK_IMPORTED_MODULE_2__["DisconnectedView"](elements[i], trello, opts);
					break;

				default:
					new _MainView__WEBPACK_IMPORTED_MODULE_3__["MainView"](elements[i], trello, opts);
					break;
			}
		}
	});



}

/***/ }),

/***/ "./node_modules/trello-sprinter/src/Update.js":
/*!****************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Update.js ***!
  \****************************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
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

/***/ "./node_modules/trello-sprinter/src/Util.js":
/*!**************************************************!*\
  !*** ./node_modules/trello-sprinter/src/Util.js ***!
  \**************************************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });

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

/***/ "./node_modules/trello-sprinter/src/options.js":
/*!*****************************************************!*\
  !*** ./node_modules/trello-sprinter/src/options.js ***!
  \*****************************************************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });

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

	name: 'TrelloSprinter'
};



/***/ }),

/***/ "./node_modules/trello-sprinter/trello.scss":
/*!**************************************************!*\
  !*** ./node_modules/trello-sprinter/trello.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!../resolve-url-loader!../sass-loader/dist/cjs.js?sourceMap!./trello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/trello-sprinter/trello.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7970c254", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../css-loader/dist/cjs.js!../resolve-url-loader!../sass-loader/dist/cjs.js?sourceMap!./trello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/trello-sprinter/trello.scss", function() {
     var newContent = __webpack_require__(/*! !../css-loader/dist/cjs.js!../resolve-url-loader!../sass-loader/dist/cjs.js?sourceMap!./trello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/trello-sprinter/trello.scss");
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
/* harmony import */ var trello_sprinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! trello-sprinter */ "./node_modules/trello-sprinter/index.js");

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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3RyZWxsby5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tY29ubmVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9pbWcvcGx1cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0RhdGFWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0Rpc2Nvbm5lY3RlZFZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NYWluVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRNZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9UcmVsbG9TcHJpbnRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/ZjMwYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJUcmVsbG9GYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJzdGFydCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIlRyZWxsb1NwcmludGVyVmlldyIsImVsZW1lbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3B0aW9ucyIsInNlbCIsImtleSIsImJvYXJkIiwidGVhbSIsInZpZXdzIiwiYWZ0ZXIiLCJjYXJkcyIsInVuZGVmaW5lZCIsIlRyZWxsb1NwcmludGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtR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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsa0RBQVE7QUFDN0M7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFZ0M7QUFDWTs7QUFFckM7QUFDUDs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLDBEQUFZO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7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IihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRyZWxsb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUcmVsbG9cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNGQzZTFkMjZlODY1MjI1N2Q2MDdcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdHN3aXRjaCAoaG90U3RhdHVzKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbiBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuIFx0XHRcdFx0XHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2gsIGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4gXHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0IW1vZHVsZSB8fFxuIFx0XHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG4gXHRcdFx0XHQpXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbiBcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0cGFyZW50czogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0ucGFyZW50cy5zbGljZSgpLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRpZiAoaG90VXBkYXRlTmV3SGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1bmRlZmluZWQ7XG4gXHRcdH1cbiBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBpdGVtLnBhcmVudHM7XG4gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGxpc3QpIHtcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4gXHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKCFob3RVcGRhdGUpIGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbiBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgbW9kdWxlSWQpKVxuIFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiVHJlbGxvXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9pbWcvcGx1cy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9pbWcvbWludXMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnRyZWxsby1zcHJpbnRlciB7XFxuICBtYXJnaW46IDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tc3RhdHVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLW1zZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAuY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgaDMge1xcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMC4yNWVtIDAgMC4yNWVtIDIwcHg7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyBzcGFuLmRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC4yNWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IHAudHJlbGxvLWNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBjb2xvcjogZGVlcHNreWJsdWU7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLXBsdXMsIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1taW51cyB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZXhwYW5kIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHQ7XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZXhwYW5kLCBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tZXJyb3JzIHtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gICAgYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tY291bnQge1xcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuODVlbTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMmVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkMGZkO1xcbiAgICAgIG1hcmdpbjogMC41ZW0gMCAwIDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgaDQgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICBwYWRkaW5nLXRvcDogMC4yNWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIC50cmVsbG8tY2FyZC1tZW1iZXJzIHtcXG4gICAgICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAwLjVlbSAxZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHAge1xcbiAgICAgIG1hcmdpbjogMCAwIDAuMjVlbSAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyB7XFxuICAgIG1hcmdpbjogMCAyZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgcCB7XFxuICAgICAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuOWVtOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyB7XFxuICAgIG1hcmdpbjogMWVtIDJlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi5saXN0IHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMge1xcbiAgICAgIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZjgwZGY7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyB7XFxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1tZW1iZXIge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xcbiAgICAgIG1hcmdpbjogMWVtIDNlbSA2cHQgM2VtO1xcbiAgICAgIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICAgICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHNwYW4udHJlbGxvLWNvZGUsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mgc3Bhbi50cmVsbG8tY29kZSwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHNwYW4udHJlbGxvLWNvZGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDQsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgaDMsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgaDQsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGg0IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGRpdi50cmVsbG8taW5mbywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8taW5mbyB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IH1cXG4gICAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGRpdi50cmVsbG8taW5mbyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHAge1xcbiAgICAgICAgICBtYXJnaW46IDFlbSAwOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50LXRhYmxlIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNZXJnZSB0d28gSmF2YXNjcmlwdCBvYmplY3RzIGludG8gYSBzaW5nbGUgcmVzdWx0LlxyXG4gKiBAcGFyYW0gb2JqMSBGaXJzdCBvYmplY3RcclxuICogQHBhcmFtIG9iajIgU2Vjb25kIG9iamVjdC4gU2Vjb25kIG9iamVjdCB2YWx1ZXMgdGFrZSBwcmVjZWRlbmNlLlxyXG4gKi9cclxuY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLy8gTG9jYWwgc3RvcmFnZSBhZGRyZXNzIGZvciBzdG9yaW5nIHRoZSB0b2tlbiB3aGlsZSBjb25uZWN0ZWRcclxuY29uc3QgVG9rZW5TdG9yYWdlID0gJ19uOXM1UnlnOHdhJztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9Db25uZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0b3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuXHJcblx0bGV0IHRva2VuID0gJyc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFRpbGwgd2Uga25vdyBvdGhlcndpc2VcclxuXHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gU2VlIGlmIHRoZXJlIGlzIGEgdG9rZW4gaW4gdGhlIGN1cnJlbnQgVVJMXHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0Y29uc3QgcmUgPSAvI3Rva2VuPSguKikkLztcclxuXHRcdGNvbnN0IG1hdGNoZXMgPSBocmVmLm1hdGNoKHJlKTtcclxuXHRcdGlmKG1hdGNoZXMgIT09IG51bGwgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHRva2VuID0gbWF0Y2hlc1sxXTtcclxuXHJcblx0XHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIElzIHRoZXJlIGEgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZT9cclxuXHRcdC8vXHJcblx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlLCB0b2tlbik7XHJcblx0XHRpZih0b2tlbiAhPT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkNPTk5FQ1RFRDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEF1dGhvcml6ZSB3aXRoIFRyZWxsb1xyXG5cdCAqXHJcblx0ICogUmVkaXJlY3RzIHRvIHRoZSBUcmVsbG8gYXV0aG9yaXphdGlvbiBlbmRwb2ludCwgd2hpY2ggcmVkaXJlY3RzIGJhY2tcclxuXHQgKiB0byB0aGlzIHBhZ2UgYWZ0ZXIgYXV0aG9yaXphdGlvbiB3aXRoIHRoZSB0b2tlbiBpbiB0aGUgVVJMLlxyXG5cdCAqL1xyXG5cdHRoaXMuYXV0aG9yaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCByZXR1cm5fdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdGNvbnN0IHVybCA9IGAke29wdGlvbnMuYXV0aEVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vYXV0aG9yaXplP2V4cGlyYXRpb249bmV2ZXImbmFtZT0ke29wdGlvbnMubmFtZX0mYCArXHJcblx0XHRcdGBjYWxsYmFja19tZXRob2Q9ZnJhZ21lbnQmc2NvcGU9cmVhZCZyZXNwb25zZV90eXBlPXRva2VuJmtleT0ke29wdGlvbnMua2V5fSZyZXR1cm5fdXJsPSR7cmV0dXJuX3VybH1gO1xyXG5cdFx0d2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzY29ubmVjdCBmcm9tIFRyZWxsby5cclxuXHQgKlxyXG5cdCAqIFRoaXMgZm9yZ2V0cyB0aGUgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZS5cclxuXHQgKlxyXG5cdCAqL1xyXG5cdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UpO1xyXG5cdFx0dG9rZW4gPSAnJztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm0gYSBHRVQgcXVlcnkgZm9yIFRyZWxsb1xyXG5cdCAqIEBwYXJhbSB1cmwgVGhlIGJvYXJkIFVSTCBhZnRlciB0aGUgdmVyc2lvbiwgbGlrZSBcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIlxyXG5cdCAqIEBwYXJhbSBzdWNjZXNzIEZ1bmN0aW9uIGNhbGxlZCBvbiBzdWNjZXNzIHdpdGggZGF0YSBhcmd1bWVudFxyXG5cdCAqIEBwYXJhbSBmYWlsdXJlIEZ1bmN0aW9uIGNhbGxlZCBvbiBmYWlsdXJlIHdpdGggZGF0YSBhcmd1bWVudFxyXG5cdCAqIEBwYXJhbSBtc2cgT3B0aW9uYWwgZWxlbWVudCB0byBwdXQgcmF0ZSBsaW1pdGluZyBtZXNzYWdlIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKHVybCwgc3VjY2VzcywgZmFpbHVyZSwgbXNnKSB7XHJcblxyXG5cdFx0bGV0IHRyaWVzID0gMTtcclxuXHJcblx0XHRsZXQgbWF4dHJpZXMgPSA1OyAgLy8gTWF4aW11bSBudW1iZXIgb2YgdHJpZXNcclxuXHRcdGxldCBiYWNrb2ZmID0gMTA7ICAgLy8gc2Vjb25kc1xyXG5cdFx0bGV0IGJhY2tvZmZJbmNyZWFzZSA9IDEuMjU7IC8vIEFtb3VudCB0byBpbmNyZWFzZSBiYWNrb2ZmIGFmdGVyIGVhY2ggdHJ5XHJcblxyXG5cdFx0ZnVuY3Rpb24gdHJlbGxvR2V0KCkge1xyXG5cdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0XHRyZXF1ZXN0Lm9wZW4oJ0dFVCcsIGAke29wdGlvbnMuYXBpRW5kcG9pbnR9LyR7b3B0aW9ucy52ZXJzaW9ufS8ke3VybH0ma2V5PSR7b3B0aW9ucy5rZXl9JnRva2VuPSR7dG9rZW59YCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuXHRcdFx0XHRcdC8vIFN1Y2Nlc3MhXHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0XHRzdWNjZXNzKGRhdGEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3JcclxuXHRcdFx0XHRcdGZhaWx1cmUoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKCtyZXF1ZXN0LnN0YXR1cyA9PT0gNDI5ICYmIHRyaWVzIDwgbWF4dHJpZXMpIHtcclxuXHRcdFx0XHRcdHRyaWVzKys7XHJcblx0XHRcdFx0XHRpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRtc2cuaW5uZXJUZXh0ID0gXCJSYXRlIGxpbWl0ZWQsIGF0dGVtcHQgXCIgKyB0cmllcyArIFwiIGFmdGVyIFwiICtcclxuXHRcdFx0XHRcdFx0XHRiYWNrb2ZmLnRvRml4ZWQoMCkgKyBcIiBzZWNvbmRzXCI7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJlbGxvR2V0KCk7XHJcblx0XHRcdFx0XHRcdH0sIGJhY2tvZmYgKiAxMDAwKTtcclxuXHRcdFx0XHRcdFx0YmFja29mZiAqPSBiYWNrb2ZmSW5jcmVhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZhaWx1cmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXF1ZXN0LnNlbmQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0cmVsbG9HZXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQgPSAnRCc7XHJcblRyZWxsb0Nvbm5lY3QuQ09OTkVDVEVEID0gJ0MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvQ29ubmVjdDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVoxSlJFRlVlTnFra3IxT0FrRVF4K2Z1aGtQZ2tLOGdoWVpZR1B6bzdHakZ4TUplUTdUUXpsamhHeGhzOUEyTWhZMFYybXVNaWZvQUpwYVFHQitBdzBOUGp1T0ErM0ozNGVnOE1FN3lUMlkzKy92djdPeHdydXZDZndMM1QrckE4M3dNRWN0a1hTVEtqR0Zrb29wbFdjZU80M3lqNDloQVZGN05CVXJGaldsSXh3VmYra08xTTVXSFZ1bWxhdExsRWEvck9oQVZ0OWNqa0pCY0lNNitvbWUyQ21IR1VCWTFUYU5PbVZTTVp3Y21pVlJNQU1LeHAySzczV0tiNUQwVEc5REdleHpxZW9jbHRtMHplV0dhSmkwVE9oMkQ1Ylk5TUJjRUJFbVN3T093MisyT0txREs3eno1M241emxvTmVyd2NlaDVibGpzb3lqQjVrc3dYL2Y4Y0crWFlCUEE0NURsbGlHSDFTVmgrdVQ4TytCb295UlF3NDhEZ3lQeUdXOVBzT0JBSWl0Rm9kWHdOUkRBN0JBWWVpR0IwMlI2VExpVWZZNHpBWVpJbXNxSHdtblJBbmd1V21DWVNUMmNXNjhncXpTN3R6WHhya0YrZERFSTBnYTlKdlVsU0FxOXMyMUp2OFplMXg3NTRqSnNsSVBMZXdzblp4S0NXWE53RzRtVEZqMUdoLzF1NnF6d2ZudXZyMlRnMW9ONkovYXNBZzZHUnBQd0lNQUZjQXphd1Z6UVI0QUFBQUFFbEZUa1N1UW1DQ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQWR0SlJFRlVlTnFrVXpzdkJGRVVQak56WmhZN2F6M0NGaDRSa2ZXcU5LSkZvbERveUlhQ1RsUjBTcUdoRXAwb05LcWxFZ2tSQ1g2QVJJZEVaTFdXd2RyWnNZOTV1ZmV1TzNac3Nnb24rWExQNnp0ejdqbDNCTmQxNFQrQ2MydFBJSXBpR0JGWGlSMGppUHpCU1JMRUxjdGFjUnpuQXgzSEJvTFZnYWk4R0J1cmhhWTZxU0w3SldWSDRtZnB4YXRiazVwTG9tRVlRQkNiR2cxQ3Zlb0NxVndSTkdkeXBJWnhLQmQxWGFlVklvMWhrU1dVeXNUU0RUdVB0dnA5L3Nhd0JJVEhyb3FaVEpvNXlYM0tDdkRZYno4ZFBJK2hZWHd5eGJadEJpNm1hUUtQSlJLUEpGWXNJa2tJcXFwNk1jemxjbDRIRkVQVEYyV0RtMXkrOS9TRGpTams4M25nUExRczEyc3JtODFEZS91SWw1eEluTE96czNQMForLzRUTll1QWVlaElDQlRzdGtDYWFzQSsrczFYdkpnckJqYlgvOVpyYVpWa1FJQ2NCNTVQOVZNS1JRY2tHVUYwdW5Qa3E4Vlk2VStSUW40WXFnb29lL2hLTlQwM2IydGJaQ2RzaXlVellYek1CQmdTbEpMaVpHbWVzV1hkTGdwZjYvVDlML2xWeE1JTDhrK2JHalgwTkl6MC9xdXcxQjNSeldFZ3NpR1ZCd1VNSENiUWtzQjdCMW40T2xWM0wwN256Mmx2VFVFNjZKZGZjTTdDMnBEN3ppQTBGejVYM0tmTTI5M0o3ZVg4OXRHNnY2QkZxRFRDSlVONEcraEwwdi9FbUFBb05YbEc5N3ZuSG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0ICcuL3RyZWxsby5zY3NzJztcclxuXHJcbmltcG9ydCB7VHJlbGxvU3ByaW50ZXJ9IGZyb20gJy4vc3JjL1RyZWxsb1NwcmludGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb1NwcmludGVyO1xyXG5leHBvcnQge1RyZWxsb1NwcmludGVyfTtcclxuIiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gQm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IHtVcGRhdGV9IGZyb20gJy4vVXBkYXRlJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuXHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHR0aGlzLmxpc3RzID0gW107XHJcblx0dGhpcy5tZW1iZXJzID0ge307XHJcblxyXG5cdHRoaXMuZmluZF9jYXJkICA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjYXJkID0gdGhpcy5saXN0c1tpXS5maW5kX2NhcmQoaWQpO1xyXG5cdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNhcmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRoaXMuYWRkX21lbWJlciA9IGZ1bmN0aW9uKG1lbWJlcikge1xyXG5cdFx0dGhpcy5tZW1iZXJzW21lbWJlci5pZF0gPSBtZW1iZXI7XHJcblx0fVxyXG59XHJcblxyXG5Cb2FyZC5mZXRjaCA9IGZ1bmN0aW9uKHRyZWxsbywgbmFtZSwgb3B0aW9ucywgbXNnLCBzdWNjZXNzLCBmYWlsdXJlKSB7XHJcblx0bXNnLmlubmVyVGV4dCA9ICdGZXRjaGluZyBib2FyZCAnICsgbmFtZTtcclxuXHJcblx0Ly8vIEtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IG9wZW4gYXN5bmMgY2FsbHMgdGhlcmUgYXJlIHJpZ2h0IG5vd1xyXG5cdGxldCBhY3RpdmUgPSAwO1xyXG5cclxuXHQvLyBXaWxsIGJlIHNldCB0byBwb2ludCB0byBhIG5ldyBCb2FyZCBvYmplY3RcclxuXHRsZXQgYm9hcmQgPSBudWxsO1xyXG5cclxuXHRhc3luY19zdGFydCgpO1xyXG5cdHRyZWxsby5nZXQoXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCIsXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgIGkrKykge1xyXG5cdFx0XHRcdHZhciBib2FyZERhdGEgPSBkYXRhW2ldO1xyXG5cdFx0XHRcdGlmKGJvYXJkRGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0Ly8gV2UgaGF2ZSBmb3VuZCB0aGUgYm9hcmQgKGlmIG5vdCBjbG9zZWQpXHJcblx0XHRcdFx0XHRpZighYm9hcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgdGhlIGJvYXJkIG9iamVjdFxyXG5cdFx0XHRcdFx0XHRib2FyZCA9IG5ldyBCb2FyZChib2FyZERhdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRmV0Y2ggdGhlIG1lbWJlcnNoaXBcclxuXHRcdFx0XHRcdFx0ZmV0Y2hfbWVtYmVyc2hpcChib2FyZCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbGlzdHMgZm9yIHRoZSBib2FyZFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9saXN0cyhib2FyZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGJvYXJkID09PSBudWxsKSB7XHJcblx0XHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmaW5kIFRyZWxsbyBib2FyZCBcIiArIG5hbWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0KGRhdGEpID0+IHtcclxuXHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gYm9hcmRzXCIpXHJcblx0XHR9LFxyXG5cdFx0bXNnXHJcblx0KVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaCB0aGUgbWVtYmVyc2hpcCBvZiB0aGUgYm9hcmQuXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHRvIGZldGNoIGZvclxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGZldGNoX21lbWJlcnNoaXAoYm9hcmQpIHtcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkL1wiICsgYm9hcmQuaWQgKyBcIi9tZW1iZXJzP2ZpZWxkcz1hbGxcIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihtZW1iZXJEYXRhKSB7XHJcblx0XHRcdFx0XHR2YXIgbWVtYmVyID0gbmV3IE1lbWJlcihib2FyZCwgbWVtYmVyRGF0YSk7XHJcblx0XHRcdFx0XHRib2FyZC5hZGRfbWVtYmVyKG1lbWJlcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbWVtYmVyc2hpcFwiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9saXN0cyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgbGlzdHMgZm9yIFwiICsgbmFtZTtcclxuXHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZHMvXCIgKyBib2FyZC5pZCArIFwiL2xpc3RzP2ZpbHRlcj1vcGVuXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24obGlzdERhdGEpIHtcclxuXHRcdFx0XHRcdGlmKCFsaXN0RGF0YS5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxpc3QgPSBuZXcgTGlzdChib2FyZCwgbGlzdERhdGEpO1xyXG5cdFx0XHRcdFx0XHRib2FyZC5saXN0cy5wdXNoKGxpc3QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRmZXRjaF9jYXJkcyhib2FyZCk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbGlzdHNcIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaCBhbGwgY2FyZHMgYXMgYSBzaW5nbGUgYmF0Y2ggb3BlcmF0aW9uLlxyXG5cdCAqIEBwYXJhbSBib2FyZCBCb2FyZCB3ZSBhcmUgZmV0Y2hpbmcgZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfY2FyZHMoYm9hcmQpIHtcclxuXHRcdG1zZy5pbm5lclRleHQgPSBcIkZldGNoaW5nIGNhcmRzXCI7XHJcblxyXG5cdFx0Ly8gQ29sbGVjdCB1cCBhbGwgVVJMcyBmb3IgYWxsIG9mIHRoZSBsaXN0c1xyXG5cdFx0dmFyIHVybHMgPSAnJztcclxuXHRcdGZvcih2YXIgaT0wOyBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdGlmKHVybHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHVybHMgKz0gJywnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVybHMgKz0gXCIvbGlzdHMvXCIgKyBsaXN0LmlkICsgXCIvY2FyZHMvb3BlblwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEdldCBnZXQgaXRcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JhdGNoP3VybHM9XCIgKyB1cmxzLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Ly8gTG9vcCBvdmVyIHRoZSByZXN1bHQgZm9yIGVhY2ggcHJvdmlkZWQgVVJMXHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGggJiYgaTxib2FyZC5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGJvYXJkLmxpc3RzW2ldO1xyXG5cdFx0XHRcdFx0Y29uc3QgY2FyZHNEYXRhID0gZGF0YVtpXVsyMDBdO1xyXG5cclxuXHRcdFx0XHRcdGNhcmRzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGNhcmREYXRhKSB7XHJcblx0XHRcdFx0XHRcdGlmKCFjYXJkRGF0YS5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBjYXJkID0gbmV3IENhcmQoYm9hcmQsIGxpc3QsIGNhcmREYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhjYXJkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLmFmdGVyICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihjYXJkLmNyZWF0ZWQuZ2V0VGltZSgpIC8gMTAwMCA+IG9wdGlvbnMuYWZ0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5hZGRfY2FyZChjYXJkKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdC5hZGRfY2FyZChjYXJkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZmV0Y2hfYWN0aW9ucyhib2FyZCk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gY2FyZHNcIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gZmV0Y2hfYWN0aW9ucyhib2FyZCkge1xyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL2FjdGlvbnM/ZmlsdGVyPWNvbW1lbnRDYXJkLHVwZGF0ZUNhcmQ6aWRMaXN0JmxpbWl0PTEwMDBcIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuXHRcdFx0XHRcdGlmKCFhY3Rpb24uY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmKGFjdGlvbi50eXBlID09PSBcImNvbW1lbnRDYXJkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29tbWVudCA9IG5ldyBDb21tZW50KGJvYXJkLCBjYXJkLCBhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FyZC5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihhY3Rpb24udHlwZSA9PT0gJ3VwZGF0ZUNhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcmQgPSBib2FyZC5maW5kX2NhcmQoYWN0aW9uLmRhdGEuY2FyZC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IG5ldyBVcGRhdGUoYm9hcmQsIGNhcmQsIGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJkLnVwZGF0ZXMucHVzaCh1cGRhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ym9hcmQubGlzdHMuZm9yRWFjaChmdW5jdGlvbihsaXN0KSB7XHJcblx0XHRcdFx0XHRsaXN0LmNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG5cdFx0XHRcdFx0XHRjYXJkLnNvcnRfdXBkYXRlcygpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkIGluZm9ybWF0aW9uXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGFzeW5jX3N0YXJ0KCkge1xyXG5cdFx0YWN0aXZlKys7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhc3luY19lbmQoKSB7XHJcblx0XHRhY3RpdmUtLTtcclxuXHRcdGlmKGFjdGl2ZSA9PT0gMCkge1xyXG5cdFx0XHRzdWNjZXNzKGJvYXJkKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkJvYXJkLnByb3RvdHlwZS5maW5kX2xpc3QgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0Zm9yKHZhciBpPTA7IGk8dGhpcy5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGxpc3QgPSB0aGlzLmxpc3RzW2ldO1xyXG5cdFx0aWYobGlzdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGxpc3Q7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBTdGFuZGFyZCBUcmVsbG8gYm9hcmQgdmlld1xyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb2FyZFZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7XHJcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdmlldycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBmb3IobGV0IGxpc3Qgb2YgYm9hcmQubGlzdHMpIHtcclxuXHRcdFx0cHJlc2VudExpc3QodmlldywgbGlzdCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmVzZW50TGlzdCA9ICh2aWV3LCBsaXN0KSA9PiB7XHJcbiAgICBcdGNvbnN0IGhlYWRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDMnLCAndHJlbGxvLXBsdXMnKTtcclxuICAgIFx0aGVhZGVyLmlubmVyVGV4dCA9IGxpc3QubmFtZTtcclxuICAgIFx0dmlldy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIFx0Y29uc3QgZXhwYW5kZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXhwYW5kJyk7XHJcbiAgICBcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBcdHZpZXcuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xyXG5cclxuICAgIFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBcdFx0aWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICBcdFx0XHRleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIFx0XHRcdFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuICAgIFx0XHRcdFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG4gICAgXHRsZXQgY291bnQgPSBsaXN0LmNvdW50X21lbWJlcnMoKTtcclxuXHJcblx0ICAgIGxldCBtZW1iZXJzID0gJzxlbT5DYXJkczo8L2VtPlsnICsgbGlzdC5jYXJkcy5sZW5ndGggKyAnXSAnO1xyXG5cdCAgICBmb3IodmFyIGMgaW4gY291bnQpIHtcclxuXHRcdCAgICBpZihjb3VudC5oYXNPd25Qcm9wZXJ0eShjKSkge1xyXG5cdFx0XHQgICAgbWVtYmVycyArPSBjb3VudFtjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudFtjXS5jbnQgKyAnXSZuYnNwOyZuYnNwOyc7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBjb25zdCBjb3VudEVsID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb3VudCcpO1xyXG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChjb3VudEVsKTtcclxuXHQgICAgY291bnRFbC5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHQgICAgZm9yKGxldCBjYXJkIG9mIGxpc3QuY2FyZHMpIHtcclxuXHQgICAgXHRwcmVzZW50Q2FyZChleHBhbmRlciwgY2FyZCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudENhcmQgPSAoZGl2LCBjYXJkKSA9PiB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIEhlYWRpbmdcclxuXHQgICAgLy9cclxuXHQgICAgbGV0IGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKGNhcmQuY3JlYXRlZCk7XHJcblxyXG5cdFx0bGV0IGNhcmREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY2FyZCcpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG5cdFx0Y2FyZERpdi5pbm5lckhUTUwgPSBgPGg0PjxzcGFuIGNsYXNzPVwidHJlbGxvLWRhdGVcIj4ke2RhdGV9PC9zcGFuPiR7Y2FyZC5uYW1lfTwvaDQ+YDtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIE1lbWJlcnNcclxuXHQgICAgLy9cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnJztcclxuXHQgICAgZm9yKGxldCBpZCBvZiBjYXJkLm1lbWJlcnMpIHtcclxuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW2lkXTtcclxuXHRcdCAgICBpZihtZW1iZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0ICAgIG1lbWJlcnMgKz0gJyAvICc7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIG1lbWJlcnMgKz0gJzxzcGFuPicgKyBtZW1iZXIubmFtZSArICc8L3NwYW4+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IG1lbWJlcnNQID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jYXJkLW1lbWJlcnMnKVxyXG5cdCAgICBjYXJkRGl2LmFwcGVuZENoaWxkKG1lbWJlcnNQKTtcclxuXHQgICAgbWVtYmVyc1AuaW5uZXJIVE1MID0gbWVtYmVycztcclxuXHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBEZXNjcmlwdGlvblxyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgZGVzYyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1kZXNjcmlwdGlvbicpO1xyXG5cdCAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xyXG5cdCAgICBkZXNjLmlubmVySFRNTCA9IGNhcmQuZGVzYztcclxuXHJcblx0ICAgIHByZXNlbnRDb21tZW50cyhjYXJkRGl2LCBjYXJkKTtcclxuXHQgICAgcHJlc2VudFVwZGF0ZXMoY2FyZERpdiwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXNlbnRDYXJkID0gcHJlc2VudENhcmQ7XHJcblxyXG4gICAgbGV0IHByZXNlbnRDb21tZW50cyA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgaWYoY2FyZC5jb21tZW50cy5sZW5ndGggPT09IDApIHtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCBjb21tZW50RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWNvbW1lbnRzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChjb21tZW50RGl2KTtcclxuXHJcblx0XHRmb3IobGV0IGNvbW1lbnQgb2YgY2FyZC5jb21tZW50cykge1xyXG5cdFx0XHRsZXQgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW2NvbW1lbnQubWVtYmVyXTtcclxuXHRcdFx0bGV0IG1lbWJlck5hbWUgPSBtZW1iZXIgIT09IHVuZGVmaW5lZCA/IG1lbWJlci5uYW1lIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdFx0bGV0IGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKGNvbW1lbnQuZGF0ZSk7XHJcblxyXG5cdFx0XHRsZXQgaDUgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcblx0XHRcdGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0XHRoNS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHttZW1iZXJOYW1lfWA7XHJcblxyXG5cdFx0XHRsZXQgdGV4dERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcblx0XHRcdHRleHREaXYuaW5uZXJIVE1MID0gY29tbWVudC50ZXh0O1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50VXBkYXRlcyA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgaWYoY2FyZC51cGRhdGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IHVwZGF0ZURpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby11cGRhdGVzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh1cGRhdGVEaXYpO1xyXG5cclxuXHQgICAgZm9yKGxldCB1cGRhdGUgb2YgY2FyZC51cGRhdGVzKSB7XHJcblx0XHQgICAgdmFyIG1lbWJlciA9IGNhcmQuYm9hcmQubWVtYmVyc1t1cGRhdGUubWVtYmVyXTtcclxuXHRcdCAgICB2YXIgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0ICAgIHZhciBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZSh1cGRhdGUuZGF0ZSk7XHJcblx0XHQgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHQgICAgdXBkYXRlRGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBkYXRlICsgJzwvc3Bhbj4gJyArIG1lbWJlck5hbWUgK1xyXG5cdFx0XHQgICAgJyBtb3ZlZCBmcm9tIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEJlZm9yZSArXHJcblx0XHRcdCAgICAnPC9zcGFuPiB0byA8c3BhbiBjbGFzcz1cImxpc3RcIj4nICsgdXBkYXRlLmxpc3RBZnRlciArICc8L3NwYW4+JztcclxuXHQgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuQm9hcmRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuQm9hcmRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJvYXJkVmlldztcclxuLy8vIEBlbmRjb25kXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0LCBkYXRhKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gVXRpbC5zdHJpcF90YWdzKGRhdGEubmFtZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5kZXNjID0gJzxwPicgK1xyXG4gICAgICAgIFV0aWwuc3RyaXBfdGFncyhkYXRhLmRlc2MpLnJlcGxhY2UoL1xcbi9nbSwgJzxwPicpICtcclxuICAgICAgICAnPC9wPic7XHJcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhLmlkLnN1YnN0cigwLCA4KSwgMTYpICogMTAwMCk7XHJcblxyXG4gICAgdGhpcy5tZW1iZXJzID0gW107XHJcblxyXG4gICAgZGF0YS5pZE1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIHRoYXQubWVtYmVycy5wdXNoKGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgIHRoaXMudXBkYXRlcyA9IFtdO1xyXG59XHJcblxyXG5DYXJkLnByb3RvdHlwZS5zb3J0X3VwZGF0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMudXBkYXRlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZihhLmRhdGUgPCBiLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZihhLmRhdGUgPT0gYi5kYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHRoZSBsYXN0IHRpbWUgdGhpcyBjYXJkIHdhcyBtb3ZlZC5cclxuICogVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVuIGEgY29tcGxldGVkIGNhcmQgd2FzXHJcbiAqIG1vdmVkIHRvIENvbXBsZXRlZC5cclxuICovXHJcbkNhcmQucHJvdG90eXBlLmZpbmFsX3RpbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmKHRoaXMudXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1t0aGlzLnVwZGF0ZXMubGVuZ3RoLTFdLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IG1lbWJlcnMgZnJvbSBhIGNvbGxlY3Rpb24gb2YgY2FyZHMuXHJcbiAqIEBwYXJhbSBib2FyZCBCb2FyZCBvYmplY3RcclxuICogQHBhcmFtIGxpc3QgYXJyYXkgb2YgQ2FyZCBvYmplY3RzXHJcbiAqIEByZXR1cm5zIG9iamVjdCB3aXRoIGlkIGFzIHByb3BlcnR5IHRvIG9iamVjdCB7Y250OiA/LCBtZW1iZXI6ID99XHJcbiAqL1xyXG5DYXJkLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbihib2FyZCwgbGlzdCkge1xyXG4gICAgdmFyIGNvdW50ID0ge307XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICBjYXJkLm1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgbWVtYmVyID0gYm9hcmQubWVtYmVyc1tpZF07XHJcbiAgICAgICAgICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KG1lbWJlci5pZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50W21lbWJlci5pZF0uY250Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFttZW1iZXIuaWRdID0ge2NudDogMSwgbWVtYmVyOiBtZW1iZXJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gY29tbWVudCBvbiBhIGNhcmRcclxuICovXHJcblxyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbi8qKlxyXG4gQXJyYXlcclxuIChcclxuIFtpZF0gPT4gNTdlZWMxY2EyMjY4NDY0NmIxMTkzYWJkXHJcbiBbaWRNZW1iZXJDcmVhdG9yXSA9PiA1N2VjMWJkYWZlZWRjYmJjNzNkNjAwZDFcclxuIFtkYXRhXSA9PiBBcnJheVxyXG4gKFxyXG4gW2xpc3RdID0+IEFycmF5XHJcbiAoXHJcbiBbbmFtZV0gPT4gRGVzaWduXHJcbiBbaWRdID0+IDU3ZTkyMGEyYjM0NTE4MjAzZmQ1ZjMxOVxyXG4gKVxyXG5cclxuIFtib2FyZF0gPT4gQXJyYXlcclxuIChcclxuIFtzaG9ydExpbmtdID0+IGk5ZVhFNHlKXHJcbiBbbmFtZV0gPT4gUHJvamVjdCAxIFRlYW06IEFyYm9cclxuIFtpZF0gPT4gNTdlOTIwNGFjM2YzMjNmMTc4NWQ3YmU0XHJcbiApXHJcblxyXG4gW2NhcmRdID0+IEFycmF5XHJcbiAoXHJcbiBbc2hvcnRMaW5rXSA9PiBGZ2d2ZDRuWFxyXG4gW2lkU2hvcnRdID0+IDIxXHJcbiBbbmFtZV0gPT4gVmlzdWFsIFBhcmFkaWdtIENsYXNzIERlc2lnblxyXG4gW2lkXSA9PiA1N2VlYzA3NzZmZDAwNWY3YjgxYzgyMzlcclxuIClcclxuXHJcbiBbdGV4dF0gPT4gVmlzdWFsIFBhcmFkaWdtIENsYXNzIERlc2lnblxyXG4gKVxyXG5cclxuIFt0eXBlXSA9PiBjb21tZW50Q2FyZFxyXG4gW2RhdGVdID0+IDIwMTYtMDktMzBUMTk6NDk6MzAuOTc0WlxyXG4gW21lbWJlckNyZWF0b3JdID0+IEFycmF5XHJcbiAoXHJcbiBbaWRdID0+IDU3ZWMxYmRhZmVlZGNiYmM3M2Q2MDBkMVxyXG4gW2F2YXRhckhhc2hdID0+XHJcbiBbZnVsbE5hbWVdID0+IEJyaXR0YW55IEdhbGxpZXJzXHJcbiBbaW5pdGlhbHNdID0+IEJHXHJcbiBbdXNlcm5hbWVdID0+IGJyaXR0YW55Z2FsbGllcnMxXHJcbiApXHJcbiAqIEBwYXJhbSBib2FyZFxyXG4gKiBAcGFyYW0gY2FyZFxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb21tZW50ID0gZnVuY3Rpb24oYm9hcmQsIGNhcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuY2FyZCA9IGNhcmQ7XHJcbiAgICB0aGlzLm1lbWJlciA9IGRhdGEuaWRNZW1iZXJDcmVhdG9yO1xyXG4gICAgdGhpcy50ZXh0ID0gJzxwPicgK1xyXG4gICAgICAgIFV0aWwuc3RyaXBfdGFncyhkYXRhLmRhdGEudGV4dCkucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xyXG4gICAgICAgICc8L3A+JztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRhLmRhdGUpKTtcclxufSIsIi8qXHJcbiAqIEJhc2Ugb2JqZWN0IGZvciB2aWV3cyBvZiBUcmVsbG8gZGF0YS5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVZpZXcgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbkRhdGFWaWV3LnByb3RvdHlwZS5wcmVzZW50ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge31cclxuXHJcblxyXG4iLCJpbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb25uZWN0ZWRWaWV3ID0gZnVuY3Rpb24oZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKSB7XHJcblx0Ly8gRW5zdXJlIGVtcHR5XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRVdGlsLmFkZENsYXNzKGRpdiwgJ3RyZWxsby1zcHJpbnRlcicpO1xyXG5cclxuXHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0VXRpbC5hZGRDbGFzcyhwLCAnY2VudGVyJyk7XHJcblxyXG5cdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0YnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0IHRvIFRyZWxsbyc7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dHJlbGxvLmF1dGhvcml6ZSgpO1xyXG5cdH0pXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbGlzdCBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3QgPSBmdW5jdGlvbihib2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5jYXJkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY2FyZHNfYnlfaWQgPSB7fTtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuYWRkX2NhcmQgPSBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcbiAgICB0aGlzLmNhcmRzX2J5X2lkW2NhcmQuaWRdID0gY2FyZDtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuZmluZF9jYXJkID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGlmKHRoaXMuY2FyZHNfYnlfaWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHNfYnlfaWRbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5jb3VudF9tZW1iZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gQ2FyZC5jb3VudF9tZW1iZXJzKHRoaXMuYm9hcmQsIHRoaXMuY2FyZHMpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tICcuL0JvYXJkVmlldyc7XHJcbmltcG9ydCB7U3ByaW50Vmlld30gZnJvbSBcIi4vU3ByaW50cy9TcHJpbnRWaWV3XCI7XHJcbmltcG9ydCB7U3ByaW50VGFibGVWaWV3fSBmcm9tICcuL1NwcmludHMvU3ByaW50VGFibGVWaWV3JztcclxuaW1wb3J0IHtEaXNjb25uZWN0ZWRWaWV3fSBmcm9tIFwiLi9EaXNjb25uZWN0ZWRWaWV3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpblZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcclxuXHQvLyBFbnN1cmUgZW1wdHlcclxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XHJcblxyXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcclxuXHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Rpc2Nvbm5lY3QnO1xyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRyZWxsby5kaXNjb25uZWN0KCk7XHJcblxyXG5cdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKTtcclxuXHR9KVxyXG5cclxuXHJcblx0bGV0IHBTdGF0dXMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLXN0YXR1cycpO1xyXG5cdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcgdG8gVHJlbGxvLi4uJztcclxuXHRkaXYuYXBwZW5kQ2hpbGQocFN0YXR1cyk7XHJcblxyXG5cdGxldCBwTXNnID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1tc2cnKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQocE1zZyk7XHJcblxyXG5cdEJvYXJkLmZldGNoKHRyZWxsbywgb3B0aW9ucy5ib2FyZCwgb3B0aW9ucywgcE1zZywgKGJvYXJkKSA9PiB7XHJcblx0XHQvLyBTdWNjZXNzXHJcblx0XHRwU3RhdHVzLmlubmVyVGV4dCA9ICdUcmVsbG8gQm9hcmQ6ICcgKyBib2FyZC5uYW1lO1xyXG5cdFx0cE1zZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBNc2cpO1xyXG5cclxuXHRcdGZvcihsZXQgdmlldyBpbiBvcHRpb25zLnZpZXdzKSB7XHJcblx0XHRcdHN3aXRjaCh2aWV3KSB7XHJcblx0XHRcdFx0Y2FzZSAnYm9hcmQnOlxyXG5cdFx0XHRcdFx0bGV0IHYgPSBuZXcgQm9hcmRWaWV3KGRpdiwgYm9hcmQpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnc3ByaW50JzpcclxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VmlldyhkaXYsIGJvYXJkLCBvcHRpb25zLnZpZXdzLnNwcmludCk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzcHJpbnRUYWJsZSc6XHJcblx0XHRcdFx0XHR2ID0gbmV3IFNwcmludFRhYmxlVmlldyhkaXYsIGJvYXJkLCBvcHRpb25zLnZpZXdzLnNwcmludFRhYmxlKTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCAobXNnKSA9PiB7XHJcblx0XHQvLyBGYWlsdXJlXHJcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XHJcblx0XHRwU3RhdHVzLmlubmVyVGV4dCA9IG1zZztcclxuXHR9KTtcclxuXHJcblx0Ly90cmVsbG8uZmV0Y2goKTtcclxuXHJcbn0iLCIvKlxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBtZW1iZXIgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBNZW1iZXIgPSBmdW5jdGlvbihib2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxufSIsIi8qXHJcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgc3ByaW50IGluIHRoZSBzcHJpbnRzIGFuYWx5c2lzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludCA9IGZ1bmN0aW9uKHNwcmludHMsIHN0YXJ0LCBlbmQpIHtcclxuICAgIHRoaXMuc3ByaW50cyA9IHNwcmludHM7XHJcbiAgICB0aGlzLnN0YXJ0X21lZXRpbmcgPSBzdGFydDtcclxuICAgIHRoaXMuZW5kX21lZXRpbmcgPSBlbmQ7XHJcblxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcclxufVxyXG5cclxuU3ByaW50LnByb3RvdHlwZS5lbmRfdGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZW5kX21lZXRpbmcuY3JlYXRlZC5nZXRUaW1lKCkgK1xyXG4gICAgICAgICh0aGlzLnNwcmludHMuc3ByaW50X3RpbWVfc2xvcCAqIDEwMDApKTtcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUZWFtIG1lbWJlciBzdGF0aXN0aWNzIGZvciBhIHNwcmludFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRNZW1iZXIgPSBmdW5jdGlvbihzcHJpbnRzLCBtZW1iZXIpIHtcclxuICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xyXG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdzX2NvdW50ID0gMDtcclxuICAgIHRoaXMubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbXBsZXRlZF9jb3VudCA9IDA7XHJcbiAgICB0aGlzLmNvbXBsZXRlZF90b3RhbCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMucmV2aWV3c19jb3VudCA9IDA7XHJcbiAgICB0aGlzLnJldmlld3NfdG90YWwgPSAwO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLm1lZXRpbmdzX3BlcmNlbnRhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmKHRoaXMubWVldGluZ3NfY291bnQgPD0gdGhpcy5zcHJpbnRzLm1lZXRpbmdzX3Nsb3ApIHtcclxuICAgICAgICByZXR1cm4gJyhpbnN1ZmZpY2llbnQgbWVldGluZ3MpJztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGVyID0gdGhpcy5tZWV0aW5nc19hdHRlbmRlZCAvICh0aGlzLm1lZXRpbmdzX2NvdW50IC0gdGhpcy5zcHJpbnRzLm1lZXRpbmdzX3Nsb3ApO1xyXG4gICAgaWYocGVyID4gMSkge1xyXG4gICAgICAgIHBlciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBlci50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLmNvbXBsZXRlZF9mYWN0b3IgPSBmdW5jdGlvbih0ZWFtU2l6ZSkge1xyXG4gICAgaWYodGhpcy5jb21wbGV0ZWRfdG90YWwgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmFjdG9yID0gdGhpcy5jb21wbGV0ZWRfY291bnQgL1xyXG4gICAgICAgICh0aGlzLmNvbXBsZXRlZF90b3RhbCAvIHRlYW1TaXplICogdGhpcy5zcHJpbnRzLmNvbXBsZXRlZF9mYWN0b3IpO1xyXG4gICAgaWYoZmFjdG9yID4gMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmYWN0b3IudG9GaXhlZCgyKTtcclxufVxyXG5cclxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5yZXZpZXdpbmdfZmFjdG9yID0gZnVuY3Rpb24odGVhbVNpemUpIHtcclxuICAgIGlmKHRoaXMucmV2aWV3c190b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSB0aGlzLnJldmlld3NfY291bnQgL1xyXG4gICAgICAgICh0aGlzLnJldmlld3NfdG90YWwgLyB0ZWFtU2l6ZSAqIHRoaXMuc3ByaW50cy5yZXZpZXdpbmdfZmFjdG9yKTtcclxuICAgIGlmKGZhY3RvciA+IDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWN0b3IudG9GaXhlZCgyKTtcclxufSIsIi8qXHJcbiAqIFRyZWxsbyBib2FyZCB2aWV3IHRoYXQgZGlzcGxheXMgc3ByaW50IHJlc3VsdCBpbiBhIHRhYmxlLlxyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRUYWJsZVZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkLCBvcHRpb25zKSB7XHJcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGxldCBhZGRIZWFkaW5ncyA9IHRydWU7XHJcbiAgICBpZihvcHRpb25zLmFkZEhlYWRpbmdzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBhZGRIZWFkaW5ncyA9IG9wdGlvbnMuYWRkSGVhZGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1zcHJpbnQtdGFibGUnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBjb25zdCB0YWJsZSA9IFV0aWwuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuXHQgICAgdmlldy5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuY2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICAgICAgVXRpbC5hZGRDbGFzcyh0YWJsZSwgb3B0aW9ucy5jbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ3JlYXRlIHRoZSBzcHJpbnQgYW5hbHlzaXNcclxuXHQgICAgLy9cclxuXHQgICAgY29uc3Qgc3ByaW50cyA9IG5ldyBTcHJpbnRzKGJvYXJkKTtcclxuXHQgICAgY29uc3QgdGVhbVNpemUgPSBzcHJpbnRzLm51bV9tZW1iZXJzKCk7XHJcblxyXG5cdCAgICBpZihhZGRIZWFkaW5ncykge1xyXG5cdFx0ICAgIHRhYmxlSGVhZGluZyh0YWJsZSwgYm9hcmQsIHNwcmludHMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgcm93SFRNTCA9ICcnO1xyXG5cdCAgICBmdW5jdGlvbiBpdGVtKGRhdGEpIHtcclxuXHRcdCAgICByb3dIVE1MICs9ICc8dGQ+JyArIGRhdGEgKyAnPC90ZD4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmb3IodmFyIGlkIGluIHNwcmludHMubWVtYmVycykge1xyXG5cdFx0ICAgIGlmKHNwcmludHMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuXHRcdFx0ICAgIHZhciBtZW1iZXIgPSBzcHJpbnRzLm1lbWJlcnNbaWRdO1xyXG5cdFx0XHQgICAgdmFyIGlkID0gbWVtYmVyLm1lbWJlci5pZDtcclxuXHJcblx0XHRcdCAgICByb3dIVE1MID0gJyc7XHJcblxyXG5cdFx0XHQgICAgLy8gT3VyIHN0YXRpc3RpY3NcclxuXHRcdFx0ICAgIGl0ZW0oYm9hcmQubmFtZSk7XHJcblx0XHRcdCAgICBpdGVtKHRlYW1TaXplKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lbWJlci5uYW1lKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX2NvdW50KTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX3BlcmNlbnRhZ2UoKSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX3RvdGFsKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld3NfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3c190b3RhbCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdpbmdfZmFjdG9yKHRlYW1TaXplKSk7XHJcblx0XHRcdCAgICBpdGVtKHNwcmludHMuc3ByaW50cy5sZW5ndGgpO1xyXG5cclxuXHRcdFx0ICAgIHNwcmludHMuc3ByaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNwcmludCkge1xyXG5cdFx0XHRcdCAgICB2YXIgY250ID0gMDtcclxuXHRcdFx0XHQgICAgc3ByaW50LmNvbXBsZXRlZC5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuXHRcdFx0XHRcdCAgICBpZihjYXJkLm1lbWJlcnMubGVuZ3RoID09IDEgJiYgY2FyZC5tZW1iZXJzWzBdID09IGlkKSB7XHJcblx0XHRcdFx0XHRcdCAgICBjbnQrKztcclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIH0pO1xyXG5cclxuXHRcdFx0XHQgICAgaXRlbShjbnQpO1xyXG5cdFx0XHRcdCAgICBpdGVtKHNwcmludC5jb21wbGV0ZWQubGVuZ3RoKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cclxuXHRcdFx0ICAgIGlmKCFpc05hTihhZGRIZWFkaW5ncykpIHtcclxuXHRcdFx0XHQgICAgZm9yKHZhciBpPXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGk8YWRkSGVhZGluZ3M7IGkrKykge1xyXG5cdFx0XHRcdFx0ICAgIGl0ZW0oXCImbmJzcDtcIik7XHJcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cdFx0XHQgICAgdHIuaW5uZXJIVE1MID0gcm93SFRNTDtcclxuXHRcdFx0ICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZUhlYWRpbmcgPSBmdW5jdGlvbih0YWJsZSwgYm9hcmQsIHNwcmludHMpIHtcclxuICAgICAgICBjb25zdCB0ciA9IFV0aWwuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMudHIxY2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBVdGlsLmFkZENsYXNzKHRyLCBvcHRpb25zLnRyMWNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICB2YXIgcm93SFRNTCA9ICcnO1xyXG5cdCAgICBmdW5jdGlvbiBpdGVtKGRhdGEpIHtcclxuXHRcdCAgICByb3dIVE1MICs9ICc8dGg+PGRpdj4nICsgZGF0YSArICc8L2Rpdj48L3RoPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGl0ZW0oXCJUZWFtXCIpO1xyXG5cdCAgICBpdGVtKFwiI1wiKTtcclxuXHQgICAgaXRlbShcIk1lbWJlclwiKTtcclxuXHQgICAgaXRlbShcIkF0dGVuZGVkXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiQ29tcGxldGVkXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiUmV2aWV3c1wiKTtcclxuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xyXG5cdCAgICBpdGVtKFwiJVwiKTtcclxuXHQgICAgaXRlbShcIlNwcmludHNcIik7XHJcblxyXG5cdCAgICBpZihhZGRIZWFkaW5ncyA9PT0gdHJ1ZSkge1xyXG5cdFx0ICAgIGZvcih2YXIgaT0xOyBpPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0ICAgIGl0ZW0oaSk7XHJcblx0XHRcdCAgICBpdGVtKFwiI1wiKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PWFkZEhlYWRpbmdzOyBpKyspIHtcclxuXHRcdFx0ICAgIGl0ZW0oaSk7XHJcblx0XHRcdCAgICBpdGVtKFwiI1wiKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gcm93SFRNTDtcclxuICAgIH1cclxufVxyXG5cclxuLy8vIEBjb25kXHJcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XHJcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRUYWJsZVZpZXc7XHJcbi8vLyBAZW5kY29uZFxyXG5cclxuXHJcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUudGFibGVfaGVhZGluZ3MgPSBmdW5jdGlvbihib2FyZCwgc3ByaW50cykge1xyXG5cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRyZWxsbyBib2FyZCB2aWV3IHRoYXQgZGlzcGxheXMgc3ByaW50IHJlc3VsdHNcclxuICovXHJcbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4uL0RhdGFWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRzfSBmcm9tICcuL1NwcmludHMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuLi9DYXJkXCI7XHJcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tIFwiLi4vQm9hcmRWaWV3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50VmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgLy8gVGhpcyB1c2VzIEJvYXJkVmlldyB0byBkcmF3IHdoYXQgaXQga25vd3MgaG93IHRvIGRyYXdcclxuICAgIGNvbnN0IGJvYXJkX3ZpZXcgPSBuZXcgQm9hcmRWaWV3KGRpdiwgYm9hcmQpO1xyXG5cclxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xyXG5cdCAgICAvL1xyXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xyXG5cclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXNwcmludHMnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGxldCBoMiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHQgICAgaDIuaW5uZXJUZXh0ID0gJ1NwcmludHMgQW5hbHlzaXMnO1xyXG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKGgyKTtcclxuXHJcblx0XHRwcmVzZW50X2Vycm9ycyh2aWV3LCBzcHJpbnRzKTtcclxuXHRcdHByZXNlbnRfd2FybmluZ3Modmlldywgc3ByaW50cyk7XHJcblxyXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPiAwKSB7XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHByZXNlbnRfc3ByaW50cyh2aWV3LCBzcHJpbnRzKTtcclxuXHRcdHByZXNlbnRfbWVtYmVycyh2aWV3LCBzcHJpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9lcnJvcnMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuXHQgICAgaWYoc3ByaW50cy5lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCBlcnJvcnMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXJyb3JzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChlcnJvcnMpO1xyXG5cclxuXHQgICAgZXJyb3JzLmlubmVySFRNTCA9ICc8aDM+RXJyb3JzPC9oMz4nO1xyXG5cclxuXHQgICAgZm9yKGxldCBlcnJvciBvZiBzcHJpbnRzLmVycm9ycykge1xyXG5cdCAgICBcdGxldCBwID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIFx0ZXJyb3JzLmFwcGVuZENoaWxkKHApO1xyXG5cdCAgICBcdHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgZXJyb3IuY29kZSArICc6PC9zcGFuPiAnICsgZXJyb3IubXNnO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfd2FybmluZ3MgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuICAgIFx0aWYoc3ByaW50cy53YXJuaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgIFx0XHRyZXR1cm47XHJcbiAgICBcdH1cclxuXHJcblx0ICAgIGxldCB3YXJuaW5ncyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby13YXJuaW5ncycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQod2FybmluZ3MpO1xyXG5cclxuXHQgICAgd2FybmluZ3MuaW5uZXJIVE1MID0gJzxoMz5XYXJuaW5nczwvaDM+JztcclxuXHJcblx0ICAgIGZvcihsZXQgd2FybmluZyBvZiBzcHJpbnRzLndhcm5pbmdzKSB7XHJcblx0XHQgICAgbGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdCAgICB3YXJuaW5ncy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdCAgICBwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInRyZWxsby1jb2RlXCI+JyArIHdhcm5pbmcuY29kZSArICc6PC9zcGFuPiAnICsgd2FybmluZy5tc2c7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9zcHJpbnRzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBmb3IodmFyIHM9MTsgczw9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgcysrKSB7XHJcblx0ICAgICAgICB2YXIgc3ByaW50ID0gc3ByaW50cy5zcHJpbnRzW3MtMV07XHJcblx0ICAgICAgICBwcmVzZW50X3NwcmludCh2aWV3LCBzcHJpbnRzLCBzLCBzcHJpbnQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfc3ByaW50ID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzLCBudW0sIHNwcmludCkge1xyXG5cdCAgICBjb25zdCBmbURhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHNwcmludC5zdGFydF9tZWV0aW5nLmNyZWF0ZWQpO1xyXG5cdCAgICBjb25zdCB0b0RhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHNwcmludC5lbmRfbWVldGluZy5jcmVhdGVkKTtcclxuXHQgICAgY29uc3QgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBNZW1iZXIgY291bnRzIGZvciBjb21wbGV0ZWRcclxuXHQgICAgLy9cclxuICAgICAgICBjb25zdCBjb3VudHMgPSBDYXJkLmNvdW50X21lbWJlcnMoc3ByaW50cy5ib2FyZCwgc3ByaW50LmNvbXBsZXRlZCk7XHJcblxyXG5cdCAgICBsZXQgdG90YWxDb21wbGV0ZWQgPSAwO1xyXG5cdCAgICBmb3IobGV0IHNwcmludCBvZiBzcHJpbnRzLnNwcmludHMpIHtcclxuXHRcdCAgICB0b3RhbENvbXBsZXRlZCArPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHQgICAgfVxyXG5cclxuXHJcblx0ICAgIGxldCBjb21wbGV0aW9uRmFjdG9yID0gMC4wMDtcclxuXHQgICAgaWYodG90YWxDb21wbGV0ZWQgPiAwKSB7XHJcblx0ICAgICAgICBjb21wbGV0aW9uRmFjdG9yID0gY29tcGxldGVkIC8gKHRvdGFsQ29tcGxldGVkIC8gc3ByaW50cy5zcHJpbnRzLmxlbmd0aCAqIDAuOCk7XHJcblx0ICAgICAgICBpZihjb21wbGV0aW9uRmFjdG9yID4gMSkge1xyXG5cdCAgICAgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSAxO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBjb21wbGV0aW9uRmFjdG9yID0gY29tcGxldGlvbkZhY3Rvci50b0ZpeGVkKDIpO1xyXG5cclxuXHQgICAgY29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHQgICAgaGVhZGVyLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImRhdGVcIj4nICsgY29tcGxldGVkICtcclxuICAgICAgICAgJyB0YXNrcyAnICsgY29tcGxldGlvbkZhY3RvciArICcgLyAnICsgZm1EYXRlICsgJyB0byAnICsgdG9EYXRlICtcclxuICAgICAgICAgJzwvc3Bhbj5TcHJpbnQ6ICcgKyBudW07XHJcblxyXG5cdCAgICBjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcclxuXHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGV4cGFuZGVyKTtcclxuXHJcblx0ICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIGlmKGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG5cdFx0XHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuc3RhcnRfbWVldGluZyk7XHJcbiAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgc3ByaW50LmVuZF9tZWV0aW5nKTtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENvbXBsZXRlZFxyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgcENvbXBsZXRlZCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY29tcGxldGVkLWhlYWRlcicpO1xyXG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChwQ29tcGxldGVkKTtcclxuXHQgICAgcENvbXBsZXRlZC5pbm5lclRleHQgPSAnU3ByaW50IENvbXBsZXRlZCBUYXNrcyc7XHJcblxyXG5cdCAgICBsZXQgcE1lbWJlcnMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBNZW1iZXJzKTtcclxuXHJcblx0ICAgIGxldCBtZW1iZXJzID0gJzxlbT5Db21wbGV0ZWQ6PC9lbT5bJyArIHNwcmludC5jb21wbGV0ZWQubGVuZ3RoICsgJ10gJztcclxuXHQgICAgZm9yKHZhciBjIGluIGNvdW50cykge1xyXG5cdCAgICAgICAgaWYoY291bnRzLmhhc093blByb3BlcnR5KGMpKSB7XHJcblx0ICAgICAgICAgICAgbWVtYmVycyArPSBjb3VudHNbY10ubWVtYmVyLm5hbWUgKyAnOlsnICsgY291bnRzW2NdLmNudCArICddJm5ic3A7Jm5ic3A7JztcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcE1lbWJlcnMuaW5uZXJIVE1MID0gbWVtYmVycztcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIFByZXNlbnQgY29tcGxldGVkIGNhcmRzXHJcblx0ICAgIC8vXHJcblx0ICAgIGZvcihsZXQgaT0wOyBpPHNwcmludC5jb21wbGV0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgIGxldCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2ldO1xyXG5cdCAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgY29tcGxldGVkKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X21lbWJlcnMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuICAgIFx0bGV0IG1lbWJlcnNEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tbWVtYmVycycpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyc0Rpdik7XHJcblxyXG5cdCAgICBmb3IodmFyIGlkIGluIHNwcmludHMubWVtYmVycykge1xyXG5cdCAgICAgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdCAgICAgICAgICAgIHZhciBtZW1iZXIgPSBzcHJpbnRzLm1lbWJlcnNbaWRdO1xyXG5cdCAgICAgICAgICAgIHByZXNlbnRfbWVtYmVyKG1lbWJlcnNEaXYsIHNwcmludHMsIG1lbWJlcik7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0XHRwcmVzZW50X2luZm8obWVtYmVyc0Rpdiwgc3ByaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfbWVtYmVyID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzLCBtZW1iZXIpIHtcclxuICAgIFx0bGV0IG1lbWJlckRpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXInKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKG1lbWJlckRpdik7XHJcblxyXG5cdCAgICBsZXQgbWVldGluZ3MgPSBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgPT09IDEgPyAnIG1lZXRpbmcnIDogJyBtZWV0aW5ncyc7XHJcblx0ICAgIGxldCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcclxuXHJcblx0ICAgIG1lbWJlckRpdi5pbm5lckhUTUwgPSAnPGg0PicgKyBtZW1iZXIubWVtYmVyLm5hbWUgKyAnPC9oND4nICtcclxuXHJcblx0ICAgICAgICAnPHA+TWVldGluZ3MgYXR0ZW5kZWQ6ICcgKyBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgKyAnLycgKyBtZW1iZXIubWVldGluZ3NfY291bnQgK1xyXG5cdCAgICAgICAgJyBwZXJjZW50YWdlOiAnICsgbWVtYmVyLm1lZXRpbmdzX3BlcmNlbnRhZ2UoKSArXHJcblx0ICAgICAgICAnIDxlbT5Zb3UgYXJlIGFsbG93ZWQgdG8gbWlzcyAnICsgc3ByaW50cy5tZWV0aW5nc19zbG9wICsgbWVldGluZ3MgKyAgJzwvZW0+JyArXHJcblx0ICAgICAgICAnPC9wPicgK1xyXG5cclxuXHQgICAgICAgICc8cD5UYXNrcyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIuY29tcGxldGVkX2NvdW50ICtcclxuXHQgICAgICAgICcvJyArIChtZW1iZXIuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUpLnRvRml4ZWQoMikgKyAnIGZvciBhIGNvbXBsZXRpb24gZmFjdG9yIG9mOiAnICtcclxuXHQgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfZmFjdG9yKHRlYW1TaXplKSArICc8L3A+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPlJldmlld3MgY29tcGxldGVkOiAnICsgbWVtYmVyLnJldmlld3NfY291bnQgKyAnIGZvciBhIHJldmlld2luZyBmYWN0b3Igb2Y6ICcgK1xyXG5cdCAgICAgICAgbWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X2luZm8gPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuICAgIFx0Y29uc3QgaW5mb0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1pbmZvJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcclxuXHJcbiAgICBcdGluZm9EaXYuaW5uZXJIVE1MID0gJzxwPlRoZSBjb21wbGV0aW9uIGZhY3RvciBmb3IgdGFza3MgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCBldmVyeScgK1xyXG5cdFx0ICAgICcgdGVhbSBtZW1iZXIgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgJyArIChzcHJpbnRzLmNvbXBsZXRlZF9mYWN0b3IgKiAxMDApLnRvRml4ZWQoMCkgKyAnJSBvZicgK1xyXG5cdFx0ICAgICcgYW4gZXF1YWwgZGlzdHJpYnV0aW9uIG9mIHRhc2tzLiBWYWx1ZXMgbGVzcyB0aGFuIDEuMDAgaW5kaWNhdGUgdGhhdCB5b3Ugd2lsbCBiZScgK1xyXG5cdFx0ICAgICcgbG9zaW5nIHBvaW50cyBvbiB0aGUgYXNzaWdubWVudC48L3A+JyArXHJcblx0XHQgICAgJzxwPlRoZSByZXZpZXdpbmcgZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5IHRlYW0gbWVtYmVyJyArXHJcblx0XHQgICAgJyBpcyBleHBlY3RlZCB0byByZXZpZXcgJyArIChzcHJpbnRzLnJldmlld2luZ19mYWN0b3IgKiAxMDApLnRvRml4ZWQoMCkgKyAnJSBvZiBhbiBlcXVhbCcgK1xyXG5cdFx0ICAgICcgZGlzdHJpYnV0aW9uIG9mIHRhc2tzLiBUaGlzIGZhY3RvciBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IDkwJSBvZiB0YXNrcyBzaG91bGQnICtcclxuXHRcdCAgICAnIGJlIHByb2dyYW1taW5nIHRhc2tzLiBWYWx1ZXMgbGVzcyB0aGFuIDEuMDAgaW5kaWNhdGUgdGhhdCB5b3Ugd2lsbCBiZScgK1xyXG5cdFx0ICAgICcgbG9zaW5nIHBvaW50cyBvbiB0aGUgYXNzaWdubWVudC48L3A+J1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuU3ByaW50Vmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XHJcblNwcmludFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaW50VmlldztcclxuLy8vIEBlbmRjb25kXHJcbiIsIi8qXHJcbiAqIFNwcmludCBhbmFseXNpcyBvZiBUcmVsbG8gYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge1NwcmludH0gZnJvbSBcIi4vU3ByaW50XCI7XHJcbmltcG9ydCB7U3ByaW50TWVtYmVyfSBmcm9tIFwiLi9TcHJpbnRNZW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRzID0gZnVuY3Rpb24oYm9hcmQpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAvLy8gTnVtYmVyIG9mIG1pc3NlZCBtZWV0aW5ncyBhbGxvd1xyXG4gICAgdGhpcy5tZWV0aW5nc19zbG9wID0gMTtcclxuXHJcblxyXG4gICAgLy8vIE51bWJlciBvZiBzZWNvbmRzIGFmdGVyIG1lZXRpbmcgdGltZSB0byBjb25zaWRlciBjb21wbGV0ZWRcclxuICAgIC8vLyBpbiBhIGN1cnJlbnQgc3ByaW50IGluIHNlY29uZHMuXHJcbiAgICB0aGlzLnNwcmludF90aW1lX3Nsb3AgPSA1ICogNjAgKiA2MDsgICAvLyA1IGhvdXJzXHJcbiAgICBcclxuICAgIC8vLyBFYWNoIHVzZXJzIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlIDgwJSBvZiBoaXMgc2hhcmUgb2YgdGFza3NcclxuICAgIHRoaXMuY29tcGxldGVkX2ZhY3RvciA9IDAuODtcclxuICAgIFxyXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIDkwJSBvZiB0aGUgdGFzayBjb3VudCBpbiByZXZpZXdzXHJcbiAgICB0aGlzLnJldmlld2luZ19mYWN0b3IgPSAwLjggKiAwLjk7XHJcblxyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG5cclxuICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICB0aGlzLndhcm5pbmdzID0gW107XHJcblxyXG4gICAgdGhpcy5tZW1iZXJzID0ge307XHJcbiAgICB0aGlzLnNwcmludHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmRlc2lnbiA9IG51bGw7XHJcbiAgICB0aGlzLnJpc2tzID0gbnVsbDtcclxuICAgIHRoaXMubWVldGluZ3MgPSBudWxsO1xyXG4gICAgdGhpcy50b2RvID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaW50X2FjdGl2ZSA9IG51bGw7XHJcbiAgICB0aGlzLnNwcmludF9jb21wbGV0ZWQgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBudWxsO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb3B5IG92ZXIgdGhlIG1lbWJlcnNcclxuICAgIC8vXHJcbiAgICBmb3IodmFyIGlkIGluIGJvYXJkLm1lbWJlcnMpIHtcclxuICAgICAgICB2YXIgbWVtYmVyID0gYm9hcmQubWVtYmVyc1tpZF07XHJcbiAgICAgICAgaWYobWVtYmVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJjc2UzMzVcIikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0gPSBuZXcgU3ByaW50TWVtYmVyKHRoaXMsIG1lbWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEZpbmQgYWxsIG9mIHRoZSByZXF1aXJlZCBsaXN0c1xyXG4gICAgLy9cclxuICAgIHRoaXMuZmluZF9saXN0cygpO1xyXG5cclxuICAgIGlmKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlOTAwJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBPcmRlciB0ZXN0aW5nXHJcbiAgICAvL1xyXG4gICAgdGhpcy5vcmRlcl90ZXN0KCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIERldGVybWluZSBhdHRlbmRhbmNlXHJcbiAgICAvL1xyXG4gICAgdGhpcy5tZWV0aW5nX2F0dGVuZGFuY2UoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29udmVydCBtZWV0aW5ncyBpbnRvIHNwcmludHNcclxuICAgIC8vXHJcbiAgICB0aGlzLmNyZWF0ZV9zcHJpbnRzKCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFNvcnQgY29tcGxldGVkIGludG8gc3ByaW50c1xyXG4gICAgLy9cclxuICAgIHRoaXMuc29ydF9jb21wbGV0ZWQoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29tcGxldGVkIHN0YXRpc3RpY3NcclxuICAgIC8vXHJcbiAgICB0aGlzLmNvbXBsZXRlZF9zdGF0aXN0aWNzKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnN1cmUgYWxsIHJlcXVpcmVkIGxpc3RzIGV4aXN0LlxyXG4gKi9cclxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9saXN0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gRmluZCB0aGUgXCJEZXNpZ25cIiBsaXN0XHJcbiAgICB0aGlzLmRlc2lnbiA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdEZXNpZ24nKTtcclxuICAgIGlmKHRoaXMuZGVzaWduID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiUmlza3NcIiBsaXN0XHJcbiAgICB0aGlzLnJpc2tzID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1Jpc2tzJyk7XHJcbiAgICBpZih0aGlzLnJpc2tzID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiTWVldGluZ3NcIiBsaXN0XHJcbiAgICB0aGlzLm1lZXRpbmdzID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ01lZXRpbmdzJyk7XHJcbiAgICBpZih0aGlzLm1lZXRpbmdzID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVG8gRG9cIiBsaXN0XHJcbiAgICB0aGlzLnRvZG8gPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVG8gRG8nKTtcclxuICAgIGlmKHRoaXMudG9kbyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlRoaXMgU3ByaW50IEFjdGl2ZVwiIGxpc3RcclxuICAgIHRoaXMuc3ByaW50X2FjdGl2ZSA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUaGlzIFNwcmludCBBY3RpdmUnKTtcclxuICAgIGlmKHRoaXMuc3ByaW50X2FjdGl2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlRoaXMgU3ByaW50IENvbXBsZXRlZFwiIGxpc3RcclxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUaGlzIFNwcmludCBDb21wbGV0ZWQnKTtcclxuICAgIGlmKHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDYnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIkNvbXBsZXRlZFwiIGxpc3RcclxuICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0NvbXBsZXRlZCcpO1xyXG4gICAgaWYodGhpcy5jb21wbGV0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnN1cmUgbGlzdHMgYXJlIGluIHRoZSByaWdodCBvcmRlclxyXG4gKi9cclxuU3ByaW50cy5wcm90b3R5cGUub3JkZXJfdGVzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG9yZGVyID0gWydEZXNpZ24nLCAnUmlza3MnLCAnTWVldGluZ3MnLFxyXG4gICAgICAgICdUbyBEbycsICdUaGlzIFNwcmludCBBY3RpdmUnLFxyXG4gICAgICAgICdUaGlzIFNwcmludCBDb21wbGV0ZWQnLCAnQ29tcGxldGVkJ107XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8b3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih0aGlzLmJvYXJkLmxpc3RzW2ldLm5hbWUudG9Mb3dlckNhc2UoKSAhPT0gb3JkZXJbaV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmcoJ3cwMDEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IG1lZXRpbmcgYXR0ZW5kYW5jZSBmb3IgYSB1c2VyXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5tZWV0aW5nX2F0dGVuZGFuY2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB2YXIgbWVldGluZ3NfY291bnQgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLmxlbmd0aDtcclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMubWVtYmVyc1tpZF07XHJcbiAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2NvdW50ID0gbWVldGluZ3NfY291bnQ7XHJcbiAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lZXRpbmdzLmNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGF0LmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5jcmVhdGVfc3ByaW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG1lZXRpbmdzID0gdGhpcy5tZWV0aW5ncy5jYXJkcy5zbGljZSgpO1xyXG5cclxuICAgIG1lZXRpbmdzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIGlmKGEuY3JlYXRlZCA8IGIuY3JlYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGEuY3JlYXRlZCA9PT0gYi5jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPChtZWV0aW5ncy5sZW5ndGggLSAxKTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpbnRzLnB1c2gobmV3IFNwcmludCh0aGlzLCBtZWV0aW5nc1tpXSwgbWVldGluZ3NbaSsxXSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5zb3J0X2NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBjb21wbGV0ZWQgPSB0aGlzLmNvbXBsZXRlZC5jYXJkcy5zbGljZSgpO1xyXG4gICAgY29tcGxldGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHZhciBhdCA9IGEuZmluYWxfdGltZSgpO1xyXG4gICAgICAgIHZhciBidCA9IGIuZmluYWxfdGltZSgpO1xyXG4gICAgICAgIGlmKGF0ID09PSBidCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2UgaWYoYXQgPCBidCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbXBsZXRlZC5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBsZXRlZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgaWdub3JlIFwicmlza1wiIGNhcmRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihjb21wbGV0ZWQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJyaXNrXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGNvbXBsZXRlZC5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHRoYXQuc3ByaW50cy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZihkYXRlIDw9IHNwcmludC5lbmRfdGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGkgPj0gdGhhdC5zcHJpbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaSA9IHRoYXQuc3ByaW50cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3ByaW50ID0gdGhhdC5zcHJpbnRzW2ldO1xyXG4gICAgICAgICAgICBzcHJpbnQuY29tcGxldGVkLnB1c2goY29tcGxldGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmNvbXBsZXRlZF9zdGF0aXN0aWNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY29tcGxldGVkX2NvdW50ID0gMDtcclxuICAgIHZhciByZXZpZXdzX3RvdGFsID0gMDtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNwcmludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgc3ByaW50ID0gdGhpcy5zcHJpbnRzW2ldO1xyXG4gICAgICAgIGNvbXBsZXRlZF9jb3VudCArPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBqPTA7IGo8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZFtqXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gY29tcGxldGVkLm1lbWJlcnNbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXIuY29tcGxldGVkX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjb21wbGV0ZWQubWVtYmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDJcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2VtPiBoYXMgbm8gdGVhbSBtZW1iZXJzIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoXCJ3MDAzXCIsIFwiQ29tcGxldGVkIHRhc2sgPGVtPlwiICsgY29tcGxldGVkLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2VtPiBoYXMgbW9yZSB0aGFuIG9uZSB0ZWFtIG1lbWJlciBhc3NpZ25lZC4gTm9ib2R5IHdpbGwgZ2V0IGNyZWRpdCBmb3IgdGhhdCB0YXNrLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXJlIHRoZXkgYW55IHJldmlld3M/XHJcbiAgICAgICAgICAgIGlmKGNvbXBsZXRlZC5jb21tZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdzX3RvdGFsKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb21wbGV0ZWQuY29tbWVudHNbMF0ubWVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyLnJldmlld3NfY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0uY29tcGxldGVkX3RvdGFsID0gY29tcGxldGVkX2NvdW50O1xyXG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0ucmV2aWV3c190b3RhbCA9IHJldmlld3NfdG90YWw7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmZpbmRfbWVtYmVyID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGlmKHRoaXMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUubnVtX21lbWJlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjbnQgPSAwO1xyXG5cclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNudDtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbihjb2RlKSB7XHJcbiAgICAvLyBEb2VzIHRoZSBlcnJvciBhbHJlYWR5IGV4aXN0P1xyXG4gICAgZm9yKHZhciBpPTA7IGk8dGhpcy5lcnJvcnMubGVuZ3RoOyAgaSsrKSB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5lcnJvcnNbaV07XHJcbiAgICAgICAgaWYoZXJyb3IuY29kZSA9PT0gY29kZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSAnZTAwMSc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdEZXNpZ24nXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDInOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnUmlza3MnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDMnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnTWVldGluZ3MnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDQnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVG8gRG8nXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDUnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQWN0aXZlJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA2JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RoaXMgU3ByaW50IENvbXBsZXRlZCdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNyc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdDb21wbGV0ZWQnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2U5MDAnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiRmF0YWwgZXJyb3JzLCB1bmFibGUgdG8gcHJvY2VlZCB3aXRoIHNwcmludHMgYW5hbHlzaXNcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUud2FybmluZyA9IGZ1bmN0aW9uKGNvZGUsIG1zZykge1xyXG4gICAgaWYobXNnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLndhcm5pbmdzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogbXNnfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSAndzAwMSc6XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIllvdXIgbGlzdHMgYXJlIG5vdCBpbiB0aGUgY29ycmVjdCBvcmRlci4gXCIgK1xyXG4gICAgICAgICAgICBcIlRoZSBleGFjdCBvcmRlciBzaG91bGQgYmU6IERlc2lnbiwgUmlza3MsIE1lZXRpbmdzLCBUbyBEbywgXCIgK1xyXG4gICAgICAgICAgICBcIlRoaXMgU3ByaW50IEFjdGl2ZSwgVGhpcyBTcHJpbnQgQ29tcGxldGVkLCBcIiArXHJcbiAgICAgICAgICAgICAgICBcIkNvbXBsZXRlZFwifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7b3B0aW9uc30gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuaW1wb3J0IHtNYWluVmlld30gZnJvbSAnLi9NYWluVmlldyc7XHJcbmltcG9ydCB7VHJlbGxvQ29ubmVjdH0gZnJvbSAndHJlbGxvLWNvbm5lY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyID0gZnVuY3Rpb24odXNlck9wdGlvbnMpIHtcclxuXHQvLyBEZWZhdWx0IGFuZCBzdXBwbGllZCBvcHRpb25zXHJcblx0Y29uc3Qgb3B0cyA9IFV0aWwubWVyZ2Uob3B0aW9ucywgdXNlck9wdGlvbnMpO1xyXG5cclxuXHRjb25zdCB0cmVsbG8gPSBuZXcgVHJlbGxvQ29ubmVjdChvcHRzKTtcclxuXHJcblx0VXRpbC5yZWFkeSgoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHM7XHJcblx0XHRpZihvcHRzLnNlbC5ub2RlVHlwZSkge1xyXG5cdFx0XHRlbGVtZW50cyA9IFtvcHRzLnNlbF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHN3aXRjaCh0cmVsbG8uc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEOlxyXG5cdFx0XHRcdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdG5ldyBNYWluVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gdXBkYXRlIG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGUgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDsgXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcclxuICAgIHRoaXMubGlzdEJlZm9yZSA9IGRhdGEuZGF0YS5saXN0QmVmb3JlLm5hbWU7XHJcbiAgICB0aGlzLmxpc3RBZnRlciA9IGRhdGEuZGF0YS5saXN0QWZ0ZXIubmFtZTtcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgVXRpbCA9IGZ1bmN0aW9uKCkge31cclxuXHJcblV0aWwubWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbGwgSFRNTCB0YWdzIGZyb20gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHIgU3RyaW5nIHRvIHByb2Nlc3NcclxuICogQHJldHVybnMgc3RyaW5nIHdpdGhvdXQgdGFnc1xyXG4gKi9cclxuVXRpbC5zdHJpcF90YWdzID0gZnVuY3Rpb24oc3RyKSB7XHJcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC88KD86LnxcXG4pKj8+L2dtLCAnJyk7XHJcbn1cclxuXHJcblV0aWwuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGNscykge1xyXG5cdGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHRpZihjbHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0VXRpbC5hZGRDbGFzcyhlLCBjbHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGU7XHJcbn1cclxuXHJcblV0aWwuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lcykge1xyXG5cdGNvbnN0IG5hbWVzID0gY2xhc3NOYW1lcy5zcGxpdCgnICcpO1xyXG5cdGZvcihjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcblx0XHRpZiAoZWwuY2xhc3NMaXN0KVxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gJyAnICsgbmFtZTtcclxuXHR9XHJcbn1cclxuXHJcblV0aWwucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsLmNsYXNzTGlzdClcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRlbHNlXHJcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG59XHJcblxyXG5VdGlsLnJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcclxuXHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdCB0byBhIHN0cmluZy5cclxuICpcclxuICogVGhpcyB1c2VzIGZvcm1hdHRpbmcgdGhhdCBpcyBzdWJzZXQgb2YgdGhlIFBIUCBkYXRlKCkgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBkYXRlIERhdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBmb3JtYXQgT3B0aW9uYWwgZm9ybWF0IHN0cmluZyAoZGVmYXVsdCBpcyAnbi1kLVkgaDppYScpLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuVXRpbC5mb3JtYXREYXRldGltZSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xyXG5cclxuXHRmdW5jdGlvbiBwYWQoaSwgbikge1xyXG5cdFx0dmFyIHMgPSAnJyArIGk7XHJcblx0XHR3aGlsZShzLmxlbmd0aCA8IG4pIHtcclxuXHRcdFx0cyA9ICcwJyArIHM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Zm9ybWF0ID0gJ24tZC1ZIGg6aWEnO1xyXG5cdH1cclxuXHJcblx0dmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdHZhciBob3VyID0gaG91cnM7XHJcblx0dmFyIGFtID0gJ2EnO1xyXG5cdGlmKGhvdXJzID09IDApIHtcclxuXHRcdGhvdXIgPSAxMjtcclxuXHR9IGVsc2UgaWYoaG91cnMgPT0gMTIpIHtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH0gZWxzZSBpZihob3VycyA+IDEyKSB7XHJcblx0XHRob3VyID0gaG91cnMgLSAxMjtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH1cclxuXHJcblx0dmFyIHN0ciA9ICcnO1xyXG5cdGZvcih2YXIgaT0wOyBpPGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0c3dpdGNoKGZvcm1hdC5jaGFyQXQoaSkpIHtcclxuXHRcdFx0Y2FzZSAnbic6XHJcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdtJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZCc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldERhdGUoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdZJzpcclxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZyc6XHJcblx0XHRcdFx0c3RyICs9IGhvdXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdoJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGhvdXIsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaSc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldE1pbnV0ZXMoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdzJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2EnOlxyXG5cdFx0XHRcdHN0ciArPSBhbTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RyICs9IGZvcm1hdC5jaGFyQXQoaSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xyXG5cdHNlbDogJyN0cmVsbG8nLFxyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgYm9hcmQgd2UgYXJlIGZldGNoaW5nXHJcblx0Ym9hcmQ6ICcnLFxyXG5cclxuXHQvKiogT3B0aW9uYWw6IE9ubHkgY29uc2lkZXIgbWVldGluZ3MgYWZ0ZXIgdGhpcyB0aW1lIChVbml4IHRpbWUpICovXHJcblx0YWZ0ZXI6IG51bGwsXHJcblxyXG5cdHZpZXdzOiB7XHJcblx0XHQnYm9hcmQnOiB7fSxcclxuXHRcdCdzcHJpbnQnOiB7fVxyXG5cdH0sXHJcblxyXG5cdG5hbWU6ICdUcmVsbG9TcHJpbnRlcidcclxufTtcclxuXHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc5NzBjMjU0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXHJcbmltcG9ydCB7VHJlbGxvRmFjdG9yeX0gZnJvbSAnLi9qcy9UcmVsbG9GYWN0b3J5JztcclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcbiIsImltcG9ydCB7VHJlbGxvU3ByaW50ZXJWaWV3fSBmcm9tICcuL1RyZWxsb1NwcmludGVyVmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5UcmVsbG9GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXRyZWxsby1zcHJpbnRlcicpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bmV3IFRyZWxsb1NwcmludGVyVmlldyhzaXRlLCBlbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQgVHJlbGxvU3ByaW50ZXIgZnJvbSBcInRyZWxsby1zcHJpbnRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyVmlldyA9IGZ1bmN0aW9uKHNpdGUsIGVsZW1lbnQpIHtcclxuXHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LmlubmVyVGV4dCk7XHJcblx0ZWxlbWVudC5pbm5lclRleHQgPSAnJztcclxuXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHR2YXIgb3B0aW9ucyA9IHtcclxuXHRcdHNlbDogZWxlbWVudCxcclxuXHRcdGtleToganNvbi5rZXksXHJcblx0XHRib2FyZDoganNvbi50ZWFtLFxyXG5cdFx0dmlld3M6IGpzb24udmlld3MsXHJcblx0XHRhZnRlcjoganNvbi5hZnRlclxyXG5cdH07XHJcblxyXG5cdGlmKGpzb24uY2FyZHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0b3B0aW9ucy5jYXJkcyA9IGpzb24uY2FyZHM7XHJcblx0fVxyXG5cclxuXHRuZXcgVHJlbGxvU3ByaW50ZXIob3B0aW9ucyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
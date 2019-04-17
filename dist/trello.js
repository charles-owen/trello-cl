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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	var hotCurrentHash = "120c0c56951fc551bcfe";
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
/******/ 	var hotUpdate, hotUpdateNewHash;
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
/******/ 				hotSetStatus("idle");
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
/******/ 				/*globals chunkId */
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
/******/ 			var queue = outdatedModules.slice().map(function(id) {
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
/******/ 				if (!module || module.hot._selfAccepted) continue;
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
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
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
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
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
/******/ 			hotCurrentParents = [moduleId];
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
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
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
/*! exports provided: default, TrelloSprinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello.scss */ "./packages/trello-sprinter/trello.scss");
/* harmony import */ var _trello_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trello_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/TrelloSprinter */ "./packages/trello-sprinter/src/TrelloSprinter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrelloSprinter", function() { return _src_TrelloSprinter__WEBPACK_IMPORTED_MODULE_1__["TrelloSprinter"]; });



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

Board.fetch = function (trello, name, options, msg, success, failure) {
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
      var _loop = function _loop(_i) {
        var list = board.lists[_i];
        var cardsData = data[_i][200];
        cardsData.forEach(function (cardData) {
          if (!cardData.closed) {
            var card = new _Card__WEBPACK_IMPORTED_MODULE_2__["Card"](board, list, cardData);
            console.log(card);

            if (options.after !== null) {
              if (card.created.getTime() / 1000 > options.after) {
                list.add_card(card);
              }
            } else {
              list.add_card(card);
            }
          }
        });
      };

      // Loop over the result for each provided URL
      for (var _i = 0; _i < data.length && _i < board.lists.length; _i++) {
        _loop(_i);
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
        presentList(view, list);
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
  _Board__WEBPACK_IMPORTED_MODULE_1__["Board"].fetch(trello, options.board, options, pMsg, function (board) {
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

  /** Optional: Only consider meetings after this time (Unix time) */
  after: null,
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
  new trello_sprinter__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sel: element,
    key: json.key,
    board: json.team,
    views: json.views,
    after: json.after
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1jb25uZWN0L2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9pbWcvbWludXMucG5nIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9pbWcvcGx1cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9DYXJkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0RhdGFWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvRGlzY29ubmVjdGVkVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0xpc3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NYWluVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01lbWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRNZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludFRhYmxlVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50Vmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1RyZWxsb1NwcmludGVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVXBkYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3RyZWxsby5zY3NzPzY5MDEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RyZWxsby9qcy9UcmVsbG9TcHJpbnRlclZpZXcuanMiXSwibmFtZXMiOlsiVHJlbGxvU3ByaW50ZXIiLCJCb2FyZCIsImRhdGEiLCJpZCIsIm5hbWUiLCJsaXN0cyIsIm1lbWJlcnMiLCJmaW5kX2NhcmQiLCJpIiwibGVuZ3RoIiwiY2FyZCIsImFkZF9tZW1iZXIiLCJtZW1iZXIiLCJmZXRjaCIsInRyZWxsbyIsIm9wdGlvbnMiLCJtc2ciLCJzdWNjZXNzIiwiZmFpbHVyZSIsImlubmVyVGV4dCIsImFjdGl2ZSIsImJvYXJkIiwiYXN5bmNfc3RhcnQiLCJnZXQiLCJib2FyZERhdGEiLCJ0b0xvd2VyQ2FzZSIsImNsb3NlZCIsImZldGNoX21lbWJlcnNoaXAiLCJmZXRjaF9saXN0cyIsImFzeW5jX2VuZCIsImZvckVhY2giLCJtZW1iZXJEYXRhIiwiTWVtYmVyIiwibGlzdERhdGEiLCJsaXN0IiwiTGlzdCIsInB1c2giLCJmZXRjaF9jYXJkcyIsInVybHMiLCJjYXJkc0RhdGEiLCJjYXJkRGF0YSIsIkNhcmQiLCJjb25zb2xlIiwibG9nIiwiYWZ0ZXIiLCJjcmVhdGVkIiwiZ2V0VGltZSIsImFkZF9jYXJkIiwiZmV0Y2hfYWN0aW9ucyIsImFjdGlvbiIsInR5cGUiLCJjb21tZW50IiwiQ29tbWVudCIsImNvbW1lbnRzIiwidXBkYXRlIiwiVXBkYXRlIiwidXBkYXRlcyIsImNhcmRzIiwic29ydF91cGRhdGVzIiwicHJvdG90eXBlIiwiZmluZF9saXN0IiwiQm9hcmRWaWV3IiwiZGl2IiwiRGF0YVZpZXciLCJjYWxsIiwicHJlc2VudCIsInZpZXciLCJVdGlsIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicHJlc2VudExpc3QiLCJoZWFkZXIiLCJleHBhbmRlciIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb3VudCIsImNvdW50X21lbWJlcnMiLCJjIiwiaGFzT3duUHJvcGVydHkiLCJjbnQiLCJjb3VudEVsIiwiaW5uZXJIVE1MIiwicHJlc2VudENhcmQiLCJkYXRlIiwiZm9ybWF0RGF0ZXRpbWUiLCJjYXJkRGl2IiwibWVtYmVyc1AiLCJkZXNjIiwicHJlc2VudENvbW1lbnRzIiwicHJlc2VudFVwZGF0ZXMiLCJjb21tZW50RGl2IiwibWVtYmVyTmFtZSIsInVuZGVmaW5lZCIsImg1IiwidGV4dERpdiIsInRleHQiLCJ1cGRhdGVEaXYiLCJwIiwiZG9jdW1lbnQiLCJsaXN0QmVmb3JlIiwibGlzdEFmdGVyIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ0aGF0Iiwic3RyaXBfdGFncyIsInJlcGxhY2UiLCJEYXRlIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJpZE1lbWJlcnMiLCJzb3J0IiwiYSIsImIiLCJmaW5hbF90aW1lIiwiaWRNZW1iZXJDcmVhdG9yIiwicGFyc2UiLCJEaXNjb25uZWN0ZWRWaWV3IiwiZWxlbWVudCIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiYXV0aG9yaXplIiwiY2FyZHNfYnlfaWQiLCJNYWluVmlldyIsImRpc2Nvbm5lY3QiLCJwU3RhdHVzIiwicE1zZyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInZpZXdzIiwidiIsIlNwcmludFZpZXciLCJzcHJpbnQiLCJTcHJpbnRUYWJsZVZpZXciLCJzcHJpbnRUYWJsZSIsImZ1bGxOYW1lIiwiU3ByaW50Iiwic3ByaW50cyIsInN0YXJ0IiwiZW5kIiwic3RhcnRfbWVldGluZyIsImVuZF9tZWV0aW5nIiwiY29tcGxldGVkIiwiZW5kX3RpbWUiLCJzcHJpbnRfdGltZV9zbG9wIiwiU3ByaW50TWVtYmVyIiwibWVldGluZ3NfY291bnQiLCJtZWV0aW5nc19hdHRlbmRlZCIsImNvbXBsZXRlZF9jb3VudCIsImNvbXBsZXRlZF90b3RhbCIsInJldmlld3NfY291bnQiLCJyZXZpZXdzX3RvdGFsIiwibWVldGluZ3NfcGVyY2VudGFnZSIsIm1lZXRpbmdzX3Nsb3AiLCJwZXIiLCJ0b0ZpeGVkIiwiY29tcGxldGVkX2ZhY3RvciIsInRlYW1TaXplIiwiZmFjdG9yIiwicmV2aWV3aW5nX2ZhY3RvciIsImFkZEhlYWRpbmdzIiwidGFibGUiLCJjbGFzcyIsIlNwcmludHMiLCJudW1fbWVtYmVycyIsInRhYmxlSGVhZGluZyIsInJvd0hUTUwiLCJpdGVtIiwiaXNOYU4iLCJ0ciIsInRyMWNsYXNzIiwidGFibGVfaGVhZGluZ3MiLCJib2FyZF92aWV3IiwiaDIiLCJwcmVzZW50X2Vycm9ycyIsInByZXNlbnRfd2FybmluZ3MiLCJlcnJvcnMiLCJwcmVzZW50X3NwcmludHMiLCJwcmVzZW50X21lbWJlcnMiLCJlcnJvciIsImNvZGUiLCJ3YXJuaW5ncyIsIndhcm5pbmciLCJzIiwicHJlc2VudF9zcHJpbnQiLCJudW0iLCJmbURhdGUiLCJ0b0RhdGUiLCJjb3VudHMiLCJ0b3RhbENvbXBsZXRlZCIsImNvbXBsZXRpb25GYWN0b3IiLCJwQ29tcGxldGVkIiwicE1lbWJlcnMiLCJtZW1iZXJzRGl2IiwicHJlc2VudF9tZW1iZXIiLCJwcmVzZW50X2luZm8iLCJtZW1iZXJEaXYiLCJtZWV0aW5ncyIsImluZm9EaXYiLCJkZXNpZ24iLCJyaXNrcyIsInRvZG8iLCJzcHJpbnRfYWN0aXZlIiwic3ByaW50X2NvbXBsZXRlZCIsImZpbmRfbGlzdHMiLCJvcmRlcl90ZXN0IiwibWVldGluZ19hdHRlbmRhbmNlIiwiY3JlYXRlX3NwcmludHMiLCJzb3J0X2NvbXBsZXRlZCIsImNvbXBsZXRlZF9zdGF0aXN0aWNzIiwib3JkZXIiLCJmaW5kX21lbWJlciIsInNsaWNlIiwiYXQiLCJidCIsImluZGV4T2YiLCJqIiwidXNlck9wdGlvbnMiLCJvcHRzIiwibWVyZ2UiLCJUcmVsbG9Db25uZWN0IiwicmVhZHkiLCJlbGVtZW50cyIsInNlbCIsIm5vZGVUeXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXRlIiwiRElTQ09OTkVDVEVEIiwib2JqMSIsIm9iajIiLCJvYmoiLCJrZXkiLCJzdHIiLCJjbHMiLCJlIiwiZWwiLCJjbGFzc05hbWVzIiwibmFtZXMiLCJzcGxpdCIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsInJlbW92ZSIsIlJlZ0V4cCIsImpvaW4iLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsImZvcm1hdCIsInBhZCIsIm4iLCJob3VycyIsImdldEhvdXJzIiwiaG91ciIsImFtIiwiY2hhckF0IiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInZlcnNpb24iLCJsb2NhbFByZWZpeCIsIlRyZWxsb0ZhY3RvcnkiLCJTaXRlIiwic2l0ZSIsIlRyZWxsb1NwcmludGVyVmlldyIsImpzb24iLCJKU09OIiwidGVhbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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QUZRO0FBR2xCdE4sU0FBSyxFQUFFMFAsSUFBSSxDQUFDRSxJQUhNO0FBSWxCNUksU0FBSyxFQUFFMEksSUFBSSxDQUFDMUksS0FKTTtBQUtsQnpGLFNBQUssRUFBRW1PLElBQUksQ0FBQ25PO0FBTE0sR0FBbkI7QUFPQSxDQVpNLEMiLCJmaWxlIjoidHJlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHJlbGxvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRyZWxsb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMTIwYzBjNTY5NTFmYzU1MWJjZmVcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiVHJlbGxvXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnRyZWxsby1zcHJpbnRlciB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tc3RhdHVzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBwLmNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjI1ZW0gMjBweDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgaDMgc3Bhbi5kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgcC50cmVsbG8tY29tcGxldGVkLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IGRlZXBza3libHVlO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vaW1nL3BsdXMucG5nXCIpKSArIFwiKTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcvbWludXMucG5nXCIpKSArIFwiKTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLXBsdXMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZXhwYW5kIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBtYXJnaW4tYm90dG9tOiA2cHQ7XFxuICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQsXFxuZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLWVycm9ycyB7XFxuICAtbW96LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gIGJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLWNvdW50IHtcXG4gIG1hcmdpbjogMCAwIDFlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIHtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkMGZkO1xcbiAgbWFyZ2luOiAwLjVlbSAwIDAgMDtcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgLnRyZWxsby1jYXJkLW1lbWJlcnMge1xcbiAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwLjVlbSAxZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiBwIHtcXG4gIG1hcmdpbjogMCAwIDAuMjVlbSAwO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHtcXG4gIG1hcmdpbjogMCAyZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyBoNSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHAge1xcbiAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHtcXG4gIG1hcmdpbjogMWVtIDJlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHNwYW4ubGlzdCB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHtcXG4gIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mge1xcbiAgYmFja2dyb3VuZDogI2ZmODBkZjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLW1lbWJlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcXG4gIG1hcmdpbjogMWVtIDNlbSA2cHQgM2VtO1xcbiAgYm9yZGVyOiAxcHQgc29saWQgZ3JheTtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgcCxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIHAsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHAge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgc3Bhbi50cmVsbG8tY29kZSxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIHNwYW4udHJlbGxvLWNvZGUsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHNwYW4udHJlbGxvLWNvZGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGgzLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGg0LFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgaDMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoNCxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGg0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBkaXYudHJlbGxvLWluZm8sXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8sXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8taW5mbyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbyBwLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvIHAsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8taW5mbyBwIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnQtdGFibGUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHR2ZXJzaW9uOiAxLFxyXG5cdFwiYXBpRW5kcG9pbnRcIjogXCJodHRwczovL2FwaS50cmVsbG8uY29tXCIsXHJcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0a2V5OiAnJyxcclxuXHJcblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xyXG5cdC8vIGRpc2FtYmlndWF0ZSBtdWx0aXBsZSB1c2VzIG9uIHRoZSBzYW1lIHNpdGVcclxuXHRsb2NhbFByZWZpeDogJycsXHJcbn07XHJcblxyXG4vKipcclxuICogTWVyZ2UgdHdvIEphdmFzY3JpcHQgb2JqZWN0cyBpbnRvIGEgc2luZ2xlIHJlc3VsdC5cclxuICogQHBhcmFtIG9iajEgRmlyc3Qgb2JqZWN0XHJcbiAqIEBwYXJhbSBvYmoyIFNlY29uZCBvYmplY3QuIFNlY29uZCBvYmplY3QgdmFsdWVzIHRha2UgcHJlY2VkZW5jZS5cclxuICovXHJcbmNvbnN0IG1lcmdlID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG5cdHZhciBvYmogPSB7fTtcclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajIpIHtcclxuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIExvY2FsIHN0b3JhZ2UgYWRkcmVzcyBmb3Igc3RvcmluZyB0aGUgdG9rZW4gd2hpbGUgY29ubmVjdGVkXHJcbmNvbnN0IFRva2VuU3RvcmFnZSA9ICdfbjlzNVJ5Zzh3YSc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvQ29ubmVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG5cdGxldCB0b2tlbiA9ICcnO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBUaWxsIHdlIGtub3cgb3RoZXJ3aXNlXHJcblx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQ7XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIFNlZSBpZiB0aGVyZSBpcyBhIHRva2VuIGluIHRoZSBjdXJyZW50IFVSTFxyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdGNvbnN0IHJlID0gLyN0b2tlbj0oLiopJC87XHJcblx0XHRjb25zdCBtYXRjaGVzID0gaHJlZi5tYXRjaChyZSk7XHJcblx0XHRpZihtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHR0b2tlbiA9IG1hdGNoZXNbMV07XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlLCB0b2tlbik7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBJcyB0aGVyZSBhIHRva2VuIGluIGxvY2FsIHN0b3JhZ2U/XHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xyXG5cdFx0aWYodG9rZW4gIT09IG51bGwgJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5DT05ORUNURUQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBdXRob3JpemUgd2l0aCBUcmVsbG9cclxuXHQgKlxyXG5cdCAqIFJlZGlyZWN0cyB0byB0aGUgVHJlbGxvIGF1dGhvcml6YXRpb24gZW5kcG9pbnQsIHdoaWNoIHJlZGlyZWN0cyBiYWNrXHJcblx0ICogdG8gdGhpcyBwYWdlIGFmdGVyIGF1dGhvcml6YXRpb24gd2l0aCB0aGUgdG9rZW4gaW4gdGhlIFVSTC5cclxuXHQgKi9cclxuXHR0aGlzLmF1dGhvcml6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgcmV0dXJuX3VybCA9IGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRjb25zdCB1cmwgPSBgJHtvcHRpb25zLmF1dGhFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259L2F1dGhvcml6ZT9leHBpcmF0aW9uPW5ldmVyJm5hbWU9JHtvcHRpb25zLm5hbWV9JmAgK1xyXG5cdFx0XHRgY2FsbGJhY2tfbWV0aG9kPWZyYWdtZW50JnNjb3BlPXJlYWQmcmVzcG9uc2VfdHlwZT10b2tlbiZrZXk9JHtvcHRpb25zLmtleX0mcmV0dXJuX3VybD0ke3JldHVybl91cmx9YDtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc2Nvbm5lY3QgZnJvbSBUcmVsbG8uXHJcblx0ICpcclxuXHQgKiBUaGlzIGZvcmdldHMgdGhlIHRva2VuIGluIGxvY2FsIHN0b3JhZ2UuXHJcblx0ICpcclxuXHQgKi9cclxuXHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlKTtcclxuXHRcdHRva2VuID0gJyc7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtIGEgR0VUIHF1ZXJ5IGZvciBUcmVsbG9cclxuXHQgKiBAcGFyYW0gdXJsIFRoZSBib2FyZCBVUkwgYWZ0ZXIgdGhlIHZlcnNpb24sIGxpa2UgXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCJcclxuXHQgKiBAcGFyYW0gc3VjY2VzcyBGdW5jdGlvbiBjYWxsZWQgb24gc3VjY2VzcyB3aXRoIGRhdGEgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gZmFpbHVyZSBGdW5jdGlvbiBjYWxsZWQgb24gZmFpbHVyZSB3aXRoIGRhdGEgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gbXNnIE9wdGlvbmFsIGVsZW1lbnQgdG8gcHV0IHJhdGUgbGltaXRpbmcgbWVzc2FnZSBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5nZXQgPSBmdW5jdGlvbih1cmwsIHN1Y2Nlc3MsIGZhaWx1cmUsIG1zZykge1xyXG5cclxuXHRcdGxldCB0cmllcyA9IDE7XHJcblxyXG5cdFx0bGV0IG1heHRyaWVzID0gNTsgIC8vIE1heGltdW0gbnVtYmVyIG9mIHRyaWVzXHJcblx0XHRsZXQgYmFja29mZiA9IDEwOyAgIC8vIHNlY29uZHNcclxuXHRcdGxldCBiYWNrb2ZmSW5jcmVhc2UgPSAxLjI1OyAvLyBBbW91bnQgdG8gaW5jcmVhc2UgYmFja29mZiBhZnRlciBlYWNoIHRyeVxyXG5cclxuXHRcdGZ1bmN0aW9uIHRyZWxsb0dldCgpIHtcclxuXHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdFx0cmVxdWVzdC5vcGVuKCdHRVQnLCBgJHtvcHRpb25zLmFwaUVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vJHt1cmx9JmtleT0ke29wdGlvbnMua2V5fSZ0b2tlbj0ke3Rva2VufWAsIHRydWUpO1xyXG5cclxuXHRcdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcblx0XHRcdFx0XHQvLyBTdWNjZXNzIVxyXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0c3VjY2VzcyhkYXRhKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gV2UgcmVhY2hlZCBvdXIgdGFyZ2V0IHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yXHJcblx0XHRcdFx0XHRmYWlsdXJlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZigrcmVxdWVzdC5zdGF0dXMgPT09IDQyOSAmJiB0cmllcyA8IG1heHRyaWVzKSB7XHJcblx0XHRcdFx0XHR0cmllcysrO1xyXG5cdFx0XHRcdFx0aWYobXNnICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0bXNnLmlubmVyVGV4dCA9IFwiUmF0ZSBsaW1pdGVkLCBhdHRlbXB0IFwiICsgdHJpZXMgKyBcIiBhZnRlciBcIiArXHJcblx0XHRcdFx0XHRcdFx0YmFja29mZi50b0ZpeGVkKDApICsgXCIgc2Vjb25kc1wiO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRyZWxsb0dldCgpO1xyXG5cdFx0XHRcdFx0XHR9LCBiYWNrb2ZmICogMTAwMCk7XHJcblx0XHRcdFx0XHRcdGJhY2tvZmYgKj0gYmFja29mZkluY3JlYXNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmYWlsdXJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmVxdWVzdC5zZW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dHJlbGxvR2V0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn1cclxuXHJcblRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEID0gJ0QnO1xyXG5UcmVsbG9Db25uZWN0LkNPTk5FQ1RFRCA9ICdDJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb0Nvbm5lY3Q7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVoxSlJFRlVlTnFra3IxT0FrRVF4K2Z1aGtQZ2tLOGdoWVpZR1B6bzdHakZ4TUplUTdUUXpsamhHeGhzOUEyTWhZMFYybXVNaWZvQUpwYVFHQitBdzBOUGp1T0ErM0ozNGVnOE1FN3lUMlkzKy92djdPeHdydXZDZndMM1QrckE4M3dNRWN0a1hTVEtqR0Zrb29wbFdjZU80M3lqNDloQVZGN05CVXJGaldsSXh3VmYra08xTTVXSFZ1bWxhdExsRWEvck9oQVZ0OWNqa0pCY0lNNitvbWUyQ21IR1VCWTFUYU5PbVZTTVp3Y21pVlJNQU1LeHAySzczV0tiNUQwVEc5REdleHpxZW9jbHRtMHplV0dhSmkwVE9oMkQ1Ylk5TUJjRUJFbVN3T093MisyT0txREs3eno1M241emxvTmVyd2NlaDVibGpzb3lqQjVrc3dYL2Y4Y0crWFlCUEE0NURsbGlHSDFTVmgrdVQ4TytCb295UlF3NDhEZ3lQeUdXOVBzT0JBSWl0Rm9kWHdOUkRBN0JBWWVpR0IwMlI2VExpVWZZNHpBWVpJbXNxSHdtblJBbmd1V21DWVNUMmNXNjhncXpTN3R6WHhya0YrZERFSTBnYTlKdlVsU0FxOXMyMUp2OFplMXg3NTRqSnNsSVBMZXdzblp4S0NXWE53RzRtVEZqMUdoLzF1NnF6d2ZudXZyMlRnMW9ONkovYXNBZzZHUnBQd0lNQUZjQXphd1Z6UVI0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBZHRKUkVGVWVOcWtVenN2QkZFVVBqTnpaaFk3YXozQ0ZoNFJrZldxTktKRm9sRG95SWFDVGxSMFNxR2hFcDBvTktxbEVna1JDWDZBUklkRVpMV1d3ZHJac1k5NXVmZXVPM1pzc2dvbitYTFA2enR6N2psM0JOZDE0VCtDYzJ0UElJcGlHQkZYaVIwamlQekJTUkxFTGN0YWNSem5BeDNIQm9MVmdhaThHQnVyaGFZNnFTTDdKV1ZING1mcHhhdGJrNXBMb21FWVFCQ2JHZzFDdmVvQ3FWd1JOR2R5cElaeEtCZDFYYWVWSW8xaGtTV1V5c1RTRFR1UHR2cDkvc2F3QklUSHJvcVpUSm81eVgzS0N2RFliejhkUEkraFlYd3l4Ylp0Qmk2bWFRS1BKUktQSkZZc0lra0lxcXA2TWN6bGNsNEhGRVBURjJXRG0xeSs5L1NEalNqazgzbmdQTFFzMTJzcm04MURlL3VJbDV4SW5MT3pzM1AwWisvNFROWXVBZWVoSUNCVHN0a0NhYXNBKytzMVh2SmdyQmpiWC85WnJhWlZrUUlDY0I1NVA5Vk1LUlFja0dVRjB1blBrcThWWTZVK1JRbjRZcWdvb2UvaEtOVDAzYjJ0YlpDZHNpeVV6WVh6TUJCZ1NsSkxpWkdtZXNXWGRMZ3BmNi9UOUwvbFZ4TUlMOGsrYkdqWDBOSXowL3F1dzFCM1J6V0Vnc2lHVkJ3VU1IQ2JRa3NCN0IxbjRPbFYzTDA3bnoybHZUVUU2NkpkZmNNN0MycEQ3emlBMEZ6NVgzS2ZNMjkzSjdlWDg5dEc2djZCRnFEVENKVU40RytoTDB2L0VtQUFvTlhsRzk3dm5Ib0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgJy4vdHJlbGxvLnNjc3MnO1xyXG5cclxuaW1wb3J0IHtUcmVsbG9TcHJpbnRlcn0gZnJvbSAnLi9zcmMvVHJlbGxvU3ByaW50ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvU3ByaW50ZXI7XHJcbmV4cG9ydCB7VHJlbGxvU3ByaW50ZXJ9O1xyXG4iLCIvKlxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBCb2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL01lbWJlcic7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xyXG5pbXBvcnQge1VwZGF0ZX0gZnJvbSAnLi9VcGRhdGUnO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4vQ29tbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9hcmQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG5cdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0dGhpcy5pZCA9IGRhdGEuaWQ7XHJcblx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdHRoaXMubGlzdHMgPSBbXTtcclxuXHR0aGlzLm1lbWJlcnMgPSB7fTtcclxuXHJcblx0dGhpcy5maW5kX2NhcmQgID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNhcmQgPSB0aGlzLmxpc3RzW2ldLmZpbmRfY2FyZChpZCk7XHJcblx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2FyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hZGRfbWVtYmVyID0gZnVuY3Rpb24obWVtYmVyKSB7XHJcblx0XHR0aGlzLm1lbWJlcnNbbWVtYmVyLmlkXSA9IG1lbWJlcjtcclxuXHR9XHJcbn1cclxuXHJcbkJvYXJkLmZldGNoID0gZnVuY3Rpb24odHJlbGxvLCBuYW1lLCBvcHRpb25zLCBtc2csIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcclxuXHRtc2cuaW5uZXJUZXh0ID0gJ0ZldGNoaW5nIGJvYXJkICcgKyBuYW1lO1xyXG5cclxuXHQvLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgb3BlbiBhc3luYyBjYWxscyB0aGVyZSBhcmUgcmlnaHQgbm93XHJcblx0bGV0IGFjdGl2ZSA9IDA7XHJcblxyXG5cdC8vIFdpbGwgYmUgc2V0IHRvIHBvaW50IHRvIGEgbmV3IEJvYXJkIG9iamVjdFxyXG5cdGxldCBib2FyZCA9IG51bGw7XHJcblxyXG5cdGFzeW5jX3N0YXJ0KCk7XHJcblx0dHJlbGxvLmdldChcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIixcclxuXHRcdChkYXRhKSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyAgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGJvYXJkRGF0YSA9IGRhdGFbaV07XHJcblx0XHRcdFx0aWYoYm9hcmREYXRhLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHQvLyBXZSBoYXZlIGZvdW5kIHRoZSBib2FyZCAoaWYgbm90IGNsb3NlZClcclxuXHRcdFx0XHRcdGlmKCFib2FyZERhdGEuY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgYm9hcmQgb2JqZWN0XHJcblx0XHRcdFx0XHRcdGJvYXJkID0gbmV3IEJvYXJkKGJvYXJkRGF0YSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbWVtYmVyc2hpcFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9tZW1iZXJzaGlwKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBsaXN0cyBmb3IgdGhlIGJvYXJkXHJcblx0XHRcdFx0XHRcdGZldGNoX2xpc3RzKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoYm9hcmQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZpbmQgVHJlbGxvIGJvYXJkIFwiICsgbmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdH0sXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBib2FyZHNcIilcclxuXHRcdH0sXHJcblx0XHRtc2dcclxuXHQpXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIHRoZSBtZW1iZXJzaGlwIG9mIHRoZSBib2FyZC5cclxuXHQgKiBAcGFyYW0gYm9hcmQgQm9hcmQgdG8gZmV0Y2ggZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfbWVtYmVyc2hpcChib2FyZCkge1xyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL21lbWJlcnM/ZmllbGRzPWFsbFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG1lbWJlckRhdGEpIHtcclxuXHRcdFx0XHRcdHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyKGJvYXJkLCBtZW1iZXJEYXRhKTtcclxuXHRcdFx0XHRcdGJvYXJkLmFkZF9tZW1iZXIobWVtYmVyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBtZW1iZXJzaGlwXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGZldGNoX2xpc3RzKGJvYXJkKSB7XHJcblx0XHRtc2cuaW5uZXJUZXh0ID0gXCJGZXRjaGluZyBsaXN0cyBmb3IgXCIgKyBuYW1lO1xyXG5cclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkcy9cIiArIGJvYXJkLmlkICsgXCIvbGlzdHM/ZmlsdGVyPW9wZW5cIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihsaXN0RGF0YSkge1xyXG5cdFx0XHRcdFx0aWYoIWxpc3REYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGlzdCA9IG5ldyBMaXN0KGJvYXJkLCBsaXN0RGF0YSk7XHJcblx0XHRcdFx0XHRcdGJvYXJkLmxpc3RzLnB1c2gobGlzdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZldGNoX2NhcmRzKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBsaXN0c1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIGFsbCBjYXJkcyBhcyBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHdlIGFyZSBmZXRjaGluZyBmb3JcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBmZXRjaF9jYXJkcyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgY2FyZHNcIjtcclxuXHJcblx0XHQvLyBDb2xsZWN0IHVwIGFsbCBVUkxzIGZvciBhbGwgb2YgdGhlIGxpc3RzXHJcblx0XHR2YXIgdXJscyA9ICcnO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8Ym9hcmQubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGxpc3QgPSBib2FyZC5saXN0c1tpXTtcclxuXHRcdFx0aWYodXJscy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dXJscyArPSAnLCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dXJscyArPSBcIi9saXN0cy9cIiArIGxpc3QuaWQgKyBcIi9jYXJkcy9vcGVuXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gR2V0IGdldCBpdFxyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYmF0Y2g/dXJscz1cIiArIHVybHMsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBMb29wIG92ZXIgdGhlIHJlc3VsdCBmb3IgZWFjaCBwcm92aWRlZCBVUkxcclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aCAmJiBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdFx0XHRjb25zdCBjYXJkc0RhdGEgPSBkYXRhW2ldWzIwMF07XHJcblxyXG5cdFx0XHRcdFx0Y2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oY2FyZERhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYoIWNhcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChib2FyZCwgbGlzdCwgY2FyZERhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMuYWZ0ZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGNhcmQuY3JlYXRlZC5nZXRUaW1lKCkgLyAxMDAwID4gb3B0aW9ucy5hZnRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmZXRjaF9hY3Rpb25zKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkc1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9hY3Rpb25zKGJvYXJkKSB7XHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZC9cIiArIGJvYXJkLmlkICsgXCIvYWN0aW9ucz9maWx0ZXI9Y29tbWVudENhcmQsdXBkYXRlQ2FyZDppZExpc3QmbGltaXQ9MTAwMFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdFx0XHRcdFx0aWYoIWFjdGlvbi5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYoYWN0aW9uLnR5cGUgPT09IFwiY29tbWVudENhcmRcIikge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBjb21tZW50ID0gbmV3IENvbW1lbnQoYm9hcmQsIGNhcmQsIGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJkLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSAndXBkYXRlQ2FyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gbmV3IFVwZGF0ZShib2FyZCwgY2FyZCwgYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcmQudXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRib2FyZC5saXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcclxuXHRcdFx0XHRcdGxpc3QuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcblx0XHRcdFx0XHRcdGNhcmQuc29ydF91cGRhdGVzKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmQgaW5mb3JtYXRpb25cIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gYXN5bmNfc3RhcnQoKSB7XHJcblx0XHRhY3RpdmUrKztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFzeW5jX2VuZCgpIHtcclxuXHRcdGFjdGl2ZS0tO1xyXG5cdFx0aWYoYWN0aXZlID09PSAwKSB7XHJcblx0XHRcdHN1Y2Nlc3MoYm9hcmQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQm9hcmQucHJvdG90eXBlLmZpbmRfbGlzdCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbGlzdCA9IHRoaXMubGlzdHNbaV07XHJcblx0XHRpZihsaXN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFN0YW5kYXJkIFRyZWxsbyBib2FyZCB2aWV3XHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuL0RhdGFWaWV3JztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcihsZXQgbGlzdCBvZiBib2FyZC5saXN0cykge1xyXG5cdFx0XHRwcmVzZW50TGlzdCh2aWV3LCBsaXN0KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXNlbnRMaXN0ID0gKHZpZXcsIGxpc3QpID0+IHtcclxuICAgIFx0Y29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRoZWFkZXIuaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xyXG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgXHRjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcclxuICAgIFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFx0dmlldy5hcHBlbmRDaGlsZChleHBhbmRlcik7XHJcblxyXG4gICAgXHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIFx0XHRpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHRcdFx0VXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRcdFx0VXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICBcdGxldCBjb3VudCA9IGxpc3QuY291bnRfbWVtYmVycygpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNhcmRzOjwvZW0+WycgKyBsaXN0LmNhcmRzLmxlbmd0aCArICddICc7XHJcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudCkge1xyXG5cdFx0ICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KGMpKSB7XHJcblx0XHRcdCAgICBtZW1iZXJzICs9IGNvdW50W2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50W2NdLmNudCArICddJm5ic3A7Jm5ic3A7JztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnN0IGNvdW50RWwgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKGNvdW50RWwpO1xyXG5cdCAgICBjb3VudEVsLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cdCAgICBmb3IobGV0IGNhcmQgb2YgbGlzdC5jYXJkcykge1xyXG5cdCAgICBcdHByZXNlbnRDYXJkKGV4cGFuZGVyLCBjYXJkKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50Q2FyZCA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gSGVhZGluZ1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY2FyZC5jcmVhdGVkKTtcclxuXHJcblx0XHRsZXQgY2FyZERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jYXJkJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcblx0XHRjYXJkRGl2LmlubmVySFRNTCA9IGA8aDQ+PHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHtjYXJkLm5hbWV9PC9oND5gO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gTWVtYmVyc1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgbWVtYmVycyA9ICcnO1xyXG5cdCAgICBmb3IobGV0IGlkIG9mIGNhcmQubWVtYmVycykge1xyXG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbaWRdO1xyXG5cdFx0ICAgIGlmKG1lbWJlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQgICAgbWVtYmVycyArPSAnIC8gJztcclxuXHRcdCAgICB9XHJcblx0XHQgICAgbWVtYmVycyArPSAnPHNwYW4+JyArIG1lbWJlci5uYW1lICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgbWVtYmVyc1AgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNhcmQtbWVtYmVycycpXHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQobWVtYmVyc1ApO1xyXG5cdCAgICBtZW1iZXJzUC5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIERlc2NyaXB0aW9uXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBkZXNjID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWRlc2NyaXB0aW9uJyk7XHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcblx0ICAgIGRlc2MuaW5uZXJIVE1MID0gY2FyZC5kZXNjO1xyXG5cclxuXHQgICAgcHJlc2VudENvbW1lbnRzKGNhcmREaXYsIGNhcmQpO1xyXG5cdCAgICBwcmVzZW50VXBkYXRlcyhjYXJkRGl2LCBjYXJkKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJlc2VudENhcmQgPSBwcmVzZW50Q2FyZDtcclxuXHJcbiAgICBsZXQgcHJlc2VudENvbW1lbnRzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLmNvbW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGNvbW1lbnREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY29tbWVudHMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xyXG5cclxuXHRcdGZvcihsZXQgY29tbWVudCBvZiBjYXJkLmNvbW1lbnRzKSB7XHJcblx0XHRcdGxldCBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbY29tbWVudC5tZW1iZXJdO1xyXG5cdFx0XHRsZXQgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0XHRsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY29tbWVudC5kYXRlKTtcclxuXHJcblx0XHRcdGxldCBoNSA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRcdGg1LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke21lbWJlck5hbWV9YDtcclxuXHJcblx0XHRcdGxldCB0ZXh0RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuXHRcdFx0dGV4dERpdi5pbm5lckhUTUwgPSBjb21tZW50LnRleHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRVcGRhdGVzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLnVwZGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgdXBkYXRlRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXVwZGF0ZXMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHVwZGF0ZURpdik7XHJcblxyXG5cdCAgICBmb3IobGV0IHVwZGF0ZSBvZiBjYXJkLnVwZGF0ZXMpIHtcclxuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW3VwZGF0ZS5tZW1iZXJdO1xyXG5cdFx0ICAgIHZhciBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcblx0XHQgICAgdmFyIGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHVwZGF0ZS5kYXRlKTtcclxuXHRcdCAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdCAgICB1cGRhdGVEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGRhdGUgKyAnPC9zcGFuPiAnICsgbWVtYmVyTmFtZSArXHJcblx0XHRcdCAgICAnIG1vdmVkIGZyb20gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QmVmb3JlICtcclxuXHRcdFx0ICAgICc8L3NwYW4+IHRvIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEFmdGVyICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5Cb2FyZFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5Cb2FyZFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQm9hcmRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QsIGRhdGEpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5uYW1lKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRlc2MgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGVzYykucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xyXG4gICAgICAgICc8L3A+JztcclxuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaWQuc3Vic3RyKDAsIDgpLCAxNikgKiAxMDAwKTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSBbXTtcclxuXHJcbiAgICBkYXRhLmlkTWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgdGhhdC5tZW1iZXJzLnB1c2goaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgdGhpcy51cGRhdGVzID0gW107XHJcbn1cclxuXHJcbkNhcmQucHJvdG90eXBlLnNvcnRfdXBkYXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy51cGRhdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGEuZGF0ZSA9PSBiLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgdGhlIGxhc3QgdGltZSB0aGlzIGNhcmQgd2FzIG1vdmVkLlxyXG4gKiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gYSBjb21wbGV0ZWQgY2FyZCB3YXNcclxuICogbW92ZWQgdG8gQ29tcGxldGVkLlxyXG4gKi9cclxuQ2FyZC5wcm90b3R5cGUuZmluYWxfdGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy51cGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGgtMV0uZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVtYmVycyBmcm9tIGEgY29sbGVjdGlvbiBvZiBjYXJkcy5cclxuICogQHBhcmFtIGJvYXJkIEJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gbGlzdCBhcnJheSBvZiBDYXJkIG9iamVjdHNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggaWQgYXMgcHJvcGVydHkgdG8gb2JqZWN0IHtjbnQ6ID8sIG1lbWJlcjogP31cclxuICovXHJcbkNhcmQuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0KSB7XHJcbiAgICB2YXIgY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICAgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkobWVtYmVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXS5jbnQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50W21lbWJlci5pZF0gPSB7Y250OiAxLCBtZW1iZXI6IG1lbWJlcn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBjb21tZW50IG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuLyoqXHJcbiBBcnJheVxyXG4gKFxyXG4gW2lkXSA9PiA1N2VlYzFjYTIyNjg0NjQ2YjExOTNhYmRcclxuIFtpZE1lbWJlckNyZWF0b3JdID0+IDU3ZWMxYmRhZmVlZGNiYmM3M2Q2MDBkMVxyXG4gW2RhdGFdID0+IEFycmF5XHJcbiAoXHJcbiBbbGlzdF0gPT4gQXJyYXlcclxuIChcclxuIFtuYW1lXSA9PiBEZXNpZ25cclxuIFtpZF0gPT4gNTdlOTIwYTJiMzQ1MTgyMDNmZDVmMzE5XHJcbiApXHJcblxyXG4gW2JvYXJkXSA9PiBBcnJheVxyXG4gKFxyXG4gW3Nob3J0TGlua10gPT4gaTllWEU0eUpcclxuIFtuYW1lXSA9PiBQcm9qZWN0IDEgVGVhbTogQXJib1xyXG4gW2lkXSA9PiA1N2U5MjA0YWMzZjMyM2YxNzg1ZDdiZTRcclxuIClcclxuXHJcbiBbY2FyZF0gPT4gQXJyYXlcclxuIChcclxuIFtzaG9ydExpbmtdID0+IEZnZ3ZkNG5YXHJcbiBbaWRTaG9ydF0gPT4gMjFcclxuIFtuYW1lXSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiBbaWRdID0+IDU3ZWVjMDc3NmZkMDA1ZjdiODFjODIzOVxyXG4gKVxyXG5cclxuIFt0ZXh0XSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiApXHJcblxyXG4gW3R5cGVdID0+IGNvbW1lbnRDYXJkXHJcbiBbZGF0ZV0gPT4gMjAxNi0wOS0zMFQxOTo0OTozMC45NzRaXHJcbiBbbWVtYmVyQ3JlYXRvcl0gPT4gQXJyYXlcclxuIChcclxuIFtpZF0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXHJcbiBbYXZhdGFySGFzaF0gPT5cclxuIFtmdWxsTmFtZV0gPT4gQnJpdHRhbnkgR2FsbGllcnNcclxuIFtpbml0aWFsc10gPT4gQkdcclxuIFt1c2VybmFtZV0gPT4gYnJpdHRhbnlnYWxsaWVyczFcclxuIClcclxuICogQHBhcmFtIGJvYXJkXHJcbiAqIEBwYXJhbSBjYXJkXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgIHRoaXMubWVtYmVyID0gZGF0YS5pZE1lbWJlckNyZWF0b3I7XHJcbiAgICB0aGlzLnRleHQgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGF0YS50ZXh0KS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXHJcbiAgICAgICAgJzwvcD4nO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGEuZGF0ZSkpO1xyXG59IiwiLypcclxuICogQmFzZSBvYmplY3QgZm9yIHZpZXdzIG9mIFRyZWxsbyBkYXRhLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhVmlldyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuRGF0YVZpZXcucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7fVxyXG5cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2Nvbm5lY3RlZFZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcclxuXHQvLyBFbnN1cmUgZW1wdHlcclxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XHJcblxyXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcclxuXHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgdG8gVHJlbGxvJztcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0cmVsbG8uYXV0aG9yaXplKCk7XHJcblx0fSlcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmNhcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5jYXJkc19ieV9pZCA9IHt9O1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5hZGRfY2FyZCA9IGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuICAgIHRoaXMuY2FyZHNfYnlfaWRbY2FyZC5pZF0gPSBjYXJkO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5maW5kX2NhcmQgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5jYXJkc19ieV9pZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkc19ieV9pZFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBDYXJkLmNvdW50X21lbWJlcnModGhpcy5ib2FyZCwgdGhpcy5jYXJkcyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL0JvYXJkJztcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gJy4vQm9hcmRWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRWaWV3fSBmcm9tIFwiLi9TcHJpbnRzL1NwcmludFZpZXdcIjtcclxuaW1wb3J0IHtTcHJpbnRUYWJsZVZpZXd9IGZyb20gJy4vU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xyXG5cdC8vIEVuc3VyZSBlbXB0eVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcclxuXHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xyXG5cclxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnRGlzY29ubmVjdCc7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dHJlbGxvLmRpc2Nvbm5lY3QoKTtcclxuXHJcblx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpO1xyXG5cdH0pXHJcblxyXG5cclxuXHRsZXQgcFN0YXR1cyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tc3RhdHVzJyk7XHJcblx0cFN0YXR1cy5pbm5lclRleHQgPSAnQ29ubmVjdGluZyB0byBUcmVsbG8uLi4nO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwU3RhdHVzKTtcclxuXHJcblx0bGV0IHBNc2cgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLW1zZycpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwTXNnKTtcclxuXHJcblx0Qm9hcmQuZmV0Y2godHJlbGxvLCBvcHRpb25zLmJvYXJkLCBvcHRpb25zLCBwTXNnLCAoYm9hcmQpID0+IHtcclxuXHRcdC8vIFN1Y2Nlc3NcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ1RyZWxsbyBCb2FyZDogJyArIGJvYXJkLm5hbWU7XHJcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XHJcblxyXG5cdFx0Zm9yKGxldCB2aWV3IGluIG9wdGlvbnMudmlld3MpIHtcclxuXHRcdFx0c3dpdGNoKHZpZXcpIHtcclxuXHRcdFx0XHRjYXNlICdib2FyZCc6XHJcblx0XHRcdFx0XHRsZXQgdiA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzcHJpbnQnOlxyXG5cdFx0XHRcdFx0diA9IG5ldyBTcHJpbnRWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50KTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NwcmludFRhYmxlJzpcclxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VGFibGVWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50VGFibGUpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIChtc2cpID0+IHtcclxuXHRcdC8vIEZhaWx1cmVcclxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gbXNnO1xyXG5cdH0pO1xyXG5cclxuXHQvL3RyZWxsby5mZXRjaCgpO1xyXG5cclxufSIsIi8qXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIG1lbWJlciBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbWJlciA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG59IiwiLypcclxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBzcHJpbnQgaW4gdGhlIHNwcmludHMgYW5hbHlzaXNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50ID0gZnVuY3Rpb24oc3ByaW50cywgc3RhcnQsIGVuZCkge1xyXG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcclxuICAgIHRoaXMuc3RhcnRfbWVldGluZyA9IHN0YXJ0O1xyXG4gICAgdGhpcy5lbmRfbWVldGluZyA9IGVuZDtcclxuXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IFtdO1xyXG59XHJcblxyXG5TcHJpbnQucHJvdG90eXBlLmVuZF90aW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5lbmRfbWVldGluZy5jcmVhdGVkLmdldFRpbWUoKSArXHJcbiAgICAgICAgKHRoaXMuc3ByaW50cy5zcHJpbnRfdGltZV9zbG9wICogMTAwMCkpO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRlYW0gbWVtYmVyIHN0YXRpc3RpY3MgZm9yIGEgc3ByaW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludE1lbWJlciA9IGZ1bmN0aW9uKHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XHJcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xyXG5cclxuICAgIHRoaXMubWVldGluZ3NfY291bnQgPSAwO1xyXG4gICAgdGhpcy5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuY29tcGxldGVkX2NvdW50ID0gMDtcclxuICAgIHRoaXMuY29tcGxldGVkX3RvdGFsID0gMDtcclxuICAgIFxyXG4gICAgdGhpcy5yZXZpZXdzX2NvdW50ID0gMDtcclxuICAgIHRoaXMucmV2aWV3c190b3RhbCA9IDA7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUubWVldGluZ3NfcGVyY2VudGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy5tZWV0aW5nc19jb3VudCA8PSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCkge1xyXG4gICAgICAgIHJldHVybiAnKGluc3VmZmljaWVudCBtZWV0aW5ncyknO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZXIgPSB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkIC8gKHRoaXMubWVldGluZ3NfY291bnQgLSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCk7XHJcbiAgICBpZihwZXIgPiAxKSB7XHJcbiAgICAgICAgcGVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGVyLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUuY29tcGxldGVkX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZF90b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSB0aGlzLmNvbXBsZXRlZF9jb3VudCAvXHJcbiAgICAgICAgKHRoaXMuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMuY29tcGxldGVkX2ZhY3Rvcik7XHJcbiAgICBpZihmYWN0b3IgPiAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLnJldmlld2luZ19mYWN0b3IgPSBmdW5jdGlvbih0ZWFtU2l6ZSkge1xyXG4gICAgaWYodGhpcy5yZXZpZXdzX3RvdGFsID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZhY3RvciA9IHRoaXMucmV2aWV3c19jb3VudCAvXHJcbiAgICAgICAgKHRoaXMucmV2aWV3c190b3RhbCAvIHRlYW1TaXplICogdGhpcy5zcHJpbnRzLnJldmlld2luZ19mYWN0b3IpO1xyXG4gICAgaWYoZmFjdG9yID4gMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59IiwiLypcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0IGluIGEgdGFibGUuXHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludFRhYmxlVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQsIG9wdGlvbnMpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IGFkZEhlYWRpbmdzID0gdHJ1ZTtcclxuICAgIGlmKG9wdGlvbnMuYWRkSGVhZGluZ3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFkZEhlYWRpbmdzID0gb3B0aW9ucy5hZGRIZWFkaW5ncztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXNwcmludC10YWJsZScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGNvbnN0IHRhYmxlID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICBVdGlsLmFkZENsYXNzKHRhYmxlLCBvcHRpb25zLmNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xyXG5cdCAgICAvL1xyXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xyXG5cdCAgICBjb25zdCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzKSB7XHJcblx0XHQgICAgdGFibGVIZWFkaW5nKHRhYmxlLCBib2FyZCwgc3ByaW50cyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0ZD4nICsgZGF0YSArICc8L3RkPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0XHQgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHQgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0XHRcdCAgICB2YXIgaWQgPSBtZW1iZXIubWVtYmVyLmlkO1xyXG5cclxuXHRcdFx0ICAgIHJvd0hUTUwgPSAnJztcclxuXHJcblx0XHRcdCAgICAvLyBPdXIgc3RhdGlzdGljc1xyXG5cdFx0XHQgICAgaXRlbShib2FyZC5uYW1lKTtcclxuXHRcdFx0ICAgIGl0ZW0odGVhbVNpemUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVtYmVyLm5hbWUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfdG90YWwpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3c19jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX3RvdGFsKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpKTtcclxuXHRcdFx0ICAgIGl0ZW0oc3ByaW50cy5zcHJpbnRzLmxlbmd0aCk7XHJcblxyXG5cdFx0XHQgICAgc3ByaW50cy5zcHJpbnRzLmZvckVhY2goZnVuY3Rpb24oc3ByaW50KSB7XHJcblx0XHRcdFx0ICAgIHZhciBjbnQgPSAwO1xyXG5cdFx0XHRcdCAgICBzcHJpbnQuY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG5cdFx0XHRcdFx0ICAgIGlmKGNhcmQubWVtYmVycy5sZW5ndGggPT0gMSAmJiBjYXJkLm1lbWJlcnNbMF0gPT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0ICAgIGNudCsrO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHRcdCAgICBpdGVtKGNudCk7XHJcblx0XHRcdFx0ICAgIGl0ZW0oc3ByaW50LmNvbXBsZXRlZC5sZW5ndGgpO1xyXG5cdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHQgICAgaWYoIWlzTmFOKGFkZEhlYWRpbmdzKSkge1xyXG5cdFx0XHRcdCAgICBmb3IodmFyIGk9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgaTxhZGRIZWFkaW5nczsgaSsrKSB7XHJcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcclxuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgY29uc3QgdHIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblx0XHRcdCAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG5cdFx0XHQgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlSGVhZGluZyA9IGZ1bmN0aW9uKHRhYmxlLCBib2FyZCwgc3ByaW50cykge1xyXG4gICAgICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50cjFjbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIFV0aWwuYWRkQ2xhc3ModHIsIG9wdGlvbnMudHIxY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0aD48ZGl2PicgKyBkYXRhICsgJzwvZGl2PjwvdGg+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaXRlbShcIlRlYW1cIik7XHJcblx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdCAgICBpdGVtKFwiTWVtYmVyXCIpO1xyXG5cdCAgICBpdGVtKFwiQXR0ZW5kZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJDb21wbGV0ZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJSZXZpZXdzXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiU3ByaW50c1wiKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzID09PSB0cnVlKSB7XHJcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9YWRkSGVhZGluZ3M7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFRhYmxlVmlldztcclxuLy8vIEBlbmRjb25kXHJcblxyXG5cclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS50YWJsZV9oZWFkaW5ncyA9IGZ1bmN0aW9uKGJvYXJkLCBzcHJpbnRzKSB7XHJcblxyXG59XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0c1xyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvLyBUaGlzIHVzZXMgQm9hcmRWaWV3IHRvIGRyYXcgd2hhdCBpdCBrbm93cyBob3cgdG8gZHJhd1xyXG4gICAgY29uc3QgYm9hcmRfdmlldyA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENyZWF0ZSB0aGUgc3ByaW50IGFuYWx5c2lzXHJcblx0ICAgIC8vXHJcblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XHJcblxyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50cycpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgbGV0IGgyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdCAgICBoMi5pbm5lclRleHQgPSAnU3ByaW50cyBBbmFseXNpcyc7XHJcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxuXHRcdHByZXNlbnRfZXJyb3JzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF93YXJuaW5ncyh2aWV3LCBzcHJpbnRzKTtcclxuXHJcblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcHJlc2VudF9zcHJpbnRzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF9tZW1iZXJzKHZpZXcsIHNwcmludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X2Vycm9ycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPT09IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGVycm9ycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1lcnJvcnMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGVycm9ycyk7XHJcblxyXG5cdCAgICBlcnJvcnMuaW5uZXJIVE1MID0gJzxoMz5FcnJvcnM8L2gzPic7XHJcblxyXG5cdCAgICBmb3IobGV0IGVycm9yIG9mIHNwcmludHMuZXJyb3JzKSB7XHJcblx0ICAgIFx0bGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgXHRlcnJvcnMuYXBwZW5kQ2hpbGQocCk7XHJcblx0ICAgIFx0cC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyBlcnJvci5jb2RlICsgJzo8L3NwYW4+ICcgKyBlcnJvci5tc2c7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF93YXJuaW5ncyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRpZihzcHJpbnRzLndhcm5pbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuXHQgICAgbGV0IHdhcm5pbmdzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXdhcm5pbmdzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh3YXJuaW5ncyk7XHJcblxyXG5cdCAgICB3YXJuaW5ncy5pbm5lckhUTUwgPSAnPGgzPldhcm5pbmdzPC9oMz4nO1xyXG5cclxuXHQgICAgZm9yKGxldCB3YXJuaW5nIG9mIHNwcmludHMud2FybmluZ3MpIHtcclxuXHRcdCAgICBsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ICAgIHdhcm5pbmdzLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgd2FybmluZy5jb2RlICsgJzo8L3NwYW4+ICcgKyB3YXJuaW5nLm1zZztcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3NwcmludHMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcih2YXIgcz0xOyBzPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBzKyspIHtcclxuXHQgICAgICAgIHZhciBzcHJpbnQgPSBzcHJpbnRzLnNwcmludHNbcy0xXTtcclxuXHQgICAgICAgIHByZXNlbnRfc3ByaW50KHZpZXcsIHNwcmludHMsIHMsIHNwcmludCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9zcHJpbnQgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG51bSwgc3ByaW50KSB7XHJcblx0ICAgIGNvbnN0IGZtRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LnN0YXJ0X21lZXRpbmcuY3JlYXRlZCk7XHJcblx0ICAgIGNvbnN0IHRvRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LmVuZF9tZWV0aW5nLmNyZWF0ZWQpO1xyXG5cdCAgICBjb25zdCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIE1lbWJlciBjb3VudHMgZm9yIGNvbXBsZXRlZFxyXG5cdCAgICAvL1xyXG4gICAgICAgIGNvbnN0IGNvdW50cyA9IENhcmQuY291bnRfbWVtYmVycyhzcHJpbnRzLmJvYXJkLCBzcHJpbnQuY29tcGxldGVkKTtcclxuXHJcblx0ICAgIGxldCB0b3RhbENvbXBsZXRlZCA9IDA7XHJcblx0ICAgIGZvcihsZXQgc3ByaW50IG9mIHNwcmludHMuc3ByaW50cykge1xyXG5cdFx0ICAgIHRvdGFsQ29tcGxldGVkICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgbGV0IGNvbXBsZXRpb25GYWN0b3IgPSAwLjAwO1xyXG5cdCAgICBpZih0b3RhbENvbXBsZXRlZCA+IDApIHtcclxuXHQgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0ZWQgLyAodG90YWxDb21wbGV0ZWQgLyBzcHJpbnRzLnNwcmludHMubGVuZ3RoICogMC44KTtcclxuXHQgICAgICAgIGlmKGNvbXBsZXRpb25GYWN0b3IgPiAxKSB7XHJcblx0ICAgICAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IDE7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0aW9uRmFjdG9yLnRvRml4ZWQoMik7XHJcblxyXG5cdCAgICBjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdCAgICBoZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBjb21wbGV0ZWQgK1xyXG4gICAgICAgICAnIHRhc2tzICcgKyBjb21wbGV0aW9uRmFjdG9yICsgJyAvICcgKyBmbURhdGUgKyAnIHRvICcgKyB0b0RhdGUgK1xyXG4gICAgICAgICAnPC9zcGFuPlNwcmludDogJyArIG51bTtcclxuXHJcblx0ICAgIGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xyXG5cdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xyXG5cclxuXHQgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgaWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5zdGFydF9tZWV0aW5nKTtcclxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuZW5kX21lZXRpbmcpO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ29tcGxldGVkXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBwQ29tcGxldGVkID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb21wbGV0ZWQtaGVhZGVyJyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBDb21wbGV0ZWQpO1xyXG5cdCAgICBwQ29tcGxldGVkLmlubmVyVGV4dCA9ICdTcHJpbnQgQ29tcGxldGVkIFRhc2tzJztcclxuXHJcblx0ICAgIGxldCBwTWVtYmVycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocE1lbWJlcnMpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNvbXBsZXRlZDo8L2VtPlsnICsgc3ByaW50LmNvbXBsZXRlZC5sZW5ndGggKyAnXSAnO1xyXG5cdCAgICBmb3IodmFyIGMgaW4gY291bnRzKSB7XHJcblx0ICAgICAgICBpZihjb3VudHMuaGFzT3duUHJvcGVydHkoYykpIHtcclxuXHQgICAgICAgICAgICBtZW1iZXJzICs9IGNvdW50c1tjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudHNbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBwTWVtYmVycy5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gUHJlc2VudCBjb21wbGV0ZWQgY2FyZHNcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKGxldCBpPTA7IGk8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbaV07XHJcblx0ICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBjb21wbGV0ZWQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfbWVtYmVycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRsZXQgbWVtYmVyc0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXJzJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChtZW1iZXJzRGl2KTtcclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0ICAgICAgICBpZihzcHJpbnRzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0ICAgICAgICAgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0ICAgICAgICAgICAgcHJlc2VudF9tZW1iZXIobWVtYmVyc0Rpdiwgc3ByaW50cywgbWVtYmVyKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHRcdHByZXNlbnRfaW5mbyhtZW1iZXJzRGl2LCBzcHJpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9tZW1iZXIgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgXHRsZXQgbWVtYmVyRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcicpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyRGl2KTtcclxuXHJcblx0ICAgIGxldCBtZWV0aW5ncyA9IHNwcmludHMubWVldGluZ3Nfc2xvcCA9PT0gMSA/ICcgbWVldGluZycgOiAnIG1lZXRpbmdzJztcclxuXHQgICAgbGV0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xyXG5cclxuXHQgICAgbWVtYmVyRGl2LmlubmVySFRNTCA9ICc8aDQ+JyArIG1lbWJlci5tZW1iZXIubmFtZSArICc8L2g0PicgK1xyXG5cclxuXHQgICAgICAgICc8cD5NZWV0aW5ncyBhdHRlbmRlZDogJyArIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCArICcvJyArIG1lbWJlci5tZWV0aW5nc19jb3VudCArXHJcblx0ICAgICAgICAnIHBlcmNlbnRhZ2U6ICcgKyBtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpICtcclxuXHQgICAgICAgICcgPGVtPllvdSBhcmUgYWxsb3dlZCB0byBtaXNzICcgKyBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgKyBtZWV0aW5ncyArICAnPC9lbT4nICtcclxuXHQgICAgICAgICc8L3A+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPlRhc2tzIGNvbXBsZXRlZDogJyArIG1lbWJlci5jb21wbGV0ZWRfY291bnQgK1xyXG5cdCAgICAgICAgJy8nICsgKG1lbWJlci5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSkudG9GaXhlZCgyKSArICcgZm9yIGEgY29tcGxldGlvbiBmYWN0b3Igb2Y6ICcgK1xyXG5cdCAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nICtcclxuXHJcblx0ICAgICAgICAnPHA+UmV2aWV3cyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIucmV2aWV3c19jb3VudCArICcgZm9yIGEgcmV2aWV3aW5nIGZhY3RvciBvZjogJyArXHJcblx0ICAgICAgICBtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfaW5mbyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRjb25zdCBpbmZvRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWluZm8nKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xyXG5cclxuICAgIFx0aW5mb0Rpdi5pbm5lckhUTUwgPSAnPHA+VGhlIGNvbXBsZXRpb24gZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5JyArXHJcblx0XHQgICAgJyB0ZWFtIG1lbWJlciBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSAnICsgKHNwcmludHMuY29tcGxldGVkX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mJyArXHJcblx0XHQgICAgJyBhbiBlcXVhbCBkaXN0cmlidXRpb24gb2YgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nICtcclxuXHRcdCAgICAnPHA+VGhlIHJldmlld2luZyBmYWN0b3IgZm9yIHRhc2tzIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgZXZlcnkgdGVhbSBtZW1iZXInICtcclxuXHRcdCAgICAnIGlzIGV4cGVjdGVkIHRvIHJldmlldyAnICsgKHNwcmludHMucmV2aWV3aW5nX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mIGFuIGVxdWFsJyArXHJcblx0XHQgICAgJyBkaXN0cmlidXRpb24gb2YgdGFza3MuIFRoaXMgZmFjdG9yIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgOTAlIG9mIHRhc2tzIHNob3VsZCcgK1xyXG5cdFx0ICAgICcgYmUgcHJvZ3JhbW1pbmcgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5TcHJpbnRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50Vmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLypcclxuICogU3ByaW50IGFuYWx5c2lzIG9mIFRyZWxsbyBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7U3ByaW50fSBmcm9tIFwiLi9TcHJpbnRcIjtcclxuaW1wb3J0IHtTcHJpbnRNZW1iZXJ9IGZyb20gXCIuL1NwcmludE1lbWJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludHMgPSBmdW5jdGlvbihib2FyZCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vLyBOdW1iZXIgb2YgbWlzc2VkIG1lZXRpbmdzIGFsbG93XHJcbiAgICB0aGlzLm1lZXRpbmdzX3Nsb3AgPSAxO1xyXG5cclxuXHJcbiAgICAvLy8gTnVtYmVyIG9mIHNlY29uZHMgYWZ0ZXIgbWVldGluZyB0aW1lIHRvIGNvbnNpZGVyIGNvbXBsZXRlZFxyXG4gICAgLy8vIGluIGEgY3VycmVudCBzcHJpbnQgaW4gc2Vjb25kcy5cclxuICAgIHRoaXMuc3ByaW50X3RpbWVfc2xvcCA9IDUgKiA2MCAqIDYwOyAgIC8vIDUgaG91cnNcclxuICAgIFxyXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIGhpcyBzaGFyZSBvZiB0YXNrc1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfZmFjdG9yID0gMC44O1xyXG4gICAgXHJcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgOTAlIG9mIHRoZSB0YXNrIGNvdW50IGluIHJldmlld3NcclxuICAgIHRoaXMucmV2aWV3aW5nX2ZhY3RvciA9IDAuOCAqIDAuOTtcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcblxyXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgIHRoaXMud2FybmluZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSB7fTtcclxuICAgIHRoaXMuc3ByaW50cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZGVzaWduID0gbnVsbDtcclxuICAgIHRoaXMucmlza3MgPSBudWxsO1xyXG4gICAgdGhpcy5tZWV0aW5ncyA9IG51bGw7XHJcbiAgICB0aGlzLnRvZG8gPSBudWxsO1xyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IG51bGw7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvcHkgb3ZlciB0aGUgbWVtYmVyc1xyXG4gICAgLy9cclxuICAgIGZvcih2YXIgaWQgaW4gYm9hcmQubWVtYmVycykge1xyXG4gICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICBpZihtZW1iZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImNzZTMzNVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXSA9IG5ldyBTcHJpbnRNZW1iZXIodGhpcywgbWVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRmluZCBhbGwgb2YgdGhlIHJlcXVpcmVkIGxpc3RzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5maW5kX2xpc3RzKCk7XHJcblxyXG4gICAgaWYodGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2U5MDAnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE9yZGVyIHRlc3RpbmdcclxuICAgIC8vXHJcbiAgICB0aGlzLm9yZGVyX3Rlc3QoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRGV0ZXJtaW5lIGF0dGVuZGFuY2VcclxuICAgIC8vXHJcbiAgICB0aGlzLm1lZXRpbmdfYXR0ZW5kYW5jZSgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb252ZXJ0IG1lZXRpbmdzIGludG8gc3ByaW50c1xyXG4gICAgLy9cclxuICAgIHRoaXMuY3JlYXRlX3NwcmludHMoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gU29ydCBjb21wbGV0ZWQgaW50byBzcHJpbnRzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5zb3J0X2NvbXBsZXRlZCgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb21wbGV0ZWQgc3RhdGlzdGljc1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29tcGxldGVkX3N0YXRpc3RpY3MoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBhbGwgcmVxdWlyZWQgbGlzdHMgZXhpc3QuXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX2xpc3RzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBGaW5kIHRoZSBcIkRlc2lnblwiIGxpc3RcclxuICAgIHRoaXMuZGVzaWduID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0Rlc2lnbicpO1xyXG4gICAgaWYodGhpcy5kZXNpZ24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJSaXNrc1wiIGxpc3RcclxuICAgIHRoaXMucmlza3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnUmlza3MnKTtcclxuICAgIGlmKHRoaXMucmlza3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJNZWV0aW5nc1wiIGxpc3RcclxuICAgIHRoaXMubWVldGluZ3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnTWVldGluZ3MnKTtcclxuICAgIGlmKHRoaXMubWVldGluZ3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUbyBEb1wiIGxpc3RcclxuICAgIHRoaXMudG9kbyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUbyBEbycpO1xyXG4gICAgaWYodGhpcy50b2RvID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQWN0aXZlXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IEFjdGl2ZScpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfYWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IENvbXBsZXRlZCcpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfY29tcGxldGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnQ29tcGxldGVkJyk7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDcnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBsaXN0cyBhcmUgaW4gdGhlIHJpZ2h0IG9yZGVyXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5vcmRlcl90ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgb3JkZXIgPSBbJ0Rlc2lnbicsICdSaXNrcycsICdNZWV0aW5ncycsXHJcbiAgICAgICAgJ1RvIERvJywgJ1RoaXMgU3ByaW50IEFjdGl2ZScsXHJcbiAgICAgICAgJ1RoaXMgU3ByaW50IENvbXBsZXRlZCcsICdDb21wbGV0ZWQnXTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxvcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQubGlzdHNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBvcmRlcltpXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZygndzAwMScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVldGluZyBhdHRlbmRhbmNlIGZvciBhIHVzZXJcclxuICovXHJcblNwcmludHMucHJvdG90eXBlLm1lZXRpbmdfYXR0ZW5kYW5jZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBtZWV0aW5nc19jb3VudCA9IHRoaXMubWVldGluZ3MuY2FyZHMubGVuZ3RoO1xyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5tZW1iZXJzW2lkXTtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfY291bnQgPSBtZWV0aW5nc19jb3VudDtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVldGluZ3MuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoYXQuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmNyZWF0ZV9zcHJpbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWVldGluZ3MgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLnNsaWNlKCk7XHJcblxyXG4gICAgbWVldGluZ3Muc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5jcmVhdGVkIDwgYi5jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5jcmVhdGVkID09PSBiLmNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8KG1lZXRpbmdzLmxlbmd0aCAtIDEpOyBpKyspIHtcclxuICAgICAgICB0aGlzLnNwcmludHMucHVzaChuZXcgU3ByaW50KHRoaXMsIG1lZXRpbmdzW2ldLCBtZWV0aW5nc1tpKzFdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLnNvcnRfY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmNhcmRzLnNsaWNlKCk7XHJcbiAgICBjb21wbGV0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgdmFyIGF0ID0gYS5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgdmFyIGJ0ID0gYi5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgaWYoYXQgPT09IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZihhdCA8IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY29tcGxldGVkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBpZ25vcmUgXCJyaXNrXCIgY2FyZHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKGNvbXBsZXRlZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInJpc2tcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gY29tcGxldGVkLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhhdC5zcHJpbnRzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGUgPD0gc3ByaW50LmVuZF90aW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaSA+PSB0aGF0LnNwcmludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gdGhhdC5zcHJpbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XHJcbiAgICAgICAgICAgIHNwcmludC5jb21wbGV0ZWQucHVzaChjb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuY29tcGxldGVkX3N0YXRpc3RpY3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb21wbGV0ZWRfY291bnQgPSAwO1xyXG4gICAgdmFyIHJldmlld3NfdG90YWwgPSAwO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzcHJpbnQgPSB0aGlzLnNwcmludHNbaV07XHJcbiAgICAgICAgY29tcGxldGVkX2NvdW50ICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IodmFyIGo9MDsgajxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb21wbGV0ZWQubWVtYmVyc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwMlwiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBubyB0ZWFtIG1lbWJlcnMgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDNcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXHJcbiAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBtb3JlIHRoYW4gb25lIHRlYW0gbWVtYmVyIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBcmUgdGhleSBhbnkgcmV2aWV3cz9cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldmlld3NfdG90YWwrKztcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbXBsZXRlZC5jb21tZW50c1swXS5tZW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXIucmV2aWV3c19jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5jb21wbGV0ZWRfdG90YWwgPSBjb21wbGV0ZWRfY291bnQ7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5yZXZpZXdzX3RvdGFsID0gcmV2aWV3c190b3RhbDtcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9tZW1iZXIgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5udW1fbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNudCA9IDA7XHJcblxyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY250O1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGNvZGUpIHtcclxuICAgIC8vIERvZXMgdGhlIGVycm9yIGFscmVhZHkgZXhpc3Q/XHJcbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmVycm9ycy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLmVycm9yc1tpXTtcclxuICAgICAgICBpZihlcnJvci5jb2RlID09PSBjb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICdlMDAxJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0Rlc2lnbidcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMic6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdSaXNrcydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMyc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdNZWV0aW5ncydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUbyBEbydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNSc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBBY3RpdmUnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDYnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQ29tcGxldGVkJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA3JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0NvbXBsZXRlZCdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTkwMCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJGYXRhbCBlcnJvcnMsIHVuYWJsZSB0byBwcm9jZWVkIHdpdGggc3ByaW50cyBhbmFseXNpc1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24oY29kZSwgbXNnKSB7XHJcbiAgICBpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBtc2d9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICd3MDAxJzpcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiWW91ciBsaXN0cyBhcmUgbm90IGluIHRoZSBjb3JyZWN0IG9yZGVyLiBcIiArXHJcbiAgICAgICAgICAgIFwiVGhlIGV4YWN0IG9yZGVyIHNob3VsZCBiZTogRGVzaWduLCBSaXNrcywgTWVldGluZ3MsIFRvIERvLCBcIiArXHJcbiAgICAgICAgICAgIFwiVGhpcyBTcHJpbnQgQWN0aXZlLCBUaGlzIFNwcmludCBDb21wbGV0ZWQsIFwiICtcclxuICAgICAgICAgICAgICAgIFwiQ29tcGxldGVkXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtvcHRpb25zfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XHJcbmltcG9ydCB7RGlzY29ubmVjdGVkVmlld30gZnJvbSBcIi4vRGlzY29ubmVjdGVkVmlld1wiO1xyXG5pbXBvcnQge01haW5WaWV3fSBmcm9tICcuL01haW5WaWV3JztcclxuaW1wb3J0IHtUcmVsbG9Db25uZWN0fSBmcm9tICd0cmVsbG8tY29ubmVjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvU3ByaW50ZXIgPSBmdW5jdGlvbih1c2VyT3B0aW9ucykge1xyXG5cdC8vIERlZmF1bHQgYW5kIHN1cHBsaWVkIG9wdGlvbnNcclxuXHRjb25zdCBvcHRzID0gVXRpbC5tZXJnZShvcHRpb25zLCB1c2VyT3B0aW9ucyk7XHJcblxyXG5cdGNvbnN0IHRyZWxsbyA9IG5ldyBUcmVsbG9Db25uZWN0KG9wdHMpO1xyXG5cclxuXHRVdGlsLnJlYWR5KCgpID0+IHtcclxuXHRcdGxldCBlbGVtZW50cztcclxuXHRcdGlmKG9wdHMuc2VsLm5vZGVUeXBlKSB7XHJcblx0XHRcdGVsZW1lbnRzID0gW29wdHMuc2VsXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNlbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0c3dpdGNoKHRyZWxsby5zdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQ6XHJcblx0XHRcdFx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0bmV3IE1haW5WaWV3KGVsZW1lbnRzW2ldLCB0cmVsbG8sIG9wdHMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG5cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyB1cGRhdGUgb24gYSBjYXJkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZSA9IGZ1bmN0aW9uKGJvYXJkLCBjYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmNhcmQgPSBjYXJkOyBcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm1lbWJlciA9IGRhdGEuaWRNZW1iZXJDcmVhdG9yO1xyXG4gICAgdGhpcy5saXN0QmVmb3JlID0gZGF0YS5kYXRhLmxpc3RCZWZvcmUubmFtZTtcclxuICAgIHRoaXMubGlzdEFmdGVyID0gZGF0YS5kYXRhLmxpc3RBZnRlci5uYW1lO1xyXG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRhLmRhdGUpKTtcclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBVdGlsID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuVXRpbC5tZXJnZSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuXHR2YXIgb2JqID0ge307XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMSkge1xyXG5cdFx0aWYob2JqMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMVtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoyKSB7XHJcblx0XHRpZihvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoyW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGFsbCBIVE1MIHRhZ3MgZnJvbSBhIHN0cmluZy5cclxuICogQHBhcmFtIHN0ciBTdHJpbmcgdG8gcHJvY2Vzc1xyXG4gKiBAcmV0dXJucyBzdHJpbmcgd2l0aG91dCB0YWdzXHJcbiAqL1xyXG5VdGlsLnN0cmlwX3RhZ3MgPSBmdW5jdGlvbihzdHIpIHtcclxuXHRyZXR1cm4gc3RyLnJlcGxhY2UoLzwoPzoufFxcbikqPz4vZ20sICcnKTtcclxufVxyXG5cclxuVXRpbC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24odHlwZSwgY2xzKSB7XHJcblx0bGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG5cdGlmKGNscyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRVdGlsLmFkZENsYXNzKGUsIGNscyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZTtcclxufVxyXG5cclxuVXRpbC5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWVzKSB7XHJcblx0Y29uc3QgbmFtZXMgPSBjbGFzc05hbWVzLnNwbGl0KCcgJyk7XHJcblx0Zm9yKGNvbnN0IG5hbWUgb2YgbmFtZXMpIHtcclxuXHRcdGlmIChlbC5jbGFzc0xpc3QpXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGVsLmNsYXNzTmFtZSArPSAnICcgKyBuYW1lO1xyXG5cdH1cclxufVxyXG5cclxuVXRpbC5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcclxuXHRpZiAoZWwuY2xhc3NMaXN0KVxyXG5cdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG5cdGVsc2VcclxuXHRcdGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XHJcbn1cclxuXHJcblV0aWwucmVhZHkgPSBmdW5jdGlvbihmbikge1xyXG5cdGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuXHRcdGZuKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0IHRvIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBUaGlzIHVzZXMgZm9ybWF0dGluZyB0aGF0IGlzIHN1YnNldCBvZiB0aGUgUEhQIGRhdGUoKSBmdW5jdGlvbi5cclxuICogQHBhcmFtIGRhdGUgRGF0ZSBvYmplY3RcclxuICogQHBhcmFtIGZvcm1hdCBPcHRpb25hbCBmb3JtYXQgc3RyaW5nIChkZWZhdWx0IGlzICduLWQtWSBoOmlhJykuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5VdGlsLmZvcm1hdERhdGV0aW1lID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0KSB7XHJcblxyXG5cdGZ1bmN0aW9uIHBhZChpLCBuKSB7XHJcblx0XHR2YXIgcyA9ICcnICsgaTtcclxuXHRcdHdoaWxlKHMubGVuZ3RoIDwgbikge1xyXG5cdFx0XHRzID0gJzAnICsgcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRmb3JtYXQgPSAnbi1kLVkgaDppYSc7XHJcblx0fVxyXG5cclxuXHR2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0dmFyIGhvdXIgPSBob3VycztcclxuXHR2YXIgYW0gPSAnYSc7XHJcblx0aWYoaG91cnMgPT0gMCkge1xyXG5cdFx0aG91ciA9IDEyO1xyXG5cdH0gZWxzZSBpZihob3VycyA9PSAxMikge1xyXG5cdFx0YW0gPSAncCc7XHJcblx0fSBlbHNlIGlmKGhvdXJzID4gMTIpIHtcclxuXHRcdGhvdXIgPSBob3VycyAtIDEyO1xyXG5cdFx0YW0gPSAncCc7XHJcblx0fVxyXG5cclxuXHR2YXIgc3RyID0gJyc7XHJcblx0Zm9yKHZhciBpPTA7IGk8Zm9ybWF0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRzd2l0Y2goZm9ybWF0LmNoYXJBdChpKSkge1xyXG5cdFx0XHRjYXNlICduJzpcclxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ20nOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdkJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0RGF0ZSgpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ1knOlxyXG5cdFx0XHRcdHN0ciArPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdnJzpcclxuXHRcdFx0XHRzdHIgKz0gaG91cjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2gnOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoaG91ciwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdpJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TWludXRlcygpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3MnOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRTZWNvbmRzKCksIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnYSc6XHJcblx0XHRcdFx0c3RyICs9IGFtO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRzdHIgKz0gZm9ybWF0LmNoYXJBdChpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHI7XHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0c2VsOiAnI3RyZWxsbycsXHJcblx0dmVyc2lvbjogMSxcclxuXHRcImFwaUVuZHBvaW50XCI6IFwiaHR0cHM6Ly9hcGkudHJlbGxvLmNvbVwiLFxyXG5cdFwiYXV0aEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0XCJpbnRlbnRFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdGtleTogJycsXHJcblxyXG5cdC8vIFByZWZpeCB0byBhcHBseSB0byBsb2NhbCBzdG9yYWdlLiBVc2VmdWwgdG9cclxuXHQvLyBkaXNhbWJpZ3VhdGUgbXVsdGlwbGUgdXNlcyBvbiB0aGUgc2FtZSBzaXRlXHJcblx0bG9jYWxQcmVmaXg6ICcnLFxyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBib2FyZCB3ZSBhcmUgZmV0Y2hpbmdcclxuXHRib2FyZDogJycsXHJcblxyXG5cdC8qKiBPcHRpb25hbDogT25seSBjb25zaWRlciBtZWV0aW5ncyBhZnRlciB0aGlzIHRpbWUgKFVuaXggdGltZSkgKi9cclxuXHRhZnRlcjogbnVsbCxcclxuXHJcblx0dmlld3M6IHtcclxuXHRcdCdib2FyZCc6IHt9LFxyXG5cdFx0J3NwcmludCc6IHt9XHJcblx0fSxcclxuXHJcblx0bmFtZTogJ1RyZWxsb1NwcmludGVyJ1xyXG59O1xyXG5cclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vdHJlbGxvLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDMwZTFjMzhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vdHJlbGxvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXHJcbmltcG9ydCB7VHJlbGxvRmFjdG9yeX0gZnJvbSAnLi9qcy9UcmVsbG9GYWN0b3J5JztcclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcbiIsImltcG9ydCB7VHJlbGxvU3ByaW50ZXJWaWV3fSBmcm9tICcuL1RyZWxsb1NwcmludGVyVmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5UcmVsbG9GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXRyZWxsby1zcHJpbnRlcicpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bmV3IFRyZWxsb1NwcmludGVyVmlldyhzaXRlLCBlbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQgVHJlbGxvU3ByaW50ZXIgZnJvbSBcInRyZWxsby1zcHJpbnRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyVmlldyA9IGZ1bmN0aW9uKHNpdGUsIGVsZW1lbnQpIHtcclxuXHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LmlubmVyVGV4dCk7XHJcblx0ZWxlbWVudC5pbm5lclRleHQgPSAnJztcclxuXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHRuZXcgVHJlbGxvU3ByaW50ZXIoe1xyXG5cdFx0c2VsOiBlbGVtZW50LFxyXG5cdFx0a2V5OiBqc29uLmtleSxcclxuXHRcdGJvYXJkOiBqc29uLnRlYW0sXHJcblx0XHR2aWV3czoganNvbi52aWV3cyxcclxuXHRcdGFmdGVyOiBqc29uLmFmdGVyXHJcblx0fSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
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
/******/ 	var hotCurrentHash = "ba852d5e0cfa4d4c13c0";
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
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./img/plus.png */ "./packages/trello-sprinter/img/plus.png"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ./img/minus.png */ "./packages/trello-sprinter/img/minus.png"));
// Module
exports.push([module.i, "div.trello-sprinter {\n  margin: 0; }\n  div.trello-sprinter h2 {\n    text-align: center;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white;\n    font-size: 1em;\n    margin: 0; }\n  div.trello-sprinter p.trello-status {\n    text-align: center;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white; }\n  div.trello-sprinter p.trello-msg {\n    text-align: center;\n    font-style: italic;\n    font-size: 0.9em;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white; }\n  div.trello-sprinter p.center {\n    text-align: center; }\n  div.trello-sprinter div.trello-view {\n    background: white;\n    color: black; }\n    div.trello-sprinter div.trello-view h3 {\n      border-top: 2px solid black;\n      margin: 0;\n      padding: 0.25em 0 0.25em 20px; }\n      div.trello-sprinter div.trello-view h3 span.date {\n        font-weight: normal;\n        font-style: normal;\n        font-size: 0.7em;\n        float: right;\n        padding-top: 0.25em; }\n    div.trello-sprinter div.trello-view p.trello-completed-header {\n      text-align: center;\n      font-weight: bold;\n      background: black;\n      color: deepskyblue; }\n  div.trello-sprinter .trello-plus {\n    background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n  div.trello-sprinter .trello-minus {\n    background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n  div.trello-sprinter .trello-plus, div.trello-sprinter .trello-minus {\n    background-repeat: no-repeat;\n    background-position: left center;\n    background-size: 16px 16px;\n    cursor: pointer; }\n  div.trello-sprinter div.trello-expand {\n    position: relative;\n    display: none;\n    overflow: auto;\n    background: #f0f0f0;\n    padding: 0.25em;\n    margin-bottom: 6pt;\n    border: 1pt solid gray;\n    word-wrap: normal; }\n  div.trello-sprinter div.trello-expand, div.trello-sprinter .trello-errors {\n    -moz-box-shadow: 6pt 6px 10pt #888;\n    -webkit-box-shadow: 6pt 6px 10pt #888;\n    box-shadow: 6pt 6px 10pt #888; }\n  div.trello-sprinter p.trello-count {\n    margin: 0 0 1em 0;\n    text-align: center;\n    font-size: 0.85em; }\n  div.trello-sprinter div.trello-card {\n    padding-left: 2em;\n    padding-right: 2em; }\n    div.trello-sprinter div.trello-card h4 {\n      background-color: #81d0fd;\n      margin: 0.5em 0 0 0;\n      padding: 0 0.25em; }\n    div.trello-sprinter div.trello-card h4 span.trello-date {\n      font-weight: normal;\n      font-size: 0.9em;\n      float: right;\n      padding-top: 0.25em; }\n    div.trello-sprinter div.trello-card .trello-card-members {\n      margin: 0 0.25em;\n      font-size: 0.85em;\n      font-style: italic; }\n  div.trello-sprinter div.trello-description {\n    margin: 0.5em 1em; }\n    div.trello-sprinter div.trello-description p {\n      margin: 0 0 0.25em 0;\n      font-size: 0.9em; }\n  div.trello-sprinter div.trello-comments {\n    margin: 0 2em; }\n    div.trello-sprinter div.trello-comments h5 {\n      margin: 0;\n      padding: 0 0.25em;\n      background-color: #ccc;\n      font-size: 0.8em;\n      font-weight: normal;\n      font-style: italic; }\n      div.trello-sprinter div.trello-comments h5 span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right; }\n    div.trello-sprinter div.trello-comments p {\n      margin: 0 0.25em;\n      font-size: 0.9em; }\n  div.trello-sprinter div.trello-updates {\n    margin: 1em 2em; }\n    div.trello-sprinter div.trello-updates p {\n      margin: 0;\n      padding: 0 0.25em;\n      font-size: 0.8em;\n      font-style: italic; }\n      div.trello-sprinter div.trello-updates p span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right; }\n      div.trello-sprinter div.trello-updates p span.list {\n        font-style: normal;\n        font-weight: bold; }\n  div.trello-sprinter div.trello-sprints {\n    background: white;\n    color: black; }\n    div.trello-sprinter div.trello-sprints div.trello-errors {\n      background: #c41425;\n      color: white; }\n    div.trello-sprinter div.trello-sprints div.trello-warnings {\n      background: #ff80df;\n      color: black; }\n    div.trello-sprinter div.trello-sprints div.trello-members {\n      background: #f0f0f0;\n      color: black; }\n      div.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n        margin-bottom: 1em; }\n    div.trello-sprinter div.trello-sprints div.trello-errors, div.trello-sprinter div.trello-sprints div.trello-warnings, div.trello-sprinter div.trello-sprints div.trello-members {\n      position: relative;\n      overflow: auto;\n      padding: 0 1em 1em 1em;\n      margin: 1em 3em 6pt 3em;\n      border: 1pt solid gray;\n      word-wrap: normal;\n      font-size: 0.9em; }\n      div.trello-sprinter div.trello-sprints div.trello-errors p, div.trello-sprinter div.trello-sprints div.trello-warnings p, div.trello-sprinter div.trello-sprints div.trello-members p {\n        font-size: 1.1em;\n        margin: 0; }\n      div.trello-sprinter div.trello-sprints div.trello-errors span.trello-code, div.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code, div.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n        font-weight: bold; }\n      div.trello-sprinter div.trello-sprints div.trello-errors h3, div.trello-sprinter div.trello-sprints div.trello-errors h4, div.trello-sprinter div.trello-sprints div.trello-warnings h3, div.trello-sprinter div.trello-sprints div.trello-warnings h4, div.trello-sprinter div.trello-sprints div.trello-members h3, div.trello-sprinter div.trello-sprints div.trello-members h4 {\n        margin: 0;\n        padding: 0.25em 0;\n        text-align: center; }\n      div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info {\n        border-top: 1px solid black; }\n        div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {\n          margin: 1em 0; }\n  div.trello-sprinter div.trello-sprint-table {\n    overflow: auto; }\n", ""]);


/***/ }),

/***/ "./packages/trello-connect/index.js":
/*!******************************************!*\
  !*** ./packages/trello-connect/index.js ***!
  \******************************************/
/*! exports provided: TrelloConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloConnect", function() { return TrelloConnect; });
var defaultOptions = {
  version: 1,
  "apiEndpoint": "https://api.trello.com",
  "authEndpoint": "https://trello.com",
  "intentEndpoint": "https://trello.com",
  key: '',
  // Prefix to apply to local storage. Useful to
  // disambiguate multiple uses on the same site
  localPrefix: ''
};
/**
 * Merge two Javascript objects into a single result.
 * @param obj1 First object
 * @param obj2 Second object. Second object values take precedence.
 */

var merge = function merge(obj1, obj2) {
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
}; // Local storage address for storing the token while connected


var TokenStorage = '_n9s5Ryg8wa';
var TrelloConnect = function TrelloConnect(options) {
  var that = this;
  options = merge(defaultOptions, options);
  var token = '';
  /**
   * Initialize.
   */

  function initialize() {
    // Till we know otherwise
    that.state = TrelloConnect.DISCONNECTED; //
    // See if there is a token in the current URL
    //

    var href = window.location.href;
    var re = /#token=(.*)$/;
    var matches = href.match(re);

    if (matches !== null && matches.length > 1) {
      token = matches[1];
      var _localStorage = window.localStorage;

      _localStorage.setItem(options.localPrefix + TokenStorage, token);

      window.location = window.location.origin + window.location.pathname + window.location.search;
    } //
    // Is there a token in local storage?
    //


    var localStorage = window.localStorage;
    token = localStorage.getItem(options.localPrefix + TokenStorage, token);

    if (token !== null && token.length > 0) {
      that.state = TrelloConnect.CONNECTED;
    }
  }
  /**
   * Authorize with Trello
   *
   * Redirects to the Trello authorization endpoint, which redirects back
   * to this page after authorization with the token in the URL.
   */


  this.authorize = function () {
    var return_url = encodeURIComponent(window.location.href);
    var url = "".concat(options.authEndpoint, "/").concat(options.version, "/authorize?expiration=never&name=").concat(options.name, "&") + "callback_method=fragment&scope=read&response_type=token&key=".concat(options.key, "&return_url=").concat(return_url);
    window.location = url;
  };
  /**
   * Disconnect from Trello.
   *
   * This forgets the token in local storage.
   *
   */


  this.disconnect = function () {
    var localStorage = window.localStorage;
    localStorage.removeItem(options.localPrefix + TokenStorage);
    token = '';
  };
  /**
   * Perform a GET query for Trello
   * @param url The board URL after the version, like "/member/me/boards?fields=all"
   * @param success Function called on success with data argument
   * @param failure Function called on failure with data argument
   * @param msg Optional element to put rate limiting message into
   */


  this.get = function (url, success, failure, msg) {
    var tries = 1;
    var maxtries = 5; // Maximum number of tries

    var backoff = 10; // seconds

    var backoffIncrease = 1.25; // Amount to increase backoff after each try

    function trelloGet() {
      var request = new XMLHttpRequest();
      request.open('GET', "".concat(options.apiEndpoint, "/").concat(options.version, "/").concat(url, "&key=").concat(options.key, "&token=").concat(token), true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          success(data);
        } else {
          // We reached our target server, but it returned an error
          failure();
        }
      };

      request.onerror = function () {
        if (+request.status === 429 && tries < maxtries) {
          tries++;

          if (msg !== undefined) {
            msg.innerText = "Rate limited, attempt " + tries + " after " + backoff.toFixed(0) + " seconds";
            setTimeout(function () {
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
  };

  initialize();
};
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





var Board = function Board(data, options) {
  this.data = data;
  this.id = data.id;
  this.name = data.name;
  this.lists = [];
  this.members = {};
  this.options = options;

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
          board = new Board(boardData, options); // Fetch the membership

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
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
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
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
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
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
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
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
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
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
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

    if (options["class"] !== undefined) {
      _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].addClass(table, options["class"]);
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
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
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
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
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
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
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
  var order = this.board.options.cards;

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
      var msg = "Your lists are not in the correct order. " + "The exact order should be:";
      var first = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.board.options.cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var card = _step.value;

          if (first) {
            first = false;
          } else {
            msg += ',';
          }

          msg += ' ' + card;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.warnings.push({
        code: code,
        msg: msg
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
/* harmony import */ var trello_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! trello-connect */ "./packages/trello-connect/index.js");





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
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
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
  name: 'TrelloSprinter',
  // Default cards
  cards: ['Design', 'Risks', 'Meetings', 'To Do', 'This Sprint Active', 'This Sprint Completed', 'Completed']
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
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js?sourceMap!./trello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6a53ace6", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js?sourceMap!./trello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/resolve-url-loader!../../node_modules/sass-loader/dist/cjs.js?sourceMap!./trello.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLWNvbm5lY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9wbHVzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9EaXNjb25uZWN0ZWRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludE1lbWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50VGFibGVWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVHJlbGxvU3ByaW50ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VdGlsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/Mzg3NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsInZlcnNpb24iLCJrZXkiLCJsb2NhbFByZWZpeCIsIm1lcmdlIiwib2JqMSIsIm9iajIiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIlRva2VuU3RvcmFnZSIsIlRyZWxsb0Nvbm5lY3QiLCJvcHRpb25zIiwidGhhdCIsInRva2VuIiwiaW5pdGlhbGl6ZSIsInN0YXRlIiwiRElTQ09OTkVDVEVEIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRJdGVtIiwiQ09OTkVDVEVEIiwiYXV0aG9yaXplIiwicmV0dXJuX3VybCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsImF1dGhFbmRwb2ludCIsIm5hbWUiLCJkaXNjb25uZWN0IiwicmVtb3ZlSXRlbSIsImdldCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwibXNnIiwidHJpZXMiLCJtYXh0cmllcyIsImJhY2tvZmYiLCJiYWNrb2ZmSW5jcmVhc2UiLCJ0cmVsbG9HZXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiYXBpRW5kcG9pbnQiLCJvbmxvYWQiLCJzdGF0dXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsInVuZGVmaW5lZCIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJzZXRUaW1lb3V0Iiwic2VuZCIsIlRyZWxsb1NwcmludGVyIiwiQm9hcmQiLCJpZCIsImxpc3RzIiwibWVtYmVycyIsImZpbmRfY2FyZCIsImkiLCJjYXJkIiwiYWRkX21lbWJlciIsIm1lbWJlciIsImZldGNoIiwidHJlbGxvIiwiYWN0aXZlIiwiYm9hcmQiLCJhc3luY19zdGFydCIsImJvYXJkRGF0YSIsInRvTG93ZXJDYXNlIiwiY2xvc2VkIiwiZmV0Y2hfbWVtYmVyc2hpcCIsImZldGNoX2xpc3RzIiwiYXN5bmNfZW5kIiwiZm9yRWFjaCIsIm1lbWJlckRhdGEiLCJNZW1iZXIiLCJsaXN0RGF0YSIsImxpc3QiLCJMaXN0IiwicHVzaCIsImZldGNoX2NhcmRzIiwidXJscyIsImNhcmRzRGF0YSIsImNhcmREYXRhIiwiQ2FyZCIsImFmdGVyIiwiY3JlYXRlZCIsImdldFRpbWUiLCJhZGRfY2FyZCIsImZldGNoX2FjdGlvbnMiLCJhY3Rpb24iLCJ0eXBlIiwiY29tbWVudCIsIkNvbW1lbnQiLCJjb21tZW50cyIsInVwZGF0ZSIsIlVwZGF0ZSIsInVwZGF0ZXMiLCJjYXJkcyIsInNvcnRfdXBkYXRlcyIsInByb3RvdHlwZSIsImZpbmRfbGlzdCIsIkJvYXJkVmlldyIsImRpdiIsIkRhdGFWaWV3IiwiY2FsbCIsInByZXNlbnQiLCJ2aWV3IiwiVXRpbCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInByZXNlbnRMaXN0IiwiaGVhZGVyIiwiZXhwYW5kZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY291bnQiLCJjb3VudF9tZW1iZXJzIiwiYyIsImNudCIsImNvdW50RWwiLCJpbm5lckhUTUwiLCJwcmVzZW50Q2FyZCIsImRhdGUiLCJmb3JtYXREYXRldGltZSIsImNhcmREaXYiLCJtZW1iZXJzUCIsImRlc2MiLCJwcmVzZW50Q29tbWVudHMiLCJwcmVzZW50VXBkYXRlcyIsImNvbW1lbnREaXYiLCJtZW1iZXJOYW1lIiwiaDUiLCJ0ZXh0RGl2IiwidGV4dCIsInVwZGF0ZURpdiIsInAiLCJkb2N1bWVudCIsImxpc3RCZWZvcmUiLCJsaXN0QWZ0ZXIiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInN0cmlwX3RhZ3MiLCJyZXBsYWNlIiwiRGF0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaWRNZW1iZXJzIiwic29ydCIsImEiLCJiIiwiZmluYWxfdGltZSIsImlkTWVtYmVyQ3JlYXRvciIsIkRpc2Nvbm5lY3RlZFZpZXciLCJlbGVtZW50IiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJjYXJkc19ieV9pZCIsIk1haW5WaWV3IiwicFN0YXR1cyIsInBNc2ciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aWV3cyIsInYiLCJTcHJpbnRWaWV3Iiwic3ByaW50IiwiU3ByaW50VGFibGVWaWV3Iiwic3ByaW50VGFibGUiLCJmdWxsTmFtZSIsIlNwcmludCIsInNwcmludHMiLCJzdGFydCIsImVuZCIsInN0YXJ0X21lZXRpbmciLCJlbmRfbWVldGluZyIsImNvbXBsZXRlZCIsImVuZF90aW1lIiwic3ByaW50X3RpbWVfc2xvcCIsIlNwcmludE1lbWJlciIsIm1lZXRpbmdzX2NvdW50IiwibWVldGluZ3NfYXR0ZW5kZWQiLCJjb21wbGV0ZWRfY291bnQiLCJjb21wbGV0ZWRfdG90YWwiLCJyZXZpZXdzX2NvdW50IiwicmV2aWV3c190b3RhbCIsIm1lZXRpbmdzX3BlcmNlbnRhZ2UiLCJtZWV0aW5nc19zbG9wIiwicGVyIiwiY29tcGxldGVkX2ZhY3RvciIsInRlYW1TaXplIiwiZmFjdG9yIiwicmV2aWV3aW5nX2ZhY3RvciIsImFkZEhlYWRpbmdzIiwidGFibGUiLCJTcHJpbnRzIiwibnVtX21lbWJlcnMiLCJ0YWJsZUhlYWRpbmciLCJyb3dIVE1MIiwiaXRlbSIsImlzTmFOIiwidHIiLCJ0cjFjbGFzcyIsInRhYmxlX2hlYWRpbmdzIiwiYm9hcmRfdmlldyIsImgyIiwicHJlc2VudF9lcnJvcnMiLCJwcmVzZW50X3dhcm5pbmdzIiwiZXJyb3JzIiwicHJlc2VudF9zcHJpbnRzIiwicHJlc2VudF9tZW1iZXJzIiwiZXJyb3IiLCJjb2RlIiwid2FybmluZ3MiLCJ3YXJuaW5nIiwicyIsInByZXNlbnRfc3ByaW50IiwibnVtIiwiZm1EYXRlIiwidG9EYXRlIiwiY291bnRzIiwidG90YWxDb21wbGV0ZWQiLCJjb21wbGV0aW9uRmFjdG9yIiwicENvbXBsZXRlZCIsInBNZW1iZXJzIiwibWVtYmVyc0RpdiIsInByZXNlbnRfbWVtYmVyIiwicHJlc2VudF9pbmZvIiwibWVtYmVyRGl2IiwibWVldGluZ3MiLCJpbmZvRGl2IiwiZGVzaWduIiwicmlza3MiLCJ0b2RvIiwic3ByaW50X2FjdGl2ZSIsInNwcmludF9jb21wbGV0ZWQiLCJmaW5kX2xpc3RzIiwib3JkZXJfdGVzdCIsIm1lZXRpbmdfYXR0ZW5kYW5jZSIsImNyZWF0ZV9zcHJpbnRzIiwic29ydF9jb21wbGV0ZWQiLCJjb21wbGV0ZWRfc3RhdGlzdGljcyIsIm9yZGVyIiwiZmluZF9tZW1iZXIiLCJzbGljZSIsImF0IiwiYnQiLCJpbmRleE9mIiwiaiIsImZpcnN0IiwidXNlck9wdGlvbnMiLCJvcHRzIiwicmVhZHkiLCJlbGVtZW50cyIsInNlbCIsIm5vZGVUeXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInN0ciIsImNscyIsImUiLCJlbCIsImNsYXNzTmFtZXMiLCJuYW1lcyIsInNwbGl0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiUmVnRXhwIiwiam9pbiIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiZm9ybWF0IiwicGFkIiwibiIsImhvdXJzIiwiZ2V0SG91cnMiLCJob3VyIiwiYW0iLCJjaGFyQXQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiVHJlbGxvRmFjdG9yeSIsIlNpdGUiLCJzaXRlIiwiVHJlbGxvU3ByaW50ZXJWaWV3IiwianNvbiIsInRlYW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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RCxXQUFPLENBQUNtRyxLQUFSLEdBQWdCcU0sSUFBSSxDQUFDck0sS0FBckI7QUFDQTs7QUFFRCxNQUFJOUMsdURBQUosQ0FBbUJyRCxPQUFuQjtBQUNBLENBbEJNLEMiLCJmaWxlIjoidHJlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHJlbGxvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRyZWxsb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJiYTg1MmQ1ZTBjZmE0ZDRjMTNjMFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiVHJlbGxvXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9pbWcvcGx1cy5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi9pbWcvbWludXMucG5nXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnRyZWxsby1zcHJpbnRlciB7XFxuICBtYXJnaW46IDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tc3RhdHVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLW1zZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAuY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgaDMge1xcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMC4yNWVtIDAgMC4yNWVtIDIwcHg7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyBzcGFuLmRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC4yNWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IHAudHJlbGxvLWNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBjb2xvcjogZGVlcHNreWJsdWU7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIik7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzLCBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWV4cGFuZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB0O1xcbiAgICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWV4cGFuZCwgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLWVycm9ycyB7XFxuICAgIC1tb3otYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICAgIGJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4OyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLWNvdW50IHtcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgxZDBmZDtcXG4gICAgICBtYXJnaW46IDAuNWVtIDAgMCAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMC4yNWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgcGFkZGluZy10b3A6IDAuMjVlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCAudHJlbGxvLWNhcmQtbWVtYmVycyB7XFxuICAgICAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMC41ZW0gMWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiBwIHtcXG4gICAgICBtYXJnaW46IDAgMCAwLjI1ZW0gMDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMge1xcbiAgICBtYXJnaW46IDAgMmVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyBoNSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyBoNSBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHAge1xcbiAgICAgIG1hcmdpbjogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMge1xcbiAgICBtYXJnaW46IDFlbSAyZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHNwYW4ubGlzdCB7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjYzQxNDI1O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY4MGRmO1xcbiAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8tbWVtYmVyIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcXG4gICAgICBtYXJnaW46IDFlbSAzZW0gNnB0IDNlbTtcXG4gICAgICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgICBtYXJnaW46IDA7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBzcGFuLnRyZWxsby1jb2RlLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIHNwYW4udHJlbGxvLWNvZGUsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBzcGFuLnRyZWxsby1jb2RlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDMsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGg0LCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGg0LCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDMsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBoNCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8sIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLWluZm8ge1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAgICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBkaXYudHJlbGxvLWluZm8gcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8gcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8taW5mbyBwIHtcXG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludC10YWJsZSB7XFxuICAgIG92ZXJmbG93OiBhdXRvOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHR2ZXJzaW9uOiAxLFxyXG5cdFwiYXBpRW5kcG9pbnRcIjogXCJodHRwczovL2FwaS50cmVsbG8uY29tXCIsXHJcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0a2V5OiAnJyxcclxuXHJcblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xyXG5cdC8vIGRpc2FtYmlndWF0ZSBtdWx0aXBsZSB1c2VzIG9uIHRoZSBzYW1lIHNpdGVcclxuXHRsb2NhbFByZWZpeDogJycsXHJcbn07XHJcblxyXG4vKipcclxuICogTWVyZ2UgdHdvIEphdmFzY3JpcHQgb2JqZWN0cyBpbnRvIGEgc2luZ2xlIHJlc3VsdC5cclxuICogQHBhcmFtIG9iajEgRmlyc3Qgb2JqZWN0XHJcbiAqIEBwYXJhbSBvYmoyIFNlY29uZCBvYmplY3QuIFNlY29uZCBvYmplY3QgdmFsdWVzIHRha2UgcHJlY2VkZW5jZS5cclxuICovXHJcbmNvbnN0IG1lcmdlID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG5cdHZhciBvYmogPSB7fTtcclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajIpIHtcclxuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIExvY2FsIHN0b3JhZ2UgYWRkcmVzcyBmb3Igc3RvcmluZyB0aGUgdG9rZW4gd2hpbGUgY29ubmVjdGVkXHJcbmNvbnN0IFRva2VuU3RvcmFnZSA9ICdfbjlzNVJ5Zzh3YSc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvQ29ubmVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG5cdGxldCB0b2tlbiA9ICcnO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBUaWxsIHdlIGtub3cgb3RoZXJ3aXNlXHJcblx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQ7XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIFNlZSBpZiB0aGVyZSBpcyBhIHRva2VuIGluIHRoZSBjdXJyZW50IFVSTFxyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdGNvbnN0IHJlID0gLyN0b2tlbj0oLiopJC87XHJcblx0XHRjb25zdCBtYXRjaGVzID0gaHJlZi5tYXRjaChyZSk7XHJcblx0XHRpZihtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHR0b2tlbiA9IG1hdGNoZXNbMV07XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlLCB0b2tlbik7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBJcyB0aGVyZSBhIHRva2VuIGluIGxvY2FsIHN0b3JhZ2U/XHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xyXG5cdFx0aWYodG9rZW4gIT09IG51bGwgJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5DT05ORUNURUQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBdXRob3JpemUgd2l0aCBUcmVsbG9cclxuXHQgKlxyXG5cdCAqIFJlZGlyZWN0cyB0byB0aGUgVHJlbGxvIGF1dGhvcml6YXRpb24gZW5kcG9pbnQsIHdoaWNoIHJlZGlyZWN0cyBiYWNrXHJcblx0ICogdG8gdGhpcyBwYWdlIGFmdGVyIGF1dGhvcml6YXRpb24gd2l0aCB0aGUgdG9rZW4gaW4gdGhlIFVSTC5cclxuXHQgKi9cclxuXHR0aGlzLmF1dGhvcml6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgcmV0dXJuX3VybCA9IGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRjb25zdCB1cmwgPSBgJHtvcHRpb25zLmF1dGhFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259L2F1dGhvcml6ZT9leHBpcmF0aW9uPW5ldmVyJm5hbWU9JHtvcHRpb25zLm5hbWV9JmAgK1xyXG5cdFx0XHRgY2FsbGJhY2tfbWV0aG9kPWZyYWdtZW50JnNjb3BlPXJlYWQmcmVzcG9uc2VfdHlwZT10b2tlbiZrZXk9JHtvcHRpb25zLmtleX0mcmV0dXJuX3VybD0ke3JldHVybl91cmx9YDtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc2Nvbm5lY3QgZnJvbSBUcmVsbG8uXHJcblx0ICpcclxuXHQgKiBUaGlzIGZvcmdldHMgdGhlIHRva2VuIGluIGxvY2FsIHN0b3JhZ2UuXHJcblx0ICpcclxuXHQgKi9cclxuXHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlKTtcclxuXHRcdHRva2VuID0gJyc7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtIGEgR0VUIHF1ZXJ5IGZvciBUcmVsbG9cclxuXHQgKiBAcGFyYW0gdXJsIFRoZSBib2FyZCBVUkwgYWZ0ZXIgdGhlIHZlcnNpb24sIGxpa2UgXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCJcclxuXHQgKiBAcGFyYW0gc3VjY2VzcyBGdW5jdGlvbiBjYWxsZWQgb24gc3VjY2VzcyB3aXRoIGRhdGEgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gZmFpbHVyZSBGdW5jdGlvbiBjYWxsZWQgb24gZmFpbHVyZSB3aXRoIGRhdGEgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gbXNnIE9wdGlvbmFsIGVsZW1lbnQgdG8gcHV0IHJhdGUgbGltaXRpbmcgbWVzc2FnZSBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5nZXQgPSBmdW5jdGlvbih1cmwsIHN1Y2Nlc3MsIGZhaWx1cmUsIG1zZykge1xyXG5cclxuXHRcdGxldCB0cmllcyA9IDE7XHJcblxyXG5cdFx0bGV0IG1heHRyaWVzID0gNTsgIC8vIE1heGltdW0gbnVtYmVyIG9mIHRyaWVzXHJcblx0XHRsZXQgYmFja29mZiA9IDEwOyAgIC8vIHNlY29uZHNcclxuXHRcdGxldCBiYWNrb2ZmSW5jcmVhc2UgPSAxLjI1OyAvLyBBbW91bnQgdG8gaW5jcmVhc2UgYmFja29mZiBhZnRlciBlYWNoIHRyeVxyXG5cclxuXHRcdGZ1bmN0aW9uIHRyZWxsb0dldCgpIHtcclxuXHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdFx0cmVxdWVzdC5vcGVuKCdHRVQnLCBgJHtvcHRpb25zLmFwaUVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vJHt1cmx9JmtleT0ke29wdGlvbnMua2V5fSZ0b2tlbj0ke3Rva2VufWAsIHRydWUpO1xyXG5cclxuXHRcdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcblx0XHRcdFx0XHQvLyBTdWNjZXNzIVxyXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0c3VjY2VzcyhkYXRhKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gV2UgcmVhY2hlZCBvdXIgdGFyZ2V0IHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yXHJcblx0XHRcdFx0XHRmYWlsdXJlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZigrcmVxdWVzdC5zdGF0dXMgPT09IDQyOSAmJiB0cmllcyA8IG1heHRyaWVzKSB7XHJcblx0XHRcdFx0XHR0cmllcysrO1xyXG5cdFx0XHRcdFx0aWYobXNnICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0bXNnLmlubmVyVGV4dCA9IFwiUmF0ZSBsaW1pdGVkLCBhdHRlbXB0IFwiICsgdHJpZXMgKyBcIiBhZnRlciBcIiArXHJcblx0XHRcdFx0XHRcdFx0YmFja29mZi50b0ZpeGVkKDApICsgXCIgc2Vjb25kc1wiO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRyZWxsb0dldCgpO1xyXG5cdFx0XHRcdFx0XHR9LCBiYWNrb2ZmICogMTAwMCk7XHJcblx0XHRcdFx0XHRcdGJhY2tvZmYgKj0gYmFja29mZkluY3JlYXNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmYWlsdXJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmVxdWVzdC5zZW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dHJlbGxvR2V0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn1cclxuXHJcblRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEID0gJ0QnO1xyXG5UcmVsbG9Db25uZWN0LkNPTk5FQ1RFRCA9ICdDJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb0Nvbm5lY3Q7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVoxSlJFRlVlTnFra3IxT0FrRVF4K2Z1aGtQZ2tLOGdoWVpZR1B6bzdHakZ4TUplUTdUUXpsamhHeGhzOUEyTWhZMFYybXVNaWZvQUpwYVFHQitBdzBOUGp1T0ErM0ozNGVnOE1FN3lUMlkzKy92djdPeHdydXZDZndMM1QrckE4M3dNRWN0a1hTVEtqR0Zrb29wbFdjZU80M3lqNDloQVZGN05CVXJGaldsSXh3VmYra08xTTVXSFZ1bWxhdExsRWEvck9oQVZ0OWNqa0pCY0lNNitvbWUyQ21IR1VCWTFUYU5PbVZTTVp3Y21pVlJNQU1LeHAySzczV0tiNUQwVEc5REdleHpxZW9jbHRtMHplV0dhSmkwVE9oMkQ1Ylk5TUJjRUJFbVN3T093MisyT0txREs3eno1M241emxvTmVyd2NlaDVibGpzb3lqQjVrc3dYL2Y4Y0crWFlCUEE0NURsbGlHSDFTVmgrdVQ4TytCb295UlF3NDhEZ3lQeUdXOVBzT0JBSWl0Rm9kWHdOUkRBN0JBWWVpR0IwMlI2VExpVWZZNHpBWVpJbXNxSHdtblJBbmd1V21DWVNUMmNXNjhncXpTN3R6WHhya0YrZERFSTBnYTlKdlVsU0FxOXMyMUp2OFplMXg3NTRqSnNsSVBMZXdzblp4S0NXWE53RzRtVEZqMUdoLzF1NnF6d2ZudXZyMlRnMW9ONkovYXNBZzZHUnBQd0lNQUZjQXphd1Z6UVI0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBZHRKUkVGVWVOcWtVenN2QkZFVVBqTnpaaFk3YXozQ0ZoNFJrZldxTktKRm9sRG95SWFDVGxSMFNxR2hFcDBvTktxbEVna1JDWDZBUklkRVpMV1d3ZHJac1k5NXVmZXVPM1pzc2dvbitYTFA2enR6N2psM0JOZDE0VCtDYzJ0UElJcGlHQkZYaVIwamlQekJTUkxFTGN0YWNSem5BeDNIQm9MVmdhaThHQnVyaGFZNnFTTDdKV1ZING1mcHhhdGJrNXBMb21FWVFCQ2JHZzFDdmVvQ3FWd1JOR2R5cElaeEtCZDFYYWVWSW8xaGtTV1V5c1RTRFR1UHR2cDkvc2F3QklUSHJvcVpUSm81eVgzS0N2RFliejhkUEkraFlYd3l4Ylp0Qmk2bWFRS1BKUktQSkZZc0lra0lxcXA2TWN6bGNsNEhGRVBURjJXRG0xeSs5L1NEalNqazgzbmdQTFFzMTJzcm04MURlL3VJbDV4SW5MT3pzM1AwWisvNFROWXVBZWVoSUNCVHN0a0NhYXNBKytzMVh2SmdyQmpiWC85WnJhWlZrUUlDY0I1NVA5Vk1LUlFja0dVRjB1blBrcThWWTZVK1JRbjRZcWdvb2UvaEtOVDAzYjJ0YlpDZHNpeVV6WVh6TUJCZ1NsSkxpWkdtZXNXWGRMZ3BmNi9UOUwvbFZ4TUlMOGsrYkdqWDBOSXowL3F1dzFCM1J6V0Vnc2lHVkJ3VU1IQ2JRa3NCN0IxbjRPbFYzTDA3bnoybHZUVUU2NkpkZmNNN0MycEQ3emlBMEZ6NVgzS2ZNMjkzSjdlWDg5dEc2djZCRnFEVENKVU40RytoTDB2L0VtQUFvTlhsRzk3dm5Ib0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgJy4vdHJlbGxvLnNjc3MnO1xyXG5cclxuaW1wb3J0IHtUcmVsbG9TcHJpbnRlcn0gZnJvbSAnLi9zcmMvVHJlbGxvU3ByaW50ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvU3ByaW50ZXI7XHJcbmV4cG9ydCB7VHJlbGxvU3ByaW50ZXJ9O1xyXG4iLCIvKlxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBCb2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL01lbWJlcic7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xyXG5pbXBvcnQge1VwZGF0ZX0gZnJvbSAnLi9VcGRhdGUnO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4vQ29tbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9hcmQgPSBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XHJcblxyXG5cdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0dGhpcy5pZCA9IGRhdGEuaWQ7XHJcblx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdHRoaXMubGlzdHMgPSBbXTtcclxuXHR0aGlzLm1lbWJlcnMgPSB7fTtcclxuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuXHR0aGlzLmZpbmRfY2FyZCAgPSBmdW5jdGlvbihpZCkge1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8dGhpcy5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY2FyZCA9IHRoaXMubGlzdHNbaV0uZmluZF9jYXJkKGlkKTtcclxuXHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBjYXJkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHR0aGlzLmFkZF9tZW1iZXIgPSBmdW5jdGlvbihtZW1iZXIpIHtcclxuXHRcdHRoaXMubWVtYmVyc1ttZW1iZXIuaWRdID0gbWVtYmVyO1xyXG5cdH1cclxufVxyXG5cclxuQm9hcmQuZmV0Y2ggPSBmdW5jdGlvbih0cmVsbG8sIG5hbWUsIG9wdGlvbnMsIG1zZywgc3VjY2VzcywgZmFpbHVyZSkge1xyXG5cdG1zZy5pbm5lclRleHQgPSAnRmV0Y2hpbmcgYm9hcmQgJyArIG5hbWU7XHJcblxyXG5cdC8vLyBLZWVwcyB0cmFjayBvZiBob3cgbWFueSBvcGVuIGFzeW5jIGNhbGxzIHRoZXJlIGFyZSByaWdodCBub3dcclxuXHRsZXQgYWN0aXZlID0gMDtcclxuXHJcblx0Ly8gV2lsbCBiZSBzZXQgdG8gcG9pbnQgdG8gYSBuZXcgQm9hcmQgb2JqZWN0XHJcblx0bGV0IGJvYXJkID0gbnVsbDtcclxuXHJcblx0YXN5bmNfc3RhcnQoKTtcclxuXHR0cmVsbG8uZ2V0KFwiL21lbWJlci9tZS9ib2FyZHM/ZmllbGRzPWFsbFwiLFxyXG5cdFx0KGRhdGEpID0+IHtcclxuXHRcdFx0Zm9yKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7ICBpKyspIHtcclxuXHRcdFx0XHR2YXIgYm9hcmREYXRhID0gZGF0YVtpXTtcclxuXHRcdFx0XHRpZihib2FyZERhdGEubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuXHRcdFx0XHRcdC8vIFdlIGhhdmUgZm91bmQgdGhlIGJvYXJkIChpZiBub3QgY2xvc2VkKVxyXG5cdFx0XHRcdFx0aWYoIWJvYXJkRGF0YS5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBib2FyZCBvYmplY3RcclxuXHRcdFx0XHRcdFx0Ym9hcmQgPSBuZXcgQm9hcmQoYm9hcmREYXRhLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBtZW1iZXJzaGlwXHJcblx0XHRcdFx0XHRcdGZldGNoX21lbWJlcnNoaXAoYm9hcmQpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRmV0Y2ggdGhlIGxpc3RzIGZvciB0aGUgYm9hcmRcclxuXHRcdFx0XHRcdFx0ZmV0Y2hfbGlzdHMoYm9hcmQpO1xyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihib2FyZCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdGZhaWx1cmUoXCJVbmFibGUgdG8gZmluZCBUcmVsbG8gYm9hcmQgXCIgKyBuYW1lKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0fSxcclxuXHRcdChkYXRhKSA9PiB7XHJcblx0XHRcdGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGJvYXJkc1wiKVxyXG5cdFx0fSxcclxuXHRcdG1zZ1xyXG5cdClcclxuXHJcblx0LyoqXHJcblx0ICogRmV0Y2ggdGhlIG1lbWJlcnNoaXAgb2YgdGhlIGJvYXJkLlxyXG5cdCAqIEBwYXJhbSBib2FyZCBCb2FyZCB0byBmZXRjaCBmb3JcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBmZXRjaF9tZW1iZXJzaGlwKGJvYXJkKSB7XHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZC9cIiArIGJvYXJkLmlkICsgXCIvbWVtYmVycz9maWVsZHM9YWxsXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24obWVtYmVyRGF0YSkge1xyXG5cdFx0XHRcdFx0dmFyIG1lbWJlciA9IG5ldyBNZW1iZXIoYm9hcmQsIG1lbWJlckRhdGEpO1xyXG5cdFx0XHRcdFx0Ym9hcmQuYWRkX21lbWJlcihtZW1iZXIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIG1lbWJlcnNoaXBcIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gZmV0Y2hfbGlzdHMoYm9hcmQpIHtcclxuXHRcdG1zZy5pbm5lclRleHQgPSBcIkZldGNoaW5nIGxpc3RzIGZvciBcIiArIG5hbWU7XHJcblxyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmRzL1wiICsgYm9hcmQuaWQgKyBcIi9saXN0cz9maWx0ZXI9b3BlblwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGxpc3REYXRhKSB7XHJcblx0XHRcdFx0XHRpZighbGlzdERhdGEuY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsaXN0ID0gbmV3IExpc3QoYm9hcmQsIGxpc3REYXRhKTtcclxuXHRcdFx0XHRcdFx0Ym9hcmQubGlzdHMucHVzaChsaXN0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0ZmV0Y2hfY2FyZHMoYm9hcmQpO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGxpc3RzXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmV0Y2ggYWxsIGNhcmRzIGFzIGEgc2luZ2xlIGJhdGNoIG9wZXJhdGlvbi5cclxuXHQgKiBAcGFyYW0gYm9hcmQgQm9hcmQgd2UgYXJlIGZldGNoaW5nIGZvclxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGZldGNoX2NhcmRzKGJvYXJkKSB7XHJcblx0XHRtc2cuaW5uZXJUZXh0ID0gXCJGZXRjaGluZyBjYXJkc1wiO1xyXG5cclxuXHRcdC8vIENvbGxlY3QgdXAgYWxsIFVSTHMgZm9yIGFsbCBvZiB0aGUgbGlzdHNcclxuXHRcdHZhciB1cmxzID0gJyc7XHJcblx0XHRmb3IodmFyIGk9MDsgaTxib2FyZC5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgbGlzdCA9IGJvYXJkLmxpc3RzW2ldO1xyXG5cdFx0XHRpZih1cmxzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR1cmxzICs9ICcsJztcclxuXHRcdFx0fVxyXG5cdFx0XHR1cmxzICs9IFwiL2xpc3RzL1wiICsgbGlzdC5pZCArIFwiL2NhcmRzL29wZW5cIjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBHZXQgZ2V0IGl0XHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9iYXRjaD91cmxzPVwiICsgdXJscyxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdC8vIExvb3Agb3ZlciB0aGUgcmVzdWx0IGZvciBlYWNoIHByb3ZpZGVkIFVSTFxyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPGRhdGEubGVuZ3RoICYmIGk8Ym9hcmQubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBib2FyZC5saXN0c1tpXTtcclxuXHRcdFx0XHRcdGNvbnN0IGNhcmRzRGF0YSA9IGRhdGFbaV1bMjAwXTtcclxuXHJcblx0XHRcdFx0XHRjYXJkc0RhdGEuZm9yRWFjaChmdW5jdGlvbihjYXJkRGF0YSkge1xyXG5cdFx0XHRcdFx0XHRpZighY2FyZERhdGEuY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgY2FyZCA9IG5ldyBDYXJkKGJvYXJkLCBsaXN0LCBjYXJkRGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0aWYob3B0aW9ucy5hZnRlciAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoY2FyZC5jcmVhdGVkLmdldFRpbWUoKSAvIDEwMDAgPiBvcHRpb25zLmFmdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3QuYWRkX2NhcmQoY2FyZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxpc3QuYWRkX2NhcmQoY2FyZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZldGNoX2FjdGlvbnMoYm9hcmQpO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmRzXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGZldGNoX2FjdGlvbnMoYm9hcmQpIHtcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkL1wiICsgYm9hcmQuaWQgKyBcIi9hY3Rpb25zP2ZpbHRlcj1jb21tZW50Q2FyZCx1cGRhdGVDYXJkOmlkTGlzdCZsaW1pdD0xMDAwXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcblx0XHRcdFx0XHRpZighYWN0aW9uLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRpZihhY3Rpb24udHlwZSA9PT0gXCJjb21tZW50Q2FyZFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcmQgPSBib2FyZC5maW5kX2NhcmQoYWN0aW9uLmRhdGEuY2FyZC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbW1lbnQgPSBuZXcgQ29tbWVudChib2FyZCwgY2FyZCwgYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcmQuY29tbWVudHMucHVzaChjb21tZW50KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoYWN0aW9uLnR5cGUgPT09ICd1cGRhdGVDYXJkJykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBuZXcgVXBkYXRlKGJvYXJkLCBjYXJkLCBhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FyZC51cGRhdGVzLnB1c2godXBkYXRlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGJvYXJkLmxpc3RzLmZvckVhY2goZnVuY3Rpb24obGlzdCkge1xyXG5cdFx0XHRcdFx0bGlzdC5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuXHRcdFx0XHRcdFx0Y2FyZC5zb3J0X3VwZGF0ZXMoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gY2FyZCBpbmZvcm1hdGlvblwiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBhc3luY19zdGFydCgpIHtcclxuXHRcdGFjdGl2ZSsrO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYXN5bmNfZW5kKCkge1xyXG5cdFx0YWN0aXZlLS07XHJcblx0XHRpZihhY3RpdmUgPT09IDApIHtcclxuXHRcdFx0c3VjY2Vzcyhib2FyZCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5Cb2FyZC5wcm90b3R5cGUuZmluZF9saXN0ID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBsaXN0ID0gdGhpcy5saXN0c1tpXTtcclxuXHRcdGlmKGxpc3QubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XHJcblx0XHRcdHJldHVybiBsaXN0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogU3RhbmRhcmQgVHJlbGxvIGJvYXJkIHZpZXdcclxuICovXHJcbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9hcmRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgZm9yKGxldCBsaXN0IG9mIGJvYXJkLmxpc3RzKSB7XHJcblx0XHRcdHByZXNlbnRMaXN0KHZpZXcsIGxpc3QpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJlc2VudExpc3QgPSAodmlldywgbGlzdCkgPT4ge1xyXG4gICAgXHRjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XHJcbiAgICBcdGhlYWRlci5pbm5lclRleHQgPSBsaXN0Lm5hbWU7XHJcbiAgICBcdHZpZXcuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBcdGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xyXG4gICAgXHRleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGV4cGFuZGVyKTtcclxuXHJcbiAgICBcdGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgXHRcdGlmKGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBcdFx0XHRVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcbiAgICBcdFx0XHRVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0ICAgIH0gZWxzZSB7XHJcbiAgICBcdFx0XHRleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuICAgIFx0bGV0IGNvdW50ID0gbGlzdC5jb3VudF9tZW1iZXJzKCk7XHJcblxyXG5cdCAgICBsZXQgbWVtYmVycyA9ICc8ZW0+Q2FyZHM6PC9lbT5bJyArIGxpc3QuY2FyZHMubGVuZ3RoICsgJ10gJztcclxuXHQgICAgZm9yKHZhciBjIGluIGNvdW50KSB7XHJcblx0XHQgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkoYykpIHtcclxuXHRcdFx0ICAgIG1lbWJlcnMgKz0gY291bnRbY10ubWVtYmVyLm5hbWUgKyAnOlsnICsgY291bnRbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29uc3QgY291bnRFbCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQoY291bnRFbCk7XHJcblx0ICAgIGNvdW50RWwuaW5uZXJIVE1MID0gbWVtYmVycztcclxuXHJcblx0ICAgIGZvcihsZXQgY2FyZCBvZiBsaXN0LmNhcmRzKSB7XHJcblx0ICAgIFx0cHJlc2VudENhcmQoZXhwYW5kZXIsIGNhcmQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRDYXJkID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBIZWFkaW5nXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShjYXJkLmNyZWF0ZWQpO1xyXG5cclxuXHRcdGxldCBjYXJkRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWNhcmQnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcclxuXHRcdGNhcmREaXYuaW5uZXJIVE1MID0gYDxoND48c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke2NhcmQubmFtZX08L2g0PmA7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBNZW1iZXJzXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBtZW1iZXJzID0gJyc7XHJcblx0ICAgIGZvcihsZXQgaWQgb2YgY2FyZC5tZW1iZXJzKSB7XHJcblx0XHQgICAgdmFyIG1lbWJlciA9IGNhcmQuYm9hcmQubWVtYmVyc1tpZF07XHJcblx0XHQgICAgaWYobWVtYmVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCAgICBtZW1iZXJzICs9ICcgLyAnO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBtZW1iZXJzICs9ICc8c3Bhbj4nICsgbWVtYmVyLm5hbWUgKyAnPC9zcGFuPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCBtZW1iZXJzUCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY2FyZC1tZW1iZXJzJylcclxuXHQgICAgY2FyZERpdi5hcHBlbmRDaGlsZChtZW1iZXJzUCk7XHJcblx0ICAgIG1lbWJlcnNQLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gRGVzY3JpcHRpb25cclxuXHQgICAgLy9cclxuXHQgICAgbGV0IGRlc2MgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZGVzY3JpcHRpb24nKTtcclxuXHQgICAgY2FyZERpdi5hcHBlbmRDaGlsZChkZXNjKTtcclxuXHQgICAgZGVzYy5pbm5lckhUTUwgPSBjYXJkLmRlc2M7XHJcblxyXG5cdCAgICBwcmVzZW50Q29tbWVudHMoY2FyZERpdiwgY2FyZCk7XHJcblx0ICAgIHByZXNlbnRVcGRhdGVzKGNhcmREaXYsIGNhcmQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmVzZW50Q2FyZCA9IHByZXNlbnRDYXJkO1xyXG5cclxuICAgIGxldCBwcmVzZW50Q29tbWVudHMgPSAoZGl2LCBjYXJkKSA9PiB7XHJcblx0ICAgIGlmKGNhcmQuY29tbWVudHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgY29tbWVudERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jb21tZW50cycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoY29tbWVudERpdik7XHJcblxyXG5cdFx0Zm9yKGxldCBjb21tZW50IG9mIGNhcmQuY29tbWVudHMpIHtcclxuXHRcdFx0bGV0IG1lbWJlciA9IGNhcmQuYm9hcmQubWVtYmVyc1tjb21tZW50Lm1lbWJlcl07XHJcblx0XHRcdGxldCBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcblx0XHRcdGxldCBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShjb21tZW50LmRhdGUpO1xyXG5cclxuXHRcdFx0bGV0IGg1ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG5cdFx0XHRjb21tZW50RGl2LmFwcGVuZENoaWxkKGg1KTtcclxuXHRcdFx0aDUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwidHJlbGxvLWRhdGVcIj4ke2RhdGV9PC9zcGFuPiR7bWVtYmVyTmFtZX1gO1xyXG5cclxuXHRcdFx0bGV0IHRleHREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRjb21tZW50RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG5cdFx0XHR0ZXh0RGl2LmlubmVySFRNTCA9IGNvbW1lbnQudGV4dDtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudFVwZGF0ZXMgPSAoZGl2LCBjYXJkKSA9PiB7XHJcblx0ICAgIGlmKGNhcmQudXBkYXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCB1cGRhdGVEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdXBkYXRlcycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQodXBkYXRlRGl2KTtcclxuXHJcblx0ICAgIGZvcihsZXQgdXBkYXRlIG9mIGNhcmQudXBkYXRlcykge1xyXG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbdXBkYXRlLm1lbWJlcl07XHJcblx0XHQgICAgdmFyIG1lbWJlck5hbWUgPSBtZW1iZXIgIT09IHVuZGVmaW5lZCA/IG1lbWJlci5uYW1lIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdCAgICB2YXIgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUodXBkYXRlLmRhdGUpO1xyXG5cdFx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ICAgIHVwZGF0ZURpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRcdCAgICBwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImRhdGVcIj4nICsgZGF0ZSArICc8L3NwYW4+ICcgKyBtZW1iZXJOYW1lICtcclxuXHRcdFx0ICAgICcgbW92ZWQgZnJvbSA8c3BhbiBjbGFzcz1cImxpc3RcIj4nICsgdXBkYXRlLmxpc3RCZWZvcmUgK1xyXG5cdFx0XHQgICAgJzwvc3Bhbj4gdG8gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QWZ0ZXIgKyAnPC9zcGFuPic7XHJcblx0ICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8vIEBjb25kXHJcbkJvYXJkVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XHJcbkJvYXJkVmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCb2FyZFZpZXc7XHJcbi8vLyBAZW5kY29uZFxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbGlzdCBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSBmdW5jdGlvbihib2FyZCwgbGlzdCwgZGF0YSkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IFV0aWwuc3RyaXBfdGFncyhkYXRhLm5hbWUpO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuZGVzYyA9ICc8cD4nICtcclxuICAgICAgICBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5kZXNjKS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXHJcbiAgICAgICAgJzwvcD4nO1xyXG4gICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUocGFyc2VJbnQoZGF0YS5pZC5zdWJzdHIoMCwgOCksIDE2KSAqIDEwMDApO1xyXG5cclxuICAgIHRoaXMubWVtYmVycyA9IFtdO1xyXG5cclxuICAgIGRhdGEuaWRNZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICB0aGF0Lm1lbWJlcnMucHVzaChpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICB0aGlzLnVwZGF0ZXMgPSBbXTtcclxufVxyXG5cclxuQ2FyZC5wcm90b3R5cGUuc29ydF91cGRhdGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnVwZGF0ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5kYXRlIDwgYi5kYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5kYXRlID09IGIuZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB0aGUgbGFzdCB0aW1lIHRoaXMgY2FyZCB3YXMgbW92ZWQuXHJcbiAqIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiBhIGNvbXBsZXRlZCBjYXJkIHdhc1xyXG4gKiBtb3ZlZCB0byBDb21wbGV0ZWQuXHJcbiAqL1xyXG5DYXJkLnByb3RvdHlwZS5maW5hbF90aW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZih0aGlzLnVwZGF0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZXNbdGhpcy51cGRhdGVzLmxlbmd0aC0xXS5kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudCBtZW1iZXJzIGZyb20gYSBjb2xsZWN0aW9uIG9mIGNhcmRzLlxyXG4gKiBAcGFyYW0gYm9hcmQgQm9hcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBsaXN0IGFycmF5IG9mIENhcmQgb2JqZWN0c1xyXG4gKiBAcmV0dXJucyBvYmplY3Qgd2l0aCBpZCBhcyBwcm9wZXJ0eSB0byBvYmplY3Qge2NudDogPywgbWVtYmVyOiA/fVxyXG4gKi9cclxuQ2FyZC5jb3VudF9tZW1iZXJzID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QpIHtcclxuICAgIHZhciBjb3VudCA9IHt9O1xyXG5cclxuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbWJlciA9IGJvYXJkLm1lbWJlcnNbaWRdO1xyXG4gICAgICAgICAgICBpZihjb3VudC5oYXNPd25Qcm9wZXJ0eShtZW1iZXIuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFttZW1iZXIuaWRdLmNudCsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXSA9IHtjbnQ6IDEsIG1lbWJlcjogbWVtYmVyfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGNvbW1lbnQgb24gYSBjYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XHJcblxyXG4vKipcclxuIEFycmF5XHJcbiAoXHJcbiBbaWRdID0+IDU3ZWVjMWNhMjI2ODQ2NDZiMTE5M2FiZFxyXG4gW2lkTWVtYmVyQ3JlYXRvcl0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXHJcbiBbZGF0YV0gPT4gQXJyYXlcclxuIChcclxuIFtsaXN0XSA9PiBBcnJheVxyXG4gKFxyXG4gW25hbWVdID0+IERlc2lnblxyXG4gW2lkXSA9PiA1N2U5MjBhMmIzNDUxODIwM2ZkNWYzMTlcclxuIClcclxuXHJcbiBbYm9hcmRdID0+IEFycmF5XHJcbiAoXHJcbiBbc2hvcnRMaW5rXSA9PiBpOWVYRTR5SlxyXG4gW25hbWVdID0+IFByb2plY3QgMSBUZWFtOiBBcmJvXHJcbiBbaWRdID0+IDU3ZTkyMDRhYzNmMzIzZjE3ODVkN2JlNFxyXG4gKVxyXG5cclxuIFtjYXJkXSA9PiBBcnJheVxyXG4gKFxyXG4gW3Nob3J0TGlua10gPT4gRmdndmQ0blhcclxuIFtpZFNob3J0XSA9PiAyMVxyXG4gW25hbWVdID0+IFZpc3VhbCBQYXJhZGlnbSBDbGFzcyBEZXNpZ25cclxuIFtpZF0gPT4gNTdlZWMwNzc2ZmQwMDVmN2I4MWM4MjM5XHJcbiApXHJcblxyXG4gW3RleHRdID0+IFZpc3VhbCBQYXJhZGlnbSBDbGFzcyBEZXNpZ25cclxuIClcclxuXHJcbiBbdHlwZV0gPT4gY29tbWVudENhcmRcclxuIFtkYXRlXSA9PiAyMDE2LTA5LTMwVDE5OjQ5OjMwLjk3NFpcclxuIFttZW1iZXJDcmVhdG9yXSA9PiBBcnJheVxyXG4gKFxyXG4gW2lkXSA9PiA1N2VjMWJkYWZlZWRjYmJjNzNkNjAwZDFcclxuIFthdmF0YXJIYXNoXSA9PlxyXG4gW2Z1bGxOYW1lXSA9PiBCcml0dGFueSBHYWxsaWVyc1xyXG4gW2luaXRpYWxzXSA9PiBCR1xyXG4gW3VzZXJuYW1lXSA9PiBicml0dGFueWdhbGxpZXJzMVxyXG4gKVxyXG4gKiBAcGFyYW0gYm9hcmRcclxuICogQHBhcmFtIGNhcmRcclxuICogQHBhcmFtIGRhdGFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29tbWVudCA9IGZ1bmN0aW9uKGJvYXJkLCBjYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmNhcmQgPSBjYXJkO1xyXG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcclxuICAgIHRoaXMudGV4dCA9ICc8cD4nICtcclxuICAgICAgICBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5kYXRhLnRleHQpLnJlcGxhY2UoL1xcbi9nbSwgJzxwPicpICtcclxuICAgICAgICAnPC9wPic7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XHJcbn0iLCIvKlxyXG4gKiBCYXNlIG9iamVjdCBmb3Igdmlld3Mgb2YgVHJlbGxvIGRhdGEuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFWaWV3ID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcblxyXG5EYXRhVmlldy5wcm90b3R5cGUucHJlc2VudCA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHt9XHJcblxyXG5cclxuIiwiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGlzY29ubmVjdGVkVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xyXG5cdC8vIEVuc3VyZSBlbXB0eVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcclxuXHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xyXG5cclxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnQ29ubmVjdCB0byBUcmVsbG8nO1xyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRyZWxsby5hdXRob3JpemUoKTtcclxuXHR9KVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gZnVuY3Rpb24oYm9hcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNhcmRzX2J5X2lkID0ge307XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmFkZF9jYXJkID0gZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgdGhpcy5jYXJkcy5wdXNoKGNhcmQpO1xyXG4gICAgdGhpcy5jYXJkc19ieV9pZFtjYXJkLmlkXSA9IGNhcmQ7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmZpbmRfY2FyZCA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBpZih0aGlzLmNhcmRzX2J5X2lkLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRzX2J5X2lkW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIENhcmQuY291bnRfbWVtYmVycyh0aGlzLmJvYXJkLCB0aGlzLmNhcmRzKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi9VdGlsXCI7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSAnLi9Cb2FyZFZpZXcnO1xyXG5pbXBvcnQge1NwcmludFZpZXd9IGZyb20gXCIuL1NwcmludHMvU3ByaW50Vmlld1wiO1xyXG5pbXBvcnQge1NwcmludFRhYmxlVmlld30gZnJvbSAnLi9TcHJpbnRzL1NwcmludFRhYmxlVmlldyc7XHJcbmltcG9ydCB7RGlzY29ubmVjdGVkVmlld30gZnJvbSBcIi4vRGlzY29ubmVjdGVkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5WaWV3ID0gZnVuY3Rpb24oZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKSB7XHJcblx0Ly8gRW5zdXJlIGVtcHR5XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRVdGlsLmFkZENsYXNzKGRpdiwgJ3RyZWxsby1zcHJpbnRlcicpO1xyXG5cclxuXHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0VXRpbC5hZGRDbGFzcyhwLCAnY2VudGVyJyk7XHJcblxyXG5cdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0YnV0dG9uLmlubmVyVGV4dCA9ICdEaXNjb25uZWN0JztcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0cmVsbG8uZGlzY29ubmVjdCgpO1xyXG5cclxuXHRcdG5ldyBEaXNjb25uZWN0ZWRWaWV3KGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucyk7XHJcblx0fSlcclxuXHJcblxyXG5cdGxldCBwU3RhdHVzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1zdGF0dXMnKTtcclxuXHRwU3RhdHVzLmlubmVyVGV4dCA9ICdDb25uZWN0aW5nIHRvIFRyZWxsby4uLic7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHBTdGF0dXMpO1xyXG5cclxuXHRsZXQgcE1zZyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tbXNnJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHBNc2cpO1xyXG5cclxuXHRCb2FyZC5mZXRjaCh0cmVsbG8sIG9wdGlvbnMuYm9hcmQsIG9wdGlvbnMsIHBNc2csIChib2FyZCkgPT4ge1xyXG5cdFx0Ly8gU3VjY2Vzc1xyXG5cdFx0cFN0YXR1cy5pbm5lclRleHQgPSAnVHJlbGxvIEJvYXJkOiAnICsgYm9hcmQubmFtZTtcclxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcclxuXHJcblx0XHRmb3IobGV0IHZpZXcgaW4gb3B0aW9ucy52aWV3cykge1xyXG5cdFx0XHRzd2l0Y2godmlldykge1xyXG5cdFx0XHRcdGNhc2UgJ2JvYXJkJzpcclxuXHRcdFx0XHRcdGxldCB2ID0gbmV3IEJvYXJkVmlldyhkaXYsIGJvYXJkKTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NwcmludCc6XHJcblx0XHRcdFx0XHR2ID0gbmV3IFNwcmludFZpZXcoZGl2LCBib2FyZCwgb3B0aW9ucy52aWV3cy5zcHJpbnQpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnc3ByaW50VGFibGUnOlxyXG5cdFx0XHRcdFx0diA9IG5ldyBTcHJpbnRUYWJsZVZpZXcoZGl2LCBib2FyZCwgb3B0aW9ucy52aWV3cy5zcHJpbnRUYWJsZSk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgKG1zZykgPT4ge1xyXG5cdFx0Ly8gRmFpbHVyZVxyXG5cdFx0cE1zZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBNc2cpO1xyXG5cdFx0cFN0YXR1cy5pbm5lclRleHQgPSBtc2c7XHJcblx0fSk7XHJcblxyXG5cdC8vdHJlbGxvLmZldGNoKCk7XHJcblxyXG59IiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbWVtYmVyIGluIGEgYm9hcmRcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgTWVtYmVyID0gZnVuY3Rpb24oYm9hcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5mdWxsTmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbn0iLCIvKlxyXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIHNwcmludCBpbiB0aGUgc3ByaW50cyBhbmFseXNpc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnQgPSBmdW5jdGlvbihzcHJpbnRzLCBzdGFydCwgZW5kKSB7XHJcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xyXG4gICAgdGhpcy5zdGFydF9tZWV0aW5nID0gc3RhcnQ7XHJcbiAgICB0aGlzLmVuZF9tZWV0aW5nID0gZW5kO1xyXG5cclxuICAgIHRoaXMuY29tcGxldGVkID0gW107XHJcbn1cclxuXHJcblNwcmludC5wcm90b3R5cGUuZW5kX3RpbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmVuZF9tZWV0aW5nLmNyZWF0ZWQuZ2V0VGltZSgpICtcclxuICAgICAgICAodGhpcy5zcHJpbnRzLnNwcmludF90aW1lX3Nsb3AgKiAxMDAwKSk7XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogVGVhbSBtZW1iZXIgc3RhdGlzdGljcyBmb3IgYSBzcHJpbnRcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50TWVtYmVyID0gZnVuY3Rpb24oc3ByaW50cywgbWVtYmVyKSB7XHJcbiAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcclxuICAgIHRoaXMuc3ByaW50cyA9IHNwcmludHM7XHJcblxyXG4gICAgdGhpcy5tZWV0aW5nc19jb3VudCA9IDA7XHJcbiAgICB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkID0gMDtcclxuICAgIFxyXG4gICAgdGhpcy5jb21wbGV0ZWRfY291bnQgPSAwO1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfdG90YWwgPSAwO1xyXG4gICAgXHJcbiAgICB0aGlzLnJldmlld3NfY291bnQgPSAwO1xyXG4gICAgdGhpcy5yZXZpZXdzX3RvdGFsID0gMDtcclxufVxyXG5cclxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5tZWV0aW5nc19wZXJjZW50YWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZih0aGlzLm1lZXRpbmdzX2NvdW50IDw9IHRoaXMuc3ByaW50cy5tZWV0aW5nc19zbG9wKSB7XHJcbiAgICAgICAgcmV0dXJuICcoaW5zdWZmaWNpZW50IG1lZXRpbmdzKSc7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBlciA9IHRoaXMubWVldGluZ3NfYXR0ZW5kZWQgLyAodGhpcy5tZWV0aW5nc19jb3VudCAtIHRoaXMuc3ByaW50cy5tZWV0aW5nc19zbG9wKTtcclxuICAgIGlmKHBlciA+IDEpIHtcclxuICAgICAgICBwZXIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwZXIudG9GaXhlZCgyKTtcclxufVxyXG5cclxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5jb21wbGV0ZWRfZmFjdG9yID0gZnVuY3Rpb24odGVhbVNpemUpIHtcclxuICAgIGlmKHRoaXMuY29tcGxldGVkX3RvdGFsID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZhY3RvciA9IHRoaXMuY29tcGxldGVkX2NvdW50IC9cclxuICAgICAgICAodGhpcy5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSAqIHRoaXMuc3ByaW50cy5jb21wbGV0ZWRfZmFjdG9yKTtcclxuICAgIGlmKGZhY3RvciA+IDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZmFjdG9yLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUucmV2aWV3aW5nX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XHJcbiAgICBpZih0aGlzLnJldmlld3NfdG90YWwgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmFjdG9yID0gdGhpcy5yZXZpZXdzX2NvdW50IC9cclxuICAgICAgICAodGhpcy5yZXZpZXdzX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMucmV2aWV3aW5nX2ZhY3Rvcik7XHJcbiAgICBpZihmYWN0b3IgPiAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFjdG9yLnRvRml4ZWQoMik7XHJcbn0iLCIvKlxyXG4gKiBUcmVsbG8gYm9hcmQgdmlldyB0aGF0IGRpc3BsYXlzIHNwcmludCByZXN1bHQgaW4gYSB0YWJsZS5cclxuICovXHJcbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4uL0RhdGFWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRzfSBmcm9tICcuL1NwcmludHMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuLi9DYXJkXCI7XHJcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tIFwiLi4vQm9hcmRWaWV3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50VGFibGVWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCwgb3B0aW9ucykge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgYWRkSGVhZGluZ3MgPSB0cnVlO1xyXG4gICAgaWYob3B0aW9ucy5hZGRIZWFkaW5ncyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYWRkSGVhZGluZ3MgPSBvcHRpb25zLmFkZEhlYWRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50LXRhYmxlJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgY29uc3QgdGFibGUgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgIFV0aWwuYWRkQ2xhc3ModGFibGUsIG9wdGlvbnMuY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENyZWF0ZSB0aGUgc3ByaW50IGFuYWx5c2lzXHJcblx0ICAgIC8vXHJcblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XHJcblx0ICAgIGNvbnN0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xyXG5cclxuXHQgICAgaWYoYWRkSGVhZGluZ3MpIHtcclxuXHRcdCAgICB0YWJsZUhlYWRpbmcodGFibGUsIGJvYXJkLCBzcHJpbnRzKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgdmFyIHJvd0hUTUwgPSAnJztcclxuXHQgICAgZnVuY3Rpb24gaXRlbShkYXRhKSB7XHJcblx0XHQgICAgcm93SFRNTCArPSAnPHRkPicgKyBkYXRhICsgJzwvdGQ+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZm9yKHZhciBpZCBpbiBzcHJpbnRzLm1lbWJlcnMpIHtcclxuXHRcdCAgICBpZihzcHJpbnRzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0XHRcdCAgICB2YXIgbWVtYmVyID0gc3ByaW50cy5tZW1iZXJzW2lkXTtcclxuXHRcdFx0ICAgIHZhciBpZCA9IG1lbWJlci5tZW1iZXIuaWQ7XHJcblxyXG5cdFx0XHQgICAgcm93SFRNTCA9ICcnO1xyXG5cclxuXHRcdFx0ICAgIC8vIE91ciBzdGF0aXN0aWNzXHJcblx0XHRcdCAgICBpdGVtKGJvYXJkLm5hbWUpO1xyXG5cdFx0XHQgICAgaXRlbSh0ZWFtU2l6ZSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZW1iZXIubmFtZSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5tZWV0aW5nc19wZXJjZW50YWdlKCkpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2NvdW50KTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF90b3RhbCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfZmFjdG9yKHRlYW1TaXplKSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX2NvdW50KTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld3NfdG90YWwpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xyXG5cdFx0XHQgICAgaXRlbShzcHJpbnRzLnNwcmludHMubGVuZ3RoKTtcclxuXHJcblx0XHRcdCAgICBzcHJpbnRzLnNwcmludHMuZm9yRWFjaChmdW5jdGlvbihzcHJpbnQpIHtcclxuXHRcdFx0XHQgICAgdmFyIGNudCA9IDA7XHJcblx0XHRcdFx0ICAgIHNwcmludC5jb21wbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcblx0XHRcdFx0XHQgICAgaWYoY2FyZC5tZW1iZXJzLmxlbmd0aCA9PSAxICYmIGNhcmQubWVtYmVyc1swXSA9PSBpZCkge1xyXG5cdFx0XHRcdFx0XHQgICAgY250Kys7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICB9KTtcclxuXHJcblx0XHRcdFx0ICAgIGl0ZW0oY250KTtcclxuXHRcdFx0XHQgICAgaXRlbShzcHJpbnQuY29tcGxldGVkLmxlbmd0aCk7XHJcblx0XHRcdCAgICB9KTtcclxuXHJcblx0XHRcdCAgICBpZighaXNOYU4oYWRkSGVhZGluZ3MpKSB7XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaT1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBpPGFkZEhlYWRpbmdzOyBpKyspIHtcclxuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xyXG5cdFx0XHRcdFx0ICAgIGl0ZW0oXCImbmJzcDtcIik7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdCAgICBjb25zdCB0ciA9IFV0aWwuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHRcdFx0ICAgIHRyLmlubmVySFRNTCA9IHJvd0hUTUw7XHJcblx0XHRcdCAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFibGVIZWFkaW5nID0gZnVuY3Rpb24odGFibGUsIGJvYXJkLCBzcHJpbnRzKSB7XHJcbiAgICAgICAgY29uc3QgdHIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRyMWNsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgVXRpbC5hZGRDbGFzcyh0ciwgb3B0aW9ucy50cjFjbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgdmFyIHJvd0hUTUwgPSAnJztcclxuXHQgICAgZnVuY3Rpb24gaXRlbShkYXRhKSB7XHJcblx0XHQgICAgcm93SFRNTCArPSAnPHRoPjxkaXY+JyArIGRhdGEgKyAnPC9kaXY+PC90aD4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpdGVtKFwiVGVhbVwiKTtcclxuXHQgICAgaXRlbShcIiNcIik7XHJcblx0ICAgIGl0ZW0oXCJNZW1iZXJcIik7XHJcblx0ICAgIGl0ZW0oXCJBdHRlbmRlZFwiKTtcclxuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xyXG5cdCAgICBpdGVtKFwiJVwiKTtcclxuXHQgICAgaXRlbShcIkNvbXBsZXRlZFwiKTtcclxuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xyXG5cdCAgICBpdGVtKFwiJVwiKTtcclxuXHQgICAgaXRlbShcIlJldmlld3NcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJTcHJpbnRzXCIpO1xyXG5cclxuXHQgICAgaWYoYWRkSGVhZGluZ3MgPT09IHRydWUpIHtcclxuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdCAgICBpdGVtKGkpO1xyXG5cdFx0XHQgICAgaXRlbShcIiNcIik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIGZvcih2YXIgaT0xOyBpPD1hZGRIZWFkaW5nczsgaSsrKSB7XHJcblx0XHRcdCAgICBpdGVtKGkpO1xyXG5cdFx0XHQgICAgaXRlbShcIiNcIik7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHRyLmlubmVySFRNTCA9IHJvd0hUTUw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaW50VGFibGVWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuXHJcblxyXG5TcHJpbnRUYWJsZVZpZXcucHJvdG90eXBlLnRhYmxlX2hlYWRpbmdzID0gZnVuY3Rpb24oYm9hcmQsIHNwcmludHMpIHtcclxuXHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUcmVsbG8gYm9hcmQgdmlldyB0aGF0IGRpc3BsYXlzIHNwcmludCByZXN1bHRzXHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludFZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7XHJcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIC8vIFRoaXMgdXNlcyBCb2FyZFZpZXcgdG8gZHJhdyB3aGF0IGl0IGtub3dzIGhvdyB0byBkcmF3XHJcbiAgICBjb25zdCBib2FyZF92aWV3ID0gbmV3IEJvYXJkVmlldyhkaXYsIGJvYXJkKTtcclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ3JlYXRlIHRoZSBzcHJpbnQgYW5hbHlzaXNcclxuXHQgICAgLy9cclxuXHQgICAgY29uc3Qgc3ByaW50cyA9IG5ldyBTcHJpbnRzKGJvYXJkKTtcclxuXHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1zcHJpbnRzJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBsZXQgaDIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblx0ICAgIGgyLmlubmVyVGV4dCA9ICdTcHJpbnRzIEFuYWx5c2lzJztcclxuXHQgICAgdmlldy5hcHBlbmRDaGlsZChoMik7XHJcblxyXG5cdFx0cHJlc2VudF9lcnJvcnModmlldywgc3ByaW50cyk7XHJcblx0XHRwcmVzZW50X3dhcm5pbmdzKHZpZXcsIHNwcmludHMpO1xyXG5cclxuXHQgICAgaWYoc3ByaW50cy5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBwcmVzZW50X3NwcmludHModmlldywgc3ByaW50cyk7XHJcblx0XHRwcmVzZW50X21lbWJlcnModmlldywgc3ByaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfZXJyb3JzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgZXJyb3JzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWVycm9ycycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXJyb3JzKTtcclxuXHJcblx0ICAgIGVycm9ycy5pbm5lckhUTUwgPSAnPGgzPkVycm9yczwvaDM+JztcclxuXHJcblx0ICAgIGZvcihsZXQgZXJyb3Igb2Ygc3ByaW50cy5lcnJvcnMpIHtcclxuXHQgICAgXHRsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBcdGVycm9ycy5hcHBlbmRDaGlsZChwKTtcclxuXHQgICAgXHRwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInRyZWxsby1jb2RlXCI+JyArIGVycm9yLmNvZGUgKyAnOjwvc3Bhbj4gJyArIGVycm9yLm1zZztcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3dhcm5pbmdzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcbiAgICBcdGlmKHNwcmludHMud2FybmluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBcdFx0cmV0dXJuO1xyXG4gICAgXHR9XHJcblxyXG5cdCAgICBsZXQgd2FybmluZ3MgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8td2FybmluZ3MnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHdhcm5pbmdzKTtcclxuXHJcblx0ICAgIHdhcm5pbmdzLmlubmVySFRNTCA9ICc8aDM+V2FybmluZ3M8L2gzPic7XHJcblxyXG5cdCAgICBmb3IobGV0IHdhcm5pbmcgb2Ygc3ByaW50cy53YXJuaW5ncykge1xyXG5cdFx0ICAgIGxldCBwID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHQgICAgd2FybmluZ3MuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyB3YXJuaW5nLmNvZGUgKyAnOjwvc3Bhbj4gJyArIHdhcm5pbmcubXNnO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfc3ByaW50cyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdmlldycpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgZm9yKHZhciBzPTE7IHM8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IHMrKykge1xyXG5cdCAgICAgICAgdmFyIHNwcmludCA9IHNwcmludHMuc3ByaW50c1tzLTFdO1xyXG5cdCAgICAgICAgcHJlc2VudF9zcHJpbnQodmlldywgc3ByaW50cywgcywgc3ByaW50KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3NwcmludCA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cywgbnVtLCBzcHJpbnQpIHtcclxuXHQgICAgY29uc3QgZm1EYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShzcHJpbnQuc3RhcnRfbWVldGluZy5jcmVhdGVkKTtcclxuXHQgICAgY29uc3QgdG9EYXRlID0gVXRpbC5mb3JtYXREYXRldGltZShzcHJpbnQuZW5kX21lZXRpbmcuY3JlYXRlZCk7XHJcblx0ICAgIGNvbnN0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gTWVtYmVyIGNvdW50cyBmb3IgY29tcGxldGVkXHJcblx0ICAgIC8vXHJcbiAgICAgICAgY29uc3QgY291bnRzID0gQ2FyZC5jb3VudF9tZW1iZXJzKHNwcmludHMuYm9hcmQsIHNwcmludC5jb21wbGV0ZWQpO1xyXG5cclxuXHQgICAgbGV0IHRvdGFsQ29tcGxldGVkID0gMDtcclxuXHQgICAgZm9yKGxldCBzcHJpbnQgb2Ygc3ByaW50cy5zcHJpbnRzKSB7XHJcblx0XHQgICAgdG90YWxDb21wbGV0ZWQgKz0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XHJcblx0ICAgIH1cclxuXHJcblxyXG5cdCAgICBsZXQgY29tcGxldGlvbkZhY3RvciA9IDAuMDA7XHJcblx0ICAgIGlmKHRvdGFsQ29tcGxldGVkID4gMCkge1xyXG5cdCAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IGNvbXBsZXRlZCAvICh0b3RhbENvbXBsZXRlZCAvIHNwcmludHMuc3ByaW50cy5sZW5ndGggKiAwLjgpO1xyXG5cdCAgICAgICAgaWYoY29tcGxldGlvbkZhY3RvciA+IDEpIHtcclxuXHQgICAgICAgICAgICBjb21wbGV0aW9uRmFjdG9yID0gMTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgY29tcGxldGlvbkZhY3RvciA9IGNvbXBsZXRpb25GYWN0b3IudG9GaXhlZCgyKTtcclxuXHJcblx0ICAgIGNvbnN0IGhlYWRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDMnLCAndHJlbGxvLXBsdXMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblx0ICAgIGhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGNvbXBsZXRlZCArXHJcbiAgICAgICAgICcgdGFza3MgJyArIGNvbXBsZXRpb25GYWN0b3IgKyAnIC8gJyArIGZtRGF0ZSArICcgdG8gJyArIHRvRGF0ZSArXHJcbiAgICAgICAgICc8L3NwYW4+U3ByaW50OiAnICsgbnVtO1xyXG5cclxuXHQgICAgY29uc3QgZXhwYW5kZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXhwYW5kJyk7XHJcblx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChleHBhbmRlcik7XHJcblxyXG5cdCAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuXHRcdFx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgc3ByaW50LnN0YXJ0X21lZXRpbmcpO1xyXG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5lbmRfbWVldGluZyk7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDb21wbGV0ZWRcclxuXHQgICAgLy9cclxuXHQgICAgbGV0IHBDb21wbGV0ZWQgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvbXBsZXRlZC1oZWFkZXInKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocENvbXBsZXRlZCk7XHJcblx0ICAgIHBDb21wbGV0ZWQuaW5uZXJUZXh0ID0gJ1NwcmludCBDb21wbGV0ZWQgVGFza3MnO1xyXG5cclxuXHQgICAgbGV0IHBNZW1iZXJzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb3VudCcpO1xyXG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChwTWVtYmVycyk7XHJcblxyXG5cdCAgICBsZXQgbWVtYmVycyA9ICc8ZW0+Q29tcGxldGVkOjwvZW0+WycgKyBzcHJpbnQuY29tcGxldGVkLmxlbmd0aCArICddICc7XHJcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudHMpIHtcclxuXHQgICAgICAgIGlmKGNvdW50cy5oYXNPd25Qcm9wZXJ0eShjKSkge1xyXG5cdCAgICAgICAgICAgIG1lbWJlcnMgKz0gY291bnRzW2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50c1tjXS5jbnQgKyAnXSZuYnNwOyZuYnNwOyc7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHBNZW1iZXJzLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBQcmVzZW50IGNvbXBsZXRlZCBjYXJkc1xyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IobGV0IGk9MDsgaTxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICBsZXQgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZFtpXTtcclxuXHQgICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIGNvbXBsZXRlZCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9tZW1iZXJzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcbiAgICBcdGxldCBtZW1iZXJzRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcnMnKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKG1lbWJlcnNEaXYpO1xyXG5cclxuXHQgICAgZm9yKHZhciBpZCBpbiBzcHJpbnRzLm1lbWJlcnMpIHtcclxuXHQgICAgICAgIGlmKHNwcmludHMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuXHQgICAgICAgICAgICB2YXIgbWVtYmVyID0gc3ByaW50cy5tZW1iZXJzW2lkXTtcclxuXHQgICAgICAgICAgICBwcmVzZW50X21lbWJlcihtZW1iZXJzRGl2LCBzcHJpbnRzLCBtZW1iZXIpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdFx0cHJlc2VudF9pbmZvKG1lbWJlcnNEaXYsIHNwcmludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X21lbWJlciA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cywgbWVtYmVyKSB7XHJcbiAgICBcdGxldCBtZW1iZXJEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tbWVtYmVyJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChtZW1iZXJEaXYpO1xyXG5cclxuXHQgICAgbGV0IG1lZXRpbmdzID0gc3ByaW50cy5tZWV0aW5nc19zbG9wID09PSAxID8gJyBtZWV0aW5nJyA6ICcgbWVldGluZ3MnO1xyXG5cdCAgICBsZXQgdGVhbVNpemUgPSBzcHJpbnRzLm51bV9tZW1iZXJzKCk7XHJcblxyXG5cdCAgICBtZW1iZXJEaXYuaW5uZXJIVE1MID0gJzxoND4nICsgbWVtYmVyLm1lbWJlci5uYW1lICsgJzwvaDQ+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPk1lZXRpbmdzIGF0dGVuZGVkOiAnICsgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkICsgJy8nICsgbWVtYmVyLm1lZXRpbmdzX2NvdW50ICtcclxuXHQgICAgICAgICcgcGVyY2VudGFnZTogJyArIG1lbWJlci5tZWV0aW5nc19wZXJjZW50YWdlKCkgK1xyXG5cdCAgICAgICAgJyA8ZW0+WW91IGFyZSBhbGxvd2VkIHRvIG1pc3MgJyArIHNwcmludHMubWVldGluZ3Nfc2xvcCArIG1lZXRpbmdzICsgICc8L2VtPicgK1xyXG5cdCAgICAgICAgJzwvcD4nICtcclxuXHJcblx0ICAgICAgICAnPHA+VGFza3MgY29tcGxldGVkOiAnICsgbWVtYmVyLmNvbXBsZXRlZF9jb3VudCArXHJcblx0ICAgICAgICAnLycgKyAobWVtYmVyLmNvbXBsZXRlZF90b3RhbCAvIHRlYW1TaXplKS50b0ZpeGVkKDIpICsgJyBmb3IgYSBjb21wbGV0aW9uIGZhY3RvciBvZjogJyArXHJcblx0ICAgICAgICBtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPicgK1xyXG5cclxuXHQgICAgICAgICc8cD5SZXZpZXdzIGNvbXBsZXRlZDogJyArIG1lbWJlci5yZXZpZXdzX2NvdW50ICsgJyBmb3IgYSByZXZpZXdpbmcgZmFjdG9yIG9mOiAnICtcclxuXHQgICAgICAgIG1lbWJlci5yZXZpZXdpbmdfZmFjdG9yKHRlYW1TaXplKSArICc8L3A+JztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9pbmZvID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcbiAgICBcdGNvbnN0IGluZm9EaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8taW5mbycpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XHJcblxyXG4gICAgXHRpbmZvRGl2LmlubmVySFRNTCA9ICc8cD5UaGUgY29tcGxldGlvbiBmYWN0b3IgZm9yIHRhc2tzIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgZXZlcnknICtcclxuXHRcdCAgICAnIHRlYW0gbWVtYmVyIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlICcgKyAoc3ByaW50cy5jb21wbGV0ZWRfZmFjdG9yICogMTAwKS50b0ZpeGVkKDApICsgJyUgb2YnICtcclxuXHRcdCAgICAnIGFuIGVxdWFsIGRpc3RyaWJ1dGlvbiBvZiB0YXNrcy4gVmFsdWVzIGxlc3MgdGhhbiAxLjAwIGluZGljYXRlIHRoYXQgeW91IHdpbGwgYmUnICtcclxuXHRcdCAgICAnIGxvc2luZyBwb2ludHMgb24gdGhlIGFzc2lnbm1lbnQuPC9wPicgK1xyXG5cdFx0ICAgICc8cD5UaGUgcmV2aWV3aW5nIGZhY3RvciBmb3IgdGFza3MgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCBldmVyeSB0ZWFtIG1lbWJlcicgK1xyXG5cdFx0ICAgICcgaXMgZXhwZWN0ZWQgdG8gcmV2aWV3ICcgKyAoc3ByaW50cy5yZXZpZXdpbmdfZmFjdG9yICogMTAwKS50b0ZpeGVkKDApICsgJyUgb2YgYW4gZXF1YWwnICtcclxuXHRcdCAgICAnIGRpc3RyaWJ1dGlvbiBvZiB0YXNrcy4gVGhpcyBmYWN0b3IgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCA5MCUgb2YgdGFza3Mgc2hvdWxkJyArXHJcblx0XHQgICAgJyBiZSBwcm9ncmFtbWluZyB0YXNrcy4gVmFsdWVzIGxlc3MgdGhhbiAxLjAwIGluZGljYXRlIHRoYXQgeW91IHdpbGwgYmUnICtcclxuXHRcdCAgICAnIGxvc2luZyBwb2ludHMgb24gdGhlIGFzc2lnbm1lbnQuPC9wPidcclxuICAgIH1cclxufVxyXG5cclxuLy8vIEBjb25kXHJcblNwcmludFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5TcHJpbnRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFZpZXc7XHJcbi8vLyBAZW5kY29uZFxyXG4iLCIvKlxyXG4gKiBTcHJpbnQgYW5hbHlzaXMgb2YgVHJlbGxvIGJvYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtTcHJpbnR9IGZyb20gXCIuL1NwcmludFwiO1xyXG5pbXBvcnQge1NwcmludE1lbWJlcn0gZnJvbSBcIi4vU3ByaW50TWVtYmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50cyA9IGZ1bmN0aW9uKGJvYXJkKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgLy8vIE51bWJlciBvZiBtaXNzZWQgbWVldGluZ3MgYWxsb3dcclxuICAgIHRoaXMubWVldGluZ3Nfc2xvcCA9IDE7XHJcblxyXG5cclxuICAgIC8vLyBOdW1iZXIgb2Ygc2Vjb25kcyBhZnRlciBtZWV0aW5nIHRpbWUgdG8gY29uc2lkZXIgY29tcGxldGVkXHJcbiAgICAvLy8gaW4gYSBjdXJyZW50IHNwcmludCBpbiBzZWNvbmRzLlxyXG4gICAgdGhpcy5zcHJpbnRfdGltZV9zbG9wID0gNSAqIDYwICogNjA7ICAgLy8gNSBob3Vyc1xyXG4gICAgXHJcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgaGlzIHNoYXJlIG9mIHRhc2tzXHJcbiAgICB0aGlzLmNvbXBsZXRlZF9mYWN0b3IgPSAwLjg7XHJcbiAgICBcclxuICAgIC8vLyBFYWNoIHVzZXJzIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlIDgwJSBvZiA5MCUgb2YgdGhlIHRhc2sgY291bnQgaW4gcmV2aWV3c1xyXG4gICAgdGhpcy5yZXZpZXdpbmdfZmFjdG9yID0gMC44ICogMC45O1xyXG5cclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuXHJcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgdGhpcy53YXJuaW5ncyA9IFtdO1xyXG5cclxuICAgIHRoaXMubWVtYmVycyA9IHt9O1xyXG4gICAgdGhpcy5zcHJpbnRzID0gW107XHJcblxyXG4gICAgdGhpcy5kZXNpZ24gPSBudWxsO1xyXG4gICAgdGhpcy5yaXNrcyA9IG51bGw7XHJcbiAgICB0aGlzLm1lZXRpbmdzID0gbnVsbDtcclxuICAgIHRoaXMudG9kbyA9IG51bGw7XHJcbiAgICB0aGlzLnNwcmludF9hY3RpdmUgPSBudWxsO1xyXG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gbnVsbDtcclxuICAgIHRoaXMuY29tcGxldGVkID0gbnVsbDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29weSBvdmVyIHRoZSBtZW1iZXJzXHJcbiAgICAvL1xyXG4gICAgZm9yKHZhciBpZCBpbiBib2FyZC5tZW1iZXJzKSB7XHJcbiAgICAgICAgdmFyIG1lbWJlciA9IGJvYXJkLm1lbWJlcnNbaWRdO1xyXG4gICAgICAgIGlmKG1lbWJlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiY3NlMzM1XCIpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdID0gbmV3IFNwcmludE1lbWJlcih0aGlzLCBtZW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBGaW5kIGFsbCBvZiB0aGUgcmVxdWlyZWQgbGlzdHNcclxuICAgIC8vXHJcbiAgICB0aGlzLmZpbmRfbGlzdHMoKTtcclxuXHJcbiAgICBpZih0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTkwMCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gT3JkZXIgdGVzdGluZ1xyXG4gICAgLy9cclxuICAgIHRoaXMub3JkZXJfdGVzdCgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBEZXRlcm1pbmUgYXR0ZW5kYW5jZVxyXG4gICAgLy9cclxuICAgIHRoaXMubWVldGluZ19hdHRlbmRhbmNlKCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvbnZlcnQgbWVldGluZ3MgaW50byBzcHJpbnRzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5jcmVhdGVfc3ByaW50cygpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBTb3J0IGNvbXBsZXRlZCBpbnRvIHNwcmludHNcclxuICAgIC8vXHJcbiAgICB0aGlzLnNvcnRfY29tcGxldGVkKCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvbXBsZXRlZCBzdGF0aXN0aWNzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfc3RhdGlzdGljcygpO1xyXG59XHJcblxyXG4vKipcclxuICogRW5zdXJlIGFsbCByZXF1aXJlZCBsaXN0cyBleGlzdC5cclxuICovXHJcblNwcmludHMucHJvdG90eXBlLmZpbmRfbGlzdHMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIEZpbmQgdGhlIFwiRGVzaWduXCIgbGlzdFxyXG4gICAgdGhpcy5kZXNpZ24gPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnRGVzaWduJyk7XHJcbiAgICBpZih0aGlzLmRlc2lnbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlJpc2tzXCIgbGlzdFxyXG4gICAgdGhpcy5yaXNrcyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdSaXNrcycpO1xyXG4gICAgaWYodGhpcy5yaXNrcyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDInKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIk1lZXRpbmdzXCIgbGlzdFxyXG4gICAgdGhpcy5tZWV0aW5ncyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdNZWV0aW5ncycpO1xyXG4gICAgaWYodGhpcy5tZWV0aW5ncyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlRvIERvXCIgbGlzdFxyXG4gICAgdGhpcy50b2RvID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RvIERvJyk7XHJcbiAgICBpZih0aGlzLnRvZG8gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUaGlzIFNwcmludCBBY3RpdmVcIiBsaXN0XHJcbiAgICB0aGlzLnNwcmludF9hY3RpdmUgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVGhpcyBTcHJpbnQgQWN0aXZlJyk7XHJcbiAgICBpZih0aGlzLnNwcmludF9hY3RpdmUgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA1Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUaGlzIFNwcmludCBDb21wbGV0ZWRcIiBsaXN0XHJcbiAgICB0aGlzLnNwcmludF9jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVGhpcyBTcHJpbnQgQ29tcGxldGVkJyk7XHJcbiAgICBpZih0aGlzLnNwcmludF9jb21wbGV0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJDb21wbGV0ZWRcIiBsaXN0XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdDb21wbGV0ZWQnKTtcclxuICAgIGlmKHRoaXMuY29tcGxldGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRW5zdXJlIGxpc3RzIGFyZSBpbiB0aGUgcmlnaHQgb3JkZXJcclxuICovXHJcblNwcmludHMucHJvdG90eXBlLm9yZGVyX3Rlc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5ib2FyZC5vcHRpb25zLmNhcmRzO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPG9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZC5saXN0c1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IG9yZGVyW2ldLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nKCd3MDAxJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3VudCBtZWV0aW5nIGF0dGVuZGFuY2UgZm9yIGEgdXNlclxyXG4gKi9cclxuU3ByaW50cy5wcm90b3R5cGUubWVldGluZ19hdHRlbmRhbmNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIG1lZXRpbmdzX2NvdW50ID0gdGhpcy5tZWV0aW5ncy5jYXJkcy5sZW5ndGg7XHJcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLm1lbWJlcnNbaWRdO1xyXG4gICAgICAgIG1lbWJlci5tZWV0aW5nc19jb3VudCA9IG1lZXRpbmdzX2NvdW50O1xyXG4gICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZWV0aW5ncy5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICBjYXJkLm1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhhdC5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuY3JlYXRlX3NwcmludHMgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBtZWV0aW5ncyA9IHRoaXMubWVldGluZ3MuY2FyZHMuc2xpY2UoKTtcclxuXHJcbiAgICBtZWV0aW5ncy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZihhLmNyZWF0ZWQgPCBiLmNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZihhLmNyZWF0ZWQgPT09IGIuY3JlYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTwobWVldGluZ3MubGVuZ3RoIC0gMSk7IGkrKykge1xyXG4gICAgICAgIHRoaXMuc3ByaW50cy5wdXNoKG5ldyBTcHJpbnQodGhpcywgbWVldGluZ3NbaV0sIG1lZXRpbmdzW2krMV0pKTtcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuc29ydF9jb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB2YXIgY29tcGxldGVkID0gdGhpcy5jb21wbGV0ZWQuY2FyZHMuc2xpY2UoKTtcclxuICAgIGNvbXBsZXRlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICB2YXIgYXQgPSBhLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICB2YXIgYnQgPSBiLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICBpZihhdCA9PT0gYnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIGlmKGF0IDwgYnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb21wbGV0ZWQuZm9yRWFjaChmdW5jdGlvbihjb21wbGV0ZWQpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGlnbm9yZSBcInJpc2tcIiBjYXJkc1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYoY29tcGxldGVkLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwicmlza1wiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBjb21wbGV0ZWQuZmluYWxfdGltZSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGF0LnNwcmludHMubGVuZ3RoOyAgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ByaW50ID0gdGhhdC5zcHJpbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0ZSA8PSBzcHJpbnQuZW5kX3RpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpID49IHRoYXQuc3ByaW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGkgPSB0aGF0LnNwcmludHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcclxuICAgICAgICAgICAgc3ByaW50LmNvbXBsZXRlZC5wdXNoKGNvbXBsZXRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5jb21wbGV0ZWRfc3RhdGlzdGljcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNvbXBsZXRlZF9jb3VudCA9IDA7XHJcbiAgICB2YXIgcmV2aWV3c190b3RhbCA9IDA7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zcHJpbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHNwcmludCA9IHRoaXMuc3ByaW50c1tpXTtcclxuICAgICAgICBjb21wbGV0ZWRfY291bnQgKz0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaj0wOyBqPHNwcmludC5jb21wbGV0ZWQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbal07XHJcblxyXG4gICAgICAgICAgICBpZihjb21wbGV0ZWQubWVtYmVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbXBsZXRlZC5tZW1iZXJzWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoXCJ3MDAyXCIsIFwiQ29tcGxldGVkIHRhc2sgPGVtPlwiICsgY29tcGxldGVkLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiPC9lbT4gaGFzIG5vIHRlYW0gbWVtYmVycyBhc3NpZ25lZC4gTm9ib2R5IHdpbGwgZ2V0IGNyZWRpdCBmb3IgdGhhdCB0YXNrLlwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwM1wiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcclxuICAgICAgICAgICAgICAgIFwiPC9lbT4gaGFzIG1vcmUgdGhhbiBvbmUgdGVhbSBtZW1iZXIgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFyZSB0aGV5IGFueSByZXZpZXdzP1xyXG4gICAgICAgICAgICBpZihjb21wbGV0ZWQuY29tbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3c190b3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gY29tcGxldGVkLmNvbW1lbnRzWzBdLm1lbWJlcjtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5yZXZpZXdzX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdLmNvbXBsZXRlZF90b3RhbCA9IGNvbXBsZXRlZF9jb3VudDtcclxuICAgICAgICB0aGlzLm1lbWJlcnNbaWRdLnJldmlld3NfdG90YWwgPSByZXZpZXdzX3RvdGFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX21lbWJlciA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtYmVyc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLm51bV9tZW1iZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY250ID0gMDtcclxuXHJcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIGlmKHRoaXMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbnQ7XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oY29kZSkge1xyXG4gICAgLy8gRG9lcyB0aGUgZXJyb3IgYWxyZWFkeSBleGlzdD9cclxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuZXJyb3JzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuZXJyb3JzW2ldO1xyXG4gICAgICAgIGlmKGVycm9yLmNvZGUgPT09IGNvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2goY29kZSkge1xyXG4gICAgICAgIGNhc2UgJ2UwMDEnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnRGVzaWduJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDAyJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1Jpc2tzJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDAzJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ01lZXRpbmdzJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA0JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RvIERvJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA1JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RoaXMgU3ByaW50IEFjdGl2ZSdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNic6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBDb21wbGV0ZWQnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDcnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnQ29tcGxldGVkJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlOTAwJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIkZhdGFsIGVycm9ycywgdW5hYmxlIHRvIHByb2NlZWQgd2l0aCBzcHJpbnRzIGFuYWx5c2lzXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLndhcm5pbmcgPSBmdW5jdGlvbihjb2RlLCBtc2cpIHtcclxuICAgIGlmKG1zZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IG1zZ30pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2goY29kZSkge1xyXG4gICAgICAgIGNhc2UgJ3cwMDEnOlxyXG4gICAgICAgICAgICB2YXIgbXNnID0gXCJZb3VyIGxpc3RzIGFyZSBub3QgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIFwiICtcclxuICAgICAgICAgICAgICAgIFwiVGhlIGV4YWN0IG9yZGVyIHNob3VsZCBiZTpcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBjYXJkIG9mIHRoaXMuYm9hcmQub3B0aW9ucy5jYXJkcykge1xyXG4gICAgICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJywnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1zZyArPSAnICcgKyBjYXJkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmdzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogbXNnfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7b3B0aW9uc30gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuaW1wb3J0IHtNYWluVmlld30gZnJvbSAnLi9NYWluVmlldyc7XHJcbmltcG9ydCB7VHJlbGxvQ29ubmVjdH0gZnJvbSAndHJlbGxvLWNvbm5lY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyID0gZnVuY3Rpb24odXNlck9wdGlvbnMpIHtcclxuXHQvLyBEZWZhdWx0IGFuZCBzdXBwbGllZCBvcHRpb25zXHJcblx0Y29uc3Qgb3B0cyA9IFV0aWwubWVyZ2Uob3B0aW9ucywgdXNlck9wdGlvbnMpO1xyXG5cclxuXHRjb25zdCB0cmVsbG8gPSBuZXcgVHJlbGxvQ29ubmVjdChvcHRzKTtcclxuXHJcblx0VXRpbC5yZWFkeSgoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHM7XHJcblx0XHRpZihvcHRzLnNlbC5ub2RlVHlwZSkge1xyXG5cdFx0XHRlbGVtZW50cyA9IFtvcHRzLnNlbF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHN3aXRjaCh0cmVsbG8uc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEOlxyXG5cdFx0XHRcdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdG5ldyBNYWluVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gdXBkYXRlIG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGUgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDsgXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcclxuICAgIHRoaXMubGlzdEJlZm9yZSA9IGRhdGEuZGF0YS5saXN0QmVmb3JlLm5hbWU7XHJcbiAgICB0aGlzLmxpc3RBZnRlciA9IGRhdGEuZGF0YS5saXN0QWZ0ZXIubmFtZTtcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgVXRpbCA9IGZ1bmN0aW9uKCkge31cclxuXHJcblV0aWwubWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbGwgSFRNTCB0YWdzIGZyb20gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHIgU3RyaW5nIHRvIHByb2Nlc3NcclxuICogQHJldHVybnMgc3RyaW5nIHdpdGhvdXQgdGFnc1xyXG4gKi9cclxuVXRpbC5zdHJpcF90YWdzID0gZnVuY3Rpb24oc3RyKSB7XHJcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC88KD86LnxcXG4pKj8+L2dtLCAnJyk7XHJcbn1cclxuXHJcblV0aWwuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGNscykge1xyXG5cdGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHRpZihjbHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0VXRpbC5hZGRDbGFzcyhlLCBjbHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGU7XHJcbn1cclxuXHJcblV0aWwuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lcykge1xyXG5cdGNvbnN0IG5hbWVzID0gY2xhc3NOYW1lcy5zcGxpdCgnICcpO1xyXG5cdGZvcihjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcblx0XHRpZiAoZWwuY2xhc3NMaXN0KVxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gJyAnICsgbmFtZTtcclxuXHR9XHJcbn1cclxuXHJcblV0aWwucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsLmNsYXNzTGlzdClcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRlbHNlXHJcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG59XHJcblxyXG5VdGlsLnJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcclxuXHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdCB0byBhIHN0cmluZy5cclxuICpcclxuICogVGhpcyB1c2VzIGZvcm1hdHRpbmcgdGhhdCBpcyBzdWJzZXQgb2YgdGhlIFBIUCBkYXRlKCkgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBkYXRlIERhdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBmb3JtYXQgT3B0aW9uYWwgZm9ybWF0IHN0cmluZyAoZGVmYXVsdCBpcyAnbi1kLVkgaDppYScpLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuVXRpbC5mb3JtYXREYXRldGltZSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xyXG5cclxuXHRmdW5jdGlvbiBwYWQoaSwgbikge1xyXG5cdFx0dmFyIHMgPSAnJyArIGk7XHJcblx0XHR3aGlsZShzLmxlbmd0aCA8IG4pIHtcclxuXHRcdFx0cyA9ICcwJyArIHM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Zm9ybWF0ID0gJ24tZC1ZIGg6aWEnO1xyXG5cdH1cclxuXHJcblx0dmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdHZhciBob3VyID0gaG91cnM7XHJcblx0dmFyIGFtID0gJ2EnO1xyXG5cdGlmKGhvdXJzID09IDApIHtcclxuXHRcdGhvdXIgPSAxMjtcclxuXHR9IGVsc2UgaWYoaG91cnMgPT0gMTIpIHtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH0gZWxzZSBpZihob3VycyA+IDEyKSB7XHJcblx0XHRob3VyID0gaG91cnMgLSAxMjtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH1cclxuXHJcblx0dmFyIHN0ciA9ICcnO1xyXG5cdGZvcih2YXIgaT0wOyBpPGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0c3dpdGNoKGZvcm1hdC5jaGFyQXQoaSkpIHtcclxuXHRcdFx0Y2FzZSAnbic6XHJcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdtJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZCc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldERhdGUoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdZJzpcclxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZyc6XHJcblx0XHRcdFx0c3RyICs9IGhvdXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdoJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGhvdXIsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaSc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldE1pbnV0ZXMoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdzJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2EnOlxyXG5cdFx0XHRcdHN0ciArPSBhbTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RyICs9IGZvcm1hdC5jaGFyQXQoaSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xyXG5cdHNlbDogJyN0cmVsbG8nLFxyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgYm9hcmQgd2UgYXJlIGZldGNoaW5nXHJcblx0Ym9hcmQ6ICcnLFxyXG5cclxuXHQvKiogT3B0aW9uYWw6IE9ubHkgY29uc2lkZXIgbWVldGluZ3MgYWZ0ZXIgdGhpcyB0aW1lIChVbml4IHRpbWUpICovXHJcblx0YWZ0ZXI6IG51bGwsXHJcblxyXG5cdHZpZXdzOiB7XHJcblx0XHQnYm9hcmQnOiB7fSxcclxuXHRcdCdzcHJpbnQnOiB7fVxyXG5cdH0sXHJcblxyXG5cdG5hbWU6ICdUcmVsbG9TcHJpbnRlcicsXHJcblxyXG5cdC8vIERlZmF1bHQgY2FyZHNcclxuXHRjYXJkczogWydEZXNpZ24nLCAnUmlza3MnLCAnTWVldGluZ3MnLFxyXG5cdFx0J1RvIERvJywgJ1RoaXMgU3ByaW50IEFjdGl2ZScsXHJcblx0XHQnVGhpcyBTcHJpbnQgQ29tcGxldGVkJywgJ0NvbXBsZXRlZCddXHJcbn07XHJcblxyXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vdHJlbGxvLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmE1M2FjZTZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcclxuaW1wb3J0IHtUcmVsbG9GYWN0b3J5fSBmcm9tICcuL2pzL1RyZWxsb0ZhY3RvcnknO1xyXG5cclxuVHJlbGxvRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuIiwiaW1wb3J0IHtUcmVsbG9TcHJpbnRlclZpZXd9IGZyb20gJy4vVHJlbGxvU3ByaW50ZXJWaWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9GYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtdHJlbGxvLXNwcmludGVyJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXcgVHJlbGxvU3ByaW50ZXJWaWV3KHNpdGUsIGVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSIsImltcG9ydCBUcmVsbG9TcHJpbnRlciBmcm9tIFwidHJlbGxvLXNwcmludGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvU3ByaW50ZXJWaWV3ID0gZnVuY3Rpb24oc2l0ZSwgZWxlbWVudCkge1xyXG5cdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQuaW5uZXJUZXh0KTtcclxuXHRlbGVtZW50LmlubmVyVGV4dCA9ICcnO1xyXG5cdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdHZhciBvcHRpb25zID0ge1xyXG5cdFx0c2VsOiBlbGVtZW50LFxyXG5cdFx0a2V5OiBqc29uLmtleSxcclxuXHRcdGJvYXJkOiBqc29uLnRlYW0sXHJcblx0XHR2aWV3czoganNvbi52aWV3cyxcclxuXHRcdGFmdGVyOiBqc29uLmFmdGVyXHJcblx0fTtcclxuXHJcblx0aWYoanNvbi5jYXJkcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRvcHRpb25zLmNhcmRzID0ganNvbi5jYXJkcztcclxuXHR9XHJcblxyXG5cdG5ldyBUcmVsbG9TcHJpbnRlcihvcHRpb25zKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
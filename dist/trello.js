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
/******/ 	var hotCurrentHash = "fe0ad6b389c35da61de7";
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./packages/trello-sprinter/trello.scss ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/plus.png */ "./packages/trello-sprinter/img/plus.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/minus.png */ "./packages/trello-sprinter/img/minus.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "div.trello-sprinter {\n  margin: 0; }\n  div.trello-sprinter h2 {\n    text-align: center;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white;\n    font-size: 1em;\n    margin: 0; }\n  div.trello-sprinter p.trello-status {\n    text-align: center;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white; }\n  div.trello-sprinter p.trello-msg {\n    text-align: center;\n    font-style: italic;\n    font-size: 0.9em;\n    padding: 0.25em 0;\n    background: #026AA7;\n    color: white; }\n  div.trello-sprinter p.center {\n    text-align: center; }\n  div.trello-sprinter div.trello-view {\n    background: white;\n    color: black; }\n    div.trello-sprinter div.trello-view h3 {\n      border-top: 2px solid black;\n      margin: 0;\n      padding: 0.25em 0 0.25em 20px; }\n      div.trello-sprinter div.trello-view h3 span.date {\n        font-weight: normal;\n        font-style: normal;\n        font-size: 0.7em;\n        float: right;\n        padding-top: 0.25em; }\n    div.trello-sprinter div.trello-view p.trello-completed-header {\n      text-align: center;\n      font-weight: bold;\n      background: black;\n      color: deepskyblue; }\n  div.trello-sprinter .trello-plus {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n  div.trello-sprinter .trello-minus {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); }\n  div.trello-sprinter .trello-plus, div.trello-sprinter .trello-minus {\n    background-repeat: no-repeat;\n    background-position: left center;\n    background-size: 16px 16px;\n    cursor: pointer; }\n  div.trello-sprinter div.trello-expand {\n    position: relative;\n    display: none;\n    overflow: auto;\n    background: #f0f0f0;\n    padding: 0.25em;\n    margin-bottom: 6pt;\n    border: 1pt solid gray;\n    word-wrap: normal; }\n  div.trello-sprinter div.trello-expand, div.trello-sprinter .trello-errors {\n    -moz-box-shadow: 6pt 6px 10pt #888;\n    -webkit-box-shadow: 6pt 6px 10pt #888;\n    box-shadow: 6pt 6px 10pt #888; }\n  div.trello-sprinter p.trello-count {\n    margin: 0 0 1em 0;\n    text-align: center;\n    font-size: 0.85em; }\n  div.trello-sprinter div.trello-card {\n    padding-left: 2em;\n    padding-right: 2em; }\n    div.trello-sprinter div.trello-card h4 {\n      background-color: #81d0fd;\n      margin: 0.5em 0 0 0;\n      padding: 0 0.25em; }\n    div.trello-sprinter div.trello-card h4 span.trello-date {\n      font-weight: normal;\n      font-size: 0.9em;\n      float: right;\n      padding-top: 0.25em; }\n    div.trello-sprinter div.trello-card .trello-card-members {\n      margin: 0 0.25em;\n      font-size: 0.85em;\n      font-style: italic; }\n  div.trello-sprinter div.trello-description {\n    margin: 0.5em 1em; }\n    div.trello-sprinter div.trello-description p {\n      margin: 0 0 0.25em 0;\n      font-size: 0.9em; }\n  div.trello-sprinter div.trello-comments {\n    margin: 0 2em; }\n    div.trello-sprinter div.trello-comments h5 {\n      margin: 0;\n      padding: 0 0.25em;\n      background-color: #ccc;\n      font-size: 0.8em;\n      font-weight: normal;\n      font-style: italic; }\n      div.trello-sprinter div.trello-comments h5 span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right; }\n    div.trello-sprinter div.trello-comments p {\n      margin: 0 0.25em;\n      font-size: 0.9em; }\n  div.trello-sprinter div.trello-updates {\n    margin: 1em 2em; }\n    div.trello-sprinter div.trello-updates p {\n      margin: 0;\n      padding: 0 0.25em;\n      font-size: 0.8em;\n      font-style: italic; }\n      div.trello-sprinter div.trello-updates p span.trello-date {\n        font-weight: normal;\n        font-style: normal;\n        float: right; }\n      div.trello-sprinter div.trello-updates p span.list {\n        font-style: normal;\n        font-weight: bold; }\n  div.trello-sprinter div.trello-sprints {\n    background: white;\n    color: black; }\n    div.trello-sprinter div.trello-sprints div.trello-errors {\n      background: #c41425;\n      color: white; }\n    div.trello-sprinter div.trello-sprints div.trello-warnings {\n      background: #ff80df;\n      color: black; }\n    div.trello-sprinter div.trello-sprints div.trello-members {\n      background: #f0f0f0;\n      color: black; }\n      div.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n        margin-bottom: 1em; }\n    div.trello-sprinter div.trello-sprints div.trello-errors, div.trello-sprinter div.trello-sprints div.trello-warnings, div.trello-sprinter div.trello-sprints div.trello-members {\n      position: relative;\n      overflow: auto;\n      padding: 0 1em 1em 1em;\n      margin: 1em 3em 6pt 3em;\n      border: 1pt solid gray;\n      word-wrap: normal;\n      font-size: 0.9em; }\n      div.trello-sprinter div.trello-sprints div.trello-errors p, div.trello-sprinter div.trello-sprints div.trello-warnings p, div.trello-sprinter div.trello-sprints div.trello-members p {\n        font-size: 1.1em;\n        margin: 0; }\n      div.trello-sprinter div.trello-sprints div.trello-errors span.trello-code, div.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code, div.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n        font-weight: bold; }\n      div.trello-sprinter div.trello-sprints div.trello-errors h3, div.trello-sprinter div.trello-sprints div.trello-errors h4, div.trello-sprinter div.trello-sprints div.trello-warnings h3, div.trello-sprinter div.trello-sprints div.trello-warnings h4, div.trello-sprinter div.trello-sprints div.trello-members h3, div.trello-sprinter div.trello-sprints div.trello-members h4 {\n        margin: 0;\n        padding: 0.25em 0;\n        text-align: center; }\n      div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info {\n        border-top: 1px solid black; }\n        div.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p, div.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {\n          margin: 1em 0; }\n  div.trello-sprinter div.trello-sprint-table {\n    overflow: auto; }\n", ""]);
// Exports
module.exports = exports;


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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./packages/trello-sprinter/img/plus.png":
/*!***********************************************!*\
  !*** ./packages/trello-sprinter/img/plus.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII=");

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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @file
 * Standard Trello board view
 */


var BoardView = function BoardView(div, board) {
  _DataView__WEBPACK_IMPORTED_MODULE_0__["DataView"].call(this);

  this.present = function () {
    var view = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-view');
    div.appendChild(view);

    var _iterator = _createForOfIteratorHelper(board.lists),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var list = _step.value;
        presentList(view, list);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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

    var _iterator2 = _createForOfIteratorHelper(list.cards),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var card = _step2.value;
        presentCard(expander, card);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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

    var _iterator3 = _createForOfIteratorHelper(card.members),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var id = _step3.value;
        var member = card.board.members[id];

        if (members.length > 0) {
          members += ' / ';
        }

        members += '<span>' + member.name + '</span>';
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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

    var _iterator4 = _createForOfIteratorHelper(card.comments),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };

  var presentUpdates = function presentUpdates(div, card) {
    if (card.updates.length === 0) {
      return;
    }

    var updateDiv = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].createElement('div', 'trello-updates');
    div.appendChild(updateDiv);

    var _iterator5 = _createForOfIteratorHelper(card.updates),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var update = _step5.value;
        var member = card.board.members[update.member];
        var memberName = member !== undefined ? member.name : "undefined";
        var date = _Util__WEBPACK_IMPORTED_MODULE_1__["Util"].formatDatetime(update.date);
        var p = document.createElement('p');
        updateDiv.appendChild(p);
        p.innerHTML = '<span class="date">' + date + '</span> ' + memberName + ' moved from <span class="list">' + update.listBefore + '</span> to <span class="list">' + update.listAfter + '</span>';
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    var _iterator = _createForOfIteratorHelper(sprints.errors),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var error = _step.value;
        var p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
        errors.appendChild(p);
        p.innerHTML = '<span class="trello-code">' + error.code + ':</span> ' + error.msg;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var present_warnings = function present_warnings(div, sprints) {
    if (sprints.warnings.length === 0) {
      return;
    }

    var warnings = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('div', 'trello-warnings');
    div.appendChild(warnings);
    warnings.innerHTML = '<h3>Warnings</h3>';

    var _iterator2 = _createForOfIteratorHelper(sprints.warnings),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var warning = _step2.value;
        var p = _Util__WEBPACK_IMPORTED_MODULE_2__["Util"].createElement('p');
        warnings.appendChild(p);
        p.innerHTML = '<span class="trello-code">' + warning.code + ':</span> ' + warning.msg;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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

    var _iterator3 = _createForOfIteratorHelper(sprints.sprints),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _sprint = _step3.value;
        totalCompleted += _sprint.completed.length;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

      var _iterator = _createForOfIteratorHelper(this.board.options.cards),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var card = _step.value;

          if (first) {
            first = false;
          } else {
            msg += ',';
          }

          msg += ' ' + card;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var _iterator = _createForOfIteratorHelper(names),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      if (el.classList) el.classList.add(name);else el.className += ' ' + name;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLWNvbm5lY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9wbHVzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9EaXNjb25uZWN0ZWRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludE1lbWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50VGFibGVWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVHJlbGxvU3ByaW50ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VdGlsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/Mzg3NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsInZlcnNpb24iLCJrZXkiLCJsb2NhbFByZWZpeCIsIm1lcmdlIiwib2JqMSIsIm9iajIiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIlRva2VuU3RvcmFnZSIsIlRyZWxsb0Nvbm5lY3QiLCJvcHRpb25zIiwidGhhdCIsInRva2VuIiwiaW5pdGlhbGl6ZSIsInN0YXRlIiwiRElTQ09OTkVDVEVEIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRJdGVtIiwiQ09OTkVDVEVEIiwiYXV0aG9yaXplIiwicmV0dXJuX3VybCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsImF1dGhFbmRwb2ludCIsIm5hbWUiLCJkaXNjb25uZWN0IiwicmVtb3ZlSXRlbSIsImdldCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwibXNnIiwidHJpZXMiLCJtYXh0cmllcyIsImJhY2tvZmYiLCJiYWNrb2ZmSW5jcmVhc2UiLCJ0cmVsbG9HZXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiYXBpRW5kcG9pbnQiLCJvbmxvYWQiLCJzdGF0dXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsInVuZGVmaW5lZCIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJzZXRUaW1lb3V0Iiwic2VuZCIsIlRyZWxsb1NwcmludGVyIiwiQm9hcmQiLCJpZCIsImxpc3RzIiwibWVtYmVycyIsImZpbmRfY2FyZCIsImkiLCJjYXJkIiwiYWRkX21lbWJlciIsIm1lbWJlciIsImZldGNoIiwidHJlbGxvIiwiYWN0aXZlIiwiYm9hcmQiLCJhc3luY19zdGFydCIsImJvYXJkRGF0YSIsInRvTG93ZXJDYXNlIiwiY2xvc2VkIiwiZmV0Y2hfbWVtYmVyc2hpcCIsImZldGNoX2xpc3RzIiwiYXN5bmNfZW5kIiwiZm9yRWFjaCIsIm1lbWJlckRhdGEiLCJNZW1iZXIiLCJsaXN0RGF0YSIsImxpc3QiLCJMaXN0IiwicHVzaCIsImZldGNoX2NhcmRzIiwidXJscyIsImNhcmRzRGF0YSIsImNhcmREYXRhIiwiQ2FyZCIsImFmdGVyIiwiY3JlYXRlZCIsImdldFRpbWUiLCJhZGRfY2FyZCIsImZldGNoX2FjdGlvbnMiLCJhY3Rpb24iLCJ0eXBlIiwiY29tbWVudCIsIkNvbW1lbnQiLCJjb21tZW50cyIsInVwZGF0ZSIsIlVwZGF0ZSIsInVwZGF0ZXMiLCJjYXJkcyIsInNvcnRfdXBkYXRlcyIsInByb3RvdHlwZSIsImZpbmRfbGlzdCIsIkJvYXJkVmlldyIsImRpdiIsIkRhdGFWaWV3IiwiY2FsbCIsInByZXNlbnQiLCJ2aWV3IiwiVXRpbCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInByZXNlbnRMaXN0IiwiaGVhZGVyIiwiZXhwYW5kZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY291bnQiLCJjb3VudF9tZW1iZXJzIiwiYyIsImNudCIsImNvdW50RWwiLCJpbm5lckhUTUwiLCJwcmVzZW50Q2FyZCIsImRhdGUiLCJmb3JtYXREYXRldGltZSIsImNhcmREaXYiLCJtZW1iZXJzUCIsImRlc2MiLCJwcmVzZW50Q29tbWVudHMiLCJwcmVzZW50VXBkYXRlcyIsImNvbW1lbnREaXYiLCJtZW1iZXJOYW1lIiwiaDUiLCJ0ZXh0RGl2IiwidGV4dCIsInVwZGF0ZURpdiIsInAiLCJkb2N1bWVudCIsImxpc3RCZWZvcmUiLCJsaXN0QWZ0ZXIiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInN0cmlwX3RhZ3MiLCJyZXBsYWNlIiwiRGF0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaWRNZW1iZXJzIiwic29ydCIsImEiLCJiIiwiZmluYWxfdGltZSIsImlkTWVtYmVyQ3JlYXRvciIsIkRpc2Nvbm5lY3RlZFZpZXciLCJlbGVtZW50IiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJjYXJkc19ieV9pZCIsIk1haW5WaWV3IiwicFN0YXR1cyIsInBNc2ciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aWV3cyIsInYiLCJTcHJpbnRWaWV3Iiwic3ByaW50IiwiU3ByaW50VGFibGVWaWV3Iiwic3ByaW50VGFibGUiLCJmdWxsTmFtZSIsIlNwcmludCIsInNwcmludHMiLCJzdGFydCIsImVuZCIsInN0YXJ0X21lZXRpbmciLCJlbmRfbWVldGluZyIsImNvbXBsZXRlZCIsImVuZF90aW1lIiwic3ByaW50X3RpbWVfc2xvcCIsIlNwcmludE1lbWJlciIsIm1lZXRpbmdzX2NvdW50IiwibWVldGluZ3NfYXR0ZW5kZWQiLCJjb21wbGV0ZWRfY291bnQiLCJjb21wbGV0ZWRfdG90YWwiLCJyZXZpZXdzX2NvdW50IiwicmV2aWV3c190b3RhbCIsIm1lZXRpbmdzX3BlcmNlbnRhZ2UiLCJtZWV0aW5nc19zbG9wIiwicGVyIiwiY29tcGxldGVkX2ZhY3RvciIsInRlYW1TaXplIiwiZmFjdG9yIiwicmV2aWV3aW5nX2ZhY3RvciIsImFkZEhlYWRpbmdzIiwidGFibGUiLCJTcHJpbnRzIiwibnVtX21lbWJlcnMiLCJ0YWJsZUhlYWRpbmciLCJyb3dIVE1MIiwiaXRlbSIsImlzTmFOIiwidHIiLCJ0cjFjbGFzcyIsInRhYmxlX2hlYWRpbmdzIiwiYm9hcmRfdmlldyIsImgyIiwicHJlc2VudF9lcnJvcnMiLCJwcmVzZW50X3dhcm5pbmdzIiwiZXJyb3JzIiwicHJlc2VudF9zcHJpbnRzIiwicHJlc2VudF9tZW1iZXJzIiwiZXJyb3IiLCJjb2RlIiwid2FybmluZ3MiLCJ3YXJuaW5nIiwicyIsInByZXNlbnRfc3ByaW50IiwibnVtIiwiZm1EYXRlIiwidG9EYXRlIiwiY291bnRzIiwidG90YWxDb21wbGV0ZWQiLCJjb21wbGV0aW9uRmFjdG9yIiwicENvbXBsZXRlZCIsInBNZW1iZXJzIiwibWVtYmVyc0RpdiIsInByZXNlbnRfbWVtYmVyIiwicHJlc2VudF9pbmZvIiwibWVtYmVyRGl2IiwibWVldGluZ3MiLCJpbmZvRGl2IiwiZGVzaWduIiwicmlza3MiLCJ0b2RvIiwic3ByaW50X2FjdGl2ZSIsInNwcmludF9jb21wbGV0ZWQiLCJmaW5kX2xpc3RzIiwib3JkZXJfdGVzdCIsIm1lZXRpbmdfYXR0ZW5kYW5jZSIsImNyZWF0ZV9zcHJpbnRzIiwic29ydF9jb21wbGV0ZWQiLCJjb21wbGV0ZWRfc3RhdGlzdGljcyIsIm9yZGVyIiwiZmluZF9tZW1iZXIiLCJzbGljZSIsImF0IiwiYnQiLCJpbmRleE9mIiwiaiIsImZpcnN0IiwidXNlck9wdGlvbnMiLCJvcHRzIiwicmVhZHkiLCJlbGVtZW50cyIsInNlbCIsIm5vZGVUeXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInN0ciIsImNscyIsImUiLCJlbCIsImNsYXNzTmFtZXMiLCJuYW1lcyIsInNwbGl0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiUmVnRXhwIiwiam9pbiIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiZm9ybWF0IiwicGFkIiwibiIsImhvdXJzIiwiZ2V0SG91cnMiLCJob3VyIiwiYW0iLCJjaGFyQXQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiVHJlbGxvRmFjdG9yeSIsIlNpdGUiLCJzaXRlIiwiVHJlbGxvU3ByaW50ZXJWaWV3IiwianNvbiIsInRlYW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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O1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGNBQWMsNEJBQTRCO1FBQzFDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTs7UUFFSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0EsZUFBZSw0QkFBNEI7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FBdUM7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FB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Q0FBQ3dILGdCQUFULENBQTBCLHdCQUExQixDQUFmOztBQUNBLFNBQUksSUFBSTNNLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ3dNLFFBQVEsQ0FBQ3ZQLE1BQXhCLEVBQWdDK0MsQ0FBQyxFQUFqQyxFQUFxQztBQUNwQyxVQUFJNE8sc0VBQUosQ0FBdUJELElBQXZCLEVBQTZCbkMsUUFBUSxDQUFDeE0sQ0FBRCxDQUFyQztBQUNBO0FBQ0QsR0FMRDtBQU1BLENBUkQsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNNE8sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFTRCxJQUFULEVBQWV0SSxPQUFmLEVBQXdCO0FBQ3pELE1BQU13SSxJQUFJLEdBQUc1UCxJQUFJLENBQUNDLEtBQUwsQ0FBV21ILE9BQU8sQ0FBQy9HLFNBQW5CLENBQWI7QUFDQStHLFNBQU8sQ0FBQy9HLFNBQVIsR0FBb0IsRUFBcEI7QUFDQStHLFNBQU8sQ0FBQzdDLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUVBLE1BQUlwSCxPQUFPLEdBQUc7QUFDYm9RLE9BQUcsRUFBRXBHLE9BRFE7QUFFYnpLLE9BQUcsRUFBRWlULElBQUksQ0FBQ2pULEdBRkc7QUFHYjJFLFNBQUssRUFBRXNPLElBQUksQ0FBQ0MsSUFIQztBQUliaEksU0FBSyxFQUFFK0gsSUFBSSxDQUFDL0gsS0FKQztBQUtibkYsU0FBSyxFQUFFa04sSUFBSSxDQUFDbE47QUFMQyxHQUFkOztBQVFBLE1BQUdrTixJQUFJLENBQUNyTSxLQUFMLEtBQWVuRCxTQUFsQixFQUE2QjtBQUM1QmhELFdBQU8sQ0FBQ21HLEtBQVIsR0FBZ0JxTSxJQUFJLENBQUNyTSxLQUFyQjtBQUNBOztBQUVELE1BQUk5Qyx1REFBSixDQUFtQnJELE9BQW5CO0FBQ0EsQ0FsQk0sQyIsImZpbGUiOiJ0cmVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUcmVsbG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHJlbGxvXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImZlMGFkNmIzODljMzVkYTYxZGU3XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlRyZWxsb1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC90cmVsbG8vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9pbWcvcGx1cy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9pbWcvbWludXMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnRyZWxsby1zcHJpbnRlciB7XFxuICBtYXJnaW46IDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tc3RhdHVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLW1zZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAuY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgaDMge1xcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMC4yNWVtIDAgMC4yNWVtIDIwcHg7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyBzcGFuLmRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC4yNWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IHAudHJlbGxvLWNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgICBjb2xvcjogZGVlcHNreWJsdWU7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLXBsdXMsIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1taW51cyB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZXhwYW5kIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHQ7XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICAgIHdvcmQtd3JhcDogbm9ybWFsOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZXhwYW5kLCBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tZXJyb3JzIHtcXG4gICAgLW1vei1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODtcXG4gICAgYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tY291bnQge1xcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuODVlbTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMmVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkMGZkO1xcbiAgICAgIG1hcmdpbjogMC41ZW0gMCAwIDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgaDQgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICBwYWRkaW5nLXRvcDogMC4yNWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIC50cmVsbG8tY2FyZC1tZW1iZXJzIHtcXG4gICAgICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAwLjVlbSAxZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHAge1xcbiAgICAgIG1hcmdpbjogMCAwIDAuMjVlbSAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyB7XFxuICAgIG1hcmdpbjogMCAyZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgcCB7XFxuICAgICAgbWFyZ2luOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuOWVtOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyB7XFxuICAgIG1hcmdpbjogMWVtIDJlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHNwYW4udHJlbGxvLWRhdGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi5saXN0IHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMge1xcbiAgICAgIGJhY2tncm91bmQ6ICNjNDE0MjU7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZjgwZGY7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyB7XFxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1tZW1iZXIge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xcbiAgICAgIG1hcmdpbjogMWVtIDNlbSA2cHQgM2VtO1xcbiAgICAgIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICAgICAgd29yZC13cmFwOiBub3JtYWw7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIHNwYW4udHJlbGxvLWNvZGUsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mgc3Bhbi50cmVsbG8tY29kZSwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHNwYW4udHJlbGxvLWNvZGUge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDQsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgaDMsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgaDQsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGg0IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGRpdi50cmVsbG8taW5mbywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8taW5mbyB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7IH1cXG4gICAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGRpdi50cmVsbG8taW5mbyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHAge1xcbiAgICAgICAgICBtYXJnaW46IDFlbSAwOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50LXRhYmxlIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNZXJnZSB0d28gSmF2YXNjcmlwdCBvYmplY3RzIGludG8gYSBzaW5nbGUgcmVzdWx0LlxyXG4gKiBAcGFyYW0gb2JqMSBGaXJzdCBvYmplY3RcclxuICogQHBhcmFtIG9iajIgU2Vjb25kIG9iamVjdC4gU2Vjb25kIG9iamVjdCB2YWx1ZXMgdGFrZSBwcmVjZWRlbmNlLlxyXG4gKi9cclxuY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLy8gTG9jYWwgc3RvcmFnZSBhZGRyZXNzIGZvciBzdG9yaW5nIHRoZSB0b2tlbiB3aGlsZSBjb25uZWN0ZWRcclxuY29uc3QgVG9rZW5TdG9yYWdlID0gJ19uOXM1UnlnOHdhJztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9Db25uZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0b3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuXHJcblx0bGV0IHRva2VuID0gJyc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFRpbGwgd2Uga25vdyBvdGhlcndpc2VcclxuXHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gU2VlIGlmIHRoZXJlIGlzIGEgdG9rZW4gaW4gdGhlIGN1cnJlbnQgVVJMXHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0Y29uc3QgcmUgPSAvI3Rva2VuPSguKikkLztcclxuXHRcdGNvbnN0IG1hdGNoZXMgPSBocmVmLm1hdGNoKHJlKTtcclxuXHRcdGlmKG1hdGNoZXMgIT09IG51bGwgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHRva2VuID0gbWF0Y2hlc1sxXTtcclxuXHJcblx0XHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIElzIHRoZXJlIGEgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZT9cclxuXHRcdC8vXHJcblx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0dG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlLCB0b2tlbik7XHJcblx0XHRpZih0b2tlbiAhPT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoYXQuc3RhdGUgPSBUcmVsbG9Db25uZWN0LkNPTk5FQ1RFRDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEF1dGhvcml6ZSB3aXRoIFRyZWxsb1xyXG5cdCAqXHJcblx0ICogUmVkaXJlY3RzIHRvIHRoZSBUcmVsbG8gYXV0aG9yaXphdGlvbiBlbmRwb2ludCwgd2hpY2ggcmVkaXJlY3RzIGJhY2tcclxuXHQgKiB0byB0aGlzIHBhZ2UgYWZ0ZXIgYXV0aG9yaXphdGlvbiB3aXRoIHRoZSB0b2tlbiBpbiB0aGUgVVJMLlxyXG5cdCAqL1xyXG5cdHRoaXMuYXV0aG9yaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCByZXR1cm5fdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdGNvbnN0IHVybCA9IGAke29wdGlvbnMuYXV0aEVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vYXV0aG9yaXplP2V4cGlyYXRpb249bmV2ZXImbmFtZT0ke29wdGlvbnMubmFtZX0mYCArXHJcblx0XHRcdGBjYWxsYmFja19tZXRob2Q9ZnJhZ21lbnQmc2NvcGU9cmVhZCZyZXNwb25zZV90eXBlPXRva2VuJmtleT0ke29wdGlvbnMua2V5fSZyZXR1cm5fdXJsPSR7cmV0dXJuX3VybH1gO1xyXG5cdFx0d2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRGlzY29ubmVjdCBmcm9tIFRyZWxsby5cclxuXHQgKlxyXG5cdCAqIFRoaXMgZm9yZ2V0cyB0aGUgdG9rZW4gaW4gbG9jYWwgc3RvcmFnZS5cclxuXHQgKlxyXG5cdCAqL1xyXG5cdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UpO1xyXG5cdFx0dG9rZW4gPSAnJztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm0gYSBHRVQgcXVlcnkgZm9yIFRyZWxsb1xyXG5cdCAqIEBwYXJhbSB1cmwgVGhlIGJvYXJkIFVSTCBhZnRlciB0aGUgdmVyc2lvbiwgbGlrZSBcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIlxyXG5cdCAqIEBwYXJhbSBzdWNjZXNzIEZ1bmN0aW9uIGNhbGxlZCBvbiBzdWNjZXNzIHdpdGggZGF0YSBhcmd1bWVudFxyXG5cdCAqIEBwYXJhbSBmYWlsdXJlIEZ1bmN0aW9uIGNhbGxlZCBvbiBmYWlsdXJlIHdpdGggZGF0YSBhcmd1bWVudFxyXG5cdCAqIEBwYXJhbSBtc2cgT3B0aW9uYWwgZWxlbWVudCB0byBwdXQgcmF0ZSBsaW1pdGluZyBtZXNzYWdlIGludG9cclxuXHQgKi9cclxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKHVybCwgc3VjY2VzcywgZmFpbHVyZSwgbXNnKSB7XHJcblxyXG5cdFx0bGV0IHRyaWVzID0gMTtcclxuXHJcblx0XHRsZXQgbWF4dHJpZXMgPSA1OyAgLy8gTWF4aW11bSBudW1iZXIgb2YgdHJpZXNcclxuXHRcdGxldCBiYWNrb2ZmID0gMTA7ICAgLy8gc2Vjb25kc1xyXG5cdFx0bGV0IGJhY2tvZmZJbmNyZWFzZSA9IDEuMjU7IC8vIEFtb3VudCB0byBpbmNyZWFzZSBiYWNrb2ZmIGFmdGVyIGVhY2ggdHJ5XHJcblxyXG5cdFx0ZnVuY3Rpb24gdHJlbGxvR2V0KCkge1xyXG5cdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0XHRyZXF1ZXN0Lm9wZW4oJ0dFVCcsIGAke29wdGlvbnMuYXBpRW5kcG9pbnR9LyR7b3B0aW9ucy52ZXJzaW9ufS8ke3VybH0ma2V5PSR7b3B0aW9ucy5rZXl9JnRva2VuPSR7dG9rZW59YCwgdHJ1ZSk7XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuXHRcdFx0XHRcdC8vIFN1Y2Nlc3MhXHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdFx0XHRzdWNjZXNzKGRhdGEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3JcclxuXHRcdFx0XHRcdGZhaWx1cmUoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKCtyZXF1ZXN0LnN0YXR1cyA9PT0gNDI5ICYmIHRyaWVzIDwgbWF4dHJpZXMpIHtcclxuXHRcdFx0XHRcdHRyaWVzKys7XHJcblx0XHRcdFx0XHRpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRtc2cuaW5uZXJUZXh0ID0gXCJSYXRlIGxpbWl0ZWQsIGF0dGVtcHQgXCIgKyB0cmllcyArIFwiIGFmdGVyIFwiICtcclxuXHRcdFx0XHRcdFx0XHRiYWNrb2ZmLnRvRml4ZWQoMCkgKyBcIiBzZWNvbmRzXCI7XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dHJlbGxvR2V0KCk7XHJcblx0XHRcdFx0XHRcdH0sIGJhY2tvZmYgKiAxMDAwKTtcclxuXHRcdFx0XHRcdFx0YmFja29mZiAqPSBiYWNrb2ZmSW5jcmVhc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZhaWx1cmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXF1ZXN0LnNlbmQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0cmVsbG9HZXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQgPSAnRCc7XHJcblRyZWxsb0Nvbm5lY3QuQ09OTkVDVEVEID0gJ0MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvQ29ubmVjdDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVoxSlJFRlVlTnFra3IxT0FrRVF4K2Z1aGtQZ2tLOGdoWVpZR1B6bzdHakZ4TUplUTdUUXpsamhHeGhzOUEyTWhZMFYybXVNaWZvQUpwYVFHQitBdzBOUGp1T0ErM0ozNGVnOE1FN3lUMlkzKy92djdPeHdydXZDZndMM1QrckE4M3dNRWN0a1hTVEtqR0Zrb29wbFdjZU80M3lqNDloQVZGN05CVXJGaldsSXh3VmYra08xTTVXSFZ1bWxhdExsRWEvck9oQVZ0OWNqa0pCY0lNNitvbWUyQ21IR1VCWTFUYU5PbVZTTVp3Y21pVlJNQU1LeHAySzczV0tiNUQwVEc5REdleHpxZW9jbHRtMHplV0dhSmkwVE9oMkQ1Ylk5TUJjRUJFbVN3T093MisyT0txREs3eno1M241emxvTmVyd2NlaDVibGpzb3lqQjVrc3dYL2Y4Y0crWFlCUEE0NURsbGlHSDFTVmgrdVQ4TytCb295UlF3NDhEZ3lQeUdXOVBzT0JBSWl0Rm9kWHdOUkRBN0JBWWVpR0IwMlI2VExpVWZZNHpBWVpJbXNxSHdtblJBbmd1V21DWVNUMmNXNjhncXpTN3R6WHhya0YrZERFSTBnYTlKdlVsU0FxOXMyMUp2OFplMXg3NTRqSnNsSVBMZXdzblp4S0NXWE53RzRtVEZqMUdoLzF1NnF6d2ZudXZyMlRnMW9ONkovYXNBZzZHUnBQd0lNQUZjQXphd1Z6UVI0QUFBQUFFbEZUa1N1UW1DQ1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQWR0SlJFRlVlTnFrVXpzdkJGRVVQak56WmhZN2F6M0NGaDRSa2ZXcU5LSkZvbERveUlhQ1RsUjBTcUdoRXAwb05LcWxFZ2tSQ1g2QVJJZEVaTFdXd2RyWnNZOTV1ZmV1TzNac3Nnb24rWExQNnp0ejdqbDNCTmQxNFQrQ2MydFBJSXBpR0JGWGlSMGppUHpCU1JMRUxjdGFjUnpuQXgzSEJvTFZnYWk4R0J1cmhhWTZxU0w3SldWSDRtZnB4YXRiazVwTG9tRVlRQkNiR2cxQ3Zlb0NxVndSTkdkeXBJWnhLQmQxWGFlVklvMWhrU1dVeXNUU0RUdVB0dnA5L3Nhd0JJVEhyb3FaVEpvNXlYM0tDdkRZYno4ZFBJK2hZWHd5eGJadEJpNm1hUUtQSlJLUEpGWXNJa2tJcXFwNk1jemxjbDRIRkVQVEYyV0RtMXkrOS9TRGpTams4M25nUExRczEyc3JtODFEZS91SWw1eEluTE96czNQMForLzRUTll1QWVlaElDQlRzdGtDYWFzQSsrczFYdkpnckJqYlgvOVpyYVpWa1FJQ2NCNTVQOVZNS1JRY2tHVUYwdW5Qa3E4Vlk2VStSUW40WXFnb29lL2hLTlQwM2IydGJaQ2RzaXlVellYek1CQmdTbEpMaVpHbWVzV1hkTGdwZjYvVDlML2xWeE1JTDhrK2JHalgwTkl6MC9xdXcxQjNSeldFZ3NpR1ZCd1VNSENiUWtzQjdCMW40T2xWM0wwN256Mmx2VFVFNjZKZGZjTTdDMnBEN3ppQTBGejVYM0tmTTI5M0o3ZVg4OXRHNnY2QkZxRFRDSlVONEcraEwwdi9FbUFBb05YbEc5N3ZuSG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0ICcuL3RyZWxsby5zY3NzJztcclxuXHJcbmltcG9ydCB7VHJlbGxvU3ByaW50ZXJ9IGZyb20gJy4vc3JjL1RyZWxsb1NwcmludGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb1NwcmludGVyO1xyXG5leHBvcnQge1RyZWxsb1NwcmludGVyfTtcclxuIiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gQm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IHtVcGRhdGV9IGZyb20gJy4vVXBkYXRlJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xyXG5cclxuXHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHR0aGlzLmxpc3RzID0gW107XHJcblx0dGhpcy5tZW1iZXJzID0ge307XHJcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcblx0dGhpcy5maW5kX2NhcmQgID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNhcmQgPSB0aGlzLmxpc3RzW2ldLmZpbmRfY2FyZChpZCk7XHJcblx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2FyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hZGRfbWVtYmVyID0gZnVuY3Rpb24obWVtYmVyKSB7XHJcblx0XHR0aGlzLm1lbWJlcnNbbWVtYmVyLmlkXSA9IG1lbWJlcjtcclxuXHR9XHJcbn1cclxuXHJcbkJvYXJkLmZldGNoID0gZnVuY3Rpb24odHJlbGxvLCBuYW1lLCBvcHRpb25zLCBtc2csIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcclxuXHRtc2cuaW5uZXJUZXh0ID0gJ0ZldGNoaW5nIGJvYXJkICcgKyBuYW1lO1xyXG5cclxuXHQvLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgb3BlbiBhc3luYyBjYWxscyB0aGVyZSBhcmUgcmlnaHQgbm93XHJcblx0bGV0IGFjdGl2ZSA9IDA7XHJcblxyXG5cdC8vIFdpbGwgYmUgc2V0IHRvIHBvaW50IHRvIGEgbmV3IEJvYXJkIG9iamVjdFxyXG5cdGxldCBib2FyZCA9IG51bGw7XHJcblxyXG5cdGFzeW5jX3N0YXJ0KCk7XHJcblx0dHJlbGxvLmdldChcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIixcclxuXHRcdChkYXRhKSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyAgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGJvYXJkRGF0YSA9IGRhdGFbaV07XHJcblx0XHRcdFx0aWYoYm9hcmREYXRhLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHQvLyBXZSBoYXZlIGZvdW5kIHRoZSBib2FyZCAoaWYgbm90IGNsb3NlZClcclxuXHRcdFx0XHRcdGlmKCFib2FyZERhdGEuY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgYm9hcmQgb2JqZWN0XHJcblx0XHRcdFx0XHRcdGJvYXJkID0gbmV3IEJvYXJkKGJvYXJkRGF0YSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbWVtYmVyc2hpcFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9tZW1iZXJzaGlwKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBsaXN0cyBmb3IgdGhlIGJvYXJkXHJcblx0XHRcdFx0XHRcdGZldGNoX2xpc3RzKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoYm9hcmQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZpbmQgVHJlbGxvIGJvYXJkIFwiICsgbmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdH0sXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBib2FyZHNcIilcclxuXHRcdH0sXHJcblx0XHRtc2dcclxuXHQpXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIHRoZSBtZW1iZXJzaGlwIG9mIHRoZSBib2FyZC5cclxuXHQgKiBAcGFyYW0gYm9hcmQgQm9hcmQgdG8gZmV0Y2ggZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfbWVtYmVyc2hpcChib2FyZCkge1xyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL21lbWJlcnM/ZmllbGRzPWFsbFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG1lbWJlckRhdGEpIHtcclxuXHRcdFx0XHRcdHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyKGJvYXJkLCBtZW1iZXJEYXRhKTtcclxuXHRcdFx0XHRcdGJvYXJkLmFkZF9tZW1iZXIobWVtYmVyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBtZW1iZXJzaGlwXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGZldGNoX2xpc3RzKGJvYXJkKSB7XHJcblx0XHRtc2cuaW5uZXJUZXh0ID0gXCJGZXRjaGluZyBsaXN0cyBmb3IgXCIgKyBuYW1lO1xyXG5cclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkcy9cIiArIGJvYXJkLmlkICsgXCIvbGlzdHM/ZmlsdGVyPW9wZW5cIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihsaXN0RGF0YSkge1xyXG5cdFx0XHRcdFx0aWYoIWxpc3REYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGlzdCA9IG5ldyBMaXN0KGJvYXJkLCBsaXN0RGF0YSk7XHJcblx0XHRcdFx0XHRcdGJvYXJkLmxpc3RzLnB1c2gobGlzdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZldGNoX2NhcmRzKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBsaXN0c1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIGFsbCBjYXJkcyBhcyBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHdlIGFyZSBmZXRjaGluZyBmb3JcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBmZXRjaF9jYXJkcyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgY2FyZHNcIjtcclxuXHJcblx0XHQvLyBDb2xsZWN0IHVwIGFsbCBVUkxzIGZvciBhbGwgb2YgdGhlIGxpc3RzXHJcblx0XHR2YXIgdXJscyA9ICcnO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8Ym9hcmQubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGxpc3QgPSBib2FyZC5saXN0c1tpXTtcclxuXHRcdFx0aWYodXJscy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dXJscyArPSAnLCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dXJscyArPSBcIi9saXN0cy9cIiArIGxpc3QuaWQgKyBcIi9jYXJkcy9vcGVuXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gR2V0IGdldCBpdFxyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYmF0Y2g/dXJscz1cIiArIHVybHMsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBMb29wIG92ZXIgdGhlIHJlc3VsdCBmb3IgZWFjaCBwcm92aWRlZCBVUkxcclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aCAmJiBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdFx0XHRjb25zdCBjYXJkc0RhdGEgPSBkYXRhW2ldWzIwMF07XHJcblxyXG5cdFx0XHRcdFx0Y2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oY2FyZERhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYoIWNhcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChib2FyZCwgbGlzdCwgY2FyZERhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMuYWZ0ZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGNhcmQuY3JlYXRlZC5nZXRUaW1lKCkgLyAxMDAwID4gb3B0aW9ucy5hZnRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmZXRjaF9hY3Rpb25zKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkc1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9hY3Rpb25zKGJvYXJkKSB7XHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZC9cIiArIGJvYXJkLmlkICsgXCIvYWN0aW9ucz9maWx0ZXI9Y29tbWVudENhcmQsdXBkYXRlQ2FyZDppZExpc3QmbGltaXQ9MTAwMFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdFx0XHRcdFx0aWYoIWFjdGlvbi5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYoYWN0aW9uLnR5cGUgPT09IFwiY29tbWVudENhcmRcIikge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBjb21tZW50ID0gbmV3IENvbW1lbnQoYm9hcmQsIGNhcmQsIGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJkLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSAndXBkYXRlQ2FyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gbmV3IFVwZGF0ZShib2FyZCwgY2FyZCwgYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcmQudXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRib2FyZC5saXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcclxuXHRcdFx0XHRcdGxpc3QuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcblx0XHRcdFx0XHRcdGNhcmQuc29ydF91cGRhdGVzKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmQgaW5mb3JtYXRpb25cIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gYXN5bmNfc3RhcnQoKSB7XHJcblx0XHRhY3RpdmUrKztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFzeW5jX2VuZCgpIHtcclxuXHRcdGFjdGl2ZS0tO1xyXG5cdFx0aWYoYWN0aXZlID09PSAwKSB7XHJcblx0XHRcdHN1Y2Nlc3MoYm9hcmQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQm9hcmQucHJvdG90eXBlLmZpbmRfbGlzdCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbGlzdCA9IHRoaXMubGlzdHNbaV07XHJcblx0XHRpZihsaXN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFN0YW5kYXJkIFRyZWxsbyBib2FyZCB2aWV3XHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuL0RhdGFWaWV3JztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcihsZXQgbGlzdCBvZiBib2FyZC5saXN0cykge1xyXG5cdFx0XHRwcmVzZW50TGlzdCh2aWV3LCBsaXN0KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXNlbnRMaXN0ID0gKHZpZXcsIGxpc3QpID0+IHtcclxuICAgIFx0Y29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRoZWFkZXIuaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xyXG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgXHRjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcclxuICAgIFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFx0dmlldy5hcHBlbmRDaGlsZChleHBhbmRlcik7XHJcblxyXG4gICAgXHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIFx0XHRpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHRcdFx0VXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRcdFx0VXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICBcdGxldCBjb3VudCA9IGxpc3QuY291bnRfbWVtYmVycygpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNhcmRzOjwvZW0+WycgKyBsaXN0LmNhcmRzLmxlbmd0aCArICddICc7XHJcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudCkge1xyXG5cdFx0ICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KGMpKSB7XHJcblx0XHRcdCAgICBtZW1iZXJzICs9IGNvdW50W2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50W2NdLmNudCArICddJm5ic3A7Jm5ic3A7JztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnN0IGNvdW50RWwgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKGNvdW50RWwpO1xyXG5cdCAgICBjb3VudEVsLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cdCAgICBmb3IobGV0IGNhcmQgb2YgbGlzdC5jYXJkcykge1xyXG5cdCAgICBcdHByZXNlbnRDYXJkKGV4cGFuZGVyLCBjYXJkKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50Q2FyZCA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gSGVhZGluZ1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY2FyZC5jcmVhdGVkKTtcclxuXHJcblx0XHRsZXQgY2FyZERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jYXJkJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcblx0XHRjYXJkRGl2LmlubmVySFRNTCA9IGA8aDQ+PHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHtjYXJkLm5hbWV9PC9oND5gO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gTWVtYmVyc1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgbWVtYmVycyA9ICcnO1xyXG5cdCAgICBmb3IobGV0IGlkIG9mIGNhcmQubWVtYmVycykge1xyXG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbaWRdO1xyXG5cdFx0ICAgIGlmKG1lbWJlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQgICAgbWVtYmVycyArPSAnIC8gJztcclxuXHRcdCAgICB9XHJcblx0XHQgICAgbWVtYmVycyArPSAnPHNwYW4+JyArIG1lbWJlci5uYW1lICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgbWVtYmVyc1AgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNhcmQtbWVtYmVycycpXHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQobWVtYmVyc1ApO1xyXG5cdCAgICBtZW1iZXJzUC5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIERlc2NyaXB0aW9uXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBkZXNjID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWRlc2NyaXB0aW9uJyk7XHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcblx0ICAgIGRlc2MuaW5uZXJIVE1MID0gY2FyZC5kZXNjO1xyXG5cclxuXHQgICAgcHJlc2VudENvbW1lbnRzKGNhcmREaXYsIGNhcmQpO1xyXG5cdCAgICBwcmVzZW50VXBkYXRlcyhjYXJkRGl2LCBjYXJkKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJlc2VudENhcmQgPSBwcmVzZW50Q2FyZDtcclxuXHJcbiAgICBsZXQgcHJlc2VudENvbW1lbnRzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLmNvbW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGNvbW1lbnREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY29tbWVudHMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xyXG5cclxuXHRcdGZvcihsZXQgY29tbWVudCBvZiBjYXJkLmNvbW1lbnRzKSB7XHJcblx0XHRcdGxldCBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbY29tbWVudC5tZW1iZXJdO1xyXG5cdFx0XHRsZXQgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0XHRsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY29tbWVudC5kYXRlKTtcclxuXHJcblx0XHRcdGxldCBoNSA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRcdGg1LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke21lbWJlck5hbWV9YDtcclxuXHJcblx0XHRcdGxldCB0ZXh0RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuXHRcdFx0dGV4dERpdi5pbm5lckhUTUwgPSBjb21tZW50LnRleHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRVcGRhdGVzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLnVwZGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgdXBkYXRlRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXVwZGF0ZXMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHVwZGF0ZURpdik7XHJcblxyXG5cdCAgICBmb3IobGV0IHVwZGF0ZSBvZiBjYXJkLnVwZGF0ZXMpIHtcclxuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW3VwZGF0ZS5tZW1iZXJdO1xyXG5cdFx0ICAgIHZhciBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcblx0XHQgICAgdmFyIGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHVwZGF0ZS5kYXRlKTtcclxuXHRcdCAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdCAgICB1cGRhdGVEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGRhdGUgKyAnPC9zcGFuPiAnICsgbWVtYmVyTmFtZSArXHJcblx0XHRcdCAgICAnIG1vdmVkIGZyb20gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QmVmb3JlICtcclxuXHRcdFx0ICAgICc8L3NwYW4+IHRvIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEFmdGVyICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5Cb2FyZFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5Cb2FyZFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQm9hcmRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QsIGRhdGEpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5uYW1lKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRlc2MgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGVzYykucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xyXG4gICAgICAgICc8L3A+JztcclxuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaWQuc3Vic3RyKDAsIDgpLCAxNikgKiAxMDAwKTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSBbXTtcclxuXHJcbiAgICBkYXRhLmlkTWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgdGhhdC5tZW1iZXJzLnB1c2goaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgdGhpcy51cGRhdGVzID0gW107XHJcbn1cclxuXHJcbkNhcmQucHJvdG90eXBlLnNvcnRfdXBkYXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy51cGRhdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGEuZGF0ZSA9PSBiLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgdGhlIGxhc3QgdGltZSB0aGlzIGNhcmQgd2FzIG1vdmVkLlxyXG4gKiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gYSBjb21wbGV0ZWQgY2FyZCB3YXNcclxuICogbW92ZWQgdG8gQ29tcGxldGVkLlxyXG4gKi9cclxuQ2FyZC5wcm90b3R5cGUuZmluYWxfdGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy51cGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGgtMV0uZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVtYmVycyBmcm9tIGEgY29sbGVjdGlvbiBvZiBjYXJkcy5cclxuICogQHBhcmFtIGJvYXJkIEJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gbGlzdCBhcnJheSBvZiBDYXJkIG9iamVjdHNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggaWQgYXMgcHJvcGVydHkgdG8gb2JqZWN0IHtjbnQ6ID8sIG1lbWJlcjogP31cclxuICovXHJcbkNhcmQuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0KSB7XHJcbiAgICB2YXIgY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICAgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkobWVtYmVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXS5jbnQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50W21lbWJlci5pZF0gPSB7Y250OiAxLCBtZW1iZXI6IG1lbWJlcn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBjb21tZW50IG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuLyoqXHJcbiBBcnJheVxyXG4gKFxyXG4gW2lkXSA9PiA1N2VlYzFjYTIyNjg0NjQ2YjExOTNhYmRcclxuIFtpZE1lbWJlckNyZWF0b3JdID0+IDU3ZWMxYmRhZmVlZGNiYmM3M2Q2MDBkMVxyXG4gW2RhdGFdID0+IEFycmF5XHJcbiAoXHJcbiBbbGlzdF0gPT4gQXJyYXlcclxuIChcclxuIFtuYW1lXSA9PiBEZXNpZ25cclxuIFtpZF0gPT4gNTdlOTIwYTJiMzQ1MTgyMDNmZDVmMzE5XHJcbiApXHJcblxyXG4gW2JvYXJkXSA9PiBBcnJheVxyXG4gKFxyXG4gW3Nob3J0TGlua10gPT4gaTllWEU0eUpcclxuIFtuYW1lXSA9PiBQcm9qZWN0IDEgVGVhbTogQXJib1xyXG4gW2lkXSA9PiA1N2U5MjA0YWMzZjMyM2YxNzg1ZDdiZTRcclxuIClcclxuXHJcbiBbY2FyZF0gPT4gQXJyYXlcclxuIChcclxuIFtzaG9ydExpbmtdID0+IEZnZ3ZkNG5YXHJcbiBbaWRTaG9ydF0gPT4gMjFcclxuIFtuYW1lXSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiBbaWRdID0+IDU3ZWVjMDc3NmZkMDA1ZjdiODFjODIzOVxyXG4gKVxyXG5cclxuIFt0ZXh0XSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiApXHJcblxyXG4gW3R5cGVdID0+IGNvbW1lbnRDYXJkXHJcbiBbZGF0ZV0gPT4gMjAxNi0wOS0zMFQxOTo0OTozMC45NzRaXHJcbiBbbWVtYmVyQ3JlYXRvcl0gPT4gQXJyYXlcclxuIChcclxuIFtpZF0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXHJcbiBbYXZhdGFySGFzaF0gPT5cclxuIFtmdWxsTmFtZV0gPT4gQnJpdHRhbnkgR2FsbGllcnNcclxuIFtpbml0aWFsc10gPT4gQkdcclxuIFt1c2VybmFtZV0gPT4gYnJpdHRhbnlnYWxsaWVyczFcclxuIClcclxuICogQHBhcmFtIGJvYXJkXHJcbiAqIEBwYXJhbSBjYXJkXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgIHRoaXMubWVtYmVyID0gZGF0YS5pZE1lbWJlckNyZWF0b3I7XHJcbiAgICB0aGlzLnRleHQgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGF0YS50ZXh0KS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXHJcbiAgICAgICAgJzwvcD4nO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGEuZGF0ZSkpO1xyXG59IiwiLypcclxuICogQmFzZSBvYmplY3QgZm9yIHZpZXdzIG9mIFRyZWxsbyBkYXRhLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhVmlldyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuRGF0YVZpZXcucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7fVxyXG5cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2Nvbm5lY3RlZFZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcclxuXHQvLyBFbnN1cmUgZW1wdHlcclxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XHJcblxyXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcclxuXHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgdG8gVHJlbGxvJztcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0cmVsbG8uYXV0aG9yaXplKCk7XHJcblx0fSlcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmNhcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5jYXJkc19ieV9pZCA9IHt9O1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5hZGRfY2FyZCA9IGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuICAgIHRoaXMuY2FyZHNfYnlfaWRbY2FyZC5pZF0gPSBjYXJkO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5maW5kX2NhcmQgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5jYXJkc19ieV9pZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkc19ieV9pZFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBDYXJkLmNvdW50X21lbWJlcnModGhpcy5ib2FyZCwgdGhpcy5jYXJkcyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL0JvYXJkJztcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gJy4vQm9hcmRWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRWaWV3fSBmcm9tIFwiLi9TcHJpbnRzL1NwcmludFZpZXdcIjtcclxuaW1wb3J0IHtTcHJpbnRUYWJsZVZpZXd9IGZyb20gJy4vU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xyXG5cdC8vIEVuc3VyZSBlbXB0eVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcclxuXHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xyXG5cclxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnRGlzY29ubmVjdCc7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dHJlbGxvLmRpc2Nvbm5lY3QoKTtcclxuXHJcblx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpO1xyXG5cdH0pXHJcblxyXG5cclxuXHRsZXQgcFN0YXR1cyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tc3RhdHVzJyk7XHJcblx0cFN0YXR1cy5pbm5lclRleHQgPSAnQ29ubmVjdGluZyB0byBUcmVsbG8uLi4nO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwU3RhdHVzKTtcclxuXHJcblx0bGV0IHBNc2cgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLW1zZycpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwTXNnKTtcclxuXHJcblx0Qm9hcmQuZmV0Y2godHJlbGxvLCBvcHRpb25zLmJvYXJkLCBvcHRpb25zLCBwTXNnLCAoYm9hcmQpID0+IHtcclxuXHRcdC8vIFN1Y2Nlc3NcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ1RyZWxsbyBCb2FyZDogJyArIGJvYXJkLm5hbWU7XHJcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XHJcblxyXG5cdFx0Zm9yKGxldCB2aWV3IGluIG9wdGlvbnMudmlld3MpIHtcclxuXHRcdFx0c3dpdGNoKHZpZXcpIHtcclxuXHRcdFx0XHRjYXNlICdib2FyZCc6XHJcblx0XHRcdFx0XHRsZXQgdiA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzcHJpbnQnOlxyXG5cdFx0XHRcdFx0diA9IG5ldyBTcHJpbnRWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50KTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NwcmludFRhYmxlJzpcclxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VGFibGVWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50VGFibGUpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIChtc2cpID0+IHtcclxuXHRcdC8vIEZhaWx1cmVcclxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gbXNnO1xyXG5cdH0pO1xyXG5cclxuXHQvL3RyZWxsby5mZXRjaCgpO1xyXG5cclxufSIsIi8qXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIG1lbWJlciBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbWJlciA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG59IiwiLypcclxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBzcHJpbnQgaW4gdGhlIHNwcmludHMgYW5hbHlzaXNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50ID0gZnVuY3Rpb24oc3ByaW50cywgc3RhcnQsIGVuZCkge1xyXG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcclxuICAgIHRoaXMuc3RhcnRfbWVldGluZyA9IHN0YXJ0O1xyXG4gICAgdGhpcy5lbmRfbWVldGluZyA9IGVuZDtcclxuXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IFtdO1xyXG59XHJcblxyXG5TcHJpbnQucHJvdG90eXBlLmVuZF90aW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5lbmRfbWVldGluZy5jcmVhdGVkLmdldFRpbWUoKSArXHJcbiAgICAgICAgKHRoaXMuc3ByaW50cy5zcHJpbnRfdGltZV9zbG9wICogMTAwMCkpO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRlYW0gbWVtYmVyIHN0YXRpc3RpY3MgZm9yIGEgc3ByaW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludE1lbWJlciA9IGZ1bmN0aW9uKHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XHJcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xyXG5cclxuICAgIHRoaXMubWVldGluZ3NfY291bnQgPSAwO1xyXG4gICAgdGhpcy5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuY29tcGxldGVkX2NvdW50ID0gMDtcclxuICAgIHRoaXMuY29tcGxldGVkX3RvdGFsID0gMDtcclxuICAgIFxyXG4gICAgdGhpcy5yZXZpZXdzX2NvdW50ID0gMDtcclxuICAgIHRoaXMucmV2aWV3c190b3RhbCA9IDA7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUubWVldGluZ3NfcGVyY2VudGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy5tZWV0aW5nc19jb3VudCA8PSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCkge1xyXG4gICAgICAgIHJldHVybiAnKGluc3VmZmljaWVudCBtZWV0aW5ncyknO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZXIgPSB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkIC8gKHRoaXMubWVldGluZ3NfY291bnQgLSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCk7XHJcbiAgICBpZihwZXIgPiAxKSB7XHJcbiAgICAgICAgcGVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGVyLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUuY29tcGxldGVkX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZF90b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSB0aGlzLmNvbXBsZXRlZF9jb3VudCAvXHJcbiAgICAgICAgKHRoaXMuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMuY29tcGxldGVkX2ZhY3Rvcik7XHJcbiAgICBpZihmYWN0b3IgPiAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLnJldmlld2luZ19mYWN0b3IgPSBmdW5jdGlvbih0ZWFtU2l6ZSkge1xyXG4gICAgaWYodGhpcy5yZXZpZXdzX3RvdGFsID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZhY3RvciA9IHRoaXMucmV2aWV3c19jb3VudCAvXHJcbiAgICAgICAgKHRoaXMucmV2aWV3c190b3RhbCAvIHRlYW1TaXplICogdGhpcy5zcHJpbnRzLnJldmlld2luZ19mYWN0b3IpO1xyXG4gICAgaWYoZmFjdG9yID4gMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59IiwiLypcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0IGluIGEgdGFibGUuXHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludFRhYmxlVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQsIG9wdGlvbnMpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IGFkZEhlYWRpbmdzID0gdHJ1ZTtcclxuICAgIGlmKG9wdGlvbnMuYWRkSGVhZGluZ3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFkZEhlYWRpbmdzID0gb3B0aW9ucy5hZGRIZWFkaW5ncztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXNwcmludC10YWJsZScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGNvbnN0IHRhYmxlID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICBVdGlsLmFkZENsYXNzKHRhYmxlLCBvcHRpb25zLmNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xyXG5cdCAgICAvL1xyXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xyXG5cdCAgICBjb25zdCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzKSB7XHJcblx0XHQgICAgdGFibGVIZWFkaW5nKHRhYmxlLCBib2FyZCwgc3ByaW50cyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0ZD4nICsgZGF0YSArICc8L3RkPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0XHQgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHQgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0XHRcdCAgICB2YXIgaWQgPSBtZW1iZXIubWVtYmVyLmlkO1xyXG5cclxuXHRcdFx0ICAgIHJvd0hUTUwgPSAnJztcclxuXHJcblx0XHRcdCAgICAvLyBPdXIgc3RhdGlzdGljc1xyXG5cdFx0XHQgICAgaXRlbShib2FyZC5uYW1lKTtcclxuXHRcdFx0ICAgIGl0ZW0odGVhbVNpemUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVtYmVyLm5hbWUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfdG90YWwpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3c19jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX3RvdGFsKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpKTtcclxuXHRcdFx0ICAgIGl0ZW0oc3ByaW50cy5zcHJpbnRzLmxlbmd0aCk7XHJcblxyXG5cdFx0XHQgICAgc3ByaW50cy5zcHJpbnRzLmZvckVhY2goZnVuY3Rpb24oc3ByaW50KSB7XHJcblx0XHRcdFx0ICAgIHZhciBjbnQgPSAwO1xyXG5cdFx0XHRcdCAgICBzcHJpbnQuY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG5cdFx0XHRcdFx0ICAgIGlmKGNhcmQubWVtYmVycy5sZW5ndGggPT0gMSAmJiBjYXJkLm1lbWJlcnNbMF0gPT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0ICAgIGNudCsrO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHRcdCAgICBpdGVtKGNudCk7XHJcblx0XHRcdFx0ICAgIGl0ZW0oc3ByaW50LmNvbXBsZXRlZC5sZW5ndGgpO1xyXG5cdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHQgICAgaWYoIWlzTmFOKGFkZEhlYWRpbmdzKSkge1xyXG5cdFx0XHRcdCAgICBmb3IodmFyIGk9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgaTxhZGRIZWFkaW5nczsgaSsrKSB7XHJcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcclxuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgY29uc3QgdHIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblx0XHRcdCAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG5cdFx0XHQgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlSGVhZGluZyA9IGZ1bmN0aW9uKHRhYmxlLCBib2FyZCwgc3ByaW50cykge1xyXG4gICAgICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50cjFjbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIFV0aWwuYWRkQ2xhc3ModHIsIG9wdGlvbnMudHIxY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0aD48ZGl2PicgKyBkYXRhICsgJzwvZGl2PjwvdGg+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaXRlbShcIlRlYW1cIik7XHJcblx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdCAgICBpdGVtKFwiTWVtYmVyXCIpO1xyXG5cdCAgICBpdGVtKFwiQXR0ZW5kZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJDb21wbGV0ZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJSZXZpZXdzXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiU3ByaW50c1wiKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzID09PSB0cnVlKSB7XHJcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9YWRkSGVhZGluZ3M7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFRhYmxlVmlldztcclxuLy8vIEBlbmRjb25kXHJcblxyXG5cclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS50YWJsZV9oZWFkaW5ncyA9IGZ1bmN0aW9uKGJvYXJkLCBzcHJpbnRzKSB7XHJcblxyXG59XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0c1xyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvLyBUaGlzIHVzZXMgQm9hcmRWaWV3IHRvIGRyYXcgd2hhdCBpdCBrbm93cyBob3cgdG8gZHJhd1xyXG4gICAgY29uc3QgYm9hcmRfdmlldyA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENyZWF0ZSB0aGUgc3ByaW50IGFuYWx5c2lzXHJcblx0ICAgIC8vXHJcblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XHJcblxyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50cycpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgbGV0IGgyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdCAgICBoMi5pbm5lclRleHQgPSAnU3ByaW50cyBBbmFseXNpcyc7XHJcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxuXHRcdHByZXNlbnRfZXJyb3JzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF93YXJuaW5ncyh2aWV3LCBzcHJpbnRzKTtcclxuXHJcblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcHJlc2VudF9zcHJpbnRzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF9tZW1iZXJzKHZpZXcsIHNwcmludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X2Vycm9ycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPT09IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGVycm9ycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1lcnJvcnMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGVycm9ycyk7XHJcblxyXG5cdCAgICBlcnJvcnMuaW5uZXJIVE1MID0gJzxoMz5FcnJvcnM8L2gzPic7XHJcblxyXG5cdCAgICBmb3IobGV0IGVycm9yIG9mIHNwcmludHMuZXJyb3JzKSB7XHJcblx0ICAgIFx0bGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgXHRlcnJvcnMuYXBwZW5kQ2hpbGQocCk7XHJcblx0ICAgIFx0cC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyBlcnJvci5jb2RlICsgJzo8L3NwYW4+ICcgKyBlcnJvci5tc2c7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF93YXJuaW5ncyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRpZihzcHJpbnRzLndhcm5pbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuXHQgICAgbGV0IHdhcm5pbmdzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXdhcm5pbmdzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh3YXJuaW5ncyk7XHJcblxyXG5cdCAgICB3YXJuaW5ncy5pbm5lckhUTUwgPSAnPGgzPldhcm5pbmdzPC9oMz4nO1xyXG5cclxuXHQgICAgZm9yKGxldCB3YXJuaW5nIG9mIHNwcmludHMud2FybmluZ3MpIHtcclxuXHRcdCAgICBsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ICAgIHdhcm5pbmdzLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgd2FybmluZy5jb2RlICsgJzo8L3NwYW4+ICcgKyB3YXJuaW5nLm1zZztcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3NwcmludHMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcih2YXIgcz0xOyBzPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBzKyspIHtcclxuXHQgICAgICAgIHZhciBzcHJpbnQgPSBzcHJpbnRzLnNwcmludHNbcy0xXTtcclxuXHQgICAgICAgIHByZXNlbnRfc3ByaW50KHZpZXcsIHNwcmludHMsIHMsIHNwcmludCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9zcHJpbnQgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG51bSwgc3ByaW50KSB7XHJcblx0ICAgIGNvbnN0IGZtRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LnN0YXJ0X21lZXRpbmcuY3JlYXRlZCk7XHJcblx0ICAgIGNvbnN0IHRvRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LmVuZF9tZWV0aW5nLmNyZWF0ZWQpO1xyXG5cdCAgICBjb25zdCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIE1lbWJlciBjb3VudHMgZm9yIGNvbXBsZXRlZFxyXG5cdCAgICAvL1xyXG4gICAgICAgIGNvbnN0IGNvdW50cyA9IENhcmQuY291bnRfbWVtYmVycyhzcHJpbnRzLmJvYXJkLCBzcHJpbnQuY29tcGxldGVkKTtcclxuXHJcblx0ICAgIGxldCB0b3RhbENvbXBsZXRlZCA9IDA7XHJcblx0ICAgIGZvcihsZXQgc3ByaW50IG9mIHNwcmludHMuc3ByaW50cykge1xyXG5cdFx0ICAgIHRvdGFsQ29tcGxldGVkICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgbGV0IGNvbXBsZXRpb25GYWN0b3IgPSAwLjAwO1xyXG5cdCAgICBpZih0b3RhbENvbXBsZXRlZCA+IDApIHtcclxuXHQgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0ZWQgLyAodG90YWxDb21wbGV0ZWQgLyBzcHJpbnRzLnNwcmludHMubGVuZ3RoICogMC44KTtcclxuXHQgICAgICAgIGlmKGNvbXBsZXRpb25GYWN0b3IgPiAxKSB7XHJcblx0ICAgICAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IDE7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0aW9uRmFjdG9yLnRvRml4ZWQoMik7XHJcblxyXG5cdCAgICBjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdCAgICBoZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBjb21wbGV0ZWQgK1xyXG4gICAgICAgICAnIHRhc2tzICcgKyBjb21wbGV0aW9uRmFjdG9yICsgJyAvICcgKyBmbURhdGUgKyAnIHRvICcgKyB0b0RhdGUgK1xyXG4gICAgICAgICAnPC9zcGFuPlNwcmludDogJyArIG51bTtcclxuXHJcblx0ICAgIGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xyXG5cdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xyXG5cclxuXHQgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgaWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5zdGFydF9tZWV0aW5nKTtcclxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuZW5kX21lZXRpbmcpO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ29tcGxldGVkXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBwQ29tcGxldGVkID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb21wbGV0ZWQtaGVhZGVyJyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBDb21wbGV0ZWQpO1xyXG5cdCAgICBwQ29tcGxldGVkLmlubmVyVGV4dCA9ICdTcHJpbnQgQ29tcGxldGVkIFRhc2tzJztcclxuXHJcblx0ICAgIGxldCBwTWVtYmVycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocE1lbWJlcnMpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNvbXBsZXRlZDo8L2VtPlsnICsgc3ByaW50LmNvbXBsZXRlZC5sZW5ndGggKyAnXSAnO1xyXG5cdCAgICBmb3IodmFyIGMgaW4gY291bnRzKSB7XHJcblx0ICAgICAgICBpZihjb3VudHMuaGFzT3duUHJvcGVydHkoYykpIHtcclxuXHQgICAgICAgICAgICBtZW1iZXJzICs9IGNvdW50c1tjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudHNbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBwTWVtYmVycy5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gUHJlc2VudCBjb21wbGV0ZWQgY2FyZHNcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKGxldCBpPTA7IGk8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbaV07XHJcblx0ICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBjb21wbGV0ZWQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfbWVtYmVycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRsZXQgbWVtYmVyc0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXJzJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChtZW1iZXJzRGl2KTtcclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0ICAgICAgICBpZihzcHJpbnRzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0ICAgICAgICAgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0ICAgICAgICAgICAgcHJlc2VudF9tZW1iZXIobWVtYmVyc0Rpdiwgc3ByaW50cywgbWVtYmVyKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHRcdHByZXNlbnRfaW5mbyhtZW1iZXJzRGl2LCBzcHJpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9tZW1iZXIgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgXHRsZXQgbWVtYmVyRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcicpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyRGl2KTtcclxuXHJcblx0ICAgIGxldCBtZWV0aW5ncyA9IHNwcmludHMubWVldGluZ3Nfc2xvcCA9PT0gMSA/ICcgbWVldGluZycgOiAnIG1lZXRpbmdzJztcclxuXHQgICAgbGV0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xyXG5cclxuXHQgICAgbWVtYmVyRGl2LmlubmVySFRNTCA9ICc8aDQ+JyArIG1lbWJlci5tZW1iZXIubmFtZSArICc8L2g0PicgK1xyXG5cclxuXHQgICAgICAgICc8cD5NZWV0aW5ncyBhdHRlbmRlZDogJyArIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCArICcvJyArIG1lbWJlci5tZWV0aW5nc19jb3VudCArXHJcblx0ICAgICAgICAnIHBlcmNlbnRhZ2U6ICcgKyBtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpICtcclxuXHQgICAgICAgICcgPGVtPllvdSBhcmUgYWxsb3dlZCB0byBtaXNzICcgKyBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgKyBtZWV0aW5ncyArICAnPC9lbT4nICtcclxuXHQgICAgICAgICc8L3A+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPlRhc2tzIGNvbXBsZXRlZDogJyArIG1lbWJlci5jb21wbGV0ZWRfY291bnQgK1xyXG5cdCAgICAgICAgJy8nICsgKG1lbWJlci5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSkudG9GaXhlZCgyKSArICcgZm9yIGEgY29tcGxldGlvbiBmYWN0b3Igb2Y6ICcgK1xyXG5cdCAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nICtcclxuXHJcblx0ICAgICAgICAnPHA+UmV2aWV3cyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIucmV2aWV3c19jb3VudCArICcgZm9yIGEgcmV2aWV3aW5nIGZhY3RvciBvZjogJyArXHJcblx0ICAgICAgICBtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfaW5mbyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRjb25zdCBpbmZvRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWluZm8nKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xyXG5cclxuICAgIFx0aW5mb0Rpdi5pbm5lckhUTUwgPSAnPHA+VGhlIGNvbXBsZXRpb24gZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5JyArXHJcblx0XHQgICAgJyB0ZWFtIG1lbWJlciBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSAnICsgKHNwcmludHMuY29tcGxldGVkX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mJyArXHJcblx0XHQgICAgJyBhbiBlcXVhbCBkaXN0cmlidXRpb24gb2YgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nICtcclxuXHRcdCAgICAnPHA+VGhlIHJldmlld2luZyBmYWN0b3IgZm9yIHRhc2tzIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgZXZlcnkgdGVhbSBtZW1iZXInICtcclxuXHRcdCAgICAnIGlzIGV4cGVjdGVkIHRvIHJldmlldyAnICsgKHNwcmludHMucmV2aWV3aW5nX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mIGFuIGVxdWFsJyArXHJcblx0XHQgICAgJyBkaXN0cmlidXRpb24gb2YgdGFza3MuIFRoaXMgZmFjdG9yIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgOTAlIG9mIHRhc2tzIHNob3VsZCcgK1xyXG5cdFx0ICAgICcgYmUgcHJvZ3JhbW1pbmcgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5TcHJpbnRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50Vmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLypcclxuICogU3ByaW50IGFuYWx5c2lzIG9mIFRyZWxsbyBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7U3ByaW50fSBmcm9tIFwiLi9TcHJpbnRcIjtcclxuaW1wb3J0IHtTcHJpbnRNZW1iZXJ9IGZyb20gXCIuL1NwcmludE1lbWJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludHMgPSBmdW5jdGlvbihib2FyZCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vLyBOdW1iZXIgb2YgbWlzc2VkIG1lZXRpbmdzIGFsbG93XHJcbiAgICB0aGlzLm1lZXRpbmdzX3Nsb3AgPSAxO1xyXG5cclxuXHJcbiAgICAvLy8gTnVtYmVyIG9mIHNlY29uZHMgYWZ0ZXIgbWVldGluZyB0aW1lIHRvIGNvbnNpZGVyIGNvbXBsZXRlZFxyXG4gICAgLy8vIGluIGEgY3VycmVudCBzcHJpbnQgaW4gc2Vjb25kcy5cclxuICAgIHRoaXMuc3ByaW50X3RpbWVfc2xvcCA9IDUgKiA2MCAqIDYwOyAgIC8vIDUgaG91cnNcclxuICAgIFxyXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIGhpcyBzaGFyZSBvZiB0YXNrc1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfZmFjdG9yID0gMC44O1xyXG4gICAgXHJcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgOTAlIG9mIHRoZSB0YXNrIGNvdW50IGluIHJldmlld3NcclxuICAgIHRoaXMucmV2aWV3aW5nX2ZhY3RvciA9IDAuOCAqIDAuOTtcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcblxyXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgIHRoaXMud2FybmluZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSB7fTtcclxuICAgIHRoaXMuc3ByaW50cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZGVzaWduID0gbnVsbDtcclxuICAgIHRoaXMucmlza3MgPSBudWxsO1xyXG4gICAgdGhpcy5tZWV0aW5ncyA9IG51bGw7XHJcbiAgICB0aGlzLnRvZG8gPSBudWxsO1xyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IG51bGw7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvcHkgb3ZlciB0aGUgbWVtYmVyc1xyXG4gICAgLy9cclxuICAgIGZvcih2YXIgaWQgaW4gYm9hcmQubWVtYmVycykge1xyXG4gICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICBpZihtZW1iZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImNzZTMzNVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXSA9IG5ldyBTcHJpbnRNZW1iZXIodGhpcywgbWVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRmluZCBhbGwgb2YgdGhlIHJlcXVpcmVkIGxpc3RzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5maW5kX2xpc3RzKCk7XHJcblxyXG4gICAgaWYodGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2U5MDAnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE9yZGVyIHRlc3RpbmdcclxuICAgIC8vXHJcbiAgICB0aGlzLm9yZGVyX3Rlc3QoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRGV0ZXJtaW5lIGF0dGVuZGFuY2VcclxuICAgIC8vXHJcbiAgICB0aGlzLm1lZXRpbmdfYXR0ZW5kYW5jZSgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb252ZXJ0IG1lZXRpbmdzIGludG8gc3ByaW50c1xyXG4gICAgLy9cclxuICAgIHRoaXMuY3JlYXRlX3NwcmludHMoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gU29ydCBjb21wbGV0ZWQgaW50byBzcHJpbnRzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5zb3J0X2NvbXBsZXRlZCgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb21wbGV0ZWQgc3RhdGlzdGljc1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29tcGxldGVkX3N0YXRpc3RpY3MoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBhbGwgcmVxdWlyZWQgbGlzdHMgZXhpc3QuXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX2xpc3RzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBGaW5kIHRoZSBcIkRlc2lnblwiIGxpc3RcclxuICAgIHRoaXMuZGVzaWduID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0Rlc2lnbicpO1xyXG4gICAgaWYodGhpcy5kZXNpZ24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJSaXNrc1wiIGxpc3RcclxuICAgIHRoaXMucmlza3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnUmlza3MnKTtcclxuICAgIGlmKHRoaXMucmlza3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJNZWV0aW5nc1wiIGxpc3RcclxuICAgIHRoaXMubWVldGluZ3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnTWVldGluZ3MnKTtcclxuICAgIGlmKHRoaXMubWVldGluZ3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUbyBEb1wiIGxpc3RcclxuICAgIHRoaXMudG9kbyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUbyBEbycpO1xyXG4gICAgaWYodGhpcy50b2RvID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQWN0aXZlXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IEFjdGl2ZScpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfYWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IENvbXBsZXRlZCcpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfY29tcGxldGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnQ29tcGxldGVkJyk7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDcnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBsaXN0cyBhcmUgaW4gdGhlIHJpZ2h0IG9yZGVyXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5vcmRlcl90ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuYm9hcmQub3B0aW9ucy5jYXJkcztcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxvcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQubGlzdHNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBvcmRlcltpXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZygndzAwMScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVldGluZyBhdHRlbmRhbmNlIGZvciBhIHVzZXJcclxuICovXHJcblNwcmludHMucHJvdG90eXBlLm1lZXRpbmdfYXR0ZW5kYW5jZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBtZWV0aW5nc19jb3VudCA9IHRoaXMubWVldGluZ3MuY2FyZHMubGVuZ3RoO1xyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5tZW1iZXJzW2lkXTtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfY291bnQgPSBtZWV0aW5nc19jb3VudDtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVldGluZ3MuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoYXQuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmNyZWF0ZV9zcHJpbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWVldGluZ3MgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLnNsaWNlKCk7XHJcblxyXG4gICAgbWVldGluZ3Muc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5jcmVhdGVkIDwgYi5jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5jcmVhdGVkID09PSBiLmNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8KG1lZXRpbmdzLmxlbmd0aCAtIDEpOyBpKyspIHtcclxuICAgICAgICB0aGlzLnNwcmludHMucHVzaChuZXcgU3ByaW50KHRoaXMsIG1lZXRpbmdzW2ldLCBtZWV0aW5nc1tpKzFdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLnNvcnRfY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmNhcmRzLnNsaWNlKCk7XHJcbiAgICBjb21wbGV0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgdmFyIGF0ID0gYS5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgdmFyIGJ0ID0gYi5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgaWYoYXQgPT09IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZihhdCA8IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY29tcGxldGVkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBpZ25vcmUgXCJyaXNrXCIgY2FyZHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKGNvbXBsZXRlZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInJpc2tcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gY29tcGxldGVkLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhhdC5zcHJpbnRzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGUgPD0gc3ByaW50LmVuZF90aW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaSA+PSB0aGF0LnNwcmludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gdGhhdC5zcHJpbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XHJcbiAgICAgICAgICAgIHNwcmludC5jb21wbGV0ZWQucHVzaChjb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuY29tcGxldGVkX3N0YXRpc3RpY3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb21wbGV0ZWRfY291bnQgPSAwO1xyXG4gICAgdmFyIHJldmlld3NfdG90YWwgPSAwO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzcHJpbnQgPSB0aGlzLnNwcmludHNbaV07XHJcbiAgICAgICAgY29tcGxldGVkX2NvdW50ICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IodmFyIGo9MDsgajxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb21wbGV0ZWQubWVtYmVyc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwMlwiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBubyB0ZWFtIG1lbWJlcnMgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDNcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXHJcbiAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBtb3JlIHRoYW4gb25lIHRlYW0gbWVtYmVyIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBcmUgdGhleSBhbnkgcmV2aWV3cz9cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldmlld3NfdG90YWwrKztcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbXBsZXRlZC5jb21tZW50c1swXS5tZW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXIucmV2aWV3c19jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5jb21wbGV0ZWRfdG90YWwgPSBjb21wbGV0ZWRfY291bnQ7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5yZXZpZXdzX3RvdGFsID0gcmV2aWV3c190b3RhbDtcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9tZW1iZXIgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5udW1fbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNudCA9IDA7XHJcblxyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY250O1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGNvZGUpIHtcclxuICAgIC8vIERvZXMgdGhlIGVycm9yIGFscmVhZHkgZXhpc3Q/XHJcbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmVycm9ycy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLmVycm9yc1tpXTtcclxuICAgICAgICBpZihlcnJvci5jb2RlID09PSBjb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICdlMDAxJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0Rlc2lnbidcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMic6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdSaXNrcydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMyc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdNZWV0aW5ncydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUbyBEbydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNSc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBBY3RpdmUnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDYnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQ29tcGxldGVkJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA3JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0NvbXBsZXRlZCdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTkwMCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJGYXRhbCBlcnJvcnMsIHVuYWJsZSB0byBwcm9jZWVkIHdpdGggc3ByaW50cyBhbmFseXNpc1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24oY29kZSwgbXNnKSB7XHJcbiAgICBpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBtc2d9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICd3MDAxJzpcclxuICAgICAgICAgICAgdmFyIG1zZyA9IFwiWW91ciBsaXN0cyBhcmUgbm90IGluIHRoZSBjb3JyZWN0IG9yZGVyLiBcIiArXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBleGFjdCBvcmRlciBzaG91bGQgYmU6XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgY2FyZCBvZiB0aGlzLmJvYXJkLm9wdGlvbnMuY2FyZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnICs9ICcsJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtc2cgKz0gJyAnICsgY2FyZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IG1zZ30pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge29wdGlvbnN9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuaW1wb3J0IHtEaXNjb25uZWN0ZWRWaWV3fSBmcm9tIFwiLi9EaXNjb25uZWN0ZWRWaWV3XCI7XHJcbmltcG9ydCB7TWFpblZpZXd9IGZyb20gJy4vTWFpblZpZXcnO1xyXG5pbXBvcnQge1RyZWxsb0Nvbm5lY3R9IGZyb20gJ3RyZWxsby1jb25uZWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9TcHJpbnRlciA9IGZ1bmN0aW9uKHVzZXJPcHRpb25zKSB7XHJcblx0Ly8gRGVmYXVsdCBhbmQgc3VwcGxpZWQgb3B0aW9uc1xyXG5cdGNvbnN0IG9wdHMgPSBVdGlsLm1lcmdlKG9wdGlvbnMsIHVzZXJPcHRpb25zKTtcclxuXHJcblx0Y29uc3QgdHJlbGxvID0gbmV3IFRyZWxsb0Nvbm5lY3Qob3B0cyk7XHJcblxyXG5cdFV0aWwucmVhZHkoKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRzO1xyXG5cdFx0aWYob3B0cy5zZWwubm9kZVR5cGUpIHtcclxuXHRcdFx0ZWxlbWVudHMgPSBbb3B0cy5zZWxdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdHMuc2VsKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRzd2l0Y2godHJlbGxvLnN0YXRlKSB7XHJcblx0XHRcdFx0Y2FzZSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDpcclxuXHRcdFx0XHRcdG5ldyBEaXNjb25uZWN0ZWRWaWV3KGVsZW1lbnRzW2ldLCB0cmVsbG8sIG9wdHMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRuZXcgTWFpblZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIHVwZGF0ZSBvbiBhIGNhcmRcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlID0gZnVuY3Rpb24oYm9hcmQsIGNhcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuY2FyZCA9IGNhcmQ7IFxyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubWVtYmVyID0gZGF0YS5pZE1lbWJlckNyZWF0b3I7XHJcbiAgICB0aGlzLmxpc3RCZWZvcmUgPSBkYXRhLmRhdGEubGlzdEJlZm9yZS5uYW1lO1xyXG4gICAgdGhpcy5saXN0QWZ0ZXIgPSBkYXRhLmRhdGEubGlzdEFmdGVyLm5hbWU7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGEuZGF0ZSkpO1xyXG59XHJcblxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFV0aWwgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5VdGlsLm1lcmdlID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG5cdHZhciBvYmogPSB7fTtcclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajIpIHtcclxuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYWxsIEhUTUwgdGFncyBmcm9tIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3RyIFN0cmluZyB0byBwcm9jZXNzXHJcbiAqIEByZXR1cm5zIHN0cmluZyB3aXRob3V0IHRhZ3NcclxuICovXHJcblV0aWwuc3RyaXBfdGFncyA9IGZ1bmN0aW9uKHN0cikge1xyXG5cdHJldHVybiBzdHIucmVwbGFjZSgvPCg/Oi58XFxuKSo/Pi9nbSwgJycpO1xyXG59XHJcblxyXG5VdGlsLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbih0eXBlLCBjbHMpIHtcclxuXHRsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcblx0aWYoY2xzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFV0aWwuYWRkQ2xhc3MoZSwgY2xzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBlO1xyXG59XHJcblxyXG5VdGlsLmFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZXMpIHtcclxuXHRjb25zdCBuYW1lcyA9IGNsYXNzTmFtZXMuc3BsaXQoJyAnKTtcclxuXHRmb3IoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG5cdFx0aWYgKGVsLmNsYXNzTGlzdClcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0ZWwuY2xhc3NOYW1lICs9ICcgJyArIG5hbWU7XHJcblx0fVxyXG59XHJcblxyXG5VdGlsLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChlbC5jbGFzc0xpc3QpXHJcblx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcblx0ZWxzZVxyXG5cdFx0ZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxufVxyXG5cclxuVXRpbC5yZWFkeSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0aWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG5cdFx0Zm4oKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydCBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QgdG8gYSBzdHJpbmcuXHJcbiAqXHJcbiAqIFRoaXMgdXNlcyBmb3JtYXR0aW5nIHRoYXQgaXMgc3Vic2V0IG9mIHRoZSBQSFAgZGF0ZSgpIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gZGF0ZSBEYXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gZm9ybWF0IE9wdGlvbmFsIGZvcm1hdCBzdHJpbmcgKGRlZmF1bHQgaXMgJ24tZC1ZIGg6aWEnKS5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcblV0aWwuZm9ybWF0RGF0ZXRpbWUgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXQpIHtcclxuXHJcblx0ZnVuY3Rpb24gcGFkKGksIG4pIHtcclxuXHRcdHZhciBzID0gJycgKyBpO1xyXG5cdFx0d2hpbGUocy5sZW5ndGggPCBuKSB7XHJcblx0XHRcdHMgPSAnMCcgKyBzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblx0aWYoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdGZvcm1hdCA9ICduLWQtWSBoOmlhJztcclxuXHR9XHJcblxyXG5cdHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHR2YXIgaG91ciA9IGhvdXJzO1xyXG5cdHZhciBhbSA9ICdhJztcclxuXHRpZihob3VycyA9PSAwKSB7XHJcblx0XHRob3VyID0gMTI7XHJcblx0fSBlbHNlIGlmKGhvdXJzID09IDEyKSB7XHJcblx0XHRhbSA9ICdwJztcclxuXHR9IGVsc2UgaWYoaG91cnMgPiAxMikge1xyXG5cdFx0aG91ciA9IGhvdXJzIC0gMTI7XHJcblx0XHRhbSA9ICdwJztcclxuXHR9XHJcblxyXG5cdHZhciBzdHIgPSAnJztcclxuXHRmb3IodmFyIGk9MDsgaTxmb3JtYXQubGVuZ3RoOyBpKyspIHtcclxuXHRcdHN3aXRjaChmb3JtYXQuY2hhckF0KGkpKSB7XHJcblx0XHRcdGNhc2UgJ24nOlxyXG5cdFx0XHRcdHN0ciArPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnbSc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2QnOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXREYXRlKCksIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnWSc6XHJcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2cnOlxyXG5cdFx0XHRcdHN0ciArPSBob3VyO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaCc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChob3VyLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2knOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRNaW51dGVzKCksIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncyc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldFNlY29uZHMoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdhJzpcclxuXHRcdFx0XHRzdHIgKz0gYW07XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHN0ciArPSBmb3JtYXQuY2hhckF0KGkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0cjtcclxufSIsIlxyXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcclxuXHRzZWw6ICcjdHJlbGxvJyxcclxuXHR2ZXJzaW9uOiAxLFxyXG5cdFwiYXBpRW5kcG9pbnRcIjogXCJodHRwczovL2FwaS50cmVsbG8uY29tXCIsXHJcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0a2V5OiAnJyxcclxuXHJcblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xyXG5cdC8vIGRpc2FtYmlndWF0ZSBtdWx0aXBsZSB1c2VzIG9uIHRoZSBzYW1lIHNpdGVcclxuXHRsb2NhbFByZWZpeDogJycsXHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGJvYXJkIHdlIGFyZSBmZXRjaGluZ1xyXG5cdGJvYXJkOiAnJyxcclxuXHJcblx0LyoqIE9wdGlvbmFsOiBPbmx5IGNvbnNpZGVyIG1lZXRpbmdzIGFmdGVyIHRoaXMgdGltZSAoVW5peCB0aW1lKSAqL1xyXG5cdGFmdGVyOiBudWxsLFxyXG5cclxuXHR2aWV3czoge1xyXG5cdFx0J2JvYXJkJzoge30sXHJcblx0XHQnc3ByaW50Jzoge31cclxuXHR9LFxyXG5cclxuXHRuYW1lOiAnVHJlbGxvU3ByaW50ZXInLFxyXG5cclxuXHQvLyBEZWZhdWx0IGNhcmRzXHJcblx0Y2FyZHM6IFsnRGVzaWduJywgJ1Jpc2tzJywgJ01lZXRpbmdzJyxcclxuXHRcdCdUbyBEbycsICdUaGlzIFNwcmludCBBY3RpdmUnLFxyXG5cdFx0J1RoaXMgU3ByaW50IENvbXBsZXRlZCcsICdDb21wbGV0ZWQnXVxyXG59O1xyXG5cclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZhNTNhY2U2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXHJcbmltcG9ydCB7VHJlbGxvRmFjdG9yeX0gZnJvbSAnLi9qcy9UcmVsbG9GYWN0b3J5JztcclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcbiIsImltcG9ydCB7VHJlbGxvU3ByaW50ZXJWaWV3fSBmcm9tICcuL1RyZWxsb1NwcmludGVyVmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5UcmVsbG9GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXRyZWxsby1zcHJpbnRlcicpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bmV3IFRyZWxsb1NwcmludGVyVmlldyhzaXRlLCBlbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQgVHJlbGxvU3ByaW50ZXIgZnJvbSBcInRyZWxsby1zcHJpbnRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyVmlldyA9IGZ1bmN0aW9uKHNpdGUsIGVsZW1lbnQpIHtcclxuXHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LmlubmVyVGV4dCk7XHJcblx0ZWxlbWVudC5pbm5lclRleHQgPSAnJztcclxuXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHR2YXIgb3B0aW9ucyA9IHtcclxuXHRcdHNlbDogZWxlbWVudCxcclxuXHRcdGtleToganNvbi5rZXksXHJcblx0XHRib2FyZDoganNvbi50ZWFtLFxyXG5cdFx0dmlld3M6IGpzb24udmlld3MsXHJcblx0XHRhZnRlcjoganNvbi5hZnRlclxyXG5cdH07XHJcblxyXG5cdGlmKGpzb24uY2FyZHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0b3B0aW9ucy5jYXJkcyA9IGpzb24uY2FyZHM7XHJcblx0fVxyXG5cclxuXHRuZXcgVHJlbGxvU3ByaW50ZXIob3B0aW9ucyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
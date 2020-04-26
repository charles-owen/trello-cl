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
/******/ 	var hotCurrentHash = "a09822484135bb6a7c7c";
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLWNvbm5lY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9wbHVzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9EaXNjb25uZWN0ZWRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludE1lbWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50VGFibGVWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVHJlbGxvU3ByaW50ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VdGlsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/Mzg3NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsInZlcnNpb24iLCJrZXkiLCJsb2NhbFByZWZpeCIsIm1lcmdlIiwib2JqMSIsIm9iajIiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIlRva2VuU3RvcmFnZSIsIlRyZWxsb0Nvbm5lY3QiLCJvcHRpb25zIiwidGhhdCIsInRva2VuIiwiaW5pdGlhbGl6ZSIsInN0YXRlIiwiRElTQ09OTkVDVEVEIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRJdGVtIiwiQ09OTkVDVEVEIiwiYXV0aG9yaXplIiwicmV0dXJuX3VybCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsImF1dGhFbmRwb2ludCIsIm5hbWUiLCJkaXNjb25uZWN0IiwicmVtb3ZlSXRlbSIsImdldCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwibXNnIiwidHJpZXMiLCJtYXh0cmllcyIsImJhY2tvZmYiLCJiYWNrb2ZmSW5jcmVhc2UiLCJ0cmVsbG9HZXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiYXBpRW5kcG9pbnQiLCJvbmxvYWQiLCJzdGF0dXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsInVuZGVmaW5lZCIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJzZXRUaW1lb3V0Iiwic2VuZCIsIlRyZWxsb1NwcmludGVyIiwiQm9hcmQiLCJpZCIsImxpc3RzIiwibWVtYmVycyIsImZpbmRfY2FyZCIsImkiLCJjYXJkIiwiYWRkX21lbWJlciIsIm1lbWJlciIsImZldGNoIiwidHJlbGxvIiwiYWN0aXZlIiwiYm9hcmQiLCJhc3luY19zdGFydCIsImJvYXJkRGF0YSIsInRvTG93ZXJDYXNlIiwiY2xvc2VkIiwiZmV0Y2hfbWVtYmVyc2hpcCIsImZldGNoX2xpc3RzIiwiYXN5bmNfZW5kIiwiZm9yRWFjaCIsIm1lbWJlckRhdGEiLCJNZW1iZXIiLCJsaXN0RGF0YSIsImxpc3QiLCJMaXN0IiwicHVzaCIsImZldGNoX2NhcmRzIiwidXJscyIsImNhcmRzRGF0YSIsImNhcmREYXRhIiwiQ2FyZCIsImFmdGVyIiwiY3JlYXRlZCIsImdldFRpbWUiLCJhZGRfY2FyZCIsImZldGNoX2FjdGlvbnMiLCJhY3Rpb24iLCJ0eXBlIiwiY29tbWVudCIsIkNvbW1lbnQiLCJjb21tZW50cyIsInVwZGF0ZSIsIlVwZGF0ZSIsInVwZGF0ZXMiLCJjYXJkcyIsInNvcnRfdXBkYXRlcyIsInByb3RvdHlwZSIsImZpbmRfbGlzdCIsIkJvYXJkVmlldyIsImRpdiIsIkRhdGFWaWV3IiwiY2FsbCIsInByZXNlbnQiLCJ2aWV3IiwiVXRpbCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInByZXNlbnRMaXN0IiwiaGVhZGVyIiwiZXhwYW5kZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY291bnQiLCJjb3VudF9tZW1iZXJzIiwiYyIsImNudCIsImNvdW50RWwiLCJpbm5lckhUTUwiLCJwcmVzZW50Q2FyZCIsImRhdGUiLCJmb3JtYXREYXRldGltZSIsImNhcmREaXYiLCJtZW1iZXJzUCIsImRlc2MiLCJwcmVzZW50Q29tbWVudHMiLCJwcmVzZW50VXBkYXRlcyIsImNvbW1lbnREaXYiLCJtZW1iZXJOYW1lIiwiaDUiLCJ0ZXh0RGl2IiwidGV4dCIsInVwZGF0ZURpdiIsInAiLCJkb2N1bWVudCIsImxpc3RCZWZvcmUiLCJsaXN0QWZ0ZXIiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInN0cmlwX3RhZ3MiLCJyZXBsYWNlIiwiRGF0ZSIsInBhcnNlSW50Iiwic3Vic3RyIiwiaWRNZW1iZXJzIiwic29ydCIsImEiLCJiIiwiZmluYWxfdGltZSIsImlkTWVtYmVyQ3JlYXRvciIsIkRpc2Nvbm5lY3RlZFZpZXciLCJlbGVtZW50IiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJjYXJkc19ieV9pZCIsIk1haW5WaWV3IiwicFN0YXR1cyIsInBNc2ciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aWV3cyIsInYiLCJTcHJpbnRWaWV3Iiwic3ByaW50IiwiU3ByaW50VGFibGVWaWV3Iiwic3ByaW50VGFibGUiLCJmdWxsTmFtZSIsIlNwcmludCIsInNwcmludHMiLCJzdGFydCIsImVuZCIsInN0YXJ0X21lZXRpbmciLCJlbmRfbWVldGluZyIsImNvbXBsZXRlZCIsImVuZF90aW1lIiwic3ByaW50X3RpbWVfc2xvcCIsIlNwcmludE1lbWJlciIsIm1lZXRpbmdzX2NvdW50IiwibWVldGluZ3NfYXR0ZW5kZWQiLCJjb21wbGV0ZWRfY291bnQiLCJjb21wbGV0ZWRfdG90YWwiLCJyZXZpZXdzX2NvdW50IiwicmV2aWV3c190b3RhbCIsIm1lZXRpbmdzX3BlcmNlbnRhZ2UiLCJtZWV0aW5nc19zbG9wIiwicGVyIiwiY29tcGxldGVkX2ZhY3RvciIsInRlYW1TaXplIiwiZmFjdG9yIiwicmV2aWV3aW5nX2ZhY3RvciIsImFkZEhlYWRpbmdzIiwidGFibGUiLCJTcHJpbnRzIiwibnVtX21lbWJlcnMiLCJ0YWJsZUhlYWRpbmciLCJyb3dIVE1MIiwiaXRlbSIsImlzTmFOIiwidHIiLCJ0cjFjbGFzcyIsInRhYmxlX2hlYWRpbmdzIiwiYm9hcmRfdmlldyIsImgyIiwicHJlc2VudF9lcnJvcnMiLCJwcmVzZW50X3dhcm5pbmdzIiwiZXJyb3JzIiwicHJlc2VudF9zcHJpbnRzIiwicHJlc2VudF9tZW1iZXJzIiwiZXJyb3IiLCJjb2RlIiwid2FybmluZ3MiLCJ3YXJuaW5nIiwicyIsInByZXNlbnRfc3ByaW50IiwibnVtIiwiZm1EYXRlIiwidG9EYXRlIiwiY291bnRzIiwidG90YWxDb21wbGV0ZWQiLCJjb21wbGV0aW9uRmFjdG9yIiwicENvbXBsZXRlZCIsInBNZW1iZXJzIiwibWVtYmVyc0RpdiIsInByZXNlbnRfbWVtYmVyIiwicHJlc2VudF9pbmZvIiwibWVtYmVyRGl2IiwibWVldGluZ3MiLCJpbmZvRGl2IiwiZGVzaWduIiwicmlza3MiLCJ0b2RvIiwic3ByaW50X2FjdGl2ZSIsInNwcmludF9jb21wbGV0ZWQiLCJmaW5kX2xpc3RzIiwib3JkZXJfdGVzdCIsIm1lZXRpbmdfYXR0ZW5kYW5jZSIsImNyZWF0ZV9zcHJpbnRzIiwic29ydF9jb21wbGV0ZWQiLCJjb21wbGV0ZWRfc3RhdGlzdGljcyIsIm9yZGVyIiwiZmluZF9tZW1iZXIiLCJzbGljZSIsImF0IiwiYnQiLCJpbmRleE9mIiwiaiIsImZpcnN0IiwidXNlck9wdGlvbnMiLCJvcHRzIiwicmVhZHkiLCJlbGVtZW50cyIsInNlbCIsIm5vZGVUeXBlIiwicXVlcnlTZWxlY3RvckFsbCIsInN0ciIsImNscyIsImUiLCJlbCIsImNsYXNzTmFtZXMiLCJuYW1lcyIsInNwbGl0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiUmVnRXhwIiwiam9pbiIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiZm9ybWF0IiwicGFkIiwibiIsImhvdXJzIiwiZ2V0SG91cnMiLCJob3VyIiwiYW0iLCJjaGFyQXQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiVHJlbGxvRmFjdG9yeSIsIlNpdGUiLCJzaXRlIiwiVHJlbGxvU3ByaW50ZXJWaWV3IiwianNvbiIsInRlYW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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R0FBRzVQLElBQUksQ0FBQ0MsS0FBTCxDQUFXbUgsT0FBTyxDQUFDL0csU0FBbkIsQ0FBYjtBQUNBK0csU0FBTyxDQUFDL0csU0FBUixHQUFvQixFQUFwQjtBQUNBK0csU0FBTyxDQUFDN0MsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUEsTUFBSXBILE9BQU8sR0FBRztBQUNib1EsT0FBRyxFQUFFcEcsT0FEUTtBQUViekssT0FBRyxFQUFFaVQsSUFBSSxDQUFDalQsR0FGRztBQUdiMkUsU0FBSyxFQUFFc08sSUFBSSxDQUFDQyxJQUhDO0FBSWJoSSxTQUFLLEVBQUUrSCxJQUFJLENBQUMvSCxLQUpDO0FBS2JuRixTQUFLLEVBQUVrTixJQUFJLENBQUNsTjtBQUxDLEdBQWQ7O0FBUUEsTUFBR2tOLElBQUksQ0FBQ3JNLEtBQUwsS0FBZW5ELFNBQWxCLEVBQTZCO0FBQzVCaEQsV0FBTyxDQUFDbUcsS0FBUixHQUFnQnFNLElBQUksQ0FBQ3JNLEtBQXJCO0FBQ0E7O0FBRUQsTUFBSTlDLHVEQUFKLENBQW1CckQsT0FBbkI7QUFDQSxDQWxCTSxDIiwiZmlsZSI6InRyZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRyZWxsb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUcmVsbG9cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiYTA5ODIyNDg0MTM1YmI2YTdjN2NcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiVHJlbGxvXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL3RyZWxsby9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ltZy9wbHVzLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2ltZy9taW51cy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYudHJlbGxvLXNwcmludGVyIHtcXG4gIG1hcmdpbjogMDsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1zdGF0dXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tbXNnIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgcC5jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyB7XFxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjI1ZW0gMjBweDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IGgzIHNwYW4uZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgcC50cmVsbG8tY29tcGxldGVkLWhlYWRlciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICAgIGNvbG9yOiBkZWVwc2t5Ymx1ZTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLXBsdXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cywgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDZwdDtcXG4gICAgYm9yZGVyOiAxcHQgc29saWQgZ3JheTtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQsIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1lcnJvcnMge1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgICBib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1jb3VudCB7XFxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgaDQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWQwZmQ7XFxuICAgICAgbWFyZ2luOiAwLjVlbSAwIDAgMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgLnRyZWxsby1jYXJkLW1lbWJlcnMge1xcbiAgICAgIG1hcmdpbjogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDAuNWVtIDFlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZGVzY3JpcHRpb24gcCB7XFxuICAgICAgbWFyZ2luOiAwIDAgMC4yNWVtIDA7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHtcXG4gICAgbWFyZ2luOiAwIDJlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyBwIHtcXG4gICAgICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHtcXG4gICAgbWFyZ2luOiAxZW0gMmVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCBzcGFuLmxpc3Qge1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyB7XFxuICAgICAgYmFja2dyb3VuZDogI2M0MTQyNTtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmODBkZjtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLW1lbWJlciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XFxuICAgICAgbWFyZ2luOiAxZW0gM2VtIDZwdCAzZW07XFxuICAgICAgYm9yZGVyOiAxcHQgc29saWQgZ3JheTtcXG4gICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgICAgbWFyZ2luOiAwOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgc3Bhbi50cmVsbG8tY29kZSwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBzcGFuLnRyZWxsby1jb2RlLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgc3Bhbi50cmVsbG8tY29kZSB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDQge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBkaXYudHJlbGxvLWluZm8sIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjazsgfVxcbiAgICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLWluZm8gcCB7XFxuICAgICAgICAgIG1hcmdpbjogMWVtIDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnQtdGFibGUge1xcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcblx0dmVyc2lvbjogMSxcclxuXHRcImFwaUVuZHBvaW50XCI6IFwiaHR0cHM6Ly9hcGkudHJlbGxvLmNvbVwiLFxyXG5cdFwiYXV0aEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0XCJpbnRlbnRFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdGtleTogJycsXHJcblxyXG5cdC8vIFByZWZpeCB0byBhcHBseSB0byBsb2NhbCBzdG9yYWdlLiBVc2VmdWwgdG9cclxuXHQvLyBkaXNhbWJpZ3VhdGUgbXVsdGlwbGUgdXNlcyBvbiB0aGUgc2FtZSBzaXRlXHJcblx0bG9jYWxQcmVmaXg6ICcnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlIHR3byBKYXZhc2NyaXB0IG9iamVjdHMgaW50byBhIHNpbmdsZSByZXN1bHQuXHJcbiAqIEBwYXJhbSBvYmoxIEZpcnN0IG9iamVjdFxyXG4gKiBAcGFyYW0gb2JqMiBTZWNvbmQgb2JqZWN0LiBTZWNvbmQgb2JqZWN0IHZhbHVlcyB0YWtlIHByZWNlZGVuY2UuXHJcbiAqL1xyXG5jb25zdCBtZXJnZSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuXHR2YXIgb2JqID0ge307XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMSkge1xyXG5cdFx0aWYob2JqMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMVtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoyKSB7XHJcblx0XHRpZihvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoyW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vLyBMb2NhbCBzdG9yYWdlIGFkZHJlc3MgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHdoaWxlIGNvbm5lY3RlZFxyXG5jb25zdCBUb2tlblN0b3JhZ2UgPSAnX245czVSeWc4d2EnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb0Nvbm5lY3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cclxuXHRsZXQgdG9rZW4gPSAnJztcclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZS5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gVGlsbCB3ZSBrbm93IG90aGVyd2lzZVxyXG5cdFx0dGhhdC5zdGF0ZSA9IFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEO1xyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBTZWUgaWYgdGhlcmUgaXMgYSB0b2tlbiBpbiB0aGUgY3VycmVudCBVUkxcclxuXHRcdC8vXHJcblx0XHRjb25zdCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0XHRjb25zdCByZSA9IC8jdG9rZW49KC4qKSQvO1xyXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IGhyZWYubWF0Y2gocmUpO1xyXG5cdFx0aWYobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0dG9rZW4gPSBtYXRjaGVzWzFdO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRcdH1cclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gSXMgdGhlcmUgYSB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlP1xyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHR0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcclxuXHRcdGlmKHRva2VuICE9PSBudWxsICYmIHRva2VuLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhhdC5zdGF0ZSA9IFRyZWxsb0Nvbm5lY3QuQ09OTkVDVEVEO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXV0aG9yaXplIHdpdGggVHJlbGxvXHJcblx0ICpcclxuXHQgKiBSZWRpcmVjdHMgdG8gdGhlIFRyZWxsbyBhdXRob3JpemF0aW9uIGVuZHBvaW50LCB3aGljaCByZWRpcmVjdHMgYmFja1xyXG5cdCAqIHRvIHRoaXMgcGFnZSBhZnRlciBhdXRob3JpemF0aW9uIHdpdGggdGhlIHRva2VuIGluIHRoZSBVUkwuXHJcblx0ICovXHJcblx0dGhpcy5hdXRob3JpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IHJldHVybl91cmwgPSBlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0Y29uc3QgdXJsID0gYCR7b3B0aW9ucy5hdXRoRW5kcG9pbnR9LyR7b3B0aW9ucy52ZXJzaW9ufS9hdXRob3JpemU/ZXhwaXJhdGlvbj1uZXZlciZuYW1lPSR7b3B0aW9ucy5uYW1lfSZgICtcclxuXHRcdFx0YGNhbGxiYWNrX21ldGhvZD1mcmFnbWVudCZzY29wZT1yZWFkJnJlc3BvbnNlX3R5cGU9dG9rZW4ma2V5PSR7b3B0aW9ucy5rZXl9JnJldHVybl91cmw9JHtyZXR1cm5fdXJsfWA7XHJcblx0XHR3aW5kb3cubG9jYXRpb24gPSB1cmw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNjb25uZWN0IGZyb20gVHJlbGxvLlxyXG5cdCAqXHJcblx0ICogVGhpcyBmb3JnZXRzIHRoZSB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlLlxyXG5cdCAqXHJcblx0ICovXHJcblx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSk7XHJcblx0XHR0b2tlbiA9ICcnO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybSBhIEdFVCBxdWVyeSBmb3IgVHJlbGxvXHJcblx0ICogQHBhcmFtIHVybCBUaGUgYm9hcmQgVVJMIGFmdGVyIHRoZSB2ZXJzaW9uLCBsaWtlIFwiL21lbWJlci9tZS9ib2FyZHM/ZmllbGRzPWFsbFwiXHJcblx0ICogQHBhcmFtIHN1Y2Nlc3MgRnVuY3Rpb24gY2FsbGVkIG9uIHN1Y2Nlc3Mgd2l0aCBkYXRhIGFyZ3VtZW50XHJcblx0ICogQHBhcmFtIGZhaWx1cmUgRnVuY3Rpb24gY2FsbGVkIG9uIGZhaWx1cmUgd2l0aCBkYXRhIGFyZ3VtZW50XHJcblx0ICogQHBhcmFtIG1zZyBPcHRpb25hbCBlbGVtZW50IHRvIHB1dCByYXRlIGxpbWl0aW5nIG1lc3NhZ2UgaW50b1xyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24odXJsLCBzdWNjZXNzLCBmYWlsdXJlLCBtc2cpIHtcclxuXHJcblx0XHRsZXQgdHJpZXMgPSAxO1xyXG5cclxuXHRcdGxldCBtYXh0cmllcyA9IDU7ICAvLyBNYXhpbXVtIG51bWJlciBvZiB0cmllc1xyXG5cdFx0bGV0IGJhY2tvZmYgPSAxMDsgICAvLyBzZWNvbmRzXHJcblx0XHRsZXQgYmFja29mZkluY3JlYXNlID0gMS4yNTsgLy8gQW1vdW50IHRvIGluY3JlYXNlIGJhY2tvZmYgYWZ0ZXIgZWFjaCB0cnlcclxuXHJcblx0XHRmdW5jdGlvbiB0cmVsbG9HZXQoKSB7XHJcblx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHRcdHJlcXVlc3Qub3BlbignR0VUJywgYCR7b3B0aW9ucy5hcGlFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259LyR7dXJsfSZrZXk9JHtvcHRpb25zLmtleX0mdG9rZW49JHt0b2tlbn1gLCB0cnVlKTtcclxuXHJcblx0XHRcdHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG5cdFx0XHRcdFx0Ly8gU3VjY2VzcyFcclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoZGF0YSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIFdlIHJlYWNoZWQgb3VyIHRhcmdldCBzZXJ2ZXIsIGJ1dCBpdCByZXR1cm5lZCBhbiBlcnJvclxyXG5cdFx0XHRcdFx0ZmFpbHVyZSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYoK3JlcXVlc3Quc3RhdHVzID09PSA0MjkgJiYgdHJpZXMgPCBtYXh0cmllcykge1xyXG5cdFx0XHRcdFx0dHJpZXMrKztcclxuXHRcdFx0XHRcdGlmKG1zZyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdG1zZy5pbm5lclRleHQgPSBcIlJhdGUgbGltaXRlZCwgYXR0ZW1wdCBcIiArIHRyaWVzICsgXCIgYWZ0ZXIgXCIgK1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tvZmYudG9GaXhlZCgwKSArIFwiIHNlY29uZHNcIjtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmVsbG9HZXQoKTtcclxuXHRcdFx0XHRcdFx0fSwgYmFja29mZiAqIDEwMDApO1xyXG5cdFx0XHRcdFx0XHRiYWNrb2ZmICo9IGJhY2tvZmZJbmNyZWFzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZmFpbHVyZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJlcXVlc3Quc2VuZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyZWxsb0dldCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5UcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRCA9ICdEJztcclxuVHJlbGxvQ29ubmVjdC5DT05ORUNURUQgPSAnQyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmVsbG9Db25uZWN0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFaMUpSRUZVZU5xa2tyMU9Ba0VReCtmdWhrUGdrSzhnaFlaWUdQem83R2pGeE1KZVE3VFF6bGpoR3hoczlBMk1oWTBWMm11TWlmb0FKcGFRR0IrQXcwTlBqdU9BKzNKMzRlZzhNRTd5VDJZMysvdnY3T3h3cnV2Q2Z3TDNUK3JBODN3TUVjdGtYU1RLakdGa29vcGxXY2VPNDN5ajQ5aEFWRjdOQlVyRmpXbEl4d1ZmK2tPMU01V0hWdW1sYXRMbEVhL3JPaEFWdDljamtKQmNJTTYrb21lMkNtSEdVQlkxVGFOT21WU01ad2NtaVZSTUFNS3hwMks3M1dLYjVEMFRHOURHZXh6cWVvY2x0bTB6ZVdHYUppMFRPaDJENWJZOU1CY0VCRW1Td09PdzIrMk9LcURLN3p6NTNuNXpsb05lcndjZWg1Ymxqc295akI1a3N3WC9mOGNHK1hZQlBBNDVEbGxpR0gxU1ZoK3VUOE8rQm9veVJRdzQ4RGd5UHlHVzlQc09CQUlpdEZvZFh3TlJEQTdCQVllaUdCMDJSNlRMaVVmWTR6QVlaSW1zcUh3bW5SQW5ndVdtQ1lTVDJjVzY4Z3F6Uzd0elh4cmtGK2RERUkwZ2E5SnZVbFNBcTlzMjFKdjhaZTF4NzU0akpzbElQTGV3c25aeEtDV1hOd0c0bVRGajFHaC8xdTZxendmbnV2cjJUZzFvTjZKL2FzQWc2R1JwUHdJTUFGY0F6YXdWelFSNEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQWR0SlJFRlVlTnFrVXpzdkJGRVVQak56WmhZN2F6M0NGaDRSa2ZXcU5LSkZvbERveUlhQ1RsUjBTcUdoRXAwb05LcWxFZ2tSQ1g2QVJJZEVaTFdXd2RyWnNZOTV1ZmV1TzNac3Nnb24rWExQNnp0ejdqbDNCTmQxNFQrQ2MydFBJSXBpR0JGWGlSMGppUHpCU1JMRUxjdGFjUnpuQXgzSEJvTFZnYWk4R0J1cmhhWTZxU0w3SldWSDRtZnB4YXRiazVwTG9tRVlRQkNiR2cxQ3Zlb0NxVndSTkdkeXBJWnhLQmQxWGFlVklvMWhrU1dVeXNUU0RUdVB0dnA5L3Nhd0JJVEhyb3FaVEpvNXlYM0tDdkRZYno4ZFBJK2hZWHd5eGJadEJpNm1hUUtQSlJLUEpGWXNJa2tJcXFwNk1jemxjbDRIRkVQVEYyV0RtMXkrOS9TRGpTams4M25nUExRczEyc3JtODFEZS91SWw1eEluTE96czNQMForLzRUTll1QWVlaElDQlRzdGtDYWFzQSsrczFYdkpnckJqYlgvOVpyYVpWa1FJQ2NCNTVQOVZNS1JRY2tHVUYwdW5Qa3E4Vlk2VStSUW40WXFnb29lL2hLTlQwM2IydGJaQ2RzaXlVellYek1CQmdTbEpMaVpHbWVzV1hkTGdwZjYvVDlML2xWeE1JTDhrK2JHalgwTkl6MC9xdXcxQjNSeldFZ3NpR1ZCd1VNSENiUWtzQjdCMW40T2xWM0wwN256Mmx2VFVFNjZKZGZjTTdDMnBEN3ppQTBGejVYM0tmTTI5M0o3ZVg4OXRHNnY2QkZxRFRDSlVONEcraEwwdi9FbUFBb05YbEc5N3ZuSG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0ICcuL3RyZWxsby5zY3NzJztcclxuXHJcbmltcG9ydCB7VHJlbGxvU3ByaW50ZXJ9IGZyb20gJy4vc3JjL1RyZWxsb1NwcmludGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb1NwcmludGVyO1xyXG5leHBvcnQge1RyZWxsb1NwcmludGVyfTtcclxuIiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gQm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IHtVcGRhdGV9IGZyb20gJy4vVXBkYXRlJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24oZGF0YSwgb3B0aW9ucykge1xyXG5cclxuXHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHR0aGlzLmxpc3RzID0gW107XHJcblx0dGhpcy5tZW1iZXJzID0ge307XHJcblx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcblx0dGhpcy5maW5kX2NhcmQgID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNhcmQgPSB0aGlzLmxpc3RzW2ldLmZpbmRfY2FyZChpZCk7XHJcblx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2FyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hZGRfbWVtYmVyID0gZnVuY3Rpb24obWVtYmVyKSB7XHJcblx0XHR0aGlzLm1lbWJlcnNbbWVtYmVyLmlkXSA9IG1lbWJlcjtcclxuXHR9XHJcbn1cclxuXHJcbkJvYXJkLmZldGNoID0gZnVuY3Rpb24odHJlbGxvLCBuYW1lLCBvcHRpb25zLCBtc2csIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcclxuXHRtc2cuaW5uZXJUZXh0ID0gJ0ZldGNoaW5nIGJvYXJkICcgKyBuYW1lO1xyXG5cclxuXHQvLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgb3BlbiBhc3luYyBjYWxscyB0aGVyZSBhcmUgcmlnaHQgbm93XHJcblx0bGV0IGFjdGl2ZSA9IDA7XHJcblxyXG5cdC8vIFdpbGwgYmUgc2V0IHRvIHBvaW50IHRvIGEgbmV3IEJvYXJkIG9iamVjdFxyXG5cdGxldCBib2FyZCA9IG51bGw7XHJcblxyXG5cdGFzeW5jX3N0YXJ0KCk7XHJcblx0dHJlbGxvLmdldChcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIixcclxuXHRcdChkYXRhKSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyAgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGJvYXJkRGF0YSA9IGRhdGFbaV07XHJcblx0XHRcdFx0aWYoYm9hcmREYXRhLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHQvLyBXZSBoYXZlIGZvdW5kIHRoZSBib2FyZCAoaWYgbm90IGNsb3NlZClcclxuXHRcdFx0XHRcdGlmKCFib2FyZERhdGEuY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgYm9hcmQgb2JqZWN0XHJcblx0XHRcdFx0XHRcdGJvYXJkID0gbmV3IEJvYXJkKGJvYXJkRGF0YSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbWVtYmVyc2hpcFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9tZW1iZXJzaGlwKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBsaXN0cyBmb3IgdGhlIGJvYXJkXHJcblx0XHRcdFx0XHRcdGZldGNoX2xpc3RzKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoYm9hcmQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZpbmQgVHJlbGxvIGJvYXJkIFwiICsgbmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdH0sXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBib2FyZHNcIilcclxuXHRcdH0sXHJcblx0XHRtc2dcclxuXHQpXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIHRoZSBtZW1iZXJzaGlwIG9mIHRoZSBib2FyZC5cclxuXHQgKiBAcGFyYW0gYm9hcmQgQm9hcmQgdG8gZmV0Y2ggZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfbWVtYmVyc2hpcChib2FyZCkge1xyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL21lbWJlcnM/ZmllbGRzPWFsbFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG1lbWJlckRhdGEpIHtcclxuXHRcdFx0XHRcdHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyKGJvYXJkLCBtZW1iZXJEYXRhKTtcclxuXHRcdFx0XHRcdGJvYXJkLmFkZF9tZW1iZXIobWVtYmVyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBtZW1iZXJzaGlwXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGZldGNoX2xpc3RzKGJvYXJkKSB7XHJcblx0XHRtc2cuaW5uZXJUZXh0ID0gXCJGZXRjaGluZyBsaXN0cyBmb3IgXCIgKyBuYW1lO1xyXG5cclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkcy9cIiArIGJvYXJkLmlkICsgXCIvbGlzdHM/ZmlsdGVyPW9wZW5cIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihsaXN0RGF0YSkge1xyXG5cdFx0XHRcdFx0aWYoIWxpc3REYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGlzdCA9IG5ldyBMaXN0KGJvYXJkLCBsaXN0RGF0YSk7XHJcblx0XHRcdFx0XHRcdGJvYXJkLmxpc3RzLnB1c2gobGlzdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZldGNoX2NhcmRzKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBsaXN0c1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIGFsbCBjYXJkcyBhcyBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHdlIGFyZSBmZXRjaGluZyBmb3JcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBmZXRjaF9jYXJkcyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgY2FyZHNcIjtcclxuXHJcblx0XHQvLyBDb2xsZWN0IHVwIGFsbCBVUkxzIGZvciBhbGwgb2YgdGhlIGxpc3RzXHJcblx0XHR2YXIgdXJscyA9ICcnO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8Ym9hcmQubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGxpc3QgPSBib2FyZC5saXN0c1tpXTtcclxuXHRcdFx0aWYodXJscy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dXJscyArPSAnLCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dXJscyArPSBcIi9saXN0cy9cIiArIGxpc3QuaWQgKyBcIi9jYXJkcy9vcGVuXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gR2V0IGdldCBpdFxyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYmF0Y2g/dXJscz1cIiArIHVybHMsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBMb29wIG92ZXIgdGhlIHJlc3VsdCBmb3IgZWFjaCBwcm92aWRlZCBVUkxcclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aCAmJiBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdFx0XHRjb25zdCBjYXJkc0RhdGEgPSBkYXRhW2ldWzIwMF07XHJcblxyXG5cdFx0XHRcdFx0Y2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oY2FyZERhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYoIWNhcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChib2FyZCwgbGlzdCwgY2FyZERhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMuYWZ0ZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGNhcmQuY3JlYXRlZC5nZXRUaW1lKCkgLyAxMDAwID4gb3B0aW9ucy5hZnRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmZXRjaF9hY3Rpb25zKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkc1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9hY3Rpb25zKGJvYXJkKSB7XHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZC9cIiArIGJvYXJkLmlkICsgXCIvYWN0aW9ucz9maWx0ZXI9Y29tbWVudENhcmQsdXBkYXRlQ2FyZDppZExpc3QmbGltaXQ9MTAwMFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdFx0XHRcdFx0aWYoIWFjdGlvbi5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYoYWN0aW9uLnR5cGUgPT09IFwiY29tbWVudENhcmRcIikge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBjb21tZW50ID0gbmV3IENvbW1lbnQoYm9hcmQsIGNhcmQsIGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJkLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSAndXBkYXRlQ2FyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gbmV3IFVwZGF0ZShib2FyZCwgY2FyZCwgYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcmQudXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRib2FyZC5saXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcclxuXHRcdFx0XHRcdGxpc3QuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcblx0XHRcdFx0XHRcdGNhcmQuc29ydF91cGRhdGVzKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmQgaW5mb3JtYXRpb25cIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gYXN5bmNfc3RhcnQoKSB7XHJcblx0XHRhY3RpdmUrKztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFzeW5jX2VuZCgpIHtcclxuXHRcdGFjdGl2ZS0tO1xyXG5cdFx0aWYoYWN0aXZlID09PSAwKSB7XHJcblx0XHRcdHN1Y2Nlc3MoYm9hcmQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQm9hcmQucHJvdG90eXBlLmZpbmRfbGlzdCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbGlzdCA9IHRoaXMubGlzdHNbaV07XHJcblx0XHRpZihsaXN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFN0YW5kYXJkIFRyZWxsbyBib2FyZCB2aWV3XHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuL0RhdGFWaWV3JztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcihsZXQgbGlzdCBvZiBib2FyZC5saXN0cykge1xyXG5cdFx0XHRwcmVzZW50TGlzdCh2aWV3LCBsaXN0KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXNlbnRMaXN0ID0gKHZpZXcsIGxpc3QpID0+IHtcclxuICAgIFx0Y29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRoZWFkZXIuaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xyXG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgXHRjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcclxuICAgIFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFx0dmlldy5hcHBlbmRDaGlsZChleHBhbmRlcik7XHJcblxyXG4gICAgXHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIFx0XHRpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHRcdFx0VXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRcdFx0VXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICBcdGxldCBjb3VudCA9IGxpc3QuY291bnRfbWVtYmVycygpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNhcmRzOjwvZW0+WycgKyBsaXN0LmNhcmRzLmxlbmd0aCArICddICc7XHJcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudCkge1xyXG5cdFx0ICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KGMpKSB7XHJcblx0XHRcdCAgICBtZW1iZXJzICs9IGNvdW50W2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50W2NdLmNudCArICddJm5ic3A7Jm5ic3A7JztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnN0IGNvdW50RWwgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKGNvdW50RWwpO1xyXG5cdCAgICBjb3VudEVsLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cdCAgICBmb3IobGV0IGNhcmQgb2YgbGlzdC5jYXJkcykge1xyXG5cdCAgICBcdHByZXNlbnRDYXJkKGV4cGFuZGVyLCBjYXJkKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50Q2FyZCA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gSGVhZGluZ1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY2FyZC5jcmVhdGVkKTtcclxuXHJcblx0XHRsZXQgY2FyZERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jYXJkJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcblx0XHRjYXJkRGl2LmlubmVySFRNTCA9IGA8aDQ+PHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHtjYXJkLm5hbWV9PC9oND5gO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gTWVtYmVyc1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgbWVtYmVycyA9ICcnO1xyXG5cdCAgICBmb3IobGV0IGlkIG9mIGNhcmQubWVtYmVycykge1xyXG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbaWRdO1xyXG5cdFx0ICAgIGlmKG1lbWJlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQgICAgbWVtYmVycyArPSAnIC8gJztcclxuXHRcdCAgICB9XHJcblx0XHQgICAgbWVtYmVycyArPSAnPHNwYW4+JyArIG1lbWJlci5uYW1lICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgbWVtYmVyc1AgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNhcmQtbWVtYmVycycpXHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQobWVtYmVyc1ApO1xyXG5cdCAgICBtZW1iZXJzUC5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIERlc2NyaXB0aW9uXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBkZXNjID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWRlc2NyaXB0aW9uJyk7XHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcblx0ICAgIGRlc2MuaW5uZXJIVE1MID0gY2FyZC5kZXNjO1xyXG5cclxuXHQgICAgcHJlc2VudENvbW1lbnRzKGNhcmREaXYsIGNhcmQpO1xyXG5cdCAgICBwcmVzZW50VXBkYXRlcyhjYXJkRGl2LCBjYXJkKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJlc2VudENhcmQgPSBwcmVzZW50Q2FyZDtcclxuXHJcbiAgICBsZXQgcHJlc2VudENvbW1lbnRzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLmNvbW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGNvbW1lbnREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY29tbWVudHMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xyXG5cclxuXHRcdGZvcihsZXQgY29tbWVudCBvZiBjYXJkLmNvbW1lbnRzKSB7XHJcblx0XHRcdGxldCBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbY29tbWVudC5tZW1iZXJdO1xyXG5cdFx0XHRsZXQgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0XHRsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY29tbWVudC5kYXRlKTtcclxuXHJcblx0XHRcdGxldCBoNSA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRcdGg1LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke21lbWJlck5hbWV9YDtcclxuXHJcblx0XHRcdGxldCB0ZXh0RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuXHRcdFx0dGV4dERpdi5pbm5lckhUTUwgPSBjb21tZW50LnRleHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRVcGRhdGVzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLnVwZGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgdXBkYXRlRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXVwZGF0ZXMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHVwZGF0ZURpdik7XHJcblxyXG5cdCAgICBmb3IobGV0IHVwZGF0ZSBvZiBjYXJkLnVwZGF0ZXMpIHtcclxuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW3VwZGF0ZS5tZW1iZXJdO1xyXG5cdFx0ICAgIHZhciBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcblx0XHQgICAgdmFyIGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHVwZGF0ZS5kYXRlKTtcclxuXHRcdCAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdCAgICB1cGRhdGVEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGRhdGUgKyAnPC9zcGFuPiAnICsgbWVtYmVyTmFtZSArXHJcblx0XHRcdCAgICAnIG1vdmVkIGZyb20gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QmVmb3JlICtcclxuXHRcdFx0ICAgICc8L3NwYW4+IHRvIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEFmdGVyICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5Cb2FyZFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5Cb2FyZFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQm9hcmRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QsIGRhdGEpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5uYW1lKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRlc2MgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGVzYykucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xyXG4gICAgICAgICc8L3A+JztcclxuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaWQuc3Vic3RyKDAsIDgpLCAxNikgKiAxMDAwKTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSBbXTtcclxuXHJcbiAgICBkYXRhLmlkTWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgdGhhdC5tZW1iZXJzLnB1c2goaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgdGhpcy51cGRhdGVzID0gW107XHJcbn1cclxuXHJcbkNhcmQucHJvdG90eXBlLnNvcnRfdXBkYXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy51cGRhdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGEuZGF0ZSA9PSBiLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgdGhlIGxhc3QgdGltZSB0aGlzIGNhcmQgd2FzIG1vdmVkLlxyXG4gKiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gYSBjb21wbGV0ZWQgY2FyZCB3YXNcclxuICogbW92ZWQgdG8gQ29tcGxldGVkLlxyXG4gKi9cclxuQ2FyZC5wcm90b3R5cGUuZmluYWxfdGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy51cGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGgtMV0uZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVtYmVycyBmcm9tIGEgY29sbGVjdGlvbiBvZiBjYXJkcy5cclxuICogQHBhcmFtIGJvYXJkIEJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gbGlzdCBhcnJheSBvZiBDYXJkIG9iamVjdHNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggaWQgYXMgcHJvcGVydHkgdG8gb2JqZWN0IHtjbnQ6ID8sIG1lbWJlcjogP31cclxuICovXHJcbkNhcmQuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0KSB7XHJcbiAgICB2YXIgY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICAgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkobWVtYmVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXS5jbnQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50W21lbWJlci5pZF0gPSB7Y250OiAxLCBtZW1iZXI6IG1lbWJlcn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBjb21tZW50IG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuLyoqXHJcbiBBcnJheVxyXG4gKFxyXG4gW2lkXSA9PiA1N2VlYzFjYTIyNjg0NjQ2YjExOTNhYmRcclxuIFtpZE1lbWJlckNyZWF0b3JdID0+IDU3ZWMxYmRhZmVlZGNiYmM3M2Q2MDBkMVxyXG4gW2RhdGFdID0+IEFycmF5XHJcbiAoXHJcbiBbbGlzdF0gPT4gQXJyYXlcclxuIChcclxuIFtuYW1lXSA9PiBEZXNpZ25cclxuIFtpZF0gPT4gNTdlOTIwYTJiMzQ1MTgyMDNmZDVmMzE5XHJcbiApXHJcblxyXG4gW2JvYXJkXSA9PiBBcnJheVxyXG4gKFxyXG4gW3Nob3J0TGlua10gPT4gaTllWEU0eUpcclxuIFtuYW1lXSA9PiBQcm9qZWN0IDEgVGVhbTogQXJib1xyXG4gW2lkXSA9PiA1N2U5MjA0YWMzZjMyM2YxNzg1ZDdiZTRcclxuIClcclxuXHJcbiBbY2FyZF0gPT4gQXJyYXlcclxuIChcclxuIFtzaG9ydExpbmtdID0+IEZnZ3ZkNG5YXHJcbiBbaWRTaG9ydF0gPT4gMjFcclxuIFtuYW1lXSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiBbaWRdID0+IDU3ZWVjMDc3NmZkMDA1ZjdiODFjODIzOVxyXG4gKVxyXG5cclxuIFt0ZXh0XSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiApXHJcblxyXG4gW3R5cGVdID0+IGNvbW1lbnRDYXJkXHJcbiBbZGF0ZV0gPT4gMjAxNi0wOS0zMFQxOTo0OTozMC45NzRaXHJcbiBbbWVtYmVyQ3JlYXRvcl0gPT4gQXJyYXlcclxuIChcclxuIFtpZF0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXHJcbiBbYXZhdGFySGFzaF0gPT5cclxuIFtmdWxsTmFtZV0gPT4gQnJpdHRhbnkgR2FsbGllcnNcclxuIFtpbml0aWFsc10gPT4gQkdcclxuIFt1c2VybmFtZV0gPT4gYnJpdHRhbnlnYWxsaWVyczFcclxuIClcclxuICogQHBhcmFtIGJvYXJkXHJcbiAqIEBwYXJhbSBjYXJkXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgIHRoaXMubWVtYmVyID0gZGF0YS5pZE1lbWJlckNyZWF0b3I7XHJcbiAgICB0aGlzLnRleHQgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGF0YS50ZXh0KS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXHJcbiAgICAgICAgJzwvcD4nO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGEuZGF0ZSkpO1xyXG59IiwiLypcclxuICogQmFzZSBvYmplY3QgZm9yIHZpZXdzIG9mIFRyZWxsbyBkYXRhLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhVmlldyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuRGF0YVZpZXcucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7fVxyXG5cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2Nvbm5lY3RlZFZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcclxuXHQvLyBFbnN1cmUgZW1wdHlcclxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XHJcblxyXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcclxuXHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgdG8gVHJlbGxvJztcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0cmVsbG8uYXV0aG9yaXplKCk7XHJcblx0fSlcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmNhcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5jYXJkc19ieV9pZCA9IHt9O1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5hZGRfY2FyZCA9IGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuICAgIHRoaXMuY2FyZHNfYnlfaWRbY2FyZC5pZF0gPSBjYXJkO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5maW5kX2NhcmQgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5jYXJkc19ieV9pZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkc19ieV9pZFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBDYXJkLmNvdW50X21lbWJlcnModGhpcy5ib2FyZCwgdGhpcy5jYXJkcyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL0JvYXJkJztcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gJy4vQm9hcmRWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRWaWV3fSBmcm9tIFwiLi9TcHJpbnRzL1NwcmludFZpZXdcIjtcclxuaW1wb3J0IHtTcHJpbnRUYWJsZVZpZXd9IGZyb20gJy4vU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xyXG5cdC8vIEVuc3VyZSBlbXB0eVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcclxuXHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xyXG5cclxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnRGlzY29ubmVjdCc7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dHJlbGxvLmRpc2Nvbm5lY3QoKTtcclxuXHJcblx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpO1xyXG5cdH0pXHJcblxyXG5cclxuXHRsZXQgcFN0YXR1cyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tc3RhdHVzJyk7XHJcblx0cFN0YXR1cy5pbm5lclRleHQgPSAnQ29ubmVjdGluZyB0byBUcmVsbG8uLi4nO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwU3RhdHVzKTtcclxuXHJcblx0bGV0IHBNc2cgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLW1zZycpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwTXNnKTtcclxuXHJcblx0Qm9hcmQuZmV0Y2godHJlbGxvLCBvcHRpb25zLmJvYXJkLCBvcHRpb25zLCBwTXNnLCAoYm9hcmQpID0+IHtcclxuXHRcdC8vIFN1Y2Nlc3NcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ1RyZWxsbyBCb2FyZDogJyArIGJvYXJkLm5hbWU7XHJcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XHJcblxyXG5cdFx0Zm9yKGxldCB2aWV3IGluIG9wdGlvbnMudmlld3MpIHtcclxuXHRcdFx0c3dpdGNoKHZpZXcpIHtcclxuXHRcdFx0XHRjYXNlICdib2FyZCc6XHJcblx0XHRcdFx0XHRsZXQgdiA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzcHJpbnQnOlxyXG5cdFx0XHRcdFx0diA9IG5ldyBTcHJpbnRWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50KTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NwcmludFRhYmxlJzpcclxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VGFibGVWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50VGFibGUpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIChtc2cpID0+IHtcclxuXHRcdC8vIEZhaWx1cmVcclxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gbXNnO1xyXG5cdH0pO1xyXG5cclxuXHQvL3RyZWxsby5mZXRjaCgpO1xyXG5cclxufSIsIi8qXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIG1lbWJlciBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbWJlciA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG59IiwiLypcclxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBzcHJpbnQgaW4gdGhlIHNwcmludHMgYW5hbHlzaXNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50ID0gZnVuY3Rpb24oc3ByaW50cywgc3RhcnQsIGVuZCkge1xyXG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcclxuICAgIHRoaXMuc3RhcnRfbWVldGluZyA9IHN0YXJ0O1xyXG4gICAgdGhpcy5lbmRfbWVldGluZyA9IGVuZDtcclxuXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IFtdO1xyXG59XHJcblxyXG5TcHJpbnQucHJvdG90eXBlLmVuZF90aW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5lbmRfbWVldGluZy5jcmVhdGVkLmdldFRpbWUoKSArXHJcbiAgICAgICAgKHRoaXMuc3ByaW50cy5zcHJpbnRfdGltZV9zbG9wICogMTAwMCkpO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRlYW0gbWVtYmVyIHN0YXRpc3RpY3MgZm9yIGEgc3ByaW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludE1lbWJlciA9IGZ1bmN0aW9uKHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XHJcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xyXG5cclxuICAgIHRoaXMubWVldGluZ3NfY291bnQgPSAwO1xyXG4gICAgdGhpcy5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuY29tcGxldGVkX2NvdW50ID0gMDtcclxuICAgIHRoaXMuY29tcGxldGVkX3RvdGFsID0gMDtcclxuICAgIFxyXG4gICAgdGhpcy5yZXZpZXdzX2NvdW50ID0gMDtcclxuICAgIHRoaXMucmV2aWV3c190b3RhbCA9IDA7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUubWVldGluZ3NfcGVyY2VudGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy5tZWV0aW5nc19jb3VudCA8PSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCkge1xyXG4gICAgICAgIHJldHVybiAnKGluc3VmZmljaWVudCBtZWV0aW5ncyknO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZXIgPSB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkIC8gKHRoaXMubWVldGluZ3NfY291bnQgLSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCk7XHJcbiAgICBpZihwZXIgPiAxKSB7XHJcbiAgICAgICAgcGVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGVyLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUuY29tcGxldGVkX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZF90b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSB0aGlzLmNvbXBsZXRlZF9jb3VudCAvXHJcbiAgICAgICAgKHRoaXMuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMuY29tcGxldGVkX2ZhY3Rvcik7XHJcbiAgICBpZihmYWN0b3IgPiAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLnJldmlld2luZ19mYWN0b3IgPSBmdW5jdGlvbih0ZWFtU2l6ZSkge1xyXG4gICAgaWYodGhpcy5yZXZpZXdzX3RvdGFsID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZhY3RvciA9IHRoaXMucmV2aWV3c19jb3VudCAvXHJcbiAgICAgICAgKHRoaXMucmV2aWV3c190b3RhbCAvIHRlYW1TaXplICogdGhpcy5zcHJpbnRzLnJldmlld2luZ19mYWN0b3IpO1xyXG4gICAgaWYoZmFjdG9yID4gMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59IiwiLypcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0IGluIGEgdGFibGUuXHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludFRhYmxlVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQsIG9wdGlvbnMpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IGFkZEhlYWRpbmdzID0gdHJ1ZTtcclxuICAgIGlmKG9wdGlvbnMuYWRkSGVhZGluZ3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFkZEhlYWRpbmdzID0gb3B0aW9ucy5hZGRIZWFkaW5ncztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXNwcmludC10YWJsZScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGNvbnN0IHRhYmxlID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICBVdGlsLmFkZENsYXNzKHRhYmxlLCBvcHRpb25zLmNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xyXG5cdCAgICAvL1xyXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xyXG5cdCAgICBjb25zdCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzKSB7XHJcblx0XHQgICAgdGFibGVIZWFkaW5nKHRhYmxlLCBib2FyZCwgc3ByaW50cyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0ZD4nICsgZGF0YSArICc8L3RkPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0XHQgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHQgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0XHRcdCAgICB2YXIgaWQgPSBtZW1iZXIubWVtYmVyLmlkO1xyXG5cclxuXHRcdFx0ICAgIHJvd0hUTUwgPSAnJztcclxuXHJcblx0XHRcdCAgICAvLyBPdXIgc3RhdGlzdGljc1xyXG5cdFx0XHQgICAgaXRlbShib2FyZC5uYW1lKTtcclxuXHRcdFx0ICAgIGl0ZW0odGVhbVNpemUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVtYmVyLm5hbWUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfdG90YWwpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3c19jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX3RvdGFsKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpKTtcclxuXHRcdFx0ICAgIGl0ZW0oc3ByaW50cy5zcHJpbnRzLmxlbmd0aCk7XHJcblxyXG5cdFx0XHQgICAgc3ByaW50cy5zcHJpbnRzLmZvckVhY2goZnVuY3Rpb24oc3ByaW50KSB7XHJcblx0XHRcdFx0ICAgIHZhciBjbnQgPSAwO1xyXG5cdFx0XHRcdCAgICBzcHJpbnQuY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG5cdFx0XHRcdFx0ICAgIGlmKGNhcmQubWVtYmVycy5sZW5ndGggPT0gMSAmJiBjYXJkLm1lbWJlcnNbMF0gPT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0ICAgIGNudCsrO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHRcdCAgICBpdGVtKGNudCk7XHJcblx0XHRcdFx0ICAgIGl0ZW0oc3ByaW50LmNvbXBsZXRlZC5sZW5ndGgpO1xyXG5cdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHQgICAgaWYoIWlzTmFOKGFkZEhlYWRpbmdzKSkge1xyXG5cdFx0XHRcdCAgICBmb3IodmFyIGk9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgaTxhZGRIZWFkaW5nczsgaSsrKSB7XHJcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcclxuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgY29uc3QgdHIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblx0XHRcdCAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG5cdFx0XHQgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlSGVhZGluZyA9IGZ1bmN0aW9uKHRhYmxlLCBib2FyZCwgc3ByaW50cykge1xyXG4gICAgICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50cjFjbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIFV0aWwuYWRkQ2xhc3ModHIsIG9wdGlvbnMudHIxY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0aD48ZGl2PicgKyBkYXRhICsgJzwvZGl2PjwvdGg+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaXRlbShcIlRlYW1cIik7XHJcblx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdCAgICBpdGVtKFwiTWVtYmVyXCIpO1xyXG5cdCAgICBpdGVtKFwiQXR0ZW5kZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJDb21wbGV0ZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJSZXZpZXdzXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiU3ByaW50c1wiKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzID09PSB0cnVlKSB7XHJcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9YWRkSGVhZGluZ3M7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFRhYmxlVmlldztcclxuLy8vIEBlbmRjb25kXHJcblxyXG5cclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS50YWJsZV9oZWFkaW5ncyA9IGZ1bmN0aW9uKGJvYXJkLCBzcHJpbnRzKSB7XHJcblxyXG59XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0c1xyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvLyBUaGlzIHVzZXMgQm9hcmRWaWV3IHRvIGRyYXcgd2hhdCBpdCBrbm93cyBob3cgdG8gZHJhd1xyXG4gICAgY29uc3QgYm9hcmRfdmlldyA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENyZWF0ZSB0aGUgc3ByaW50IGFuYWx5c2lzXHJcblx0ICAgIC8vXHJcblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XHJcblxyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50cycpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgbGV0IGgyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdCAgICBoMi5pbm5lclRleHQgPSAnU3ByaW50cyBBbmFseXNpcyc7XHJcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxuXHRcdHByZXNlbnRfZXJyb3JzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF93YXJuaW5ncyh2aWV3LCBzcHJpbnRzKTtcclxuXHJcblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcHJlc2VudF9zcHJpbnRzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF9tZW1iZXJzKHZpZXcsIHNwcmludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X2Vycm9ycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPT09IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGVycm9ycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1lcnJvcnMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGVycm9ycyk7XHJcblxyXG5cdCAgICBlcnJvcnMuaW5uZXJIVE1MID0gJzxoMz5FcnJvcnM8L2gzPic7XHJcblxyXG5cdCAgICBmb3IobGV0IGVycm9yIG9mIHNwcmludHMuZXJyb3JzKSB7XHJcblx0ICAgIFx0bGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgXHRlcnJvcnMuYXBwZW5kQ2hpbGQocCk7XHJcblx0ICAgIFx0cC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyBlcnJvci5jb2RlICsgJzo8L3NwYW4+ICcgKyBlcnJvci5tc2c7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF93YXJuaW5ncyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRpZihzcHJpbnRzLndhcm5pbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuXHQgICAgbGV0IHdhcm5pbmdzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXdhcm5pbmdzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh3YXJuaW5ncyk7XHJcblxyXG5cdCAgICB3YXJuaW5ncy5pbm5lckhUTUwgPSAnPGgzPldhcm5pbmdzPC9oMz4nO1xyXG5cclxuXHQgICAgZm9yKGxldCB3YXJuaW5nIG9mIHNwcmludHMud2FybmluZ3MpIHtcclxuXHRcdCAgICBsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ICAgIHdhcm5pbmdzLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgd2FybmluZy5jb2RlICsgJzo8L3NwYW4+ICcgKyB3YXJuaW5nLm1zZztcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3NwcmludHMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcih2YXIgcz0xOyBzPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBzKyspIHtcclxuXHQgICAgICAgIHZhciBzcHJpbnQgPSBzcHJpbnRzLnNwcmludHNbcy0xXTtcclxuXHQgICAgICAgIHByZXNlbnRfc3ByaW50KHZpZXcsIHNwcmludHMsIHMsIHNwcmludCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9zcHJpbnQgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG51bSwgc3ByaW50KSB7XHJcblx0ICAgIGNvbnN0IGZtRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LnN0YXJ0X21lZXRpbmcuY3JlYXRlZCk7XHJcblx0ICAgIGNvbnN0IHRvRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LmVuZF9tZWV0aW5nLmNyZWF0ZWQpO1xyXG5cdCAgICBjb25zdCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIE1lbWJlciBjb3VudHMgZm9yIGNvbXBsZXRlZFxyXG5cdCAgICAvL1xyXG4gICAgICAgIGNvbnN0IGNvdW50cyA9IENhcmQuY291bnRfbWVtYmVycyhzcHJpbnRzLmJvYXJkLCBzcHJpbnQuY29tcGxldGVkKTtcclxuXHJcblx0ICAgIGxldCB0b3RhbENvbXBsZXRlZCA9IDA7XHJcblx0ICAgIGZvcihsZXQgc3ByaW50IG9mIHNwcmludHMuc3ByaW50cykge1xyXG5cdFx0ICAgIHRvdGFsQ29tcGxldGVkICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgbGV0IGNvbXBsZXRpb25GYWN0b3IgPSAwLjAwO1xyXG5cdCAgICBpZih0b3RhbENvbXBsZXRlZCA+IDApIHtcclxuXHQgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0ZWQgLyAodG90YWxDb21wbGV0ZWQgLyBzcHJpbnRzLnNwcmludHMubGVuZ3RoICogMC44KTtcclxuXHQgICAgICAgIGlmKGNvbXBsZXRpb25GYWN0b3IgPiAxKSB7XHJcblx0ICAgICAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IDE7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0aW9uRmFjdG9yLnRvRml4ZWQoMik7XHJcblxyXG5cdCAgICBjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdCAgICBoZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBjb21wbGV0ZWQgK1xyXG4gICAgICAgICAnIHRhc2tzICcgKyBjb21wbGV0aW9uRmFjdG9yICsgJyAvICcgKyBmbURhdGUgKyAnIHRvICcgKyB0b0RhdGUgK1xyXG4gICAgICAgICAnPC9zcGFuPlNwcmludDogJyArIG51bTtcclxuXHJcblx0ICAgIGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xyXG5cdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xyXG5cclxuXHQgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgaWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5zdGFydF9tZWV0aW5nKTtcclxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuZW5kX21lZXRpbmcpO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ29tcGxldGVkXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBwQ29tcGxldGVkID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb21wbGV0ZWQtaGVhZGVyJyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBDb21wbGV0ZWQpO1xyXG5cdCAgICBwQ29tcGxldGVkLmlubmVyVGV4dCA9ICdTcHJpbnQgQ29tcGxldGVkIFRhc2tzJztcclxuXHJcblx0ICAgIGxldCBwTWVtYmVycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocE1lbWJlcnMpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNvbXBsZXRlZDo8L2VtPlsnICsgc3ByaW50LmNvbXBsZXRlZC5sZW5ndGggKyAnXSAnO1xyXG5cdCAgICBmb3IodmFyIGMgaW4gY291bnRzKSB7XHJcblx0ICAgICAgICBpZihjb3VudHMuaGFzT3duUHJvcGVydHkoYykpIHtcclxuXHQgICAgICAgICAgICBtZW1iZXJzICs9IGNvdW50c1tjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudHNbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBwTWVtYmVycy5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gUHJlc2VudCBjb21wbGV0ZWQgY2FyZHNcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKGxldCBpPTA7IGk8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbaV07XHJcblx0ICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBjb21wbGV0ZWQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfbWVtYmVycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRsZXQgbWVtYmVyc0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXJzJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChtZW1iZXJzRGl2KTtcclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0ICAgICAgICBpZihzcHJpbnRzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0ICAgICAgICAgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0ICAgICAgICAgICAgcHJlc2VudF9tZW1iZXIobWVtYmVyc0Rpdiwgc3ByaW50cywgbWVtYmVyKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHRcdHByZXNlbnRfaW5mbyhtZW1iZXJzRGl2LCBzcHJpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9tZW1iZXIgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgXHRsZXQgbWVtYmVyRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcicpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyRGl2KTtcclxuXHJcblx0ICAgIGxldCBtZWV0aW5ncyA9IHNwcmludHMubWVldGluZ3Nfc2xvcCA9PT0gMSA/ICcgbWVldGluZycgOiAnIG1lZXRpbmdzJztcclxuXHQgICAgbGV0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xyXG5cclxuXHQgICAgbWVtYmVyRGl2LmlubmVySFRNTCA9ICc8aDQ+JyArIG1lbWJlci5tZW1iZXIubmFtZSArICc8L2g0PicgK1xyXG5cclxuXHQgICAgICAgICc8cD5NZWV0aW5ncyBhdHRlbmRlZDogJyArIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCArICcvJyArIG1lbWJlci5tZWV0aW5nc19jb3VudCArXHJcblx0ICAgICAgICAnIHBlcmNlbnRhZ2U6ICcgKyBtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpICtcclxuXHQgICAgICAgICcgPGVtPllvdSBhcmUgYWxsb3dlZCB0byBtaXNzICcgKyBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgKyBtZWV0aW5ncyArICAnPC9lbT4nICtcclxuXHQgICAgICAgICc8L3A+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPlRhc2tzIGNvbXBsZXRlZDogJyArIG1lbWJlci5jb21wbGV0ZWRfY291bnQgK1xyXG5cdCAgICAgICAgJy8nICsgKG1lbWJlci5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSkudG9GaXhlZCgyKSArICcgZm9yIGEgY29tcGxldGlvbiBmYWN0b3Igb2Y6ICcgK1xyXG5cdCAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nICtcclxuXHJcblx0ICAgICAgICAnPHA+UmV2aWV3cyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIucmV2aWV3c19jb3VudCArICcgZm9yIGEgcmV2aWV3aW5nIGZhY3RvciBvZjogJyArXHJcblx0ICAgICAgICBtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfaW5mbyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRjb25zdCBpbmZvRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWluZm8nKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xyXG5cclxuICAgIFx0aW5mb0Rpdi5pbm5lckhUTUwgPSAnPHA+VGhlIGNvbXBsZXRpb24gZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5JyArXHJcblx0XHQgICAgJyB0ZWFtIG1lbWJlciBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSAnICsgKHNwcmludHMuY29tcGxldGVkX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mJyArXHJcblx0XHQgICAgJyBhbiBlcXVhbCBkaXN0cmlidXRpb24gb2YgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nICtcclxuXHRcdCAgICAnPHA+VGhlIHJldmlld2luZyBmYWN0b3IgZm9yIHRhc2tzIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgZXZlcnkgdGVhbSBtZW1iZXInICtcclxuXHRcdCAgICAnIGlzIGV4cGVjdGVkIHRvIHJldmlldyAnICsgKHNwcmludHMucmV2aWV3aW5nX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mIGFuIGVxdWFsJyArXHJcblx0XHQgICAgJyBkaXN0cmlidXRpb24gb2YgdGFza3MuIFRoaXMgZmFjdG9yIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgOTAlIG9mIHRhc2tzIHNob3VsZCcgK1xyXG5cdFx0ICAgICcgYmUgcHJvZ3JhbW1pbmcgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5TcHJpbnRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50Vmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLypcclxuICogU3ByaW50IGFuYWx5c2lzIG9mIFRyZWxsbyBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7U3ByaW50fSBmcm9tIFwiLi9TcHJpbnRcIjtcclxuaW1wb3J0IHtTcHJpbnRNZW1iZXJ9IGZyb20gXCIuL1NwcmludE1lbWJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludHMgPSBmdW5jdGlvbihib2FyZCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vLyBOdW1iZXIgb2YgbWlzc2VkIG1lZXRpbmdzIGFsbG93XHJcbiAgICB0aGlzLm1lZXRpbmdzX3Nsb3AgPSAxO1xyXG5cclxuXHJcbiAgICAvLy8gTnVtYmVyIG9mIHNlY29uZHMgYWZ0ZXIgbWVldGluZyB0aW1lIHRvIGNvbnNpZGVyIGNvbXBsZXRlZFxyXG4gICAgLy8vIGluIGEgY3VycmVudCBzcHJpbnQgaW4gc2Vjb25kcy5cclxuICAgIHRoaXMuc3ByaW50X3RpbWVfc2xvcCA9IDUgKiA2MCAqIDYwOyAgIC8vIDUgaG91cnNcclxuICAgIFxyXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIGhpcyBzaGFyZSBvZiB0YXNrc1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfZmFjdG9yID0gMC44O1xyXG4gICAgXHJcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgOTAlIG9mIHRoZSB0YXNrIGNvdW50IGluIHJldmlld3NcclxuICAgIHRoaXMucmV2aWV3aW5nX2ZhY3RvciA9IDAuOCAqIDAuOTtcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcblxyXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgIHRoaXMud2FybmluZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSB7fTtcclxuICAgIHRoaXMuc3ByaW50cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZGVzaWduID0gbnVsbDtcclxuICAgIHRoaXMucmlza3MgPSBudWxsO1xyXG4gICAgdGhpcy5tZWV0aW5ncyA9IG51bGw7XHJcbiAgICB0aGlzLnRvZG8gPSBudWxsO1xyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IG51bGw7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvcHkgb3ZlciB0aGUgbWVtYmVyc1xyXG4gICAgLy9cclxuICAgIGZvcih2YXIgaWQgaW4gYm9hcmQubWVtYmVycykge1xyXG4gICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICBpZihtZW1iZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImNzZTMzNVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXSA9IG5ldyBTcHJpbnRNZW1iZXIodGhpcywgbWVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRmluZCBhbGwgb2YgdGhlIHJlcXVpcmVkIGxpc3RzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5maW5kX2xpc3RzKCk7XHJcblxyXG4gICAgaWYodGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2U5MDAnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE9yZGVyIHRlc3RpbmdcclxuICAgIC8vXHJcbiAgICB0aGlzLm9yZGVyX3Rlc3QoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRGV0ZXJtaW5lIGF0dGVuZGFuY2VcclxuICAgIC8vXHJcbiAgICB0aGlzLm1lZXRpbmdfYXR0ZW5kYW5jZSgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb252ZXJ0IG1lZXRpbmdzIGludG8gc3ByaW50c1xyXG4gICAgLy9cclxuICAgIHRoaXMuY3JlYXRlX3NwcmludHMoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gU29ydCBjb21wbGV0ZWQgaW50byBzcHJpbnRzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5zb3J0X2NvbXBsZXRlZCgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb21wbGV0ZWQgc3RhdGlzdGljc1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29tcGxldGVkX3N0YXRpc3RpY3MoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBhbGwgcmVxdWlyZWQgbGlzdHMgZXhpc3QuXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX2xpc3RzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBGaW5kIHRoZSBcIkRlc2lnblwiIGxpc3RcclxuICAgIHRoaXMuZGVzaWduID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0Rlc2lnbicpO1xyXG4gICAgaWYodGhpcy5kZXNpZ24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJSaXNrc1wiIGxpc3RcclxuICAgIHRoaXMucmlza3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnUmlza3MnKTtcclxuICAgIGlmKHRoaXMucmlza3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJNZWV0aW5nc1wiIGxpc3RcclxuICAgIHRoaXMubWVldGluZ3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnTWVldGluZ3MnKTtcclxuICAgIGlmKHRoaXMubWVldGluZ3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUbyBEb1wiIGxpc3RcclxuICAgIHRoaXMudG9kbyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUbyBEbycpO1xyXG4gICAgaWYodGhpcy50b2RvID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQWN0aXZlXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IEFjdGl2ZScpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfYWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IENvbXBsZXRlZCcpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfY29tcGxldGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnQ29tcGxldGVkJyk7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDcnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBsaXN0cyBhcmUgaW4gdGhlIHJpZ2h0IG9yZGVyXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5vcmRlcl90ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuYm9hcmQub3B0aW9ucy5jYXJkcztcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxvcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQubGlzdHNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBvcmRlcltpXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZygndzAwMScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVldGluZyBhdHRlbmRhbmNlIGZvciBhIHVzZXJcclxuICovXHJcblNwcmludHMucHJvdG90eXBlLm1lZXRpbmdfYXR0ZW5kYW5jZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBtZWV0aW5nc19jb3VudCA9IHRoaXMubWVldGluZ3MuY2FyZHMubGVuZ3RoO1xyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5tZW1iZXJzW2lkXTtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfY291bnQgPSBtZWV0aW5nc19jb3VudDtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVldGluZ3MuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoYXQuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmNyZWF0ZV9zcHJpbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWVldGluZ3MgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLnNsaWNlKCk7XHJcblxyXG4gICAgbWVldGluZ3Muc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5jcmVhdGVkIDwgYi5jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5jcmVhdGVkID09PSBiLmNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8KG1lZXRpbmdzLmxlbmd0aCAtIDEpOyBpKyspIHtcclxuICAgICAgICB0aGlzLnNwcmludHMucHVzaChuZXcgU3ByaW50KHRoaXMsIG1lZXRpbmdzW2ldLCBtZWV0aW5nc1tpKzFdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLnNvcnRfY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmNhcmRzLnNsaWNlKCk7XHJcbiAgICBjb21wbGV0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgdmFyIGF0ID0gYS5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgdmFyIGJ0ID0gYi5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgaWYoYXQgPT09IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZihhdCA8IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY29tcGxldGVkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBpZ25vcmUgXCJyaXNrXCIgY2FyZHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKGNvbXBsZXRlZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInJpc2tcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gY29tcGxldGVkLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhhdC5zcHJpbnRzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGUgPD0gc3ByaW50LmVuZF90aW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaSA+PSB0aGF0LnNwcmludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gdGhhdC5zcHJpbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XHJcbiAgICAgICAgICAgIHNwcmludC5jb21wbGV0ZWQucHVzaChjb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuY29tcGxldGVkX3N0YXRpc3RpY3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb21wbGV0ZWRfY291bnQgPSAwO1xyXG4gICAgdmFyIHJldmlld3NfdG90YWwgPSAwO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzcHJpbnQgPSB0aGlzLnNwcmludHNbaV07XHJcbiAgICAgICAgY29tcGxldGVkX2NvdW50ICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IodmFyIGo9MDsgajxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb21wbGV0ZWQubWVtYmVyc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwMlwiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBubyB0ZWFtIG1lbWJlcnMgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDNcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXHJcbiAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBtb3JlIHRoYW4gb25lIHRlYW0gbWVtYmVyIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBcmUgdGhleSBhbnkgcmV2aWV3cz9cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldmlld3NfdG90YWwrKztcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbXBsZXRlZC5jb21tZW50c1swXS5tZW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXIucmV2aWV3c19jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5jb21wbGV0ZWRfdG90YWwgPSBjb21wbGV0ZWRfY291bnQ7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5yZXZpZXdzX3RvdGFsID0gcmV2aWV3c190b3RhbDtcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9tZW1iZXIgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5udW1fbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNudCA9IDA7XHJcblxyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY250O1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGNvZGUpIHtcclxuICAgIC8vIERvZXMgdGhlIGVycm9yIGFscmVhZHkgZXhpc3Q/XHJcbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmVycm9ycy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLmVycm9yc1tpXTtcclxuICAgICAgICBpZihlcnJvci5jb2RlID09PSBjb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICdlMDAxJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0Rlc2lnbidcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMic6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdSaXNrcydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMyc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdNZWV0aW5ncydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUbyBEbydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNSc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBBY3RpdmUnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDYnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQ29tcGxldGVkJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA3JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0NvbXBsZXRlZCdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTkwMCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJGYXRhbCBlcnJvcnMsIHVuYWJsZSB0byBwcm9jZWVkIHdpdGggc3ByaW50cyBhbmFseXNpc1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24oY29kZSwgbXNnKSB7XHJcbiAgICBpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBtc2d9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICd3MDAxJzpcclxuICAgICAgICAgICAgdmFyIG1zZyA9IFwiWW91ciBsaXN0cyBhcmUgbm90IGluIHRoZSBjb3JyZWN0IG9yZGVyLiBcIiArXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBleGFjdCBvcmRlciBzaG91bGQgYmU6XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgY2FyZCBvZiB0aGlzLmJvYXJkLm9wdGlvbnMuY2FyZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXNnICs9ICcsJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtc2cgKz0gJyAnICsgY2FyZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IG1zZ30pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge29wdGlvbnN9IGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuaW1wb3J0IHtEaXNjb25uZWN0ZWRWaWV3fSBmcm9tIFwiLi9EaXNjb25uZWN0ZWRWaWV3XCI7XHJcbmltcG9ydCB7TWFpblZpZXd9IGZyb20gJy4vTWFpblZpZXcnO1xyXG5pbXBvcnQge1RyZWxsb0Nvbm5lY3R9IGZyb20gJ3RyZWxsby1jb25uZWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9TcHJpbnRlciA9IGZ1bmN0aW9uKHVzZXJPcHRpb25zKSB7XHJcblx0Ly8gRGVmYXVsdCBhbmQgc3VwcGxpZWQgb3B0aW9uc1xyXG5cdGNvbnN0IG9wdHMgPSBVdGlsLm1lcmdlKG9wdGlvbnMsIHVzZXJPcHRpb25zKTtcclxuXHJcblx0Y29uc3QgdHJlbGxvID0gbmV3IFRyZWxsb0Nvbm5lY3Qob3B0cyk7XHJcblxyXG5cdFV0aWwucmVhZHkoKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRzO1xyXG5cdFx0aWYob3B0cy5zZWwubm9kZVR5cGUpIHtcclxuXHRcdFx0ZWxlbWVudHMgPSBbb3B0cy5zZWxdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdHMuc2VsKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRzd2l0Y2godHJlbGxvLnN0YXRlKSB7XHJcblx0XHRcdFx0Y2FzZSBUcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRDpcclxuXHRcdFx0XHRcdG5ldyBEaXNjb25uZWN0ZWRWaWV3KGVsZW1lbnRzW2ldLCB0cmVsbG8sIG9wdHMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRuZXcgTWFpblZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIHVwZGF0ZSBvbiBhIGNhcmRcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlID0gZnVuY3Rpb24oYm9hcmQsIGNhcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuY2FyZCA9IGNhcmQ7IFxyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIHRoaXMubWVtYmVyID0gZGF0YS5pZE1lbWJlckNyZWF0b3I7XHJcbiAgICB0aGlzLmxpc3RCZWZvcmUgPSBkYXRhLmRhdGEubGlzdEJlZm9yZS5uYW1lO1xyXG4gICAgdGhpcy5saXN0QWZ0ZXIgPSBkYXRhLmRhdGEubGlzdEFmdGVyLm5hbWU7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGEuZGF0ZSkpO1xyXG59XHJcblxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFV0aWwgPSBmdW5jdGlvbigpIHt9XHJcblxyXG5VdGlsLm1lcmdlID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG5cdHZhciBvYmogPSB7fTtcclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajIpIHtcclxuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYWxsIEhUTUwgdGFncyBmcm9tIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3RyIFN0cmluZyB0byBwcm9jZXNzXHJcbiAqIEByZXR1cm5zIHN0cmluZyB3aXRob3V0IHRhZ3NcclxuICovXHJcblV0aWwuc3RyaXBfdGFncyA9IGZ1bmN0aW9uKHN0cikge1xyXG5cdHJldHVybiBzdHIucmVwbGFjZSgvPCg/Oi58XFxuKSo/Pi9nbSwgJycpO1xyXG59XHJcblxyXG5VdGlsLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbih0eXBlLCBjbHMpIHtcclxuXHRsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcblx0aWYoY2xzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFV0aWwuYWRkQ2xhc3MoZSwgY2xzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBlO1xyXG59XHJcblxyXG5VdGlsLmFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZXMpIHtcclxuXHRjb25zdCBuYW1lcyA9IGNsYXNzTmFtZXMuc3BsaXQoJyAnKTtcclxuXHRmb3IoY29uc3QgbmFtZSBvZiBuYW1lcykge1xyXG5cdFx0aWYgKGVsLmNsYXNzTGlzdClcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0ZWwuY2xhc3NOYW1lICs9ICcgJyArIG5hbWU7XHJcblx0fVxyXG59XHJcblxyXG5VdGlsLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChlbC5jbGFzc0xpc3QpXHJcblx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcblx0ZWxzZVxyXG5cdFx0ZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxufVxyXG5cclxuVXRpbC5yZWFkeSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0aWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50ID8gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIDogZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpe1xyXG5cdFx0Zm4oKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydCBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QgdG8gYSBzdHJpbmcuXHJcbiAqXHJcbiAqIFRoaXMgdXNlcyBmb3JtYXR0aW5nIHRoYXQgaXMgc3Vic2V0IG9mIHRoZSBQSFAgZGF0ZSgpIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gZGF0ZSBEYXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gZm9ybWF0IE9wdGlvbmFsIGZvcm1hdCBzdHJpbmcgKGRlZmF1bHQgaXMgJ24tZC1ZIGg6aWEnKS5cclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcblV0aWwuZm9ybWF0RGF0ZXRpbWUgPSBmdW5jdGlvbihkYXRlLCBmb3JtYXQpIHtcclxuXHJcblx0ZnVuY3Rpb24gcGFkKGksIG4pIHtcclxuXHRcdHZhciBzID0gJycgKyBpO1xyXG5cdFx0d2hpbGUocy5sZW5ndGggPCBuKSB7XHJcblx0XHRcdHMgPSAnMCcgKyBzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblx0aWYoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdGZvcm1hdCA9ICduLWQtWSBoOmlhJztcclxuXHR9XHJcblxyXG5cdHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHR2YXIgaG91ciA9IGhvdXJzO1xyXG5cdHZhciBhbSA9ICdhJztcclxuXHRpZihob3VycyA9PSAwKSB7XHJcblx0XHRob3VyID0gMTI7XHJcblx0fSBlbHNlIGlmKGhvdXJzID09IDEyKSB7XHJcblx0XHRhbSA9ICdwJztcclxuXHR9IGVsc2UgaWYoaG91cnMgPiAxMikge1xyXG5cdFx0aG91ciA9IGhvdXJzIC0gMTI7XHJcblx0XHRhbSA9ICdwJztcclxuXHR9XHJcblxyXG5cdHZhciBzdHIgPSAnJztcclxuXHRmb3IodmFyIGk9MDsgaTxmb3JtYXQubGVuZ3RoOyBpKyspIHtcclxuXHRcdHN3aXRjaChmb3JtYXQuY2hhckF0KGkpKSB7XHJcblx0XHRcdGNhc2UgJ24nOlxyXG5cdFx0XHRcdHN0ciArPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnbSc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2QnOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXREYXRlKCksIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnWSc6XHJcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2cnOlxyXG5cdFx0XHRcdHN0ciArPSBob3VyO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaCc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChob3VyLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2knOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRNaW51dGVzKCksIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncyc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldFNlY29uZHMoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdhJzpcclxuXHRcdFx0XHRzdHIgKz0gYW07XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHN0ciArPSBmb3JtYXQuY2hhckF0KGkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0cjtcclxufSIsIlxyXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcclxuXHRzZWw6ICcjdHJlbGxvJyxcclxuXHR2ZXJzaW9uOiAxLFxyXG5cdFwiYXBpRW5kcG9pbnRcIjogXCJodHRwczovL2FwaS50cmVsbG8uY29tXCIsXHJcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0a2V5OiAnJyxcclxuXHJcblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xyXG5cdC8vIGRpc2FtYmlndWF0ZSBtdWx0aXBsZSB1c2VzIG9uIHRoZSBzYW1lIHNpdGVcclxuXHRsb2NhbFByZWZpeDogJycsXHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGJvYXJkIHdlIGFyZSBmZXRjaGluZ1xyXG5cdGJvYXJkOiAnJyxcclxuXHJcblx0LyoqIE9wdGlvbmFsOiBPbmx5IGNvbnNpZGVyIG1lZXRpbmdzIGFmdGVyIHRoaXMgdGltZSAoVW5peCB0aW1lKSAqL1xyXG5cdGFmdGVyOiBudWxsLFxyXG5cclxuXHR2aWV3czoge1xyXG5cdFx0J2JvYXJkJzoge30sXHJcblx0XHQnc3ByaW50Jzoge31cclxuXHR9LFxyXG5cclxuXHRuYW1lOiAnVHJlbGxvU3ByaW50ZXInLFxyXG5cclxuXHQvLyBEZWZhdWx0IGNhcmRzXHJcblx0Y2FyZHM6IFsnRGVzaWduJywgJ1Jpc2tzJywgJ01lZXRpbmdzJyxcclxuXHRcdCdUbyBEbycsICdUaGlzIFNwcmludCBBY3RpdmUnLFxyXG5cdFx0J1RoaXMgU3ByaW50IENvbXBsZXRlZCcsICdDb21wbGV0ZWQnXVxyXG59O1xyXG5cclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZhNTNhY2U2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXHJcbmltcG9ydCB7VHJlbGxvRmFjdG9yeX0gZnJvbSAnLi9qcy9UcmVsbG9GYWN0b3J5JztcclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcbiIsImltcG9ydCB7VHJlbGxvU3ByaW50ZXJWaWV3fSBmcm9tICcuL1RyZWxsb1NwcmludGVyVmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5UcmVsbG9GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0c2l0ZS5zdGFydCggKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXRyZWxsby1zcHJpbnRlcicpO1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bmV3IFRyZWxsb1NwcmludGVyVmlldyhzaXRlLCBlbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iLCJpbXBvcnQgVHJlbGxvU3ByaW50ZXIgZnJvbSBcInRyZWxsby1zcHJpbnRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyVmlldyA9IGZ1bmN0aW9uKHNpdGUsIGVsZW1lbnQpIHtcclxuXHRjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LmlubmVyVGV4dCk7XHJcblx0ZWxlbWVudC5pbm5lclRleHQgPSAnJztcclxuXHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuXHR2YXIgb3B0aW9ucyA9IHtcclxuXHRcdHNlbDogZWxlbWVudCxcclxuXHRcdGtleToganNvbi5rZXksXHJcblx0XHRib2FyZDoganNvbi50ZWFtLFxyXG5cdFx0dmlld3M6IGpzb24udmlld3MsXHJcblx0XHRhZnRlcjoganNvbi5hZnRlclxyXG5cdH07XHJcblxyXG5cdGlmKGpzb24uY2FyZHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0b3B0aW9ucy5jYXJkcyA9IGpzb24uY2FyZHM7XHJcblx0fVxyXG5cclxuXHRuZXcgVHJlbGxvU3ByaW50ZXIob3B0aW9ucyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
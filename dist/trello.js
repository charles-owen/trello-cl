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
/******/ 	var hotCurrentHash = "ee7e123ab28abbcac198";
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
exports.push([module.i, "div.trello-sprinter {\n  margin: 0;\n}\n\ndiv.trello-sprinter h2 {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n  font-size: 1em;\n  margin: 0;\n}\n\ndiv.trello-sprinter p.trello-status {\n  text-align: center;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\n\ndiv.trello-sprinter p.trello-msg {\n  text-align: center;\n  font-style: italic;\n  font-size: 0.9em;\n  padding: 0.25em 0;\n  background: #026AA7;\n  color: white;\n}\n\ndiv.trello-sprinter p.center {\n  text-align: center;\n}\n\ndiv.trello-sprinter div.trello-view {\n  background: white;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-view h3 {\n  border-top: 2px solid black;\n  margin: 0;\n  padding: 0.25em 0 0.25em 20px;\n}\n\ndiv.trello-sprinter div.trello-view h3 span.date {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 0.7em;\n  float: right;\n  padding-top: 0.25em;\n}\n\ndiv.trello-sprinter div.trello-view p.trello-completed-header {\n  text-align: center;\n  font-weight: bold;\n  background: black;\n  color: deepskyblue;\n}\n\ndiv.trello-sprinter .trello-plus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\ndiv.trello-sprinter .trello-minus {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\ndiv.trello-sprinter .trello-plus,\ndiv.trello-sprinter .trello-minus {\n  background-repeat: no-repeat;\n  background-position: left center;\n  background-size: 16px 16px;\n  cursor: pointer;\n}\n\ndiv.trello-sprinter div.trello-expand {\n  position: relative;\n  display: none;\n  overflow: auto;\n  background: #f0f0f0;\n  padding: 0.25em;\n  margin-bottom: 6pt;\n  border: 1pt solid gray;\n  word-wrap: normal;\n}\n\ndiv.trello-sprinter div.trello-expand,\ndiv.trello-sprinter .trello-errors {\n  -moz-box-shadow: 6pt 6px 10pt #888;\n  -webkit-box-shadow: 6pt 6px 10pt #888;\n  box-shadow: 6pt 6px 10pt #888;\n}\n\ndiv.trello-sprinter p.trello-count {\n  margin: 0 0 1em 0;\n  text-align: center;\n  font-size: 0.85em;\n}\n\ndiv.trello-sprinter div.trello-card {\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\ndiv.trello-sprinter div.trello-card h4 {\n  background-color: #81d0fd;\n  margin: 0.5em 0 0 0;\n  padding: 0 0.25em;\n}\n\ndiv.trello-sprinter div.trello-card h4 span.trello-date {\n  font-weight: normal;\n  font-size: 0.9em;\n  float: right;\n  padding-top: 0.25em;\n}\n\ndiv.trello-sprinter div.trello-card .trello-card-members {\n  margin: 0 0.25em;\n  font-size: 0.85em;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-description {\n  margin: 0.5em 1em;\n}\n\ndiv.trello-sprinter div.trello-description p {\n  margin: 0 0 0.25em 0;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-comments {\n  margin: 0 2em;\n}\n\ndiv.trello-sprinter div.trello-comments h5 {\n  margin: 0;\n  padding: 0 0.25em;\n  background-color: #ccc;\n  font-size: 0.8em;\n  font-weight: normal;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-comments h5 span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\n\ndiv.trello-sprinter div.trello-comments p {\n  margin: 0 0.25em;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-updates {\n  margin: 1em 2em;\n}\n\ndiv.trello-sprinter div.trello-updates p {\n  margin: 0;\n  padding: 0 0.25em;\n  font-size: 0.8em;\n  font-style: italic;\n}\n\ndiv.trello-sprinter div.trello-updates p span.trello-date {\n  font-weight: normal;\n  font-style: normal;\n  float: right;\n}\n\ndiv.trello-sprinter div.trello-updates p span.list {\n  font-style: normal;\n  font-weight: bold;\n}\n\ndiv.trello-sprinter div.trello-sprints {\n  background: white;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors {\n  background: #c41425;\n  color: white;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-warnings {\n  background: #ff80df;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  background: #f0f0f0;\n  color: black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-member {\n  margin-bottom: 1em;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings,\ndiv.trello-sprinter div.trello-sprints div.trello-members {\n  position: relative;\n  overflow: auto;\n  padding: 0 1em 1em 1em;\n  margin: 1em 3em 6pt 3em;\n  border: 1pt solid gray;\n  word-wrap: normal;\n  font-size: 0.9em;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors p,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings p,\ndiv.trello-sprinter div.trello-sprints div.trello-members p {\n  font-size: 1.1em;\n  margin: 0;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors span.trello-code,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings span.trello-code,\ndiv.trello-sprinter div.trello-sprints div.trello-members span.trello-code {\n  font-weight: bold;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors h3,\ndiv.trello-sprinter div.trello-sprints div.trello-errors h4,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings h3,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings h4,\ndiv.trello-sprinter div.trello-sprints div.trello-members h3,\ndiv.trello-sprinter div.trello-sprints div.trello-members h4 {\n  margin: 0;\n  padding: 0.25em 0;\n  text-align: center;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors div.trello-info,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info,\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-info {\n  border-top: 1px solid black;\n}\n\ndiv.trello-sprinter div.trello-sprints div.trello-errors div.trello-info p,\ndiv.trello-sprinter div.trello-sprints div.trello-warnings div.trello-info p,\ndiv.trello-sprinter div.trello-sprints div.trello-members div.trello-info p {\n  margin: 1em 0;\n}\n\ndiv.trello-sprinter div.trello-sprint-table {\n  overflow: auto;\n}\n\n", ""]);
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ1JREFUeNqkkr1OAkEQx+fuhkPgkK8ghYZYGPzo7GjFxMJeQ7TQzljhGxhs9A2MhY0V2muMifoAJpaQGB+Aw0NPjuOA+3J34eg8ME7yT2Y3+/vv7OxwruvCfwL3T+rA83wMEctkXSTKjGFkooplWceO43yj49hAVF7NBUrFjWlIxwVf+kO1M5WHVumlatLlEa/rOhAVt9cjkJBcIM6+ome2CmHGUBY1TaNOmVSMZwcmiVRMAMKxp2K73WKb5D0TG9DGexzqeocltm0zeWGaJi0TOh2D5bY9MBcEBEmSwOOw2+2OKqDK7zz53n5zloNerwceh5bljsoyjB5kswX/f8cG+XYBPA45DlliGH1SVh+uT8O+BooyRQw48DgyPyGW9PsOBAIitFodXwNRDA7BAYeiGB02R6TLiUfY4zAYZImsqHwmnRAnguWmCYST2cW68gqzS7tzXxrkF+dDEI0ga9JvUlSAq9s21Jv8Ze1x754jJslIPLewsnZxKCWXNwG4mTFj1Gh/1u6qzwfnuvr2Tg1oN6J/asAg6GRpPwIMAFcAzawVzQR4AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./node_modules/trello-sprinter/img/plus.png":
/*!***************************************************!*\
  !*** ./node_modules/trello-sprinter/img/plus.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdtJREFUeNqkUzsvBFEUPjNzZhY7az3CFh4RkfWqNKJFolDoyIaCTlR0SqGhEp0oNKqlEgkRCX6ARIdEZLWWwdrZsY95ufeuO3Zssgon+XLP6ztz7jl3BNd14T+Cc2tPIIpiGBFXiR0jiPzBSRLELctacRznAx3HBoLVgai8GBurhaY6qSL7JWVH4mfpxatbk5pLomEYQBCbGg1CveoCqVwRNGdypIZxKBd1XaeVIo1hkSWUysTSDTuPtvp9/sawBITHroqZTJo5yX3KCvDYbz8dPI+hYXwyxbZtBi6maQKPJRKPJFYsIkkIqqp6Mczlcl4HFEPTF2WDm1y+9/SDjSjk83ngPLQs12srm81De/uIl5xInLOzs3P0Z+/4TNYuAeehICBTstkCaasA++s1XvJgrBjbX/9ZraZVkQICcB55P9VMKRQckGUF0unPkq8VY6U+RQn4Yqgooe/hKNT03b2tbZCdsiyUzYXzMBBgSlJLiZGmesWXdLgpf6/T9L/lVxMIL8k+bGjX0NIz0/quw1B3RzWEgsiGVBwUMHCbQksB7B1n4OlV3L07nz2lvTUE66JdfcM7C2pD7ziA0Fz5X3KfM293J7eX89tG6v6BFqDTCJUN4G+hL0v/EmAAoNXlG97vnHoAAAAASUVORK5CYII="

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3RyZWxsby5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tY29ubmVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9pbWcvcGx1cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZFZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0RhdGFWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0Rpc2Nvbm5lY3RlZFZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NYWluVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRNZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9UcmVsbG9TcHJpbnRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3RyZWxsby1zcHJpbnRlci9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvdHJlbGxvLXNwcmludGVyL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/ZjMwYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJUcmVsbG9GYWN0b3J5IiwiY3JlYXRlIiwiU2l0ZSIsInNpdGUiLCJzdGFydCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIlRyZWxsb1NwcmludGVyVmlldyIsImVsZW1lbnQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3B0aW9ucyIsInNlbCIsImtleSIsImJvYXJkIiwidGVhbSIsInZpZXdzIiwiYWZ0ZXIiLCJjYXJkcyIsInVuZGVmaW5lZCIsIlRyZWxsb1NwcmludGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxHQUFHOztRQUVIO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0Esa0JBQWtCLDhCQUE4QjtRQUNoRDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxvQkFBb0IsMkJBQTJCO1FBQy9DO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLG1CQUFtQixjQUFjO1FBQ2pDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsS0FBSztRQUNyQjtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixZQUFZO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsY0FBYyw0QkFBNEI7UUFDMUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJOztRQUVKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBO1FBQ0EsZUFBZSw0QkFBNEI7UUFDM0M7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLHVDQUF1QztRQUN4RDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQix1Q0FBdUM7UUFDeEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsc0JBQXNCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBLFFBQVE7UUFDUjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxVQUFVO1FBQ1Y7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsY0FBYyx3Q0FBd0M7UUFDdEQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsU0FBUztRQUNUO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsUUFBUTtRQUNSO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGVBQWU7UUFDZjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBLHNDQUFzQyx1QkFBdUI7O1FBRTdEO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQzUxQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3RkFBbUM7QUFDN0Usc0NBQXNDLG1CQUFPLENBQUMsOEZBQXNDO0FBQ3BGLG9DQUFvQyxtQkFBTyxDQUFDLG1FQUFnQjtBQUM1RCxvQ0FBb0MsbUJBQU8sQ0FBQyxxRUFBaUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLGNBQWMsR0FBRyw0QkFBNEIsdUJBQXVCLHNCQUFzQix3QkFBd0IsaUJBQWlCLG1CQUFtQixjQUFjLEdBQUcseUNBQXlDLHVCQUF1QixzQkFBc0Isd0JBQXdCLGlCQUFpQixHQUFHLHNDQUFzQyx1QkFBdUIsdUJBQXVCLHFCQUFxQixzQkFBc0Isd0JBQXdCLGlCQUFpQixHQUFHLGtDQUFrQyx1QkFBdUIsR0FBRyx5Q0FBeUMsc0JBQXNCLGlCQUFpQixHQUFHLDRDQUE0QyxnQ0FBZ0MsY0FBYyxrQ0FBa0MsR0FBRyxzREFBc0Qsd0JBQXdCLHVCQUF1QixxQkFBcUIsaUJBQWlCLHdCQUF3QixHQUFHLG1FQUFtRSx1QkFBdUIsc0JBQXNCLHNCQUFzQix1QkFBdUIsR0FBRyxzQ0FBc0Msc0VBQXNFLEdBQUcsdUNBQXVDLHNFQUFzRSxHQUFHLDBFQUEwRSxpQ0FBaUMscUNBQXFDLCtCQUErQixvQkFBb0IsR0FBRywyQ0FBMkMsdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLG9CQUFvQix1QkFBdUIsMkJBQTJCLHNCQUFzQixHQUFHLGdGQUFnRix1Q0FBdUMsMENBQTBDLGtDQUFrQyxHQUFHLHdDQUF3QyxzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLHlDQUF5QyxzQkFBc0IsdUJBQXVCLEdBQUcsNENBQTRDLDhCQUE4Qix3QkFBd0Isc0JBQXNCLEdBQUcsNkRBQTZELHdCQUF3QixxQkFBcUIsaUJBQWlCLHdCQUF3QixHQUFHLDhEQUE4RCxxQkFBcUIsc0JBQXNCLHVCQUF1QixHQUFHLGdEQUFnRCxzQkFBc0IsR0FBRyxrREFBa0QseUJBQXlCLHFCQUFxQixHQUFHLDZDQUE2QyxrQkFBa0IsR0FBRyxnREFBZ0QsY0FBYyxzQkFBc0IsMkJBQTJCLHFCQUFxQix3QkFBd0IsdUJBQXVCLEdBQUcsaUVBQWlFLHdCQUF3Qix1QkFBdUIsaUJBQWlCLEdBQUcsK0NBQStDLHFCQUFxQixxQkFBcUIsR0FBRyw0Q0FBNEMsb0JBQW9CLEdBQUcsOENBQThDLGNBQWMsc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRywrREFBK0Qsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyx3REFBd0QsdUJBQXVCLHNCQUFzQixHQUFHLDRDQUE0QyxzQkFBc0IsaUJBQWlCLEdBQUcsOERBQThELHdCQUF3QixpQkFBaUIsR0FBRyxnRUFBZ0Usd0JBQXdCLGlCQUFpQixHQUFHLCtEQUErRCx3QkFBd0IsaUJBQWlCLEdBQUcsaUZBQWlGLHVCQUF1QixHQUFHLHVMQUF1TCx1QkFBdUIsbUJBQW1CLDJCQUEyQiw0QkFBNEIsMkJBQTJCLHNCQUFzQixxQkFBcUIsR0FBRyw2TEFBNkwscUJBQXFCLGNBQWMsR0FBRywwT0FBME8sc0JBQXNCLEdBQUcsNlhBQTZYLGNBQWMsc0JBQXNCLHVCQUF1QixHQUFHLHVPQUF1TyxnQ0FBZ0MsR0FBRyw2T0FBNk8sa0JBQWtCLEdBQUcsaURBQWlELG1CQUFtQixHQUFHO0FBQ3A0TDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUIsR0FBRyxnQkFBZ0IsbUNBQW1DLGFBQWE7QUFDekcsa0VBQWtFLFlBQVksY0FBYyxXQUFXO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0EsMEJBQTBCLG9CQUFvQixHQUFHLGdCQUFnQixHQUFHLElBQUksT0FBTyxZQUFZLFNBQVMsTUFBTTs7QUFFMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWUsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7O0FDaEs3QixpQ0FBaUMsNHFCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ3dCOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCOztBQUU2Qjs7QUFFckMsaUlBQWMsRUFBQztBQUNOOzs7Ozs7Ozs7Ozs7O0FDTHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVnQztBQUNKO0FBQ0E7QUFDSTtBQUNFOztBQUUzQjs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQU07QUFDNUI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0osbUJBQW1CLCtDQUErQztBQUNsRTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBSTtBQUN6QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQXVDO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwwQ0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7Ozs7QUFJQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx5QkFBeUIsOENBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSixtQkFBbUIscURBQXFEO0FBQ3hFO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ1I7O0FBRXJCO0FBQ1AsSUFBSSxrREFBUTs7QUFFWjtBQUNBLGFBQWEsMENBQUk7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMENBQUk7QUFDeEI7QUFDQTs7QUFFQSxzQkFBc0IsMENBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBDQUFJO0FBQ1gsT0FBTywwQ0FBSTtBQUNYLE9BQU87QUFDUDtBQUNBLE9BQU8sMENBQUk7QUFDWCxPQUFPLDBDQUFJO0FBQ1g7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxNQUFNO0FBQzdFO0FBQ0E7O0FBRUEscUJBQXFCLDBDQUFJO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMENBQUk7O0FBRXBCLGdCQUFnQiwwQ0FBSTtBQUNwQjtBQUNBLHVEQUF1RCxLQUFLLFNBQVMsVUFBVTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMENBQUk7QUFDeEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDBDQUFJO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMENBQUk7O0FBRWxCLFlBQVksMENBQUk7QUFDaEI7QUFDQSwrQ0FBK0MsS0FBSyxTQUFTLFdBQVc7O0FBRXhFLGlCQUFpQiwwQ0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsMENBQUk7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0Msa0RBQVE7QUFDNUM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7O0FBRXJCO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRLDBDQUFJO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvQ0FBb0M7QUFDcEM7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBDQUFJO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVPOztBQUVQOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBNEI7O0FBRXJCO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBSTs7QUFFTDtBQUNBO0FBQ0EsQ0FBQywwQ0FBSTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qjs7QUFFckI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsMENBQUk7QUFDZjs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFO0FBQ1E7QUFDVTtBQUNVO0FBQ047O0FBRTdDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBSTs7QUFFTDtBQUNBO0FBQ0EsQ0FBQywwQ0FBSTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxrRUFBZ0I7QUFDdEIsRUFBRTs7O0FBR0YsZUFBZSwwQ0FBSTtBQUNuQjtBQUNBOztBQUVBLFlBQVksMENBQUk7QUFDaEI7O0FBRUEsQ0FBQyw0Q0FBSztBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQVM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLGFBQWEsOERBQVU7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0VBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ3FDO0FBQ0g7QUFDTDtBQUNBO0FBQ1U7O0FBRWhDO0FBQ1AsSUFBSSxrREFBUTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwQ0FBSTtBQUN6Qjs7QUFFQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUE7QUFDQSxTQUFTLDBDQUFJO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RCxxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUEsa0JBQWtCLDBDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsMENBQUk7QUFDdkI7O0FBRUE7QUFDQSxZQUFZLDBDQUFJO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsa0RBQVE7QUFDbEQ7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7QUFDSDtBQUNMO0FBQ0E7QUFDVTs7QUFFaEM7QUFDUCxJQUFJLGtEQUFROztBQUVaO0FBQ0EsMkJBQTJCLG9EQUFTOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBTzs7QUFFaEMsYUFBYSwwQ0FBSTtBQUNqQjs7QUFFQSxjQUFjLDBDQUFJO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwwQ0FBSTtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBLGNBQWMsMENBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDBDQUFJO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0EsY0FBYywwQ0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsMENBQUk7QUFDakI7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBSTtBQUN4QixvQkFBb0IsMENBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFJOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDBDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwwQ0FBSTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMENBQUk7QUFDWCxPQUFPLDBDQUFJO0FBQ1gsT0FBTztBQUNQO0FBQ0EsT0FBTywwQ0FBSTtBQUNYLE9BQU8sMENBQUk7QUFDWDtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMENBQUk7QUFDMUI7QUFDQTs7QUFFQSxvQkFBb0IsMENBQUk7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLE1BQU07QUFDckY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDBDQUFJO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBDQUFJO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwQ0FBSTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGtEQUFRO0FBQzdDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRWdDO0FBQ1k7O0FBRXJDO0FBQ1A7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwwREFBWTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGdCQUFnQix5QkFBeUI7QUFDekMsOEJBQThCLDhDQUFNO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7O0FBRUEsb0JBQW9CLDJCQUEyQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFtRDtBQUNqRjs7QUFFQTtBQUNBLDhCQUE4QixrREFBa0Q7QUFDaEY7O0FBRUE7QUFDQSw4QkFBOEIscURBQXFEO0FBQ25GOztBQUVBO0FBQ0EsOEJBQThCLGtEQUFrRDtBQUNoRjs7QUFFQTtBQUNBLDhCQUE4QiwrREFBK0Q7QUFDN0Y7O0FBRUE7QUFDQSw4QkFBOEIsa0VBQWtFO0FBQ2hHOztBQUVBO0FBQ0EsOEJBQThCLHNEQUFzRDtBQUNwRjs7QUFFQTtBQUNBLDhCQUE4Qix5RUFBeUU7QUFDdkc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbldBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ047QUFDd0I7QUFDaEI7QUFDUzs7QUFFdEM7QUFDUDtBQUNBLGNBQWMsMENBQUksT0FBTyxnREFBTzs7QUFFaEMsb0JBQW9CLDREQUFhOztBQUVqQyxDQUFDLDBDQUFJO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsY0FBYyxtQkFBbUI7QUFDakM7QUFDQSxTQUFTLDREQUFhO0FBQ3RCLFNBQVMsa0VBQWdCO0FBQ3pCOztBQUVBO0FBQ0EsU0FBUyxrREFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7O0FBSUYsQzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EscUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNqSk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx5UkFBK0c7QUFDckksNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQywwR0FBNkM7QUFDL0QsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxJQUFVO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQix5UkFBK0c7QUFDcEksc0JBQXNCLG1CQUFPLENBQUMseVJBQStHO0FBQzdJLHVEQUF1RCxRQUFTO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFFQUEsK0RBQWEsQ0FBQ0MsTUFBZCxDQUFxQkMsSUFBSSxDQUFDQSxJQUExQixFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1GLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVyxDQUN2QyxDQURNOztBQUdQQSxhQUFhLENBQUNDLE1BQWQsR0FBdUIsVUFBU0UsSUFBVCxFQUFlO0FBRXJDQSxNQUFJLENBQUNDLEtBQUwsQ0FBWSxZQUFNO0FBQ2pCLFFBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBZjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0gsUUFBUSxDQUFDSSxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNwQyxVQUFJRSxzRUFBSixDQUF1QlAsSUFBdkIsRUFBNkJFLFFBQVEsQ0FBQ0csQ0FBRCxDQUFyQztBQUNBO0FBQ0QsR0FMRDtBQU1BLENBUkQsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQVNQLElBQVQsRUFBZVEsT0FBZixFQUF3QjtBQUN6RCxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFPLENBQUNJLFNBQW5CLENBQWI7QUFDQUosU0FBTyxDQUFDSSxTQUFSLEdBQW9CLEVBQXBCO0FBQ0FKLFNBQU8sQ0FBQ0ssS0FBUixDQUFjQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUEsTUFBSUMsT0FBTyxHQUFHO0FBQ2JDLE9BQUcsRUFBRVIsT0FEUTtBQUViUyxPQUFHLEVBQUVSLElBQUksQ0FBQ1EsR0FGRztBQUdiQyxTQUFLLEVBQUVULElBQUksQ0FBQ1UsSUFIQztBQUliQyxTQUFLLEVBQUVYLElBQUksQ0FBQ1csS0FKQztBQUtiQyxTQUFLLEVBQUVaLElBQUksQ0FBQ1k7QUFMQyxHQUFkOztBQVFBLE1BQUdaLElBQUksQ0FBQ2EsS0FBTCxLQUFlQyxTQUFsQixFQUE2QjtBQUM1QlIsV0FBTyxDQUFDTyxLQUFSLEdBQWdCYixJQUFJLENBQUNhLEtBQXJCO0FBQ0E7O0FBRUQsTUFBSUUsdURBQUosQ0FBbUJULE9BQW5CO0FBQ0EsQ0FsQk0sQyIsImZpbGUiOiJ0cmVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUcmVsbG9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHJlbGxvXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImVlN2UxMjNhYjI4YWJiY2FjMTk4XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0Zm9yKHZhciBjaHVua0lkIGluIGluc3RhbGxlZENodW5rcylcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJUcmVsbG9cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ltZy9wbHVzLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2ltZy9taW51cy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYudHJlbGxvLXNwcmludGVyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1zdGF0dXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICBiYWNrZ3JvdW5kOiAjMDI2QUE3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIHAuY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IGgzIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuMjVlbSAyMHB4O1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBoMyBzcGFuLmRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBwLnRyZWxsby1jb21wbGV0ZWQtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogZGVlcHNreWJsdWU7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1wbHVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1taW51cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cyxcXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tbWludXMge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDZwdDtcXG4gIGJvcmRlcjogMXB0IHNvbGlkIGdyYXk7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWV4cGFuZCxcXG5kaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tZXJyb3JzIHtcXG4gIC1tb3otYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgYm94LXNoYWRvdzogNnB0IDZweCAxMHB0ICM4ODg7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgcC50cmVsbG8tY291bnQge1xcbiAgbWFyZ2luOiAwIDAgMWVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQge1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWQwZmQ7XFxuICBtYXJnaW46IDAuNWVtIDAgMCAwO1xcbiAgcGFkZGluZzogMCAwLjI1ZW07XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jYXJkIGg0IHNwYW4udHJlbGxvLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCAudHJlbGxvLWNhcmQtbWVtYmVycyB7XFxuICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDAuNWVtIDFlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWRlc2NyaXB0aW9uIHAge1xcbiAgbWFyZ2luOiAwIDAgMC4yNWVtIDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMge1xcbiAgbWFyZ2luOiAwIDJlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIGg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgcCB7XFxuICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMge1xcbiAgbWFyZ2luOiAxZW0gMmVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdXBkYXRlcyBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi5saXN0IHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMge1xcbiAgYmFja2dyb3VuZDogI2M0MTQyNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyB7XFxuICBiYWNrZ3JvdW5kOiAjZmY4MGRmO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGRpdi50cmVsbG8tbWVtYmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xcbiAgbWFyZ2luOiAxZW0gM2VtIDZwdCAzZW07XFxuICBib3JkZXI6IDFwdCBzb2xpZCBncmF5O1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBwLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgcCxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgcCB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBzcGFuLnRyZWxsby1jb2RlLFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3Mgc3Bhbi50cmVsbG8tY29kZSxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgc3Bhbi50cmVsbG8tY29kZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDMsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgaDQsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoMyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGg0LFxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBoMyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4yNWVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGRpdi50cmVsbG8taW5mbyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLXdhcm5pbmdzIGRpdi50cmVsbG8taW5mbyxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvIHAsXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBkaXYudHJlbGxvLWluZm8gcCxcXG5kaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHAge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludC10YWJsZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHR2ZXJzaW9uOiAxLFxyXG5cdFwiYXBpRW5kcG9pbnRcIjogXCJodHRwczovL2FwaS50cmVsbG8uY29tXCIsXHJcblx0XCJhdXRoRW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRcImludGVudEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0a2V5OiAnJyxcclxuXHJcblx0Ly8gUHJlZml4IHRvIGFwcGx5IHRvIGxvY2FsIHN0b3JhZ2UuIFVzZWZ1bCB0b1xyXG5cdC8vIGRpc2FtYmlndWF0ZSBtdWx0aXBsZSB1c2VzIG9uIHRoZSBzYW1lIHNpdGVcclxuXHRsb2NhbFByZWZpeDogJycsXHJcbn07XHJcblxyXG4vKipcclxuICogTWVyZ2UgdHdvIEphdmFzY3JpcHQgb2JqZWN0cyBpbnRvIGEgc2luZ2xlIHJlc3VsdC5cclxuICogQHBhcmFtIG9iajEgRmlyc3Qgb2JqZWN0XHJcbiAqIEBwYXJhbSBvYmoyIFNlY29uZCBvYmplY3QuIFNlY29uZCBvYmplY3QgdmFsdWVzIHRha2UgcHJlY2VkZW5jZS5cclxuICovXHJcbmNvbnN0IG1lcmdlID0gZnVuY3Rpb24ob2JqMSwgb2JqMikge1xyXG5cdHZhciBvYmogPSB7fTtcclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoxKSB7XHJcblx0XHRpZihvYmoxLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoxW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajIpIHtcclxuXHRcdGlmKG9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajJba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8vIExvY2FsIHN0b3JhZ2UgYWRkcmVzcyBmb3Igc3RvcmluZyB0aGUgdG9rZW4gd2hpbGUgY29ubmVjdGVkXHJcbmNvbnN0IFRva2VuU3RvcmFnZSA9ICdfbjlzNVJ5Zzh3YSc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvQ29ubmVjdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG5cdGxldCB0b2tlbiA9ICcnO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBUaWxsIHdlIGtub3cgb3RoZXJ3aXNlXHJcblx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQ7XHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vIFNlZSBpZiB0aGVyZSBpcyBhIHRva2VuIGluIHRoZSBjdXJyZW50IFVSTFxyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdGNvbnN0IHJlID0gLyN0b2tlbj0oLiopJC87XHJcblx0XHRjb25zdCBtYXRjaGVzID0gaHJlZi5tYXRjaChyZSk7XHJcblx0XHRpZihtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHR0b2tlbiA9IG1hdGNoZXNbMV07XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlLCB0b2tlbik7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBJcyB0aGVyZSBhIHRva2VuIGluIGxvY2FsIHN0b3JhZ2U/XHJcblx0XHQvL1xyXG5cdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xyXG5cdFx0aWYodG9rZW4gIT09IG51bGwgJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGF0LnN0YXRlID0gVHJlbGxvQ29ubmVjdC5DT05ORUNURUQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBdXRob3JpemUgd2l0aCBUcmVsbG9cclxuXHQgKlxyXG5cdCAqIFJlZGlyZWN0cyB0byB0aGUgVHJlbGxvIGF1dGhvcml6YXRpb24gZW5kcG9pbnQsIHdoaWNoIHJlZGlyZWN0cyBiYWNrXHJcblx0ICogdG8gdGhpcyBwYWdlIGFmdGVyIGF1dGhvcml6YXRpb24gd2l0aCB0aGUgdG9rZW4gaW4gdGhlIFVSTC5cclxuXHQgKi9cclxuXHR0aGlzLmF1dGhvcml6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgcmV0dXJuX3VybCA9IGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0XHRjb25zdCB1cmwgPSBgJHtvcHRpb25zLmF1dGhFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259L2F1dGhvcml6ZT9leHBpcmF0aW9uPW5ldmVyJm5hbWU9JHtvcHRpb25zLm5hbWV9JmAgK1xyXG5cdFx0XHRgY2FsbGJhY2tfbWV0aG9kPWZyYWdtZW50JnNjb3BlPXJlYWQmcmVzcG9uc2VfdHlwZT10b2tlbiZrZXk9JHtvcHRpb25zLmtleX0mcmV0dXJuX3VybD0ke3JldHVybl91cmx9YDtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc2Nvbm5lY3QgZnJvbSBUcmVsbG8uXHJcblx0ICpcclxuXHQgKiBUaGlzIGZvcmdldHMgdGhlIHRva2VuIGluIGxvY2FsIHN0b3JhZ2UuXHJcblx0ICpcclxuXHQgKi9cclxuXHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShvcHRpb25zLmxvY2FsUHJlZml4ICsgVG9rZW5TdG9yYWdlKTtcclxuXHRcdHRva2VuID0gJyc7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtIGEgR0VUIHF1ZXJ5IGZvciBUcmVsbG9cclxuXHQgKiBAcGFyYW0gdXJsIFRoZSBib2FyZCBVUkwgYWZ0ZXIgdGhlIHZlcnNpb24sIGxpa2UgXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCJcclxuXHQgKiBAcGFyYW0gc3VjY2VzcyBGdW5jdGlvbiBjYWxsZWQgb24gc3VjY2VzcyB3aXRoIGRhdGEgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gZmFpbHVyZSBGdW5jdGlvbiBjYWxsZWQgb24gZmFpbHVyZSB3aXRoIGRhdGEgYXJndW1lbnRcclxuXHQgKiBAcGFyYW0gbXNnIE9wdGlvbmFsIGVsZW1lbnQgdG8gcHV0IHJhdGUgbGltaXRpbmcgbWVzc2FnZSBpbnRvXHJcblx0ICovXHJcblx0dGhpcy5nZXQgPSBmdW5jdGlvbih1cmwsIHN1Y2Nlc3MsIGZhaWx1cmUsIG1zZykge1xyXG5cclxuXHRcdGxldCB0cmllcyA9IDE7XHJcblxyXG5cdFx0bGV0IG1heHRyaWVzID0gNTsgIC8vIE1heGltdW0gbnVtYmVyIG9mIHRyaWVzXHJcblx0XHRsZXQgYmFja29mZiA9IDEwOyAgIC8vIHNlY29uZHNcclxuXHRcdGxldCBiYWNrb2ZmSW5jcmVhc2UgPSAxLjI1OyAvLyBBbW91bnQgdG8gaW5jcmVhc2UgYmFja29mZiBhZnRlciBlYWNoIHRyeVxyXG5cclxuXHRcdGZ1bmN0aW9uIHRyZWxsb0dldCgpIHtcclxuXHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdFx0cmVxdWVzdC5vcGVuKCdHRVQnLCBgJHtvcHRpb25zLmFwaUVuZHBvaW50fS8ke29wdGlvbnMudmVyc2lvbn0vJHt1cmx9JmtleT0ke29wdGlvbnMua2V5fSZ0b2tlbj0ke3Rva2VufWAsIHRydWUpO1xyXG5cclxuXHRcdFx0cmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcblx0XHRcdFx0XHQvLyBTdWNjZXNzIVxyXG5cdFx0XHRcdFx0Y29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRcdFx0c3VjY2VzcyhkYXRhKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gV2UgcmVhY2hlZCBvdXIgdGFyZ2V0IHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yXHJcblx0XHRcdFx0XHRmYWlsdXJlKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZigrcmVxdWVzdC5zdGF0dXMgPT09IDQyOSAmJiB0cmllcyA8IG1heHRyaWVzKSB7XHJcblx0XHRcdFx0XHR0cmllcysrO1xyXG5cdFx0XHRcdFx0aWYobXNnICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0bXNnLmlubmVyVGV4dCA9IFwiUmF0ZSBsaW1pdGVkLCBhdHRlbXB0IFwiICsgdHJpZXMgKyBcIiBhZnRlciBcIiArXHJcblx0XHRcdFx0XHRcdFx0YmFja29mZi50b0ZpeGVkKDApICsgXCIgc2Vjb25kc1wiO1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHRyZWxsb0dldCgpO1xyXG5cdFx0XHRcdFx0XHR9LCBiYWNrb2ZmICogMTAwMCk7XHJcblx0XHRcdFx0XHRcdGJhY2tvZmYgKj0gYmFja29mZkluY3JlYXNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmYWlsdXJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmVxdWVzdC5zZW5kKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dHJlbGxvR2V0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbn1cclxuXHJcblRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEID0gJ0QnO1xyXG5UcmVsbG9Db25uZWN0LkNPTk5FQ1RFRCA9ICdDJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb0Nvbm5lY3Q7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVoxSlJFRlVlTnFra3IxT0FrRVF4K2Z1aGtQZ2tLOGdoWVpZR1B6bzdHakZ4TUplUTdUUXpsamhHeGhzOUEyTWhZMFYybXVNaWZvQUpwYVFHQitBdzBOUGp1T0ErM0ozNGVnOE1FN3lUMlkzKy92djdPeHdydXZDZndMM1QrckE4M3dNRWN0a1hTVEtqR0Zrb29wbFdjZU80M3lqNDloQVZGN05CVXJGaldsSXh3VmYra08xTTVXSFZ1bWxhdExsRWEvck9oQVZ0OWNqa0pCY0lNNitvbWUyQ21IR1VCWTFUYU5PbVZTTVp3Y21pVlJNQU1LeHAySzczV0tiNUQwVEc5REdleHpxZW9jbHRtMHplV0dhSmkwVE9oMkQ1Ylk5TUJjRUJFbVN3T093MisyT0txREs3eno1M241emxvTmVyd2NlaDVibGpzb3lqQjVrc3dYL2Y4Y0crWFlCUEE0NURsbGlHSDFTVmgrdVQ4TytCb295UlF3NDhEZ3lQeUdXOVBzT0JBSWl0Rm9kWHdOUkRBN0JBWWVpR0IwMlI2VExpVWZZNHpBWVpJbXNxSHdtblJBbmd1V21DWVNUMmNXNjhncXpTN3R6WHhya0YrZERFSTBnYTlKdlVsU0FxOXMyMUp2OFplMXg3NTRqSnNsSVBMZXdzblp4S0NXWE53RzRtVEZqMUdoLzF1NnF6d2ZudXZyMlRnMW9ONkovYXNBZzZHUnBQd0lNQUZjQXphd1Z6UVI0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBZHRKUkVGVWVOcWtVenN2QkZFVVBqTnpaaFk3YXozQ0ZoNFJrZldxTktKRm9sRG95SWFDVGxSMFNxR2hFcDBvTktxbEVna1JDWDZBUklkRVpMV1d3ZHJac1k5NXVmZXVPM1pzc2dvbitYTFA2enR6N2psM0JOZDE0VCtDYzJ0UElJcGlHQkZYaVIwamlQekJTUkxFTGN0YWNSem5BeDNIQm9MVmdhaThHQnVyaGFZNnFTTDdKV1ZING1mcHhhdGJrNXBMb21FWVFCQ2JHZzFDdmVvQ3FWd1JOR2R5cElaeEtCZDFYYWVWSW8xaGtTV1V5c1RTRFR1UHR2cDkvc2F3QklUSHJvcVpUSm81eVgzS0N2RFliejhkUEkraFlYd3l4Ylp0Qmk2bWFRS1BKUktQSkZZc0lra0lxcXA2TWN6bGNsNEhGRVBURjJXRG0xeSs5L1NEalNqazgzbmdQTFFzMTJzcm04MURlL3VJbDV4SW5MT3pzM1AwWisvNFROWXVBZWVoSUNCVHN0a0NhYXNBKytzMVh2SmdyQmpiWC85WnJhWlZrUUlDY0I1NVA5Vk1LUlFja0dVRjB1blBrcThWWTZVK1JRbjRZcWdvb2UvaEtOVDAzYjJ0YlpDZHNpeVV6WVh6TUJCZ1NsSkxpWkdtZXNXWGRMZ3BmNi9UOUwvbFZ4TUlMOGsrYkdqWDBOSXowL3F1dzFCM1J6V0Vnc2lHVkJ3VU1IQ2JRa3NCN0IxbjRPbFYzTDA3bnoybHZUVUU2NkpkZmNNN0MycEQ3emlBMEZ6NVgzS2ZNMjkzSjdlWDg5dEc2djZCRnFEVENKVU40RytoTDB2L0VtQUFvTlhsRzk3dm5Ib0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgJy4vdHJlbGxvLnNjc3MnO1xyXG5cclxuaW1wb3J0IHtUcmVsbG9TcHJpbnRlcn0gZnJvbSAnLi9zcmMvVHJlbGxvU3ByaW50ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbGxvU3ByaW50ZXI7XHJcbmV4cG9ydCB7VHJlbGxvU3ByaW50ZXJ9O1xyXG4iLCIvKlxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBCb2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL01lbWJlcic7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xyXG5pbXBvcnQge1VwZGF0ZX0gZnJvbSAnLi9VcGRhdGUnO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4vQ29tbWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9hcmQgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG5cdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0dGhpcy5pZCA9IGRhdGEuaWQ7XHJcblx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdHRoaXMubGlzdHMgPSBbXTtcclxuXHR0aGlzLm1lbWJlcnMgPSB7fTtcclxuXHJcblx0dGhpcy5maW5kX2NhcmQgID0gZnVuY3Rpb24oaWQpIHtcclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNhcmQgPSB0aGlzLmxpc3RzW2ldLmZpbmRfY2FyZChpZCk7XHJcblx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2FyZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hZGRfbWVtYmVyID0gZnVuY3Rpb24obWVtYmVyKSB7XHJcblx0XHR0aGlzLm1lbWJlcnNbbWVtYmVyLmlkXSA9IG1lbWJlcjtcclxuXHR9XHJcbn1cclxuXHJcbkJvYXJkLmZldGNoID0gZnVuY3Rpb24odHJlbGxvLCBuYW1lLCBvcHRpb25zLCBtc2csIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcclxuXHRtc2cuaW5uZXJUZXh0ID0gJ0ZldGNoaW5nIGJvYXJkICcgKyBuYW1lO1xyXG5cclxuXHQvLy8gS2VlcHMgdHJhY2sgb2YgaG93IG1hbnkgb3BlbiBhc3luYyBjYWxscyB0aGVyZSBhcmUgcmlnaHQgbm93XHJcblx0bGV0IGFjdGl2ZSA9IDA7XHJcblxyXG5cdC8vIFdpbGwgYmUgc2V0IHRvIHBvaW50IHRvIGEgbmV3IEJvYXJkIG9iamVjdFxyXG5cdGxldCBib2FyZCA9IG51bGw7XHJcblxyXG5cdGFzeW5jX3N0YXJ0KCk7XHJcblx0dHJlbGxvLmdldChcIi9tZW1iZXIvbWUvYm9hcmRzP2ZpZWxkcz1hbGxcIixcclxuXHRcdChkYXRhKSA9PiB7XHJcblx0XHRcdGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyAgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGJvYXJkRGF0YSA9IGRhdGFbaV07XHJcblx0XHRcdFx0aWYoYm9hcmREYXRhLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdFx0XHQvLyBXZSBoYXZlIGZvdW5kIHRoZSBib2FyZCAoaWYgbm90IGNsb3NlZClcclxuXHRcdFx0XHRcdGlmKCFib2FyZERhdGEuY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0aGUgYm9hcmQgb2JqZWN0XHJcblx0XHRcdFx0XHRcdGJvYXJkID0gbmV3IEJvYXJkKGJvYXJkRGF0YSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbWVtYmVyc2hpcFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9tZW1iZXJzaGlwKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEZldGNoIHRoZSBsaXN0cyBmb3IgdGhlIGJvYXJkXHJcblx0XHRcdFx0XHRcdGZldGNoX2xpc3RzKGJvYXJkKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoYm9hcmQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZpbmQgVHJlbGxvIGJvYXJkIFwiICsgbmFtZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdH0sXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBib2FyZHNcIilcclxuXHRcdH0sXHJcblx0XHRtc2dcclxuXHQpXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIHRoZSBtZW1iZXJzaGlwIG9mIHRoZSBib2FyZC5cclxuXHQgKiBAcGFyYW0gYm9hcmQgQm9hcmQgdG8gZmV0Y2ggZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfbWVtYmVyc2hpcChib2FyZCkge1xyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL21lbWJlcnM/ZmllbGRzPWFsbFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG1lbWJlckRhdGEpIHtcclxuXHRcdFx0XHRcdHZhciBtZW1iZXIgPSBuZXcgTWVtYmVyKGJvYXJkLCBtZW1iZXJEYXRhKTtcclxuXHRcdFx0XHRcdGJvYXJkLmFkZF9tZW1iZXIobWVtYmVyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBtZW1iZXJzaGlwXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGZldGNoX2xpc3RzKGJvYXJkKSB7XHJcblx0XHRtc2cuaW5uZXJUZXh0ID0gXCJGZXRjaGluZyBsaXN0cyBmb3IgXCIgKyBuYW1lO1xyXG5cclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkcy9cIiArIGJvYXJkLmlkICsgXCIvbGlzdHM/ZmlsdGVyPW9wZW5cIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihsaXN0RGF0YSkge1xyXG5cdFx0XHRcdFx0aWYoIWxpc3REYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGlzdCA9IG5ldyBMaXN0KGJvYXJkLCBsaXN0RGF0YSk7XHJcblx0XHRcdFx0XHRcdGJvYXJkLmxpc3RzLnB1c2gobGlzdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGZldGNoX2NhcmRzKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBsaXN0c1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZldGNoIGFsbCBjYXJkcyBhcyBhIHNpbmdsZSBiYXRjaCBvcGVyYXRpb24uXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHdlIGFyZSBmZXRjaGluZyBmb3JcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBmZXRjaF9jYXJkcyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgY2FyZHNcIjtcclxuXHJcblx0XHQvLyBDb2xsZWN0IHVwIGFsbCBVUkxzIGZvciBhbGwgb2YgdGhlIGxpc3RzXHJcblx0XHR2YXIgdXJscyA9ICcnO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8Ym9hcmQubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGxpc3QgPSBib2FyZC5saXN0c1tpXTtcclxuXHRcdFx0aWYodXJscy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dXJscyArPSAnLCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dXJscyArPSBcIi9saXN0cy9cIiArIGxpc3QuaWQgKyBcIi9jYXJkcy9vcGVuXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gR2V0IGdldCBpdFxyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYmF0Y2g/dXJscz1cIiArIHVybHMsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBMb29wIG92ZXIgdGhlIHJlc3VsdCBmb3IgZWFjaCBwcm92aWRlZCBVUkxcclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aCAmJiBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdFx0XHRjb25zdCBjYXJkc0RhdGEgPSBkYXRhW2ldWzIwMF07XHJcblxyXG5cdFx0XHRcdFx0Y2FyZHNEYXRhLmZvckVhY2goZnVuY3Rpb24oY2FyZERhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYoIWNhcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChib2FyZCwgbGlzdCwgY2FyZERhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKG9wdGlvbnMuYWZ0ZXIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGNhcmQuY3JlYXRlZC5nZXRUaW1lKCkgLyAxMDAwID4gb3B0aW9ucy5hZnRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsaXN0LmFkZF9jYXJkKGNhcmQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmZXRjaF9hY3Rpb25zKGJvYXJkKTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkc1wiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9hY3Rpb25zKGJvYXJkKSB7XHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZC9cIiArIGJvYXJkLmlkICsgXCIvYWN0aW9ucz9maWx0ZXI9Y29tbWVudENhcmQsdXBkYXRlQ2FyZDppZExpc3QmbGltaXQ9MTAwMFwiLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG5cdFx0XHRcdFx0aWYoIWFjdGlvbi5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYoYWN0aW9uLnR5cGUgPT09IFwiY29tbWVudENhcmRcIikge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjYXJkID0gYm9hcmQuZmluZF9jYXJkKGFjdGlvbi5kYXRhLmNhcmQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNhcmQgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBjb21tZW50ID0gbmV3IENvbW1lbnQoYm9hcmQsIGNhcmQsIGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJkLmNvbW1lbnRzLnB1c2goY29tbWVudCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSAndXBkYXRlQ2FyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gbmV3IFVwZGF0ZShib2FyZCwgY2FyZCwgYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNhcmQudXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRib2FyZC5saXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcclxuXHRcdFx0XHRcdGxpc3QuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcblx0XHRcdFx0XHRcdGNhcmQuc29ydF91cGRhdGVzKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGFzeW5jX2VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7IGZhaWx1cmUoXCJVbmFibGUgdG8gZmV0Y2ggVHJlbGxvIGNhcmQgaW5mb3JtYXRpb25cIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gYXN5bmNfc3RhcnQoKSB7XHJcblx0XHRhY3RpdmUrKztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFzeW5jX2VuZCgpIHtcclxuXHRcdGFjdGl2ZS0tO1xyXG5cdFx0aWYoYWN0aXZlID09PSAwKSB7XHJcblx0XHRcdHN1Y2Nlc3MoYm9hcmQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQm9hcmQucHJvdG90eXBlLmZpbmRfbGlzdCA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbGlzdCA9IHRoaXMubGlzdHNbaV07XHJcblx0XHRpZihsaXN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFN0YW5kYXJkIFRyZWxsbyBib2FyZCB2aWV3XHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuL0RhdGFWaWV3JztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcihsZXQgbGlzdCBvZiBib2FyZC5saXN0cykge1xyXG5cdFx0XHRwcmVzZW50TGlzdCh2aWV3LCBsaXN0KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXNlbnRMaXN0ID0gKHZpZXcsIGxpc3QpID0+IHtcclxuICAgIFx0Y29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRoZWFkZXIuaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xyXG4gICAgXHR2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgXHRjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcclxuICAgIFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFx0dmlldy5hcHBlbmRDaGlsZChleHBhbmRlcik7XHJcblxyXG4gICAgXHRoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIFx0XHRpZihleHBhbmRlci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgXHRcdFx0VXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG4gICAgXHRcdFx0VXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG4gICAgXHRcdFx0ZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICBcdGxldCBjb3VudCA9IGxpc3QuY291bnRfbWVtYmVycygpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNhcmRzOjwvZW0+WycgKyBsaXN0LmNhcmRzLmxlbmd0aCArICddICc7XHJcblx0ICAgIGZvcih2YXIgYyBpbiBjb3VudCkge1xyXG5cdFx0ICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KGMpKSB7XHJcblx0XHRcdCAgICBtZW1iZXJzICs9IGNvdW50W2NdLm1lbWJlci5uYW1lICsgJzpbJyArIGNvdW50W2NdLmNudCArICddJm5ic3A7Jm5ic3A7JztcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbnN0IGNvdW50RWwgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKGNvdW50RWwpO1xyXG5cdCAgICBjb3VudEVsLmlubmVySFRNTCA9IG1lbWJlcnM7XHJcblxyXG5cdCAgICBmb3IobGV0IGNhcmQgb2YgbGlzdC5jYXJkcykge1xyXG5cdCAgICBcdHByZXNlbnRDYXJkKGV4cGFuZGVyLCBjYXJkKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50Q2FyZCA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgLy9cclxuXHQgICAgLy8gSGVhZGluZ1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY2FyZC5jcmVhdGVkKTtcclxuXHJcblx0XHRsZXQgY2FyZERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1jYXJkJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcblx0XHRjYXJkRGl2LmlubmVySFRNTCA9IGA8aDQ+PHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHtjYXJkLm5hbWV9PC9oND5gO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gTWVtYmVyc1xyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgbWVtYmVycyA9ICcnO1xyXG5cdCAgICBmb3IobGV0IGlkIG9mIGNhcmQubWVtYmVycykge1xyXG5cdFx0ICAgIHZhciBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbaWRdO1xyXG5cdFx0ICAgIGlmKG1lbWJlcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQgICAgbWVtYmVycyArPSAnIC8gJztcclxuXHRcdCAgICB9XHJcblx0XHQgICAgbWVtYmVycyArPSAnPHNwYW4+JyArIG1lbWJlci5uYW1lICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgbWVtYmVyc1AgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNhcmQtbWVtYmVycycpXHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQobWVtYmVyc1ApO1xyXG5cdCAgICBtZW1iZXJzUC5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIERlc2NyaXB0aW9uXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBkZXNjID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWRlc2NyaXB0aW9uJyk7XHJcblx0ICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcblx0ICAgIGRlc2MuaW5uZXJIVE1MID0gY2FyZC5kZXNjO1xyXG5cclxuXHQgICAgcHJlc2VudENvbW1lbnRzKGNhcmREaXYsIGNhcmQpO1xyXG5cdCAgICBwcmVzZW50VXBkYXRlcyhjYXJkRGl2LCBjYXJkKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJlc2VudENhcmQgPSBwcmVzZW50Q2FyZDtcclxuXHJcbiAgICBsZXQgcHJlc2VudENvbW1lbnRzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLmNvbW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGNvbW1lbnREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY29tbWVudHMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xyXG5cclxuXHRcdGZvcihsZXQgY29tbWVudCBvZiBjYXJkLmNvbW1lbnRzKSB7XHJcblx0XHRcdGxldCBtZW1iZXIgPSBjYXJkLmJvYXJkLm1lbWJlcnNbY29tbWVudC5tZW1iZXJdO1xyXG5cdFx0XHRsZXQgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0XHRsZXQgZGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoY29tbWVudC5kYXRlKTtcclxuXHJcblx0XHRcdGxldCBoNSA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZChoNSk7XHJcblx0XHRcdGg1LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWxsby1kYXRlXCI+JHtkYXRlfTwvc3Bhbj4ke21lbWJlck5hbWV9YDtcclxuXHJcblx0XHRcdGxldCB0ZXh0RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0Y29tbWVudERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuXHRcdFx0dGV4dERpdi5pbm5lckhUTUwgPSBjb21tZW50LnRleHQ7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRVcGRhdGVzID0gKGRpdiwgY2FyZCkgPT4ge1xyXG5cdCAgICBpZihjYXJkLnVwZGF0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBsZXQgdXBkYXRlRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXVwZGF0ZXMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKHVwZGF0ZURpdik7XHJcblxyXG5cdCAgICBmb3IobGV0IHVwZGF0ZSBvZiBjYXJkLnVwZGF0ZXMpIHtcclxuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW3VwZGF0ZS5tZW1iZXJdO1xyXG5cdFx0ICAgIHZhciBtZW1iZXJOYW1lID0gbWVtYmVyICE9PSB1bmRlZmluZWQgPyBtZW1iZXIubmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcblx0XHQgICAgdmFyIGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHVwZGF0ZS5kYXRlKTtcclxuXHRcdCAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdCAgICB1cGRhdGVEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0XHQgICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJkYXRlXCI+JyArIGRhdGUgKyAnPC9zcGFuPiAnICsgbWVtYmVyTmFtZSArXHJcblx0XHRcdCAgICAnIG1vdmVkIGZyb20gPHNwYW4gY2xhc3M9XCJsaXN0XCI+JyArIHVwZGF0ZS5saXN0QmVmb3JlICtcclxuXHRcdFx0ICAgICc8L3NwYW4+IHRvIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEFmdGVyICsgJzwvc3Bhbj4nO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5Cb2FyZFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVmlldy5wcm90b3R5cGUpO1xyXG5Cb2FyZFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQm9hcmRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIGxpc3QgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gZnVuY3Rpb24oYm9hcmQsIGxpc3QsIGRhdGEpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBVdGlsLnN0cmlwX3RhZ3MoZGF0YS5uYW1lKTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRlc2MgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGVzYykucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xyXG4gICAgICAgICc8L3A+JztcclxuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuaWQuc3Vic3RyKDAsIDgpLCAxNikgKiAxMDAwKTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSBbXTtcclxuXHJcbiAgICBkYXRhLmlkTWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgdGhhdC5tZW1iZXJzLnB1c2goaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgdGhpcy51cGRhdGVzID0gW107XHJcbn1cclxuXHJcbkNhcmQucHJvdG90eXBlLnNvcnRfdXBkYXRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy51cGRhdGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGEuZGF0ZSA9PSBiLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgdGhlIGxhc3QgdGltZSB0aGlzIGNhcmQgd2FzIG1vdmVkLlxyXG4gKiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gYSBjb21wbGV0ZWQgY2FyZCB3YXNcclxuICogbW92ZWQgdG8gQ29tcGxldGVkLlxyXG4gKi9cclxuQ2FyZC5wcm90b3R5cGUuZmluYWxfdGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy51cGRhdGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVzW3RoaXMudXBkYXRlcy5sZW5ndGgtMV0uZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVtYmVycyBmcm9tIGEgY29sbGVjdGlvbiBvZiBjYXJkcy5cclxuICogQHBhcmFtIGJvYXJkIEJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gbGlzdCBhcnJheSBvZiBDYXJkIG9iamVjdHNcclxuICogQHJldHVybnMgb2JqZWN0IHdpdGggaWQgYXMgcHJvcGVydHkgdG8gb2JqZWN0IHtjbnQ6ID8sIG1lbWJlcjogP31cclxuICovXHJcbkNhcmQuY291bnRfbWVtYmVycyA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0KSB7XHJcbiAgICB2YXIgY291bnQgPSB7fTtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICAgICAgaWYoY291bnQuaGFzT3duUHJvcGVydHkobWVtYmVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnRbbWVtYmVyLmlkXS5jbnQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50W21lbWJlci5pZF0gPSB7Y250OiAxLCBtZW1iZXI6IG1lbWJlcn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBjb21tZW50IG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuLyoqXHJcbiBBcnJheVxyXG4gKFxyXG4gW2lkXSA9PiA1N2VlYzFjYTIyNjg0NjQ2YjExOTNhYmRcclxuIFtpZE1lbWJlckNyZWF0b3JdID0+IDU3ZWMxYmRhZmVlZGNiYmM3M2Q2MDBkMVxyXG4gW2RhdGFdID0+IEFycmF5XHJcbiAoXHJcbiBbbGlzdF0gPT4gQXJyYXlcclxuIChcclxuIFtuYW1lXSA9PiBEZXNpZ25cclxuIFtpZF0gPT4gNTdlOTIwYTJiMzQ1MTgyMDNmZDVmMzE5XHJcbiApXHJcblxyXG4gW2JvYXJkXSA9PiBBcnJheVxyXG4gKFxyXG4gW3Nob3J0TGlua10gPT4gaTllWEU0eUpcclxuIFtuYW1lXSA9PiBQcm9qZWN0IDEgVGVhbTogQXJib1xyXG4gW2lkXSA9PiA1N2U5MjA0YWMzZjMyM2YxNzg1ZDdiZTRcclxuIClcclxuXHJcbiBbY2FyZF0gPT4gQXJyYXlcclxuIChcclxuIFtzaG9ydExpbmtdID0+IEZnZ3ZkNG5YXHJcbiBbaWRTaG9ydF0gPT4gMjFcclxuIFtuYW1lXSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiBbaWRdID0+IDU3ZWVjMDc3NmZkMDA1ZjdiODFjODIzOVxyXG4gKVxyXG5cclxuIFt0ZXh0XSA9PiBWaXN1YWwgUGFyYWRpZ20gQ2xhc3MgRGVzaWduXHJcbiApXHJcblxyXG4gW3R5cGVdID0+IGNvbW1lbnRDYXJkXHJcbiBbZGF0ZV0gPT4gMjAxNi0wOS0zMFQxOTo0OTozMC45NzRaXHJcbiBbbWVtYmVyQ3JlYXRvcl0gPT4gQXJyYXlcclxuIChcclxuIFtpZF0gPT4gNTdlYzFiZGFmZWVkY2JiYzczZDYwMGQxXHJcbiBbYXZhdGFySGFzaF0gPT5cclxuIFtmdWxsTmFtZV0gPT4gQnJpdHRhbnkgR2FsbGllcnNcclxuIFtpbml0aWFsc10gPT4gQkdcclxuIFt1c2VybmFtZV0gPT4gYnJpdHRhbnlnYWxsaWVyczFcclxuIClcclxuICogQHBhcmFtIGJvYXJkXHJcbiAqIEBwYXJhbSBjYXJkXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDtcclxuICAgIHRoaXMubWVtYmVyID0gZGF0YS5pZE1lbWJlckNyZWF0b3I7XHJcbiAgICB0aGlzLnRleHQgPSAnPHA+JyArXHJcbiAgICAgICAgVXRpbC5zdHJpcF90YWdzKGRhdGEuZGF0YS50ZXh0KS5yZXBsYWNlKC9cXG4vZ20sICc8cD4nKSArXHJcbiAgICAgICAgJzwvcD4nO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGEuZGF0ZSkpO1xyXG59IiwiLypcclxuICogQmFzZSBvYmplY3QgZm9yIHZpZXdzIG9mIFRyZWxsbyBkYXRhLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhVmlldyA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5cclxuRGF0YVZpZXcucHJvdG90eXBlLnByZXNlbnQgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7fVxyXG5cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpc2Nvbm5lY3RlZFZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcclxuXHQvLyBFbnN1cmUgZW1wdHlcclxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XHJcblxyXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcclxuXHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Nvbm5lY3QgdG8gVHJlbGxvJztcclxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0cmVsbG8uYXV0aG9yaXplKCk7XHJcblx0fSlcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmNhcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5jYXJkc19ieV9pZCA9IHt9O1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5hZGRfY2FyZCA9IGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgIHRoaXMuY2FyZHMucHVzaChjYXJkKTtcclxuICAgIHRoaXMuY2FyZHNfYnlfaWRbY2FyZC5pZF0gPSBjYXJkO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5maW5kX2NhcmQgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5jYXJkc19ieV9pZC5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkc19ieV9pZFtpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbkxpc3QucHJvdG90eXBlLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBDYXJkLmNvdW50X21lbWJlcnModGhpcy5ib2FyZCwgdGhpcy5jYXJkcyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7VXRpbH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL0JvYXJkJztcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gJy4vQm9hcmRWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRWaWV3fSBmcm9tIFwiLi9TcHJpbnRzL1NwcmludFZpZXdcIjtcclxuaW1wb3J0IHtTcHJpbnRUYWJsZVZpZXd9IGZyb20gJy4vU3ByaW50cy9TcHJpbnRUYWJsZVZpZXcnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHRyZWxsbywgb3B0aW9ucykge1xyXG5cdC8vIEVuc3VyZSBlbXB0eVxyXG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblx0VXRpbC5hZGRDbGFzcyhkaXYsICd0cmVsbG8tc3ByaW50ZXInKTtcclxuXHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFV0aWwuYWRkQ2xhc3MocCwgJ2NlbnRlcicpO1xyXG5cclxuXHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdGJ1dHRvbi5pbm5lclRleHQgPSAnRGlzY29ubmVjdCc7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dHJlbGxvLmRpc2Nvbm5lY3QoKTtcclxuXHJcblx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpO1xyXG5cdH0pXHJcblxyXG5cclxuXHRsZXQgcFN0YXR1cyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tc3RhdHVzJyk7XHJcblx0cFN0YXR1cy5pbm5lclRleHQgPSAnQ29ubmVjdGluZyB0byBUcmVsbG8uLi4nO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwU3RhdHVzKTtcclxuXHJcblx0bGV0IHBNc2cgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLW1zZycpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwTXNnKTtcclxuXHJcblx0Qm9hcmQuZmV0Y2godHJlbGxvLCBvcHRpb25zLmJvYXJkLCBvcHRpb25zLCBwTXNnLCAoYm9hcmQpID0+IHtcclxuXHRcdC8vIFN1Y2Nlc3NcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ1RyZWxsbyBCb2FyZDogJyArIGJvYXJkLm5hbWU7XHJcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XHJcblxyXG5cdFx0Zm9yKGxldCB2aWV3IGluIG9wdGlvbnMudmlld3MpIHtcclxuXHRcdFx0c3dpdGNoKHZpZXcpIHtcclxuXHRcdFx0XHRjYXNlICdib2FyZCc6XHJcblx0XHRcdFx0XHRsZXQgdiA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzcHJpbnQnOlxyXG5cdFx0XHRcdFx0diA9IG5ldyBTcHJpbnRWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50KTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3NwcmludFRhYmxlJzpcclxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VGFibGVWaWV3KGRpdiwgYm9hcmQsIG9wdGlvbnMudmlld3Muc3ByaW50VGFibGUpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIChtc2cpID0+IHtcclxuXHRcdC8vIEZhaWx1cmVcclxuXHRcdHBNc2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwTXNnKTtcclxuXHRcdHBTdGF0dXMuaW5uZXJUZXh0ID0gbXNnO1xyXG5cdH0pO1xyXG5cclxuXHQvL3RyZWxsby5mZXRjaCgpO1xyXG5cclxufSIsIi8qXHJcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgVHJlbGxvIG1lbWJlciBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbWJlciA9IGZ1bmN0aW9uKGJvYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcclxuICAgIHRoaXMubmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG59IiwiLypcclxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBzcHJpbnQgaW4gdGhlIHNwcmludHMgYW5hbHlzaXNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50ID0gZnVuY3Rpb24oc3ByaW50cywgc3RhcnQsIGVuZCkge1xyXG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcclxuICAgIHRoaXMuc3RhcnRfbWVldGluZyA9IHN0YXJ0O1xyXG4gICAgdGhpcy5lbmRfbWVldGluZyA9IGVuZDtcclxuXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IFtdO1xyXG59XHJcblxyXG5TcHJpbnQucHJvdG90eXBlLmVuZF90aW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5lbmRfbWVldGluZy5jcmVhdGVkLmdldFRpbWUoKSArXHJcbiAgICAgICAgKHRoaXMuc3ByaW50cy5zcHJpbnRfdGltZV9zbG9wICogMTAwMCkpO1xyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRlYW0gbWVtYmVyIHN0YXRpc3RpY3MgZm9yIGEgc3ByaW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludE1lbWJlciA9IGZ1bmN0aW9uKHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XHJcbiAgICB0aGlzLnNwcmludHMgPSBzcHJpbnRzO1xyXG5cclxuICAgIHRoaXMubWVldGluZ3NfY291bnQgPSAwO1xyXG4gICAgdGhpcy5tZWV0aW5nc19hdHRlbmRlZCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMuY29tcGxldGVkX2NvdW50ID0gMDtcclxuICAgIHRoaXMuY29tcGxldGVkX3RvdGFsID0gMDtcclxuICAgIFxyXG4gICAgdGhpcy5yZXZpZXdzX2NvdW50ID0gMDtcclxuICAgIHRoaXMucmV2aWV3c190b3RhbCA9IDA7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUubWVldGluZ3NfcGVyY2VudGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYodGhpcy5tZWV0aW5nc19jb3VudCA8PSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCkge1xyXG4gICAgICAgIHJldHVybiAnKGluc3VmZmljaWVudCBtZWV0aW5ncyknO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZXIgPSB0aGlzLm1lZXRpbmdzX2F0dGVuZGVkIC8gKHRoaXMubWVldGluZ3NfY291bnQgLSB0aGlzLnNwcmludHMubWVldGluZ3Nfc2xvcCk7XHJcbiAgICBpZihwZXIgPiAxKSB7XHJcbiAgICAgICAgcGVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGVyLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblNwcmludE1lbWJlci5wcm90b3R5cGUuY29tcGxldGVkX2ZhY3RvciA9IGZ1bmN0aW9uKHRlYW1TaXplKSB7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZF90b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSB0aGlzLmNvbXBsZXRlZF9jb3VudCAvXHJcbiAgICAgICAgKHRoaXMuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUgKiB0aGlzLnNwcmludHMuY29tcGxldGVkX2ZhY3Rvcik7XHJcbiAgICBpZihmYWN0b3IgPiAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLnJldmlld2luZ19mYWN0b3IgPSBmdW5jdGlvbih0ZWFtU2l6ZSkge1xyXG4gICAgaWYodGhpcy5yZXZpZXdzX3RvdGFsID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZhY3RvciA9IHRoaXMucmV2aWV3c19jb3VudCAvXHJcbiAgICAgICAgKHRoaXMucmV2aWV3c190b3RhbCAvIHRlYW1TaXplICogdGhpcy5zcHJpbnRzLnJldmlld2luZ19mYWN0b3IpO1xyXG4gICAgaWYoZmFjdG9yID4gMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhY3Rvci50b0ZpeGVkKDIpO1xyXG59IiwiLypcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0IGluIGEgdGFibGUuXHJcbiAqL1xyXG5pbXBvcnQge0RhdGFWaWV3fSBmcm9tICcuLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7U3ByaW50c30gZnJvbSAnLi9TcHJpbnRzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi9VdGlsJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQge0JvYXJkVmlld30gZnJvbSBcIi4uL0JvYXJkVmlld1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludFRhYmxlVmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQsIG9wdGlvbnMpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IGFkZEhlYWRpbmdzID0gdHJ1ZTtcclxuICAgIGlmKG9wdGlvbnMuYWRkSGVhZGluZ3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFkZEhlYWRpbmdzID0gb3B0aW9ucy5hZGRIZWFkaW5ncztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZXNlbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXNwcmludC10YWJsZScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGNvbnN0IHRhYmxlID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICBVdGlsLmFkZENsYXNzKHRhYmxlLCBvcHRpb25zLmNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xyXG5cdCAgICAvL1xyXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xyXG5cdCAgICBjb25zdCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzKSB7XHJcblx0XHQgICAgdGFibGVIZWFkaW5nKHRhYmxlLCBib2FyZCwgc3ByaW50cyk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0ZD4nICsgZGF0YSArICc8L3RkPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0XHQgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdFx0XHQgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0XHRcdCAgICB2YXIgaWQgPSBtZW1iZXIubWVtYmVyLmlkO1xyXG5cclxuXHRcdFx0ICAgIHJvd0hUTUwgPSAnJztcclxuXHJcblx0XHRcdCAgICAvLyBPdXIgc3RhdGlzdGljc1xyXG5cdFx0XHQgICAgaXRlbShib2FyZC5uYW1lKTtcclxuXHRcdFx0ICAgIGl0ZW0odGVhbVNpemUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVtYmVyLm5hbWUpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfdG90YWwpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX2ZhY3Rvcih0ZWFtU2l6ZSkpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3c19jb3VudCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdzX3RvdGFsKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpKTtcclxuXHRcdFx0ICAgIGl0ZW0oc3ByaW50cy5zcHJpbnRzLmxlbmd0aCk7XHJcblxyXG5cdFx0XHQgICAgc3ByaW50cy5zcHJpbnRzLmZvckVhY2goZnVuY3Rpb24oc3ByaW50KSB7XHJcblx0XHRcdFx0ICAgIHZhciBjbnQgPSAwO1xyXG5cdFx0XHRcdCAgICBzcHJpbnQuY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG5cdFx0XHRcdFx0ICAgIGlmKGNhcmQubWVtYmVycy5sZW5ndGggPT0gMSAmJiBjYXJkLm1lbWJlcnNbMF0gPT0gaWQpIHtcclxuXHRcdFx0XHRcdFx0ICAgIGNudCsrO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHRcdCAgICBpdGVtKGNudCk7XHJcblx0XHRcdFx0ICAgIGl0ZW0oc3ByaW50LmNvbXBsZXRlZC5sZW5ndGgpO1xyXG5cdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHQgICAgaWYoIWlzTmFOKGFkZEhlYWRpbmdzKSkge1xyXG5cdFx0XHRcdCAgICBmb3IodmFyIGk9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgaTxhZGRIZWFkaW5nczsgaSsrKSB7XHJcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcclxuXHRcdFx0XHRcdCAgICBpdGVtKFwiJm5ic3A7XCIpO1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgY29uc3QgdHIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblx0XHRcdCAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG5cdFx0XHQgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYmxlSGVhZGluZyA9IGZ1bmN0aW9uKHRhYmxlLCBib2FyZCwgc3ByaW50cykge1xyXG4gICAgICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50cjFjbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIFV0aWwuYWRkQ2xhc3ModHIsIG9wdGlvbnMudHIxY2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIHZhciByb3dIVE1MID0gJyc7XHJcblx0ICAgIGZ1bmN0aW9uIGl0ZW0oZGF0YSkge1xyXG5cdFx0ICAgIHJvd0hUTUwgKz0gJzx0aD48ZGl2PicgKyBkYXRhICsgJzwvZGl2PjwvdGg+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaXRlbShcIlRlYW1cIik7XHJcblx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdCAgICBpdGVtKFwiTWVtYmVyXCIpO1xyXG5cdCAgICBpdGVtKFwiQXR0ZW5kZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJDb21wbGV0ZWRcIik7XHJcblx0ICAgIGl0ZW0oXCJUb3RhbFwiKTtcclxuXHQgICAgaXRlbShcIiVcIik7XHJcblx0ICAgIGl0ZW0oXCJSZXZpZXdzXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiU3ByaW50c1wiKTtcclxuXHJcblx0ICAgIGlmKGFkZEhlYWRpbmdzID09PSB0cnVlKSB7XHJcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICBmb3IodmFyIGk9MTsgaTw9YWRkSGVhZGluZ3M7IGkrKykge1xyXG5cdFx0XHQgICAgaXRlbShpKTtcclxuXHRcdFx0ICAgIGl0ZW0oXCIjXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuICAgICAgICB0ci5pbm5lckhUTUwgPSByb3dIVE1MO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNwcmludFRhYmxlVmlldztcclxuLy8vIEBlbmRjb25kXHJcblxyXG5cclxuU3ByaW50VGFibGVWaWV3LnByb3RvdHlwZS50YWJsZV9oZWFkaW5ncyA9IGZ1bmN0aW9uKGJvYXJkLCBzcHJpbnRzKSB7XHJcblxyXG59XHJcblxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogVHJlbGxvIGJvYXJkIHZpZXcgdGhhdCBkaXNwbGF5cyBzcHJpbnQgcmVzdWx0c1xyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRWaWV3ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge1xyXG4gICAgRGF0YVZpZXcuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAvLyBUaGlzIHVzZXMgQm9hcmRWaWV3IHRvIGRyYXcgd2hhdCBpdCBrbm93cyBob3cgdG8gZHJhd1xyXG4gICAgY29uc3QgYm9hcmRfdmlldyA9IG5ldyBCb2FyZFZpZXcoZGl2LCBib2FyZCk7XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENyZWF0ZSB0aGUgc3ByaW50IGFuYWx5c2lzXHJcblx0ICAgIC8vXHJcblx0ICAgIGNvbnN0IHNwcmludHMgPSBuZXcgU3ByaW50cyhib2FyZCk7XHJcblxyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tc3ByaW50cycpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG5cclxuXHQgICAgbGV0IGgyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdCAgICBoMi5pbm5lclRleHQgPSAnU3ByaW50cyBBbmFseXNpcyc7XHJcblx0ICAgIHZpZXcuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxuXHRcdHByZXNlbnRfZXJyb3JzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF93YXJuaW5ncyh2aWV3LCBzcHJpbnRzKTtcclxuXHJcblx0ICAgIGlmKHNwcmludHMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcHJlc2VudF9zcHJpbnRzKHZpZXcsIHNwcmludHMpO1xyXG5cdFx0cHJlc2VudF9tZW1iZXJzKHZpZXcsIHNwcmludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X2Vycm9ycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPT09IDApIHtcclxuXHQgICAgICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IGVycm9ycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1lcnJvcnMnKTtcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGVycm9ycyk7XHJcblxyXG5cdCAgICBlcnJvcnMuaW5uZXJIVE1MID0gJzxoMz5FcnJvcnM8L2gzPic7XHJcblxyXG5cdCAgICBmb3IobGV0IGVycm9yIG9mIHNwcmludHMuZXJyb3JzKSB7XHJcblx0ICAgIFx0bGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgXHRlcnJvcnMuYXBwZW5kQ2hpbGQocCk7XHJcblx0ICAgIFx0cC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ0cmVsbG8tY29kZVwiPicgKyBlcnJvci5jb2RlICsgJzo8L3NwYW4+ICcgKyBlcnJvci5tc2c7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF93YXJuaW5ncyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRpZihzcHJpbnRzLndhcm5pbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuXHQgICAgbGV0IHdhcm5pbmdzID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXdhcm5pbmdzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh3YXJuaW5ncyk7XHJcblxyXG5cdCAgICB3YXJuaW5ncy5pbm5lckhUTUwgPSAnPGgzPldhcm5pbmdzPC9oMz4nO1xyXG5cclxuXHQgICAgZm9yKGxldCB3YXJuaW5nIG9mIHNwcmludHMud2FybmluZ3MpIHtcclxuXHRcdCAgICBsZXQgcCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ICAgIHdhcm5pbmdzLmFwcGVuZENoaWxkKHApO1xyXG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgd2FybmluZy5jb2RlICsgJzo8L3NwYW4+ICcgKyB3YXJuaW5nLm1zZztcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X3NwcmludHMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXZpZXcnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGZvcih2YXIgcz0xOyBzPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBzKyspIHtcclxuXHQgICAgICAgIHZhciBzcHJpbnQgPSBzcHJpbnRzLnNwcmludHNbcy0xXTtcclxuXHQgICAgICAgIHByZXNlbnRfc3ByaW50KHZpZXcsIHNwcmludHMsIHMsIHNwcmludCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9zcHJpbnQgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG51bSwgc3ByaW50KSB7XHJcblx0ICAgIGNvbnN0IGZtRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LnN0YXJ0X21lZXRpbmcuY3JlYXRlZCk7XHJcblx0ICAgIGNvbnN0IHRvRGF0ZSA9IFV0aWwuZm9ybWF0RGF0ZXRpbWUoc3ByaW50LmVuZF9tZWV0aW5nLmNyZWF0ZWQpO1xyXG5cdCAgICBjb25zdCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIE1lbWJlciBjb3VudHMgZm9yIGNvbXBsZXRlZFxyXG5cdCAgICAvL1xyXG4gICAgICAgIGNvbnN0IGNvdW50cyA9IENhcmQuY291bnRfbWVtYmVycyhzcHJpbnRzLmJvYXJkLCBzcHJpbnQuY29tcGxldGVkKTtcclxuXHJcblx0ICAgIGxldCB0b3RhbENvbXBsZXRlZCA9IDA7XHJcblx0ICAgIGZvcihsZXQgc3ByaW50IG9mIHNwcmludHMuc3ByaW50cykge1xyXG5cdFx0ICAgIHRvdGFsQ29tcGxldGVkICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgbGV0IGNvbXBsZXRpb25GYWN0b3IgPSAwLjAwO1xyXG5cdCAgICBpZih0b3RhbENvbXBsZXRlZCA+IDApIHtcclxuXHQgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0ZWQgLyAodG90YWxDb21wbGV0ZWQgLyBzcHJpbnRzLnNwcmludHMubGVuZ3RoICogMC44KTtcclxuXHQgICAgICAgIGlmKGNvbXBsZXRpb25GYWN0b3IgPiAxKSB7XHJcblx0ICAgICAgICAgICAgY29tcGxldGlvbkZhY3RvciA9IDE7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGNvbXBsZXRpb25GYWN0b3IgPSBjb21wbGV0aW9uRmFjdG9yLnRvRml4ZWQoMik7XHJcblxyXG5cdCAgICBjb25zdCBoZWFkZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2gzJywgJ3RyZWxsby1wbHVzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cdCAgICBoZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBjb21wbGV0ZWQgK1xyXG4gICAgICAgICAnIHRhc2tzICcgKyBjb21wbGV0aW9uRmFjdG9yICsgJyAvICcgKyBmbURhdGUgKyAnIHRvICcgKyB0b0RhdGUgK1xyXG4gICAgICAgICAnPC9zcGFuPlNwcmludDogJyArIG51bTtcclxuXHJcblx0ICAgIGNvbnN0IGV4cGFuZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWV4cGFuZCcpO1xyXG5cdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xyXG5cclxuXHQgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHQgICAgaWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0ICAgIFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG4gICAgICAgIGJvYXJkX3ZpZXcucHJlc2VudENhcmQoZXhwYW5kZXIsIHNwcmludC5zdGFydF9tZWV0aW5nKTtcclxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuZW5kX21lZXRpbmcpO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ29tcGxldGVkXHJcblx0ICAgIC8vXHJcblx0ICAgIGxldCBwQ29tcGxldGVkID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb21wbGV0ZWQtaGVhZGVyJyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBDb21wbGV0ZWQpO1xyXG5cdCAgICBwQ29tcGxldGVkLmlubmVyVGV4dCA9ICdTcHJpbnQgQ29tcGxldGVkIFRhc2tzJztcclxuXHJcblx0ICAgIGxldCBwTWVtYmVycyA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY291bnQnKTtcclxuXHQgICAgZXhwYW5kZXIuYXBwZW5kQ2hpbGQocE1lbWJlcnMpO1xyXG5cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnPGVtPkNvbXBsZXRlZDo8L2VtPlsnICsgc3ByaW50LmNvbXBsZXRlZC5sZW5ndGggKyAnXSAnO1xyXG5cdCAgICBmb3IodmFyIGMgaW4gY291bnRzKSB7XHJcblx0ICAgICAgICBpZihjb3VudHMuaGFzT3duUHJvcGVydHkoYykpIHtcclxuXHQgICAgICAgICAgICBtZW1iZXJzICs9IGNvdW50c1tjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudHNbY10uY250ICsgJ10mbmJzcDsmbmJzcDsnO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBwTWVtYmVycy5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gUHJlc2VudCBjb21wbGV0ZWQgY2FyZHNcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKGxldCBpPTA7IGk8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHNwcmludC5jb21wbGV0ZWRbaV07XHJcblx0ICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBjb21wbGV0ZWQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfbWVtYmVycyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRsZXQgbWVtYmVyc0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXJzJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChtZW1iZXJzRGl2KTtcclxuXHJcblx0ICAgIGZvcih2YXIgaWQgaW4gc3ByaW50cy5tZW1iZXJzKSB7XHJcblx0ICAgICAgICBpZihzcHJpbnRzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcblx0ICAgICAgICAgICAgdmFyIG1lbWJlciA9IHNwcmludHMubWVtYmVyc1tpZF07XHJcblx0ICAgICAgICAgICAgcHJlc2VudF9tZW1iZXIobWVtYmVyc0Rpdiwgc3ByaW50cywgbWVtYmVyKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHRcdHByZXNlbnRfaW5mbyhtZW1iZXJzRGl2LCBzcHJpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9tZW1iZXIgPSBmdW5jdGlvbihkaXYsIHNwcmludHMsIG1lbWJlcikge1xyXG4gICAgXHRsZXQgbWVtYmVyRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLW1lbWJlcicpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyRGl2KTtcclxuXHJcblx0ICAgIGxldCBtZWV0aW5ncyA9IHNwcmludHMubWVldGluZ3Nfc2xvcCA9PT0gMSA/ICcgbWVldGluZycgOiAnIG1lZXRpbmdzJztcclxuXHQgICAgbGV0IHRlYW1TaXplID0gc3ByaW50cy5udW1fbWVtYmVycygpO1xyXG5cclxuXHQgICAgbWVtYmVyRGl2LmlubmVySFRNTCA9ICc8aDQ+JyArIG1lbWJlci5tZW1iZXIubmFtZSArICc8L2g0PicgK1xyXG5cclxuXHQgICAgICAgICc8cD5NZWV0aW5ncyBhdHRlbmRlZDogJyArIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCArICcvJyArIG1lbWJlci5tZWV0aW5nc19jb3VudCArXHJcblx0ICAgICAgICAnIHBlcmNlbnRhZ2U6ICcgKyBtZW1iZXIubWVldGluZ3NfcGVyY2VudGFnZSgpICtcclxuXHQgICAgICAgICcgPGVtPllvdSBhcmUgYWxsb3dlZCB0byBtaXNzICcgKyBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgKyBtZWV0aW5ncyArICAnPC9lbT4nICtcclxuXHQgICAgICAgICc8L3A+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPlRhc2tzIGNvbXBsZXRlZDogJyArIG1lbWJlci5jb21wbGV0ZWRfY291bnQgK1xyXG5cdCAgICAgICAgJy8nICsgKG1lbWJlci5jb21wbGV0ZWRfdG90YWwgLyB0ZWFtU2l6ZSkudG9GaXhlZCgyKSArICcgZm9yIGEgY29tcGxldGlvbiBmYWN0b3Igb2Y6ICcgK1xyXG5cdCAgICAgICAgbWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nICtcclxuXHJcblx0ICAgICAgICAnPHA+UmV2aWV3cyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIucmV2aWV3c19jb3VudCArICcgZm9yIGEgcmV2aWV3aW5nIGZhY3RvciBvZjogJyArXHJcblx0ICAgICAgICBtZW1iZXIucmV2aWV3aW5nX2ZhY3Rvcih0ZWFtU2l6ZSkgKyAnPC9wPic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfaW5mbyA9IGZ1bmN0aW9uKGRpdiwgc3ByaW50cykge1xyXG4gICAgXHRjb25zdCBpbmZvRGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWluZm8nKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKGluZm9EaXYpO1xyXG5cclxuICAgIFx0aW5mb0Rpdi5pbm5lckhUTUwgPSAnPHA+VGhlIGNvbXBsZXRpb24gZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5JyArXHJcblx0XHQgICAgJyB0ZWFtIG1lbWJlciBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSAnICsgKHNwcmludHMuY29tcGxldGVkX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mJyArXHJcblx0XHQgICAgJyBhbiBlcXVhbCBkaXN0cmlidXRpb24gb2YgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nICtcclxuXHRcdCAgICAnPHA+VGhlIHJldmlld2luZyBmYWN0b3IgZm9yIHRhc2tzIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgZXZlcnkgdGVhbSBtZW1iZXInICtcclxuXHRcdCAgICAnIGlzIGV4cGVjdGVkIHRvIHJldmlldyAnICsgKHNwcmludHMucmV2aWV3aW5nX2ZhY3RvciAqIDEwMCkudG9GaXhlZCgwKSArICclIG9mIGFuIGVxdWFsJyArXHJcblx0XHQgICAgJyBkaXN0cmlidXRpb24gb2YgdGFza3MuIFRoaXMgZmFjdG9yIGlzIGJhc2VkIG9uIGEgbWV0cmljIHRoYXQgOTAlIG9mIHRhc2tzIHNob3VsZCcgK1xyXG5cdFx0ICAgICcgYmUgcHJvZ3JhbW1pbmcgdGFza3MuIFZhbHVlcyBsZXNzIHRoYW4gMS4wMCBpbmRpY2F0ZSB0aGF0IHlvdSB3aWxsIGJlJyArXHJcblx0XHQgICAgJyBsb3NpbmcgcG9pbnRzIG9uIHRoZSBhc3NpZ25tZW50LjwvcD4nXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBAY29uZFxyXG5TcHJpbnRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuU3ByaW50Vmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRWaWV3O1xyXG4vLy8gQGVuZGNvbmRcclxuIiwiLypcclxuICogU3ByaW50IGFuYWx5c2lzIG9mIFRyZWxsbyBib2FyZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7U3ByaW50fSBmcm9tIFwiLi9TcHJpbnRcIjtcclxuaW1wb3J0IHtTcHJpbnRNZW1iZXJ9IGZyb20gXCIuL1NwcmludE1lbWJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludHMgPSBmdW5jdGlvbihib2FyZCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vLyBOdW1iZXIgb2YgbWlzc2VkIG1lZXRpbmdzIGFsbG93XHJcbiAgICB0aGlzLm1lZXRpbmdzX3Nsb3AgPSAxO1xyXG5cclxuXHJcbiAgICAvLy8gTnVtYmVyIG9mIHNlY29uZHMgYWZ0ZXIgbWVldGluZyB0aW1lIHRvIGNvbnNpZGVyIGNvbXBsZXRlZFxyXG4gICAgLy8vIGluIGEgY3VycmVudCBzcHJpbnQgaW4gc2Vjb25kcy5cclxuICAgIHRoaXMuc3ByaW50X3RpbWVfc2xvcCA9IDUgKiA2MCAqIDYwOyAgIC8vIDUgaG91cnNcclxuICAgIFxyXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIGhpcyBzaGFyZSBvZiB0YXNrc1xyXG4gICAgdGhpcy5jb21wbGV0ZWRfZmFjdG9yID0gMC44O1xyXG4gICAgXHJcbiAgICAvLy8gRWFjaCB1c2VycyBpcyBleHBlY3RlZCB0byBjb21wbGV0ZSA4MCUgb2YgOTAlIG9mIHRoZSB0YXNrIGNvdW50IGluIHJldmlld3NcclxuICAgIHRoaXMucmV2aWV3aW5nX2ZhY3RvciA9IDAuOCAqIDAuOTtcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcblxyXG4gICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgIHRoaXMud2FybmluZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLm1lbWJlcnMgPSB7fTtcclxuICAgIHRoaXMuc3ByaW50cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuZGVzaWduID0gbnVsbDtcclxuICAgIHRoaXMucmlza3MgPSBudWxsO1xyXG4gICAgdGhpcy5tZWV0aW5ncyA9IG51bGw7XHJcbiAgICB0aGlzLnRvZG8gPSBudWxsO1xyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IG51bGw7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IG51bGw7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIENvcHkgb3ZlciB0aGUgbWVtYmVyc1xyXG4gICAgLy9cclxuICAgIGZvcih2YXIgaWQgaW4gYm9hcmQubWVtYmVycykge1xyXG4gICAgICAgIHZhciBtZW1iZXIgPSBib2FyZC5tZW1iZXJzW2lkXTtcclxuICAgICAgICBpZihtZW1iZXIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImNzZTMzNVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXSA9IG5ldyBTcHJpbnRNZW1iZXIodGhpcywgbWVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRmluZCBhbGwgb2YgdGhlIHJlcXVpcmVkIGxpc3RzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5maW5kX2xpc3RzKCk7XHJcblxyXG4gICAgaWYodGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2U5MDAnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE9yZGVyIHRlc3RpbmdcclxuICAgIC8vXHJcbiAgICB0aGlzLm9yZGVyX3Rlc3QoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRGV0ZXJtaW5lIGF0dGVuZGFuY2VcclxuICAgIC8vXHJcbiAgICB0aGlzLm1lZXRpbmdfYXR0ZW5kYW5jZSgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb252ZXJ0IG1lZXRpbmdzIGludG8gc3ByaW50c1xyXG4gICAgLy9cclxuICAgIHRoaXMuY3JlYXRlX3NwcmludHMoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gU29ydCBjb21wbGV0ZWQgaW50byBzcHJpbnRzXHJcbiAgICAvL1xyXG4gICAgdGhpcy5zb3J0X2NvbXBsZXRlZCgpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb21wbGV0ZWQgc3RhdGlzdGljc1xyXG4gICAgLy9cclxuICAgIHRoaXMuY29tcGxldGVkX3N0YXRpc3RpY3MoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBhbGwgcmVxdWlyZWQgbGlzdHMgZXhpc3QuXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5maW5kX2xpc3RzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBGaW5kIHRoZSBcIkRlc2lnblwiIGxpc3RcclxuICAgIHRoaXMuZGVzaWduID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0Rlc2lnbicpO1xyXG4gICAgaWYodGhpcy5kZXNpZ24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJSaXNrc1wiIGxpc3RcclxuICAgIHRoaXMucmlza3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnUmlza3MnKTtcclxuICAgIGlmKHRoaXMucmlza3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJNZWV0aW5nc1wiIGxpc3RcclxuICAgIHRoaXMubWVldGluZ3MgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnTWVldGluZ3MnKTtcclxuICAgIGlmKHRoaXMubWVldGluZ3MgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDAzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB0aGUgXCJUbyBEb1wiIGxpc3RcclxuICAgIHRoaXMudG9kbyA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUbyBEbycpO1xyXG4gICAgaWYodGhpcy50b2RvID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQWN0aXZlXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfYWN0aXZlID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IEFjdGl2ZScpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfYWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVGhpcyBTcHJpbnQgQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5zcHJpbnRfY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1RoaXMgU3ByaW50IENvbXBsZXRlZCcpO1xyXG4gICAgaWYodGhpcy5zcHJpbnRfY29tcGxldGVkID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwNicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiQ29tcGxldGVkXCIgbGlzdFxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnQ29tcGxldGVkJyk7XHJcbiAgICBpZih0aGlzLmNvbXBsZXRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDcnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZSBsaXN0cyBhcmUgaW4gdGhlIHJpZ2h0IG9yZGVyXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5vcmRlcl90ZXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgb3JkZXIgPSBbJ0Rlc2lnbicsICdSaXNrcycsICdNZWV0aW5ncycsXHJcbiAgICAgICAgJ1RvIERvJywgJ1RoaXMgU3ByaW50IEFjdGl2ZScsXHJcbiAgICAgICAgJ1RoaXMgU3ByaW50IENvbXBsZXRlZCcsICdDb21wbGV0ZWQnXTtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTxvcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQubGlzdHNbaV0ubmFtZS50b0xvd2VyQ2FzZSgpICE9PSBvcmRlcltpXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZygndzAwMScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ291bnQgbWVldGluZyBhdHRlbmRhbmNlIGZvciBhIHVzZXJcclxuICovXHJcblNwcmludHMucHJvdG90eXBlLm1lZXRpbmdfYXR0ZW5kYW5jZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBtZWV0aW5nc19jb3VudCA9IHRoaXMubWVldGluZ3MuY2FyZHMubGVuZ3RoO1xyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5tZW1iZXJzW2lkXTtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfY291bnQgPSBtZWV0aW5nc19jb3VudDtcclxuICAgICAgICBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVldGluZ3MuY2FyZHMuZm9yRWFjaChmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgY2FyZC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoYXQuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG1lbWJlci5tZWV0aW5nc19hdHRlbmRlZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmNyZWF0ZV9zcHJpbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWVldGluZ3MgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLnNsaWNlKCk7XHJcblxyXG4gICAgbWVldGluZ3Muc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgaWYoYS5jcmVhdGVkIDwgYi5jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYoYS5jcmVhdGVkID09PSBiLmNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8KG1lZXRpbmdzLmxlbmd0aCAtIDEpOyBpKyspIHtcclxuICAgICAgICB0aGlzLnNwcmludHMucHVzaChuZXcgU3ByaW50KHRoaXMsIG1lZXRpbmdzW2ldLCBtZWV0aW5nc1tpKzFdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLnNvcnRfY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdmFyIGNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmNhcmRzLnNsaWNlKCk7XHJcbiAgICBjb21wbGV0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgdmFyIGF0ID0gYS5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgdmFyIGJ0ID0gYi5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgaWYoYXQgPT09IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZihhdCA8IGJ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tcGxldGVkLmZvckVhY2goZnVuY3Rpb24oY29tcGxldGVkKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBpZ25vcmUgXCJyaXNrXCIgY2FyZHNcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKGNvbXBsZXRlZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcInJpc2tcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gY29tcGxldGVkLmZpbmFsX3RpbWUoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhhdC5zcHJpbnRzLmxlbmd0aDsgIGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwcmludCA9IHRoYXQuc3ByaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGUgPD0gc3ByaW50LmVuZF90aW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaSA+PSB0aGF0LnNwcmludHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gdGhhdC5zcHJpbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XHJcbiAgICAgICAgICAgIHNwcmludC5jb21wbGV0ZWQucHVzaChjb21wbGV0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuY29tcGxldGVkX3N0YXRpc3RpY3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb21wbGV0ZWRfY291bnQgPSAwO1xyXG4gICAgdmFyIHJldmlld3NfdG90YWwgPSAwO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuc3ByaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzcHJpbnQgPSB0aGlzLnNwcmludHNbaV07XHJcbiAgICAgICAgY29tcGxldGVkX2NvdW50ICs9IHNwcmludC5jb21wbGV0ZWQubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IodmFyIGo9MDsgajxzcHJpbnQuY29tcGxldGVkLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLm1lbWJlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb21wbGV0ZWQubWVtYmVyc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGlzLmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nKFwidzAwMlwiLCBcIkNvbXBsZXRlZCB0YXNrIDxlbT5cIiArIGNvbXBsZXRlZC5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBubyB0ZWFtIG1lbWJlcnMgYXNzaWduZWQuIE5vYm9keSB3aWxsIGdldCBjcmVkaXQgZm9yIHRoYXQgdGFzay5cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDNcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXHJcbiAgICAgICAgICAgICAgICBcIjwvZW0+IGhhcyBtb3JlIHRoYW4gb25lIHRlYW0gbWVtYmVyIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBcmUgdGhleSBhbnkgcmV2aWV3cz9cclxuICAgICAgICAgICAgaWYoY29tcGxldGVkLmNvbW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldmlld3NfdG90YWwrKztcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbXBsZXRlZC5jb21tZW50c1swXS5tZW1iZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXIucmV2aWV3c19jb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5jb21wbGV0ZWRfdG90YWwgPSBjb21wbGV0ZWRfY291bnQ7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJzW2lkXS5yZXZpZXdzX3RvdGFsID0gcmV2aWV3c190b3RhbDtcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9tZW1iZXIgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5udW1fbWVtYmVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNudCA9IDA7XHJcblxyXG4gICAgZm9yKHZhciBpZCBpbiB0aGlzLm1lbWJlcnMpIHtcclxuICAgICAgICBpZih0aGlzLm1lbWJlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY250O1xyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGNvZGUpIHtcclxuICAgIC8vIERvZXMgdGhlIGVycm9yIGFscmVhZHkgZXhpc3Q/XHJcbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmVycm9ycy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLmVycm9yc1tpXTtcclxuICAgICAgICBpZihlcnJvci5jb2RlID09PSBjb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICdlMDAxJzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0Rlc2lnbidcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMic6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdSaXNrcydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwMyc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdNZWV0aW5ncydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUbyBEbydcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNSc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdUaGlzIFNwcmludCBBY3RpdmUnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDYnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQ29tcGxldGVkJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA3JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ0NvbXBsZXRlZCdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTkwMCc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJGYXRhbCBlcnJvcnMsIHVuYWJsZSB0byBwcm9jZWVkIHdpdGggc3ByaW50cyBhbmFseXNpc1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS53YXJuaW5nID0gZnVuY3Rpb24oY29kZSwgbXNnKSB7XHJcbiAgICBpZihtc2cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBtc2d9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKGNvZGUpIHtcclxuICAgICAgICBjYXNlICd3MDAxJzpcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5ncy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiWW91ciBsaXN0cyBhcmUgbm90IGluIHRoZSBjb3JyZWN0IG9yZGVyLiBcIiArXHJcbiAgICAgICAgICAgIFwiVGhlIGV4YWN0IG9yZGVyIHNob3VsZCBiZTogRGVzaWduLCBSaXNrcywgTWVldGluZ3MsIFRvIERvLCBcIiArXHJcbiAgICAgICAgICAgIFwiVGhpcyBTcHJpbnQgQWN0aXZlLCBUaGlzIFNwcmludCBDb21wbGV0ZWQsIFwiICtcclxuICAgICAgICAgICAgICAgIFwiQ29tcGxldGVkXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtvcHRpb25zfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XHJcbmltcG9ydCB7RGlzY29ubmVjdGVkVmlld30gZnJvbSBcIi4vRGlzY29ubmVjdGVkVmlld1wiO1xyXG5pbXBvcnQge01haW5WaWV3fSBmcm9tICcuL01haW5WaWV3JztcclxuaW1wb3J0IHtUcmVsbG9Db25uZWN0fSBmcm9tICd0cmVsbG8tY29ubmVjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvU3ByaW50ZXIgPSBmdW5jdGlvbih1c2VyT3B0aW9ucykge1xyXG5cdC8vIERlZmF1bHQgYW5kIHN1cHBsaWVkIG9wdGlvbnNcclxuXHRjb25zdCBvcHRzID0gVXRpbC5tZXJnZShvcHRpb25zLCB1c2VyT3B0aW9ucyk7XHJcblxyXG5cdGNvbnN0IHRyZWxsbyA9IG5ldyBUcmVsbG9Db25uZWN0KG9wdHMpO1xyXG5cclxuXHRVdGlsLnJlYWR5KCgpID0+IHtcclxuXHRcdGxldCBlbGVtZW50cztcclxuXHRcdGlmKG9wdHMuc2VsLm5vZGVUeXBlKSB7XHJcblx0XHRcdGVsZW1lbnRzID0gW29wdHMuc2VsXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNlbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0c3dpdGNoKHRyZWxsby5zdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgVHJlbGxvQ29ubmVjdC5ESVNDT05ORUNURUQ6XHJcblx0XHRcdFx0XHRuZXcgRGlzY29ubmVjdGVkVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0bmV3IE1haW5WaWV3KGVsZW1lbnRzW2ldLCB0cmVsbG8sIG9wdHMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG5cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyB1cGRhdGUgb24gYSBjYXJkXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZSA9IGZ1bmN0aW9uKGJvYXJkLCBjYXJkLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB0aGlzLmNhcmQgPSBjYXJkOyBcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLm1lbWJlciA9IGRhdGEuaWRNZW1iZXJDcmVhdG9yO1xyXG4gICAgdGhpcy5saXN0QmVmb3JlID0gZGF0YS5kYXRhLmxpc3RCZWZvcmUubmFtZTtcclxuICAgIHRoaXMubGlzdEFmdGVyID0gZGF0YS5kYXRhLmxpc3RBZnRlci5uYW1lO1xyXG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRhLmRhdGUpKTtcclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBVdGlsID0gZnVuY3Rpb24oKSB7fVxyXG5cclxuVXRpbC5tZXJnZSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuXHR2YXIgb2JqID0ge307XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMSkge1xyXG5cdFx0aWYob2JqMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMVtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoyKSB7XHJcblx0XHRpZihvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoyW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGFsbCBIVE1MIHRhZ3MgZnJvbSBhIHN0cmluZy5cclxuICogQHBhcmFtIHN0ciBTdHJpbmcgdG8gcHJvY2Vzc1xyXG4gKiBAcmV0dXJucyBzdHJpbmcgd2l0aG91dCB0YWdzXHJcbiAqL1xyXG5VdGlsLnN0cmlwX3RhZ3MgPSBmdW5jdGlvbihzdHIpIHtcclxuXHRyZXR1cm4gc3RyLnJlcGxhY2UoLzwoPzoufFxcbikqPz4vZ20sICcnKTtcclxufVxyXG5cclxuVXRpbC5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24odHlwZSwgY2xzKSB7XHJcblx0bGV0IGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG5cdGlmKGNscyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRVdGlsLmFkZENsYXNzKGUsIGNscyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZTtcclxufVxyXG5cclxuVXRpbC5hZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWVzKSB7XHJcblx0Y29uc3QgbmFtZXMgPSBjbGFzc05hbWVzLnNwbGl0KCcgJyk7XHJcblx0Zm9yKGNvbnN0IG5hbWUgb2YgbmFtZXMpIHtcclxuXHRcdGlmIChlbC5jbGFzc0xpc3QpXHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGVsLmNsYXNzTmFtZSArPSAnICcgKyBuYW1lO1xyXG5cdH1cclxufVxyXG5cclxuVXRpbC5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbGFzc05hbWUpIHtcclxuXHRpZiAoZWwuY2xhc3NMaXN0KVxyXG5cdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG5cdGVsc2VcclxuXHRcdGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJyk7XHJcbn1cclxuXHJcblV0aWwucmVhZHkgPSBmdW5jdGlvbihmbikge1xyXG5cdGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuXHRcdGZuKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0IHRvIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBUaGlzIHVzZXMgZm9ybWF0dGluZyB0aGF0IGlzIHN1YnNldCBvZiB0aGUgUEhQIGRhdGUoKSBmdW5jdGlvbi5cclxuICogQHBhcmFtIGRhdGUgRGF0ZSBvYmplY3RcclxuICogQHBhcmFtIGZvcm1hdCBPcHRpb25hbCBmb3JtYXQgc3RyaW5nIChkZWZhdWx0IGlzICduLWQtWSBoOmlhJykuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5VdGlsLmZvcm1hdERhdGV0aW1lID0gZnVuY3Rpb24oZGF0ZSwgZm9ybWF0KSB7XHJcblxyXG5cdGZ1bmN0aW9uIHBhZChpLCBuKSB7XHJcblx0XHR2YXIgcyA9ICcnICsgaTtcclxuXHRcdHdoaWxlKHMubGVuZ3RoIDwgbikge1xyXG5cdFx0XHRzID0gJzAnICsgcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRmb3JtYXQgPSAnbi1kLVkgaDppYSc7XHJcblx0fVxyXG5cclxuXHR2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0dmFyIGhvdXIgPSBob3VycztcclxuXHR2YXIgYW0gPSAnYSc7XHJcblx0aWYoaG91cnMgPT0gMCkge1xyXG5cdFx0aG91ciA9IDEyO1xyXG5cdH0gZWxzZSBpZihob3VycyA9PSAxMikge1xyXG5cdFx0YW0gPSAncCc7XHJcblx0fSBlbHNlIGlmKGhvdXJzID4gMTIpIHtcclxuXHRcdGhvdXIgPSBob3VycyAtIDEyO1xyXG5cdFx0YW0gPSAncCc7XHJcblx0fVxyXG5cclxuXHR2YXIgc3RyID0gJyc7XHJcblx0Zm9yKHZhciBpPTA7IGk8Zm9ybWF0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRzd2l0Y2goZm9ybWF0LmNoYXJBdChpKSkge1xyXG5cdFx0XHRjYXNlICduJzpcclxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ20nOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdkJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0RGF0ZSgpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ1knOlxyXG5cdFx0XHRcdHN0ciArPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdnJzpcclxuXHRcdFx0XHRzdHIgKz0gaG91cjtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2gnOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoaG91ciwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdpJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TWludXRlcygpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3MnOlxyXG5cdFx0XHRcdHN0ciArPSBwYWQoZGF0ZS5nZXRTZWNvbmRzKCksIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnYSc6XHJcblx0XHRcdFx0c3RyICs9IGFtO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRzdHIgKz0gZm9ybWF0LmNoYXJBdChpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHI7XHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0c2VsOiAnI3RyZWxsbycsXHJcblx0dmVyc2lvbjogMSxcclxuXHRcImFwaUVuZHBvaW50XCI6IFwiaHR0cHM6Ly9hcGkudHJlbGxvLmNvbVwiLFxyXG5cdFwiYXV0aEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0XCJpbnRlbnRFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdGtleTogJycsXHJcblxyXG5cdC8vIFByZWZpeCB0byBhcHBseSB0byBsb2NhbCBzdG9yYWdlLiBVc2VmdWwgdG9cclxuXHQvLyBkaXNhbWJpZ3VhdGUgbXVsdGlwbGUgdXNlcyBvbiB0aGUgc2FtZSBzaXRlXHJcblx0bG9jYWxQcmVmaXg6ICcnLFxyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBib2FyZCB3ZSBhcmUgZmV0Y2hpbmdcclxuXHRib2FyZDogJycsXHJcblxyXG5cdC8qKiBPcHRpb25hbDogT25seSBjb25zaWRlciBtZWV0aW5ncyBhZnRlciB0aGlzIHRpbWUgKFVuaXggdGltZSkgKi9cclxuXHRhZnRlcjogbnVsbCxcclxuXHJcblx0dmlld3M6IHtcclxuXHRcdCdib2FyZCc6IHt9LFxyXG5cdFx0J3NwcmludCc6IHt9XHJcblx0fSxcclxuXHJcblx0bmFtZTogJ1RyZWxsb1NwcmludGVyJ1xyXG59O1xyXG5cclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzk3MGMyNTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuL3RyZWxsby5zY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcclxuaW1wb3J0IHtUcmVsbG9GYWN0b3J5fSBmcm9tICcuL2pzL1RyZWxsb0ZhY3RvcnknO1xyXG5cclxuVHJlbGxvRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuIiwiaW1wb3J0IHtUcmVsbG9TcHJpbnRlclZpZXd9IGZyb20gJy4vVHJlbGxvU3ByaW50ZXJWaWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9GYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblRyZWxsb0ZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtdHJlbGxvLXNwcmludGVyJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRuZXcgVHJlbGxvU3ByaW50ZXJWaWV3KHNpdGUsIGVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSIsImltcG9ydCBUcmVsbG9TcHJpbnRlciBmcm9tIFwidHJlbGxvLXNwcmludGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVHJlbGxvU3ByaW50ZXJWaWV3ID0gZnVuY3Rpb24oc2l0ZSwgZWxlbWVudCkge1xyXG5cdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQuaW5uZXJUZXh0KTtcclxuXHRlbGVtZW50LmlubmVyVGV4dCA9ICcnO1xyXG5cdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdHZhciBvcHRpb25zID0ge1xyXG5cdFx0c2VsOiBlbGVtZW50LFxyXG5cdFx0a2V5OiBqc29uLmtleSxcclxuXHRcdGJvYXJkOiBqc29uLnRlYW0sXHJcblx0XHR2aWV3czoganNvbi52aWV3cyxcclxuXHRcdGFmdGVyOiBqc29uLmFmdGVyXHJcblx0fTtcclxuXHJcblx0aWYoanNvbi5jYXJkcyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRvcHRpb25zLmNhcmRzID0ganNvbi5jYXJkcztcclxuXHR9XHJcblxyXG5cdG5ldyBUcmVsbG9TcHJpbnRlcihvcHRpb25zKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
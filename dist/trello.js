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
/******/ 	var hotCurrentHash = "34f5a91608497189d179";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLWNvbm5lY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9taW51cy5wbmciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL2ltZy9wbHVzLnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0JvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9Db21tZW50LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9EaXNjb25uZWN0ZWRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTGlzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL01haW5WaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9TcHJpbnRzL1NwcmludE1lbWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvc3JjL1NwcmludHMvU3ByaW50VGFibGVWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvU3ByaW50cy9TcHJpbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvVHJlbGxvU3ByaW50ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMvdHJlbGxvLXNwcmludGVyL3NyYy9VdGlsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL3RyZWxsby1zcHJpbnRlci9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy90cmVsbG8tc3ByaW50ZXIvdHJlbGxvLnNjc3M/Mzg3NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90cmVsbG8vanMvVHJlbGxvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdHJlbGxvL2pzL1RyZWxsb1NwcmludGVyVmlldy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsInZlcnNpb24iLCJrZXkiLCJsb2NhbFByZWZpeCIsIm1lcmdlIiwib2JqMSIsIm9iajIiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIlRva2VuU3RvcmFnZSIsIlRyZWxsb0Nvbm5lY3QiLCJvcHRpb25zIiwidGhhdCIsInRva2VuIiwiaW5pdGlhbGl6ZSIsInN0YXRlIiwiRElTQ09OTkVDVEVEIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2giLCJnZXRJdGVtIiwiQ09OTkVDVEVEIiwiYXV0aG9yaXplIiwicmV0dXJuX3VybCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsImF1dGhFbmRwb2ludCIsIm5hbWUiLCJkaXNjb25uZWN0IiwicmVtb3ZlSXRlbSIsImdldCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwibXNnIiwidHJpZXMiLCJtYXh0cmllcyIsImJhY2tvZmYiLCJiYWNrb2ZmSW5jcmVhc2UiLCJ0cmVsbG9HZXQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiYXBpRW5kcG9pbnQiLCJvbmxvYWQiLCJzdGF0dXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsInVuZGVmaW5lZCIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJzZXRUaW1lb3V0Iiwic2VuZCIsIlRyZWxsb1NwcmludGVyIiwiQm9hcmQiLCJpZCIsImxpc3RzIiwibWVtYmVycyIsImZpbmRfY2FyZCIsImkiLCJjYXJkIiwiYWRkX21lbWJlciIsIm1lbWJlciIsImZldGNoIiwidHJlbGxvIiwiYWN0aXZlIiwiYm9hcmQiLCJhc3luY19zdGFydCIsImJvYXJkRGF0YSIsInRvTG93ZXJDYXNlIiwiY2xvc2VkIiwiZmV0Y2hfbWVtYmVyc2hpcCIsImZldGNoX2xpc3RzIiwiYXN5bmNfZW5kIiwiZm9yRWFjaCIsIm1lbWJlckRhdGEiLCJNZW1iZXIiLCJsaXN0RGF0YSIsImxpc3QiLCJMaXN0IiwicHVzaCIsImZldGNoX2NhcmRzIiwidXJscyIsImNhcmRzRGF0YSIsImNhcmREYXRhIiwiQ2FyZCIsImNvbnNvbGUiLCJsb2ciLCJhZnRlciIsImNyZWF0ZWQiLCJnZXRUaW1lIiwiYWRkX2NhcmQiLCJmZXRjaF9hY3Rpb25zIiwiYWN0aW9uIiwidHlwZSIsImNvbW1lbnQiLCJDb21tZW50IiwiY29tbWVudHMiLCJ1cGRhdGUiLCJVcGRhdGUiLCJ1cGRhdGVzIiwiY2FyZHMiLCJzb3J0X3VwZGF0ZXMiLCJwcm90b3R5cGUiLCJmaW5kX2xpc3QiLCJCb2FyZFZpZXciLCJkaXYiLCJEYXRhVmlldyIsImNhbGwiLCJwcmVzZW50IiwidmlldyIsIlV0aWwiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJwcmVzZW50TGlzdCIsImhlYWRlciIsImV4cGFuZGVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvdW50IiwiY291bnRfbWVtYmVycyIsImMiLCJjbnQiLCJjb3VudEVsIiwiaW5uZXJIVE1MIiwicHJlc2VudENhcmQiLCJkYXRlIiwiZm9ybWF0RGF0ZXRpbWUiLCJjYXJkRGl2IiwibWVtYmVyc1AiLCJkZXNjIiwicHJlc2VudENvbW1lbnRzIiwicHJlc2VudFVwZGF0ZXMiLCJjb21tZW50RGl2IiwibWVtYmVyTmFtZSIsImg1IiwidGV4dERpdiIsInRleHQiLCJ1cGRhdGVEaXYiLCJwIiwiZG9jdW1lbnQiLCJsaXN0QmVmb3JlIiwibGlzdEFmdGVyIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJzdHJpcF90YWdzIiwicmVwbGFjZSIsIkRhdGUiLCJwYXJzZUludCIsInN1YnN0ciIsImlkTWVtYmVycyIsInNvcnQiLCJhIiwiYiIsImZpbmFsX3RpbWUiLCJpZE1lbWJlckNyZWF0b3IiLCJEaXNjb25uZWN0ZWRWaWV3IiwiZWxlbWVudCIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiY2FyZHNfYnlfaWQiLCJNYWluVmlldyIsInBTdGF0dXMiLCJwTXNnIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmlld3MiLCJ2IiwiU3ByaW50VmlldyIsInNwcmludCIsIlNwcmludFRhYmxlVmlldyIsInNwcmludFRhYmxlIiwiZnVsbE5hbWUiLCJTcHJpbnQiLCJzcHJpbnRzIiwic3RhcnQiLCJlbmQiLCJzdGFydF9tZWV0aW5nIiwiZW5kX21lZXRpbmciLCJjb21wbGV0ZWQiLCJlbmRfdGltZSIsInNwcmludF90aW1lX3Nsb3AiLCJTcHJpbnRNZW1iZXIiLCJtZWV0aW5nc19jb3VudCIsIm1lZXRpbmdzX2F0dGVuZGVkIiwiY29tcGxldGVkX2NvdW50IiwiY29tcGxldGVkX3RvdGFsIiwicmV2aWV3c19jb3VudCIsInJldmlld3NfdG90YWwiLCJtZWV0aW5nc19wZXJjZW50YWdlIiwibWVldGluZ3Nfc2xvcCIsInBlciIsImNvbXBsZXRlZF9mYWN0b3IiLCJ0ZWFtU2l6ZSIsImZhY3RvciIsInJldmlld2luZ19mYWN0b3IiLCJhZGRIZWFkaW5ncyIsInRhYmxlIiwiU3ByaW50cyIsIm51bV9tZW1iZXJzIiwidGFibGVIZWFkaW5nIiwicm93SFRNTCIsIml0ZW0iLCJpc05hTiIsInRyIiwidHIxY2xhc3MiLCJ0YWJsZV9oZWFkaW5ncyIsImJvYXJkX3ZpZXciLCJoMiIsInByZXNlbnRfZXJyb3JzIiwicHJlc2VudF93YXJuaW5ncyIsImVycm9ycyIsInByZXNlbnRfc3ByaW50cyIsInByZXNlbnRfbWVtYmVycyIsImVycm9yIiwiY29kZSIsIndhcm5pbmdzIiwid2FybmluZyIsInMiLCJwcmVzZW50X3NwcmludCIsIm51bSIsImZtRGF0ZSIsInRvRGF0ZSIsImNvdW50cyIsInRvdGFsQ29tcGxldGVkIiwiY29tcGxldGlvbkZhY3RvciIsInBDb21wbGV0ZWQiLCJwTWVtYmVycyIsIm1lbWJlcnNEaXYiLCJwcmVzZW50X21lbWJlciIsInByZXNlbnRfaW5mbyIsIm1lbWJlckRpdiIsIm1lZXRpbmdzIiwiaW5mb0RpdiIsImRlc2lnbiIsInJpc2tzIiwidG9kbyIsInNwcmludF9hY3RpdmUiLCJzcHJpbnRfY29tcGxldGVkIiwiZmluZF9saXN0cyIsIm9yZGVyX3Rlc3QiLCJtZWV0aW5nX2F0dGVuZGFuY2UiLCJjcmVhdGVfc3ByaW50cyIsInNvcnRfY29tcGxldGVkIiwiY29tcGxldGVkX3N0YXRpc3RpY3MiLCJvcmRlciIsImZpbmRfbWVtYmVyIiwic2xpY2UiLCJhdCIsImJ0IiwiaW5kZXhPZiIsImoiLCJ1c2VyT3B0aW9ucyIsIm9wdHMiLCJyZWFkeSIsImVsZW1lbnRzIiwic2VsIiwibm9kZVR5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RyIiwiY2xzIiwiZSIsImVsIiwiY2xhc3NOYW1lcyIsIm5hbWVzIiwic3BsaXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJSZWdFeHAiLCJqb2luIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJmb3JtYXQiLCJwYWQiLCJuIiwiaG91cnMiLCJnZXRIb3VycyIsImhvdXIiLCJhbSIsImNoYXJBdCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJUcmVsbG9GYWN0b3J5IiwiU2l0ZSIsInNpdGUiLCJUcmVsbG9TcHJpbnRlclZpZXciLCJqc29uIiwidGVhbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTTZPLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBU0QsSUFBVCxFQUFlckksT0FBZixFQUF3QjtBQUN6RCxNQUFNdUksSUFBSSxHQUFHN1AsSUFBSSxDQUFDQyxLQUFMLENBQVdxSCxPQUFPLENBQUNqSCxTQUFuQixDQUFiO0FBQ0FpSCxTQUFPLENBQUNqSCxTQUFSLEdBQW9CLEVBQXBCO0FBQ0FpSCxTQUFPLENBQUM3QyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFFQSxNQUFJakUsdURBQUosQ0FBbUI7QUFDbEJnTixPQUFHLEVBQUVuRyxPQURhO0FBRWxCM0ssT0FBRyxFQUFFa1QsSUFBSSxDQUFDbFQsR0FGUTtBQUdsQjJFLFNBQUssRUFBRXVPLElBQUksQ0FBQ0MsSUFITTtBQUlsQi9ILFNBQUssRUFBRThILElBQUksQ0FBQzlILEtBSk07QUFLbEJuRixTQUFLLEVBQUVpTixJQUFJLENBQUNqTjtBQUxNLEdBQW5CO0FBT0EsQ0FaTSxDIiwiZmlsZSI6InRyZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRyZWxsb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUcmVsbG9cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMzRmNWE5MTYwODQ5NzE4OWQxNzlcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlRyZWxsb1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC90cmVsbG8vaW5kZXguanNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vaW1nL3BsdXMucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4vaW1nL21pbnVzLnBuZ1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi50cmVsbG8tc3ByaW50ZXIge1xcbiAgbWFyZ2luOiAwOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzAyNkFBNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIHAudHJlbGxvLXN0YXR1cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1tc2cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICMwMjZBQTc7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBwLmNlbnRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby12aWV3IGgzIHtcXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAwIDAuMjVlbSAyMHB4OyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXZpZXcgaDMgc3Bhbi5kYXRlIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMjVlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tdmlldyBwLnRyZWxsby1jb21wbGV0ZWQtaGVhZGVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgICAgY29sb3I6IGRlZXBza3libHVlOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIC50cmVsbG8tcGx1cywgZGl2LnRyZWxsby1zcHJpbnRlciAudHJlbGxvLW1pbnVzIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICBwYWRkaW5nOiAwLjI1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDZwdDtcXG4gICAgYm9yZGVyOiAxcHQgc29saWQgZ3JheTtcXG4gICAgd29yZC13cmFwOiBub3JtYWw7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1leHBhbmQsIGRpdi50cmVsbG8tc3ByaW50ZXIgLnRyZWxsby1lcnJvcnMge1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDZwdCA2cHggMTBwdCAjODg4O1xcbiAgICBib3gtc2hhZG93OiA2cHQgNnB4IDEwcHQgIzg4ODsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBwLnRyZWxsby1jb3VudCB7XFxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44NWVtOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgaDQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4MWQwZmQ7XFxuICAgICAgbWFyZ2luOiAwLjVlbSAwIDAgMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY2FyZCBoNCBzcGFuLnRyZWxsby1kYXRlIHtcXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNhcmQgLnRyZWxsby1jYXJkLW1lbWJlcnMge1xcbiAgICAgIG1hcmdpbjogMCAwLjI1ZW07XFxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDAuNWVtIDFlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tZGVzY3JpcHRpb24gcCB7XFxuICAgICAgbWFyZ2luOiAwIDAgMC4yNWVtIDA7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLWNvbW1lbnRzIHtcXG4gICAgbWFyZ2luOiAwIDJlbTsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tY29tbWVudHMgaDUgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1jb21tZW50cyBwIHtcXG4gICAgICBtYXJnaW46IDAgMC4yNWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHtcXG4gICAgbWFyZ2luOiAxZW0gMmVtOyB9XFxuICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby11cGRhdGVzIHAgc3Bhbi50cmVsbG8tZGF0ZSB7XFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXVwZGF0ZXMgcCBzcGFuLmxpc3Qge1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyB7XFxuICAgICAgYmFja2dyb3VuZDogI2M0MTQyNTtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmODBkZjtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLW1lbWJlciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDAgMWVtIDFlbSAxZW07XFxuICAgICAgbWFyZ2luOiAxZW0gM2VtIDZwdCAzZW07XFxuICAgICAgYm9yZGVyOiAxcHQgc29saWQgZ3JheTtcXG4gICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgcCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBwLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgcCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgICAgbWFyZ2luOiAwOyB9XFxuICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgc3Bhbi50cmVsbG8tY29kZSwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBzcGFuLnRyZWxsby1jb2RlLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgc3Bhbi50cmVsbG8tY29kZSB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tZXJyb3JzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoMywgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby13YXJuaW5ncyBoNCwgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1tZW1iZXJzIGgzLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgaDQge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLWVycm9ycyBkaXYudHJlbGxvLWluZm8sIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvLCBkaXYudHJlbGxvLXNwcmludGVyIGRpdi50cmVsbG8tc3ByaW50cyBkaXYudHJlbGxvLW1lbWJlcnMgZGl2LnRyZWxsby1pbmZvIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjazsgfVxcbiAgICAgICAgZGl2LnRyZWxsby1zcHJpbnRlciBkaXYudHJlbGxvLXNwcmludHMgZGl2LnRyZWxsby1lcnJvcnMgZGl2LnRyZWxsby1pbmZvIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8td2FybmluZ3MgZGl2LnRyZWxsby1pbmZvIHAsIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnRzIGRpdi50cmVsbG8tbWVtYmVycyBkaXYudHJlbGxvLWluZm8gcCB7XFxuICAgICAgICAgIG1hcmdpbjogMWVtIDA7IH1cXG4gIGRpdi50cmVsbG8tc3ByaW50ZXIgZGl2LnRyZWxsby1zcHJpbnQtdGFibGUge1xcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG4iLCJcclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcblx0dmVyc2lvbjogMSxcclxuXHRcImFwaUVuZHBvaW50XCI6IFwiaHR0cHM6Ly9hcGkudHJlbGxvLmNvbVwiLFxyXG5cdFwiYXV0aEVuZHBvaW50XCI6IFwiaHR0cHM6Ly90cmVsbG8uY29tXCIsXHJcblx0XCJpbnRlbnRFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdGtleTogJycsXHJcblxyXG5cdC8vIFByZWZpeCB0byBhcHBseSB0byBsb2NhbCBzdG9yYWdlLiBVc2VmdWwgdG9cclxuXHQvLyBkaXNhbWJpZ3VhdGUgbXVsdGlwbGUgdXNlcyBvbiB0aGUgc2FtZSBzaXRlXHJcblx0bG9jYWxQcmVmaXg6ICcnLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlIHR3byBKYXZhc2NyaXB0IG9iamVjdHMgaW50byBhIHNpbmdsZSByZXN1bHQuXHJcbiAqIEBwYXJhbSBvYmoxIEZpcnN0IG9iamVjdFxyXG4gKiBAcGFyYW0gb2JqMiBTZWNvbmQgb2JqZWN0LiBTZWNvbmQgb2JqZWN0IHZhbHVlcyB0YWtlIHByZWNlZGVuY2UuXHJcbiAqL1xyXG5jb25zdCBtZXJnZSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcclxuXHR2YXIgb2JqID0ge307XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMSkge1xyXG5cdFx0aWYob2JqMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMVtrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yKGNvbnN0IGtleSBpbiBvYmoyKSB7XHJcblx0XHRpZihvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0b2JqW2tleV0gPSBvYmoyW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vLyBMb2NhbCBzdG9yYWdlIGFkZHJlc3MgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHdoaWxlIGNvbm5lY3RlZFxyXG5jb25zdCBUb2tlblN0b3JhZ2UgPSAnX245czVSeWc4d2EnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb0Nvbm5lY3QgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHRvcHRpb25zID0gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cclxuXHRsZXQgdG9rZW4gPSAnJztcclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZS5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gVGlsbCB3ZSBrbm93IG90aGVyd2lzZVxyXG5cdFx0dGhhdC5zdGF0ZSA9IFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEO1xyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBTZWUgaWYgdGhlcmUgaXMgYSB0b2tlbiBpbiB0aGUgY3VycmVudCBVUkxcclxuXHRcdC8vXHJcblx0XHRjb25zdCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0XHRjb25zdCByZSA9IC8jdG9rZW49KC4qKSQvO1xyXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IGhyZWYubWF0Y2gocmUpO1xyXG5cdFx0aWYobWF0Y2hlcyAhPT0gbnVsbCAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0dG9rZW4gPSBtYXRjaGVzWzFdO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSwgdG9rZW4pO1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRcdH1cclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gSXMgdGhlcmUgYSB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlP1xyXG5cdFx0Ly9cclxuXHRcdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0XHR0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9wdGlvbnMubG9jYWxQcmVmaXggKyBUb2tlblN0b3JhZ2UsIHRva2VuKTtcclxuXHRcdGlmKHRva2VuICE9PSBudWxsICYmIHRva2VuLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhhdC5zdGF0ZSA9IFRyZWxsb0Nvbm5lY3QuQ09OTkVDVEVEO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXV0aG9yaXplIHdpdGggVHJlbGxvXHJcblx0ICpcclxuXHQgKiBSZWRpcmVjdHMgdG8gdGhlIFRyZWxsbyBhdXRob3JpemF0aW9uIGVuZHBvaW50LCB3aGljaCByZWRpcmVjdHMgYmFja1xyXG5cdCAqIHRvIHRoaXMgcGFnZSBhZnRlciBhdXRob3JpemF0aW9uIHdpdGggdGhlIHRva2VuIGluIHRoZSBVUkwuXHJcblx0ICovXHJcblx0dGhpcy5hdXRob3JpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IHJldHVybl91cmwgPSBlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdFx0Y29uc3QgdXJsID0gYCR7b3B0aW9ucy5hdXRoRW5kcG9pbnR9LyR7b3B0aW9ucy52ZXJzaW9ufS9hdXRob3JpemU/ZXhwaXJhdGlvbj1uZXZlciZuYW1lPSR7b3B0aW9ucy5uYW1lfSZgICtcclxuXHRcdFx0YGNhbGxiYWNrX21ldGhvZD1mcmFnbWVudCZzY29wZT1yZWFkJnJlc3BvbnNlX3R5cGU9dG9rZW4ma2V5PSR7b3B0aW9ucy5rZXl9JnJldHVybl91cmw9JHtyZXR1cm5fdXJsfWA7XHJcblx0XHR3aW5kb3cubG9jYXRpb24gPSB1cmw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEaXNjb25uZWN0IGZyb20gVHJlbGxvLlxyXG5cdCAqXHJcblx0ICogVGhpcyBmb3JnZXRzIHRoZSB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlLlxyXG5cdCAqXHJcblx0ICovXHJcblx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ob3B0aW9ucy5sb2NhbFByZWZpeCArIFRva2VuU3RvcmFnZSk7XHJcblx0XHR0b2tlbiA9ICcnO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybSBhIEdFVCBxdWVyeSBmb3IgVHJlbGxvXHJcblx0ICogQHBhcmFtIHVybCBUaGUgYm9hcmQgVVJMIGFmdGVyIHRoZSB2ZXJzaW9uLCBsaWtlIFwiL21lbWJlci9tZS9ib2FyZHM/ZmllbGRzPWFsbFwiXHJcblx0ICogQHBhcmFtIHN1Y2Nlc3MgRnVuY3Rpb24gY2FsbGVkIG9uIHN1Y2Nlc3Mgd2l0aCBkYXRhIGFyZ3VtZW50XHJcblx0ICogQHBhcmFtIGZhaWx1cmUgRnVuY3Rpb24gY2FsbGVkIG9uIGZhaWx1cmUgd2l0aCBkYXRhIGFyZ3VtZW50XHJcblx0ICogQHBhcmFtIG1zZyBPcHRpb25hbCBlbGVtZW50IHRvIHB1dCByYXRlIGxpbWl0aW5nIG1lc3NhZ2UgaW50b1xyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24odXJsLCBzdWNjZXNzLCBmYWlsdXJlLCBtc2cpIHtcclxuXHJcblx0XHRsZXQgdHJpZXMgPSAxO1xyXG5cclxuXHRcdGxldCBtYXh0cmllcyA9IDU7ICAvLyBNYXhpbXVtIG51bWJlciBvZiB0cmllc1xyXG5cdFx0bGV0IGJhY2tvZmYgPSAxMDsgICAvLyBzZWNvbmRzXHJcblx0XHRsZXQgYmFja29mZkluY3JlYXNlID0gMS4yNTsgLy8gQW1vdW50IHRvIGluY3JlYXNlIGJhY2tvZmYgYWZ0ZXIgZWFjaCB0cnlcclxuXHJcblx0XHRmdW5jdGlvbiB0cmVsbG9HZXQoKSB7XHJcblx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHRcdHJlcXVlc3Qub3BlbignR0VUJywgYCR7b3B0aW9ucy5hcGlFbmRwb2ludH0vJHtvcHRpb25zLnZlcnNpb259LyR7dXJsfSZrZXk9JHtvcHRpb25zLmtleX0mdG9rZW49JHt0b2tlbn1gLCB0cnVlKTtcclxuXHJcblx0XHRcdHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG5cdFx0XHRcdFx0Ly8gU3VjY2VzcyFcclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MoZGF0YSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIFdlIHJlYWNoZWQgb3VyIHRhcmdldCBzZXJ2ZXIsIGJ1dCBpdCByZXR1cm5lZCBhbiBlcnJvclxyXG5cdFx0XHRcdFx0ZmFpbHVyZSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYoK3JlcXVlc3Quc3RhdHVzID09PSA0MjkgJiYgdHJpZXMgPCBtYXh0cmllcykge1xyXG5cdFx0XHRcdFx0dHJpZXMrKztcclxuXHRcdFx0XHRcdGlmKG1zZyAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdG1zZy5pbm5lclRleHQgPSBcIlJhdGUgbGltaXRlZCwgYXR0ZW1wdCBcIiArIHRyaWVzICsgXCIgYWZ0ZXIgXCIgK1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tvZmYudG9GaXhlZCgwKSArIFwiIHNlY29uZHNcIjtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR0cmVsbG9HZXQoKTtcclxuXHRcdFx0XHRcdFx0fSwgYmFja29mZiAqIDEwMDApO1xyXG5cdFx0XHRcdFx0XHRiYWNrb2ZmICo9IGJhY2tvZmZJbmNyZWFzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZmFpbHVyZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJlcXVlc3Quc2VuZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyZWxsb0dldCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5UcmVsbG9Db25uZWN0LkRJU0NPTk5FQ1RFRCA9ICdEJztcclxuVHJlbGxvQ29ubmVjdC5DT05ORUNURUQgPSAnQyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmVsbG9Db25uZWN0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFaMUpSRUZVZU5xa2tyMU9Ba0VReCtmdWhrUGdrSzhnaFlaWUdQem83R2pGeE1KZVE3VFF6bGpoR3hoczlBMk1oWTBWMm11TWlmb0FKcGFRR0IrQXcwTlBqdU9BKzNKMzRlZzhNRTd5VDJZMysvdnY3T3h3cnV2Q2Z3TDNUK3JBODN3TUVjdGtYU1RLakdGa29vcGxXY2VPNDN5ajQ5aEFWRjdOQlVyRmpXbEl4d1ZmK2tPMU01V0hWdW1sYXRMbEVhL3JPaEFWdDljamtKQmNJTTYrb21lMkNtSEdVQlkxVGFOT21WU01ad2NtaVZSTUFNS3hwMks3M1dLYjVEMFRHOURHZXh6cWVvY2x0bTB6ZVdHYUppMFRPaDJENWJZOU1CY0VCRW1Td09PdzIrMk9LcURLN3p6NTNuNXpsb05lcndjZWg1Ymxqc295akI1a3N3WC9mOGNHK1hZQlBBNDVEbGxpR0gxU1ZoK3VUOE8rQm9veVJRdzQ4RGd5UHlHVzlQc09CQUlpdEZvZFh3TlJEQTdCQVllaUdCMDJSNlRMaVVmWTR6QVlaSW1zcUh3bW5SQW5ndVdtQ1lTVDJjVzY4Z3F6Uzd0elh4cmtGK2RERUkwZ2E5SnZVbFNBcTlzMjFKdjhaZTF4NzU0akpzbElQTGV3c25aeEtDV1hOd0c0bVRGajFHaC8xdTZxendmbnV2cjJUZzFvTjZKL2FzQWc2R1JwUHdJTUFGY0F6YXdWelFSNEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQWR0SlJFRlVlTnFrVXpzdkJGRVVQak56WmhZN2F6M0NGaDRSa2ZXcU5LSkZvbERveUlhQ1RsUjBTcUdoRXAwb05LcWxFZ2tSQ1g2QVJJZEVaTFdXd2RyWnNZOTV1ZmV1TzNac3Nnb24rWExQNnp0ejdqbDNCTmQxNFQrQ2MydFBJSXBpR0JGWGlSMGppUHpCU1JMRUxjdGFjUnpuQXgzSEJvTFZnYWk4R0J1cmhhWTZxU0w3SldWSDRtZnB4YXRiazVwTG9tRVlRQkNiR2cxQ3Zlb0NxVndSTkdkeXBJWnhLQmQxWGFlVklvMWhrU1dVeXNUU0RUdVB0dnA5L3Nhd0JJVEhyb3FaVEpvNXlYM0tDdkRZYno4ZFBJK2hZWHd5eGJadEJpNm1hUUtQSlJLUEpGWXNJa2tJcXFwNk1jemxjbDRIRkVQVEYyV0RtMXkrOS9TRGpTams4M25nUExRczEyc3JtODFEZS91SWw1eEluTE96czNQMForLzRUTll1QWVlaElDQlRzdGtDYWFzQSsrczFYdkpnckJqYlgvOVpyYVpWa1FJQ2NCNTVQOVZNS1JRY2tHVUYwdW5Qa3E4Vlk2VStSUW40WXFnb29lL2hLTlQwM2IydGJaQ2RzaXlVellYek1CQmdTbEpMaVpHbWVzV1hkTGdwZjYvVDlML2xWeE1JTDhrK2JHalgwTkl6MC9xdXcxQjNSeldFZ3NpR1ZCd1VNSENiUWtzQjdCMW40T2xWM0wwN256Mmx2VFVFNjZKZGZjTTdDMnBEN3ppQTBGejVYM0tmTTI5M0o3ZVg4OXRHNnY2QkZxRFRDSlVONEcraEwwdi9FbUFBb05YbEc5N3ZuSG9BQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0ICcuL3RyZWxsby5zY3NzJztcclxuXHJcbmltcG9ydCB7VHJlbGxvU3ByaW50ZXJ9IGZyb20gJy4vc3JjL1RyZWxsb1NwcmludGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWxsb1NwcmludGVyO1xyXG5leHBvcnQge1RyZWxsb1NwcmludGVyfTtcclxuIiwiLypcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gQm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJy4vTGlzdCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IHtVcGRhdGV9IGZyb20gJy4vVXBkYXRlJztcclxuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuL0NvbW1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuXHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHR0aGlzLmxpc3RzID0gW107XHJcblx0dGhpcy5tZW1iZXJzID0ge307XHJcblxyXG5cdHRoaXMuZmluZF9jYXJkICA9IGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRmb3IodmFyIGk9MDsgaTx0aGlzLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjYXJkID0gdGhpcy5saXN0c1tpXS5maW5kX2NhcmQoaWQpO1xyXG5cdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNhcmQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRoaXMuYWRkX21lbWJlciA9IGZ1bmN0aW9uKG1lbWJlcikge1xyXG5cdFx0dGhpcy5tZW1iZXJzW21lbWJlci5pZF0gPSBtZW1iZXI7XHJcblx0fVxyXG59XHJcblxyXG5Cb2FyZC5mZXRjaCA9IGZ1bmN0aW9uKHRyZWxsbywgbmFtZSwgb3B0aW9ucywgbXNnLCBzdWNjZXNzLCBmYWlsdXJlKSB7XHJcblx0bXNnLmlubmVyVGV4dCA9ICdGZXRjaGluZyBib2FyZCAnICsgbmFtZTtcclxuXHJcblx0Ly8vIEtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IG9wZW4gYXN5bmMgY2FsbHMgdGhlcmUgYXJlIHJpZ2h0IG5vd1xyXG5cdGxldCBhY3RpdmUgPSAwO1xyXG5cclxuXHQvLyBXaWxsIGJlIHNldCB0byBwb2ludCB0byBhIG5ldyBCb2FyZCBvYmplY3RcclxuXHRsZXQgYm9hcmQgPSBudWxsO1xyXG5cclxuXHRhc3luY19zdGFydCgpO1xyXG5cdHRyZWxsby5nZXQoXCIvbWVtYmVyL21lL2JvYXJkcz9maWVsZHM9YWxsXCIsXHJcblx0XHQoZGF0YSkgPT4ge1xyXG5cdFx0XHRmb3IodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgIGkrKykge1xyXG5cdFx0XHRcdHZhciBib2FyZERhdGEgPSBkYXRhW2ldO1xyXG5cdFx0XHRcdGlmKGJvYXJkRGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0Ly8gV2UgaGF2ZSBmb3VuZCB0aGUgYm9hcmQgKGlmIG5vdCBjbG9zZWQpXHJcblx0XHRcdFx0XHRpZighYm9hcmREYXRhLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0XHQvLyBDcmVhdGUgdGhlIGJvYXJkIG9iamVjdFxyXG5cdFx0XHRcdFx0XHRib2FyZCA9IG5ldyBCb2FyZChib2FyZERhdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRmV0Y2ggdGhlIG1lbWJlcnNoaXBcclxuXHRcdFx0XHRcdFx0ZmV0Y2hfbWVtYmVyc2hpcChib2FyZCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGZXRjaCB0aGUgbGlzdHMgZm9yIHRoZSBib2FyZFxyXG5cdFx0XHRcdFx0XHRmZXRjaF9saXN0cyhib2FyZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGJvYXJkID09PSBudWxsKSB7XHJcblx0XHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmaW5kIFRyZWxsbyBib2FyZCBcIiArIG5hbWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHR9LFxyXG5cdFx0KGRhdGEpID0+IHtcclxuXHRcdFx0ZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gYm9hcmRzXCIpXHJcblx0XHR9LFxyXG5cdFx0bXNnXHJcblx0KVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaCB0aGUgbWVtYmVyc2hpcCBvZiB0aGUgYm9hcmQuXHJcblx0ICogQHBhcmFtIGJvYXJkIEJvYXJkIHRvIGZldGNoIGZvclxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGZldGNoX21lbWJlcnNoaXAoYm9hcmQpIHtcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JvYXJkL1wiICsgYm9hcmQuaWQgKyBcIi9tZW1iZXJzP2ZpZWxkcz1hbGxcIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihtZW1iZXJEYXRhKSB7XHJcblx0XHRcdFx0XHR2YXIgbWVtYmVyID0gbmV3IE1lbWJlcihib2FyZCwgbWVtYmVyRGF0YSk7XHJcblx0XHRcdFx0XHRib2FyZC5hZGRfbWVtYmVyKG1lbWJlcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbWVtYmVyc2hpcFwiKSB9LFxyXG5cdFx0XHRtc2dcclxuXHRcdClcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiBmZXRjaF9saXN0cyhib2FyZCkge1xyXG5cdFx0bXNnLmlubmVyVGV4dCA9IFwiRmV0Y2hpbmcgbGlzdHMgZm9yIFwiICsgbmFtZTtcclxuXHJcblx0XHRhc3luY19zdGFydCgpO1xyXG5cdFx0dHJlbGxvLmdldChcIi9ib2FyZHMvXCIgKyBib2FyZC5pZCArIFwiL2xpc3RzP2ZpbHRlcj1vcGVuXCIsXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24obGlzdERhdGEpIHtcclxuXHRcdFx0XHRcdGlmKCFsaXN0RGF0YS5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxpc3QgPSBuZXcgTGlzdChib2FyZCwgbGlzdERhdGEpO1xyXG5cdFx0XHRcdFx0XHRib2FyZC5saXN0cy5wdXNoKGxpc3QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRmZXRjaF9jYXJkcyhib2FyZCk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gbGlzdHNcIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGZXRjaCBhbGwgY2FyZHMgYXMgYSBzaW5nbGUgYmF0Y2ggb3BlcmF0aW9uLlxyXG5cdCAqIEBwYXJhbSBib2FyZCBCb2FyZCB3ZSBhcmUgZmV0Y2hpbmcgZm9yXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZmV0Y2hfY2FyZHMoYm9hcmQpIHtcclxuXHRcdG1zZy5pbm5lclRleHQgPSBcIkZldGNoaW5nIGNhcmRzXCI7XHJcblxyXG5cdFx0Ly8gQ29sbGVjdCB1cCBhbGwgVVJMcyBmb3IgYWxsIG9mIHRoZSBsaXN0c1xyXG5cdFx0dmFyIHVybHMgPSAnJztcclxuXHRcdGZvcih2YXIgaT0wOyBpPGJvYXJkLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBsaXN0ID0gYm9hcmQubGlzdHNbaV07XHJcblx0XHRcdGlmKHVybHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHVybHMgKz0gJywnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVybHMgKz0gXCIvbGlzdHMvXCIgKyBsaXN0LmlkICsgXCIvY2FyZHMvb3BlblwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEdldCBnZXQgaXRcclxuXHRcdGFzeW5jX3N0YXJ0KCk7XHJcblx0XHR0cmVsbG8uZ2V0KFwiL2JhdGNoP3VybHM9XCIgKyB1cmxzLFxyXG5cdFx0XHRmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Ly8gTG9vcCBvdmVyIHRoZSByZXN1bHQgZm9yIGVhY2ggcHJvdmlkZWQgVVJMXHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGggJiYgaTxib2FyZC5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGJvYXJkLmxpc3RzW2ldO1xyXG5cdFx0XHRcdFx0Y29uc3QgY2FyZHNEYXRhID0gZGF0YVtpXVsyMDBdO1xyXG5cclxuXHRcdFx0XHRcdGNhcmRzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGNhcmREYXRhKSB7XHJcblx0XHRcdFx0XHRcdGlmKCFjYXJkRGF0YS5jbG9zZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBjYXJkID0gbmV3IENhcmQoYm9hcmQsIGxpc3QsIGNhcmREYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhjYXJkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihvcHRpb25zLmFmdGVyICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihjYXJkLmNyZWF0ZWQuZ2V0VGltZSgpIC8gMTAwMCA+IG9wdGlvbnMuYWZ0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5hZGRfY2FyZChjYXJkKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdC5hZGRfY2FyZChjYXJkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZmV0Y2hfYWN0aW9ucyhib2FyZCk7XHJcblx0XHRcdFx0YXN5bmNfZW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGRhdGEpIHsgZmFpbHVyZShcIlVuYWJsZSB0byBmZXRjaCBUcmVsbG8gY2FyZHNcIikgfSxcclxuXHRcdFx0bXNnXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gZmV0Y2hfYWN0aW9ucyhib2FyZCkge1xyXG5cdFx0YXN5bmNfc3RhcnQoKTtcclxuXHRcdHRyZWxsby5nZXQoXCIvYm9hcmQvXCIgKyBib2FyZC5pZCArIFwiL2FjdGlvbnM/ZmlsdGVyPWNvbW1lbnRDYXJkLHVwZGF0ZUNhcmQ6aWRMaXN0JmxpbWl0PTEwMDBcIixcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuXHRcdFx0XHRcdGlmKCFhY3Rpb24uY2xvc2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmKGFjdGlvbi50eXBlID09PSBcImNvbW1lbnRDYXJkXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FyZCA9IGJvYXJkLmZpbmRfY2FyZChhY3Rpb24uZGF0YS5jYXJkLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjYXJkICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29tbWVudCA9IG5ldyBDb21tZW50KGJvYXJkLCBjYXJkLCBhY3Rpb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FyZC5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihhY3Rpb24udHlwZSA9PT0gJ3VwZGF0ZUNhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNhcmQgPSBib2FyZC5maW5kX2NhcmQoYWN0aW9uLmRhdGEuY2FyZC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0aWYoY2FyZCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IG5ldyBVcGRhdGUoYm9hcmQsIGNhcmQsIGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXJkLnVwZGF0ZXMucHVzaCh1cGRhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ym9hcmQubGlzdHMuZm9yRWFjaChmdW5jdGlvbihsaXN0KSB7XHJcblx0XHRcdFx0XHRsaXN0LmNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG5cdFx0XHRcdFx0XHRjYXJkLnNvcnRfdXBkYXRlcygpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhc3luY19lbmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZGF0YSkgeyBmYWlsdXJlKFwiVW5hYmxlIHRvIGZldGNoIFRyZWxsbyBjYXJkIGluZm9ybWF0aW9uXCIpIH0sXHJcblx0XHRcdG1zZ1xyXG5cdFx0KVxyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGFzeW5jX3N0YXJ0KCkge1xyXG5cdFx0YWN0aXZlKys7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhc3luY19lbmQoKSB7XHJcblx0XHRhY3RpdmUtLTtcclxuXHRcdGlmKGFjdGl2ZSA9PT0gMCkge1xyXG5cdFx0XHRzdWNjZXNzKGJvYXJkKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkJvYXJkLnByb3RvdHlwZS5maW5kX2xpc3QgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0Zm9yKHZhciBpPTA7IGk8dGhpcy5saXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGxpc3QgPSB0aGlzLmxpc3RzW2ldO1xyXG5cdFx0aWYobGlzdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIGxpc3Q7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBTdGFuZGFyZCBUcmVsbG8gYm9hcmQgdmlld1xyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi9EYXRhVmlldyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi9VdGlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBCb2FyZFZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkKSB7XHJcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHZpZXcgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tdmlldycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBmb3IobGV0IGxpc3Qgb2YgYm9hcmQubGlzdHMpIHtcclxuXHRcdFx0cHJlc2VudExpc3QodmlldywgbGlzdCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmVzZW50TGlzdCA9ICh2aWV3LCBsaXN0KSA9PiB7XHJcbiAgICBcdGNvbnN0IGhlYWRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDMnLCAndHJlbGxvLXBsdXMnKTtcclxuICAgIFx0aGVhZGVyLmlubmVyVGV4dCA9IGxpc3QubmFtZTtcclxuICAgIFx0dmlldy5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIFx0Y29uc3QgZXhwYW5kZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXhwYW5kJyk7XHJcbiAgICBcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBcdHZpZXcuYXBwZW5kQ2hpbGQoZXhwYW5kZXIpO1xyXG5cclxuICAgIFx0aGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBcdFx0aWYoZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICBcdFx0XHRleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIFx0XHRcdFV0aWwucmVtb3ZlQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuICAgIFx0XHRcdFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLW1pbnVzJyk7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuICAgIFx0XHRcdGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0XHQgICAgVXRpbC5hZGRDbGFzcyhoZWFkZXIsICd0cmVsbG8tcGx1cycpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG4gICAgXHRsZXQgY291bnQgPSBsaXN0LmNvdW50X21lbWJlcnMoKTtcclxuXHJcblx0ICAgIGxldCBtZW1iZXJzID0gJzxlbT5DYXJkczo8L2VtPlsnICsgbGlzdC5jYXJkcy5sZW5ndGggKyAnXSAnO1xyXG5cdCAgICBmb3IodmFyIGMgaW4gY291bnQpIHtcclxuXHRcdCAgICBpZihjb3VudC5oYXNPd25Qcm9wZXJ0eShjKSkge1xyXG5cdFx0XHQgICAgbWVtYmVycyArPSBjb3VudFtjXS5tZW1iZXIubmFtZSArICc6WycgKyBjb3VudFtjXS5jbnQgKyAnXSZuYnNwOyZuYnNwOyc7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBjb25zdCBjb3VudEVsID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jb3VudCcpO1xyXG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChjb3VudEVsKTtcclxuXHQgICAgY291bnRFbC5pbm5lckhUTUwgPSBtZW1iZXJzO1xyXG5cclxuXHQgICAgZm9yKGxldCBjYXJkIG9mIGxpc3QuY2FyZHMpIHtcclxuXHQgICAgXHRwcmVzZW50Q2FyZChleHBhbmRlciwgY2FyZCk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudENhcmQgPSAoZGl2LCBjYXJkKSA9PiB7XHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIEhlYWRpbmdcclxuXHQgICAgLy9cclxuXHQgICAgbGV0IGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKGNhcmQuY3JlYXRlZCk7XHJcblxyXG5cdFx0bGV0IGNhcmREaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tY2FyZCcpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG5cdFx0Y2FyZERpdi5pbm5lckhUTUwgPSBgPGg0PjxzcGFuIGNsYXNzPVwidHJlbGxvLWRhdGVcIj4ke2RhdGV9PC9zcGFuPiR7Y2FyZC5uYW1lfTwvaDQ+YDtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIE1lbWJlcnNcclxuXHQgICAgLy9cclxuXHQgICAgbGV0IG1lbWJlcnMgPSAnJztcclxuXHQgICAgZm9yKGxldCBpZCBvZiBjYXJkLm1lbWJlcnMpIHtcclxuXHRcdCAgICB2YXIgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW2lkXTtcclxuXHRcdCAgICBpZihtZW1iZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0ICAgIG1lbWJlcnMgKz0gJyAvICc7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIG1lbWJlcnMgKz0gJzxzcGFuPicgKyBtZW1iZXIubmFtZSArICc8L3NwYW4+JztcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IG1lbWJlcnNQID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1jYXJkLW1lbWJlcnMnKVxyXG5cdCAgICBjYXJkRGl2LmFwcGVuZENoaWxkKG1lbWJlcnNQKTtcclxuXHQgICAgbWVtYmVyc1AuaW5uZXJIVE1MID0gbWVtYmVycztcclxuXHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBEZXNjcmlwdGlvblxyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgZGVzYyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1kZXNjcmlwdGlvbicpO1xyXG5cdCAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGRlc2MpO1xyXG5cdCAgICBkZXNjLmlubmVySFRNTCA9IGNhcmQuZGVzYztcclxuXHJcblx0ICAgIHByZXNlbnRDb21tZW50cyhjYXJkRGl2LCBjYXJkKTtcclxuXHQgICAgcHJlc2VudFVwZGF0ZXMoY2FyZERpdiwgY2FyZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXNlbnRDYXJkID0gcHJlc2VudENhcmQ7XHJcblxyXG4gICAgbGV0IHByZXNlbnRDb21tZW50cyA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgaWYoY2FyZC5jb21tZW50cy5sZW5ndGggPT09IDApIHtcclxuXHRcdCAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCBjb21tZW50RGl2ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLWNvbW1lbnRzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChjb21tZW50RGl2KTtcclxuXHJcblx0XHRmb3IobGV0IGNvbW1lbnQgb2YgY2FyZC5jb21tZW50cykge1xyXG5cdFx0XHRsZXQgbWVtYmVyID0gY2FyZC5ib2FyZC5tZW1iZXJzW2NvbW1lbnQubWVtYmVyXTtcclxuXHRcdFx0bGV0IG1lbWJlck5hbWUgPSBtZW1iZXIgIT09IHVuZGVmaW5lZCA/IG1lbWJlci5uYW1lIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdFx0bGV0IGRhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKGNvbW1lbnQuZGF0ZSk7XHJcblxyXG5cdFx0XHRsZXQgaDUgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcblx0XHRcdGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQoaDUpO1xyXG5cdFx0XHRoNS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0cmVsbG8tZGF0ZVwiPiR7ZGF0ZX08L3NwYW4+JHttZW1iZXJOYW1lfWA7XHJcblxyXG5cdFx0XHRsZXQgdGV4dERpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcblx0XHRcdHRleHREaXYuaW5uZXJIVE1MID0gY29tbWVudC50ZXh0O1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50VXBkYXRlcyA9IChkaXYsIGNhcmQpID0+IHtcclxuXHQgICAgaWYoY2FyZC51cGRhdGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgbGV0IHVwZGF0ZURpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby11cGRhdGVzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZCh1cGRhdGVEaXYpO1xyXG5cclxuXHQgICAgZm9yKGxldCB1cGRhdGUgb2YgY2FyZC51cGRhdGVzKSB7XHJcblx0XHQgICAgdmFyIG1lbWJlciA9IGNhcmQuYm9hcmQubWVtYmVyc1t1cGRhdGUubWVtYmVyXTtcclxuXHRcdCAgICB2YXIgbWVtYmVyTmFtZSA9IG1lbWJlciAhPT0gdW5kZWZpbmVkID8gbWVtYmVyLm5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0ICAgIHZhciBkYXRlID0gVXRpbC5mb3JtYXREYXRldGltZSh1cGRhdGUuZGF0ZSk7XHJcblx0XHQgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHQgICAgdXBkYXRlRGl2LmFwcGVuZENoaWxkKHApO1xyXG5cdFx0ICAgIHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZGF0ZVwiPicgKyBkYXRlICsgJzwvc3Bhbj4gJyArIG1lbWJlck5hbWUgK1xyXG5cdFx0XHQgICAgJyBtb3ZlZCBmcm9tIDxzcGFuIGNsYXNzPVwibGlzdFwiPicgKyB1cGRhdGUubGlzdEJlZm9yZSArXHJcblx0XHRcdCAgICAnPC9zcGFuPiB0byA8c3BhbiBjbGFzcz1cImxpc3RcIj4nICsgdXBkYXRlLmxpc3RBZnRlciArICc8L3NwYW4+JztcclxuXHQgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuQm9hcmRWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVZpZXcucHJvdG90eXBlKTtcclxuQm9hcmRWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJvYXJkVmlldztcclxuLy8vIEBlbmRjb25kXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBsaXN0IGluIGEgYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vVXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZCA9IGZ1bmN0aW9uKGJvYXJkLCBsaXN0LCBkYXRhKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5uYW1lID0gVXRpbC5zdHJpcF90YWdzKGRhdGEubmFtZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5kZXNjID0gJzxwPicgK1xyXG4gICAgICAgIFV0aWwuc3RyaXBfdGFncyhkYXRhLmRlc2MpLnJlcGxhY2UoL1xcbi9nbSwgJzxwPicpICtcclxuICAgICAgICAnPC9wPic7XHJcbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZShwYXJzZUludChkYXRhLmlkLnN1YnN0cigwLCA4KSwgMTYpICogMTAwMCk7XHJcblxyXG4gICAgdGhpcy5tZW1iZXJzID0gW107XHJcblxyXG4gICAgZGF0YS5pZE1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIHRoYXQubWVtYmVycy5wdXNoKGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29tbWVudHMgPSBbXTtcclxuICAgIHRoaXMudXBkYXRlcyA9IFtdO1xyXG59XHJcblxyXG5DYXJkLnByb3RvdHlwZS5zb3J0X3VwZGF0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMudXBkYXRlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZihhLmRhdGUgPCBiLmRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSBpZihhLmRhdGUgPT0gYi5kYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIHRoZSBsYXN0IHRpbWUgdGhpcyBjYXJkIHdhcyBtb3ZlZC5cclxuICogVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVuIGEgY29tcGxldGVkIGNhcmQgd2FzXHJcbiAqIG1vdmVkIHRvIENvbXBsZXRlZC5cclxuICovXHJcbkNhcmQucHJvdG90eXBlLmZpbmFsX3RpbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmKHRoaXMudXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlc1t0aGlzLnVwZGF0ZXMubGVuZ3RoLTFdLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IG1lbWJlcnMgZnJvbSBhIGNvbGxlY3Rpb24gb2YgY2FyZHMuXHJcbiAqIEBwYXJhbSBib2FyZCBCb2FyZCBvYmplY3RcclxuICogQHBhcmFtIGxpc3QgYXJyYXkgb2YgQ2FyZCBvYmplY3RzXHJcbiAqIEByZXR1cm5zIG9iamVjdCB3aXRoIGlkIGFzIHByb3BlcnR5IHRvIG9iamVjdCB7Y250OiA/LCBtZW1iZXI6ID99XHJcbiAqL1xyXG5DYXJkLmNvdW50X21lbWJlcnMgPSBmdW5jdGlvbihib2FyZCwgbGlzdCkge1xyXG4gICAgdmFyIGNvdW50ID0ge307XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICBjYXJkLm1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICB2YXIgbWVtYmVyID0gYm9hcmQubWVtYmVyc1tpZF07XHJcbiAgICAgICAgICAgIGlmKGNvdW50Lmhhc093blByb3BlcnR5KG1lbWJlci5pZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50W21lbWJlci5pZF0uY250Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFttZW1iZXIuaWRdID0ge2NudDogMSwgbWVtYmVyOiBtZW1iZXJ9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gY29tbWVudCBvbiBhIGNhcmRcclxuICovXHJcblxyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbi8qKlxyXG4gQXJyYXlcclxuIChcclxuIFtpZF0gPT4gNTdlZWMxY2EyMjY4NDY0NmIxMTkzYWJkXHJcbiBbaWRNZW1iZXJDcmVhdG9yXSA9PiA1N2VjMWJkYWZlZWRjYmJjNzNkNjAwZDFcclxuIFtkYXRhXSA9PiBBcnJheVxyXG4gKFxyXG4gW2xpc3RdID0+IEFycmF5XHJcbiAoXHJcbiBbbmFtZV0gPT4gRGVzaWduXHJcbiBbaWRdID0+IDU3ZTkyMGEyYjM0NTE4MjAzZmQ1ZjMxOVxyXG4gKVxyXG5cclxuIFtib2FyZF0gPT4gQXJyYXlcclxuIChcclxuIFtzaG9ydExpbmtdID0+IGk5ZVhFNHlKXHJcbiBbbmFtZV0gPT4gUHJvamVjdCAxIFRlYW06IEFyYm9cclxuIFtpZF0gPT4gNTdlOTIwNGFjM2YzMjNmMTc4NWQ3YmU0XHJcbiApXHJcblxyXG4gW2NhcmRdID0+IEFycmF5XHJcbiAoXHJcbiBbc2hvcnRMaW5rXSA9PiBGZ2d2ZDRuWFxyXG4gW2lkU2hvcnRdID0+IDIxXHJcbiBbbmFtZV0gPT4gVmlzdWFsIFBhcmFkaWdtIENsYXNzIERlc2lnblxyXG4gW2lkXSA9PiA1N2VlYzA3NzZmZDAwNWY3YjgxYzgyMzlcclxuIClcclxuXHJcbiBbdGV4dF0gPT4gVmlzdWFsIFBhcmFkaWdtIENsYXNzIERlc2lnblxyXG4gKVxyXG5cclxuIFt0eXBlXSA9PiBjb21tZW50Q2FyZFxyXG4gW2RhdGVdID0+IDIwMTYtMDktMzBUMTk6NDk6MzAuOTc0WlxyXG4gW21lbWJlckNyZWF0b3JdID0+IEFycmF5XHJcbiAoXHJcbiBbaWRdID0+IDU3ZWMxYmRhZmVlZGNiYmM3M2Q2MDBkMVxyXG4gW2F2YXRhckhhc2hdID0+XHJcbiBbZnVsbE5hbWVdID0+IEJyaXR0YW55IEdhbGxpZXJzXHJcbiBbaW5pdGlhbHNdID0+IEJHXHJcbiBbdXNlcm5hbWVdID0+IGJyaXR0YW55Z2FsbGllcnMxXHJcbiApXHJcbiAqIEBwYXJhbSBib2FyZFxyXG4gKiBAcGFyYW0gY2FyZFxyXG4gKiBAcGFyYW0gZGF0YVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb21tZW50ID0gZnVuY3Rpb24oYm9hcmQsIGNhcmQsIGRhdGEpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIHRoaXMuY2FyZCA9IGNhcmQ7XHJcbiAgICB0aGlzLm1lbWJlciA9IGRhdGEuaWRNZW1iZXJDcmVhdG9yO1xyXG4gICAgdGhpcy50ZXh0ID0gJzxwPicgK1xyXG4gICAgICAgIFV0aWwuc3RyaXBfdGFncyhkYXRhLmRhdGEudGV4dCkucmVwbGFjZSgvXFxuL2dtLCAnPHA+JykgK1xyXG4gICAgICAgICc8L3A+JztcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShkYXRhLmRhdGUpKTtcclxufSIsIi8qXHJcbiAqIEJhc2Ugb2JqZWN0IGZvciB2aWV3cyBvZiBUcmVsbG8gZGF0YS5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVZpZXcgPSBmdW5jdGlvbigpIHtcclxuXHJcbn1cclxuXHJcbkRhdGFWaWV3LnByb3RvdHlwZS5wcmVzZW50ID0gZnVuY3Rpb24oZGl2LCBib2FyZCkge31cclxuXHJcblxyXG4iLCJpbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEaXNjb25uZWN0ZWRWaWV3ID0gZnVuY3Rpb24oZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKSB7XHJcblx0Ly8gRW5zdXJlIGVtcHR5XHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0bGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRVdGlsLmFkZENsYXNzKGRpdiwgJ3RyZWxsby1zcHJpbnRlcicpO1xyXG5cclxuXHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblx0VXRpbC5hZGRDbGFzcyhwLCAnY2VudGVyJyk7XHJcblxyXG5cdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0YnV0dG9uLmlubmVyVGV4dCA9ICdDb25uZWN0IHRvIFRyZWxsbyc7XHJcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dHJlbGxvLmF1dGhvcml6ZSgpO1xyXG5cdH0pXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gbGlzdCBpbiBhIGJvYXJkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuL0NhcmQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3QgPSBmdW5jdGlvbihib2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5jYXJkcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY2FyZHNfYnlfaWQgPSB7fTtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuYWRkX2NhcmQgPSBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XHJcbiAgICB0aGlzLmNhcmRzX2J5X2lkW2NhcmQuaWRdID0gY2FyZDtcclxufVxyXG5cclxuTGlzdC5wcm90b3R5cGUuZmluZF9jYXJkID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGlmKHRoaXMuY2FyZHNfYnlfaWQuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHNfYnlfaWRbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5MaXN0LnByb3RvdHlwZS5jb3VudF9tZW1iZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gQ2FyZC5jb3VudF9tZW1iZXJzKHRoaXMuYm9hcmQsIHRoaXMuY2FyZHMpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge1V0aWx9IGZyb20gXCIuL1V0aWxcIjtcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tICcuL0JvYXJkVmlldyc7XHJcbmltcG9ydCB7U3ByaW50Vmlld30gZnJvbSBcIi4vU3ByaW50cy9TcHJpbnRWaWV3XCI7XHJcbmltcG9ydCB7U3ByaW50VGFibGVWaWV3fSBmcm9tICcuL1NwcmludHMvU3ByaW50VGFibGVWaWV3JztcclxuaW1wb3J0IHtEaXNjb25uZWN0ZWRWaWV3fSBmcm9tIFwiLi9EaXNjb25uZWN0ZWRWaWV3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWFpblZpZXcgPSBmdW5jdGlvbihlbGVtZW50LCB0cmVsbG8sIG9wdGlvbnMpIHtcclxuXHQvLyBFbnN1cmUgZW1wdHlcclxuXHRlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0ZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFV0aWwuYWRkQ2xhc3MoZGl2LCAndHJlbGxvLXNwcmludGVyJyk7XHJcblxyXG5cdGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHRVdGlsLmFkZENsYXNzKHAsICdjZW50ZXInKTtcclxuXHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHRidXR0b24uaW5uZXJUZXh0ID0gJ0Rpc2Nvbm5lY3QnO1xyXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRyZWxsby5kaXNjb25uZWN0KCk7XHJcblxyXG5cdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudCwgdHJlbGxvLCBvcHRpb25zKTtcclxuXHR9KVxyXG5cclxuXHJcblx0bGV0IHBTdGF0dXMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLXN0YXR1cycpO1xyXG5cdHBTdGF0dXMuaW5uZXJUZXh0ID0gJ0Nvbm5lY3RpbmcgdG8gVHJlbGxvLi4uJztcclxuXHRkaXYuYXBwZW5kQ2hpbGQocFN0YXR1cyk7XHJcblxyXG5cdGxldCBwTXNnID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJywgJ3RyZWxsby1tc2cnKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQocE1zZyk7XHJcblxyXG5cdEJvYXJkLmZldGNoKHRyZWxsbywgb3B0aW9ucy5ib2FyZCwgb3B0aW9ucywgcE1zZywgKGJvYXJkKSA9PiB7XHJcblx0XHQvLyBTdWNjZXNzXHJcblx0XHRwU3RhdHVzLmlubmVyVGV4dCA9ICdUcmVsbG8gQm9hcmQ6ICcgKyBib2FyZC5uYW1lO1xyXG5cdFx0cE1zZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBNc2cpO1xyXG5cclxuXHRcdGZvcihsZXQgdmlldyBpbiBvcHRpb25zLnZpZXdzKSB7XHJcblx0XHRcdHN3aXRjaCh2aWV3KSB7XHJcblx0XHRcdFx0Y2FzZSAnYm9hcmQnOlxyXG5cdFx0XHRcdFx0bGV0IHYgPSBuZXcgQm9hcmRWaWV3KGRpdiwgYm9hcmQpO1xyXG5cdFx0XHRcdFx0di5wcmVzZW50KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnc3ByaW50JzpcclxuXHRcdFx0XHRcdHYgPSBuZXcgU3ByaW50VmlldyhkaXYsIGJvYXJkLCBvcHRpb25zLnZpZXdzLnNwcmludCk7XHJcblx0XHRcdFx0XHR2LnByZXNlbnQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdzcHJpbnRUYWJsZSc6XHJcblx0XHRcdFx0XHR2ID0gbmV3IFNwcmludFRhYmxlVmlldyhkaXYsIGJvYXJkLCBvcHRpb25zLnZpZXdzLnNwcmludFRhYmxlKTtcclxuXHRcdFx0XHRcdHYucHJlc2VudCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCAobXNnKSA9PiB7XHJcblx0XHQvLyBGYWlsdXJlXHJcblx0XHRwTXNnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocE1zZyk7XHJcblx0XHRwU3RhdHVzLmlubmVyVGV4dCA9IG1zZztcclxuXHR9KTtcclxuXHJcblx0Ly90cmVsbG8uZmV0Y2goKTtcclxuXHJcbn0iLCIvKlxyXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIFRyZWxsbyBtZW1iZXIgaW4gYSBib2FyZFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBNZW1iZXIgPSBmdW5jdGlvbihib2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxufSIsIi8qXHJcbiAqIFJlcHJlc2VudHMgYSBzaW5nbGUgc3ByaW50IGluIHRoZSBzcHJpbnRzIGFuYWx5c2lzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwcmludCA9IGZ1bmN0aW9uKHNwcmludHMsIHN0YXJ0LCBlbmQpIHtcclxuICAgIHRoaXMuc3ByaW50cyA9IHNwcmludHM7XHJcbiAgICB0aGlzLnN0YXJ0X21lZXRpbmcgPSBzdGFydDtcclxuICAgIHRoaXMuZW5kX21lZXRpbmcgPSBlbmQ7XHJcblxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcclxufVxyXG5cclxuU3ByaW50LnByb3RvdHlwZS5lbmRfdGltZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZW5kX21lZXRpbmcuY3JlYXRlZC5nZXRUaW1lKCkgK1xyXG4gICAgICAgICh0aGlzLnNwcmludHMuc3ByaW50X3RpbWVfc2xvcCAqIDEwMDApKTtcclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUZWFtIG1lbWJlciBzdGF0aXN0aWNzIGZvciBhIHNwcmludFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRNZW1iZXIgPSBmdW5jdGlvbihzcHJpbnRzLCBtZW1iZXIpIHtcclxuICAgIHRoaXMubWVtYmVyID0gbWVtYmVyO1xyXG4gICAgdGhpcy5zcHJpbnRzID0gc3ByaW50cztcclxuXHJcbiAgICB0aGlzLm1lZXRpbmdzX2NvdW50ID0gMDtcclxuICAgIHRoaXMubWVldGluZ3NfYXR0ZW5kZWQgPSAwO1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbXBsZXRlZF9jb3VudCA9IDA7XHJcbiAgICB0aGlzLmNvbXBsZXRlZF90b3RhbCA9IDA7XHJcbiAgICBcclxuICAgIHRoaXMucmV2aWV3c19jb3VudCA9IDA7XHJcbiAgICB0aGlzLnJldmlld3NfdG90YWwgPSAwO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLm1lZXRpbmdzX3BlcmNlbnRhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmKHRoaXMubWVldGluZ3NfY291bnQgPD0gdGhpcy5zcHJpbnRzLm1lZXRpbmdzX3Nsb3ApIHtcclxuICAgICAgICByZXR1cm4gJyhpbnN1ZmZpY2llbnQgbWVldGluZ3MpJztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGVyID0gdGhpcy5tZWV0aW5nc19hdHRlbmRlZCAvICh0aGlzLm1lZXRpbmdzX2NvdW50IC0gdGhpcy5zcHJpbnRzLm1lZXRpbmdzX3Nsb3ApO1xyXG4gICAgaWYocGVyID4gMSkge1xyXG4gICAgICAgIHBlciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBlci50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5TcHJpbnRNZW1iZXIucHJvdG90eXBlLmNvbXBsZXRlZF9mYWN0b3IgPSBmdW5jdGlvbih0ZWFtU2l6ZSkge1xyXG4gICAgaWYodGhpcy5jb21wbGV0ZWRfdG90YWwgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmFjdG9yID0gdGhpcy5jb21wbGV0ZWRfY291bnQgL1xyXG4gICAgICAgICh0aGlzLmNvbXBsZXRlZF90b3RhbCAvIHRlYW1TaXplICogdGhpcy5zcHJpbnRzLmNvbXBsZXRlZF9mYWN0b3IpO1xyXG4gICAgaWYoZmFjdG9yID4gMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmYWN0b3IudG9GaXhlZCgyKTtcclxufVxyXG5cclxuU3ByaW50TWVtYmVyLnByb3RvdHlwZS5yZXZpZXdpbmdfZmFjdG9yID0gZnVuY3Rpb24odGVhbVNpemUpIHtcclxuICAgIGlmKHRoaXMucmV2aWV3c190b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWN0b3IgPSB0aGlzLnJldmlld3NfY291bnQgL1xyXG4gICAgICAgICh0aGlzLnJldmlld3NfdG90YWwgLyB0ZWFtU2l6ZSAqIHRoaXMuc3ByaW50cy5yZXZpZXdpbmdfZmFjdG9yKTtcclxuICAgIGlmKGZhY3RvciA+IDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWN0b3IudG9GaXhlZCgyKTtcclxufSIsIi8qXHJcbiAqIFRyZWxsbyBib2FyZCB2aWV3IHRoYXQgZGlzcGxheXMgc3ByaW50IHJlc3VsdCBpbiBhIHRhYmxlLlxyXG4gKi9cclxuaW1wb3J0IHtEYXRhVmlld30gZnJvbSAnLi4vRGF0YVZpZXcnO1xyXG5pbXBvcnQge1NwcmludHN9IGZyb20gJy4vU3ByaW50cyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vVXRpbCc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuaW1wb3J0IHtCb2FyZFZpZXd9IGZyb20gXCIuLi9Cb2FyZFZpZXdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRUYWJsZVZpZXcgPSBmdW5jdGlvbihkaXYsIGJvYXJkLCBvcHRpb25zKSB7XHJcbiAgICBEYXRhVmlldy5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGxldCBhZGRIZWFkaW5ncyA9IHRydWU7XHJcbiAgICBpZihvcHRpb25zLmFkZEhlYWRpbmdzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBhZGRIZWFkaW5ncyA9IG9wdGlvbnMuYWRkSGVhZGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmVzZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1zcHJpbnQtdGFibGUnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBjb25zdCB0YWJsZSA9IFV0aWwuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuXHQgICAgdmlldy5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuY2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICAgICAgVXRpbC5hZGRDbGFzcyh0YWJsZSwgb3B0aW9ucy5jbGFzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gQ3JlYXRlIHRoZSBzcHJpbnQgYW5hbHlzaXNcclxuXHQgICAgLy9cclxuXHQgICAgY29uc3Qgc3ByaW50cyA9IG5ldyBTcHJpbnRzKGJvYXJkKTtcclxuXHQgICAgY29uc3QgdGVhbVNpemUgPSBzcHJpbnRzLm51bV9tZW1iZXJzKCk7XHJcblxyXG5cdCAgICBpZihhZGRIZWFkaW5ncykge1xyXG5cdFx0ICAgIHRhYmxlSGVhZGluZyh0YWJsZSwgYm9hcmQsIHNwcmludHMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgcm93SFRNTCA9ICcnO1xyXG5cdCAgICBmdW5jdGlvbiBpdGVtKGRhdGEpIHtcclxuXHRcdCAgICByb3dIVE1MICs9ICc8dGQ+JyArIGRhdGEgKyAnPC90ZD4nO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmb3IodmFyIGlkIGluIHNwcmludHMubWVtYmVycykge1xyXG5cdFx0ICAgIGlmKHNwcmludHMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuXHRcdFx0ICAgIHZhciBtZW1iZXIgPSBzcHJpbnRzLm1lbWJlcnNbaWRdO1xyXG5cdFx0XHQgICAgdmFyIGlkID0gbWVtYmVyLm1lbWJlci5pZDtcclxuXHJcblx0XHRcdCAgICByb3dIVE1MID0gJyc7XHJcblxyXG5cdFx0XHQgICAgLy8gT3VyIHN0YXRpc3RpY3NcclxuXHRcdFx0ICAgIGl0ZW0oYm9hcmQubmFtZSk7XHJcblx0XHRcdCAgICBpdGVtKHRlYW1TaXplKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lbWJlci5uYW1lKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX2NvdW50KTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLm1lZXRpbmdzX3BlcmNlbnRhZ2UoKSk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5jb21wbGV0ZWRfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIuY29tcGxldGVkX3RvdGFsKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLmNvbXBsZXRlZF9mYWN0b3IodGVhbVNpemUpKTtcclxuXHRcdFx0ICAgIGl0ZW0obWVtYmVyLnJldmlld3NfY291bnQpO1xyXG5cdFx0XHQgICAgaXRlbShtZW1iZXIucmV2aWV3c190b3RhbCk7XHJcblx0XHRcdCAgICBpdGVtKG1lbWJlci5yZXZpZXdpbmdfZmFjdG9yKHRlYW1TaXplKSk7XHJcblx0XHRcdCAgICBpdGVtKHNwcmludHMuc3ByaW50cy5sZW5ndGgpO1xyXG5cclxuXHRcdFx0ICAgIHNwcmludHMuc3ByaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNwcmludCkge1xyXG5cdFx0XHRcdCAgICB2YXIgY250ID0gMDtcclxuXHRcdFx0XHQgICAgc3ByaW50LmNvbXBsZXRlZC5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpIHtcclxuXHRcdFx0XHRcdCAgICBpZihjYXJkLm1lbWJlcnMubGVuZ3RoID09IDEgJiYgY2FyZC5tZW1iZXJzWzBdID09IGlkKSB7XHJcblx0XHRcdFx0XHRcdCAgICBjbnQrKztcclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIH0pO1xyXG5cclxuXHRcdFx0XHQgICAgaXRlbShjbnQpO1xyXG5cdFx0XHRcdCAgICBpdGVtKHNwcmludC5jb21wbGV0ZWQubGVuZ3RoKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cclxuXHRcdFx0ICAgIGlmKCFpc05hTihhZGRIZWFkaW5ncykpIHtcclxuXHRcdFx0XHQgICAgZm9yKHZhciBpPXNwcmludHMuc3ByaW50cy5sZW5ndGg7IGk8YWRkSGVhZGluZ3M7IGkrKykge1xyXG5cdFx0XHRcdFx0ICAgIGl0ZW0oXCImbmJzcDtcIik7XHJcblx0XHRcdFx0XHQgICAgaXRlbShcIiZuYnNwO1wiKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIGNvbnN0IHRyID0gVXRpbC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cdFx0XHQgICAgdHIuaW5uZXJIVE1MID0gcm93SFRNTDtcclxuXHRcdFx0ICAgIHRhYmxlLmFwcGVuZENoaWxkKHRyKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0YWJsZUhlYWRpbmcgPSBmdW5jdGlvbih0YWJsZSwgYm9hcmQsIHNwcmludHMpIHtcclxuICAgICAgICBjb25zdCB0ciA9IFV0aWwuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMudHIxY2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBVdGlsLmFkZENsYXNzKHRyLCBvcHRpb25zLnRyMWNsYXNzKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICB2YXIgcm93SFRNTCA9ICcnO1xyXG5cdCAgICBmdW5jdGlvbiBpdGVtKGRhdGEpIHtcclxuXHRcdCAgICByb3dIVE1MICs9ICc8dGg+PGRpdj4nICsgZGF0YSArICc8L2Rpdj48L3RoPic7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGl0ZW0oXCJUZWFtXCIpO1xyXG5cdCAgICBpdGVtKFwiI1wiKTtcclxuXHQgICAgaXRlbShcIk1lbWJlclwiKTtcclxuXHQgICAgaXRlbShcIkF0dGVuZGVkXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiQ29tcGxldGVkXCIpO1xyXG5cdCAgICBpdGVtKFwiVG90YWxcIik7XHJcblx0ICAgIGl0ZW0oXCIlXCIpO1xyXG5cdCAgICBpdGVtKFwiUmV2aWV3c1wiKTtcclxuXHQgICAgaXRlbShcIlRvdGFsXCIpO1xyXG5cdCAgICBpdGVtKFwiJVwiKTtcclxuXHQgICAgaXRlbShcIlNwcmludHNcIik7XHJcblxyXG5cdCAgICBpZihhZGRIZWFkaW5ncyA9PT0gdHJ1ZSkge1xyXG5cdFx0ICAgIGZvcih2YXIgaT0xOyBpPD1zcHJpbnRzLnNwcmludHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0ICAgIGl0ZW0oaSk7XHJcblx0XHRcdCAgICBpdGVtKFwiI1wiKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgZm9yKHZhciBpPTE7IGk8PWFkZEhlYWRpbmdzOyBpKyspIHtcclxuXHRcdFx0ICAgIGl0ZW0oaSk7XHJcblx0XHRcdCAgICBpdGVtKFwiI1wiKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gcm93SFRNTDtcclxuICAgIH1cclxufVxyXG5cclxuLy8vIEBjb25kXHJcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XHJcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTcHJpbnRUYWJsZVZpZXc7XHJcbi8vLyBAZW5kY29uZFxyXG5cclxuXHJcblNwcmludFRhYmxlVmlldy5wcm90b3R5cGUudGFibGVfaGVhZGluZ3MgPSBmdW5jdGlvbihib2FyZCwgc3ByaW50cykge1xyXG5cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRyZWxsbyBib2FyZCB2aWV3IHRoYXQgZGlzcGxheXMgc3ByaW50IHJlc3VsdHNcclxuICovXHJcbmltcG9ydCB7RGF0YVZpZXd9IGZyb20gJy4uL0RhdGFWaWV3JztcclxuaW1wb3J0IHtTcHJpbnRzfSBmcm9tICcuL1NwcmludHMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL1V0aWwnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gXCIuLi9DYXJkXCI7XHJcbmltcG9ydCB7Qm9hcmRWaWV3fSBmcm9tIFwiLi4vQm9hcmRWaWV3XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3ByaW50VmlldyA9IGZ1bmN0aW9uKGRpdiwgYm9hcmQpIHtcclxuICAgIERhdGFWaWV3LmNhbGwodGhpcyk7XHJcblxyXG4gICAgLy8gVGhpcyB1c2VzIEJvYXJkVmlldyB0byBkcmF3IHdoYXQgaXQga25vd3MgaG93IHRvIGRyYXdcclxuICAgIGNvbnN0IGJvYXJkX3ZpZXcgPSBuZXcgQm9hcmRWaWV3KGRpdiwgYm9hcmQpO1xyXG5cclxuICAgIHRoaXMucHJlc2VudCA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBDcmVhdGUgdGhlIHNwcmludCBhbmFseXNpc1xyXG5cdCAgICAvL1xyXG5cdCAgICBjb25zdCBzcHJpbnRzID0gbmV3IFNwcmludHMoYm9hcmQpO1xyXG5cclxuXHRcdGxldCB2aWV3ID0gVXRpbC5jcmVhdGVFbGVtZW50KCdkaXYnLCAndHJlbGxvLXNwcmludHMnKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuXHJcblx0ICAgIGxldCBoMiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHQgICAgaDIuaW5uZXJUZXh0ID0gJ1NwcmludHMgQW5hbHlzaXMnO1xyXG5cdCAgICB2aWV3LmFwcGVuZENoaWxkKGgyKTtcclxuXHJcblx0XHRwcmVzZW50X2Vycm9ycyh2aWV3LCBzcHJpbnRzKTtcclxuXHRcdHByZXNlbnRfd2FybmluZ3Modmlldywgc3ByaW50cyk7XHJcblxyXG5cdCAgICBpZihzcHJpbnRzLmVycm9ycy5sZW5ndGggPiAwKSB7XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHByZXNlbnRfc3ByaW50cyh2aWV3LCBzcHJpbnRzKTtcclxuXHRcdHByZXNlbnRfbWVtYmVycyh2aWV3LCBzcHJpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9lcnJvcnMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuXHQgICAgaWYoc3ByaW50cy5lcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGxldCBlcnJvcnMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tZXJyb3JzJyk7XHJcblx0ICAgIGRpdi5hcHBlbmRDaGlsZChlcnJvcnMpO1xyXG5cclxuXHQgICAgZXJyb3JzLmlubmVySFRNTCA9ICc8aDM+RXJyb3JzPC9oMz4nO1xyXG5cclxuXHQgICAgZm9yKGxldCBlcnJvciBvZiBzcHJpbnRzLmVycm9ycykge1xyXG5cdCAgICBcdGxldCBwID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIFx0ZXJyb3JzLmFwcGVuZENoaWxkKHApO1xyXG5cdCAgICBcdHAuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwidHJlbGxvLWNvZGVcIj4nICsgZXJyb3IuY29kZSArICc6PC9zcGFuPiAnICsgZXJyb3IubXNnO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfd2FybmluZ3MgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuICAgIFx0aWYoc3ByaW50cy53YXJuaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgIFx0XHRyZXR1cm47XHJcbiAgICBcdH1cclxuXHJcblx0ICAgIGxldCB3YXJuaW5ncyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby13YXJuaW5ncycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQod2FybmluZ3MpO1xyXG5cclxuXHQgICAgd2FybmluZ3MuaW5uZXJIVE1MID0gJzxoMz5XYXJuaW5nczwvaDM+JztcclxuXHJcblx0ICAgIGZvcihsZXQgd2FybmluZyBvZiBzcHJpbnRzLndhcm5pbmdzKSB7XHJcblx0XHQgICAgbGV0IHAgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdCAgICB3YXJuaW5ncy5hcHBlbmRDaGlsZChwKTtcclxuXHRcdCAgICBwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInRyZWxsby1jb2RlXCI+JyArIHdhcm5pbmcuY29kZSArICc6PC9zcGFuPiAnICsgd2FybmluZy5tc2c7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcHJlc2VudF9zcHJpbnRzID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzKSB7XHJcblx0XHRsZXQgdmlldyA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby12aWV3Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQodmlldyk7XHJcblxyXG5cdCAgICBmb3IodmFyIHM9MTsgczw9c3ByaW50cy5zcHJpbnRzLmxlbmd0aDsgcysrKSB7XHJcblx0ICAgICAgICB2YXIgc3ByaW50ID0gc3ByaW50cy5zcHJpbnRzW3MtMV07XHJcblx0ICAgICAgICBwcmVzZW50X3NwcmludCh2aWV3LCBzcHJpbnRzLCBzLCBzcHJpbnQpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfc3ByaW50ID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzLCBudW0sIHNwcmludCkge1xyXG5cdCAgICBjb25zdCBmbURhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHNwcmludC5zdGFydF9tZWV0aW5nLmNyZWF0ZWQpO1xyXG5cdCAgICBjb25zdCB0b0RhdGUgPSBVdGlsLmZvcm1hdERhdGV0aW1lKHNwcmludC5lbmRfbWVldGluZy5jcmVhdGVkKTtcclxuXHQgICAgY29uc3QgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBNZW1iZXIgY291bnRzIGZvciBjb21wbGV0ZWRcclxuXHQgICAgLy9cclxuICAgICAgICBjb25zdCBjb3VudHMgPSBDYXJkLmNvdW50X21lbWJlcnMoc3ByaW50cy5ib2FyZCwgc3ByaW50LmNvbXBsZXRlZCk7XHJcblxyXG5cdCAgICBsZXQgdG90YWxDb21wbGV0ZWQgPSAwO1xyXG5cdCAgICBmb3IobGV0IHNwcmludCBvZiBzcHJpbnRzLnNwcmludHMpIHtcclxuXHRcdCAgICB0b3RhbENvbXBsZXRlZCArPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHQgICAgfVxyXG5cclxuXHJcblx0ICAgIGxldCBjb21wbGV0aW9uRmFjdG9yID0gMC4wMDtcclxuXHQgICAgaWYodG90YWxDb21wbGV0ZWQgPiAwKSB7XHJcblx0ICAgICAgICBjb21wbGV0aW9uRmFjdG9yID0gY29tcGxldGVkIC8gKHRvdGFsQ29tcGxldGVkIC8gc3ByaW50cy5zcHJpbnRzLmxlbmd0aCAqIDAuOCk7XHJcblx0ICAgICAgICBpZihjb21wbGV0aW9uRmFjdG9yID4gMSkge1xyXG5cdCAgICAgICAgICAgIGNvbXBsZXRpb25GYWN0b3IgPSAxO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBjb21wbGV0aW9uRmFjdG9yID0gY29tcGxldGlvbkZhY3Rvci50b0ZpeGVkKDIpO1xyXG5cclxuXHQgICAgY29uc3QgaGVhZGVyID0gVXRpbC5jcmVhdGVFbGVtZW50KCdoMycsICd0cmVsbG8tcGx1cycpO1xyXG5cdCAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHQgICAgaGVhZGVyLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImRhdGVcIj4nICsgY29tcGxldGVkICtcclxuICAgICAgICAgJyB0YXNrcyAnICsgY29tcGxldGlvbkZhY3RvciArICcgLyAnICsgZm1EYXRlICsgJyB0byAnICsgdG9EYXRlICtcclxuICAgICAgICAgJzwvc3Bhbj5TcHJpbnQ6ICcgKyBudW07XHJcblxyXG5cdCAgICBjb25zdCBleHBhbmRlciA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1leHBhbmQnKTtcclxuXHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHQgICAgZGl2LmFwcGVuZENoaWxkKGV4cGFuZGVyKTtcclxuXHJcblx0ICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIGlmKGV4cGFuZGVyLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG5cdFx0XHQgICAgZXhwYW5kZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdCAgICBVdGlsLnJlbW92ZUNsYXNzKGhlYWRlciwgJ3RyZWxsby1wbHVzJyk7XHJcblx0XHRcdCAgICBVdGlsLmFkZENsYXNzKGhlYWRlciwgJ3RyZWxsby1taW51cycpO1xyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICBleHBhbmRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHQgICAgVXRpbC5yZW1vdmVDbGFzcyhoZWFkZXIsICd0cmVsbG8tbWludXMnKTtcclxuXHRcdFx0ICAgIFV0aWwuYWRkQ2xhc3MoaGVhZGVyLCAndHJlbGxvLXBsdXMnKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuICAgICAgICBib2FyZF92aWV3LnByZXNlbnRDYXJkKGV4cGFuZGVyLCBzcHJpbnQuc3RhcnRfbWVldGluZyk7XHJcbiAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgc3ByaW50LmVuZF9tZWV0aW5nKTtcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIENvbXBsZXRlZFxyXG5cdCAgICAvL1xyXG5cdCAgICBsZXQgcENvbXBsZXRlZCA9IFV0aWwuY3JlYXRlRWxlbWVudCgncCcsICd0cmVsbG8tY29tcGxldGVkLWhlYWRlcicpO1xyXG5cdCAgICBleHBhbmRlci5hcHBlbmRDaGlsZChwQ29tcGxldGVkKTtcclxuXHQgICAgcENvbXBsZXRlZC5pbm5lclRleHQgPSAnU3ByaW50IENvbXBsZXRlZCBUYXNrcyc7XHJcblxyXG5cdCAgICBsZXQgcE1lbWJlcnMgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ3AnLCAndHJlbGxvLWNvdW50Jyk7XHJcblx0ICAgIGV4cGFuZGVyLmFwcGVuZENoaWxkKHBNZW1iZXJzKTtcclxuXHJcblx0ICAgIGxldCBtZW1iZXJzID0gJzxlbT5Db21wbGV0ZWQ6PC9lbT5bJyArIHNwcmludC5jb21wbGV0ZWQubGVuZ3RoICsgJ10gJztcclxuXHQgICAgZm9yKHZhciBjIGluIGNvdW50cykge1xyXG5cdCAgICAgICAgaWYoY291bnRzLmhhc093blByb3BlcnR5KGMpKSB7XHJcblx0ICAgICAgICAgICAgbWVtYmVycyArPSBjb3VudHNbY10ubWVtYmVyLm5hbWUgKyAnOlsnICsgY291bnRzW2NdLmNudCArICddJm5ic3A7Jm5ic3A7JztcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcE1lbWJlcnMuaW5uZXJIVE1MID0gbWVtYmVycztcclxuXHJcblx0ICAgIC8vXHJcblx0ICAgIC8vIFByZXNlbnQgY29tcGxldGVkIGNhcmRzXHJcblx0ICAgIC8vXHJcblx0ICAgIGZvcihsZXQgaT0wOyBpPHNwcmludC5jb21wbGV0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgIGxldCBjb21wbGV0ZWQgPSBzcHJpbnQuY29tcGxldGVkW2ldO1xyXG5cdCAgICAgICAgYm9hcmRfdmlldy5wcmVzZW50Q2FyZChleHBhbmRlciwgY29tcGxldGVkKTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X21lbWJlcnMgPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuICAgIFx0bGV0IG1lbWJlcnNEaXYgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICd0cmVsbG8tbWVtYmVycycpO1xyXG4gICAgXHRkaXYuYXBwZW5kQ2hpbGQobWVtYmVyc0Rpdik7XHJcblxyXG5cdCAgICBmb3IodmFyIGlkIGluIHNwcmludHMubWVtYmVycykge1xyXG5cdCAgICAgICAgaWYoc3ByaW50cy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG5cdCAgICAgICAgICAgIHZhciBtZW1iZXIgPSBzcHJpbnRzLm1lbWJlcnNbaWRdO1xyXG5cdCAgICAgICAgICAgIHByZXNlbnRfbWVtYmVyKG1lbWJlcnNEaXYsIHNwcmludHMsIG1lbWJlcik7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0XHRwcmVzZW50X2luZm8obWVtYmVyc0Rpdiwgc3ByaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZXNlbnRfbWVtYmVyID0gZnVuY3Rpb24oZGl2LCBzcHJpbnRzLCBtZW1iZXIpIHtcclxuICAgIFx0bGV0IG1lbWJlckRpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1tZW1iZXInKTtcclxuICAgIFx0ZGl2LmFwcGVuZENoaWxkKG1lbWJlckRpdik7XHJcblxyXG5cdCAgICBsZXQgbWVldGluZ3MgPSBzcHJpbnRzLm1lZXRpbmdzX3Nsb3AgPT09IDEgPyAnIG1lZXRpbmcnIDogJyBtZWV0aW5ncyc7XHJcblx0ICAgIGxldCB0ZWFtU2l6ZSA9IHNwcmludHMubnVtX21lbWJlcnMoKTtcclxuXHJcblx0ICAgIG1lbWJlckRpdi5pbm5lckhUTUwgPSAnPGg0PicgKyBtZW1iZXIubWVtYmVyLm5hbWUgKyAnPC9oND4nICtcclxuXHJcblx0ICAgICAgICAnPHA+TWVldGluZ3MgYXR0ZW5kZWQ6ICcgKyBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQgKyAnLycgKyBtZW1iZXIubWVldGluZ3NfY291bnQgK1xyXG5cdCAgICAgICAgJyBwZXJjZW50YWdlOiAnICsgbWVtYmVyLm1lZXRpbmdzX3BlcmNlbnRhZ2UoKSArXHJcblx0ICAgICAgICAnIDxlbT5Zb3UgYXJlIGFsbG93ZWQgdG8gbWlzcyAnICsgc3ByaW50cy5tZWV0aW5nc19zbG9wICsgbWVldGluZ3MgKyAgJzwvZW0+JyArXHJcblx0ICAgICAgICAnPC9wPicgK1xyXG5cclxuXHQgICAgICAgICc8cD5UYXNrcyBjb21wbGV0ZWQ6ICcgKyBtZW1iZXIuY29tcGxldGVkX2NvdW50ICtcclxuXHQgICAgICAgICcvJyArIChtZW1iZXIuY29tcGxldGVkX3RvdGFsIC8gdGVhbVNpemUpLnRvRml4ZWQoMikgKyAnIGZvciBhIGNvbXBsZXRpb24gZmFjdG9yIG9mOiAnICtcclxuXHQgICAgICAgIG1lbWJlci5jb21wbGV0ZWRfZmFjdG9yKHRlYW1TaXplKSArICc8L3A+JyArXHJcblxyXG5cdCAgICAgICAgJzxwPlJldmlld3MgY29tcGxldGVkOiAnICsgbWVtYmVyLnJldmlld3NfY291bnQgKyAnIGZvciBhIHJldmlld2luZyBmYWN0b3Igb2Y6ICcgK1xyXG5cdCAgICAgICAgbWVtYmVyLnJldmlld2luZ19mYWN0b3IodGVhbVNpemUpICsgJzwvcD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcmVzZW50X2luZm8gPSBmdW5jdGlvbihkaXYsIHNwcmludHMpIHtcclxuICAgIFx0Y29uc3QgaW5mb0RpdiA9IFV0aWwuY3JlYXRlRWxlbWVudCgnZGl2JywgJ3RyZWxsby1pbmZvJyk7XHJcbiAgICBcdGRpdi5hcHBlbmRDaGlsZChpbmZvRGl2KTtcclxuXHJcbiAgICBcdGluZm9EaXYuaW5uZXJIVE1MID0gJzxwPlRoZSBjb21wbGV0aW9uIGZhY3RvciBmb3IgdGFza3MgaXMgYmFzZWQgb24gYSBtZXRyaWMgdGhhdCBldmVyeScgK1xyXG5cdFx0ICAgICcgdGVhbSBtZW1iZXIgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgJyArIChzcHJpbnRzLmNvbXBsZXRlZF9mYWN0b3IgKiAxMDApLnRvRml4ZWQoMCkgKyAnJSBvZicgK1xyXG5cdFx0ICAgICcgYW4gZXF1YWwgZGlzdHJpYnV0aW9uIG9mIHRhc2tzLiBWYWx1ZXMgbGVzcyB0aGFuIDEuMDAgaW5kaWNhdGUgdGhhdCB5b3Ugd2lsbCBiZScgK1xyXG5cdFx0ICAgICcgbG9zaW5nIHBvaW50cyBvbiB0aGUgYXNzaWdubWVudC48L3A+JyArXHJcblx0XHQgICAgJzxwPlRoZSByZXZpZXdpbmcgZmFjdG9yIGZvciB0YXNrcyBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IGV2ZXJ5IHRlYW0gbWVtYmVyJyArXHJcblx0XHQgICAgJyBpcyBleHBlY3RlZCB0byByZXZpZXcgJyArIChzcHJpbnRzLnJldmlld2luZ19mYWN0b3IgKiAxMDApLnRvRml4ZWQoMCkgKyAnJSBvZiBhbiBlcXVhbCcgK1xyXG5cdFx0ICAgICcgZGlzdHJpYnV0aW9uIG9mIHRhc2tzLiBUaGlzIGZhY3RvciBpcyBiYXNlZCBvbiBhIG1ldHJpYyB0aGF0IDkwJSBvZiB0YXNrcyBzaG91bGQnICtcclxuXHRcdCAgICAnIGJlIHByb2dyYW1taW5nIHRhc2tzLiBWYWx1ZXMgbGVzcyB0aGFuIDEuMDAgaW5kaWNhdGUgdGhhdCB5b3Ugd2lsbCBiZScgK1xyXG5cdFx0ICAgICcgbG9zaW5nIHBvaW50cyBvbiB0aGUgYXNzaWdubWVudC48L3A+J1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQGNvbmRcclxuU3ByaW50Vmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFWaWV3LnByb3RvdHlwZSk7XHJcblNwcmludFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ByaW50VmlldztcclxuLy8vIEBlbmRjb25kXHJcbiIsIi8qXHJcbiAqIFNwcmludCBhbmFseXNpcyBvZiBUcmVsbG8gYm9hcmRcclxuICovXHJcblxyXG5pbXBvcnQge1NwcmludH0gZnJvbSBcIi4vU3ByaW50XCI7XHJcbmltcG9ydCB7U3ByaW50TWVtYmVyfSBmcm9tIFwiLi9TcHJpbnRNZW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcHJpbnRzID0gZnVuY3Rpb24oYm9hcmQpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAvLy8gTnVtYmVyIG9mIG1pc3NlZCBtZWV0aW5ncyBhbGxvd1xyXG4gICAgdGhpcy5tZWV0aW5nc19zbG9wID0gMTtcclxuXHJcblxyXG4gICAgLy8vIE51bWJlciBvZiBzZWNvbmRzIGFmdGVyIG1lZXRpbmcgdGltZSB0byBjb25zaWRlciBjb21wbGV0ZWRcclxuICAgIC8vLyBpbiBhIGN1cnJlbnQgc3ByaW50IGluIHNlY29uZHMuXHJcbiAgICB0aGlzLnNwcmludF90aW1lX3Nsb3AgPSA1ICogNjAgKiA2MDsgICAvLyA1IGhvdXJzXHJcbiAgICBcclxuICAgIC8vLyBFYWNoIHVzZXJzIGlzIGV4cGVjdGVkIHRvIGNvbXBsZXRlIDgwJSBvZiBoaXMgc2hhcmUgb2YgdGFza3NcclxuICAgIHRoaXMuY29tcGxldGVkX2ZhY3RvciA9IDAuODtcclxuICAgIFxyXG4gICAgLy8vIEVhY2ggdXNlcnMgaXMgZXhwZWN0ZWQgdG8gY29tcGxldGUgODAlIG9mIDkwJSBvZiB0aGUgdGFzayBjb3VudCBpbiByZXZpZXdzXHJcbiAgICB0aGlzLnJldmlld2luZ19mYWN0b3IgPSAwLjggKiAwLjk7XHJcblxyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG5cclxuICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICB0aGlzLndhcm5pbmdzID0gW107XHJcblxyXG4gICAgdGhpcy5tZW1iZXJzID0ge307XHJcbiAgICB0aGlzLnNwcmludHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmRlc2lnbiA9IG51bGw7XHJcbiAgICB0aGlzLnJpc2tzID0gbnVsbDtcclxuICAgIHRoaXMubWVldGluZ3MgPSBudWxsO1xyXG4gICAgdGhpcy50b2RvID0gbnVsbDtcclxuICAgIHRoaXMuc3ByaW50X2FjdGl2ZSA9IG51bGw7XHJcbiAgICB0aGlzLnNwcmludF9jb21wbGV0ZWQgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBudWxsO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBDb3B5IG92ZXIgdGhlIG1lbWJlcnNcclxuICAgIC8vXHJcbiAgICBmb3IodmFyIGlkIGluIGJvYXJkLm1lbWJlcnMpIHtcclxuICAgICAgICB2YXIgbWVtYmVyID0gYm9hcmQubWVtYmVyc1tpZF07XHJcbiAgICAgICAgaWYobWVtYmVyLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJjc2UzMzVcIikge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0gPSBuZXcgU3ByaW50TWVtYmVyKHRoaXMsIG1lbWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEZpbmQgYWxsIG9mIHRoZSByZXF1aXJlZCBsaXN0c1xyXG4gICAgLy9cclxuICAgIHRoaXMuZmluZF9saXN0cygpO1xyXG5cclxuICAgIGlmKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlOTAwJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBPcmRlciB0ZXN0aW5nXHJcbiAgICAvL1xyXG4gICAgdGhpcy5vcmRlcl90ZXN0KCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIERldGVybWluZSBhdHRlbmRhbmNlXHJcbiAgICAvL1xyXG4gICAgdGhpcy5tZWV0aW5nX2F0dGVuZGFuY2UoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29udmVydCBtZWV0aW5ncyBpbnRvIHNwcmludHNcclxuICAgIC8vXHJcbiAgICB0aGlzLmNyZWF0ZV9zcHJpbnRzKCk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIFNvcnQgY29tcGxldGVkIGludG8gc3ByaW50c1xyXG4gICAgLy9cclxuICAgIHRoaXMuc29ydF9jb21wbGV0ZWQoKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29tcGxldGVkIHN0YXRpc3RpY3NcclxuICAgIC8vXHJcbiAgICB0aGlzLmNvbXBsZXRlZF9zdGF0aXN0aWNzKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnN1cmUgYWxsIHJlcXVpcmVkIGxpc3RzIGV4aXN0LlxyXG4gKi9cclxuU3ByaW50cy5wcm90b3R5cGUuZmluZF9saXN0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gRmluZCB0aGUgXCJEZXNpZ25cIiBsaXN0XHJcbiAgICB0aGlzLmRlc2lnbiA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdEZXNpZ24nKTtcclxuICAgIGlmKHRoaXMuZGVzaWduID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiUmlza3NcIiBsaXN0XHJcbiAgICB0aGlzLnJpc2tzID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ1Jpc2tzJyk7XHJcbiAgICBpZih0aGlzLnJpc2tzID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiTWVldGluZ3NcIiBsaXN0XHJcbiAgICB0aGlzLm1lZXRpbmdzID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ01lZXRpbmdzJyk7XHJcbiAgICBpZih0aGlzLm1lZXRpbmdzID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcignZTAwMycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIFwiVG8gRG9cIiBsaXN0XHJcbiAgICB0aGlzLnRvZG8gPSB0aGlzLmJvYXJkLmZpbmRfbGlzdCgnVG8gRG8nKTtcclxuICAgIGlmKHRoaXMudG9kbyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlRoaXMgU3ByaW50IEFjdGl2ZVwiIGxpc3RcclxuICAgIHRoaXMuc3ByaW50X2FjdGl2ZSA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUaGlzIFNwcmludCBBY3RpdmUnKTtcclxuICAgIGlmKHRoaXMuc3ByaW50X2FjdGl2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIlRoaXMgU3ByaW50IENvbXBsZXRlZFwiIGxpc3RcclxuICAgIHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9IHRoaXMuYm9hcmQuZmluZF9saXN0KCdUaGlzIFNwcmludCBDb21wbGV0ZWQnKTtcclxuICAgIGlmKHRoaXMuc3ByaW50X2NvbXBsZXRlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoJ2UwMDYnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBcIkNvbXBsZXRlZFwiIGxpc3RcclxuICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5ib2FyZC5maW5kX2xpc3QoJ0NvbXBsZXRlZCcpO1xyXG4gICAgaWYodGhpcy5jb21wbGV0ZWQgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmVycm9yKCdlMDA3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnN1cmUgbGlzdHMgYXJlIGluIHRoZSByaWdodCBvcmRlclxyXG4gKi9cclxuU3ByaW50cy5wcm90b3R5cGUub3JkZXJfdGVzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG9yZGVyID0gWydEZXNpZ24nLCAnUmlza3MnLCAnTWVldGluZ3MnLFxyXG4gICAgICAgICdUbyBEbycsICdUaGlzIFNwcmludCBBY3RpdmUnLFxyXG4gICAgICAgICdUaGlzIFNwcmludCBDb21wbGV0ZWQnLCAnQ29tcGxldGVkJ107XHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGk8b3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih0aGlzLmJvYXJkLmxpc3RzW2ldLm5hbWUudG9Mb3dlckNhc2UoKSAhPT0gb3JkZXJbaV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLndhcm5pbmcoJ3cwMDEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvdW50IG1lZXRpbmcgYXR0ZW5kYW5jZSBmb3IgYSB1c2VyXHJcbiAqL1xyXG5TcHJpbnRzLnByb3RvdHlwZS5tZWV0aW5nX2F0dGVuZGFuY2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB2YXIgbWVldGluZ3NfY291bnQgPSB0aGlzLm1lZXRpbmdzLmNhcmRzLmxlbmd0aDtcclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMubWVtYmVyc1tpZF07XHJcbiAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2NvdW50ID0gbWVldGluZ3NfY291bnQ7XHJcbiAgICAgICAgbWVtYmVyLm1lZXRpbmdzX2F0dGVuZGVkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lZXRpbmdzLmNhcmRzLmZvckVhY2goZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgIGNhcmQubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW1iZXIgPSB0aGF0LmZpbmRfbWVtYmVyKGlkKTtcclxuICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXIubWVldGluZ3NfYXR0ZW5kZWQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5jcmVhdGVfc3ByaW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG1lZXRpbmdzID0gdGhpcy5tZWV0aW5ncy5jYXJkcy5zbGljZSgpO1xyXG5cclxuICAgIG1lZXRpbmdzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIGlmKGEuY3JlYXRlZCA8IGIuY3JlYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmKGEuY3JlYXRlZCA9PT0gYi5jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZvcih2YXIgaT0wOyBpPChtZWV0aW5ncy5sZW5ndGggLSAxKTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpbnRzLnB1c2gobmV3IFNwcmludCh0aGlzLCBtZWV0aW5nc1tpXSwgbWVldGluZ3NbaSsxXSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5TcHJpbnRzLnByb3RvdHlwZS5zb3J0X2NvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBjb21wbGV0ZWQgPSB0aGlzLmNvbXBsZXRlZC5jYXJkcy5zbGljZSgpO1xyXG4gICAgY29tcGxldGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHZhciBhdCA9IGEuZmluYWxfdGltZSgpO1xyXG4gICAgICAgIHZhciBidCA9IGIuZmluYWxfdGltZSgpO1xyXG4gICAgICAgIGlmKGF0ID09PSBidCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2UgaWYoYXQgPCBidCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbXBsZXRlZC5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBsZXRlZCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgaWdub3JlIFwicmlza1wiIGNhcmRzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZihjb21wbGV0ZWQubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJyaXNrXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGNvbXBsZXRlZC5maW5hbF90aW1lKCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHRoYXQuc3ByaW50cy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcHJpbnQgPSB0aGF0LnNwcmludHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZihkYXRlIDw9IHNwcmludC5lbmRfdGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGkgPj0gdGhhdC5zcHJpbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaSA9IHRoYXQuc3ByaW50cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3ByaW50ID0gdGhhdC5zcHJpbnRzW2ldO1xyXG4gICAgICAgICAgICBzcHJpbnQuY29tcGxldGVkLnB1c2goY29tcGxldGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmNvbXBsZXRlZF9zdGF0aXN0aWNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY29tcGxldGVkX2NvdW50ID0gMDtcclxuICAgIHZhciByZXZpZXdzX3RvdGFsID0gMDtcclxuXHJcbiAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNwcmludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgc3ByaW50ID0gdGhpcy5zcHJpbnRzW2ldO1xyXG4gICAgICAgIGNvbXBsZXRlZF9jb3VudCArPSBzcHJpbnQuY29tcGxldGVkLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBqPTA7IGo8c3ByaW50LmNvbXBsZXRlZC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB2YXIgY29tcGxldGVkID0gc3ByaW50LmNvbXBsZXRlZFtqXTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbXBsZXRlZC5tZW1iZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gY29tcGxldGVkLm1lbWJlcnNbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5maW5kX21lbWJlcihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1iZXIuY29tcGxldGVkX2NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjb21wbGV0ZWQubWVtYmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyhcIncwMDJcIiwgXCJDb21wbGV0ZWQgdGFzayA8ZW0+XCIgKyBjb21wbGV0ZWQubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8L2VtPiBoYXMgbm8gdGVhbSBtZW1iZXJzIGFzc2lnbmVkLiBOb2JvZHkgd2lsbCBnZXQgY3JlZGl0IGZvciB0aGF0IHRhc2suXCIpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmcoXCJ3MDAzXCIsIFwiQ29tcGxldGVkIHRhc2sgPGVtPlwiICsgY29tcGxldGVkLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2VtPiBoYXMgbW9yZSB0aGFuIG9uZSB0ZWFtIG1lbWJlciBhc3NpZ25lZC4gTm9ib2R5IHdpbGwgZ2V0IGNyZWRpdCBmb3IgdGhhdCB0YXNrLlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXJlIHRoZXkgYW55IHJldmlld3M/XHJcbiAgICAgICAgICAgIGlmKGNvbXBsZXRlZC5jb21tZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdzX3RvdGFsKys7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb21wbGV0ZWQuY29tbWVudHNbMF0ubWVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZmluZF9tZW1iZXIoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyLnJldmlld3NfY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IodmFyIGlkIGluIHRoaXMubWVtYmVycykge1xyXG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0uY29tcGxldGVkX3RvdGFsID0gY29tcGxldGVkX2NvdW50O1xyXG4gICAgICAgIHRoaXMubWVtYmVyc1tpZF0ucmV2aWV3c190b3RhbCA9IHJldmlld3NfdG90YWw7XHJcbiAgICB9XHJcbn1cclxuXHJcblNwcmludHMucHJvdG90eXBlLmZpbmRfbWVtYmVyID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIGlmKHRoaXMubWVtYmVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW1iZXJzW2lkXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUubnVtX21lbWJlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjbnQgPSAwO1xyXG5cclxuICAgIGZvcih2YXIgaWQgaW4gdGhpcy5tZW1iZXJzKSB7XHJcbiAgICAgICAgaWYodGhpcy5tZW1iZXJzLmhhc093blByb3BlcnR5KGlkKSkge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNudDtcclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbihjb2RlKSB7XHJcbiAgICAvLyBEb2VzIHRoZSBlcnJvciBhbHJlYWR5IGV4aXN0P1xyXG4gICAgZm9yKHZhciBpPTA7IGk8dGhpcy5lcnJvcnMubGVuZ3RoOyAgaSsrKSB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gdGhpcy5lcnJvcnNbaV07XHJcbiAgICAgICAgaWYoZXJyb3IuY29kZSA9PT0gY29kZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSAnZTAwMSc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdEZXNpZ24nXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDInOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnUmlza3MnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDMnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnTWVldGluZ3MnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDQnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVG8gRG8nXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2UwMDUnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiVGhlcmUgaXMgbm8gbGlzdCBuYW1lZCAnVGhpcyBTcHJpbnQgQWN0aXZlJ1wifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdlMDA2JzpcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIlRoZXJlIGlzIG5vIGxpc3QgbmFtZWQgJ1RoaXMgU3ByaW50IENvbXBsZXRlZCdcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZTAwNyc6XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogXCJUaGVyZSBpcyBubyBsaXN0IG5hbWVkICdDb21wbGV0ZWQnXCJ9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2U5MDAnOlxyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHtjb2RlOiBjb2RlLCBtc2c6IFwiRmF0YWwgZXJyb3JzLCB1bmFibGUgdG8gcHJvY2VlZCB3aXRoIHNwcmludHMgYW5hbHlzaXNcIn0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuU3ByaW50cy5wcm90b3R5cGUud2FybmluZyA9IGZ1bmN0aW9uKGNvZGUsIG1zZykge1xyXG4gICAgaWYobXNnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLndhcm5pbmdzLnB1c2goe2NvZGU6IGNvZGUsIG1zZzogbXNnfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaChjb2RlKSB7XHJcbiAgICAgICAgY2FzZSAndzAwMSc6XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZ3MucHVzaCh7Y29kZTogY29kZSwgbXNnOiBcIllvdXIgbGlzdHMgYXJlIG5vdCBpbiB0aGUgY29ycmVjdCBvcmRlci4gXCIgK1xyXG4gICAgICAgICAgICBcIlRoZSBleGFjdCBvcmRlciBzaG91bGQgYmU6IERlc2lnbiwgUmlza3MsIE1lZXRpbmdzLCBUbyBEbywgXCIgK1xyXG4gICAgICAgICAgICBcIlRoaXMgU3ByaW50IEFjdGl2ZSwgVGhpcyBTcHJpbnQgQ29tcGxldGVkLCBcIiArXHJcbiAgICAgICAgICAgICAgICBcIkNvbXBsZXRlZFwifSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7b3B0aW9uc30gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL1V0aWwnO1xyXG5pbXBvcnQge0Rpc2Nvbm5lY3RlZFZpZXd9IGZyb20gXCIuL0Rpc2Nvbm5lY3RlZFZpZXdcIjtcclxuaW1wb3J0IHtNYWluVmlld30gZnJvbSAnLi9NYWluVmlldyc7XHJcbmltcG9ydCB7VHJlbGxvQ29ubmVjdH0gZnJvbSAndHJlbGxvLWNvbm5lY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb1NwcmludGVyID0gZnVuY3Rpb24odXNlck9wdGlvbnMpIHtcclxuXHQvLyBEZWZhdWx0IGFuZCBzdXBwbGllZCBvcHRpb25zXHJcblx0Y29uc3Qgb3B0cyA9IFV0aWwubWVyZ2Uob3B0aW9ucywgdXNlck9wdGlvbnMpO1xyXG5cclxuXHRjb25zdCB0cmVsbG8gPSBuZXcgVHJlbGxvQ29ubmVjdChvcHRzKTtcclxuXHJcblx0VXRpbC5yZWFkeSgoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudHM7XHJcblx0XHRpZihvcHRzLnNlbC5ub2RlVHlwZSkge1xyXG5cdFx0XHRlbGVtZW50cyA9IFtvcHRzLnNlbF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0cy5zZWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHN3aXRjaCh0cmVsbG8uc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIFRyZWxsb0Nvbm5lY3QuRElTQ09OTkVDVEVEOlxyXG5cdFx0XHRcdFx0bmV3IERpc2Nvbm5lY3RlZFZpZXcoZWxlbWVudHNbaV0sIHRyZWxsbywgb3B0cyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdG5ldyBNYWluVmlldyhlbGVtZW50c1tpXSwgdHJlbGxvLCBvcHRzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogUmVwcmVzZW50YXRpb24gb2YgYSBUcmVsbG8gdXBkYXRlIG9uIGEgY2FyZFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBVcGRhdGUgPSBmdW5jdGlvbihib2FyZCwgY2FyZCwgZGF0YSkge1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5jYXJkID0gY2FyZDsgXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5tZW1iZXIgPSBkYXRhLmlkTWVtYmVyQ3JlYXRvcjtcclxuICAgIHRoaXMubGlzdEJlZm9yZSA9IGRhdGEuZGF0YS5saXN0QmVmb3JlLm5hbWU7XHJcbiAgICB0aGlzLmxpc3RBZnRlciA9IGRhdGEuZGF0YS5saXN0QWZ0ZXIubmFtZTtcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0YS5kYXRlKSk7XHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgVXRpbCA9IGZ1bmN0aW9uKCkge31cclxuXHJcblV0aWwubWVyZ2UgPSBmdW5jdGlvbihvYmoxLCBvYmoyKSB7XHJcblx0dmFyIG9iaiA9IHt9O1xyXG5cclxuXHRmb3IoY29uc3Qga2V5IGluIG9iajEpIHtcclxuXHRcdGlmKG9iajEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRvYmpba2V5XSA9IG9iajFba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvcihjb25zdCBrZXkgaW4gb2JqMikge1xyXG5cdFx0aWYob2JqMi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdG9ialtrZXldID0gb2JqMltrZXldO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbGwgSFRNTCB0YWdzIGZyb20gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHIgU3RyaW5nIHRvIHByb2Nlc3NcclxuICogQHJldHVybnMgc3RyaW5nIHdpdGhvdXQgdGFnc1xyXG4gKi9cclxuVXRpbC5zdHJpcF90YWdzID0gZnVuY3Rpb24oc3RyKSB7XHJcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC88KD86LnxcXG4pKj8+L2dtLCAnJyk7XHJcbn1cclxuXHJcblV0aWwuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGNscykge1xyXG5cdGxldCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHRpZihjbHMgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0VXRpbC5hZGRDbGFzcyhlLCBjbHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGU7XHJcbn1cclxuXHJcblV0aWwuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lcykge1xyXG5cdGNvbnN0IG5hbWVzID0gY2xhc3NOYW1lcy5zcGxpdCgnICcpO1xyXG5cdGZvcihjb25zdCBuYW1lIG9mIG5hbWVzKSB7XHJcblx0XHRpZiAoZWwuY2xhc3NMaXN0KVxyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbC5jbGFzc05hbWUgKz0gJyAnICsgbmFtZTtcclxuXHR9XHJcbn1cclxuXHJcblV0aWwucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKGVsLmNsYXNzTGlzdClcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuXHRlbHNlXHJcblx0XHRlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG59XHJcblxyXG5VdGlsLnJlYWR5ID0gZnVuY3Rpb24oZm4pIHtcclxuXHRpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdCB0byBhIHN0cmluZy5cclxuICpcclxuICogVGhpcyB1c2VzIGZvcm1hdHRpbmcgdGhhdCBpcyBzdWJzZXQgb2YgdGhlIFBIUCBkYXRlKCkgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSBkYXRlIERhdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBmb3JtYXQgT3B0aW9uYWwgZm9ybWF0IHN0cmluZyAoZGVmYXVsdCBpcyAnbi1kLVkgaDppYScpLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuVXRpbC5mb3JtYXREYXRldGltZSA9IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCkge1xyXG5cclxuXHRmdW5jdGlvbiBwYWQoaSwgbikge1xyXG5cdFx0dmFyIHMgPSAnJyArIGk7XHJcblx0XHR3aGlsZShzLmxlbmd0aCA8IG4pIHtcclxuXHRcdFx0cyA9ICcwJyArIHM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Zm9ybWF0ID0gJ24tZC1ZIGg6aWEnO1xyXG5cdH1cclxuXHJcblx0dmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdHZhciBob3VyID0gaG91cnM7XHJcblx0dmFyIGFtID0gJ2EnO1xyXG5cdGlmKGhvdXJzID09IDApIHtcclxuXHRcdGhvdXIgPSAxMjtcclxuXHR9IGVsc2UgaWYoaG91cnMgPT0gMTIpIHtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH0gZWxzZSBpZihob3VycyA+IDEyKSB7XHJcblx0XHRob3VyID0gaG91cnMgLSAxMjtcclxuXHRcdGFtID0gJ3AnO1xyXG5cdH1cclxuXHJcblx0dmFyIHN0ciA9ICcnO1xyXG5cdGZvcih2YXIgaT0wOyBpPGZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0c3dpdGNoKGZvcm1hdC5jaGFyQXQoaSkpIHtcclxuXHRcdFx0Y2FzZSAnbic6XHJcblx0XHRcdFx0c3RyICs9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdtJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZCc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldERhdGUoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdZJzpcclxuXHRcdFx0XHRzdHIgKz0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZyc6XHJcblx0XHRcdFx0c3RyICs9IGhvdXI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdoJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGhvdXIsIDIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnaSc6XHJcblx0XHRcdFx0c3RyICs9IHBhZChkYXRlLmdldE1pbnV0ZXMoKSwgMik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdzJzpcclxuXHRcdFx0XHRzdHIgKz0gcGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAyKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2EnOlxyXG5cdFx0XHRcdHN0ciArPSBhbTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RyICs9IGZvcm1hdC5jaGFyQXQoaSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc3RyO1xyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xyXG5cdHNlbDogJyN0cmVsbG8nLFxyXG5cdHZlcnNpb246IDEsXHJcblx0XCJhcGlFbmRwb2ludFwiOiBcImh0dHBzOi8vYXBpLnRyZWxsby5jb21cIixcclxuXHRcImF1dGhFbmRwb2ludFwiOiBcImh0dHBzOi8vdHJlbGxvLmNvbVwiLFxyXG5cdFwiaW50ZW50RW5kcG9pbnRcIjogXCJodHRwczovL3RyZWxsby5jb21cIixcclxuXHRrZXk6ICcnLFxyXG5cclxuXHQvLyBQcmVmaXggdG8gYXBwbHkgdG8gbG9jYWwgc3RvcmFnZS4gVXNlZnVsIHRvXHJcblx0Ly8gZGlzYW1iaWd1YXRlIG11bHRpcGxlIHVzZXMgb24gdGhlIHNhbWUgc2l0ZVxyXG5cdGxvY2FsUHJlZml4OiAnJyxcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgYm9hcmQgd2UgYXJlIGZldGNoaW5nXHJcblx0Ym9hcmQ6ICcnLFxyXG5cclxuXHQvKiogT3B0aW9uYWw6IE9ubHkgY29uc2lkZXIgbWVldGluZ3MgYWZ0ZXIgdGhpcyB0aW1lIChVbml4IHRpbWUpICovXHJcblx0YWZ0ZXI6IG51bGwsXHJcblxyXG5cdHZpZXdzOiB7XHJcblx0XHQnYm9hcmQnOiB7fSxcclxuXHRcdCdzcHJpbnQnOiB7fVxyXG5cdH0sXHJcblxyXG5cdG5hbWU6ICdUcmVsbG9TcHJpbnRlcidcclxufTtcclxuXHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi90cmVsbG8uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2YTUzYWNlNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vdHJlbGxvLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4vdHJlbGxvLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxyXG5pbXBvcnQge1RyZWxsb0ZhY3Rvcnl9IGZyb20gJy4vanMvVHJlbGxvRmFjdG9yeSc7XHJcblxyXG5UcmVsbG9GYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG4iLCJpbXBvcnQge1RyZWxsb1NwcmludGVyVmlld30gZnJvbSAnLi9UcmVsbG9TcHJpbnRlclZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyZWxsb0ZhY3RvcnkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuVHJlbGxvRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdHNpdGUuc3RhcnQoICgpID0+IHtcclxuXHRcdGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC10cmVsbG8tc3ByaW50ZXInKTtcclxuXHRcdGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG5ldyBUcmVsbG9TcHJpbnRlclZpZXcoc2l0ZSwgZWxlbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59IiwiaW1wb3J0IFRyZWxsb1NwcmludGVyIGZyb20gXCJ0cmVsbG8tc3ByaW50ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmVsbG9TcHJpbnRlclZpZXcgPSBmdW5jdGlvbihzaXRlLCBlbGVtZW50KSB7XHJcblx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoZWxlbWVudC5pbm5lclRleHQpO1xyXG5cdGVsZW1lbnQuaW5uZXJUZXh0ID0gJyc7XHJcblx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcblx0bmV3IFRyZWxsb1NwcmludGVyKHtcclxuXHRcdHNlbDogZWxlbWVudCxcclxuXHRcdGtleToganNvbi5rZXksXHJcblx0XHRib2FyZDoganNvbi50ZWFtLFxyXG5cdFx0dmlld3M6IGpzb24udmlld3MsXHJcblx0XHRhZnRlcjoganNvbi5hZnRlclxyXG5cdH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
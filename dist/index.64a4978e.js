// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mE3T":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a4579e5764a4978e";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"goJYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _core = require("@barba/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _css = require("@barba/css");
var _cssDefault = parcelHelpers.interopDefault(_css);
// import 'regenerator-runtime';
const bodyTag = document.querySelector('body');
// tell Barba to use the css plugin
_coreDefault.default.use(_cssDefault.default);
// console.log(barba);
// console.log(barbaCss);
// init Barba
_coreDefault.default.init({
    // sync: true,
    transitions: [
        {
            name: 'fade',
            // ! morala sam dodati ove dve fje inace ne radi barba
            leave () {
            },
            enter () {
            },
            once () {
            },
            beforeEnter ({ current , next , trigger  }) {
                const headerLinks = document.querySelectorAll('header a');
                const href = next.url.path;
                headerLinks.forEach((link)=>{
                    if (link.getAttribute('href') === href) {
                        link.classList.add('selected');
                        return;
                    }
                    link.classList.remove('selected');
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }, 
    ],
    //! ono gore ne mari gde se odigrava transition, on ce se svugde odraditi, a views koristimo kada hocemo specijalno da transitujemo specificnu zonu, neki deo, kao sto je ovde feed page
    views: [
        {
            namespace: 'feed',
            beforeEnter () {
                bodyTag.classList.add('feed');
            },
            beforeLeave () {
                bodyTag.classList.remove('feed');
            }
        }, 
    ]
});

},{"@barba/core":"gIWbX","@barba/css":"ldman","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIWbX":[function(require,module,exports) {
!function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n();
}(this, function() {
    function t1(t, n) {
        for(var r = 0; r < n.length; r++){
            var e = n[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
        }
    }
    function n1(n, r, e) {
        return r && t1(n.prototype, r), e && t1(n, e), n;
    }
    function r1() {
        return (r1 = Object.assign || function(t) {
            for(var n = 1; n < arguments.length; n++){
                var r = arguments[n];
                for(var e in r)Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
            }
            return t;
        }).apply(this, arguments);
    }
    function e1(t, n) {
        t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
    }
    function i1(t2) {
        return (i1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t2);
    }
    function o1(t3, n2) {
        return (o1 = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t;
        })(t3, n2);
    }
    function u1(t4, n3, r2) {
        return (u1 = (function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                })), !0;
            } catch (t) {
                return !1;
            }
        })() ? Reflect.construct : function(t, n, r) {
            var e = [
                null
            ];
            e.push.apply(e, n);
            var i = new (Function.bind.apply(t, e));
            return r && o1(i, r.prototype), i;
        }).apply(null, arguments);
    }
    function f1(t5) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (f1 = function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, r);
            }
            function r() {
                return u1(t, arguments, i1(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o1(r, t);
        })(t5);
    }
    function s1(t, n) {
        try {
            var r = t();
        } catch (t6) {
            return n(t6);
        }
        return r && r.then ? r.then(void 0, n) : r;
    }
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var c1, a1 = "2.9.7", h1 = function() {
    };
    !function(t) {
        t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
    }(c1 || (c1 = {
    }));
    var v1 = c1.off, l1 = function() {
        function t7(t) {
            this.t = t;
        }
        t7.getLevel = function() {
            return v1;
        }, t7.setLevel = function(t) {
            return v1 = c1[t];
        };
        var n4 = t7.prototype;
        return n4.error = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.error, c1.error, n);
        }, n4.warn = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.warn, c1.warning, n);
        }, n4.info = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.info, c1.info, n);
        }, n4.debug = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            this.i(console.log, c1.debug, n);
        }, n4.i = function(n, r, e) {
            r <= t7.getLevel() && n.apply(console, [
                "[" + this.t + "] "
            ].concat(e));
        }, t7;
    }(), d1 = O, m1 = E1, p1 = g1, w1 = x1, b1 = T, y1 = "/", P1 = new RegExp([
        "(\\\\.)",
        "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
    ].join("|"), "g");
    function g1(t, n) {
        for(var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y1, s = n && n.whitelist || void 0, c = !1; null !== (r = P1.exec(t));){
            var a = r[0], h = r[1], v = r.index;
            if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;
            else {
                var l = "", d = r[2], m = r[3], p = r[4], w = r[5];
                if (!c && u.length) {
                    var b = u.length - 1, g = u[b];
                    (!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b));
                }
                u && (e.push(u), u = "", c = !1);
                var E = m || p, x = l || f;
                e.push({
                    name: d || i++,
                    prefix: l,
                    delimiter: x,
                    optional: "?" === w || "*" === w,
                    repeat: "+" === w || "*" === w,
                    pattern: E ? A(E) : "[^" + k1(x === f ? x : x + f) + "]+?"
                });
            }
        }
        return (u || o < t.length) && e.push(u + t.substr(o)), e;
    }
    function E1(t8, n) {
        return function(r, e) {
            var i = t8.exec(r);
            if (!i) return !1;
            for(var o = i[0], u = i.index, f = {
            }, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)if (void 0 !== i[c]) {
                var a = n[c - 1];
                f[a.name] = a.repeat ? i[c].split(a.delimiter).map(function(t) {
                    return s(t, a);
                }) : s(i[c], a);
            }
            return {
                path: o,
                index: u,
                params: f
            };
        };
    }
    function x1(t, n5) {
        for(var r = new Array(t.length), e2 = 0; e2 < t.length; e2++)"object" == typeof t[e2] && (r[e2] = new RegExp("^(?:" + t[e2].pattern + ")$", R(n5)));
        return function(n, e) {
            for(var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++){
                var s = t[f];
                if ("string" != typeof s) {
                    var c, a = n ? n[s.name] : void 0;
                    if (Array.isArray(a)) {
                        if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
                        if (0 === a.length) {
                            if (s.optional) continue;
                            throw new TypeError('Expected "' + s.name + '" to not be empty');
                        }
                        for(var h = 0; h < a.length; h++){
                            if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
                            i += (0 === h ? s.prefix : s.delimiter) + c;
                        }
                    } else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
                        if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"));
                    } else {
                        if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
                        i += s.prefix + c;
                    }
                } else i += s;
            }
            return i;
        };
    }
    function k1(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function A(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
    }
    function R(t) {
        return t && t.sensitive ? "" : "i";
    }
    function T(t, n, r) {
        for(var e = (r = r || {
        }).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y1, f = [].concat(r.endsWith || []).map(k1).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++){
            var a = t[c];
            if ("string" == typeof a) s += k1(a);
            else {
                var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k1(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
                n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k1(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k1(a.prefix) + "(" + h + ")";
            }
        }
        if (o) e || (s += "(?:" + k1(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
        else {
            var v = t[t.length - 1], l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
            e || (s += "(?:" + k1(u) + "(?=" + f + "))?"), l || (s += "(?=" + k1(u) + "|" + f + ")");
        }
        return new RegExp(s, R(r));
    }
    function O(t9, n6, r3) {
        return t9 instanceof RegExp ? (function(t, n) {
            if (!n) return t;
            var r = t.source.match(/\((?!\?)/g);
            if (r) for(var e = 0; e < r.length; e++)n.push({
                name: e,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                pattern: null
            });
            return t;
        })(t9, n6) : Array.isArray(t9) ? (function(t, n, r) {
            for(var e = [], i = 0; i < t.length; i++)e.push(O(t[i], n, r).source);
            return new RegExp("(?:" + e.join("|") + ")", R(r));
        })(t9, n6, r3) : (function(t, n, r) {
            return T(g1(t, r), n, r);
        })(t9, n6, r3);
    }
    d1.match = function(t, n) {
        var r = [];
        return E1(O(t, r, n), r);
    }, d1.regexpToFunction = m1, d1.parse = p1, d1.compile = function(t, n) {
        return x1(g1(t, n), n);
    }, d1.tokensToFunction = w1, d1.tokensToRegExp = b1;
    var S = {
        container: "container",
        history: "history",
        namespace: "namespace",
        prefix: "data-barba",
        prevent: "prevent",
        wrapper: "wrapper"
    }, j = new (function() {
        function t10() {
            this.o = S, this.u = new DOMParser;
        }
        var n7 = t10.prototype;
        return n7.toString = function(t) {
            return t.outerHTML;
        }, n7.toDocument = function(t) {
            return this.u.parseFromString(t, "text/html");
        }, n7.toElement = function(t) {
            var n = document.createElement("div");
            return n.innerHTML = t, n;
        }, n7.getHtml = function(t) {
            return void 0 === t && (t = document), this.toString(t.documentElement);
        }, n7.getWrapper = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
        }, n7.getContainer = function(t) {
            return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
        }, n7.removeContainer = function(t) {
            document.body.contains(t) && t.parentNode.removeChild(t);
        }, n7.addContainer = function(t, n) {
            var r = this.getContainer();
            r ? this.s(t, r) : n.appendChild(t);
        }, n7.getNamespace = function(t) {
            void 0 === t && (t = document);
            var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
        }, n7.getHref = function(t) {
            if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href) return t.href;
                var n = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (n) return this.resolveUrl(n.baseVal || n);
            }
            return null;
        }, n7.resolveUrl = function() {
            for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
            var e = n.length;
            if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
            var i = document.createElement("base");
            if (i.href = arguments[0], 1 === e) return i.href;
            var o = document.getElementsByTagName("head")[0];
            o.insertBefore(i, o.firstChild);
            for(var u, f = document.createElement("a"), s = 1; s < e; s++)f.href = arguments[s], i.href = u = f.href;
            return o.removeChild(i), u;
        }, n7.s = function(t, n) {
            n.parentNode.insertBefore(t, n.nextSibling);
        }, t10;
    }()), M = new (function() {
        function t11() {
            this.h = [], this.v = -1;
        }
        var e3 = t11.prototype;
        return e3.init = function(t, n) {
            this.l = "barba";
            var r = {
                ns: n,
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(r), this.v = 0;
            var e = {
                from: this.l,
                index: 0,
                states: [].concat(this.h)
            };
            window.history && window.history.replaceState(e, "", t);
        }, e3.change = function(t, n, r) {
            if (r && r.state) {
                var e = r.state, i = e.index;
                n = this.m(this.v - i), this.replace(e.states), this.v = i;
            } else this.add(t, n);
            return n;
        }, e3.add = function(t, n) {
            var r = this.size, e = this.p(n), i = {
                ns: "tmp",
                scroll: {
                    x: window.scrollX,
                    y: window.scrollY
                },
                url: t
            };
            this.h.push(i), this.v = r;
            var o = {
                from: this.l,
                index: r,
                states: [].concat(this.h)
            };
            switch(e){
                case "push":
                    window.history && window.history.pushState(o, "", t);
                    break;
                case "replace":
                    window.history && window.history.replaceState(o, "", t);
            }
        }, e3.update = function(t, n) {
            var e = n || this.v, i = r1({
            }, this.get(e), {
            }, t);
            this.set(e, i);
        }, e3.remove = function(t) {
            t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
        }, e3.clear = function() {
            this.h = [], this.v = -1;
        }, e3.replace = function(t) {
            this.h = t;
        }, e3.get = function(t) {
            return this.h[t];
        }, e3.set = function(t, n) {
            return this.h[t] = n;
        }, e3.p = function(t) {
            var n = "push", r = t, e = S.prefix + "-" + S.history;
            return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n;
        }, e3.m = function(t) {
            return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward";
        }, n1(t11, [
            {
                key: "current",
                get: function() {
                    return this.h[this.v];
                }
            },
            {
                key: "state",
                get: function() {
                    return this.h[this.h.length - 1];
                }
            },
            {
                key: "previous",
                get: function() {
                    return this.v < 1 ? null : this.h[this.v - 1];
                }
            },
            {
                key: "size",
                get: function() {
                    return this.h.length;
                }
            }
        ]), t11;
    }()), L = function(t12, n) {
        try {
            var r4 = function() {
                if (!n.next.html) return Promise.resolve(t12).then(function(t) {
                    var r = n.next;
                    if (t) {
                        var e = j.toElement(t);
                        r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
                            ns: r.namespace
                        });
                        var i = j.toDocument(t);
                        document.title = i.title;
                    }
                });
            }();
            return Promise.resolve(r4 && r4.then ? r4.then(function() {
            }) : void 0);
        } catch (t) {
            return Promise.reject(t);
        }
    }, $ = d1, _ = {
        __proto__: null,
        update: L,
        nextTick: function() {
            return new Promise(function(t) {
                window.requestAnimationFrame(t);
            });
        },
        pathToRegexp: $
    }, q = function() {
        return window.location.origin;
    }, B = function(t) {
        return void 0 === t && (t = window.location.href), U(t).port;
    }, U = function(t) {
        var n, r = t.match(/:\d+/);
        if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
        else {
            var e = r[0].substring(1);
            n = parseInt(e, 10);
        }
        var i, o = t.replace(q(), ""), u = {
        }, f = o.indexOf("#");
        f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
        var s = o.indexOf("?");
        return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
            hash: i,
            path: o,
            port: n,
            query: u
        };
    }, D = function(t13) {
        return t13.split("&").reduce(function(t, n) {
            var r = n.split("=");
            return t[r[0]] = r[1], t;
        }, {
        });
    }, F = function(t) {
        return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "");
    }, H = {
        __proto__: null,
        getHref: function() {
            return window.location.href;
        },
        getOrigin: q,
        getPort: B,
        getPath: function(t) {
            return void 0 === t && (t = window.location.href), U(t).path;
        },
        parse: U,
        parseQuery: D,
        clean: F
    };
    function I(t, n8, r) {
        return void 0 === n8 && (n8 = 2000), new Promise(function(e4, i) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (o.readyState === XMLHttpRequest.DONE) {
                    if (200 === o.status) e4(o.responseText);
                    else if (o.status) {
                        var n = {
                            status: o.status,
                            statusText: o.statusText
                        };
                        r(t, n), i(n);
                    }
                }
            }, o.ontimeout = function() {
                var e = new Error("Timeout error [" + n8 + "]");
                r(t, e), i(e);
            }, o.onerror = function() {
                var n = new Error("Fetch error");
                r(t, n), i(n);
            }, o.open("GET", t), o.timeout = n8, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send();
        });
    }
    var C = function(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
    };
    function N(t14, n9) {
        return void 0 === n9 && (n9 = {
        }), function() {
            for(var r6 = arguments.length, e = new Array(r6), i2 = 0; i2 < r6; i2++)e[i2] = arguments[i2];
            var o = !1, u2 = new Promise(function(r, i) {
                n9.async = function() {
                    return o = !0, function(t, n) {
                        t ? i(t) : r(n);
                    };
                };
                var u = t14.apply(n9, e);
                o || (C(u) ? u.then(r, i) : r(u));
            });
            return u2;
        };
    }
    var X = new (function(t15) {
        function n10() {
            var n;
            return (n = t15.call(this) || this).logger = new l1("@barba/core"), n.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after"
            ], n.registered = new Map, n.init(), n;
        }
        e1(n10, t15);
        var r7 = n10.prototype;
        return r7.init = function() {
            var t = this;
            this.registered.clear(), this.all.forEach(function(n) {
                t[n] || (t[n] = function(r, e) {
                    t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
                        ctx: e || {
                        },
                        fn: r
                    });
                });
            });
        }, r7.do = function(t16) {
            for(var n = this, r8 = arguments.length, e = new Array(r8 > 1 ? r8 - 1 : 0), i = 1; i < r8; i++)e[i - 1] = arguments[i];
            if (this.registered.has(t16)) {
                var o = Promise.resolve();
                return this.registered.get(t16).forEach(function(t) {
                    o = o.then(function() {
                        return N(t.fn, t.ctx).apply(void 0, e);
                    });
                }), o.catch(function(r) {
                    n.logger.debug("Hook error [" + t16 + "]"), n.logger.error(r);
                });
            }
            return Promise.resolve();
        }, r7.clear = function() {
            var t = this;
            this.all.forEach(function(n) {
                delete t[n];
            }), this.init();
        }, r7.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t = [];
            this.registered.forEach(function(n, r) {
                return t.push(r);
            }), this.logger.info("Registered hooks: " + t.join(","));
        }, n10;
    }(h1)), z = function() {
        function t17(t18) {
            if (this.P = [], "boolean" == typeof t18) this.g = t18;
            else {
                var n = Array.isArray(t18) ? t18 : [
                    t18
                ];
                this.P = n.map(function(t) {
                    return $(t);
                });
            }
        }
        return t17.prototype.checkHref = function(t19) {
            if ("boolean" == typeof this.g) return this.g;
            var n = U(t19).path;
            return this.P.some(function(t) {
                return null !== t.exec(n);
            });
        }, t17;
    }(), G = function(t20) {
        function n11(n) {
            var r;
            return (r = t20.call(this, n) || this).k = new Map, r;
        }
        e1(n11, t20);
        var i = n11.prototype;
        return i.set = function(t, n, r) {
            return this.k.set(t, {
                action: r,
                request: n
            }), {
                action: r,
                request: n
            };
        }, i.get = function(t) {
            return this.k.get(t);
        }, i.getRequest = function(t) {
            return this.k.get(t).request;
        }, i.getAction = function(t) {
            return this.k.get(t).action;
        }, i.has = function(t) {
            return !this.checkHref(t) && this.k.has(t);
        }, i.delete = function(t) {
            return this.k.delete(t);
        }, i.update = function(t, n) {
            var e = r1({
            }, this.k.get(t), {
            }, n);
            return this.k.set(t, e), e;
        }, n11;
    }(z), Q = function() {
        return !window.history.pushState;
    }, W = function(t) {
        return !t.el || !t.href;
    }, J = function(t) {
        var n = t.event;
        return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
    }, K = function(t) {
        var n = t.el;
        return n.hasAttribute("target") && "_blank" === n.target;
    }, V = function(t) {
        var n = t.el;
        return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname;
    }, Y = function(t) {
        var n = t.el;
        return void 0 !== n.port && B() !== B(n.href);
    }, Z = function(t) {
        var n = t.el;
        return n.getAttribute && "string" == typeof n.getAttribute("download");
    }, tt = function(t) {
        return t.el.hasAttribute(S.prefix + "-" + S.prevent);
    }, nt = function(t) {
        return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
    }, rt = function(t) {
        var n = t.href;
        return F(n) === F() && B(n) === B();
    }, et = function(t21) {
        function n12(n) {
            var r;
            return (r = t21.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r;
        }
        e1(n12, t21);
        var r9 = n12.prototype;
        return r9.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1);
        }, r9.add = function(t, n, r) {
            void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
        }, r9.run = function(t, n, r, e) {
            return this.tests.get(t)({
                el: n,
                event: r,
                href: e
            });
        }, r9.checkLink = function(t, n, r) {
            var e = this;
            return this.suite.some(function(i) {
                return e.run(i, t, n, r);
            });
        }, n12;
    }(z), it = function(t22) {
        function n(r, e) {
            var i;
            void 0 === e && (e = "Barba error");
            for(var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)u[f - 2] = arguments[f];
            return (i = t22.call.apply(t22, [
                this
            ].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }(i), n), i.name = "BarbaError", i;
        }
        return e1(n, t22), n;
    }(f1(Error)), ot = function() {
        function t23(t) {
            void 0 === t && (t = []), this.logger = new l1("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [
                {
                    name: "namespace",
                    type: "strings"
                },
                {
                    name: "custom",
                    type: "function"
                }
            ], t && (this.all = this.all.concat(t)), this.update();
        }
        var n13 = t23.prototype;
        return n13.add = function(t, n) {
            switch(t){
                case "rule":
                    this.A.splice(n.position || 0, 0, n.value);
                    break;
                case "transition":
                default:
                    this.all.push(n);
            }
            this.update();
        }, n13.resolve = function(t24, n14) {
            var r = this;
            void 0 === n14 && (n14 = {
            });
            var e5 = n14.once ? this.once : this.page;
            e5 = e5.filter(n14.self ? function(t) {
                return t.name && "self" === t.name;
            } : function(t) {
                return !t.name || "self" !== t.name;
            });
            var i = new Map, o2 = e5.find(function(e) {
                var o = !0, u = {
                };
                return !(!n14.self || "self" !== e.name) || (r.A.reverse().forEach(function(n) {
                    o && (o = r.R(e, n, t24, u), e.from && e.to && (o = r.R(e, n, t24, u, "from") && r.R(e, n, t24, u, "to")), e.from && !e.to && (o = r.R(e, n, t24, u, "from")), !e.from && e.to && (o = r.R(e, n, t24, u, "to")));
                }), i.set(e, u), o);
            }), u3 = i.get(o2), f = [];
            if (f.push(n14.once ? "once" : "page"), n14.self && f.push("self"), u3) {
                var s, c = [
                    o2
                ];
                Object.keys(u3).length > 0 && c.push(u3), (s = this.logger).info.apply(s, [
                    "Transition found [" + f.join(",") + "]"
                ].concat(c));
            } else this.logger.info("No transition found [" + f.join(",") + "]");
            return o2;
        }, n13.update = function() {
            var t25 = this;
            this.all = this.all.map(function(n) {
                return t25.T(n);
            }).sort(function(t, n) {
                return t.priority - n.priority;
            }).reverse().map(function(t) {
                return delete t.priority, t;
            }), this.page = this.all.filter(function(t) {
                return void 0 !== t.leave || void 0 !== t.enter;
            }), this.once = this.all.filter(function(t) {
                return void 0 !== t.once;
            });
        }, n13.R = function(t, n, r, e, i) {
            var o = !0, u = !1, f = t, s = n.name, c = s, a = s, h = s, v = i ? f[i] : f, l = "to" === i ? r.next : r.current;
            if (i ? v && v[s] : v[s]) {
                switch(n.type){
                    case "strings":
                    default:
                        var d = Array.isArray(v[c]) ? v[c] : [
                            v[c]
                        ];
                        l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
                        break;
                    case "object":
                        var m = Array.isArray(v[a]) ? v[a] : [
                            v[a]
                        ];
                        l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
                        break;
                    case "function":
                        v[h](r) ? u = !0 : o = !1;
                }
                u && (i ? (e[i] = e[i] || {
                }, e[i][s] = f[i][s]) : e[s] = f[s]);
            }
            return o;
        }, n13.O = function(t, n, r) {
            var e = 0;
            return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e;
        }, n13.T = function(t) {
            var n = this;
            t.priority = 0;
            var r = 0;
            return this.A.forEach(function(e, i) {
                r += n.O(t, e.name, i + 1);
            }), t.priority = r, t;
        }, t23;
    }(), ut = function() {
        function t26(t) {
            void 0 === t && (t = []), this.logger = new l1("@barba/core"), this.S = !1, this.store = new ot(t);
        }
        var r10 = t26.prototype;
        return r10.get = function(t, n) {
            return this.store.resolve(t, n);
        }, r10.doOnce = function(t27) {
            var n = t27.data, r = t27.transition;
            try {
                var e = function() {
                    i.S = !1;
                }, i = this, o = r || {
                };
                i.S = !0;
                var u = s1(function() {
                    return Promise.resolve(i.j("beforeOnce", n, o)).then(function() {
                        return Promise.resolve(i.once(n, o)).then(function() {
                            return Promise.resolve(i.j("afterOnce", n, o)).then(function() {
                            });
                        });
                    });
                }, function(t) {
                    i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t);
                });
                return Promise.resolve(u && u.then ? u.then(e) : e());
            } catch (t) {
                return Promise.reject(t);
            }
        }, r10.doPage = function(t28) {
            var n = t28.data, r11 = t28.transition, e = t28.page, i = t28.wrapper;
            try {
                var o3 = function(t) {
                    if (u4) return t;
                    f.S = !1;
                }, u4 = !1, f = this, c = r11 || {
                }, a = !0 === c.sync || !1;
                f.S = !0;
                var h = s1(function() {
                    function t29() {
                        return Promise.resolve(f.j("before", n, c)).then(function() {
                            var t30 = !1;
                            function r13(r) {
                                return t30 ? r : Promise.resolve(f.remove(n)).then(function() {
                                    return Promise.resolve(f.j("after", n, c)).then(function() {
                                    });
                                });
                            }
                            var o5 = function() {
                                if (a) return s1(function() {
                                    return Promise.resolve(f.add(n, i)).then(function() {
                                        return Promise.resolve(f.j("beforeLeave", n, c)).then(function() {
                                            return Promise.resolve(f.j("beforeEnter", n, c)).then(function() {
                                                return Promise.resolve(Promise.all([
                                                    f.leave(n, c),
                                                    f.enter(n, c)
                                                ])).then(function() {
                                                    return Promise.resolve(f.j("afterLeave", n, c)).then(function() {
                                                        return Promise.resolve(f.j("afterEnter", n, c)).then(function() {
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }, function(t) {
                                    if (f.M(t)) throw new it(t, "Transition error [sync]");
                                });
                                var r14 = function(r) {
                                    return t30 ? r : s1(function() {
                                        var t = function() {
                                            if (!1 !== o) return Promise.resolve(f.add(n, i)).then(function() {
                                                return Promise.resolve(f.j("beforeEnter", n, c)).then(function() {
                                                    return Promise.resolve(f.enter(n, c, o)).then(function() {
                                                        return Promise.resolve(f.j("afterEnter", n, c)).then(function() {
                                                        });
                                                    });
                                                });
                                            });
                                        }();
                                        if (t && t.then) return t.then(function() {
                                        });
                                    }, function(t) {
                                        if (f.M(t)) throw new it(t, "Transition error [before/after/enter]");
                                    });
                                }, o = !1, u = s1(function() {
                                    return Promise.resolve(f.j("beforeLeave", n, c)).then(function() {
                                        return Promise.resolve(Promise.all([
                                            f.leave(n, c),
                                            L(e, n)
                                        ]).then(function(t) {
                                            return t[0];
                                        })).then(function(t) {
                                            return o = t, Promise.resolve(f.j("afterLeave", n, c)).then(function() {
                                            });
                                        });
                                    });
                                }, function(t) {
                                    if (f.M(t)) throw new it(t, "Transition error [before/after/leave]");
                                });
                                return u && u.then ? u.then(r14) : r14(u);
                            }();
                            return o5 && o5.then ? o5.then(r13) : r13(o5);
                        });
                    }
                    var r12 = function() {
                        if (a) return Promise.resolve(L(e, n)).then(function() {
                        });
                    }();
                    return r12 && r12.then ? r12.then(t29) : t29();
                }, function(t) {
                    if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
                    throw f.logger.debug("Transition error [page]"), f.logger.error(t), t;
                });
                return Promise.resolve(h && h.then ? h.then(o3) : o3(h));
            } catch (t) {
                return Promise.reject(t);
            }
        }, r10.once = function(t, n) {
            try {
                return Promise.resolve(X.do("once", t, n)).then(function() {
                    return n.once ? N(n.once, n)(t) : Promise.resolve();
                });
            } catch (t31) {
                return Promise.reject(t31);
            }
        }, r10.leave = function(t, n) {
            try {
                return Promise.resolve(X.do("leave", t, n)).then(function() {
                    return n.leave ? N(n.leave, n)(t) : Promise.resolve();
                });
            } catch (t32) {
                return Promise.reject(t32);
            }
        }, r10.enter = function(t, n, r) {
            try {
                return Promise.resolve(X.do("enter", t, n)).then(function() {
                    return n.enter ? N(n.enter, n)(t, r) : Promise.resolve();
                });
            } catch (t33) {
                return Promise.reject(t33);
            }
        }, r10.add = function(t, n) {
            try {
                return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve();
            } catch (t34) {
                return Promise.reject(t34);
            }
        }, r10.remove = function(t) {
            try {
                return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve();
            } catch (t35) {
                return Promise.reject(t35);
            }
        }, r10.M = function(t) {
            return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status;
        }, r10.j = function(t, n, r) {
            try {
                return Promise.resolve(X.do(t, n, r)).then(function() {
                    return r[t] ? N(r[t], r)(n) : Promise.resolve();
                });
            } catch (t36) {
                return Promise.reject(t36);
            }
        }, n1(t26, [
            {
                key: "isRunning",
                get: function() {
                    return this.S;
                },
                set: function(t) {
                    this.S = t;
                }
            },
            {
                key: "hasOnce",
                get: function() {
                    return this.store.once.length > 0;
                }
            },
            {
                key: "hasSelf",
                get: function() {
                    return this.store.all.some(function(t) {
                        return "self" === t.name;
                    });
                }
            },
            {
                key: "shouldWait",
                get: function() {
                    return this.store.all.some(function(t) {
                        return t.to && !t.to.route || t.sync;
                    });
                }
            }
        ]), t26;
    }(), ft = function() {
        function t37(t38) {
            var n = this;
            this.names = [
                "beforeLeave",
                "afterLeave",
                "beforeEnter",
                "afterEnter"
            ], this.byNamespace = new Map, 0 !== t38.length && (t38.forEach(function(t) {
                n.byNamespace.set(t.namespace, t);
            }), this.names.forEach(function(t) {
                X[t](n.L(t));
            }));
        }
        return t37.prototype.L = function(t) {
            var n = this;
            return function(r) {
                var e = t.match(/enter/i) ? r.next : r.current, i = n.byNamespace.get(e.namespace);
                return i && i[t] ? N(i[t], i)(r) : Promise.resolve();
            };
        }, t37;
    }();
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var n = this;
        do {
            if (n.matches(t)) return n;
            n = n.parentElement || n.parentNode;
        }while (null !== n && 1 === n.nodeType)
        return null;
    });
    var st = {
        container: null,
        html: "",
        namespace: "",
        url: {
            hash: "",
            href: "",
            path: "",
            port: null,
            query: {
            }
        }
    };
    return new (function() {
        function t39() {
            this.version = a1, this.schemaPage = st, this.Logger = l1, this.logger = new l1("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
        }
        var e6 = t39.prototype;
        return e6.use = function(t, n) {
            var r = this.plugins;
            r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
        }, e6.init = function(t40) {
            var n = void 0 === t40 ? {
            } : t40, e = n.transitions, i = void 0 === e ? [] : e, o = n.views, u = void 0 === o ? [] : o, f = n.schema, s = void 0 === f ? S : f, c = n.requestError, a = n.timeout, h = void 0 === a ? 2000 : a, v = n.cacheIgnore, d = void 0 !== v && v, m = n.prefetchIgnore, p = void 0 !== m && m, w = n.preventRunning, b = void 0 !== w && w, y = n.prevent, P = void 0 === y ? null : y, g = n.debug, E = n.logLevel;
            if (l1.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach(function(t) {
                S[t] && (S[t] = s[t]);
            }), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x = this.data.current;
            if (!x.container) throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
                if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", P);
            }
            this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t) {
                return t.init();
            });
            var k = this.data;
            k.trigger = "barba", k.next = k.current, k.current = r1({
            }, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q();
        }, e6.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
        }, e6.force = function(t) {
            window.location.assign(t);
        }, e6.go = function(t, n, r) {
            var e;
            if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);
            else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e);
        }, e6.once = function(t) {
            try {
                var n = this;
                return Promise.resolve(n.hooks.do("beforeEnter", t)).then(function() {
                    function r15() {
                        return Promise.resolve(n.hooks.do("afterEnter", t)).then(function() {
                        });
                    }
                    var e = function() {
                        if (n.transitions.hasOnce) {
                            var r = n.transitions.get(t, {
                                once: !0
                            });
                            return Promise.resolve(n.transitions.doOnce({
                                transition: r,
                                data: t
                            })).then(function() {
                            });
                        }
                    }();
                    return e && e.then ? e.then(r15) : r15();
                });
            } catch (t41) {
                return Promise.reject(t41);
            }
        }, e6.page = function(t42, n15, e) {
            try {
                var i = function() {
                    var t = o.data;
                    return Promise.resolve(o.hooks.do("page", t)).then(function() {
                        var n16 = s1(function() {
                            var n = o.transitions.get(t, {
                                once: !1,
                                self: e
                            });
                            return Promise.resolve(o.transitions.doPage({
                                data: t,
                                page: u,
                                transition: n,
                                wrapper: o._
                            })).then(function() {
                                o.q();
                            });
                        }, function() {
                            0 === l1.getLevel() && o.force(t.current.url.href);
                        });
                        if (n16 && n16.then) return n16.then(function() {
                        });
                    });
                }, o = this;
                o.data.next.url = r1({
                    href: t42
                }, o.url.parse(t42)), o.data.trigger = n15;
                var u = o.cache.has(t42) ? o.cache.update(t42, {
                    action: "click"
                }).request : o.cache.set(t42, o.request(t42, o.timeout, o.onRequestError.bind(o, n15)), "click").request, f = function() {
                    if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then(function() {
                    });
                }();
                return Promise.resolve(f && f.then ? f.then(i) : i());
            } catch (t) {
                return Promise.reject(t);
            }
        }, e6.onRequestError = function(t) {
            this.transitions.isRunning = !1;
            for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++)r[e - 1] = arguments[e];
            var i = r[0], o = r[1], u = this.cache.getAction(i);
            return this.cache.delete(i), this.$, this.$(t, u, i, o), this.force(i), false;
        }, e6.prefetch = function(t43) {
            var n = this;
            this.cache.has(t43) || this.cache.set(t43, this.request(t43, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t) {
                n.logger.error(t);
            }), "prefetch");
        }, e6.F = function() {
            !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
        }, e6.H = function() {
            !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
        }, e6.B = function(t44) {
            var n = this, r = this.I(t44);
            if (r) {
                var e = this.dom.getHref(r);
                this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch(function(t) {
                    n.logger.error(t);
                }), "enter");
            }
        }, e6.U = function(t) {
            var n = this.I(t);
            if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t);
        }, e6.D = function(t) {
            this.go(this.url.getHref(), "popstate", t);
        }, e6.I = function(t) {
            for(var n = t.target; n && !this.dom.getHref(n);)n = n.parentNode;
            if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n;
        }, e6.q = function() {
            var t = this.url.getHref(), n = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: r1({
                    href: t
                }, this.url.parse(t))
            };
            this.C = {
                current: n,
                next: r1({
                }, this.schemaPage),
                trigger: void 0
            }, this.hooks.do("reset", this.data);
        }, n1(t39, [
            {
                key: "data",
                get: function() {
                    return this.C;
                }
            },
            {
                key: "wrapper",
                get: function() {
                    return this._;
                }
            }
        ]), t39;
    }());
});

},{}],"ldman":[function(require,module,exports) {
!function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = t || self).barbaCss = i();
}(this, function() {
    var t1 = "2.1.15";
    return new (function() {
        function i1() {
            this.name = "@barba/css", this.version = t1, this.prefix = "barba", this.callbacks = {
            }, this.t = !1;
        }
        var n1 = i1.prototype;
        return n1.install = function(t) {
            this.logger = new t.Logger(this.name), this.logger.info(this.version), this.barba = t, this.i = this.i.bind(this), this.s = this.s.bind(this), this.h = this.h.bind(this);
        }, n1.init = function() {
            this.barba.hooks.before(this.o, this), this.barba.hooks.beforeOnce(this.o, this), this.barba.hooks.beforeOnce(this.u, this), this.barba.hooks.afterOnce(this.m, this), this.barba.hooks.beforeLeave(this.P, this), this.barba.hooks.afterLeave(this.v, this), this.barba.hooks.beforeEnter(this.l, this), this.barba.hooks.afterEnter(this.p, this), this.barba.transitions.once = this.i, this.barba.transitions.leave = this.s, this.barba.transitions.enter = this.h, this.barba.transitions.store.all.unshift({
                name: "barba",
                once: function() {
                },
                leave: function() {
                },
                enter: function() {
                }
            }), this.barba.transitions.store.update();
        }, n1.start = function(t, i) {
            try {
                var n = this;
                return n.add(t, i), Promise.resolve(n.barba.helpers.nextTick()).then(function() {
                    return n.add(t, i + "-active"), Promise.resolve(n.barba.helpers.nextTick()).then(function() {
                    });
                });
            } catch (t2) {
                return Promise.reject(t2);
            }
        }, n1.next = function(t3, i) {
            try {
                var n = this;
                return n.t = n.g(t3), Promise.resolve(n.t ? new Promise(function(r) {
                    try {
                        return n.cb = r, n.callbacks[i] = r, t3.addEventListener("transitionend", r, !1), Promise.resolve(n.barba.helpers.nextTick()).then(function() {
                            return n.remove(t3, i), n.add(t3, i + "-to"), Promise.resolve(n.barba.helpers.nextTick()).then(function() {
                            });
                        });
                    } catch (t) {
                        return Promise.reject(t);
                    }
                }) : (n.remove(t3, i), Promise.resolve(n.barba.helpers.nextTick()).then(function() {
                    return n.add(t3, i + "-to"), Promise.resolve(n.barba.helpers.nextTick()).then(function() {
                    });
                })));
            } catch (t) {
                return Promise.reject(t);
            }
        }, n1.end = function(t, i) {
            try {
                return this.remove(t, i + "-to"), this.remove(t, i + "-active"), t.removeEventListener("transitionend", this.callbacks[i]), this.t = !1, Promise.resolve();
            } catch (t4) {
                return Promise.reject(t4);
            }
        }, n1.add = function(t, i) {
            t.classList.add(this.prefix + "-" + i);
        }, n1.remove = function(t, i) {
            t.classList.remove(this.prefix + "-" + i);
        }, n1.o = function(t, i) {
            this.prefix = i.name || "barba";
        }, n1.g = function(t) {
            return "0s" !== getComputedStyle(t).transitionDuration;
        }, n1.u = function(t) {
            return this.start(t.next.container, "once");
        }, n1.i = function(t, i) {
            try {
                var n = this;
                return Promise.resolve(n.barba.hooks.do("once", t, i)).then(function() {
                    return n.next(t.next.container, "once");
                });
            } catch (t5) {
                return Promise.reject(t5);
            }
        }, n1.m = function(t) {
            return this.end(t.next.container, "once");
        }, n1.P = function(t) {
            return this.start(t.current.container, "leave");
        }, n1.s = function(t, i) {
            try {
                var n = this;
                return Promise.resolve(n.barba.hooks.do("leave", t, i)).then(function() {
                    return n.next(t.current.container, "leave");
                });
            } catch (t6) {
                return Promise.reject(t6);
            }
        }, n1.v = function(t) {
            return this.end(t.current.container, "leave"), this.barba.transitions.remove(t), Promise.resolve();
        }, n1.l = function(t) {
            return 1 === this.barba.history.size ? Promise.resolve() : this.start(t.next.container, "enter");
        }, n1.h = function(t, i) {
            try {
                var n = this;
                return Promise.resolve(n.barba.hooks.do("enter", t, i)).then(function() {
                    return n.next(t.next.container, "enter");
                });
            } catch (t7) {
                return Promise.reject(t7);
            }
        }, n1.p = function(t) {
            return 1 === this.barba.history.size ? Promise.resolve() : this.end(t.next.container, "enter");
        }, i1;
    }());
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9mE3T","goJYj"], "goJYj", "parcelRequiref55b")

//# sourceMappingURL=index.64a4978e.js.map

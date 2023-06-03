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
})({"gAoaA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
const data = require("afe0553ebbadad7b");
const pytanie_div = document.getElementById("pytanie");
const odpowiedzi_div = document.getElementById("odpowiedzi");
let pytania_wyk2 = [];
let pytania_wyk3 = [];
let pytania_wyk4 = [];
let pytania_wyk5 = [];
let pytania_wyk6 = [];
let pytania_wyk7 = [];
let pytania_wyk8 = [];
let pytania_wyk9 = [];
let pytania_wyk10 = [];
let pytania_wyk11 = [];
let pytania_baza = [];
let pytania_wszystko = [];
function setPytania(data, array) {
    for(let i = 0, j = 0; i < data.length; i = i + 6, j++){
        let pytanie = {
            id: j,
            pytanie: data[i],
            poprawne: data[i + 1],
            odpowiedzi: [
                data[i + 2],
                data[i + 3],
                data[i + 4],
                data[i + 5]
            ]
        };
        array.push(pytanie);
    }
}
generateStart();
function start(e) {
    let target = getTarget(e);
    let id = target.id;
    switch(id){
        case "wyk_2":
            setPytania(data.wyk_2, pytania_wyk2);
            nextQuestion(pytania_wyk2);
            break;
        case "wyk_3":
            break;
        case "wyk_4":
            break;
        case "wyk_5":
            break;
        case "wyk_6":
            break;
        case "wyk_7":
            break;
        case "wyk_8":
            break;
        case "wyk_9":
            break;
        case "wyk_10":
            break;
        case "wyk_11":
            break;
        case "baza":
            setPytania(data.baza, pytania_baza);
            nextQuestion(pytania_baza);
            break;
        case "wszystko":
            break;
    }
}
function createDiv(id, className, content) {
    const div = document.createElement("div");
    div.id = id;
    div.className = className;
    div.textContent = content;
    return div;
}
function getTarget(e) {
    return e.target;
}
function generateStart() {
    pytanie_div.textContent = "Wybierz opcję!";
    odpowiedzi_div.innerHTML = "";
    for(let i = 2; i < 12; i++)odpowiedzi_div.append(createDiv("wyk_" + i, "wybor", "Wykład " + i));
    odpowiedzi_div.append(createDiv("baza", "wybor", "Baza"));
    odpowiedzi_div.append(createDiv("wszystko", "wybor", "Wszystko"));
    const wybor_div = document.getElementsByClassName("wybor");
    for(let i = 0; i < wybor_div.length; i++)wybor_div[i].addEventListener("click", start);
}
function nextQuestion(pytania) {
    const random_pyt = Math.floor(Math.random() * pytania.length);
    pytanie_div.textContent = pytania[random_pyt].pytanie;
    odpowiedzi_div.innerHTML = "";
    let odpowiedzi = pytania[random_pyt].odpowiedzi.slice();
    for(let i = 0; i < 4; i++){
        const random_odp = Math.floor(Math.random() * (4 - i));
        const div = document.createElement("div");
        div.className = "odpowiedz";
        div.id = "odp_" + i;
        div.textContent = odpowiedzi[random_odp];
        div.addEventListener("click", function() {
            checkAnswer(pytania, random_pyt);
        });
        odpowiedzi_div.append(div);
        odpowiedzi.splice(random_odp, 1);
    }
}
let isCliced = false;
function checkAnswer(pytania, id) {
    if (isCliced) {
        isCliced = false;
        if (pytania.length == 0) {
            generateStart();
            return;
        }
        nextQuestion(pytania);
        return;
    }
    let odpowiedzi_divs = document.getElementsByClassName("odpowiedz");
    for(let i = 0; i < pytania[id].poprawne; i++){
        for(let j = 0; j < odpowiedzi_divs.length; j++)if (odpowiedzi_divs[j].textContent == pytania[id].odpowiedzi[i]) odpowiedzi_divs[j].className = "poprawne";
    }
    pytania.splice(id, 1);
    isCliced = true;
}

},{"afe0553ebbadad7b":"dY403"}],"dY403":[function(require,module,exports) {
let wyk_2 = [
    "Jak nazywał się pierwszy wystrzelony przez ZSRR sztuczny satelita Ziemi:",
    1,
    "Sputnik",
    "Nelson",
    "NF-82",
    "CGam",
    "Kt\xf3re z podanych zaganień miały wpływ na rozw\xf3j sieci komputerowych:",
    2,
    "Rozw\xf3j techniki cyfrowej i optycznej",
    "Rozw\xf3j oprogramowania, nowe usługi",
    "Lenistwo listonoszy",
    "Postępujące starzejące się społeczeństwo",
    "Do czego służy sieć komputerowa:",
    1,
    "Służy do przesyłania informacji w postaci elektronicznej na dowolne odległości",
    "Służy do przesyłania informacji w postaci elektronicznej na ustalone odległości",
    "Służy do przesyłania informacji w postaci analogowej na dowolne odległości",
    "Służy do przesyłania informacji w postaci analogowej na ustalone odległości",
    "Wybierz klasyfikacje sieci w kolejności od najmniejszej odległości do największej:",
    1,
    "Radiowe -> Osobiste -> Miejskie -> Lokalne -> Rozległe",
    "Osobiste -> Localne -> Radiowe -> Miejskie -> Rozległe",
    "Localne -> Osobiste -> Radiowe -> Miejskie -> Rozległe",
    "Rozległe -> Radiowe -> Miejskie -> Localne -> Osobiste",
    "Sieci rozległe noszą nazwę:",
    1,
    "WAN",
    "LAN",
    "MAN",
    "PAN",
    "Sieci lokalne noszą nazwę:",
    1,
    "LAN",
    "VSAT",
    "MAN",
    "WAN",
    "Sieci miejskie nosza nazwę:",
    1,
    "MAN",
    "VSAT",
    "PAN",
    "WAN",
    "Sieci osobiste noszą nazwę:",
    1,
    "PAN",
    "wireless",
    "VSAT",
    "MAN",
    "Sieci satelitarne noszą nazwę:",
    1,
    "VSAT",
    "WAN",
    "MAN",
    "PAN",
    "Wskaż nieistniejącą topologię sieciową:",
    1,
    "Krzak",
    "Drzewo",
    "Magistrala",
    "Pierścień",
    "Zajmuje się standardami dotyczącymi sieci komputerowych:",
    1,
    "IEEE",
    "IETF",
    "ITU",
    "ISO",
    "Zajmuje się opracowaniem dokument\xf3w RFC",
    1,
    "IETF",
    "IEEE",
    "ITU",
    "ISO",
    "Międzynarodowa Unia Telekomunikacyjna",
    1,
    "ITU",
    "IEEE",
    "IETF",
    "ISO",
    "Międzynarodowa Organizacja Standaryzacyjna",
    1,
    "ISO",
    "IEEE",
    "IETF",
    "ISO",
    "Przewaga na rynku to:",
    1,
    "Zyskuje firma oferująca jako pierwsza na rynku nowy produkt",
    "Oznacza, że koszt zmiany na inny produkt jest dla klienta zbyt duży",
    "W danym sektorze możę być przełamany przez nowe technologię",
    "To pozytywne sprzężenie zwrotne powodujące wzrost popularności",
    "Uwięzienie klient\xf3w na rynku oznacza:",
    1,
    "Że koszt zmiany na inny produkt jest dla klienta zbyt duży",
    "Zyskującą firme oferującą jako pierwsza na rynku nowy produkt",
    "Że w danym sektorze panuje monopol i wejście w ten sektor jest utrudnione",
    "W danym sektorze może zostać przełamany przez nowe technologie zakł\xf3cające dotychczasowy układ",
    "Długi ogon oznacza:",
    1,
    "że oferta firmy jest skalowalna i obejmuje szeroki zakres produkt\xf3w",
    "że w danym sektorze panuje monopol i wejście w ten sektor jest utrudnione",
    "że w danym sektorze może zostać przełamany przez nowe technologie zakł\xf3cające dotychczasowy układ",
    "że koszt zmiany na inny produkt jest dla klient zbyt duży",
    "Bariera wejścia oznacza:",
    1,
    "że w danym sektorze panuje monopol i wejście w ten sektor jest utrudnione",
    "w danym sektorze może zostać przełamany przez nowe technologie zakł\xf3cające dotychczasowy układ",
    "że koszt zmiany na inny produkt jest dla klient zbyt duży",
    "że oferta firmy jest skalowalna i obejmuje szeroki zakres produkt\xf3w",
    "Otwarte problemy w sieciach komputerowych to:",
    3,
    "Adresacja",
    "Skalowalność",
    "Bezpieczeństwo",
    "Skomplikowanie",
    "Otwarte problemy w sieciach komputerowych - adresacja:",
    1,
    "Jak zapewnić jednoznaczność adres\xf3w i jak sobie radzić z bardzo duża ilością adres\xf3w",
    "Jak zapewnić, żeby sieć działała poprawnie wraz ze wzrostem wielkości sieci",
    "Jak zapewnić poufność przesyłanych danych i sprawdzić od kogo są wysyłane",
    "Czy koncesjonować tworzenie i użytkowanie sieci, gdzie popełniono przestępstwo",
    "Otwarte problemy w sieciach komputerowych - niezawodność:",
    1,
    "Jak zapewnić, aby wszystkie przesyłane informacje dotarły do adresat\xf3w",
    "Jak zapewnić, żeby sieć działała poprawnie wraz ze wzrostem wielkości sieci",
    "Jak zapewnić poufność przesyłanych danych i sprawdzić od kogo są wysyłane",
    "Jak zapewnić jednoznaczność adres\xf3w i jak sobie radzić z bardzo duża ilością adres\xf3w",
    "Otwarte problemy w sieciach komputerowych - bezpieczeństwo:",
    1,
    "Jak zapewnić poufność przesyłanych danych i sprawdzić od kogo są wysyłane",
    "Jak zapewnić jednoznaczność adres\xf3w i jak sobie radzić z bardzo duża ilością adres\xf3w",
    "Czy koncesjonować tworzenie i użytkowanie sieci, gdzie popełniono przestępstwo",
    "Jak zapewnić, żeby sieć działała poprawnie wraz ze wzrostem wielkości sieci",
    "Otwarte problemy w sieciach komputerowych - skalowalność:",
    1,
    "Jak zapewnić, żeby sieć działała poprawnie wraz ze wzrostem wielkości sieci",
    "Czy koncesjonować tworzenie i użytkowanie sieci, gdzie popełniono przestępstwo",
    "W jaki spos\xf3b pobierać opłaty za korzystanie z sieci oraz w jaki spos\xf3b je r\xf3żnicować",
    "Jak zapewnić jednoznaczność adres\xf3w i jak sobie radzić z bardzo duża ilością adres\xf3w",
    "Otwarte problemy w sieciach komputerowych - Aspekty ekonomiczne:",
    1,
    "W jaki spos\xf3b pobierać opłaty za korzystanie z sieci oraz w jaki spos\xf3b je r\xf3żnicować",
    "Jak zapewnić jednoznaczność adres\xf3w i jak sobie radzić z bardzo duża ilością adres\xf3w",
    "Jak zapewnić, żeby sieć działała poprawnie wraz ze wzrostem wielkości sieci",
    "Czy koncesjonować tworzenie i użytkowanie sieci, gdzie popełniono przestępstwo",
    "Otwarte problemy w sieciach komputerowych - Aspekty prawne:",
    1,
    "Czy koncesjonować tworzenie i użytkowanie sieci, gdzie popełniono przestępstwo",
    "W jaki spos\xf3b pobierać opłaty za korzystanie z sieci oraz w jaki spos\xf3b je r\xf3żnicować",
    "Jak zapewnić, żeby sieć działała poprawnie wraz ze wzrostem wielkości sieci",
    "Jak zapewnić poufność przesyłanych danych i sprawdzić od kogo są wysyłane"
];
let wyk_3 = [];
let wyk_4 = [];
let wyk_5 = [];
let wyk_6 = [];
let wyk_7 = [];
let wyk_8 = [];
let wyk_9 = [];
let wyk_10 = [];
let wyk_11 = [];
let baza = [
    "Kt\xf3re z podanych medi\xf3w transmisyjnych ma najbardziej korzystny wsp\xf3łczynnik cena/pasmo:",
    1,
    "Światłow\xf3d",
    "Skrętka",
    "Fale radiowe",
    "Łącze satelitarne",
    "W adresie MAC kodem producenta nazywamy:",
    1,
    "Pierwsze 3 bajty",
    "Cały adres",
    "Pierwsze 2 bajty",
    "Ostatnie 3 bajty",
    "Jakiego rodzaju zabezpieczenia danych stosuje się w sieciach LAN w celu wykrycia błęd\xf3w transmisji:",
    3,
    "Bit parzystości",
    "CRC",
    "Wielomiany generacyjny",
    "Korektory",
    "Ethernet 10BaseT jako metody dostępu do łącza używa metody:",
    1,
    "CSMA/CD",
    "CSMA/CA",
    "CSMA",
    "Aloha",
    "Kt\xf3ra z podanych metod dostepu do łącza dopuszcza występowanie kolizji:",
    2,
    "Aloha",
    "CSMA/CD",
    "Slotted ring",
    "Token passing",
    "Kt\xf3re z podanych technologii oferują największą prędkość transmisji:",
    3,
    "Fast Ethernet",
    "FDDI",
    "100VG-AnyLan",
    "Ethernet",
    "Jaka jest długośc najdłuższej dopuszczalnej ramki w standardzie Ethernet:",
    1,
    "1518 bajt\xf3w",
    "6 bajt\xf3w",
    "64 bajty",
    "1500 bajt\xf3w",
    "Kt\xf3ra z informacji jest wykorzystywana przez przełącznik warstwy 2 do podejmowania decyzji o przełączaniu:",
    1,
    "Adres MAC",
    "Adres IP",
    "Adres sieci",
    "Adres bramy",
    "Jaka może być maksymalna długość segmentu sieci Ethernet dla kabla typu skrętka:",
    1,
    "100 m",
    "185 m",
    "200 m",
    "500 m",
    "Kt\xf3ry z podanych protokoł\xf3w służy do mapowania znanego adresu IP na nieznany adres MAC:",
    1,
    "ARP",
    "DNS",
    "BOOTP",
    "DHCP",
    "Mechanizm auto negacji umożliwia wsp\xf3łpracę w sieci:",
    2,
    "Ethernet i Fast Ethernet",
    "Ethernet i Gigabit Ethernet",
    "Ethernet i Token ring",
    "Ethernet i ATM",
    "Jaka jest długość najkr\xf3tszej dopuszczalnej ramki w standardzie Gigabit Ethernet",
    1,
    "512 bajt\xf3w",
    "1518 bajt\xf3w",
    "64 bajty",
    "6 bajt\xf3w",
    "Jakie urządzenie sieciowe dzieli siec na wiele domen rozgłoszeniowych:",
    2,
    "Router",
    "Przełącznik warstwy 3",
    "Przełącznik warstwy 2",
    "Koncentrator (hub)",
    "Ile jest domen kolizyjnych w sieci składającej się z 1 serwera i 7 stacji roboczych podłączonych do jednego koncentratora Ethernet",
    1,
    1,
    8,
    7,
    2,
    "Ile jest domen kolizyjnych w sieci składającej się z 1 serwera i 7 stacji roboczych podłączonych do oddzielnych port\xf3w przełącznika Ethernet łączem Full-Duplex:",
    1,
    0,
    2,
    7,
    8,
    "Kt\xf3ra z metod przełączania jest najszybsza",
    1,
    "Cut-Through",
    "Fragment-Free",
    "Store-and-Forward",
    "Fast Switching",
    "Gł\xf3wny punkt rozdzielczy okablowania:",
    1,
    "MDE",
    "VLAN",
    "IDF",
    "SDF",
    "Kt\xf3re z podanych mechanizm\xf3w używane są do zapewnienia niezawodoności w sieciach LAN",
    1,
    "Reduncacja sprzętu",
    "Spanning Tree",
    "CRC",
    "VLAN",
    "Stację działające w lokalnej sieci radiowej mogą się przemieszczać dzięki mechanizmowi:",
    1,
    "Roaming",
    "Ad hoc",
    "AP",
    "Aloha",
    "Sieć IEEE 802.11b wykorzystuje pasmo:",
    1,
    "2,4 GHz",
    "5 GHz",
    "1,8 GHz",
    "0,9 GHz",
    "Kt\xf3ry z podanych standard\xf3w oferuje największy zasięg transmisji:",
    1,
    802.16,
    "802.11b",
    "802.11g",
    "802.15.4",
    "Kt\xf3ry rodzaj komutacji jest stosowany w technologii Frame Relay:",
    1,
    "Ramek",
    "Pakiet\xf3w",
    "Kom\xf3rek",
    "Kanał\xf3w",
    "Zaznacz adresy należące do puli adres\xf3w publicznych:",
    2,
    "213.180.130.200",
    "156.17.5.2",
    "10.10.20.10",
    "192.168.0.1",
    "Zaznacz adres podsieci dla komputera o adresie 192.168.3.170/23:",
    1,
    "192.168.2.0",
    "192.168.1.0",
    "192.168.3.0",
    "192.168.4.0",
    "Protok\xf3ł HTTP działa w następującej warstwie modelu ISO/OSI:",
    1,
    7,
    4,
    3,
    2,
    "Kt\xf3ra z podanych technologii jest zorientowana połączeniowo:",
    2,
    "ATM",
    "MPLS",
    "WiFi",
    "Bluetooth",
    "Na jakiej częstotliwości działa Bluetooth:",
    1,
    "2,4 GHz",
    "5 GHz",
    "1,8 GHz",
    "0,9 GHz",
    "Jak nazywa się usługa ochrony, kt\xf3ra przekształca dane w taki spos\xf3b, że są one niemożliwe do odczytania przez inną osobę poza właściwym odbiorcą:",
    1,
    "Poufność danych",
    "Integralność",
    "Uwierzytelnianie",
    "Kontrola dostępu",
    "Na jakiej częstotliwości działa 802.11n",
    2,
    "2,4 GHz",
    "5 GHz",
    "3 GHz",
    "2,5 GHz",
    "Jakiej długości jest adres MAC w ethernet:",
    1,
    "48 bit",
    "64 bit",
    "32 bit",
    "16 bit",
    "W kt\xf3rej warstwie ISO/OSI działa Vlan?",
    1,
    3,
    4,
    2,
    5,
    "Kt\xf3ra sieć jest ograniczona na przestrzeni kilku metr\xf3w:",
    1,
    "PAN",
    "WAN",
    "LAN",
    "MAN",
    "Kto się zajmuje standaryzacją Wi-Fi:",
    1,
    "IEEE",
    "AA",
    "JD",
    "Cisco",
    "Kt\xf3re zastosowania obejmuje Internet Rzeczy:",
    2,
    "Inteligentny dom",
    "Smart grid",
    "Konstrukcja szkieletowa",
    "Sieć kom\xf3rkowa w konstrukcji szkieletowej",
    "Kt\xf3ra protok\xf3ł zapewnia poufność danych:",
    1,
    "SSL",
    "VPN",
    "DHCP",
    "DNS",
    "Czym są reklamy małych firm AdWards na portalach Google:",
    1,
    "Długi ogon",
    "Uwiezienie klient\xf3w",
    "Technologia zakł\xf3cająca",
    "Przyzwyczajenie klient\xf3w",
    "Przy podłączeniu szeregowym dw\xf3ch ruter\xf3w, adres interfejsu szeregowego jednego z ruter\xf3w to 28.3.81.97/30. Jaki jest adres interfejsu szeregowego drugiego rutera:",
    1,
    "28.3.81.98",
    "28.3.81.100",
    "28.3.81.99",
    "28.3.81.96",
    "Administator dysponuje zakresem adresowym 100.100.110.192/26. Potrzebuje przydzielić adresy dla sieci zawierającej: 11 komputer\xf3w, 1 drukarkę i 3 rutery. Jaki jest ostatni użyteczny adres projektowanej podsieci przy założeniu, że administrator stosuje VLSM:",
    1,
    "100.100.110.222",
    "100.100.110.223",
    "100.100.110.206",
    "100.100.110.207",
    "Warstwa łącza danych jest dzielona na podwarstwy:",
    1,
    "LLC i MAC",
    "MAC i IP",
    "LLC i IP",
    "LLC i TCP",
    "Skalowalność to właściwośc sieci polegającej na:",
    1,
    "Wprowadzenie do sieci nowych urzadzeń i usług nie wpływa negatywnie na już istniejące",
    "Skalowaniu każdej usługi, tzn. zapewnieniu jej odpowiedniej jakości",
    "Wprowadzenie do sieci nowych urządzeń i usług wpływa negatywnie na już istniejące",
    "Każdy sieć ma określoną skalę liczbę w liczbie użytkownik\xf3w na jednostkę powierzchni",
    "Do interfejsu rutera został przypisany ostatni adres użyteczny sieci 172.16.1.240/29. Adres ten to:",
    1,
    "172.16.1.246",
    "172.16.1.247",
    "172.16.1.241",
    "172.16.1.254",
    "Jedną z r\xf3ł warstwy sieciowej jest:",
    1,
    "Wyznaczenie najlepszej trasy przesyłanai pakietu od źr\xf3dła do celu",
    "Opis metod wymiany ramek pomiędzy urządzeniami połączonymi wsp\xf3lnym medium",
    "Segmentacja, transferu oraz składania danych",
    "Umożliwienie komunikacji pomiędzy stacją roboczą w sieci a człowiekiem",
    "Ile maksymalnie urządzeń można zaadresować w sieci maską 255.255.255.192:",
    1,
    62,
    30,
    32,
    64,
    "System operacyjny IOS routera Cisco",
    2,
    "W razie konieczności może zostać zmieniony lub nadpisany",
    "Może występować w kilku wersjach, kt\xf3re mogą być zapisane w pamięci urzędzenia",
    "Nie umożliwia konfigurację interfejs\xf3w routera",
    "Nie może zostać zaktualizowany",
    "Do medi\xf3w miedzianych zaliczamy:",
    2,
    "Kabel wsp\xf3łosiowy",
    "Skrętke nieekranową",
    "Fale radiowe",
    "Światłow\xf3d",
    "Pole czas życia (TTL) zawarte w nagł\xf3wku protokołu IP:",
    1,
    "Jest dekrementowane przy przejściu przez router",
    "Jest dekrementowane przy przejściu przez przełącznik",
    "Jest inkrementowane przy przejściu przez router",
    "Jest inkrementowany przy przejściu przez przełącznik",
    "Wybierz poprawne stwierzenie dotyczące segmentacji:",
    2,
    "Dzieli ciag danych na segmenty",
    "Segmentacja umożliwia identyfikację apolikacji wysyłającej dane",
    "Zwiększa poziom skomplikowania w sieci",
    "Segment nie musi mieć nagł\xf3wka",
    "Zapytanie ARP wysyłane jest przez urządzenie, gdy:",
    1,
    "Nie zna ono adresu MAC urządzenia z sieci lokalnej",
    "Nie zna ono adresu MAC urządzenia z sieci zdalej",
    "Nie zna ono adresu IPv4 urządzenia docelowego",
    "Nie zna ono adresu IPv4 urządzenia wpisanego jako adres słowny",
    "Gdy komputer wysyła dane na serwer leżący poza jego siecią LAN:",
    1,
    "Jako docelowy adres IP w pakiecie użyje adresu IP bramy domyślnej",
    "Jako docelowy adres IP w pakiecie nie użyje swojego adresu IP",
    "Jako docelowy adres IP w pakiecie nie użyje adresu IP serwera",
    "Jako docelowy adres IP w pakiecie użyje adresu rozgłoszeniowego IP",
    "Adresy IPv6 są:",
    1,
    "128 bitowe",
    "256 bitowe",
    "64 bitowe",
    "32 bitowe",
    "Podstawową funkcją protokołu ARP jest:",
    1,
    "Odwzorowanie adres\xf3w IPv4 na adresy MAC",
    "Odwzorowanie adres\xf3w IPv6 na adresy MAC",
    "Odwzorowanie adres\xf3w IPv4 na adresy IPv6",
    "Odwzorowanie adres\xf3w IPv4 na adresy słowne",
    "Kt\xf3re stwierdzenia dotyczące światłowodu jednomodnego są prawdziwe:",
    2,
    "Źr\xf3dłem światła jest laser",
    "Ma węższy rdzeń niż wielomodowy",
    "Umożliwia transmisję na mniejsze odległości niż wielomodowy",
    "Używany jest najczęściej do budowy sieci LAN",
    "Kt\xf3re stwierdzenia dotyczące protokołu CSMA są poprawne:",
    2,
    "Jest to metoda rywalizacyjnego dostępu do medium",
    "Przed nadaniem informacji urządzenia sprawdzają dostępność medium",
    "Przy użyciu tego protokołu niemożliwe jest wystąpienie kolizji",
    "Nadawać może tylko urządzenie, kt\xf3re posiada specjalny token",
    "Komputer w swojej tablicy routingu zawiera adres:",
    2,
    "Sieci lokalnej",
    "Sieci zdalnej do kt\xf3rego wykonano pr\xf3bę komunikacji",
    "Rozgłoszeniowy",
    "Docelowy adres urządzenia z sieci zdalnej, do kt\xf3rego wysyłane są pakiety",
    "Protokoły sieciowe:",
    2,
    "Definiują spos\xf3b kończenia i rozpoczynania transmisji",
    "Opisują format lub strukturę wiadomości",
    "Definiują budowę urządzeń sieciowych",
    "Opisują tylko spos\xf3b transmisji w warstwie sieciowej",
    "Protok\xf3ł TCP w por\xf3wnaniu do UDP",
    2,
    "Wprowowadza większe op\xf3źnienie transmisji",
    "Zapewnia niezawodną transmisję",
    "Wprowadza mniejszy narzut danych nagł\xf3wkowych",
    "Nie zapewnia dostarczania datagram\xf3w w poprawnej kolejności",
    "Do interfejsu routera został przypisany ostatni adres użyteczny sieci 10.12.110.192/26. Adres ten to:",
    1,
    "10.12.110.254",
    "10.12.110.223",
    "10.12.110.225",
    "10.12.110.222",
    "Interfejs SVI przełącznika:",
    2,
    "Służy do zdalnej konfiguracji urządzenia",
    "Jest to interfejs wirtualny",
    "Jest to interfejs fizyczny",
    "Nie może mieć ustawionego adresu IP",
    "Administrator dysponuje zakresem adresowym do kt\xf3rego należy adres 192.168.1.250/26. Potrzebuje dwie podsieci o wymaganej liczbie adres\xf3w dla urządzeń 2 i 7. Adres mniejszej podsieci to:",
    1,
    "192.168.1.208",
    "192.168.1.200",
    "192.168.1.224",
    "192.168.1.192",
    "Adresami stosowanymi w warstwie czwartej są:",
    1,
    "Porty",
    "Adresy ARP",
    "Adresy IP",
    "Adresy MAC",
    "Brama domyślna w sieci LAN:",
    2,
    "Jest to ruter brzegowy na styku sieci LAN i WAN",
    "Jest używana przez komputer do przesyłania pakiet\xf3w poza LAN",
    "Jest to przełącznik brzegowy na styku sieci LAN i WAN",
    "Jest używana przez komputer do przesyłania pakiet\xf3w w LAN",
    "Przew\xf3d z przeplotem powinien zostać użyty do połączenia:",
    2,
    "Router - Komputer",
    "Router - router",
    "Przełącznik - komputer",
    "Przełącznik - router",
    "Wybierz poprawne stwierdzenie:",
    2,
    "W sieci z komutacją łączy ścieżka jest rezerwowana na cały okres połączenia",
    "W sieci z komutacją pakiet\xf3w dane są przesyłane najlepszą w danej chwili drogą",
    "W sieci z komutacją łączy dane są przesyłane najlepszą w danej chwili drogą",
    "W sieci z komutacją pakiet\xf3w ścieżka jest rezerwowana na cały okres połączenia",
    "Kt\xf3re flagi nie są używane przy zakończeniu sesji TCP:",
    2,
    "PSH",
    "SYN",
    "ACK",
    "FIN",
    "Wybierz poprawne stwierdzenie dotyczące adresu łącza lokalnego IPv6:",
    2,
    "Należy do zakresu FE80::/10",
    "Każdy interfejs sieciowy z włączonym IPv6 wymaga adresu lokalnego łącza",
    "Podobny do prywatnych adres\xf3w IPv4",
    "Używane do lokalnej adresacji w obrębie witryny lub małej grupy witryn",
    "Adres IPv6 łącza lokalnego jest:",
    2,
    "Ograniczony do pojedynczego łącza",
    "Używany do komunikacji z innymi urządzeniami na tym samym łączu lokalnym",
    "Jest rutowalny poza sieć lokalną",
    "Nie jest wymagany na interfejsie, jeżeli został skonfigurowany globalny adres IPv6",
    "Wybierz poprawną odpowiedź dotyczącą podwarstwy MAC:",
    1,
    "Kontroluje dostęp do medium",
    "Pozostaje niezależna od fizycznego sprzętu",
    "Identyfikuje protok\xf3ł warstwy sieciowej",
    "Tworzy połączenie z wyższymi warstwami",
    "Zadaniami warstwy trzeciej są:",
    3,
    "Adresowanie",
    "Ruting",
    "Enkapsulacja",
    "Segmentacja",
    "Host otrzymał datagram z numerem potwierdzenia r\xf3wnym 250. Oznacza to, że:",
    1,
    "Powinien teraz wysłać datagram z numerem sekwencyjnym 250",
    "Powinien teraz wysłać datagram z numerem potwierdzenia 251",
    "Powinien teraz wysłać datagram z numerem potwierdzenia 250",
    "Powinien teraz wysłać datagram z numerem sekwencyjnym 251",
    "Suma kontrolna ramki służy do:",
    1,
    "Detekcji potencjalnych błęd\xf3w w ramce",
    "Określenia czy ramka ma zawsze parzystą liczbę bit\xf3w",
    "Sprawdzenia poprawności adres\xf3w MAC w nagł\xf3wku ramki",
    "Określenia protokołu warstwy sieciowej zawartego w polu danych ramki",
    "Kt\xf3re stwierdzenia dotyczy kabli światłowodowych są prawdziwe:",
    2,
    "Charakteryzują się niższym tłumieniem niż kable miedziane",
    "Są drogie",
    "Mają małą rezystancję",
    "Są wrażliwe na zakł\xf3cenia",
    "Ręczne wpisy ARP w tablicy",
    2,
    "Mogą zostać wyświetlone na komputerze przy użyciu „arp –a”",
    "Pomagają zabezpieczyć się np. przed podszywaniem ARP",
    "Po wpisaniu do tablicy ARP nie mogą zostać już usunięte",
    "Są kasowane z tablicy ARP po upływie określonego czasu",
    "Sieć konwergentna to:",
    1,
    "Sieć, w kt\xf3rej r\xf3żne typy usług przesyłane są przy użyciu tego samego medium",
    "Sieć, w kt\xf3rej osiągnięto zbieżność protokoł\xf3w routingu",
    "Sieć, w kt\xf3rej te same typy usług przesyłane są przy użyciu r\xf3żnych medium",
    "Sieć, w kt\xf3rej r\xf3żne typy usług przesyłane są przy użyciu r\xf3żnych medium",
    "Dw\xf3ch graczy chce zagrać w grę samochodową. Jakiego przewodu muszą użyć do połączenia ze sobą swoich komputer\xf3w:",
    1,
    "Z przeplotem",
    "Z przeplotem lub prostego",
    "Prostego",
    "Konsolowego",
    "Jednostką danych w warstwie transportowej jest:",
    1,
    "Segment",
    "Ramka",
    "Bit",
    "Pakiet",
    "Administrator dysponuje zakresem adresowym do kt\xf3rego należy adres 192.168.1.64/25. Potrzebuje dwie podsieci o wymaganej liczbie adres\xf3w dla urządzeń 6 i 31. Adres mniejszej podsieci to:",
    1,
    "192.168.1.64",
    "192.168.1.0",
    "192.168.1.128",
    "192.168.1.32",
    "Odległość administracyjna dla danej trasy w tablicy routingu:",
    1,
    "Oznacza jej wiarygodność",
    "Oznacza odległość do hosta docelowego",
    "Oznacza odległość do następnego przeskoku",
    "Oznacza liczbę przeskok\xf3w na trasie do hosta docelowego",
    "Sieć Internet:",
    2,
    "Jest to zestaw połączonych sieci",
    "Jest niezależna od medium fizycznego",
    "Bazuje na stosie protokoł\xf3w firmy Novell",
    "Ma jednego administratora",
    "Administrator dysponuje zakresem adresowym, do kt\xf3rego należy adres 156.17.31.192/25.Potrzebuje dwie podsieci o wymaganej liczbie adres\xf3w dla urządzeń 8 i 14. Adres mniejszej podsieci to:",
    1,
    "156.17.31.144",
    "156.17.31.0",
    "156.17.31.208",
    "156.17.31.16",
    "Administrator dysponuje zakresem adresowym, do kt\xf3rego należy adres 148.148.148.128/24. Potrzebuje przydzielić adresy dla dw\xf3ch podsieci o liczności 31 i 30 host\xf3w (podane liczby uwzględniają routery). Jakie są adresy podsieci przy założeniu, ze administrator stosuje VLSM.:",
    1,
    "148.148.148.0, 148.148.148.64",
    "148.148.148.128, 148.148.148.160",
    "148.148.148.0, 148.148.148.32",
    "148.148.148.128, 148.148.148.192",
    "Metoda dostępu do medium CSMA/CD jest stosowana w sieciach:",
    1,
    802.3,
    802.11,
    "Token Ring",
    "Nie jest stosowane w sieciach komputerowych",
    "Pole FCS w ramce Ethernet:",
    1,
    "Jest wykorzystywane do wykrywania błęd\xf3w w ramce",
    "Jest wykorzystywane do synchronizacji pomiędzy urządzeniami wysyłającymi i odbierającymi dane",
    "Definiuje dokładną długość pola danych ramki",
    "Określa typ przesyłania danych",
    "Połączenie przy użyciu protokołu Telnet z routerem Cisco:",
    2,
    "Umożliwia zdalną konfigurację urządzenia",
    "Nie wymaga użycia odpowiedniego przewodu",
    "Zapewnia dostęp do urządzeń nawet, gdy ma ono nieaktywne interfejsy sieciowe",
    "Nie powinno być zabezpieczone hasłem, ponieważ utrudnia to dostęp do urządzenia",
    "Za wysłanie informacji o zmniejszenie rozmiaru okna transmisji w protokole TCP odpowiada:",
    1,
    "Odbiorca",
    "Urządzenie pośredniczące",
    "Nadawca",
    "Odbiorca lub nadawca",
    "W zapytaniu ARP wysyłanym przez komputer:",
    1,
    "Adres docelowy MAC jest adresem rozgłoszeniowym",
    "Adres docelowy MAC jest adresem grupowym",
    "Adres docelowy MAC jest adresem indywidualnym",
    "Adres źr\xf3dłowy MAC jest adresem rozgłoszeniowym",
    "Numer portu przyporządkowany do protokołu HTTP to:",
    1,
    80,
    69,
    25,
    53,
    "Do protokoł\xf3w warstwy transportowej zaliczamy:",
    1,
    "TCP",
    "ARP",
    "MAC",
    "IP",
    "W polu danych ramki Ethernet II przenoszone jest 200 bajt\xf3w danych. Jaka jest całkowita długość ramki (pola preambuła, typ i suma kontrolna to w sumie 14 bajt\xf3w):",
    1,
    "226 bajt\xf3w",
    "232 bajty",
    "222 bajty",
    "214 bajt\xf3w",
    "Skręcanie żył w kablu UTP ma za zadanie:",
    1,
    "Kasowanie zakł\xf3ceń pochodzących od drugiego przewodu w parze",
    "Ułatwienie zamocowania złącza RJ-45",
    "Nadanie odpowiedniej elastyczności przewodu",
    "Nie ma żadnego specjalnego zadania",
    "Identyfikator interfejsu dla adresu IPv6 z prefiksem /64:",
    1,
    "Stanowi ostatnie 64 bity adresu",
    "Stanowi pierwszy hekstet adresu",
    "Stanowi pierwsze 64 bity adresu",
    "Stanowi czwarty hekstet adresu",
    "Tryb uprzywilejowany urządzenia:",
    2,
    "Jest niezbędna do zdalnej konfiguracji przełącznika z innej sieci",
    "Jest wymagana do poprawnego przekazania pakiet\xf3w przez przełącznik od hosta do bramy domyślnej",
    "Musi być w tej samej sieci co adres interfejsu SVI przełącznika",
    "Jest wymagana do poprawnego działania przełącznika",
    "Do interfejsu rutera został przypisany ostatni adres użyteczny sieci 20.21.22.64/27. Adres ten to:",
    1,
    "20.21.22.94",
    "20.21.22.95",
    "20.21.22.126",
    "20.21.22.127",
    "Liczba adres\xf3w IPv6 jest:",
    1,
    "Większa niż liczba adres\xf3w IPv4",
    "Mniejsza od liczby adres\xf3w IPv4",
    "Nie można jej określić",
    "Taka sama jak liczba adres\xf3w IPv4",
    "Jednostką danych w warstwie łącza danych jest:",
    1,
    "Ramka",
    "Bit",
    "Segment",
    "Pakiet",
    "Administrator sieci konfiguruje nowe urządzenie pośredniczące w sieci LAN. Jakiego typu połączenia powinien użyć do konfiguracji nowego urządzenia z domyślnymi ustawieniami:",
    1,
    "Konsolowego",
    "Zdalnego przy użyciu protokołu SSH",
    "Zdalnego przy użyciu protokołu Telnet",
    "Ethernetowego",
    "Jednostką danych w warstwie sieciowej jest:",
    1,
    "Pakiet",
    "Ramka",
    "Bit",
    "Segment",
    "Do tr\xf3jstronnego nawiązania połączenia w protokole TCP używane są flagi:",
    2,
    "SYN",
    "ACK",
    "FIN",
    "PSH",
    "Trzy gł\xf3wne komponenty w sieci to:",
    1,
    "Urządzenia, media, usługi",
    "Media, usługi, aplikacje",
    "Urządzenia, media, przewody miedziane i światłowodowe",
    "Urządzenia końcowe, urządzenia pośredniczące, usługi",
    "Przy połączeniu szeregowym dw\xf3ch ruter\xf3w, adres interfejsu szeregowego jednego z ruter\xf3w to 172.16.10.253/30. Jaki jest adres interfejsu szeregowego drugiego rutera:",
    1,
    "172.16.10.254",
    "172.16.10.256",
    "172.16.10.255",
    "172.16.10.252",
    "Kt\xf3re określenia sieciowe nie są definiowane przez standardy warstwy fizycznej:",
    2,
    "Format ramki",
    "Dostęp do medium",
    "Złącza",
    "Konstrukcja przewodu",
    "Kt\xf3re warstwy należą do modelu TCP/IP:",
    1,
    "Dostęp do sieci, transportowa, aplikacji",
    "Rdzeniowa, sieciowa, transportowa",
    "Dostępu do sieci, łącza danych, transportowa",
    "Internet, prezentacji, aplikacji",
    "Wybierz poprawne stwierdzenie związane z komunikacją urządzeń pracujących w tej samej sieci:",
    1,
    "Konfiguracja bramy domyślnej nie jest wymagana",
    "Każde urządzenie w sieci musi mieć skonfigurowaną bramę domyślną",
    "Każde urządzenie w sieci jako adres bramy domyślnej musi mieć wpisany adres IP najbliższego rutera w sieci",
    "Każde urządzenie w sieci jako adres bramy domyślnej musi mieć wpisany adres IP najbliższego przełącznika w sieci",
    "Do interfejsu rutera został przypisany ostatni adres użyteczny sieci 100.121.110.240/28. Adres ten to:",
    1,
    "100.121.110.254",
    "100.121.110.255",
    "100.121.110.246",
    "100.121.110.247",
    "Przełącznik warstwy drugiej:",
    2,
    "Przełącza i filtruje ramki na podstawie adres\xf3w MAC",
    "Buduje własną tablice MAC, kt\xf3rą następnie używa przy podejmowaniu decyzji",
    "Nie wymaga użycia ruter\xf3w do przekazania ruchu do innej sieci",
    "Zawsze wysyła pakiety na wszystkie swoje porty",
    "Wybierz poprawne stwierdzenie dotyczące adresu łącza lokalnego IPv6:",
    2,
    "Adres ten jest wymagany do komunikacji z innymi IPv6 urządzeniami w tej samej sieci",
    "Adres łącza lokalnego rutera jest wykorzystywany jako adres bramy domyślnej",
    "Jest niezmienialny i ustawiony przez producenta karty sieciowej",
    "Musi zostać ustawiony ręcznie przed ustawieniem globalnego adresu indywidualnego",
    "Administrator dysponuje zakresem adresowym do kt\xf3rego należy adres 192.168.1.224/26. Potrzebuje dwie podsieci o wymaganej liczbie adres\xf3w dla urządzeń 6 i 16. Adres mniejszej podsieci to:",
    1,
    "20.21.22.222",
    "20.21.22.207",
    "20.21.22.223",
    "20.21.22.206",
    "Zapytanie ARP:",
    1,
    "Jest wysyłane w celu uzyskania adresu MAC urządzenia o znanym adresie IP",
    "Jest wysyłane w celu uzyskania adresu IP urządzenia o znanym adresie MAC",
    "Jest wysyłane tylko w celu uzyskania adresu MAC bramy domyślnej",
    "Nie musi być wysłane, gdy urządzenie zna adres IP urządzenia do kt\xf3rego chce wysłać informacje",
    "Do gł\xf3wnych typ\xf3w wiadomości należą:",
    2,
    "Wiadomości rozgłoszeniowe",
    "Wiadomości grupowe",
    "Wiadomości pakietowe",
    "Wiadomości routingowe",
    "Bieżąca konfiguracja urządzeń z system Cisco IOS:",
    2,
    "Jest kasowana po ponownym uruchomieniu urządzenia",
    "Jest zapisywana w pamięci RAM",
    "Nie może zostać zapisana jako konfiguracja startowa",
    "Może zostać skasowana poleceniem erase running-config",
    "Protok\xf3ł IP działa w trybie najlepszych dostępnych środk\xf3w (best effort), co oznacza, że:",
    1,
    "Dostarczenie pakiet\xf3w nie jest usługą gwarantowaną",
    "Protok\xf3ł zawsze gwarantuje maksymalną jakość usług",
    "Działanie protokołu jest niezależne od medium transmisyjnego",
    "Przed wysłaniem danych nie jest zestawiane połączenie z odbiorcą",
    "Masce o prefiksie /23 odpowiada następujący zapis dziesiętny:",
    1,
    "255.255.254.0",
    "255.255.255.0",
    "255.255.252.0",
    "255.255.255.128",
    "Identyfikator interfejsu dla IPv6:",
    2,
    "Może zostać wygenerowany przy użyciu metody EUI-64",
    "Może zostać wygenerowany losowo",
    "Nie jest generowany przez serwer w przypadku użycia DHCPv6",
    "Jest generowany przez ruter przy użyciu metody SLAAC",
    "Startowa konfiguracja urządzenia:",
    2,
    "Jest zapisywana w pamięci NVRAM",
    "Może zostać skasowana poleceniem erase startup-config",
    "Jest kasowana po ponownym uruchomieniu urządzenia",
    "Nie może zostać jako konfiguracja bieżąca",
    "Dobrze znane porty:",
    2,
    "Są przyporządkowane do konkretnych protokoł\xf3w warstwy aplikacji",
    "Zawierają się w zakresie od 0 do 1023",
    "Konkretny protok\xf3ł warstwy aplikacji (HTTP, FTP, DNS itp.) może mieć przypisany dowolny dobrze znany port",
    "Nie są używane przez protokoły warstwy transportowej",
    "Administrator sieci konfiguruje nowe urządzenia pośredniczące w sieci LAN. Jakiego typu połączenia powinien użyć do konfiguracji nowego urządzenia z domyślnymi ustawieniami:",
    1,
    "Konsolowego",
    "Ethernetowego",
    "Zdalnego przy użyciu protokołu Telnet",
    "Zdalnego przy użyciu protokołu SSH",
    "Wybierz dwa poprawne stwierdzenia dotyczące stosu protokoł\xf3w:",
    2,
    "Stos protokoł\xf3w TCP/IP tworzą otwarte standardy",
    "Stos protokoł\xf3w jest zbiorem protokoł\xf3w wsp\xf3łpracujących ze sobą w celu zapewnienia komunikacji w sieci",
    "Użycie protokoł\xf3w otwartych wymaga zgody ich tw\xf3rc\xf3w",
    "Protok\xf3ł IPv6 nie należy do stosu TCP/IP",
    "Do urządzeń końcowych należą:",
    2,
    "Tablety",
    "Telefony VoIP",
    "Przełączniki",
    "Punkty dostępowe",
    "Wybierz poprawną odpowiedź dotyczącą podwarstwy LLC:",
    1,
    "Wykrywa błędy",
    "Kontroluje dostęp do medium",
    "Pozostaje niezależna od fizycznego sprzętu",
    "Dokonuje adresacji",
    "Wybierz poprawne stwierdzenia dotyczące kodowania:",
    2,
    "Kodowanie to miedzy innymi przekształcanie wiadomości do postaci bit\xf3w",
    "Kodowanie to między innymi przekształcanie bit\xf3w od postaci fali świetlnej",
    "Kodowanie nie jest wymagane przy wysyłaniu wiadomości przez sieci komputerową",
    "Kodowanie nie może zmieniać postaci fizycznej sygnału",
    "Protok\xf3ł UDP jest używany, gdy:",
    2,
    "Aplikacja jest niewrażliwa na datagramy przychodzące w niewłaściwej kolejności",
    "Wymagany jest mały narzut nagł\xf3wka datagramu w sieci",
    "Aplikacja jest niewrażliwa na duże op\xf3źnienia",
    "Aplikacja jest wrażliwa na błędy transmisji",
    "Protokołami warstwy sieciowej nie są:",
    2,
    "TCP",
    "Ethernet",
    "IPv6",
    "IPv4",
    "Adres rozgłoszeniowy IPv4 w zapisie binarnym w części hosta zawiera:",
    2,
    "Liczba jedynek zależy od maski podsieci",
    "Same jedynki",
    "Same zera",
    "Same wartości 0xFF",
    "Wybierz poprawną odpowiedź dotyczącą warstwy łącza danych:",
    2,
    "Posiada dwie podwarstwy MAC oraz LLC",
    "Jest odpowiedzialna za korekcję błęd\xf3w",
    "Jest odpowiedzialna za przekształcenie bit\xf3w na sygnały elektryczne propagowane w kablu miedzianym",
    "Kontroluje jak dane są umieszczane w medium",
    "Przy połączeniu szeregowym dw\xf3ch router\xf3w , adres interfejsu szeregowego jednego z router\xf3w to 20.21.22.82/30. Jaki jest adres interfejsu szeregowego drugiego rutera:",
    1,
    "20.21.22.81",
    "20.21.22.80",
    "20.21.22.83",
    "20.21.22.84",
    "Do interfejsu rutera został przypisany ostatni adres użyteczny sieci 13.13.13.64/26. Adres ten to:",
    1,
    "13.13.13.126",
    "13.13.13.127",
    "13.13.13.94",
    "13.13.13.128",
    "Do urządzeń pośredniczących nie należą:",
    2,
    "Tablety",
    "Telefony VoIP",
    "Routery",
    "Przełączniki",
    "Elementami globalnego adresu adresu indywidualnego IPv6 są:",
    3,
    "Identyfikator interfejsu",
    "Identyfikator podsieci",
    "Globalny prefiks rutingu",
    "Identyfikator ISP",
    "Adres bramy domyślnej ustawiany na komputerze:",
    2,
    "Musi być w tej samej sieci co adres komputera",
    "To adres interfejsu routera brzegowego sieci",
    "Powinien, ale nie musi być w tej samej sieci co adres komputera",
    "To adres interfejsu wirtualnego rutera w danej sieci lokalnej",
    "Warstwa transportowa jest odpowiedzialna za:",
    2,
    "Śledzenie indywidualnych konwersacji",
    "Identyfikację aplikacji",
    "Identyfikację host\xf3w po adresach logicznych",
    "Umieszczanie ramek w medium",
    "Adres 13.13.0.3/30 jest adresem:",
    1,
    "Rozgłoszeniowym",
    "Hosta",
    "Sieciowym",
    "Grupowym",
    "Wybierz poprawny schemat procesu kapsułkowania:",
    1,
    "Dane->segment->pakiet->ramka->bity",
    "Dane->pakiet->segment->ramka->bity",
    "Bity->ramka->pakiet->segment->dane",
    "Bity->dane->segment->pakiet->ramka",
    "Adres 172.16.128.128/28 jest adresem:",
    1,
    "Sieciowym",
    "Rozgłoszeniowym",
    "Hosta",
    "Grupowym",
    "System operacyjny urządzenia:",
    2,
    "Mają małą (no tak średnio bym powiedział) rezystancję",
    "Są wrażliwe na zakł\xf3cenia",
    "Charakteryzują się niższym tłumieniem niż światłowody",
    "Są droższe od kabli światłowodowych",
    "Kt\xf3re protokoły warstwy aplikacji używają protokołu TCP:",
    2,
    "FTP",
    "HTTP",
    "TFTP",
    "DHCP",
    "Jednostką danych w warstwie fizycznej jest:",
    1,
    "Bit",
    "Ramka",
    "Segment",
    "Pakiet",
    "Dla sesji HTTP i FTP w warstwie transportowej używane są protokoły:",
    1,
    "TCP",
    "TCP i UDP",
    "TCP lub UDP zależnie od rodzaju sieci (LAN lub WLAN)",
    "UDP",
    "Tryb użytkownika urządzenia:",
    2,
    "Domyślnie urządzenie po uruchomieniu znajduje się w tym trybie",
    "Udostępnia jedynie ograniczony zestaw podstawowych poleceń do monitorowania",
    "Umożliwia bezpośrednie przejście do trybu konfiguracji",
    "Jest oznaczony na urządzeniu jako: Nazwa(config-user)#",
    "Dynamiczne wpisy ARP w tablicy:",
    2,
    "Są automatycznie wpisywane do tablicy w przypadku komunikacji dw\xf3ch urządzeń w sieci lokalnej",
    "Mogą zostać wyświetlone na komputerze przy użyciu komendy „arp –a”",
    "Po wpisaniu do tablicy ARP nie mogą zostać już usunięte",
    "Nie są kasowane z tablicy ARP po upływie określonego czasu",
    "Rywalizacyjny dostęp do medium charakteryzuje się:",
    2,
    "Możliwe są kolizje pakiet\xf3w w medium",
    "Urządzenia mogą nadawać tylko w określonych chwilach czasowych",
    "Urządzenia mogą nadawać w dowolnym momencie",
    "Nie wymaga żadnej dodatkowej metody sprawdzania dostępności medium"
];
let wszystko = [];
let data = [
    wyk_2,
    wyk_3,
    wyk_4,
    wyk_5,
    wyk_6,
    wyk_7,
    wyk_8,
    wyk_9,
    wyk_10,
    wyk_11,
    baza,
    wszystko
];
module.exports = {
    wyk_2: wyk_2,
    wyk_3: wyk_3,
    wyk_4: wyk_4,
    wyk_5: wyk_5,
    wyk_6: wyk_6,
    wyk_7: wyk_7,
    wyk_8: wyk_8,
    wyk_9: wyk_9,
    wyk_10: wyk_10,
    wyk_11: wyk_11,
    baza: baza,
    wszystko: wszystko
};

},{}]},["gAoaA","6rimH"], "6rimH", "parcelRequireab7c")

//# sourceMappingURL=index.8cfc62b9.js.map

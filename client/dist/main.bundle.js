/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var n={402:(n,t,r)=>{r.d(t,{Z:()=>c});var e=r(81),o=r.n(e),a=r(645),i=r.n(a)()(o());i.push([n.id,"/* app shell CSS */\r\n:root {\r\n  --primary: #31a9e1;\r\n  --gray: #ececec;\r\n  --whitesmoke: #f5f5f5;\r\n  --dark: #222;\r\n  --monoaki: #272822;\r\n  --navbar-height: 50px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--monoaki);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n}\r\n\r\n#navbar {\r\n  height: var(--navbar-height);\r\n  background-color: var(--primary);\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: 550;\r\n  letter-spacing: 0.9px;\r\n}\r\n\r\n.navbar-brand img {\r\n  padding-top: 10px;\r\n}\r\n\r\n.loading-spinner {\r\n  animation-duration: 0.75s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: rotate-forever;\r\n  animation-timing-function: linear;\r\n  height: 30px;\r\n  width: 30px;\r\n  border: 3px solid var(--primary);\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n\r\n.loading-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--navbar-height));\r\n}\r\n\r\n@keyframes rotate-forever {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.app-update {\r\n  display: none;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.app-update.show {\r\n  display: block;\r\n}\r\n\r\n.nav-btn {\r\n  margin: 25px;\r\n}\r\n\r\n.btn {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  color: #1a1a1a;\r\n  background-color: #aeaeae;\r\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #cecece;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-squared {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn.btn-sm {\r\n  font-size: 0.85rem;\r\n  padding: 0.3rem 0.9rem;\r\n}\r\n\r\n.btn.btn-lg {\r\n  font-size: 1.25rem;\r\n  padding: 0.8rem 1.4rem;\r\n}\r\n\r\n.btn.btn-block {\r\n  width: 100%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: #2d3e50;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-primary:hover {\r\n  background-color: #57779a;\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: #e64c66;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-danger:hover {\r\n  background-color: #ee8294;\r\n}\r\n\r\n.btn.btn-info {\r\n  background-color: #1bbc9b;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-info:hover {\r\n  background-color: #31e1bd;\r\n}\r\n\r\n.btn.btn-light {\r\n  background-color: #d9e9e8;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-light:hover {\r\n  background-color: #84b8b4;\r\n}\r\n\r\n.btn.btn-dark {\r\n  background-color: #1a1a1a;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-dark:hover {\r\n  background-color: #5f5f5f;\r\n}\r\n\r\n.btn.btn-white {\r\n  background-color: #ffffff;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-white:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.btn.btn-black {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-black:hover {\r\n  background-color: #666666;\r\n}\r\n\r\n.btn.btn-link {\r\n  background-color: #1b89bc;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  background-color: #31a9e1;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-brand {\r\n    display: none;\r\n  }\r\n\r\n  #navbar {\r\n    justify-content: center;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);e&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=e.base?s[0]+e.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var d=r(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,e);e.byIndex=c,t.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=e(n,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,r)=>{n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nc=void 0,(()=>{try{self["workbox:window:6.5.3"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function a(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var i=function(n,t){this.type=n,Object.assign(this,t)};function c(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}var f=function(t){var r,e;function s(n,r){var e,s;return void 0===r&&(r={}),(e=t.call(this)||this).nn={},e.tn=0,e.rn=new o,e.en=new o,e.on=new o,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!a(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,o=r.state,a=r===e.vn,c={sw:r,isExternal:a,originalEvent:n};!a&&e.mn&&(c.isUpdate=!0),e.dispatchEvent(new i(o,c)),"installed"===o?e.wn=self.setTimeout((function(){"installed"===o&&t.waiting===r&&e.dispatchEvent(new i("waiting",c))}),200):"activating"===o&&(clearTimeout(e.wn),a||e.en.resolve(r))},e.dn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new i("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t)},e.gn=(s=function(n){var t=n.data,r=n.ports,o=n.source;return c(e.getSW(),(function(){e.an.has(o)&&e.dispatchEvent(new i("message",{data:t,originalEvent:n,ports:r,sw:o}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=r,navigator.serviceWorker.addEventListener("message",e.gn),e}e=t,(r=s).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var f,d=s.prototype;return d.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();return r&&r.then?r.then(t):t()}((function(){if(!r&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),c(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&a(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new i("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},d.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(t){try{return c(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},d.pn=function(){var n=navigator.serviceWorker.controller;return n&&a(n.scriptURL,this.sn.toString())?n:void 0},d.bn=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(s.prototype,f),s}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.Sn(n.type));!(t=r()).done;)(0,t.value)(n)},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());let d,p;const h=new WeakMap,v=new WeakMap,g=new WeakMap,m=new WeakMap,y=new WeakMap;let b={get(n,t,r){if(n instanceof IDBTransaction){if("done"===t)return v.get(n);if("objectStoreNames"===t)return n.objectStoreNames||g.get(n);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return x(n[t])},set:(n,t,r)=>(n[t]=r,!0),has:(n,t)=>n instanceof IDBTransaction&&("done"===t||"store"===t)||t in n};function w(n){return"function"==typeof n?(t=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(p||(p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...n){return t.apply(k(this),n),x(h.get(this))}:function(...n){return x(t.apply(k(this),n))}:function(n,...r){const e=t.call(k(this),n,...r);return g.set(e,n.sort?n.sort():[n]),x(e)}:(n instanceof IDBTransaction&&function(n){if(v.has(n))return;const t=new Promise(((t,r)=>{const e=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),e()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),e()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));v.set(n,t)}(n),r=n,(d||(d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((n=>r instanceof n))?new Proxy(n,b):n);var t,r}function x(n){if(n instanceof IDBRequest)return function(n){const t=new Promise(((t,r)=>{const e=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(x(n.result)),e()},a=()=>{r(n.error),e()};n.addEventListener("success",o),n.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,n)})).catch((()=>{})),y.set(t,n),t}(n);if(m.has(n))return m.get(n);const t=w(n);return t!==n&&(m.set(n,t),y.set(t,n)),t}const k=n=>y.get(n);function E(n,t,{blocked:r,upgrade:e,blocking:o,terminated:a}={}){const i=indexedDB.open(n,t),c=x(i);return e&&i.addEventListener("upgradeneeded",(n=>{e(x(i.result),n.oldVersion,n.newVersion,x(i.transaction))})),r&&i.addEventListener("blocked",(()=>r())),c.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const L=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],j=new Map;function I(n,t){if(!(n instanceof IDBDatabase)||t in n||"string"!=typeof t)return;if(j.get(t))return j.get(t);const r=t.replace(/FromIndex$/,""),e=t!==r,o=S.includes(r);if(!(r in(e?IDBIndex:IDBObjectStore).prototype)||!o&&!L.includes(r))return;const a=async function(n,...t){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;return e&&(i=i.index(t.shift())),(await Promise.all([i[r](...t),o&&a.done]))[0]};return j.set(t,a),a}function P(n){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},P(n)}function T(){T=function(){return n};var n={},t=Object.prototype,r=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",a=e.asyncIterator||"@@asyncIterator",i=e.toStringTag||"@@toStringTag";function c(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{c({},"")}catch(n){c=function(n,t,r){return n[t]=r}}function s(n,t,r,e){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new E(e||[]);return a._invoke=function(n,t,r){var e="suspendedStart";return function(o,a){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var s=u(n,t,r);if("normal"===s.type){if(e=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e="completed",r.method="throw",r.arg=s.arg)}}}(n,r,i),a}function u(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var l={};function f(){}function d(){}function p(){}var h={};c(h,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==t&&r.call(g,o)&&(h=g);var m=p.prototype=f.prototype=Object.create(h);function y(n){["next","throw","return"].forEach((function(t){c(n,t,(function(n){return this._invoke(t,n)}))}))}function b(n,t){function e(o,a,i,c){var s=u(n[o],n,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==P(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(n){e("next",n,i,c)}),(function(n){e("throw",n,i,c)})):t.resolve(f).then((function(n){l.value=n,i(l)}),(function(n){return e("throw",n,i,c)}))}c(s.arg)}var o;this._invoke=function(n,r){function a(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(a,a):a()}}function w(n,t){var r=n.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=void 0,w(n,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var e=u(r,n.iterator,t.arg);if("throw"===e.type)return t.method="throw",t.arg=e.arg,t.delegate=null,l;var o=e.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function k(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function _(n){if(n){var t=n[o];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,a=function t(){for(;++e<n.length;)if(r.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,c(m,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,p):(n.__proto__=p,c(n,i,"GeneratorFunction")),n.prototype=Object.create(m),n},n.awrap=function(n){return{__await:n}},y(b.prototype),c(b.prototype,a,(function(){return this})),n.AsyncIterator=b,n.async=function(t,r,e,o,a){void 0===a&&(a=Promise);var i=new b(s(t,r,e,o),a);return n.isGeneratorFunction(r)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},y(m),c(m,i,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=[];for(var r in n)t.push(r);return t.reverse(),function r(){for(;t.length;){var e=t.pop();if(e in n)return r.value=e,r.done=!1,r}return r.done=!0,r}},n.values=_,E.prototype={constructor:E,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function e(r,e){return i.type="throw",i.arg=n,t.next=r,e&&(t.method="next",t.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===n||"continue"===n)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=n,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),l},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var o=e.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:_(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},n}function O(n,t,r,e,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void r(n)}c.done?t(s):Promise.resolve(s).then(e,o)}function D(n){return function(){var t=this,r=arguments;return new Promise((function(e,o){var a=n.apply(t,r);function i(n){O(a,e,o,i,c,"next",n)}function c(n){O(a,e,o,i,c,"throw",n)}i(void 0)}))}}var M;M=b,b={...M,get:(n,t,r)=>I(n,t)||M.get(n,t,r),has:(n,t)=>!!I(n,t)||M.has(n,t)};var B=function(){var n=D(T().mark((function n(){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",E("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(){var n=D(T().mark((function n(){var t,r,e,o,a;return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("GET from the database"),n.next=3,E("jate",1);case 3:return t=n.sent,r=t.transaction("jate","readonly"),e=r.objectStore("jate"),o=e.getAll(),n.next=9,o;case 9:return a=n.sent,console.log("result.value",a),n.abrupt("return",a);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),N=function(){var n=D(T().mark((function n(t){var r,e,o,a,i;return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("PUT to the database"),n.next=3,E("jate",1);case 3:return r=n.sent,e=r.transaction("jate","readwrite"),o=e.objectStore("jate"),a=o.put({id,content:t}),n.next=9,a;case 9:i=n.sent,console.log("data saved to the dabase",i);case 11:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function A(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function W(n,t,r){return t&&A(n.prototype,t),r&&A(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}B();var U=W((function n(){var t=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),C().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(n||r||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),N(localStorage.getItem("content"))}))})),F=r(379),G=r.n(F),R=r(795),z=r.n(R),q=r(569),H=r.n(q),Z=r(565),K=r.n(Z),V=r(216),Y=r.n(V),$=r(589),J=r.n($),Q=r(402),X={};X.styleTagTransform=J(),X.setAttributes=K(),X.insert=H().bind(null,"head"),X.domAPI=z(),X.insertStyleElement=Y(),G()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;var nn,tn=document.querySelector("#main");tn.innerHTML="",void 0===new U&&((nn=document.createElement("div")).classList.add("spinner"),nn.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',tn.appendChild(nn)),"serviceWorker"in navigator?new f("/src-sw.js").register():console.error("Service workers are not supported in this browser.");var rn=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),rn.style.visibility="visible",rn.addEventListener("click",(function(){n.prompt(),rn.setAttribute("disabled",!0),rn.textContent="Installed!"}))})),window.addEventListener("appinstalled",(function(n){console.log("👍","appinstalled",n)}))})()})();
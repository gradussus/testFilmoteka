!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}}));var i={backdrop:document.querySelector(".backdrop"),teamLink:document.querySelector(".js-team"),spinerBackdrop:document.querySelector(".spiner__backdrop"),filmsListRef:document.querySelector(".films"),gallery:document.querySelector(".gallery__set"),container:document.getElementById("pagination"),galleryGenreItem:document.querySelector(".film__genres"),form:document.querySelector(".header__form"),closeModalBtnForOneMovie:document.querySelector(".modal__button"),modalForOneMovie:document.querySelector(".modal"),backdropOneMovie:document.querySelector(".backdrop__movie")},a={};function s(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,u,"next",t)}function u(t){s(i,r,o,a,u,"throw",t)}a(void 0)}))}};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t){return c.default(t)||l.default(t)||p.default(t)||f.default()};var c=h(o("kMC0W")),l=h(o("7AJDX")),f=h(o("8CtQK")),p=h(o("auk6i"));function h(t){return t&&t.__esModule?t:{default:t}}var d={},v=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=M(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function m(){}function y(){}var _={};u(_,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==n&&r.call(x,i)&&(_=x);var P=y.prototype=g.prototype=Object.create(_);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,s){var u=l(t[o],t,i);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function M(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,M(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=y,u(P,"constructor",y),u(y,"constructor",m),m.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(P),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(P),u(P,s,"Generator"),u(P,i,(function(){return this})),u(P,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(d);try{regeneratorRuntime=v}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=v:Function("r","regeneratorRuntime = r")(v)}var g,m={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,g=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,o,i,a=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)for(r in n=arguments[o])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),o=n(17),i=n(6);t.exports=function(t,e,n){r(t)?o(t,e,n):i(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var o,i;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var r=n(29),o=n(30),i=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=i(t)?t(e):r(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),o=n(7),i=n(0),a=n(1),s=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=i({},c,e),this._currentPage=0,this._view=new s(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),o=this._getPageIndex(n),i=this._getEdge(t);return e.leftPageNumber=i.left,e.rightPageNumber=i.right,e.prevMore=r>1,e.nextMore=r<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,o=this._getLastPage(),i=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(i/2),(n=(e=Math.max(t-r,1))+i-1)>o&&(e=Math.max(o-i+1,1),n=o)):(e=(a-1)*i+1,n=a*i,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),o=n(14),i=n(4),a=n(16),s=n(2),u=n(5),c=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){r(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var r=this;i(t)?(t=t.split(l),c(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,c(t,(function(t,e){r.on(e,t,n)})))},f.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void c(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),r.off(t,o,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},f.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var o=t===r.handler,i=e===r.context,a=o&&i;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(t,e){var n=this,r=u(e),o=n._matchHandler(e);t=t.split(l),c(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,o):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?c(t,(function(t,e){r.off(e,t)})):i(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},f.prototype.off=function(t,e){i(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,r,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(o=e[r]).handler.apply(o.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var r=n(1),o=n(15);t.exports=function(t){return!r(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,o=t.length;for(n=n||null;r<o&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),o=n(7),i=n(21),a=n(22),s=n(24),u=n(25),c=n(0),l=n(4),f=n(28),p=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],v=["prev","next"],g=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(d,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(d,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(v,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,o=t.rightPageNumber;for(n=r;n<=o;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||u(e,this._firstItemClassName),n!==o||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,o=i(e);s(e),(r=this._getButtonType(o))||(n=this._getPageNumber(o)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!p.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),o=n(3),i=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=i(t,e),s=!1;o(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,i){r(e)?o(e.split(/\s+/g),(function(e){a(t,e,n,i)})):o(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,o=t[r];return o||(o=t[r]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),o=n(8),i=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,u=[];s?r(n,(function(e){t.classList.add(e)})):((e=i(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){o(t,u)<0&&u.push(t)})),a(t,u))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),o=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),o=n(3),i=n(2),a=n(4),s=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,h=/^["']\w+["']$/,d=/"|'/g,v=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],i=0,a=0;return o(e,(function(t,o){0===t.indexOf("if")?i+=1:"/if"===t?i-=1:i||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,o)),a=o+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),i=!1,a="";return o(r.exps,(function(t,e){return(i=b(t,n))&&(a=x(r.sourcesInsideIf[e],n)),!i})),a},each:function(t,e,n){var r=b(t,n),a=i(r)?"@index":"@key",u={},c="";return o(r,(function(t,r){u[a]=r,u["@this"]=t,s(n,u),c+=x(e.slice(),n)})),c},with:function(t,e,n){var o=r("as",t),i=t[o+1],a=b(t.slice(0,o),n),u={};return u[i]=a,x(e,s(n,u))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,o=[],i=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,o.push(t.slice(i,r)),i=r+n[0].length,n=e.exec(t);return o.push(t.slice(i)),o};function y(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:h.test(t)?r=t.replace(d,""):c.test(t)?r=y((n=t.split(l))[0],e)[y(n[1],e)]:f.test(t)?r=y((n=t.split(p))[0],e)[n[1]]:v.test(t)&&(r=parseFloat(t)),r}function _(t,e,n){for(var r,o,i,s,u=g[t],c=1,l=2,f=e[l];c&&a(f);)0===f.indexOf(t)?c+=1:0===f.indexOf("/"+t)&&(c-=1,r=l),f=e[l+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(o=0,i=r,(s=e.splice(o+1,i-o)).pop(),s),n),e}function b(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return o(e,(function(t){r.push(y(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function x(t,e){for(var n,r,o,i=1,s=t[i];a(s);)r=(n=s.split(" "))[0],g[r]?(o=_(r,t.splice(i,t.length-i),e),t=t.concat(o)):t[i]=b(n,e),s=t[i+=2];return t.join("")}t.exports=function(t,e){return x(m(t,u),e)}},function(t,e,n){"use strict";var r=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(i);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(i,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return r(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},m=g();var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var _={};function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(t,e,n){e&&b(t.prototype,e);n&&b(t,n);return t};var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){w.default(t,e,n[e])}))}return t};var P,w=(P=o("hKHmD"))&&P.__esModule?P:{default:P};var E="0888b454b4f7be0ebcd69ceb372ced29",M="https://api.themoviedb.org/3/",L=function(){"use strict";function e(){t(y)(this,e),this.page=1,this.query="",this.results=Number}return t(_)(e,[{key:"fetchTrendingMovies",value:function(){var t=this;return fetch("".concat(M,"trending/movie/day?api_key=").concat(E,"&page=").concat(this.page,"&language=en-US")).then((function(t){return t.json()})).then((function(e){return t.results=e.total_results,e.results}))}},{key:"fetchMovie",value:function(){var t=this;return fetch("".concat(M,"search/movie?api_key=").concat(E,"&query=").concat(this.query,"&page=").concat(this.page,"&language=en-US")).then((function(t){return t.json()})).then((function(e){return t.results=e.total_results,e.results}))}},{key:"fetchGenresIds",value:function(){return fetch("".concat(M,"genre/movie/list?api_key=").concat(E,"&language=en-US")).then((function(t){return t.json()})).then((function(t){return t.genres}))}},{key:"getGenreData",value:function(){var e=this;return this.fetchMovie().then((function(n){return e.fetchGenresIds().then((function(e){return n.map((function(n){return t(x)({},n,{release_date:n.release_date.split("-")[0],genres:n.genre_ids.map((function(t){return e.filter((function(e){return e.id===t}))})).flat()})}))}))}))}},{key:"getPage",value:function(){return this.page}},{key:"getResults",value:function(){return this.results}},{key:"setPage",value:function(t){this.page=t}},{key:"setQuery",value:function(t){this.query=t}}]),e}();function C(t){t.map((function(t){var e=t.poster_path,n=t.genre_ids,r=t.title,o=t.release_date,i=t.id;return'<li class="films__item" data-id='.concat(i,'>\n                <div class="films__img">\n                    <img src=https://image.tmdb.org/t/p/original').concat(e,' alt="').concat(r,'" loading="lazy">\n                </div>\n                <div class="films__description">\n                  <p class="films__title">').concat(r,'</p>\n                  <div class="films__meta">\n                    <span class="films__genres">').concat(function(t){for(var e=JSON.parse(localStorage.getItem("genres")),n=[],r=0;r<t.length;r++){var o=!0,i=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value;t[r]===c.id&&n.push(c.name)}}catch(t){i=!0,a=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}}return 0===n.length?"No info":(console.log(n),n.join(", "))}(n),'</span>\n                    <span class="films__sep">|</span>\n                    <span class="films__data">').concat((o||"No info").slice(0,4),"</span>\n                  </div>\n                </div>\n            </li>")})).forEach((function(t){return i.gallery.insertAdjacentHTML("beforeend",t)}))}var k=new L;function O(){return(O=t(a)(t(d).mark((function e(){var n;return t(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0888b454b4f7be0ebcd69ceb372ced29&language=en-US");case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var I={totalItems:100,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"};(function(){return O.apply(this,arguments)})().then((function(e){var n=e.genres,r=t(u)(n);localStorage.setItem("genres",JSON.stringify(r)),console.log(JSON.stringify(r))})),k.fetchTrendingMovies().then((function(e){C(e),k.fetchTotalResults().then((function(e){I.totalItems=k.getResults(),i.gallery.childElementCount>10&&new(t(m))(i.container,I).on("beforeMove",(function(t){i.gallery.innerHTML="",k.setPage(t.page),k.fetchTrendingMovies().then((function(t){!function(t){C(t),window.scrollTo({top:0,behavior:"smooth"})}(t)})).catch((function(t){return console.log(t)}))}))}))})).catch((function(t){return console.log(t)})),i.form.addEventListener("submit",(function(e){e.preventDefault();var n=i.form.firstElementChild.value;if(!n.trim())return console.log("no no no");i.gallery.innerHTML="",k.setQuery(n),k.setPage(1),k.fetchMovie().then((function(e){C(e),I.totalItems=k.getResults(),new(t(m))(i.container,I).on("beforeMove",(function(t){i.gallery.innerHTML="";var e=i.form.firstElementChild.value;k.setPage(t.page),k.setQuery(e),k.fetchMovie().then((function(t){C(t)})).catch((function(t){return console.log(t)}))}))})).catch((function(t){return console.log(t)}))}));document.addEventListener("click",(function t(){document.querySelector(".spiner__backdrop").classList.add("is-hidden"),document.removeEventListener("click",t)})),document.addEventListener("keydown",(function t(e){"Escape"==e.code&&(i.backdrop.classList.add("is-hidden"),document.removeEventListener("keydown",t))})),document.addEventListener("click",(function t(e){e.target==i.backdrop&&(i.backdrop.classList.add("is-hidden"),document.removeEventListener("click",t))}));new L;var j={modal:document.querySelector("[data-modal-footer]"),closeBtn:document.querySelector(".footer-modal__closeBtn"),openFooterModalBtn:document.querySelector(".js-team")};j.openFooterModalBtn.addEventListener("click",(function(t){t.preventDefault(),j.modal.classList.remove("is-hidden")})),j.closeBtn.addEventListener("click",(function(t){t.preventDefault(),j.modal.classList.add("is-hidden")})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&j.modal.classList.add("is-hidden")})),document.addEventListener("click",(function(t){t.target===j.modal&&j.modal.classList.add("is-hidden")}));var N=document.querySelector(".scroll-btn");window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?N.style.display="flex":N.style.display="none"}}();
//# sourceMappingURL=index.eaafc4cc.js.map
(function(b,c){if('object'==typeof exports&&'object'==typeof module)module.exports=c();else if('function'==typeof define&&define.amd)define([],c);else{var d=c();for(var a in d)('object'==typeof exports?exports:b)[a]=d[a]}})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)}([function(a){a.exports=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)}},function(a,b,c){const d=c(2),e=c(3),f=c(4),g=c(5),h=c(6),i=c(0),j=c(7);a.exports={create:d,hide:e,offset:f,queryAll:g,query:h,remove:i,show:j}},function(a){a.exports=function(a){const b=document.createElement('div');return b.innerHTML=a.trim(),b.firstChild}},function(a){a.exports=function(a){a.dataset.__corleonePrevDisplay__=a.style.display,a.style.display='none !important'}},function(a){a.exports=function(a){const b=a.getBoundingClientRect();return{top:b.top+window.pageYOffset-window.document.documentElement.clientTop,left:b.left+window.pageXOffset-window.document.documentElement.clientLeft}}},function(a){a.exports=function(a,b){return b=b||document,b.querySelectorAll(a)}},function(a){a.exports=function(a,b){return b=b||document,b.querySelector(a)}},function(a,b,c){function d(a){return e(a,'dataset.__corleonePrevDisplay__')}const e=c(8),f=c(9),g=c(0),h=f((a)=>{const b=document.createElement(a.nodeName);document.body.appendChild(b);const c=getComputedStyle(b).display;return g(b),c});a.exports=function(a){0===a.style.display.indexOf('none')&&(a.style.display='');const b=d(a);return b?void(a.style.display=b):'none'===getComputedStyle(a).display?void(a.style.display=`${h(a)} !important`):void 0}},function(a,b){const c=(a)=>a.replace(/\[/g,'[\'').replace(/]/g,'\']'),d=(a,b)=>{let d;const e=c(b);try{d='['===b[0]?eval(`obj${e}`):eval(`obj.${b}`)}catch(a){d=void 0}return d},e=(a,b)=>d(a,b);a.exports=e},function(a){function b(a){return null==a||'function'!=typeof a&&'object'!=typeof a}function c(a,c,d,e){var f=b(e)?e:d(e);if(!c.has(f)){var g=a.call(this,e);return c.set(f,g),g}return c.get(f)}function d(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=c(d);if(!b.has(e)){var f=a.apply(this,d);return b.set(e,f),f}return b.get(e)}function e(a,b,c,d,e){return c.bind(b,a,d,e)}function f(a,b){var f=1===a.length?c:d;return e(a,this,f,b.cache.create(),b.serializer)}function g(){return JSON.stringify(arguments)}function h(){this.cache=Object.create(null)}h.prototype.has=function(a){return a in this.cache},h.prototype.get=function(a){return this.cache[a]},h.prototype.set=function(a,b){this.cache[a]=b};var i={create:function(){return new h}};a.exports=function(a,b){var c=b&&b.cache?b.cache:i,d=b&&b.serializer?b.serializer:g,e=b&&b.strategy?b.strategy:f;return e(a,{cache:c,serializer:d})},a.exports.strategies={variadic:function(a,b){return e(a,this,d,b.cache.create(),b.serializer)},monadic:function(a,b){return e(a,this,c,b.cache.create(),b.serializer)}}}])});
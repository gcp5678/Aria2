!function(){return function t(e,n,o){function a(r,s){if(!n[r]){if(!e[r]){var u="function"==typeof require&&require;if(!s&&u)return u(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[r]={exports:{}};e[r][0].call(f.exports,function(t){var n=e[r][1][t];return a(n||t)},f,f.exports,t,e,n,o)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}}()({1:[function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=window.require("system-core:context/context.js").instanceForSystem,this.context.log.send=function(){}}return o(t,[{key:"showToast",value:function(t){var e=t.message,n=t.type;this.context.ui.tip({mode:n,msg:e})}},{key:"startListen",value:function(){var t=this;if(window.addEventListener("message",function(e){e.data.type&&"getSelected"===e.data.type&&window.postMessage({type:"selected",data:t.context.list.getSelected()},location.origin),e.data.type&&"showToast"===e.data.type&&t.showToast(e.data.data)}),window.yunData)if(window.yunData.sign2){var e=window.require("disk-system:widget/data/yunData.js").get();window.postMessage({type:"yunData",data:e},location.origin)}else window.postMessage({type:"yunData",data:JSON.parse(JSON.stringify(window.yunData))},location.origin)}}]),t}())).startListen()},{}]},{},[1]);
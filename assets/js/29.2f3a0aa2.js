(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{220:function(e,n,i){"use strict";i.r(n);var r=i(1),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("h4",{attrs:{id:"判断是哪个浏览器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断是哪个浏览器","aria-hidden":"true"}},[this._v("#")]),this._v(" 判断是哪个浏览器")]),n("p",[this._v("var browser={\nversions:function(){\nvar u = navigator.userAgent, app = navigator.appVersion;\nvar ua = navigator.userAgent.toLowerCase();\nreturn {\nmobile: !!u.match(/AppleWebKit."),n("em",[this._v("Mobile.")]),this._v("/), //是否为移动终端\nios: !!u.match(/(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端\nandroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端\niPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器\niPad: u.indexOf('iPad') > -1, //是否iPad\nwebApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部\nweixin:u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）\nqq: u.match(/\\sQQ/i) == \"qq\", //是否QQ\nisweixin:ua.match(/MicroMessenger/i)==\"micromessenger\",\nsafari:u.toLowerCase().indexOf(\"safari\") > 0,\nqqbrowser:u.indexOf('QQBrowser')>0,\nucbrowser:u.indexOf('UCBrowser')>0,\nbaidubrowser:u.indexOf('baidubrowser')>0,//baidu\nqhbrowser:u.indexOf('QHBrowser')>0//360\n};\n}()\n}")])])}],!1,null,null,null);n.default=s.exports}}]);
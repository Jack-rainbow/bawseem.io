(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{355:function(n,t,e){"use strict";e.r(t);var a=e(1),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"bind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bind","aria-hidden":"true"}},[n._v("#")]),n._v(" bind")]),n._v(" "),e("h4",{attrs:{id:"array-prototype-slice-apply-argumens-1-的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-slice-apply-argumens-1-的作用","aria-hidden":"true"}},[n._v("#")]),n._v(" Array.prototype.slice.apply(argumens,[1])的作用")]),n._v(" "),e("pre",[e("code",[n._v("目的是拿到参数里边除第一个以外后面的所有参数(执行函数时传递的参数)\n")])]),n._v(" "),e("h4",{attrs:{id:"array-prototype-slice-apply-arguments-0-的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-slice-apply-arguments-0-的作用","aria-hidden":"true"}},[n._v("#")]),n._v(" Array.prototype.slice.apply(arguments,[0])的作用")]),n._v(" "),e("pre",[e("code",[n._v("返回函数执行的时候传递的一系列参数\n\n备注：只有两者合并了之后才是返回函数的完整参数\n")])]),n._v(" "),e("h4",{attrs:{id:"手动实现一个call"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动实现一个call","aria-hidden":"true"}},[n._v("#")]),n._v(" 手动实现一个call")]),n._v(" "),e("pre",[e("code",[n._v("Function.prototype.myCall = function (obj, ...arg) {\n    let val;\n    if(obj === null || obj === undefined){\n        obj = window;\n    } else {\n        obj = Object(obj);\n    }\n    obj._fn = this;\n    obj._fn();\n    val = obj._fn(...arg);\n    delete obj._fn;\n    return val;\n}\nlet o = {\n    name: 'o',\n    fn: function () {\n        console.log(this.name);\n    }\n}\nlet test = {\n    name: 'test'\n}\no.fn();\no.fn.call(test);\no.fn.myCall(test);\n")])]),n._v(" "),e("h4",{attrs:{id:"手动实现一个bind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动实现一个bind","aria-hidden":"true"}},[n._v("#")]),n._v(" 手动实现一个bind")]),n._v(" "),e("pre",[e("code",[n._v("Function.prototype.testBind = function(that){\n    var _this = this;\n    /* Array.prototype.slice.apply(arguments,[1]);\n    * 拿到参数传递进来第一个以外的所有参数\n    */\n    let args = Array.prototype.slice.apply(arguments,[1]);\n    fNOP = function () {},\n    bound = function(){\n        /* Array.prototype.slice.apply(arguments,[0]);\n        * 返回函数执行时传递进来的一系列参数\n        */\n        let args2 = Array.from(arguments);\n        return _this.apply(that || window, \n        args.concat(args2)\n        );\n    }\n    fNOP.prototype = _this.prototype;\n    \n    bound.prototype = new fNOP();\n    \n    return bound;\n}\nvar test = function(a,b){\n    console.log('作用域绑定 '+ this.value)\n    console.log('testBind参数传递 '+ a.value2)\n    console.log('调用参数传递 ' + b)\n}\nvar obj = {\n    value:'ok'\n}\nvar funnew = test.testBind(obj,{value2:'yy'});\nfunnew('hello bind');\n")])])])}],!1,null,null,null);t.default=r.exports}}]);
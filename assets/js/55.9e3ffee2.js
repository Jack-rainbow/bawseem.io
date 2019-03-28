(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{338:function(t,n,e){"use strict";e.r(n);var r=e(1),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h4",{attrs:{id:"获取数组中最大的值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取数组中最大的值","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取数组中最大的值")]),t._v(" "),e("pre",[e("code",[t._v("Math.max 因为math.max参数只接受字符串，所以此处应使用apply\n\nMath.max.apply(null,[]) //只适用于一位数组\n\n//因为在js中每一个Functin()函数都有call,apply方法\n//故Math.max()是函数，所以拥有此方法，所以利用此特性进行求解最大值\n\n\n//多维数组求最大值\n\nMath.max.apply(null,[[[]],[]].join(',').split(','))\n")])]),t._v(" "),e("h4",{attrs:{id:"数组扁平化（多维数组变一维）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组扁平化（多维数组变一维）","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组扁平化（多维数组变一维）")]),t._v(" "),e("pre",[e("code",[t._v("let arr = [1,2,[3,[123],1],1,[2,[3,4,[5],6],4,3],512];\n1.arr.toString().split(\",\") 返回格式[ '1', '2', '3', '123', '1', '1', '2', '3', '4', '5', '6', '4', '3', '512' ]\n2.arr.toString().split(\",\").map(item=>+item)  返回[ 1, 2, 3, 123, 1, 1, 2, 3, 4, 5, 6, 4, 3, 512 ]\n")])]),t._v(" "),e("h4",{attrs:{id:"tostring和tolocalstring的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tostring和tolocalstring的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" toString和toLocalString的区别")]),t._v(" "),e("pre",[e("code",[t._v('|传入的值|\ttoString|\ttoLocaleString|\n| ------ | ------ | ------ |\n|数字|\t字符串|\t字符串|\n|字符串|\t字符串|\t字符串|\n|数组|\t字符串|\t字符串|\n|普通对象||\t“[object Object]”|\t“[object Object]”|\n\n正常用法上边都一样，但是当转换时间对象时，会出现问题\neg：\n    (new Date).toString();\n    \x3c!--"Mon Nov 06 2017 13:02:46 GMT+0800 (China Standard Time)"--\x3e\n\n    (new Date).toLocaleString();\n    \x3c!--"2017/11/6 下午1:03:12"--\x3e\n同时千分位分割可以利用toLocalString()特性进行分割\n    (12312313123353).toLocalString(\'en-US\')\n')])]),t._v(" "),e("h4",{attrs:{id:"与-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与-区别","aria-hidden":"true"}},[t._v("#")]),t._v(" != 与 !==区别")]),t._v(" "),e("pre",[e("code",[t._v("1.比较结果时\n    != 返回同类值比较结果\n    !== 不同类型不比较，并且无结果，只有当类型相同时才比较\n2.比较过程上的区别\n    != 比较时,若类型不同时，先转换类型\n    !== 只有类型相同时才比较\n")])]),t._v(" "),e("h4",{attrs:{id:"_1-2-3-4-与-a-b-c-返回-a-1-b-2-c-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-4-与-a-b-c-返回-a-1-b-2-c-4","aria-hidden":"true"}},[t._v("#")]),t._v(" [1, [2, 3], 4] 与 ['a', ['b'], 'c']  返回{ a: 1, b: 2, c: 4 }")]),t._v(" "),e("pre",[e("code",[t._v("const targetArray = [1, [2, 3], 4];\nconst formater = \"[a, [b], c]\";\nconst formaterArray = ['a', ['b'], 'c'];\n\nconst destructuringArray = (values, keys) => {\n    \ntry {\n    const obj = {};\n    if (typeof keys === 'string') {\n    keys = JSON.parse(keys.replace(/\\w+/g, '\"$&\"'));\n    }\n    \n    const iterate = (values, keys) =>\n\n    keys.forEach((key, i) => {\n        console.log(key,values[i])\n        if(Array.isArray(key)) iterate(values[i], key)\n        else obj[key] = values[i]\n    })\n    \n    iterate(values, keys)\n    \n    return obj;\n} catch (e) {\n    console.error(e.message);\n}\n}\n\nconsole.dir(destructuringArray(targetArray,formater));\n")])]),t._v(" "),e("h4",{attrs:{id:"标准盒子和怪异盒子之间的区别？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准盒子和怪异盒子之间的区别？","aria-hidden":"true"}},[t._v("#")]),t._v(" 标准盒子和怪异盒子之间的区别？")]),t._v(" "),e("pre",[e("code",[t._v("标注盒子  width+margin+padding+border\n怪异盒子  width+margin 因为怪异盒子的width已经包括了padding+border\n")])]),t._v(" "),e("h4",{attrs:{id:"object-setprototypeof-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-setprototypeof-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.setPrototypeOF 实现")]),t._v(" "),e("pre",[e("code",[t._v("Object.setPrototypeOf() 将第一个原型里边的_proto_指向另一个对象\n第一个参数是需要修改原型的对象\n第二个参数是修改到原型的原型对象(可能是一个空对象)\n\n实现方法:\nObject.setPrototypeOf = function(obj,proto){\n    obj._proto_ = proto;\n    return obj\n}\n\n子类的原型的原型，是父类的原型  子类.__proto__.__proto__ == 父类.__proto__")])])])}],!1,null,null,null);n.default=a.exports}}]);
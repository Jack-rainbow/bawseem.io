(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{327:function(e,n,t){"use strict";t.r(n);var s=t(1),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h4",{attrs:{id:"侦听数组和对象改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#侦听数组和对象改变","aria-hidden":"true"}},[e._v("#")]),e._v(" 侦听数组和对象改变")]),e._v(" "),t("p",[e._v("🐱")]),e._v(" "),t("blockquote",[t("p",[e._v("侦听对象的添加与删除")])]),e._v(" "),t("pre",[t("code",[e._v("平常写法\n    eg:\n        Object.assign({},this.xxx,{\n            age:11,\n            name:yuncl\n        })\nvue写法\n    eg：\n        //第一个参数\n        this.$set(this.number,index,++this.number[index]);\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("已经创建的实例,vue不能动态添加根的响应式属性")])]),e._v(" "),t("pre",[t("code",[e._v("data:{\n    info:{\n        age:222\n    }\n}\n//第一个参数--data中的info变量\n//第二个参数--自定义变量名\n//第三个参数--自定义变量名的参数\nvm.set(vm.info,'sex',女)\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("侦听数组的改变")])]),e._v(" "),t("pre",[t("code",[e._v("vue不能检测一下变动的数组\n    1.利用索引值设置项时\n        vm.items[index] = newValue;\n      解决方法：\n        1. vue.set\n            //有迷惑\n            //第一个参数 是组件内的items\n            //第二个参数为索引值\n            //第三个参数为新的属性\n            vm.set(example1.items,index,newvalue);\n        2.Array.prototype.slice\n            example1.items.slice(index,1,newvalue);\n    2.修改数组的长度时\n        vm.items.length = newLength;\n       解决方法：\n        1.splice--生成一个新的数组\n            //example1.items 组件内的items\n            //有迷惑\n            example1.items,splice(newLength);")])])])}],!1,null,null,null);n.default=i.exports}}]);
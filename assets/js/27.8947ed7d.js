(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{350:function(t,n,e){"use strict";e.r(n);var a=e(1),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content"},[n("h4",{attrs:{id:"computed与watch区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#computed与watch区别","aria-hidden":"true"}},[this._v("#")]),this._v(" computed与watch区别")]),this._v(" "),n("pre",[n("code",[this._v('1.computed会在DOM加载后马上加载\n2.watch 观察和响应 Vue 实例上的数据变动，对应一个键和对象\n值是对应的回调（方法、对象、选项),\n数组的长度(vm.set(this.items.splice(newlength)这样可以侦听到)\n不可以通过watch侦听到,不使用箭头函数以防改变this的指向\t\n\nwatch使用方式\t//反应有时间间隔,大概1-2s\n\n1.v-model来侦听数据变化\nv-model="MobilePhone"\ndata中MobilePhone=""\nwatch: {\n    \tMobilePhone:function(val) {\n       \t    thisVal = $.trim(val),\n      \t    thisValLen = thisVal.length;\n      \t    if (isNaN(Number(val)) || thisVal == \'\' || thisValLen < 11) {\n            \tthis.ntifyingCode = "";\n       \t } else if (thisValLen == 11){\n        \t    this.ntifyingCode = "ntifyingCode";\n       \t }\n    }\n\n2.vue.$watch(\'abc\', function (val)=>{\n\tconsole.log(val)\n})\n\n<input  v-model="abc" />\ndata:{\n  return {\n    tdArray:"张三"\n  }\n},\nwatch:{\n\tabc(val){\n\t},\n\tb: \'someMethod\',//值是方法\n\tc: {\n\t    //值是对象\n  \t\t    handler: function (val, oldVal) { /* ... */ },\n \t\t    //深层拷贝watch\n            deep: true\n        }\n}\n\n3.直接侦听某个值\nhtml中写Alipay，在data中写一个Alipay，然后在watch中写判断\nwatch: {\n    Alipay，(val) {\n        if (isNaN(Number(val)) || $.trim(val) == \'\') {\n            this.Alipay  = " "\n        } else {\n            this.Alipay  = "ntifyingCode"\n        }\n    }\n}\t\n\n执行顺序一般为computed--》watch\n如果是触发事件后先methos--》watch')])])])}],!1,null,null,null);n.default=i.exports}}]);
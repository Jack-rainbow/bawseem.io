(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{329:function(t,e,n){"use strict";n.r(e);var s=n(1),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h4",{attrs:{id:"vuex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),n("p",[t._v("🐶")]),t._v(" "),n("p",[n("code",[t._v("什么时候用vuex？")])]),t._v(" "),n("p",[t._v("1.vue中父给孙子传值的时候可能需要用到vuex，因为在vue中没有父给孙子传值这个说法，要么借助bus总线，要么vuex")]),t._v(" "),n("p",[t._v("2.数据公用，不同组件都需要得到这个数据")]),t._v(" "),n("p",[t._v("3.多个组件之间互相传值或者修改值")]),t._v(" "),n("p",[t._v("vuex有3个状态\n")]),n("hr"),t._v(" "),n("code",[t._v("Actions")]),t._v("    ----   一般用于异步操作"),n("p"),t._v(" "),n("p",[n("code",[t._v("Mutations")]),t._v("   ----   vuex中的主要修改数据的地方")]),t._v(" "),n("p",[n("code",[t._v("State")]),t._v("   ----    存储着vuex中的状态值\n")]),n("hr"),n("p"),t._v(" "),n("p",[t._v("vuex一般分为6个文件\n")]),n("hr"),n("p"),t._v(" "),n("blockquote",[n("p",[t._v("1.index.js")])]),t._v(" "),n("pre",[n("code",[t._v("index.js主要存储一些配置文件及加载其他5个js文件\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("2.state.js")])]),t._v(" "),n("pre",[n("code",[t._v("state是用来储存状态值的\neg:\n    const state = {\n        city: {},\n    }\n    export default state;\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("3.getter.js")])]),t._v(" "),n("pre",[n("code",[t._v("用来获取state中的值且不做任何修改及对数据进行一些操(过滤,修改)\neg:\n    cosnt city = state => state.city\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("4.mutations_types.js")])]),t._v(" "),n("pre",[n("code",[t._v("用来存储mutations中一些常量\neg:\n    expport const SET_CITY = 'SET_CITY'\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("5.mutations.js")])]),t._v(" "),n("pre",[n("code",[t._v("获取mutations中的一些常量及获取修改state的值。且接受commit(组件和Actions传过来)的值,\nmutations必须是同步函数\neg:\n    import * as types from './mutations_types.js'\n    export const mutations ={\n        //常量函数名\n        [types.SET_CITY] (state,city){\n            //state是状态值\n            //city是参数值\n            state.city =city\n        }\n    }\n    export default mutations;\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("6.actions")])]),t._v(" "),n("pre",[n("code",[t._v("用来一些异步操作(Dispatch传来)的值且commit可以传送到mutations中\neg:\n    import * as types from './mutations_types.js'\n    export const changcity = function({commit},data){\n        commit(types.SET_CITY,data)\n    }\n")])]),t._v(" "),n("blockquote",[n("p",[t._v("组件内调用使用 ...mapActions/mapmutations/mapState/mapGetters")])]),t._v(" "),n("pre",[n("code",[t._v("1.组件中直接使用\n    this.$stroe.getters/state/mutations.changcity\n2.computed:{\n    ..mapActions([\n        //Actions中的文件名\n        //映射this.changcity 为store.state.changcity\n        'changcity'\n    ])\n}\n3.组件同步提交值--mutations\n    this.$store.commit('xxx')\n4.组件异步提交值--Actions\n    this.$store.dispatch('xxx')\n")])]),t._v(" "),n("hr")])}],!1,null,null,null);e.default=o.exports}}]);
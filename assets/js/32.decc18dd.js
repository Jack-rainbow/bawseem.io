(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{343:function(e,n,t){"use strict";t.r(n);var r=t(1),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h4",{attrs:{id:"路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[e._v("#")]),e._v(" 路由")]),e._v(" "),t("blockquote",[t("p",[e._v("vue中router-link与a标签区别")])]),e._v(" "),t("pre",[t("code",[e._v('a标签中支持target="_blank",但是router-link不支持\n因为是单页面开发应用的组件,但是router-link可以进行路由加载，路由传参等\n')])]),e._v(" "),t("blockquote",[t("p",[e._v("路由传参")])]),e._v(" "),t("pre",[t("code",[e._v("1.方法路由传值\neg：\n   this.$router.push({\n       path：`/xx/${xx.id}`\n   })\n2.params\neg：\n    <router-link \n       :to=\"{name:'sign',params:{id:item.id}}\">\n    </router-link>\n3.query\neg：\n    <router-link \n       :to=\"{path:'/sign',query:{id:item.id}}\">\n    </router-link>\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("路由懒加载")])]),e._v(" "),t("pre",[t("code",[e._v('export default new Router({\n    routes:[\n        {\n            path:"/xxx",\n            name:"xxx",\n            component：resolve => require(["@/components/xxx"],resolve)\n        }\n    ]\n})\n')])]),e._v(" "),t("blockquote",[t("p",[e._v("获取路由参数")])]),e._v(" "),t("pre",[t("code",[e._v("1.this.$router.params.id ----全局路由\n2.this.$route.params.id ----组件路由\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("侦听路由")])]),e._v(" "),t("pre",[t("code",[e._v("eg:\n    1.watch:{\n       '$route'(to,form){\n           //to----离开的路由\n           //from----要去的路由\n       }\n    }\n    2.组件内beforeEnter,beforeUpdate,beforeLeave(to,from,next)\n    3.全局组件侦听beforeEnter,beforeUpdate,beforeLeave(to,from,next)\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("路由拦截")])]),e._v(" "),t("pre",[t("code",[e._v("beforeEnter,beforeUpdate,beforeLeave(to,from,next)\n")])]),e._v(" "),t("blockquote",[t("p",[e._v("路由")])]),e._v(" "),t("pre",[t("code",[e._v("1.全局路由\n    beforeEach(to,from,next){}\n2.组件内路由\n    beforeEnter(to, from, next) {\n        // 在渲染该组件的对应路由被 confirm 前调用\n        // 不！能！获取组件实例 `this`\n        // 因为当钩子执行前，组件实例还没被创建\n        next(vm => { // 通过 `vm` 访问组件实例 })\n    },\n    beforeRouteLeave (to, from, next) {\n        // 导航离开该组件的对应路由时调用\n        // 可以访问组件实例 `this`\n        leave 钩子通常用来禁止用户在还未保存修改前突然离开。\n        可以通过 next(false) 来取消导航。 \n    }\n\n3.路由独享钩子\n    beforeEnter:(to, from, next)\n")])])])}],!1,null,null,null);n.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{365:function(e,n,r){"use strict";r.r(n);var a=r(1),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("h4",{attrs:{id:"query与params区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query与params区别","aria-hidden":"true"}},[this._v("#")]),this._v(" query与params区别")]),this._v(" "),n("pre",[n("code",[this._v('1.传参\n    路由中name必须与router文件中的name一样\n        eg：\n            router文件\n            {\n                path:"/xxx",\n                name:"abc"\n            }\n            路由name\n            this.$route.push({\n                //切记是name不是path，params只能用name来引入路由\n                name:"abc",\n                params:{\n                    name:\'newabc\',\n                    code:10011\n                }\n            })\n2.query类似于get传参(url中显示参数),params类似于post传参(url中不显示参数)\n3.params、query不设置也可以传参，但是params不设置的时候\n  刷新页面或者返回参数会丢失，query并不会出现这种情况\n4.query获取的是参数名而params获取的是参数\n    eg：\n        /path:id 路由匹配/path/1这里的id用params\n        /path?id=12  路由匹配/path?id=2这里的id用query\n5.为什么刷新页面params会丢失参数？\n\n6.使用路由参数(例如从 /user/foo 导航到 user/bar)后\n  组件会被复用，此时应该使用$route在watch中进行监听\n7.vue中前进后退\n    router.go(1)  //进\n    router.go(-1) //退\n8.vue-router命名视图\n    当页面需要使用多个router-view的时候,而不是嵌套展示.只需要设置name即可\n    eg:\n        <router-view class="view one"></router-view>\n        <router-view class="view two" name="a"></router-view>\n        <router-view class="view three" name="b"></router-view>\n        const router = new VueRouter({\n          routes: [\n            {\n              path: \'/\',\n              components: {\n                default: Foo,\n                a: Bar,\n                b: Baz\n              }\n            }\n          ]\n        })\n')])])])}],!1,null,null,null);n.default=t.exports}}]);
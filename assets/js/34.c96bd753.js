(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{336:function(e,t,n){"use strict";n.r(t);var s=n(1),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("h4",{attrs:{id:"vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" vuepress")]),this._v(" "),t("pre",[t("code",[this._v("vuepress问题总结：\n1.公共资源放到public里边(图片)\n  如何引用：\n\theroImage: /logo.png\n\n2.genSidebarConfig用于aside\n3.每个文件下必须新建一个md文档 根据md文档来驱动目录名\n4.vuepress启动项目必须去docs文件里边启动\n5.如果想要扩展插件，在在.vuepress下新建enhanceApp.js(名字不可修改)\n\nimport ElementUI from 'element-ui';\nimport 'element-ui/lib/theme-chalk/index.css';\nexport default ({\n      Vue, // VuePress 正在使用的 Vue 构造函数\n\t      options, // 附加到根实例的一些选项\n\t      router, // 当前应用的路由实例\n\t      siteData // 站点元数据\n      }) => {\n\t         Vue.use(ElementUI)//切记将use存放在此，否则将报是否在根组件之前正确注册组件\n  }\n6.如果想使用vue插件,直接在compoennts下新建vue文件就可以,然后去md中注册组件\n7.如果部署在git上，需要注意以下几点：\n\t1.修改config.js里边的base为git目录: base：: '/bawseem.io'\n\t2.修改themeConfig中的repo为git目录: repo: 'Jack-rainbow/bawseem.io'\n8.如果想修改vuepress主题颜色,直接在.vuepress下新建override.styl即可(名字不可修改)\n9.如果想在vuepress中使用表情，传送门http://tw.piliapp.com/emoji/cheat-sheet/\n")])])])}],!1,null,null,null);t.default=i.exports}}]);
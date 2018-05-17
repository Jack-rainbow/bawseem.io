module.exports = {
    base: '/bawseem.io/',
    title: "Vuepress",
    description: "描述",
    head: [
        [
            "link", { 
                rel: "icon", type: "image/x-icon", href: `/logo.png` 
            }
        ]
    ],
    dest: "./dist",
    themeConfig: {
        nav: [
            {
                text: "主页",
                link: "/"
            },
            {
                text: "博客",
                link: "/blog/"
            },
            {
                text: "知识",
                link: "/juejin/"
            },
            {
                text: "文档",
                link: "https://cn.vuejs.org/"
            },
            {
                text: "博客",
                link: "https://github.com/Jack-rainbow"
            }
        ],
        sidebar: {
            "/blog/": genSidebarConfig("指南"),
            "/juejin/": JueSidebarConfig("用户指南")
        }
    }
};
function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: ["", "CSS/css", "JS/js", "HTTP/HTTP", "JavaScript/javascript"]
        }
    ];
}
function JueSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: ["/", "less/less", "node/node", "vue/vue", "webpack/webpack"]
        }
    ];
}

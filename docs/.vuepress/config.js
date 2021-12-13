module.exports = {
    base: "/md.io/",
    lang: 'zh-CN',
    title: '“来首有音乐治治我的腿”的小本本',
    description: '“来首有音乐治治我的腿”的小本本',

    themeConfig: {
        contributors: false,
        logo: 'http://mms0.baidu.com/it/u=3113972560,2880338129&fm=253&app=138&f=JPEG&fmt=auto&q=75',
        navbar: [],
        sidebarDepth: 2,
        sidebar: [
            // SidebarItem
            {
                text: '介绍',
                link: '/',
            },
            {
                text: "前端知识",
                children: [{
                    text: "排序算法",
                    link: '/knowledge/sort.md',

                }, {
                    text: "二叉树",
                    link: '/tree/index.md',
                }, {
                    text: "Promise",
                    link: '/promise/index.md',
                }, {
                    text: "斐波纳契数",
                    link: '/fibonacciNumber/index.md',
                }]
            },
            {
                text: '常用工具函数',
                link: "/utils/index.md"
            },

            {
                text: "前端框架",
                link: '/framework/index.md'
            },
            {
                text: "面试题",
                link: '/interview/index.md',
            },
            {
                text: "实战进阶",
                link: '/fighting/index.md'
            },
            {
                text: "项目管理知识",
                link: '/PMP/README.md'
            },
        ],
    },
}
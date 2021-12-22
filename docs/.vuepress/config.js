module.exports = {
    base: "/md.io/",
    lang: 'zh-CN',
    title: '“来首有音乐治治我的腿”的小本本',
    description: '“来首有音乐治治我的腿”的小本本',

    themeConfig: {
        contributors: false,
        logo: 'http://mms0.baidu.com/it/u=3113972560,2880338129&fm=253&app=138&f=JPEG&fmt=auto&q=75',
        navbar: [
            {
                text: "介绍",
                link: "/README.md",
                activeMatch: '',
            },
            {
                text: "项目管理知识",
                link: "/PMP/README.md",
                activeMatch: '^/pmp/',
            },
            {
                text: "面试题",
                link: '/interview/index.md',
                activeMatch: '^/interview/',
            },
        ],
        sidebarDepth: 2,
        sidebar: [
            // SidebarItem
            {
                text: '介绍',
                link: '/',
            },
            {
                text: "前端框架",
                link: '/framework/index.md'
            },
            {
                text: "前端知识",
                children: [{
                    text: "排序算法",
                    link: '/FE/knowledge/sort.md',

                }, {
                    text: "二叉树实现",
                    link: '/FE/tree/index.md',
                }, {
                    text: "Promise实现",
                    link: '/FE/promise/index.md',
                }]
            },
            {
                text: '常用工具函数',
                link: "/utils/index.md"
            },
            {
                text: "实战进阶",
                link: '/fighting/index.md'
            },
        ],
    },
}
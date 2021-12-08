module.exports = {
    base: "/md.io/",
    lang: 'zh-CN',
    title: '“来首有音乐治治我的腿”的前端学习网',
    description: '“来首有音乐治治我的腿”的前端学习网',

    themeConfig: {
        logo: 'http://mms0.baidu.com/it/u=3113972560,2880338129&fm=253&app=138&f=JPEG&fmt=auto&q=75',
        navbar: [{
                text: '选择语言',
                children: [{
                    text: '简体中文',
                    link: '',

                }, {
                    text: 'English',
                    link: '/english/',
                    activeMatch: '^/english/',
                }, ]
            },

        ],
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
            },
        },
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

                    },
                    {
                        text: "搜索算法",

                    },
                    {
                        text: "随机算法"
                    },
                    {
                        text: "递归"
                    },
                    {
                        text: "树"
                    },
                ]
            },
            {
                text: "实战进阶"
            },
            {
                text: '面试相关',
                children: [{
                    text: 'HTTP/HTTPS',
                    link: '/http-https/README.md',
                }, {
                    text: 'Javascript',
                    children: [{
                        text: '闭包',
                    }],
                }, ]
            },
            {
                text: "项目管理相关知识",
                link: '/PMP/README.md'
            }
        ],
    },
}
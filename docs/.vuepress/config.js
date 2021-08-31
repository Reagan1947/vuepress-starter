// 导出一个 JavaScrip 对象
module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            // 静态资源路径变量
            // '@Collection': '/JavaDocument/JavaBase/Collection'
          }
        }
    },
    title: 'Hi JAVA',
    description: 'Just playing around',
    plugins: [
        'vuepress-plugin-mermaidjs'
    ],
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-mark'));
            md.render('==marked==') // => '<p><mark>marked</mark></p>'
          },

    },
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: 'Java 基础', link: '/JavaDocument/' },
          { text: 'Java 线程', link: '/JavaThread/' },
          { text: '结构与算法', link: '/ConstructAndAlgorithm/' },
          { text: 'Java JVM', link: 'https://google.com' },
        ],
        // 侧边栏
        sidebar: [
            {
                title: 'Java 基础语法',   // 分组标题
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    ['/JavaDocument/', 'Explicit link text'],
                    ['/JavaDocument/', 'Explicit link text'],
                    ['/JavaDocument/', 'Explicit link text'],
                    ['/JavaDocument/', 'Explicit link text'],
                ]
              },
              {
                title: 'Java 集合',
                collapsable: false, // 是否展开该分组
                children: [
                    '/JavaDocument/JavaBase/Collection/Collection.md',
                    '/JavaDocument/JavaBase/Collection/List概述.md', 
                    '/JavaDocument/JavaBase/Collection/常见数据结构.md',
                    '/JavaDocument/JavaBase/Collection/List集合的子类.md',
                ],
                // initialOpenGroupIndex: 4, // 初始文章展开深度
              }
            ]
      },
      dest: 'public',
  };
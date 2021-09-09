// 导出一个 JavaScrip 对象
module.exports = {
    head: [
      ['link', { rel: 'icon', href: '/MainPageIcon.svg' }]
    ],
    configureWebpack: {
        resolve: {
          alias: {
            // 字体地址别名
            // 'SF-Pro': '/font/SF-Pro',
            // 'PingFang-SC': '/font/PingFang-SC',
          }
        }
    },
    title: 'Learning-Java /.Fun',
    description: 'Just playing around',
    plugins: [
      [ 'mermaidjs', { flowchart: {curve: 'linear'}}], // linear or basis
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    markdown: {
        lineNumbers: false,
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-mark'));
          },

    },
    themeConfig: {
      smoothScroll: true,  // 在页面内进行跳转时，页面会平滑滚动
        nav: [
          // { text: '主页', link: '/' },
          {
            text: 'Java 语法',
            ariaLabel: 'Java Grammar',
            items: [
              { text: 'Java 基础语法', link: '/JavaDocument/JavaBase/Base/注释.md' },
              { text: 'Java 集合', link: '/JavaDocument/JavaBase/Collection/Collection.md' }
            ]
          },
          { text: 'Java 虚拟机', link: 'https://google.com' },
          { text: '结构与算法', link: 'https://google.com' },
        ],
        // 侧边栏
        sidebar: [
            {
                title: 'Java 基础语法',   // 分组标题
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                  '/JavaDocument/JavaBase/Base/注释.md',
                  '/JavaDocument/JavaBase/Base/关键字.md',
                  '/JavaDocument/JavaBase/Base/常量.md',
                  '/JavaDocument/JavaBase/Base/数据类型.md',
                  '/JavaDocument/JavaBase/Base/变量.md',
                  '/JavaDocument/JavaBase/Base/变量使用的注意事项.md',
                  '/JavaDocument/JavaBase/Base/标识符.md',
                  '/JavaDocument/JavaBase/Base/类型转换.md',
                  '/JavaDocument/JavaBase/Base/算数运算符.md',
                  '/JavaDocument/JavaBase/Base/字符的+操作.md',
                  '/JavaDocument/JavaBase/Base/字符串的+操作.md',
                  '/JavaDocument/JavaBase/Base/赋值运算符.md',
                  '/JavaDocument/JavaBase/Base/自增自减运算符.md',
                  '/JavaDocument/JavaBase/Base/关系运算符.md',
                  '/JavaDocument/JavaBase/Base/逻辑运算符.md',
                  '/JavaDocument/JavaBase/Base/短路逻辑运算符.md',
                  '/JavaDocument/JavaBase/Base/三元运算符.md',
                  '/JavaDocument/JavaBase/Base/数据输入.md',
                  '/JavaDocument/JavaBase/Base/顺序结构.md',
                  '/JavaDocument/JavaBase/Base/if结构.md',
                  '/JavaDocument/JavaBase/Base/switch结构.md',
                  '/JavaDocument/JavaBase/Base/for循环语句.md',
                  '/JavaDocument/JavaBase/Base/while结构.md',
                  '/JavaDocument/JavaBase/Base/do_while结构.md',
                  '/JavaDocument/JavaBase/Base/三种循环的区别.md',
                  '/JavaDocument/JavaBase/Base/跳转控制语句.md',
                  '/JavaDocument/JavaBase/Base/循环嵌套.md',
                  '/JavaDocument/JavaBase/Base/Random.md',
                  '/JavaDocument/JavaBase/Base/数组定义格式.md',
                  '/JavaDocument/JavaBase/Base/数组动态初始化.md',
                  '/JavaDocument/JavaBase/Base/数组元素访问.md',
                  '/JavaDocument/JavaBase/Base/内存分配.md',
                  '/JavaDocument/JavaBase/Base/单个数组内存图.md',
                  '/JavaDocument/JavaBase/Base/多个数组内存图.md',
                  '/JavaDocument/JavaBase/Base/多个数组指向相同内存图.md',
                  '/JavaDocument/JavaBase/Base/数组静态初始化.md',
                  '/JavaDocument/JavaBase/Base/数组操作的两个常见小问题.md',
                  '/JavaDocument/JavaBase/Base/数组常见操作.md',
                  '/JavaDocument/JavaBase/Base/方法概述.md',
                  '/JavaDocument/JavaBase/Base/方法定义和调用.md',

                  '/JavaDocument/JavaBase/Base/方法.md',
                  '/JavaDocument/JavaBase/Base/方法重载.md',
                  '/JavaDocument/JavaBase/Base/Debug.md',
                  '/JavaDocument/JavaBase/Base/类和对象.md',
                  '/JavaDocument/JavaBase/Base/单个对象的内存空间.md',
                  '/JavaDocument/JavaBase/Base/多个对象的内存空间.md',
                  '/JavaDocument/JavaBase/Base/多个对象指向相同的内存.md',
                  '/JavaDocument/JavaBase/Base/成员变量和局部变量.md',
                  '/JavaDocument/JavaBase/Base/封装.md',
                  '/JavaDocument/JavaBase/Base/this关键词.md',
                  '/JavaDocument/JavaBase/Base/构造方法.md',
                  '/JavaDocument/JavaBase/Base/标准类的制作.md',
                  '/JavaDocument/JavaBase/Base/String概述.md',
                  '/JavaDocument/JavaBase/Base/字符串的比较.md',
                  '/JavaDocument/JavaBase/Base/字符串的遍历.md',
                  '/JavaDocument/JavaBase/Base/统计字符次数.md',
                  '/JavaDocument/JavaBase/Base/String中的方法.md',
                  '/JavaDocument/JavaBase/Base/集合基础.md',
                  '/JavaDocument/JavaBase/Base/StringBuilder概述.md',
                  '/JavaDocument/JavaBase/Base/StringBuilder的添加和反转方法.md',
                  '/JavaDocument/JavaBase/Base/继承.md',
                  '/JavaDocument/JavaBase/Base/继承中构造方法的访问特点.md',
                  '/JavaDocument/JavaBase/Base/继承中成员方法的访问特点().md',
                  '/JavaDocument/JavaBase/Base/方法重写.md',
                  '/JavaDocument/JavaBase/Base/Java中的修饰符包.md',
                  '/JavaDocument/JavaBase/Base/JRE和JDK.md',
                  '/JavaDocument/JavaBase/Base/导包.md',
                  '/JavaDocument/JavaBase/Base/修饰符.md',
                  '/JavaDocument/JavaBase/Base/final.md',
                  '/JavaDocument/JavaBase/Base/final修饰局部变量.md',
                  '/JavaDocument/JavaBase/Base/static.md',
                  '/JavaDocument/JavaBase/Base/static访问特点.md',
                  '/JavaDocument/JavaBase/Base/多态.md',
                  '/JavaDocument/JavaBase/Base/多态中成员访问特点.md',
                  '/JavaDocument/JavaBase/Base/多态的好处和弊端.md',
                  '/JavaDocument/JavaBase/Base/多态中的转型.md',
                  '/JavaDocument/JavaBase/Base/多态转型内存图解.md',
                  '/JavaDocument/JavaBase/Base/抽象类.md',
                  '/JavaDocument/JavaBase/Base/接口.md',
                  '/JavaDocument/JavaBase/Base/类和接口的关系.md',
                  '/JavaDocument/JavaBase/Base/抽象类和接口的区别.md',
                  '/JavaDocument/JavaBase/Base/形参和返回值.md',
                  '/JavaDocument/JavaBase/Base/内部类.md',
                  '/JavaDocument/JavaBase/Base/成员内部类.md',
                  '/JavaDocument/JavaBase/Base/局部内部类.md',
                  '/JavaDocument/JavaBase/Base/匿名内部类.md',
                  '/JavaDocument/JavaBase/Base/匿名内部类在开发中的使用.md',
                  '/JavaDocument/JavaBase/Base/Math.md',
                  '/JavaDocument/JavaBase/Base/System.md',
                  '/JavaDocument/JavaBase/Base/Object.md',
                  '/JavaDocument/JavaBase/Base/Arrays.md',
                  '/JavaDocument/JavaBase/Base/基本类型包装类.md',
                  '/JavaDocument/JavaBase/Base/Integer类的概述和使用.md',
                  '/JavaDocument/JavaBase/Base/字符串中的数据排序.md',
                  '/JavaDocument/JavaBase/Base/自动装箱和拆箱.md',
                  '/JavaDocument/JavaBase/Base/日期类.md',
                  '/JavaDocument/JavaBase/Base/异常.md'
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
                    '/JavaDocument/JavaBase/Collection/Set集合.md',
                    '/JavaDocument/JavaBase/Collection/泛型.md',
                    
                    '/JavaDocument/JavaBase/Collection/类型通配符.md',
                    '/JavaDocument/JavaBase/Collection/可变参数.md',
                    '/JavaDocument/JavaBase/Collection/可变参数的使用.md',
                    '/JavaDocument/JavaBase/Collection/Map集合的概述和特点.md',
                    '/JavaDocument/JavaBase/Collection/Map集合的基本功能.md',
                    '/JavaDocument/JavaBase/Collection/Map集合的获取功能.md',
                    '/JavaDocument/JavaBase/Collection/Map集合的遍历_方式1.md',
                    '/JavaDocument/JavaBase/Collection/Map集合的遍历_方式2.md',
                ],
                // initialOpenGroupIndex: 4, // 初始文章展开深度
              }
            ]
      },
      dest: 'public',
  };
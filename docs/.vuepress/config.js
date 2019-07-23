module.exports = {
  title: "Eru blog",
  description: "blog",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  serviceWorker: false, // 是否开启 PWA
  base: "/blog/", // 这是部署到github相关的配置
  dest: "./blog",
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      {
        text: "主页",
        link: "/"
      },
      {
        text: "技术笔记",
        items: [
          {
            text: "JavaScript",
            link: "/javascript/"
          },
          {
            text: "TypeScript",
            link: "/typescript/"
          },
          {
            text: "HTML",
            link: "/html/"
          },
          {
            text: "CSS",
            link: "/css/"
          },

          {
            text: "Git",
            link: "/git/"
          },
          {
            text: "Node",
            link: "/node/"
          },
          {
            text: "Linux",
            link: "/linux/"
          }
        ]
      },
      {
        text: "关于我",
        link: "/about/"
      },
      {
        text: "GitHub",
        link: "https://github.com/moonljr/"
      }
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: "前端",
        children: ["/index/", "index/npm", "index/axios", "index/resource"]
      },
      {
        title: "JavaScript",
        children: ["/javascript/"]
      },
      {
        title: "TypeScript",
        children: ["/typescript/"]
      },
      {
        title: "CSS",
        children: ["/css/"]
      },
      {
        title: "HTML",
        children: ["/html/"]
      },
      {
        title: "Git",
        children: ["/git/"]
      },
      {
        title: "Node",
        children: ["/node/"]
      },
      {
        title: "Linux",
        children: [
          "/linux/",
          "linux/docker",
          "linux/nginx",
          "linux/git",
          "linux/mysql",
          "linux/node",
        ]
      }
    ],
    sidebarDepth: 2 // 侧边栏显示2级
  }
};
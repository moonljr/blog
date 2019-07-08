module.exports = {
  title: "Eru blog",
  description: "我的个人网站",
  // head: [ // 注入到当前页面的 HTML <head> 中的标签
  // 	['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  serviceWorker: false, // 是否开启 PWA
  base: "/", // 这是部署到github相关的配置
  // dest: "./blog",
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "主页", link: "/" },
      { text: "入门", link: "/install/" },
      { text: "入门2", link: "/demo/" },
      { text: "关于", link: "/about/" },
      { text: "GitHub", link: "https://github.com/" }
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: "入门",
        children: ["/install/"]
      },
      {
        title: "入门2",
        children: ["/demo/"]
      }
    ],
    sidebarDepth: 2 // 侧边栏显示2级
  }
};

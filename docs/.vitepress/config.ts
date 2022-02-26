import { defineConfig } from "vitepress";

export default defineConfig({
  title: "docsify",
  description: "Just playing around.",
  base: "/docsify-vitepress/",
  themeConfig: {
    // Type is `DefaultTheme.Config`
    nav: [
      { text: "Guide", link: "/" },
      {
        text: "Config Reference",
        link: "/configuration",
        activeMatch: "^/configuration/",
      },
      {
        text: "Release Notes",
        link: "https://github.com/vuejs/vitepress/releases",
      },
    ],

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/config/": getConfigSidebar(),
      "/": getGuideSidebar(),
    },
  },
});

function getGuideSidebar() {
  return [
    {
      text: "基础",
      children: [
        { text: "首页", link: "/" },
        { text: "快速开始", link: "/quickstart" },
        { text: "多页文档", link: "/more-pages" },
        { text: "定制导航", link: "/custom-navbar" },
        { text: "封面", link: "/cover" },
      ],
    },
    {
      text: "配置",
      children: [
        { text: "配置项", link: "/configuration" },
        { text: "主题", link: "/themes" },
        { text: "使用插件", link: "/plugins" },
        { text: "开发插件", link: "/write-a-plugin" },

        {
          text: "markdown配置",
          link: "/markdown",
        },
        { text: "代码高亮", link: "/language-highlight" },
      ],
    },
    {
      text: "指南",
      children: [
        { text: "部署", link: "/deploy" },
        { text: "文档助手", link: "/helpers" },
        { text: "vue", link: "/vue" },
        { text: "cdn", link: "/cdn" },
        { text: "离线模式", link: "/pwa" },
        { text: "服务端渲染", link: "/ssr" },
        { text: "文件嵌入", link: "/embed-files" },
        { text: "awesome", link: "/awesome" },
      ],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: "App Config",
      children: [{ text: "Basics", link: "/config/basics" }],
    },
    {
      text: "Theme Config",
      children: [
        { text: "Homepage", link: "/config/homepage" },
        { text: "Algolia Search", link: "/config/algolia-search" },
        { text: "Carbon Ads", link: "/config/carbon-ads" },
      ],
    },
  ];
}

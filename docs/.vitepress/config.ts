import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'utools工具库',
  lang: 'zh-CN',
  description: '前端开发者utools工具库',
  head: [
    [
      'meta',
      { name: '前端开发者utools工具库', content: '前端正则函数 通用函数' },
    ],
  ],
  themeConfig: {
    logo: '/icon.png',
    nav: [
      {
        text: '使用教程',
        items: [
          {
            text: '@utools/universal',
            link: '/guide/what-is-utools',
            activeMatch: '/guide/what-is-utools',
          },
          {
            text: '@utools/typings',
            link: '/typings/getting-started',
            activeMatch: '/typings/getting-started',
          },
        ],
      },
    ],
    sidebar: {
      // 侧边栏匹配
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是 utools', link: '/guide/what-is-utools' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' },
            { text: '发布', link: '/guide/deploying' },
          ],
          collapsed: true,
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Createitv' },
      { icon: 'twitter', link: 'https://twitter.com/desiRe46099800' },
    ],
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 独立开发者彷丶徨丶',
    },
  },
  lastUpdated: true,
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },
})

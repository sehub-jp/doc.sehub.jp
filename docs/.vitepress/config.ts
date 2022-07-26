import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'ja',
  title: 'Doc.SeHub.JP',
  titleTemplate: 'SeHub.JPのドキュメント集',
  description: 'SeHub.JPのドキュメント集',
  head: [],
  lastUpdated: true,

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: '//github.com/sehub-jp/doc.sehub.jp.git' },
    ],

    nav: [
      {
        text: 'JAVA',
        items: [
          { text: 'Spring Boot', link: '/java/springboot' },
        ],
      }
    ],
    
    editLink: {
      pattern: '',
      text: 'GitHubで編集',
    },
    lastUpdatedText: '最終更新',
    
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Doc.SeHub.JP'
    }
  }
})
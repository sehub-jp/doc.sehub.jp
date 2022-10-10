import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'ja',
  title: 'Doc.SeHub.JP',
  titleTemplate: 'SeHub.JPのドキュメント集',
  description: 'SeHub.JPのドキュメント集',
  head: [],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: '//github.com/sehub-jp/doc.sehub.jp.git' },
    ],

    nav: [
      {
        text: 'Linux',
        link: '/linux/'
      },
      {
        text: 'データベース',
        items: [
          { text: 'PostgreSQL', link: '/db/postgresql/' }
        ]
      },
      {
        text: 'JAVA',
        items: [
          { text: 'Spring Boot', link: '/java/springboot/' },
        ],
      },
      {
        text: 'PHP',
        items: [
          { text: 'Laravel', link: '/php/laravel/' },
        ],
      },
      {
        text: 'AWS',
        items: [
          { text: 'VPC', link: '/aws/vpc/' },
        ],
      },
    ],

    sidebar: {
      
      // Linux
      '/linux/': [
        {
          text: 'Linux 紹介',
          items: [{ text: 'Linuxって何？', link: '/linux/' }]
        },
        {
          text: 'コマンド',
          collapsed: true,
          items: [
            { text: 'ユーザー管理', link: '/linux/cmd/user' }
          ]
        },
      ],

      // PostgreSQL
      '/db/postgresql/': [
        {
          text: 'PostgreSQL 紹介',
          collapsible: true,
          items: [
            { text: 'PostgreSQLって何？', link: '/db/postgresql/' },
            { text: 'PostgreSQLの歴史', link: '/db/postgresql/history' }
          ]
        },
        {
          text: 'インストール',
          collapsible: true,
          items: [{ text: 'Amazon Linux2 でインストール', link: '/db/postgresql/install' }]
        },
      ],

      // Java
      '/java/springboot/': [
        {
          text: 'SpringBoot紹介',
          collapsible: true,
          items: [
            { text: 'Spring Bootってなに？', link: '/java/springboot/' },
            { text: 'クイックスタート', link: '/java/springboot/boot-quick-start' },
          ],
        },
        {
          text: 'Thymeleaf',
          collapsible: true,
          items: [
            { text: 'Thymeleafってなに？', link: '/java/springboot/thymeleaf/' },
          ]
        },
      ],

      // PHP
      '/php/laravel/': [
        {
          text: '始めましょう',
          collapsible: true,
          items: [
            { text: 'インストール', link: '/php/laravel/install' },
            { text: 'Starter Kits', link: '/php/laravel/starter-kits' },
          ],
        },
      ],

      // AWS
      '/aws/': [
        {
          text: 'VPC',
          collapsible: true,
          items: [
            { text: 'VPC って何', link: '/aws/vpc/' },
            { text: 'VPC の開始方法', link: '/aws/vpc/new-vpc'}
          ],
        }
      ],
    },
    
    editLink: {
      pattern: 'https://github.com/sehub-jp/doc.sehub.jp/edit/main/docs/:path',
      text: 'GitHubで編集',
    },
    lastUpdatedText: '最終更新',
    
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 Doc.SeHub.JP'
    }
  }
})
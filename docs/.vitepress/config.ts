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
    outline: [2,3],
    outlineTitle: "目次",
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
          { text: 'PHP', link: '/php/' },
          { text: 'Laravel', link: '/php/laravel/' },
        ],
      },
      {
        text: 'AWS',
        items: [
          { text: 'VPC', link: '/aws/vpc/' },
          { text: 'EC2', link: '/aws/ec2/' },
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
            { text: '基本コマンド', link: '/linux/cmd/base' },
            { text: 'ユーザー管理', link: '/linux/cmd/user' }
          ]
        },
      ],

      // PostgreSQL
      '/db/postgresql/': [
        {
          text: 'PostgreSQL 紹介',
          items: [
            { text: 'PostgreSQLって何？', link: '/db/postgresql/' },
            { text: 'PostgreSQLの歴史', link: '/db/postgresql/history' }
          ]
        },
        {
          text: 'インストール',
          items: [{ text: 'Amazon Linux2 でインストール', link: '/db/postgresql/install' }]
        },
      ],

      // Java
      '/java/springboot/': [
        {
          text: 'SpringBoot紹介',
          items: [
            { text: 'Spring Bootってなに？', link: '/java/springboot/' },
            { text: 'クイックスタート', link: '/java/springboot/boot-quick-start' },
          ],
        },
        {
          text: 'Thymeleaf',
          collapsed: false,
          items: [
            { text: 'Thymeleafってなに？', link: '/java/springboot/thymeleaf/' },
          ]
        },
      ],

      // PHP
      '/php/': [
        {
          text: 'PHP 紹介',
          items: [
            { text: 'PHP って何？', link: '/php/' },
            { text: 'インストール', link: '/php/install' },
          ],

        },
        {
          text: 'Composer 紹介',
          items: [
            { text: 'Composer って何？', link: '/php/composer/' },
            { text: 'インストール', link: '/php/composer/install' },
          ],

        }
      ],

      // Laravel
      '/php/laravel/': [
        {
          text: '始めましょう',
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
          items: [
            { text: 'VPC って何', link: '/aws/vpc/' },
            { text: 'VPC の開始方法', link: '/aws/vpc/new-vpc'}
          ],
        },
        {
          text: 'EC2',
          collapsed: false,
          items: [
            { text: 'EC2 って何', link: '/aws/ec2/' },
            { text: 'EC2 の開始方法', link: '/aws/ec2/new-ec2'},
            { text: 'EC2 インスタンスに接続', link: '/aws/ec2/login'},
            { text: 'Amazon Linux 2022 初期設定', link: '/aws/ec2/setup'},
            { text: 'Nginx セットアップ', link: '/aws/ec2/nginx'}
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
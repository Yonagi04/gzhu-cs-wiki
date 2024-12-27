import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GZHU CS Wiki",
  description: "广大计算机学习指南",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/favicon.png',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Guangzhou University', link: 'https://www.gzhu.edu.cn' }
    ],

    sidebar: [
      {
        text: '🎁新手入门',
        collapsed: true,
        items: [
          { text: '广大计算机专业介绍', link: '/beginner/cs-intro' },
          { text: '可供参考的学习规划', link: '/beginner/study-plan' },
          { text: '转专业方案', link: '/beginner/transfer-plan' },
          { text: '如何选课', link: '/beginner/choose-ur-course' },
          { text: '小白如何选择合适的笔记本电脑？', link: '/beginner/choose-ur-laptop' }
        ]
      },
      {
        text: '⚒️必学工具',
        collapsed: true,
        items: [
          { text: '科学上网', link: '/tools/vpn' },
          { text: 'Git', link: '/tools/git' },
          { text: 'Github', link: '/tools/github' },
          { text: 'Linux', link: '/tools/linux' },
          { text: 'Markdown', link: '/tools/markdown' },
          { text: 'LaTeX', link: '/tools/latex' },
          { text: 'Vim', link: '/tools/vim' },
          { text: 'Docker', link: '/tools/docker' },
          { text: 'GPT', link: '/tools/gpt' },
          { text: '好用软件推荐', link: '/tools/software' }
        ]
      },
      {
        text: '📚好书推荐',
        collapsed : true,
        items: [
          { text: '好书推荐', link: '/books/books'}
        ]
      },
      {
        text: '📝学科课程',
        collapsed: true,
        items: [
          { text: '数学', link: '/courses/math' },
          { text: 'C语言', link: '/courses/c-language' },
          { text: '数据结构', link: '/courses/data-structure' },
          { text: '计算机组成原理', link: '/courses/computer-organization' },
          { text: '操作系统', link: '/courses/os' },
          { text: '计算机网络', link: '/courses/network' },
          { text: '编译原理', link: '/courses/compilation' },
          { text: '数据库', link: '/courses/database' },
          { text: '软件工程', link: '/courses/software-engineering' },
          { text: '分布式系统', link: '/courses/distributed-system' },
        ]
      },
      {
        text: '🏅学科竞赛',
        collapsed: true,
        items: [
          { text: 'ACM', link: '/contests/acm' },
          { text: 'CTF', link: '/contests/ctf' }
        ]
      },
      {
        text: '🧑‍💻后端开发',
        collapsed: true,
        items: [
          { text: '后端开发入门', link: '/backend/beginner' },
          { 
            text: 'Java', 
            collapsed: false,
            items: [
              { text: 'Java基础', link: '/backend/java/basic' },
              { text: 'Java提高', link: '/backend/java/improve' },
              { text: 'Java进阶', link: '/backend/java/advanced' }
            ] 
          },
          {
            text: 'Go', 
            collapsed: false,
            items: [
              { text: 'Go基础', link: '/backend/go/basic' },
              { text: 'Go提高', link: '/backend/go/improve' },
              { text: 'Go进阶', link: '/backend/go/advanced' }
            ] 
          }
        ]
      },
      {
        text: '👩‍💻前端开发',
        collapsed: true,
        items: [
          { text: '前端开发入门', link: '/frontend/beginner' },
          { text: '前端开发基础', link: '/frontend/basic' },
          { text: 'Vue技术栈', link: '/frontend/vue' },
          { text: 'React技术栈', link: '/frontend/react' }
        ]
      },
      {
        text: '🧑‍🔬科研入门',
        collapsed: true,
        items: [
          { text: '科研入门', link: '/research/research' }
        ]
      },
      {
        text: '👷工作经验',
        collapsed: true,
        items: [
          { text: '如何找工作？', link: '/experience/job' },
          { text: '如何写简历？', link: '/experience/cv' },
          { text: '面试经验', link: '/experience/interview' }
        ]
      },
      {
        text: '💯考研考公经验',
        collapsed : true,
        items: [
          { text: '考研入门', link: '/exam/graduate' },
          { text: '考公入门', link: '/exam/civil-servant' }
        ]
      },
      {
        text: '🏃‍♂️留学指南',
        collapsed: true,
        items: [
          { text: '留学入门', link: '/abroad/abroad' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yonagi04/gzhu-cs-wiki' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com//Yonagi04/gzhu-cs-wiki/blob/main/LICENSE">CC BY-NC-SA 4.0 License</a>',
      copyright: 'Copyright © 2024-present GZHU-CS-Wiki'
    },

    search: {
      provider: 'local'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/logo/favicon.png' }]
  ]
})

import { defineConfig } from 'vitepress'
import {createHighlighter} from 'shiki'
import fs from 'fs'

// Just Added some new keywords to coffeescript 
const danfeLang = JSON.parse(fs.readFileSync('./assets/danfe.json', 'utf8'))

export default defineConfig({
  title: "Danfe",
  description: "Dynamic Assembler for Native Function Engine",
  head: [
    ['link', { rel: 'shortcut icon', href: '/assets/favicon.ico' }]
  ],
  markdown: {
    config: async (md) => {
      const highlighter = await createHighlighter({
        langs: [danfeLang, 'bash', 'md', 'js', 'sh', 'v'],
        
        themes: ['github-dark-high-contrast']
      })

      md.options.highlight = (code, lang) => {
        return highlighter.codeToHtml(code, {
          lang: lang,
          theme: 'github-dark-high-contrast'
        })
      }
    },
  },
  // markdown: {
  //   
  // },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentations', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'About', link: '/about' },
          { text: 'Installing', link: '/install' }
        ]
      },
      {
        text: 'Overview',
        collapsed: false,
        items: [
          { text: 'Execute', link: '/execute' },
          { text: 'REPL', link: '/repl' },
          { text: 'Hello World', link: '/hello-world' },
          { text: 'Keywords', link: '/keywords' },
        ]
      },
      {
        text: 'Language',
        collapsed: false,
        base: "/language",
        items: [
          { text: 'Comments', link: '/comments' },
          { text: 'Variables', link: '/variables' },
          { text: 'Del', link: '/del' },
          { text: 'Danfe Types', link: '/danfe-types' },
          { text: 'Run V Code', link: '/vblock' },
          { text: 'Operators', link: '/operators' },
          { text: 'Loops', link: '/loop' },
          { text: 'Conditions', link: '/condition' },
          { text: 'Module', link: '/module' },
          { text: 'Functions', link: '/function' },
        ]
      },
      {
        text: 'Built In functions',
        collapsed: false,
        items: [
          { text: 'All Functions', link: '/built-in-functions#built-in-functions' },
          { text: 'Println', link: '/built-in-functions#println' },
          { text: 'Input', link: '/built-in-functions#input' },
          { text: 'Type Of', link: '/built-in-functions#typeof' },
          { text: 'Len', link: '/built-in-functions#len' },
          { text: 'Int', link: '/built-in-functions#int-float-string' },
          { text: 'Float', link: '/built-in-functions#int-float-string' },
          { text: 'String', link: '/built-in-functions#int-float-string' },
          { text: 'Testing', link: '/built-in-functions#testing' },
          { text: 'Panic', link: '/built-in-functions#panic' },
          { text: 'Random', link: '/built-in-functions#random-generator' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sairash/danfe-v' }
    ]
  }
})
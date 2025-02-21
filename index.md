---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Danfe Programming Language"
  tagline: "Danfe Not Danphe"
  image: "https://utfs.io/f/Jk6mQ2VBlE6tJvy6SfVBlE6tumDzfiKX2RrbsTLOPYUd4IV8"
  actions:
    - theme: brand
      text:  Documentations
      link: /about
    - theme: alt
      text: Go To Github
      link: /api-examples

features:
  - title: Intrepreted language
    icon: 🌠
    details: Intrepreted language for easy developement and continuous deployment
  - title: Modular language (Comming Soon)
    icon: 🛠️
    details: "Written in such a way that it is going to be easier to hackup a compiler for other languages in short period of time." 
  - title: Compiled language (Comming Soon)
    icon: 🛠️
    details: "Danfe can compile into a human readable code of other languages (<b>asm, golang, js, vlang, c, python</b>)."
  
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/sairash.png',
    name: 'Sairash Sharma Gautam',
    title: 'Creator',
    links: [
      {icon:{
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" > <path d="M13.0601 10.9399C15.3101 13.1899 15.3101 16.8299 13.0601 19.0699C10.8101 21.3099 7.17009 21.3199 4.93009 19.0699C2.69009 16.8199 2.68009 13.1799 4.93009 10.9399"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
      }, link: 'https://sairashgautam.com.np/'},
      { icon: 'github', link: 'https://github.com/sairash' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/sairash-gautam-54b743239/' }
    ]
  },
  
]
</script>

<br>
<br>
<br>
<br>

Made with :heart: by: 

<VPTeamMembers size="medium" align="" :members="members" />
<br>

Want to contribute? [Go here!](https://github.com/sairash/danfe-v)

<style scope>
.clip {
  background: var(--vp-home-hero-name-background) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
}
</style>
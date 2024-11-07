---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Danfe Programming Language"
  tagline: "Danfe - Dynamic Assembler for Native Function Engine"
  image: "/assets/df_rounded_more.png"
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
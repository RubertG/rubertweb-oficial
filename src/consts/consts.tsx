import { CSS as CSSIcon, Figma, Firebase, HTML as HTMLIcon, JS as JSIcon, NextJS, React, Sass, Tailwind, TypeScript } from '@/components/Icons/Icons'
import { type SocialLink, type TecnologyType } from '@/types/types'

export const HTML: TecnologyType = { name: 'HTML', icon: <HTMLIcon /> }
export const CSS: TecnologyType = { name: 'CSS', icon: <CSSIcon /> }
export const JS: TecnologyType = { name: 'JavaScript', icon: <JSIcon /> }
export const REACT: TecnologyType = { name: 'React', icon: <React /> }
export const TYPESCRIPT: TecnologyType = { name: 'TypeScript', icon: <TypeScript /> }
export const SASS: TecnologyType = { name: 'Sass', icon: <Sass /> }
export const FIREBASE: TecnologyType = { name: 'Firebase', icon: <Firebase /> }
export const NEXTJS: TecnologyType = { name: 'NextJS', icon: <NextJS /> }
export const TAILWIND: TecnologyType = { name: 'Tailwind CSS', icon: <Tailwind /> }
export const FIGMA: TecnologyType = { name: 'Figma', icon: <Figma /> }

export const TECNOLOGIES: TecnologyType[] = [
  HTML,
  CSS,
  JS,
  REACT,
  TYPESCRIPT,
  SASS,
  FIREBASE,
  NEXTJS,
  FIGMA
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', href: 'https://twitter.com/Rubert_G' },
  { name: 'Instagram', href: 'https://www.instagram.com/rubert_g12/' },
  { name: 'Mail', href: 'mailto:rubertgonzalez5@gmail.com' },
  { name: 'GitHub', href: 'https://github.com/RubertG' },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/rubert-gonzalez-8782b8252/' },
  { name: 'Threads', href: 'https://www.threads.net/@rubert_g12' }
]

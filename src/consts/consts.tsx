import { CSS as CSSIcon, Figma, Firebase, GitHub, HTML as HTMLIcon, Instagram, JS as JSIcon, Linkedin, Mail, NextJS, Node, React, Sass, Supabase, Tailwind, TypeScript } from '@/components/Icons/Icons'
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
export const SUPABASE: TecnologyType = { name: 'Supabase', icon: <Supabase /> }
export const NODE: TecnologyType = { name: 'Node', icon: <Node /> }

export const TOTAL_TECNOLOGIES: TecnologyType[] = [
  HTML,
  CSS,
  JS,
  REACT,
  TYPESCRIPT,
  TAILWIND,
  FIREBASE,
  NEXTJS,
  FIGMA
]

export const TECNOLOGIES: TecnologyType[] = [
  HTML,
  CSS,
  JS,
  REACT,
  TYPESCRIPT,
  TAILWIND,
  SASS,
  FIREBASE,
  SUPABASE,
  NEXTJS,
  NODE,
  FIGMA
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/rubert_g12/', icon: <Instagram /> },
  { name: 'Gmail', href: 'mailto:rubertgonzalez5@gmail.com', icon: <Mail /> },
  { name: 'GitHub', href: 'https://github.com/RubertG', icon: <GitHub /> },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/rubert-gonzalez-8782b8252/', icon: <Linkedin /> }
]

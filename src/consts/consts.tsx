import { CSS, Figma, Firebase, HTML, JS, NextJS, React, Sass, TypeScript } from '@/components/Icons/Icons'
import { type SocialLink, type TecnologyType } from '@/types/types'

export const TECNOLOGIES: TecnologyType[] = [
  { name: 'HTML', icon: <HTML /> },
  { name: 'CSS', icon: <CSS /> },
  { name: 'JavaScript', icon: <JS /> },
  { name: 'React', icon: <React /> },
  { name: 'TypeScript', icon: <TypeScript /> },
  { name: 'Sass', icon: <Sass /> },
  { name: 'Firebase', icon: <Firebase /> },
  { name: 'Next.js', icon: <NextJS /> },
  { name: 'Tailwind CSS', icon: null },
  { name: 'Figma', icon: <Figma /> }
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', href: 'https://twitter.com/Rubert_G' },
  { name: 'Instagram', href: 'https://www.instagram.com/rubert_g12/' },
  { name: 'Mail', href: 'mailto:rubertgonzalez5@gmail.com' },
  { name: 'GitHub', href: 'https://github.com/RubertG' },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/rubert-gonzalez-8782b8252/' },
  { name: 'Threads', href: 'https://www.threads.net/@rubert_g12' }
]

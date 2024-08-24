import { type ProjectType } from '@/types/types'
import { CSS, FIGMA, FIREBASE, NEXTJS, REACT, SUPABASE, TAILWIND, TYPESCRIPT } from './consts'
export const PROJECTS: ProjectType[] = [
  {
    title: 'WebMinds Colombia',
    description: 'Landing page de mi emprendimiento de desarrollo de software.',
    img: '/assets/projects/web-minds.webp',
    github: 'https://github.com/RubertG/web-minds',
    href: 'https://www.web-minds-col.com/',
    tecnologies: [TYPESCRIPT, NEXTJS, TAILWIND, FIGMA]
  },
  {
    title: 'URL shortener',
    description: 'Acortador de enlaces con autenticación y base de datos. Podrás administrar tus enlaces personalizados.',
    img: '/assets/projects/url-shortener.webp',
    github: 'https://github.com/RubertG/acortador-de-links',
    href: 'https://rdli.vercel.app/',
    tecnologies: [TYPESCRIPT, NEXTJS, TAILWIND, SUPABASE]
  },
  {
    title: 'Coordina',
    description: 'Aplicación que ayuda en la toma de decisiones al momento de elegir los integrantes de un proyecto de software según los requerimientos dados.',
    img: '/assets/projects/coordina.webp',
    github: 'https://github.com/RubertG/coordina',
    href: 'https://coordina.vercel.app',
    tecnologies: [TYPESCRIPT, NEXTJS, TAILWIND, SUPABASE]
  },
  {
    title: 'Fake ecommerce',
    description: 'Tienda de productos con base de datos y autenticación con Firebase. Además con método de pago de MercadoPago.',
    img: '/assets/projects/fake-ecommerce.webp',
    github: 'https://github.com/RubertG/ecommerce',
    href: 'https://fake-ecommerce-eta.vercel.app',
    tecnologies: [TYPESCRIPT, NEXTJS, TAILWIND, FIREBASE, FIGMA]
  },
  {
    title: 'TODO App',
    description: 'Planifica y prioriza tus actividades diarias. App con autenticación de usuarios y base de datos.',
    img: '/assets/projects/todo-app.webp',
    github: 'https://github.com/RubertG/todo-app',
    href: 'https://organiza-tareas-app.netlify.app/',
    tecnologies: [REACT, CSS, FIREBASE, FIGMA]
  }
]

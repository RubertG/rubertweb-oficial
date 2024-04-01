import { type ProjectType } from '@/types/types'
import { CSS, FIGMA, FIREBASE, NEXTJS, REACT, SASS, SUPABASE, TAILWIND, TYPESCRIPT } from './consts'
export const PROJECTS: ProjectType[] = [
  {
    title: 'URL shortener',
    description: 'Acortador de enlaces con autenticación y base de datos. Podrás administrar tus enlaces personalizados.',
    img: '/assets/projects/url-shortener.webp',
    github: 'https://github.com/RubertG/acortador-de-links',
    href: 'https://rdli.vercel.app/',
    tecnologies: [NEXTJS, TAILWIND, SUPABASE]
  },
  {
    title: 'Fake ecommerce',
    description: 'Tienda de productos con base de datos y autenticación con Firebase. Además con método de pago de MercadoPago.',
    img: '/assets/projects/fake-ecommerce.webp',
    github: 'https://github.com/RubertG/ecommerce',
    href: 'https://fake-ecommerce-eta.vercel.app',
    tecnologies: [NEXTJS, TAILWIND, FIREBASE, FIGMA]
  },
  {
    title: 'TODO App',
    description: 'Planifica y prioriza tus actividades diarias. App con autenticación de usuarios y base de datos.',
    img: '/assets/projects/todo-app.webp',
    github: 'https://github.com/RubertG/todo-app',
    href: 'https://organiza-tareas-app.netlify.app/',
    tecnologies: [REACT, CSS, FIREBASE, FIGMA]
  },
  {
    title: 'KevinWeb',
    description: 'Portafolio/Blog con página privada para administrar los artículos: agregar, borrar y editar.',
    img: '/assets/projects/kevinweb.webp',
    href: 'https://kevinweb-kappa.vercel.app/',
    tecnologies: [NEXTJS, SASS, FIREBASE, FIGMA]
  },
  {
    title: 'Tres en raya - TS',
    description: 'Juego clásico de Tres en raya. Guarda tu partida en el localStorage. Animaciones hechas con FramerMotion.',
    img: '/assets/projects/tres-en-raya-ts.webp',
    github: 'https://github.com/RubertG/tres-en-raya-ts',
    href: 'https://tres-en-raya-ts.netlify.app/',
    tecnologies: [REACT, TYPESCRIPT, TAILWIND]
  }
]

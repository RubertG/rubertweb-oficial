import { type ProjectType } from '@/types/types'
import { CSS, FIGMA, FIREBASE, NEXTJS, REACT, SASS, TAILWIND, TYPESCRIPT } from './consts'
export const PROJECTS: ProjectType[] = [
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
  },
  {
    title: 'TODO React',
    description: 'TODO básico para administrar tus tareas. Diseño tomado de FrontendMentor. Guarda tus tareas en el localStorage.',
    img: '/assets/projects/todo.webp',
    github: 'https://github.com/RubertG/TODO-react',
    href: 'https://organiza-tareas.netlify.app/',
    tecnologies: [REACT, CSS]
  },
  {
    title: 'TODO - Prisma',
    description: 'TODO básico hecho con Prisma y la base de datos PostgreSQL para llevar las diferentes tareas.',
    img: '/assets/projects/todo-prisma.webp',
    github: 'https://github.com/RubertG/TODO-crud-prisma',
    href: 'https://crud-prisma-rubertg.vercel.app/',
    tecnologies: [NEXTJS, TYPESCRIPT, TAILWIND]
  },
  {
    title: 'Countries app',
    description: 'Web para buscar información relevantes de todos los paises del mundo. Ejercicio práctico de FrontendMentor.',
    img: '/assets/projects/country-app.webp',
    github: 'https://github.com/RubertG/countries-app',
    href: 'https://countries-app-smoky-chi.vercel.app/',
    tecnologies: [NEXTJS, TYPESCRIPT, TAILWIND]
  }
]

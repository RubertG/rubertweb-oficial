import { type ProjectType } from '@/types/types'
import { HTML, CSS, FIGMA, FIREBASE, NEXTJS, REACT, SASS, TAILWIND, TYPESCRIPT, JS } from './consts'
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
    description: 'Portafolio/Blog con página privada para administrar los articulos: agregar, borrar y editar.',
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
    title: 'Guessing game',
    description: 'Juego en el que se debe adivinar un número que se encuentra dentro de un rango específico dado por el usuario.',
    img: '/assets/projects/guessing-game.webp',
    github: 'https://github.com/RubertG/GuessingGame',
    href: 'https://rubertg.github.io/GuessingGame/',
    tecnologies: [HTML, CSS, JS]
  },
  {
    title: 'RubertWeb',
    description: 'Portafolio/Blog donde encuentras mi informacion y articulos interesantes sobre la programación web.',
    img: '/assets/projects/rubertweb.webp',
    href: 'https://rubertweb.dev',
    github: 'https://github.com/RubertG/rubertweb-oficial',
    tecnologies: [NEXTJS, SASS, TYPESCRIPT, FIGMA]
  },
  {
    title: 'Portafolio 1.0',
    description: 'Portafolio web 1.0. Habilidades, proyectos (Guardados en Firebase) y como contactarme.',
    img: '/assets/projects/portafolio-1.0.webp',
    href: 'https://rubertweb.netlify.app/',
    tecnologies: [REACT, CSS, FIREBASE, FIGMA]
  }
]

import { type ProjectType } from '@/types/types'
import { CSS, FIGMA, FIREBASE, NEXTJS, REACT, SASS, TAILWIND, TYPESCRIPT } from './consts'

export const projects: ProjectType[] = [
  {
    title: 'TODO App',
    description: 'Planifica y prioriza tus actividades diarias. App con autenticación de usuarios y base de datos.',
    img: 'https://www.rubertweb.dev/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fportafolio-web-c279e.appspot.com%2Fo%2Ftodo-app%252Ftodo-app-1.webp%3Falt%3Dmedia%26token%3D306faf37-4799-4490-8401-b3fb62efb62c&w=1080&q=75',
    github: 'https://github.com/RubertG/todo-app',
    href: 'https://organiza-tareas-app.netlify.app/',
    tecnologies: [REACT, CSS, FIREBASE, FIGMA]
  },
  {
    title: 'KevinWeb',
    description: 'Portafolio / Blog con página de administrador con login para agregar, borrar y editar los diferentes articulos.',
    img: 'https://firebasestorage.googleapis.com/v0/b/portafolio-web-c279e.appspot.com/o/kevinweb%2Fkevinweb.webp?alt=media&token=29dc1079-1a42-499d-87e7-d1585550e6b5',
    href: 'https://organiza-tareas-app.netlify.app/',
    tecnologies: [NEXTJS, REACT, SASS, FIREBASE, FIGMA]
  },
  {
    title: 'Tres en raya - TS',
    description: 'Juego clásico de Tres en raya. Guarda tu partida en el localStorage. Animaciones hechas con FramerMotion.',
    img: 'https://www.rubertweb.dev/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fportafolio-web-c279e.appspot.com%2Fo%2Ftres-en-raya-ts%252Ftres-en-raya-ts-1.webp%3Falt%3Dmedia%26token%3D205beee4-3c06-430f-a18b-72292fa253ae&w=1080&q=75',
    github: 'https://github.com/RubertG/tres-en-raya-ts',
    href: 'https://tres-en-raya-ts.netlify.app/',
    tecnologies: [REACT, TYPESCRIPT, TAILWIND]
  },
  {
    title: 'TODO React',
    description: 'TODO básico para administrar tus tareas. Diseño tomado de FrontendMentor. Guarda tus tareas en el localStorage.',
    img: 'https://www.rubertweb.dev/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fportafolio-web-c279e.appspot.com%2Fo%2Ftodo%252Ftodo-1.webp%3Falt%3Dmedia%26token%3Dce32b1db-4aef-4611-a117-ded82fda80d1&w=1080&q=75',
    github: 'https://github.com/RubertG/TODO-react',
    href: 'https://organiza-tareas.netlify.app/',
    tecnologies: [REACT, CSS]
  },
  {
    title: 'Portafolio / Blog',
    description: 'Portafolio / Blog personal con articulos sobre programación web.',
    img: 'https://firebasestorage.googleapis.com/v0/b/portafolio-web-c279e.appspot.com/o/rubertweb%2Frubertweb.webp?alt=media&token=76a589ab-642f-439b-a7d8-a9cd98424bfa',
    href: 'https://rubertweb.dev',
    github: 'https://github.com/RubertG/rubertweb-oficial',
    tecnologies: [NEXTJS, REACT, SASS, TYPESCRIPT, FIGMA]
  },
  {
    title: 'Portafolio 1.0',
    description: 'Portafolio web 1.0. Habilidades, proyectos (Guardados en Firebase) y como contactarme.',
    img: 'https://www.rubertweb.dev/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fportafolio-web-c279e.appspot.com%2Fo%2Fportafolio%252Fportafolio-1.webp%3Falt%3Dmedia%26token%3Dff5281e6-9970-497f-a983-6e2082b15e3c&w=1080&q=75',
    github: 'https://github.com/RubertG/todo-app',
    href: 'https://organiza-tareas-app.netlify.app/',
    tecnologies: [REACT, CSS, FIREBASE, FIGMA]
  }
]

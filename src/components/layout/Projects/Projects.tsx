/* eslint-disable @typescript-eslint/space-before-function-paren */
import { DivisionTwo } from '@/components/Icons/Icons'
import Styles from './Projects.module.scss'
import { PROJECTS } from '@/consts/projects'
import Project from '../Project/Project'

function Projects(): JSX.Element {
  return (
    <section className={Styles.container}>
      <DivisionTwo />
      <h2>Proyectos</h2>
      <ul className={Styles.container_projects}>
        {
          PROJECTS.map((project) => {
            return (
              <li key={project.title}>
                <Project {...project} />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Projects

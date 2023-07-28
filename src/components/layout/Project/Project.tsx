/* eslint-disable @typescript-eslint/space-before-function-paren */
import { type ProjectType } from '@/types/types'
import Styles from './Project.module.scss'
import Image from 'next/image'
import { GitHub, Planet } from '@/components/Icons/Icons'

function Project(
  { title, description, img, tecnologies, github, href }: ProjectType
): JSX.Element {
  return (
    <article className={Styles.card}>
      <div className={Styles.image}>
        <Image
          src={img}
          alt={`Proyecto ${title} hecho por Rubert Gonzalez, desarrollador web.`}
          width={640}
          height={400}
        />
      </div>
      <div className={Styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <footer className={Styles.footer}>
        <div className={Styles.footer__tecnologies}>
          {
            tecnologies.map(({ icon, name }) => {
              return <span title={name} key={name}>{icon}</span>
            })
          }
        </div>
        <div className={Styles.footer__links}>
          <a href={href} target='_blank' rel="noreferrer" title='Link a la página web'><Planet /></a>
          {
            github !== null && github !== undefined && (
              <a href={github} target='_blank' rel="noreferrer" title='Link al Github'><GitHub /></a>
            )
          }
        </div>
      </footer>
    </article >
  )
}

export default Project

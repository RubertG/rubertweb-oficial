/* eslint-disable @typescript-eslint/space-before-function-paren */
import { TECNOLOGIES } from '@/consts/consts'
import Styles from './AboutMe.module.scss'
import { DivisionOne } from '@/components/Icons/Icons'

const parseTecnologies = (): string => {
  let parseTecnologies = ''
  TECNOLOGIES.forEach((tecnology, index) => {
    if (index === 0) {
      parseTecnologies += tecnology.name
    } else if (index === TECNOLOGIES.length - 1) {
      parseTecnologies += ` y ${tecnology.name}`
    } else { parseTecnologies += `, ${tecnology.name}` }
  })
  return parseTecnologies
}

function AboutMe(): JSX.Element {
  return (
    <section className={Styles.container}>
      <div className={Styles.container_division}>
        <DivisionOne />
      </div>
      <h2>Sobre mí</h2>
      <main className={Styles.grid}>
        <div>
          <p>
            Soy un desarrollador web front-end apasionado por la programación en busca de nuevos desafíos. Me encanta aprender y crecer en el campo de la programación, manteniéndome actualizado sobre las últimas tendencias y mejores prácticas. Disfruto colaborar con otros profesionales y enfrentar desafíos creativos.
          </p>
          <p>
            Mis habilidades incluyen <strong>{parseTecnologies()}</strong>
          </p>
          <p>
            Si estás buscando un desarrollador front-end entusiasta y orientado a resultados, estaré encantado de formar parte de tu equipo.</p>
        </div>
        <div>
          <span></span>
        </div>
        <div className={Styles.skills}>
          <h3>Skills</h3>
          <div className={Styles.tecnologies}>
            {
              TECNOLOGIES.map(({ icon }) => {
                if (icon !== null) {
                  return icon
                }
                return null
              })
            }
          </div>
        </div>
      </main>
    </section>
  )
}

export default AboutMe

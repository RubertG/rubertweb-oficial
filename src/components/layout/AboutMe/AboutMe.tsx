/* eslint-disable @typescript-eslint/space-before-function-paren */
import { TECNOLOGIES } from '@/consts/consts'
import Styles from './AboutMe.module.scss'
import { DivisionOne } from '@/components/Icons/Division'
import { parseTecnologies } from '@/logic/parseTecnologies'

function AboutMe(): JSX.Element {
  return (
    <section className={Styles.container}>
      <DivisionOne />
      <h2>Sobre mí</h2>
      <main className={Styles.grid}>
        <div>
          <p>
            Soy un desarrollador web front-end apasionado por la programación en busca de nuevos desafíos. Me encanta aprender y crecer en el campo de la programación, manteniéndome actualizado sobre las últimas tendencias y mejores prácticas.
          </p>
          <p>
            Mis habilidades incluyen <strong>{parseTecnologies()}</strong>
          </p>
          <p>
            Si estás buscando un desarrollador front-end entusiasta y orientado a resultados, estaré encantado de formar parte de tu equipo.</p>
        </div>
        <div className={Styles.skills}>
          <h3>Skills</h3>
          <div className={Styles.tecnologies}>
            {
              TECNOLOGIES.map(({ name, icon }) => {
                return <div key={name} title={name}>{icon}</div>
              })
            }
          </div>
        </div>
      </main>
    </section>
  )
}

export default AboutMe

/* eslint-disable @typescript-eslint/space-before-function-paren */
import Header from '@/components/layout/Header/Header'
import Styles from './Home.module.scss'
import { DivisionOne } from '@/components/Icons/Icons'
import { TECNOLOGIES } from '@/consts/consts'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <section>
        <div className={Styles.container_division}>
          <DivisionOne />
        </div>
        <h2>Sobre mí</h2>
        <article>
          <div>
            <p>
              Soy un desarrollador web front-end apasionado por la programación en busca de nuevos desafíos. Me encanta aprender y crecer en el campo de la programación, manteniéndome actualizado sobre las últimas tendencias y mejores prácticas. Disfruto colaborar con otros profesionales y enfrentar desafíos creativos.
            </p>
            <p>
              Mis habilidades incluyen <strong>HTML, CSS, JavaScript, React, Sass, Boostrap, Firebase, Next.js y Figma.</strong>
            </p>
            <p>
              Si estás buscando un desarrollador front-end entusiasta y orientado a resultados, estaré encantado de formar parte de tu equipo.</p>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <h3>Skills</h3>
            <div>
              {
                TECNOLOGIES.map(({ icon }) => {
                  return icon
                })
              }
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Person } from '@/components/Icons/Icons'
import Styles from './page.module.scss'
import Button from '@/components/layout/Button/Button'

export default function Home(): JSX.Element {
  return (
    <header className={Styles.header}>
      <div className={Styles.content}>
        <h2>
          ¡Hola mundo!<br />
          Soy <span>Rubert Gonzalez</span>
        </h2>
        <p>Desarrollador web front-end. Hábil en el desarrollo de aplicaciones creativas con un diseño vanguardista. Si necesitas mis servicios estoy disponible para que me contactes.</p>
        <div className={Styles.buttons}>
          <Button href='#'>Contáctame</Button>
          <Button href='#'>Descargar CV</Button>
        </div>
      </div>
      <Person />
    </header>
  )
}

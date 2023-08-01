/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Person } from '@/components/Icons/Icons'
import Button from '../Button/Button'
import Styles from './Header.module.scss'

function Header(): JSX.Element {
  return (
    <header
      className={Styles.header}
    >
      <div className={Styles.content}>
        <h2>
          ¡Hola mundo!<br />
          <span className={Styles.container_typing}>
            Soy
            <ul>
              <li><span>Rubert Gonzalez</span></li>
              <li><span>Programador web</span></li>
            </ul>
          </span>
        </h2>
        <p>Desarrollador web front-end. Hábil en el desarrollo de aplicaciones creativas con un diseño vanguardista. Si necesitas mis servicios estoy disponible para que me contactes.</p>
        <div className={Styles.buttons}>
          <Button href='/contact'>Contáctame</Button>
          <Button href='assets/CV.pdf'>Descargar CV</Button>
        </div>
      </div>
      <Person />
    </header>
  )
}

export default Header

/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Button, ButtonDownload } from '../Button/Button'
import Styles from './Header.module.scss'
import Image from 'next/image'

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
          <ButtonDownload href='assets/CV_RUBERT_GONZALEZ.pdf'>Descargar CV</ButtonDownload>
        </div>
      </div>

      <picture>
        <Image
          src='/rubert_perfil.webp'
          alt='Rubert Gonzalez - Desarrollador web front-end'
          width={400}
          height={400}
        />
      </picture>
    </header>
  )
}

export default Header

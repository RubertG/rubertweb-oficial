/* eslint-disable @typescript-eslint/space-before-function-paren */
import { SOCIAL_LINKS } from '@/consts/consts'
import { parseTecnologies } from '@/logic/parseTecnologies'
import Styles from './Contact.module.scss'

function ContactPage(): JSX.Element {
  return (
    <main
      className={Styles.container}>
      <h2>Contáctame</h2>
      <p>
        ¡Mucho gusto! Soy Rubert Gonzalez, un desarrollador front-end con experiencia en <strong>{parseTecnologies()}</strong> Si necesitas ayuda con tus proyectos web, no dudes en contactarme.
      </p>
      <section
        className={Styles.container_links}
      >
        {
          SOCIAL_LINKS.map(({ href, icon, name }, index) => {
            return (
              <a
                key={name}
                href={href}
                title={name}
                style={{
                  animationDelay: `${index * 0.08}s`
                }}
                target='_blank'
                rel='noopener noreferrer'
              >
                {icon}
              </a>
            )
          })
        }
      </section>
    </main>
  )
}

export default ContactPage

/* eslint-disable @typescript-eslint/space-before-function-paren */
import { SOCIAL_LINKS } from '@/consts/consts'
import Styles from './Footer.module.scss'

function Footer(): JSX.Element {
  return (
    <footer className={Styles.footer}>
      {
        SOCIAL_LINKS.map(({ href, name }) => {
          return (
            <a key={name} target='_blank' href={href} rel="noreferrer">{name}</a>
          )
        })
      }
    </footer>
  )
}

export default Footer

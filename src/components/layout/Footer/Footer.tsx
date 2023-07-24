/* eslint-disable @typescript-eslint/space-before-function-paren */
import Styles from './Footer.module.scss'

function Footer(): JSX.Element {
  return (
    <footer className={Styles.footer}>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
      <a href="#">Mail</a>
      <a href="#">GitHub</a>
      <a href="#">Linkedin</a>
      <a href="#">Threads</a>
    </footer>
  )
}

export default Footer

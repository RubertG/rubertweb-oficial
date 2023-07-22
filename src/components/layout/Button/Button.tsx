/* eslint-disable @typescript-eslint/space-before-function-paren */
import Styles from './Button.module.scss'

interface Props {
  href: string
  children: React.ReactNode
}

function Button({ href, children }: Props): JSX.Element {
  return (
    <a href={href} className={Styles.button}>{children}</a>
  )
}

export default Button

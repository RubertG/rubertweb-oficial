/* eslint-disable @typescript-eslint/space-before-function-paren */
import Link from 'next/link'
// import Styles from './Button.module.scss'

interface Props {
  href: string
  children: React.ReactNode
}

function Button({ href, children }: Props): JSX.Element {
  return (
    <Link href={href} >{children}</Link>
  )
}

export default Button

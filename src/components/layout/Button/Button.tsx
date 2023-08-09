/* eslint-disable @typescript-eslint/space-before-function-paren */
import Link from 'next/link'
import Styles from './Button.module.scss'

interface Props {
  href: string
  children: React.ReactNode
}

export function Button({ href, children }: Props): JSX.Element {
  return (
    <Link href={href} className={Styles.button}>{children}</Link>
  )
}

export function ButtonDownload({ href, children }: Props): JSX.Element {
  return (
    <a href={href} className={Styles.button} target='_blank' rel="noreferrer">{children}</a>
  )
}

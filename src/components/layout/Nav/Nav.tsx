/* eslint-disable @typescript-eslint/space-before-function-paren */
'use client'
import { type LinkNav } from '@/types/types'
import Link from 'next/link'
import Styles from './Nav.module.scss'
import { useState } from 'react'
import Arrow from '@/components/Icons/Icons'
import { usePathname } from 'next/navigation'

interface Props {
  items: LinkNav[]
}

function Nav({ items }: Props): JSX.Element {
  const [toggler, setToggler] = useState(false)
  const pathname = usePathname()

  const handleClick = (): void => {
    setToggler(!toggler)
  }

  return (
    <nav >
      <button
        className={`${Styles.toggler} ${toggler ? Styles.active : ''}`}
        onClick={handleClick}
      >
        <span></span><span></span><span></span>
      </button>
      <nav className={`${Styles.nav} ${toggler ? Styles.active : ''}`}>
        <h1>RubertWeb</h1>
        <ul>
          {
            items.map(({ literal, href }) => {
              let isActive = false
              if (href !== '/') {
                isActive = pathname.includes(href)
              } else {
                isActive = href === pathname
              }
              return (
                <li key={literal} className={`${isActive ? Styles.active : ''}`}>
                  <Link
                    href={href}
                    onClick={handleClick}
                  >
                    {literal}
                    <Arrow />
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </nav>
  )
}

export default Nav

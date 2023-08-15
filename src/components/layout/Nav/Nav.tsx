/* eslint-disable @typescript-eslint/space-before-function-paren */
'use client'
import { type LinkNav } from '@/types/types'
import Link from 'next/link'
import Styles from './Nav.module.scss'
import { useEffect, useRef, useState } from 'react'
import { Arrow } from '@/components/Icons/Icons'
import { usePathname } from 'next/navigation'
import { useHoverAnimation } from '@/hooks/useHoverAnimation'

interface Props {
  items: LinkNav[]
}

function Nav({ items }: Props): JSX.Element {
  const pathname = usePathname()
  const { hoverLiRef, liRefs } = useHoverAnimation()
  const [toggler, setToggler] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window !== undefined) {
      const navAnimationScroll = (): void => {
        if (window.scrollY > 0) {
          navRef.current?.classList.add(Styles.scroll)
        } else {
          navRef.current?.classList.remove(Styles.scroll)
        }
      }
      window.addEventListener('scroll', navAnimationScroll)
      return () => {
        window.removeEventListener('scroll', navAnimationScroll)
      }
    }
  }, [])

  const handleClick = (): void => {
    setToggler(!toggler)
  }

  return (
    <nav className={Styles.nav_container}>
      <button
        className={`${Styles.toggler} ${toggler ? Styles.active : ''}`}
        onClick={handleClick}
        title='Menú'
      >
        <span></span><span></span><span></span>
      </button>
      <nav
        ref={navRef}
        className={`${Styles.nav} ${toggler ? Styles.active : ''}`}>
        <Link
          href="/"
          onClick={() => { setToggler(false) }}
          className={Styles.brand}>
          RubertWeb
        </Link>
        <ul>
          <li
            className={Styles.hover_div}
            id='hover_div'
            ref={hoverLiRef}>
          </li>
          {
            items.map(({ literal, href }) => {
              let isActive = false
              if (href !== '/') {
                isActive = pathname.includes(href)
              } else {
                isActive = href === pathname
              }
              return (
                <li
                  key={literal}
                  className={`${isActive ? Styles.active : ''}`}
                  ref={li => liRefs.current?.push(li)}>
                  <Link
                    href={href}
                    onClick={() => { setToggler(false) }}
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

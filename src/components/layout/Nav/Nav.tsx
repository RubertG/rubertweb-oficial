/* eslint-disable @typescript-eslint/space-before-function-paren */
'use client'
import { type LinkNav } from '@/types/types'
import Link from 'next/link'
import Styles from './Nav.module.scss'
import { useEffect, useRef, useState } from 'react'
import { Arrow } from '@/components/Icons/Icons'
import { usePathname } from 'next/navigation'

interface Props {
  items: LinkNav[]
}

function Nav({ items }: Props): JSX.Element {
  const pathname = usePathname()
  const [toggler, setToggler] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const liRefs = useRef<Array<HTMLLIElement | null>>([])
  const hoverDiv = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (window !== undefined) {
      const lis: Array<HTMLLIElement | null> = liRefs.current
      hoverAnimation(lis[0] as HTMLLIElement)

      const mouseEnterHandler = (item: HTMLLIElement): void => {
        hoverAnimation(item)
        if (hoverDiv.current !== null) hoverDiv.current.style.opacity = '1'
      }

      const mouseLeaveHandler = (): void => {
        if (hoverDiv.current !== null) hoverDiv.current.style.opacity = '0'
      }

      lis.forEach((item) => {
        item?.addEventListener('mouseenter', () => { mouseEnterHandler(item) })
        item?.addEventListener('mouseleave', mouseLeaveHandler)
      })
      return () => {
        lis.forEach((item) => {
          item?.removeEventListener('mouseenter', () => { mouseEnterHandler(item) })
          item?.removeEventListener('mouseleave', mouseLeaveHandler)
        })
      }
    }
  }, [])

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

  const hoverAnimation = (item: HTMLLIElement): void => {
    const { top, left, width, height } = item.getBoundingClientRect()

    if (hoverDiv.current !== null) {
      hoverDiv.current.style.setProperty('--top', `${top}px`)
      hoverDiv.current.style.setProperty('--left', `${left}px`)
      hoverDiv.current.style.setProperty('--width', `${width}px`)
      hoverDiv.current.style.setProperty('--height', `${height}px`)
    }
  }

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
          <img src='/favicon.svg' alt='RubertWeb icon' loading='lazy' />
          RubertWeb
        </Link>
        <ul>
          <li
            className={Styles.hover_div}
            id='hover_div'
            ref={hoverDiv}>
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

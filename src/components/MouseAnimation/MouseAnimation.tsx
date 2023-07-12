/* eslint-disable @typescript-eslint/space-before-function-paren */
'use client'
import { useEffect } from 'react'
import Styles from './MouseAnimation.module.scss'

function MouseAnimation(): JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mouse = document.querySelector('#mouseAnimation') as HTMLElement
      const mouseMove = (e: MouseEvent): void => {
        setTimeout(() => {
          mouse.style.top = `${e.clientY}px`
          mouse.style.left = `${e.clientX}px`
        }, 100)
      }
      window.addEventListener('mousemove', mouseMove)
      return () => { window.removeEventListener('mousemove', mouseMove) }
    }
  }, [])

  return (
    <span
      id="mouseAnimation"
      className={Styles.mouseAnimation}></span>
  )
}

export default MouseAnimation

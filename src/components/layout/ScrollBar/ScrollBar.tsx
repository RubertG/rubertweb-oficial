'use client'
import { useEffect, useRef } from 'react'
import Styles from './ScrollBar.module.scss'

function ScrollBar (): JSX.Element {
  const progressBarRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (document != null) {
      const scrollBarAnimation = (): void => {
        const heightPage = document.body.clientHeight - window.innerHeight
        const scroll = window.scrollY
        const progress = Math.floor((scroll / heightPage) * 100)
        if (progressBarRef.current != null) {
          progressBarRef.current.style.width = `${progress}%`
        }
      }
      document.addEventListener('scroll', scrollBarAnimation)
      return () => {
        document.removeEventListener('scroll', scrollBarAnimation)
      }
    }
  }, [])

  return (
    <span className={Styles.progressBar} ref={progressBarRef} />
  )
}

export default ScrollBar

import type React from 'react'
import { useEffect, useRef } from 'react'

interface Return {
  liRefs: React.MutableRefObject<Array<HTMLLIElement | null>>
  hoverLiRef: React.MutableRefObject<HTMLLIElement | null>
}

export function useHoverAnimation (): Return {
  const liRefs = useRef<Array<HTMLLIElement | null>>([])
  const hoverLiRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (window !== undefined) {
      const lis: Array<HTMLLIElement | null> = liRefs.current
      hoverAnimation(lis[0] as HTMLLIElement)

      const mouseEnterHandler = (item: HTMLLIElement): void => {
        hoverAnimation(item)
        if (hoverLiRef.current !== null) hoverLiRef.current.style.opacity = '1'
      }

      const mouseLeaveHandler = (): void => {
        if (hoverLiRef.current !== null) hoverLiRef.current.style.opacity = '0'
      }

      lis.forEach((item) => {
        item?.addEventListener('mouseenter', () => { mouseEnterHandler(item) })
        item?.addEventListener('mouseleave', mouseLeaveHandler)
        item?.addEventListener('click', () => { mouseLeaveHandler() })
      })
      return () => {
        lis.forEach((item) => {
          item?.removeEventListener('mouseenter', () => { mouseEnterHandler(item) })
          item?.removeEventListener('mouseleave', mouseLeaveHandler)
          item?.addEventListener('click', () => { mouseLeaveHandler() })
        })
      }
    }
  }, [])

  const hoverAnimation = (item: HTMLLIElement): void => {
    const { top, left, width, height } = item.getBoundingClientRect()

    if (hoverLiRef.current !== null) {
      hoverLiRef.current.style.setProperty('--top', `${top}px`)
      hoverLiRef.current.style.setProperty('--left', `${left}px`)
      hoverLiRef.current.style.setProperty('--width', `${width}px`)
      hoverLiRef.current.style.setProperty('--height', `${height}px`)
    }
  }

  return {
    liRefs,
    hoverLiRef
  }
}

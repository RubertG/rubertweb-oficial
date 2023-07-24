/* eslint-disable @typescript-eslint/space-before-function-paren */
import './globals.scss'
import { type Metadata } from 'next'
import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import Nav from '@/components/layout/Nav/Nav'
import { type LinkNav } from '@/types/types'

const authors: Author = {
  name: 'Rubert Gonzalez',
  url: 'https://rubertweb.dev'
}

export const metadata: Metadata = {
  title: 'RubertWeb - Página oficial del desarrollador web Rubert Gonzalez',
  description: 'Página oficial del desarrollador web Rubert Gonzalez. Portafolio web, blog personal y forma para contactarme y obtener mis servicios.',
  authors
}

const itemsNav: LinkNav[] = [
  { literal: 'Portafolio', href: '/' },
  { literal: 'Blog', href: '/blog' },
  { literal: 'Contacto', href: '/contact' }
]

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es" >
      <body>
        <Nav items={itemsNav} />
        {children}
      </body>
    </html >
  )
}

/* eslint-disable @typescript-eslint/space-before-function-paren */
import './globals.scss'
import { type Metadata } from 'next'
import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import Nav from '@/components/layout/Nav/Nav'
import { type LinkNav } from '@/types/types'
import Footer from '@/components/layout/Footer/Footer'

const authors: Author = {
  name: 'Rubert Gonzalez',
  url: 'https://rubertweb.dev'
}

export const metadata: Metadata = {
  title: 'RubertWeb - Página oficial de Rubert Gonzalez, Desarrollador web.',
  description: 'Desarrollador web front-end apasionado por la programación en busca de nuevos desafíos, si requieres de mis servicios contáctame.',
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
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body style={{ scrollbarGutter: 'stable' }}>
        <Nav items={itemsNav} />
        {children}
        <Footer />
      </body>
    </html >
  )
}

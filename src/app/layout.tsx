/* eslint-disable @typescript-eslint/space-before-function-paren */
import MouseAnimation from '@/components/MouseAnimation/MouseAnimation'
import './globals.scss'
import { type Metadata } from 'next'
import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { Prompt } from 'next/font/google'

export const prompt = Prompt({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal'
})

const authors: Author = {
  name: 'Rubert Gonzalez',
  url: 'https://rubertweb.dev'
}

export const metadata: Metadata = {
  title: 'rubertweb - Página oficial del desarrollador web Rubert Gonzalez',
  description: 'Página oficial del desarrollador web Rubert Gonzalez. Portafolio web, blog personal y forma para contactarme y obtener mis servicios.',
  authors
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es" >
      <body className={prompt.className}>
        <MouseAnimation />
        {children}
      </body>
    </html >
  )
}

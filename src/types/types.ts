import { type TECNOLOGIES } from '@/consts/consts'

export interface TecnologyType {
  name: string
  icon: JSX.Element | null
}

export interface LinkNav {
  literal: string
  href: string
}

export type TecnologiesType = keyof typeof TECNOLOGIES

export interface TecnologyType {
  name: string
  icon: JSX.Element | null
}

export interface SocialLink {
  name: string
  href: string
  icon: JSX.Element
}

export interface LinkNav {
  literal: string
  href: string
}

export interface ProjectType {
  title: string
  description: string
  img: string
  github?: string
  href: string
  tecnologies: TecnologyType[]
}

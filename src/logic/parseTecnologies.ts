import { TECNOLOGIES } from '@/consts/consts'

export const parseTecnologies = (): string => {
  let parseTecnologies = ''
  TECNOLOGIES.forEach((tecnology, index) => {
    if (index === 0) {
      parseTecnologies += tecnology.name
    } else if (index === TECNOLOGIES.length - 1) {
      parseTecnologies += ` y ${tecnology.name}.`
    } else { parseTecnologies += `, ${tecnology.name}` }
  })
  return parseTecnologies
}

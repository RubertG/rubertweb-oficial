/* eslint-disable @typescript-eslint/space-before-function-paren */
import { TOTAL_TECNOLOGIES } from '@/consts/consts'
import { type TecnologyType } from '@/types/types'
import { type Post as PostType } from 'contentlayer/generated'
import Link from 'next/link'

interface Props {
  post: PostType
}

const getIcon = (target: string): TecnologyType | undefined => {
  target = target.split('\r').join('').toLocaleLowerCase()
  const tecnologie = TOTAL_TECNOLOGIES.find(
    tecnologie => tecnologie.name.toLocaleLowerCase().includes(target)
  )
  return tecnologie
}

function Post({ post: { url, title, date, target } }: Props): JSX.Element {
  const tecnologie = getIcon(target)

  if (tecnologie == null) {
    throw new Error('Tecnologie not found')
  }

  return (
    <article>
      <div title={tecnologie.name}>
        {tecnologie.icon}
      </div>
      <div>
        <h3>
          <Link href={url}>{title}</Link>
        </h3>
        <time>
          {new Date(date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </article>
  )
}

export default Post

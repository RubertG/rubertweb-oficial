/* eslint-disable @typescript-eslint/space-before-function-paren */
import { TOTAL_TECNOLOGIES } from '@/consts/consts'
import { type TecnologyType } from '@/types/types'
import { type Post as PostType } from 'contentlayer/generated'
import Link from 'next/link'
import Styles from './Post.module.scss'

const getIcon = (target: string): TecnologyType | undefined => {
  target = target.split('\r').join('').toLocaleLowerCase()
  const tecnologie = TOTAL_TECNOLOGIES.find(
    tecnologie => tecnologie.name.toLocaleLowerCase().includes(target)
  )
  return tecnologie
}

interface Props {
  post: PostType
  delay?: number
}

function Post({ post: { url, title, date, target }, delay }: Props): JSX.Element {
  const tecnologie = getIcon(target)

  if (tecnologie == null) {
    throw new Error('Tecnologie not found')
  }

  return (
    <article>
      <Link
        href={url}
        className={Styles.post}
        style={{ animationDelay: `${(delay != null) ? delay : 0}s` }}>
        <div
          title={tecnologie.name}
          className={Styles.icon}>
          {tecnologie.icon}
        </div>
        <div className={Styles.content}>
          <h3>
            {title}
          </h3>
          <footer>
            <time>
              {new Date(date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </footer>
        </div>
      </Link>
    </article>
  )
}

export default Post

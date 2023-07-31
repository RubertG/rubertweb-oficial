import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

interface StaticParams {
  slug: string
}

// para generar los parametros estaticos
export const generateStaticParams = (): StaticParams[] => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath
  }))
}

interface Props {
  params: {
    slug: string
  }
}

interface Metadata {
  title: string | undefined
  description: string | undefined
}

// para acomdar la metadata de cada post
export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  return {
    title: (post != null) ? `${post?.title} - Rubert Gonzalez` : 'Page not fount',
    description: post?.description
  }
}

const PostLayout = ({ params }: Props): JSX.Element => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)

  let MDXContent
  if (post == null) {
    notFound()
  } else {
    MDXContent = getMDXComponent(post.body.code)
  }

  return (
    <section>
      <h2>{post.title}</h2>
      <time>
        {new Date(post.date).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </time>
      <article>
        <MDXContent />
      </article>
    </section>
  )
}
export default PostLayout

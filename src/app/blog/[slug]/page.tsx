import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Styles from './Article.module.scss'
import { PostHeader } from '@/components/layout/Post/Post'

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
    <section className={Styles.container}>
      <PostHeader post={post} />
      <article>
        <MDXContent />
      </article>
    </section>
  )
}
export default PostLayout

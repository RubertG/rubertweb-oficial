/* eslint-disable @typescript-eslint/space-before-function-paren */
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date))

const page = (): JSX.Element => {
  return (
    <div>
      <h2>Posts</h2>
      <section>
        {posts.map((post) => (
          <article key={post._raw.flattenedPath}>
            <h2>
              <Link href={post.url}>{post.title}</Link>
            </h2>
            <time>
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </article>
        ))}
      </section>
    </div>
  )
}
export default page

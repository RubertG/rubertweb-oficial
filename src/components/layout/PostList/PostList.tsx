/* eslint-disable @typescript-eslint/space-before-function-paren */
'use client'
import { compareDesc } from 'date-fns'
import { allPosts, type Post as PostType } from 'contentlayer/generated'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Post } from '@/components/layout/Post/Post'
import Pagination from '../Pagination/Pagination'

const sortedPost: PostType[] = allPosts.sort((a: PostType, b: PostType) =>
  compareDesc(new Date(a.date), new Date(b.date))
)

const totalPosts = sortedPost.length
const postsPerPage = 5
const totalPages = Math.ceil(totalPosts / postsPerPage)

function PostsList(): JSX.Element {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const router = useRouter()

  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    if (page != null) {
      if (parseInt(page) > totalPages) {
        router.push('/blog')
        return
      }
      const start = (parseInt(page) - 1) * postsPerPage
      const end = start + postsPerPage
      setPosts(sortedPost.slice(start, end))
    } else {
      setPosts(sortedPost.slice(0, postsPerPage))
    }
  }, [page])

  return (
    <>
      {
        posts.map((post, i) => (
          <Post
            key={post._raw.flattenedPath}
            post={post}
            delay={i * 0.1}
          />
        ))
      }
      <Pagination
        totalPages={totalPages}
        currentPage={(page != null) ? parseInt(page) : 1}
      />
    </>
  )
}
export default PostsList

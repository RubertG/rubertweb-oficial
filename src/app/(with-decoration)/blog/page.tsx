/* eslint-disable @typescript-eslint/space-before-function-paren */
import PostList from '@/components/layout/PostList/PostList'
import Styles from './Blog.module.scss'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Sitio oficial de Rubert Gonzalez, Desarrollador web',
  description: 'Blog con artículos interesantes de diferentes temas de la programación web',
  creator: 'Rubert Gonzalez',
  keywords: 'blog, web, desarrollo web, desarrollador web, programación, javascript, typescript, react, tailwind, sass, html, css, next'
}

const Blog = (): JSX.Element => {
  return (
    <main className={Styles.container}>
      <h2 className={Styles.title}>Artículos</h2>
      <section className={Styles.posts}>
        <PostList />
      </section>
    </main>
  )
}
export default Blog

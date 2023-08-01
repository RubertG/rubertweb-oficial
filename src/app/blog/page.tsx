/* eslint-disable @typescript-eslint/space-before-function-paren */
import PostList from '@/components/layout/PostList/PostList'
import Styles from './Blog.module.scss'

const page = (): JSX.Element => {
  return (
    <main className={Styles.container}>
      <h2 className={Styles.title}>Artículos</h2>
      <section className={Styles.posts}>
        <PostList />
      </section>
    </main>
  )
}
export default page

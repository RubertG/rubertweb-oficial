/* eslint-disable @typescript-eslint/space-before-function-paren */
import AboutMe from '@/components/layout/AboutMe/AboutMe'
import Header from '@/components/layout/Header/Header'
import Projects from '@/components/layout/Projects/Projects'
import Styles from './Home.module.scss'

export default function Home(): JSX.Element {
  return (
    <div className={Styles.container_animation}>
      <Header />
      <AboutMe />
      <Projects />
    </div>
  )
}

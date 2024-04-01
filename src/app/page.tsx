/* eslint-disable @typescript-eslint/space-before-function-paren */
import AboutMe from '@/components/layout/AboutMe/AboutMe'
import Header from '@/components/layout/Header/Header'
import Projects from '@/components/layout/Projects/Projects'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Projects />
      <AboutMe />
    </>
  )
}

/* eslint-disable @typescript-eslint/space-before-function-paren */
import { DivisionOne } from '@/components/Icons/Icons'
import Header from '@/components/layout/Header/Header'
import Styles from './Home.module.scss'

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <div className={Styles.container_division}>
        <DivisionOne />
      </div>
    </>
  )
}

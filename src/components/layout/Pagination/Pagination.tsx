/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import Link from 'next/link'
import Styles from './Pagination.module.scss'
import { Arrow } from '@/components/Icons/Icons'

interface Props {
  totalPages: number
  currentPage?: number
}

function Pagination({ totalPages, currentPage = 1 }: Props): JSX.Element {
  return (
    <div className={Styles.container}>
      {
        currentPage !== 1
          ? (
            <Link
              href={{
                pathname: '/blog',
                query: { page: currentPage - 1 }
              }}
              className={`${Styles.button} ${Styles.previous_button}`}
            >
              <Arrow /> Anterior
            </Link>
          )
          : (
            <button
              disabled
              className={`${Styles.button} ${Styles.button_disable} ${Styles.previous_button}`}
            >
              <Arrow /> Anterior
            </button>
          )
      }
      {
        currentPage !== totalPages
          ? (
            <Link
              href={{
                pathname: '/blog',
                query: { page: currentPage + 1 }
              }}
              className={Styles.button}
            >
              Siguiente <Arrow />
            </Link>
          )
          : (
            <button
              disabled
              className={`${Styles.button} ${Styles.button_disable}`}
            >
              Siguiente <Arrow />
            </button>
          )
      }
    </div>
  )
}
export default Pagination

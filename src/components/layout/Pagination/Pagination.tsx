/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import Link from 'next/link'

interface Props {
  totalPages: number
  currentPage?: number
}

function Pagination({ totalPages, currentPage = 1 }: Props): JSX.Element {
  return (
    <div className="flex gap-6">
      {
        currentPage === 1
          ? (
            <button
              disabled
              className="cursor-not-allowed"
            >
              Prev
            </button>
          )
          : (
            <Link
              href={{
                pathname: '/blog',
                query: { page: currentPage - 1 }
              }}
            >
              Prev
            </Link>
          )
      }
      {
        currentPage === totalPages
          ? (
            <button
              disabled
              className="cursor-not-allowed"
            >
              Next
            </button>
          )
          : (
            <Link
              href={{
                pathname: '/blog',
                query: { page: currentPage + 1 }
              }}
            >
              Next
            </Link>
          )
      }
    </div>
  )
}
export default Pagination

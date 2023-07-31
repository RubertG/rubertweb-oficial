import Button from '@/components/layout/Button/Button'

/* eslint-disable @typescript-eslint/space-before-function-paren */
function NotFount(): JSX.Element {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Button href='/'>
        Página principal
      </Button>
    </section>
  )
}

export default NotFount

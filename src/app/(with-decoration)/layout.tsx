import Styles from './Layout.module.scss'

interface Props {
  children: JSX.Element
}

function LayoutBlog ({ children }: Props): JSX.Element {
  return (
    <>
      <div className={Styles.decoration}></div>
      {children}
    </>
  )
}

export default LayoutBlog

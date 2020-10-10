import React, { ReactNode } from "react"
import styles from "./Layout.module.scss"
import SEO from "./SEO"

type Props = {
  title: string
  description?: string
  socialImage?: string
  children?: ReactNode
}

const Layout = ({ children, title, description, socialImage }: Props) => {

  return (
    <div className={styles.layout}>
      <SEO title={title} description={description} socialImage={socialImage} />
      {children}
    </div>
  )
}

export default Layout

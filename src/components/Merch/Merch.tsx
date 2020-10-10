import React from "react"
import styles from "./Merch.module.scss"
import { MarkdownRemark } from "../../types"
import Img from "gatsby-image"
import { Link } from "gatsby"

type Props = {
  merch: MarkdownRemark
}

const Merch = ({ merch }: Props) => (
  <div className={styles["merch"]}>
    <h1 className={styles["merch__title"]}>{merch.frontmatter.title}</h1>
    <Img fluid={merch.frontmatter.image.childImageSharp.fluid} />
    <div className={styles["merch__price"]}>
      Price: $ {merch.frontmatter.price}
    </div>
    <div className={styles["merch__body"]} dangerouslySetInnerHTML={{ __html: merch.html }} />
    <Link to="#"
      className={`snipcart-add-item  ${styles["merch__buy-button"]}`}
      data-item-id={merch.fields.slug}
      data-item-price={merch.frontmatter.price}
      data-item-url={merch.fields.slug}
      data-item-image={merch.frontmatter.image.childImageSharp.fluid.src}
      data-item-name={merch.frontmatter.title}
    >
      BUY NOW
    </Link>
  </div>
)

export default Merch

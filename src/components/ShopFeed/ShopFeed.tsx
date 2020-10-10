import React from "react"
import { Link } from "gatsby"
import type { Edges } from "../../types"
import styles from "./ShopFeed.module.scss"
import Img from "gatsby-image"

type Props = {
  edges: Edges
}

const ShopFeed = ({ edges }: Props) => (
  <div className={styles["feed"]}>
    {edges.map(edge => (
      <div className={styles["feed__item"]} key={edge.node.fields.slug}>
        <Link className={styles["feed__item-link"]} to={edge.node.fields.slug}>
          <Img fixed={edge.node.frontmatter.image.childImageSharp.fixed} />
          <h2 className={styles["feed__item-link-title"]}>
            {edge.node.frontmatter.title}
          </h2>
        </Link>
        <Link to="#"
          className={`snipcart-add-item ${styles["feed__item-buy-button"]}`}
          data-item-id={edge.node.fields.slug}
          data-item-price={edge.node.frontmatter.price}
          data-item-url={edge.node.fields.slug}
          data-item-image={edge.node.frontmatter.image.childImageSharp.fixed.src}
          data-item-name={edge.node.frontmatter.title}
        >
          BUY NOW
        </Link>
      </div>
    ))}
  </div>
)

export default ShopFeed

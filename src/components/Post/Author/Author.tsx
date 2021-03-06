import React from "react"
import styles from "./Author.module.scss"
import { useSiteMetadata } from "../../../hooks"

const Author = () => {
  const { author } = useSiteMetadata()

  return (
    <div className={styles["author"]}>
      <p className={styles["author__bio"]}>
        <a
          className={styles["author__bio-twitter"]}
          href={`https://www.twitter.com/${author.contacts.twitter}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>@{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  )
}

export default Author

import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import { useSiteMetadata } from "../../../hooks"

type Props = {
  postTitle: string
  postSlug: string
}

const Comments = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortName } = useSiteMetadata()

  if (!disqusShortName) {
    return null
  }

  return (
    <ReactDisqusComments
      shortname={disqusShortName}
      identifier={postTitle}
      title={postTitle}
      url={url + postSlug}
    />
  )
}

export default Comments

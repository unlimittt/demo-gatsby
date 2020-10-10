import React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../../../hooks"
import { withPrefix } from "gatsby"

type Props = {
  title: string
  description?: string
  lang?: string
  meta?: []
  socialImage?: string
}

function SEO({
  title,
  description,
  lang = "en",
  meta = [],
  socialImage,
}: Props) {
  const siteMetadata = useSiteMetadata()

  const metaImage =
    socialImage != null ? socialImage : siteMetadata.author.photo
  const metaImageUrl = siteMetadata.url + withPrefix(metaImage)
  const metaDescription = description || siteMetadata.subtitle

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:image`,
          content: metaImageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author.contacts.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImageUrl,
        },
      ].concat(meta)}
    />
  )
}

export default SEO

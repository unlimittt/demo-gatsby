import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Merch from "../components/Merch"
import { useSiteMetadata } from "../hooks"
import type { MarkdownRemark } from "../types"
import Sidebar from "../components/Sidebar"
import Page from "../components/Page"

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const MerchTemplate = ({ data }: Props) => {
  const { subtitle: siteSubtitle } = useSiteMetadata()
  const { frontmatter } = data.markdownRemark
  const {
    title: merchTitle,
    description: merchDescription,
    socialImage,
  } = frontmatter
  const metaDescription =
    merchDescription !== null ? merchDescription : siteSubtitle

  return (
    <Layout
      title={merchTitle}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Sidebar />
      <Page>
        <Merch merch={data.markdownRemark} />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query MerchBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        price
      }
    }
  }
`

export default MerchTemplate

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import ShopFeed from "../components/ShopFeed"
import Page from "../components/Page"
import { useSiteMetadata } from "../hooks"
import type { AllMarkdownRemark } from "../types"

type Props = {
  data: AllMarkdownRemark
}

const ShopTemplate = ({ data }: Props) => {
  const { subtitle: siteSubtitle } = useSiteMetadata()

  const { edges } = data.allMarkdownRemark

  return (
    <Layout title="Shop" description={siteSubtitle}>
      <Sidebar />
      <Page title={"SHOP FOR OUR MERCHANDISE"}>
        <ShopFeed edges={edges} />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query ShopTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "merch" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
                childImageSharp {
                    fixed(width: 200, height: 184) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            price
          }
        }
      }
    }
  }
`

export default ShopTemplate

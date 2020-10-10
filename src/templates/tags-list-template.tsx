import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import Page from "../components/Page"
import { useSiteMetadata, useTagsList } from "../hooks"

const TagsListTemplate = () => {
  const { subtitle } = useSiteMetadata()
  const tags = useTagsList()
  const title = "Tags"

  return (
    <Layout title={title} description={subtitle}>
      <Sidebar />
      <Page title={title}>
        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  )
}

export default TagsListTemplate

import React from "react"
import Sidebar from "../components/Sidebar"
import Layout from "../components/Layout"
import Page from "../components/Page"
import { useSiteMetadata } from "../hooks"

const NotFoundTemplate = () => {
  const { subtitle } = useSiteMetadata()
  const title = "Not Found"

  return (
    <Layout title={title} description={subtitle}>
      <Sidebar />
      <Page title={title.toUpperCase()}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate

import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import { useSiteMetadata } from "../hooks"
import Sidebar from "../components/Sidebar"
import Page from "../components/Page"

const ContactTemplate = () => {
  const { author} = useSiteMetadata()

  return (
    <Layout
      title={"Contact me"}
      description={"Contacting me form"}
      socialImage={author.photo}
    >
      <Sidebar />
      <Page title="Contact me">
        <ContactForm />
      </Page>

    </Layout>
  )
}

export default ContactTemplate

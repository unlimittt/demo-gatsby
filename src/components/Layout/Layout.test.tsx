import React from "react"
import siteMetadata from "../../../jest/__fixtures__/site-metadata"
import Layout from "./Layout"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Layout", () => {
  const props = {
    ...siteMetadata,
    description: "test",
    title: "test",
    children: "test",
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

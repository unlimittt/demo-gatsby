import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ShopFeed from "./ShopFeed"
import allMarkdownRemark from "../../../jest/__fixtures__/shop-all-markdown-remark"

Enzyme.configure({ adapter: new Adapter() })

describe("ShopFeed", () => {
  const props = {
    edges: allMarkdownRemark.allMarkdownRemark.edges
  }

  it("renders correctly", () => {
    const wrapper = shallow(<ShopFeed {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

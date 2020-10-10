import React from "react"
import Content from "./Content"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Content", () => {
  it("renders correctly", () => {
    const props = {
      title: "test",
      body: "<p>test</p>",
    }

    const wrapper = shallow(<Content {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

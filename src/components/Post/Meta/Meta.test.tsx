import React from "react"
import Meta from "./Meta"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Meta", () => {
  it("renders correctly", () => {
    const props = {
      date: "2016-09-01",
    }

    const wrapper = shallow(<Meta {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

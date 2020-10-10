import React from "react"
import Copyright from "./Copyright"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Copyright", () => {
  it("renders correctly", () => {
    const props = {
      copyright: "copyright",
    }

    const wrapper = shallow(<Copyright {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

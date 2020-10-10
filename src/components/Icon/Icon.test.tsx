import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Icon from "./Icon"

Enzyme.configure({ adapter: new Adapter() })

describe("Icon", () => {
  it("renders correctly", () => {
    const props = {
      name: "test",
      icon: {
        viewBox: "0 0 0 0",
        path: "",
      },
    }

    const wrapper = shallow(<Icon {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

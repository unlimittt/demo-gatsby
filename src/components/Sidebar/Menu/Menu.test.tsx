import React from "react"
import Menu from "./Menu"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Menu", () => {
  const props = {
    menu: [
      {
        label: "Item 0",
        path: "/#0/",
      },
      {
        label: "Item 1",
        path: "/#1/",
      },
    ],
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Menu {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

import React from "react"
import Author from "./Author"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Author", () => {
  const props = {
    author: {
      name: "test",
      photo: "/photo.jpg",
      bio: "test",
    },
    isIndex: false,
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Author {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

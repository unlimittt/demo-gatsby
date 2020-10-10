import React from "react"
import Tags from "./Tags"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Tags", () => {
  it("renders correctly", () => {
    const props = {
      tags: ["test_0", "test_1"],
      tagSlugs: ["/test_0", "/test_1"],
    }

    const wrapper = shallow(<Tags {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Pagination from "./Pagination"

Enzyme.configure({ adapter: new Adapter() })

describe("Pagination", () => {
  const props = {
    prevPagePath: "/page/1",
    nextPagePath: "/page/3",
    hasNextPage: true,
    hasPrevPage: true,
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

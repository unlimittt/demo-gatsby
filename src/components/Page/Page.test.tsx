import React from "react"
import Enzyme, { mount, shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Page from "./Page"

Enzyme.configure({ adapter: new Adapter() })

describe("Page", () => {
  const props = {
    children: "test",
    title: "test",
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Page {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("scrolls", () => {
    const scrollIntoViewSpy = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

    mount(<Page {...props} />)
    expect(scrollIntoViewSpy).toHaveBeenCalledTimes(1);
  })
})

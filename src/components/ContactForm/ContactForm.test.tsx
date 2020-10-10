import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import ContactForm from "./ContactForm"

Enzyme.configure({ adapter: new Adapter() })

describe("ContactForm", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ContactForm />)
    expect(wrapper).toMatchSnapshot()
  })
})

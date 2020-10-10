import React from "react"
import Contacts from "./Contacts"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Contacts", () => {
  const props = {
    contacts: {
      email: "#",
      twitter: "#",
      vkontakte: "#",
      github: "#",
      rss: "#",
      telegram: "#",
    },
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Contacts {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

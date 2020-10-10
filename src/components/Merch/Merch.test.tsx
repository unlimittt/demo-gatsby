import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Merch from "./Merch"

Enzyme.configure({ adapter: new Adapter() })

describe("Merch", () => {
  const props = {
    merch: {
      fields: {
        slug: "/merch/personalized-bottle",
      },
      frontmatter: {
        title: "Personalized Bottle",
        image: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: "/media/customized-coke-bottle.png",
              srcSet: "",
              sizes: "",
            },
          },
        },
        order: 1,
        price: "20.00",
      },
      html: "<p>test</p>",
      id: "test_1",
    },
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Merch {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

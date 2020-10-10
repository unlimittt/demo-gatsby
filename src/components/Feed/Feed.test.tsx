import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Feed from "./Feed"

Enzyme.configure({ adapter: new Adapter() })

describe("Feed", () => {
  const props = {
    edges: [
      {
        node: {
          fields: {
            slug: "/test_0",
            categorySlug: "/test_0",
            tagSlugs: ["/test-1", "/test-2"],
          },
          frontmatter: {
            date: "2016-09-01",
            description: "test_0",
            category: "test_0",
            tags: ["test-1", "test-2"],
            title: "test_0",
          },
          id: "test-123",
          html: "<p>test</p>",
        },
      },
      {
        node: {
          fields: {
            slug: "/test_1",
            categorySlug: "/test_1",
            tagSlugs: ["/test-1", "/test-2"],
          },
          frontmatter: {
            date: "2016-09-01",
            description: "test_1",
            category: "test_1",
            tags: ["test-1", "test-2"],
            title: "test_1",
          },
          id: "test-321",
          html: "<p>test</p>",
        },
      },
    ],
  }

  it("renders correctly", () => {
    const wrapper = shallow(<Feed {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

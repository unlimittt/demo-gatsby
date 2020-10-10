module.exports = {
  allMarkdownRemark: {
    group: [
      {
        fieldValue: "test_0",
        totalCount: 1,
      },
      {
        fieldValue: "test_1",
        totalCount: 2,
      },
    ],
    edges: [
      {
        node: {
          id: "test-1",
          html: "<p>test1</p>",
          fields: {
            slug: "/test_0",
            categorySlug: "/test",
          },
          frontmatter: {
            date: "2016-09-01",
            description: "test_0",
            category: "test",
            title: "test_0",
          },
        },
      },
      {
        node: {
          id: "test-2",
          html: "<p>test2</p>",
          fields: {
            slug: "/test_1",
            categorySlug: "/test",
          },
          frontmatter: {
            date: "2016-09-01",
            description: "test_1",
            category: "test",
            title: "test_1",
          },
        },
      },
    ],
  },
}

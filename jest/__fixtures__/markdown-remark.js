module.exports = {
  markdownRemark: {
    id: "test-123",
    html: "<p>test</p>",
    fields: {
      slug: "/test_0",
      tagSlugs: ["/test_0", "/test_1"],
    },
    frontmatter: {
      date: "2016-09-01",
      description: "test",
      title: "test",
      tags: ["test_0", "test_1"],
      image: {
        childImageSharp: {
          fixed: {
            width: 200,
            height: 184,
            src: "/media/customized-coke-bottle.png",
            srcSet: "",
          },
          fluid: {
            aspectRatio: 1,
            src: "/media/customized-coke-bottle.png",
            srcSet: "",
            sizes: "",
          },
        },
      },
    },
  },
}

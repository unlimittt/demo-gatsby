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
          fields: {
            slug: "/merch/personalized-bottle",
          },
          frontmatter: {
            title: "Personalized Bottle",
            image: {
              childImageSharp: {
                fixed: {
                  width: 200,
                  height: 184,
                  src: "/media/customized-coke-bottle.png",
                  srcSet: "",
                },
              },
            },
            order: 1,
            price: "20.00",
          },
          html: "<p>test</p>",
          id: "test_1",
        },
      },
      {
        node: {
          fields: {
            slug: "/merch/coke-can-sculpted-mug",
          },
          frontmatter: {
            title: "Coke Can Sculpted Mug",
            image: {
              childImageSharp: {
                fixed: {
                  width: 200,
                  height: 184,
                  src: "/media/coke_can_sculpted_mug.png",
                  srcSet: "",
                },
              },
            },
            order: 2,
            price: "40.00",
          },
          html: "<p>test2</p>",
          id: "test_2",
        },
      },
    ],
  },
}

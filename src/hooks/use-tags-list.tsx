import { useStaticQuery, graphql } from "gatsby"
import { AllMarkdownRemark } from "../types"

const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery<AllMarkdownRemark>(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { template: { eq: "post" }, draft: { ne: true } }
          }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  return allMarkdownRemark.group
}

export default useTagsList

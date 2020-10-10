import { useStaticQuery, graphql } from 'gatsby';
import { AllMarkdownRemark } from "../types"

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery<AllMarkdownRemark>(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;

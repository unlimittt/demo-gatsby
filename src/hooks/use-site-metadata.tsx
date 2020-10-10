import { useStaticQuery, graphql } from "gatsby"
import { SiteMetadata } from "../types"

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetadata>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortName
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata

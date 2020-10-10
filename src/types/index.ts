import { ReactNode } from "react"
import { FixedObject, FluidObject } from "gatsby-image"

export type RenderCallback = {
  render: (data: any) => ReactNode
}

export type PageContext = {
  tag: string
  category: string
  currentPage: number
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
}

export type Node = {
  fields: {
    slug: string
    categorySlug?: string
    tagSlugs?: string[]
  }
  frontmatter: {
    title: string
    description?: string
    date?: string
    category?: string
    tags?: string[]
    socialImage?: string
    image?: {
      childImageSharp: {
        fixed?: FixedObject
        fluid?: FluidObject
      }
    }
    order?: number
    price?: string
  }
  html: string
  id: string
}

export type Edge = {
  node: Node
}

export type Edges = Array<Edge>

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges
    group: {
      fieldValue: string
      totalCount: number
    }[]
  }
}

export type MarkdownRemark = Node

export type SiteMetadata = {
  site: {
    siteMetadata: {
      author: {
        name: string
        bio: string
        photo: string
        contacts: {
          facebook: string
          linkedin: string
          github: string
          twitter: string
          telegram: string
          instagram: string
          email: string
          rss: string
          vkontakte: string
          line: string
          gitlab: string
          weibo: string
          codepen: string
          youtube: string
          soundcloud: string
        }
      }
      menu: {
        label: string
        path: string
      }[]
      url: string
      title: string
      subtitle: string
      copyright: string
      disqusShortName: string
    }
  }
}
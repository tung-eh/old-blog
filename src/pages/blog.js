import { Box } from "rebass"
import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import PostLink from "../components/PostLink"
import bannerImg from "../assets/images/blog_banner.jpeg"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout banner={bannerImg}>
      <Box mb={100}>{posts}</Box>
    </Layout>
  )
}

export const postsQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            summary
            title
          }
        }
      }
    }
  }
`

export default BlogPage

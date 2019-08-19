import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PostLink from "../components/PostLink"
import Layout from "../components/Layout"
import { PageHeader, PageSubHeader } from "../components/Headers"

const PostsContainer = styled.div`
  margin: 0 auto;
  width: 70%;
`

const blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <PageHeader>Blogs</PageHeader>
      <PageSubHeader>
        I like to write about programming, music, my life... Anything really!
      </PageSubHeader>
      <PostsContainer>{Posts}</PostsContainer>
    </Layout>
  )
}

export default blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

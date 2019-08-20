import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { PageHeader, PageSubHeader } from "../components/Headers"

const BackLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  padding: 1rem;
  margin: 1rem 0 0 5rem;
  display: inline-block;
  background-color: #fff;
  color: #333;
  border: 0.2rem solid #333;
  transition: all 0.3s;
  &:hover {
    background-color: #333;
    color: #fff;
    border: 0.2rem solid #333;
  }
`

const BlogContent = styled.div`
  margin: 3rem 0 0 2rem;
  font-size: 1.8rem;
  p {
    margin: 1rem 0;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <BackLink to="/blog">Back</BackLink>
      <div className="blog-post-container">
        <div className="blog-post">
          <PageHeader>{frontmatter.title}</PageHeader>
          <PageSubHeader>{frontmatter.date}</PageSubHeader>
          <BlogContent
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import devices from "../utils/devices"

const LinkContainer = styled.div`
  width: 100%;
  display: inline-block;
  margin: 1.5rem;
  padding: 2rem;
  border: 0.1rem solid #000;
  border-radius: 0.3rem;
  background-color: #f5f5f5;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  &:hover {
    color: #000;
    background-color: #fff;
  }

  @media ${devices.mobileM} {
    padding: 0.8rem;
    margin: 2rem auto;
    width: 80%;
    display: block;
    font-size: 2rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  width: inherit;
  color: #555;
  font-weight: 700;
`

const PostLink = ({ post, id }) => {
  console.log(id)
  return (
    <StyledLink to={post.frontmatter.path}>
      <LinkContainer
        data-aos={id % 2 == 0 ? "fade-left" : "fade-right"}
        data-aos-duration="1000"
        data-aos-easing="ease-out-back"
        data-aos-delay="400"
        data-aos-offset="0"
        data-aos-anchor="posts-container"
      >
        {post.frontmatter.title} ({post.frontmatter.date})
      </LinkContainer>
    </StyledLink>
  )
}

export default PostLink

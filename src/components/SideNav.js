import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const activeClass = {
  backgroundColor: "#ff0000",
  color: "#fff",
}

const SideNav = styled.nav`
  flex: 1;
  background-color: #404040;
`
const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;
`

const NavLink = styled(Link)`
  padding: 1rem 0 1rem 2rem;
  text-decoration: none;
  font-size: 2.5rem;
  background-color: #fc5353;
  color: #dfdfdf;
  transition: all 0.3s;
  display: "block";
  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
`

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Contact",
    to: "/contact",
  },
]

export default () => (
  <SideNav>
    <NavLinksContainer>
      {links.map(({ name, to }, key) => (
        <NavLink key={key} to={to} activeStyle={activeClass}>
          {name}
        </NavLink>
      ))}
    </NavLinksContainer>
  </SideNav>
)

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SideNav = styled.nav`
  flex: 1;
  background-color: #404040;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  margin: 2rem auto 2rem 3rem;
  color: #dfdfdf;
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
    {links.map(({ name, to }, key) => (
      <NavLink key={key} to={to}>
        {name}
      </NavLink>
    ))}
  </SideNav>
)

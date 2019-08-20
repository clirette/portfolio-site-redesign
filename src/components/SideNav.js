import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import devices from "../utils/devices"

const activeClass = {
  backgroundColor: "#ff0000",
  color: "#fff",
}

const SideNavDesktop = styled.nav`
  flex: 1;
  background-color: #404040;
  @media ${devices.mobileM} {
    height: 100vh;
    display: none;
    width: 100vw;
  }
`

const SideNav = styled.nav`
  flex: 1;
  background-color: #404040;
  @media ${devices.mobileM} {
    height: 100vh;
    width: 100vw;
    flex: 9000;
  }
`
const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30rem;
  @media ${devices.mobileM} {
    margin-top: 10rem;
  }
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

export const SideNavMain = () => {
  return (
    <SideNavDesktop>
      <NavLinksContainer>
        {links.map(({ name, to }, key) => (
          <NavLink key={key} to={to} activeStyle={activeClass}>
            {name}
          </NavLink>
        ))}
      </NavLinksContainer>
    </SideNavDesktop>
  )
}

export const SideNavMobile = ({ display }) => {
  return (
    display && (
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
  )
}

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import socialLinks from "../constants/social-links"
import devices from "../utils/devices"

const activeClass = {
  backgroundColor: "#ff0000",
  color: "#fff",
}

const SideNavDesktop = styled.nav`
  flex: 1;
  background-color: #404040;
  position: relative;
  box-shadow: 0.2rem 0 2rem rgba(0, 0, 0, 0.9);
  @media ${devices.mobileM} {
    box-shadow: none;
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

const SocialLinksContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 90%;
  a {
    font-size: 3rem;
    text-decoration: none;
    color: #fff;
  }
`

const SocailLinksFlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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

const renderNavLinks = () => {
  return links.map(({ name, to }, key) => (
    <NavLink key={key} to={to} activeStyle={activeClass}>
      {name}
    </NavLink>
  ))
}

const renderSocialLinks = () => {
  return socialLinks.map(({ icon, href }, key) => (
    <a
      href={href}
      key={key}
      className="social-link"
      target="_blank"
      rel="noreferrer noopener"
    >
      {icon}
    </a>
  ))
}

export const SideNavMain = () => {
  return (
    <SideNavDesktop>
      <NavLinksContainer>{renderNavLinks()}</NavLinksContainer>
      <SocialLinksContainer>
        <SocailLinksFlexContainer>
          {renderSocialLinks()}
        </SocailLinksFlexContainer>
      </SocialLinksContainer>
    </SideNavDesktop>
  )
}

export const SideNavMobile = ({ display }) => {
  return (
    display && (
      <SideNav>
        <NavLinksContainer>{renderNavLinks()}</NavLinksContainer>
        <SocialLinksContainer>
          <SocailLinksFlexContainer>
            {renderSocialLinks()}
          </SocailLinksFlexContainer>
        </SocialLinksContainer>
      </SideNav>
    )
  )
}

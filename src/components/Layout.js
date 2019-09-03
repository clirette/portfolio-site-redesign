import React, { useState, useEffect, Component } from "react"
import styled from "styled-components"
import "../css/styles.css"
import devices, { sizes } from "../utils/devices"
import { SideNavMain, SideNavMobile } from "./SideNav"

const BodyContainer = styled.div`
  min-width: 95vw;
  min-height: 95vh;
  margin: 2rem;
  background-color: #faf9f9;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  overflow: hidden;
  position: relative;
  @media ${devices.mobileM} {
    margin: 0;
    border-radius: 0;
    height: 100vh;
  }
`

const SideNavToggle = styled.div`
  position: absolute;
  top: 1%;
  left: 5%;
  font-size: 4rem;
  cursor: pointer;
  border: 0.2rem solid black;
  z-index: 1;
  display: none;
  color: #fff;
  background-color: #000;
  @media ${devices.mobileM} {
    display: block;
  }
`

const ContentContainer = styled.div`
  flex: 6;
  height: 95vh;
  overflow-y: auto;
  @media ${devices.mobileM} {
    overflow: scroll;
    height: 100vh;
  }
`

const Layout = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false)

  return (
    <BodyContainer>
      <SideNavToggle onClick={() => setNavToggle(!navToggle)}>></SideNavToggle>
      <SideNavMain />
      <SideNavMobile display={navToggle} />
      <ContentContainer>{children}</ContentContainer>
    </BodyContainer>
  )
}

export default Layout

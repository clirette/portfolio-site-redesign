import React from "react"
import styled from "styled-components"
import "../styles.css"

import SideNav from "./SideNav"

const BodyContainer = styled.div`
  min-width: 95vw;
  min-height: 95vh;
  margin: 2rem;
  background-color: #faf9f9;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.3);
  display: flex;
  overflow: hidden;
`

const ContentContainer = styled.div`
  flex: 6;
`

const Layout = ({ children }) => {
  return (
    <BodyContainer>
      <SideNav />
      <ContentContainer>{children}</ContentContainer>
    </BodyContainer>
  )
}

export default Layout

import React from "react"
import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: ${props => props.fontWeight || 700};
  text-align: ${props => props.align || "left"};
`

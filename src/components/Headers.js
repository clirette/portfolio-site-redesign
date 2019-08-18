import styled from "styled-components"

export const PageHeader = styled.h1`
  font-size: 7rem;
  font-family: "Montserrat", sans-serif;
  font-weight: ${props => props.fontWeight || 700};
  text-align: ${props => props.align || "left"};
`

export const PageSubHeader = styled.h1`
  font-size: 5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: ${props => props.fontWeight || 700};
  text-align: ${props => props.align || "left"};
  letter-spacing: ${props => props.letterSpacing || "0"};
`

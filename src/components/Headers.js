import styled from "styled-components"
import devices from "../utils/devices"

export const PageHeader = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-top: ${props => (props.isHome ? "none" : "5rem")};

  @media ${devices.mobileM} {
    font-size: 3rem;
  }
`

export const PageSubHeader = styled.h1`
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.2rem;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  letter-spacing: ${props => props.letterSpacing || "0"};
  @media ${devices.mobileM} {
    font-size: 2rem;
  }
`

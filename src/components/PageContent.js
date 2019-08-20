import styled from "styled-components"
import devices from "../utils/devices"

export default styled.div`
  margin: 5rem;
  h1 {
    padding: 2rem 0;
    font-size: 4rem;
  }
  p {
    font-size: 3rem;
    font-weight: 300;
  }

  @media ${devices.mobileM} {
    margin: 2rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`

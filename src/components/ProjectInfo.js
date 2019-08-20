import React from "react"
import styled from "styled-components"
import devices from "../utils/devices"

const Project = styled.div`
  text-align: center;
  margin: 5rem auto;

  a {
    display: block;
    margin: 0.5rem 0;
  }

  p {
    font-weight: 700;
    text-align: left;
    font-size: 2rem;
  }
  @media ${devices.mobileM} {
    h1 {
      font-size: 2.4rem;
    }
  }
`

const ProjectImg = styled.img`
  height: 20rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;

  @media ${devices.mobileM} {
    height: 10rem;
  }
`

const ProjectInfo = ({ img, name, description, link }) => {
  return (
    <Project>
      <h1>{name}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
      <ProjectImg src={img} />
      <p>{description}</p>
    </Project>
  )
}

export default ProjectInfo

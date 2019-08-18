import React from "react"
import styled from "styled-components"

const Project = styled.div`
  text-align: center;
`

const ProjectInfo = ({ img, name, description, link }) => {
  return (
    <Project>
      <h1>{name}</h1>
      <a
        href={link}
        target="_blank"
        style={{ display: "block", margin: ".5rem 0" }}
      >
        {link}
      </a>
      <img
        src={img}
        alt=""
        style={{
          height: "20rem",
          borderRadius: ".3rem",
          boxShadow: "0 .5rem 2rem rgba(0,0,0,0.3)",
          marginBottom: "2rem",
        }}
      />
      <p style={{ fontWeight: "700", textAlign: "left" }}>{description}</p>
    </Project>
  )
}

export default ProjectInfo

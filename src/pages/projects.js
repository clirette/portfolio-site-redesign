import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import devices from "../utils/devices"
import { PageHeader, PageSubHeader } from "../components/Headers"

import queryGeneratorImg from "../images/query-generator.jpg"
import chuckNorrisImg from "../images/chucknorris.jpg"
import ProjectInfo from "../components/ProjectInfo"

const ProjectsContainer = styled.div`
  text-align: center;
  margin: 3rem auto;
  font-size: 1.8rem;
  width: 50%;

  @media ${devices.mobileM} {
    width: 90%;
  }
`

const projects = () => {
  const projectsList = [
    {
      img: queryGeneratorImg,
      name: "Query Letter Generator",
      description:
        'Query Letter Generator was a passion project made by myself and my girlfriend, Julia Jorgenson. Julia is a writer, and had always imagined a simple way to construct what is called a "Query Letter", a letter that is sent to literary agents as a sort of elevator pitch about yourself and your latest work.',
      link: "https://www.querylettergenerator.com",
    },
    {
      img: chuckNorrisImg,
      name: "Dad Norris",
      description:
        "Dad Norris was a spur-of-the-moment app I threw together to send my dad Chuck Norris jokes every day. My dad still gets a kick out of Chuck Norris jokes, and would send me one every day for months. This app grabs a joke from the joke API and uses a texting service called Nexmo to send the joke.",
      link: "https://github.com/clirette/dad-norris",
    },
  ]

  return (
    <Layout>
      <div data-aos="fade-up">
        <PageHeader>Projects</PageHeader>
        <PageSubHeader>
          Here are some of the things I have been working on!
        </PageSubHeader>
      </div>
      <ProjectsContainer className="projects-container">
        {projectsList.map((project, key) => (
          <ProjectInfo key={key} id={key} {...project} />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export default projects

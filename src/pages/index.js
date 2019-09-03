import React from "react"
import Layout from "../components/Layout"

import { PageHeader, PageSubHeader } from "../components/Headers"
import HomeContent from "../components/PageContent"

export default () => (
  <Layout>
    <div data-aos="fade-in" data-aos-delay="100">
      <header className="portrait-container">
        <div className="portrait" />
      </header>
      <PageHeader isHome>Chase Lirette</PageHeader>
      <PageSubHeader isHome>Full Stack Developer</PageSubHeader>
    </div>
    <div data-aos="fade-up" data-aos-delay="500">
      <HomeContent>
        <h1>Hello There!</h1>
        <p>
          I am a software developer with experience building full stack web
          applications. Born and raised in southern Louisiana, I received my BA
          in Computer Science from the University of New Orleans, and now work
          as a full stack developer at DXC Technology.
        </p>
      </HomeContent>
    </div>
  </Layout>
)

import React from "react"
import Layout from "../components/Layout"
import { PageHeader, PageSubHeader } from "../components/Headers"

const thanks = () => {
  return (
    <Layout>
      <PageHeader>Thank You!</PageHeader>
      <PageSubHeader>Your submission has been delivered.</PageSubHeader>
    </Layout>
  )
}

export default thanks

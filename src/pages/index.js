import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Content from "../components/content.js"


const IndexPage = () => (
  <Layout>
    <Content />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

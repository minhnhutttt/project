import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Table from "../components/Table"


const TokensPage = () => {
  return (
    <Layout>
      <Table />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default TokensPage

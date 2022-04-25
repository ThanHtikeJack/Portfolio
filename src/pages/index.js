import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Experience from "../components/Experience"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Scroll from "../components/scroll"

const IndexPage = () => (
  <Layout>
     <Scroll showBelow={250} />
    <SEO title="Than Htike Soe" />
    <Header></Header>
    <Experience></Experience>
    <About></About>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage

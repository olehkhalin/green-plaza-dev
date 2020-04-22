import React from "react"
import "../styles/styles.sass"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Advantages from "../components/advantages"
import Complex from "../components/complex"
import Tour from "../components/tour"
import Gallery from "../components/gallery"
import Form from "../components/form"
import Contacts from "../components/contacts"
import Footer from "../components/footer"
import FirstScreen from "../components/firstScreen"

const IndexPage = () => (
  <>
    {/*<div className="top-header"></div>*/}
    <FirstScreen />
    <Advantages />
    <Complex />
    <Tour />
    <Gallery />
    <Form />
    <Contacts />
    <Footer />
  </>
)

export default IndexPage

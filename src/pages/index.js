import React from "react"
import "../components/layout.css"
import "../styles/styles.sass"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import FirstScreen from "../components/01-FirstScreen/firstScreen"
import Advantages from "../components/02-Advantages/advantages"
import Complex from "../components/03-Complex/complex"
import Tour from "../components/04-Tour/tour"
import Gallery from "../components/05-Gallery/gallery"
import Form from "../components/06 - Form/form"
import Contacts from "../components/07-Contacts/contacts"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
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

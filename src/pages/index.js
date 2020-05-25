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
    <SEO
      title="Жилой комплекс «Грин Плаза» - неповторимый архитектурный комплекс, не имеющий аналогов в городе по качеству строительства и предлагаемому сервису"
      description="Жители наших домов привыкли к высокому уровню комфорта! Просторные светлые комнаты с высокими потолками 3,15 м, подземный паркинг, роскошные фонтаны, современные детские площадки, собственные инженерные системы и уникальные для региона зеленые насаждения полностью изменят ваше представление о городской жизни. Здесь вы всегда будете чувствовать себя особенными!"
      lang="ru"
    />
    <FirstScreen />
    <Advantages />
    {/*<Complex />*/}
    <Tour />
    <Gallery />
    <Form />
    <Contacts />
    <Footer />
  </>
)

export default IndexPage

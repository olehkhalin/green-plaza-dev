import React from "react"
import "../components/layout.css"
import "../styles/styles.sass"

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
      title="«Грин Плаза» Тұрғын үй кешені — құрылыс сапасы мен ұсынылатын қызмет бойынша қалада теңдесі жоқ ерекше архитектуралық кешен"
      description="Біздің үйдің тұрғындары жайлылықтың жоғары деңгейіне үйренді! Биіктігі 3,15м, кең әрі жарық бөлмелер, жерасты паркингі, сәнді субұрқақтар, балаларға арналған заманауи ойын алаңдары, жеке инженерлік жүйелер және жергілікті аймақта таптырмайтын жасыл алаңдар мен абаттандыру сіздің қала өмірі жайлы ойыңызды түбегейлі өзгертеді. Мұнда сіз өзіңізді әрқашан ерекше сезінетін боласыз!"
      lang="kk"
    />
    <FirstScreen lang="kk" />
    <Advantages lang="kk" />
    <Complex lang="kk" />
    <Tour lang="kk" />
    <Gallery />
    <Form lang="kk" />
    <Contacts lang="kk" />
    <Footer lang="kk" />
  </>
)

export default IndexPage

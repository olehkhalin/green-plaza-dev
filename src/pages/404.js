import React from "react"
import { Link } from "gatsby"
import "../styles/404.sass"

import RhombusIcon from "../icons/rhombus.svg"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <main className="error-page">
      <div className="container">
        <div className="row v-center space-between">
          <div className="error-container">
            <div className="error-icon">
              4 <span><RhombusIcon /></span> 4
            </div>
            <h1>Страница не найдена</h1>
            <p>Извините, мы не можем найти страницу,<br />которую вы искали</p>
            <Link to="/" className="button bordered">вернуться на главную</Link>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default NotFoundPage

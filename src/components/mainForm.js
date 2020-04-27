import React from "react"
import Button from "./Button"

const MainForm = () => {
  return (
    <form className="form-content-form">
      <label htmlFor="name" className="form-content-label name">
        <span className="form-content-text">Ваше имя и фамилия *</span>
        <input
          className="form-content-input"
          id="name"
          type="text"
          name="name"
          required
          placeholder="Иван Иванов"
        />
      </label>
      <label htmlFor="email" className="form-content-label email">
        <span className="form-content-text">Ваше E-mail *</span>
        <input
          className="form-content-input"
          id="email"
          type="email"
          name="email"
          required
          placeholder="example@example.com"
        />
      </label>
      <label htmlFor="phone" className="form-content-label phone">
        <span className="form-content-text">Ваш телефон</span>
        <input
          className="form-content-input"
          id="phone"
          type="text"
          name="phone"
          placeholder="+7"
        />
      </label>
      <label htmlFor="message" className="form-content-label message">
        <span className="form-content-text">Ваш комметарий *</span>
        <textarea
          className="form-content-input"
          id="message"
          name="message"
          required
          placeholder="Напишите нам что-нибудь"
        ></textarea>
      </label>
      <Button buttonType="bordered">оставить заявку</Button>
    </form>
  )
}

export default MainForm
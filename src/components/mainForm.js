import React, { useState } from "react"
import axios from "axios"
import Button from "./Button"

const data = {
  // Note: you should extract the login information
  // to environment variables.
  email: 'green-plaza@rova.agency',
  password: 'green-pass-302$5-pl',
}

const MainForm = ({lang}) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = async e => {
    e.preventDefault();

    let token;

    try {
      const response = await fetch('http://64.225.107.47/green-plaza/auth/authenticate', {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      token = await json.data.token;
    } catch (error) {
      console.error('Ошибка:', error);
    }


    console.log(e)
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "http://64.225.107.47/green-plaza/mail",
      data: new FormData(form)
    })
      .then(r => {
        // handleServerResponse(true, "Thanks!", form);
        console.log(r.response.data)
      })
      .catch(r => {
        // handleServerResponse(false, r.response.data.error, form);
        console.log(r.response.data)
      });
  };

  let nameTitle
  let emailTitle
  let phoneTitle
  let commentTitle
  let buttonTitle
  let textareaText
  if (lang !== "kk") {
    nameTitle = `Ваше имя и фамилия`
    emailTitle = `Ваше E-mail`
    phoneTitle = `Ваш телефон`
    commentTitle = `Ваш комметарий`
    buttonTitle = `оставить заявку`
    textareaText = `Напишите нам что-нибудь`
  } else {
    nameTitle = `Сіздің аты-жөніңіз`
    emailTitle = `Сіздің электронды поштаңыз`
    phoneTitle = `Сіздің телефоныңыз`
    commentTitle = `Сіздің пікіріңіз`
    buttonTitle = `өтініш қалдыру`
    textareaText = `Бізге бір нәрсе жазыңыз`
  }

  return (
    <form className="form-content-form" onSubmit={handleOnSubmit}>
      <label htmlFor="name" className="form-content-label name">
        <span className="form-content-text">{nameTitle} *</span>
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
        <span className="form-content-text">{emailTitle} *</span>
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
        <span className="form-content-text">{phoneTitle}</span>
        <input
          className="form-content-input"
          id="phone"
          type="text"
          name="phone"
          placeholder="+7"
        />
      </label>
      <label htmlFor="message" className="form-content-label message">
        <span className="form-content-text">{commentTitle} *</span>
        <textarea
          className="form-content-input"
          id="message"
          name="message"
          required
          placeholder={textareaText}
        ></textarea>
      </label>
      <button type="submit" className="button bordered">{buttonTitle}</button>
    </form>
  )
}

export default MainForm
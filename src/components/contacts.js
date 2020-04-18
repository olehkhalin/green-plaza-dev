import React from "react"

import RhombusIcon from "../icons/rhombus.svg"

const Contacts = () => (
  <section className="section light contacts">
    <div className="container">
      <div className="row v-center space-between">
        <h2>
          <span className="h2-line">Контакты</span>
        </h2>
      </div>
      <div className="row v-center space-between">
        <div className="contacts-map"></div>
      </div>
      <div className="row v-center space-between">
        <div className="contacts-info">
          <div className="contacts-item">
            <h3 className="contacts-item-header"><RhombusIcon/>Телефоны</h3>
            <ul className="contacts-item-list">
              <li>
                <a href="tel:+380673356942">+7 (7292) 470001</a>
              </li>
              <li>
                <a href="tel:+380673356942">+7 (701) 047 0002</a>
              </li>
              <li>
                <a href="tel:+380673356942">+7 (701) 047 0003</a>
              </li>

              <li>
                <a href="tel:+380673356942">470002</a>
              </li>
              <li>
                <a href="tel:+380673356942">470003 </a>
              </li>
            </ul>
          </div>
          <div className="contacts-item">
            <h3 className="contacts-item-header"><RhombusIcon/>Местоположение</h3>
            <ul className="contacts-item-list">
              <li>
                <a href="https://google.com" target="_blank">
                  дом №6 офис №1, вдоль центральной дороги
                </a>
              </li>
            </ul>
          </div>
          <div className="contacts-item">
            <h3 className="contacts-item-header"><RhombusIcon/>Режим работы</h3>
            <ul className="contacts-item-list">
              <li>ПН-ПТ 09:00 - 18:00</li>
              <li>СБ 10:00 - 17:00</li>
              <li>ВС выходной</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts

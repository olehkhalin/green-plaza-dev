import React from "react"

import RhombusIcon from "../../icons/rhombus.svg"
import { graphql, useStaticQuery } from "gatsby"

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query {
      contactsJson {
        address {
          link
          title
        }
        phones
        working_hours
      }
    }
  `)

  return (
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
              <h3 className="contacts-item-header">
                <RhombusIcon />
                Телефоны
              </h3>
              <ul className="contacts-item-list">
                {data.contactsJson.phones.map(phone => (
                  <li>
                    <a href={"tel:" + phone}>{phone}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contacts-item">
              <h3 className="contacts-item-header">
                <RhombusIcon />
                Местоположение
              </h3>
              <ul className="contacts-item-list">
                <li>
                  <a
                    href={data.contactsJson.address.link}
                    target="_blank"
                  >
                    {data.contactsJson.address.title}
                  </a>
                </li>
              </ul>
            </div>
            <div className="contacts-item">
              <h3 className="contacts-item-header">
                <RhombusIcon />
                Режим работы
              </h3>
              <ul className="contacts-item-list">
                {data.contactsJson.working_hours.map(hour => (
                  <li>
                    <span>{hour}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts

import React from "react"
// import { useLocalJsonForm, useGlobalJsonForm } from "gatsby-tinacms-json"

import RhombusIcon from "../../icons/rhombus.svg"
import { graphql, useStaticQuery } from "gatsby"

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query {
      directusContact {
        phones {
          id
          phone
        }
        addresses: addresses_ru {
          id
          name
          link
        }
        working_hours: working_hours_ru
      }
    }
  `)
  const { phones, addresses, working_hours } = data.directusContact

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
                {phones.map(phone => (
                  <li key={phone.id}>
                    <a href={"tel:" + phone.phone}>{phone.phone}</a>
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
                {addresses.map(addressItem => (
                  <li key={addressItem.id}>
                    <a
                      href={addressItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {addressItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contacts-item">
              <h3 className="contacts-item-header">
                <RhombusIcon />
                Режим работы
              </h3>
              <ul className="contacts-item-list" dangerouslySetInnerHTML={{__html: working_hours}}>
                {/*{working_hours}*/}
                {/*{data.contactsJson.working_hours.map(hour => (*/}
                {/*  <li key={hour}>*/}
                {/*    <span>{hour}</span>*/}
                {/*  </li>*/}
                {/*))}*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts

import React from "react"
import { useLocalJsonForm, useGlobalJsonForm } from "gatsby-tinacms-json"

import RhombusIcon from "../../icons/rhombus.svg"
import { graphql, useStaticQuery } from "gatsby"

const Contacts = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     contactsJson {
  //       address {
  //         link
  //         title
  //       }
  //       phones
  //       working_hours
  //     }
  //
  //       rawJson
  //       fileRelativePath
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query {
      contactsQuery: landingContentJson(pk: { eq: "contacts" }) {
        contacts {
          address {
            id
            link
            title
          }
          phones {
            phone_number
            id
          }
        }

        rawJson
        fileRelativePath
      }
    }
  `)

  const formOptions = {
    label: "RU",
    fields: [
      {
        label: "Контакты",
        name: "rawJson.contacts",
        component: "group",
        fields: [
          {
            label: "Телефоны",
            name: "phones",
            component: "group-list",
            itemProps: item => ({
              key: item.id,
              label: item.phone_number,
            }),
            defaultItem: () => ({
              phone_number: "+000000000000",
              id: Math.random().toString(36).substr(2, 9),
            }),
            fields: [
              {
                label: "Номер телефона",
                name: "phone_number",
                component: "text",
              },
            ],
          },
          {
            label: "Адреса",
            name: "address",
            component: "group-list",
            itemProps: item => ({
              key: item.id,
              label: item.title,
            }),
            defaultItem: () => ({
              id: Math.random().toString(36).substr(2, 9),
            }),
            fields: [
              {
                label: "Заголовок",
                name: "title",
                component: "text",
              },
              {
                label: "Ссылка",
                name: "link",
                component: "text",
              },
            ],
          },
        ],
      },
    ],
  }

  const [{ contacts }] = useLocalJsonForm(data.contactsQuery, formOptions)

  const { phones, address } = contacts

  // console.log(dataTina);

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
                    <a href={"tel:" + phone.phone_number}>
                      {phone.phone_number}
                    </a>
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
                {address.map(addressItem => (
                  <li key={addressItem.id}>
                    <a
                      href={addressItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {addressItem.title}
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
              <ul className="contacts-item-list">
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

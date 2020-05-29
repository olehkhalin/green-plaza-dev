import React, { useState } from "react"

import Modal from "../modal"
import ComplexItemMore from "./complexFlatsItemMore"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import { orderBy } from "lodash"
import { disableScroll, enableScroll } from "../showHide"

const ComplexPlanMore = ({
  state,
  disabled,
  clicked,
  complexNumbers,
  lang,
}) => {
  const data = useStaticQuery(graphql`
    query {
      directusFlats911141617 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          is_promotion
          promotion_amount
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
          rooms_content_kz {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats101519 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          is_promotion
          promotion_amount
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
          rooms_content_kz {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats1213 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          is_promotion
          promotion_amount
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
          rooms_content_kz {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats18 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          is_promotion
          promotion_amount
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
          rooms_content_kz {
            id
            sort
            title
            quadrature
          }
        }
      }
      directusFlats20 {
        floor_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        flats {
          id
          sort
          rooms
          quadrature
          is_promotion
          promotion_amount
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          pdf {
            localFile {
              publicURL
            }
          }
          rooms_content_ru {
            id
            sort
            title
            quadrature
          }
          rooms_content_kz {
            id
            sort
            title
            quadrature
          }
        }
      }
    }
  `)

  let cplxArray = data.directusFlats911141617,
    flatsArr

  if (complexNumbers === `9, 11, 14, 16, 17`) {
    cplxArray = data.directusFlats911141617
  } else if (complexNumbers === `10, 15, 19`) {
    cplxArray = data.directusFlats101519
  } else if (complexNumbers === `12, 13`) {
    cplxArray = data.directusFlats1213
  } else if (complexNumbers === `18`) {
    cplxArray = data.directusFlats18
  } else if (complexNumbers === `20`) {
    cplxArray = data.directusFlats20
  }
  flatsArr = orderBy(
    cplxArray.flats,
    // eslint-disable-next-line
    [object => new moment(object.sort)],
    ["asc"]
  )

  const [stateItem, setStateItem] = useState({
    initial: false,
    clicked: null,
  })
  const [disabledItem, setDisabledItem] = useState(false)
  const [currentFlat, setCurrentFlat] = useState(null)
  const handleItem = (flat = null) => {
    disableItem()
    if (stateItem.initial === false) {
      clicked()
      setTimeout(() => {
        setStateItem({
          initial: null,
          clicked: true,
        })
        disableScroll()
      }, 700)
      setCurrentFlat(flat)
    } else if (stateItem.clicked === true) {
      setStateItem({
        clicked: !stateItem.clicked,
      })
      enableScroll()
    } else if (stateItem.clicked === false) {
      clicked()
      setTimeout(() => {
        setStateItem({
          clicked: !stateItem.clicked,
        })
        disableScroll()
      }, 700)
      setCurrentFlat(flat)
    }
  }
  const disableItem = () => {
    setDisabledItem(!disabledItem)
    setTimeout(() => {
      setDisabledItem(false)
    }, 1200)
  }

  let promotionText
  let floorPlan
  let flatsPlan
  let flatText
  let seePlan
  if (lang !== "kk") {
    promotionText = "Акция"
    floorPlan = "Планировка этажа"
    flatsPlan = <h2>Планировка квартир домов № {complexNumbers}</h2>
    flatText = "Планировки квартир"
    seePlan = "смотреть планировку"
  } else {
    promotionText = "Науқандар"
    floorPlan = "Қабаттың жоспары"
    flatsPlan = <h2>№ {complexNumbers} үйлердің қабаттарының жоспары</h2>
    flatText = "Еден жоспарлары"
    seePlan = "жоспарларды қарау"
  }

  return (
    <>
      <Modal
        state={state}
        disabled={disabled}
        clicked={clicked}
        modalClass="complexPlanMore"
      >
        <div className="modal-header">
          <div className="modal-header-item">{flatsPlan}</div>
        </div>
        <div className="complex-plan-container">
          <div className="complex-plan-floor">
            <h3>{floorPlan}</h3>
            <Img
              fluid={cplxArray.floor_image.localFile.childImageSharp.fluid}
            />
          </div>
          <div className="complex-plan-flats">
            <h3>{flatText}</h3>
            <div className="complex-plan-flats-wrapper">
              {flatsArr.map(flat => (
                <div className="complex-plan-flats-item" key={flat.id}>
                  <div className="complex-plan-flats-item-image">
                    <Img fluid={flat.image.localFile.childImageSharp.fluid} />
                  </div>
                  <button
                    className="button bordered"
                    onClick={() => handleItem(flat)}
                  >
                    {seePlan}{" "}
                    {flat.is_promotion ? (
                      <span>
                        {promotionText} {flat.promotion_amount}%
                      </span>
                    ) : null}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      <ComplexItemMore
        lang={lang}
        state={stateItem}
        disabled={disabledItem}
        clicked={() => handleItem()}
        flat={currentFlat}
        building={complexNumbers}
      />
    </>
  )
}

export default ComplexPlanMore

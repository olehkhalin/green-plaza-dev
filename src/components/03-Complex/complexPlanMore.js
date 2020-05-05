import React, { useState } from "react"

import ComplexMoreTable from "../../icons/complex-more.svg"
import Modal from "../modal"
import Image from "../image2"
import ComplexItemMore from "./complexFlatsItemMore"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ComplexPlanMore = ({ state, disabled, clicked, complexNumbers }) => {
  const data = useStaticQuery(graphql`
      query {
          f911141617Json {
              numbers
              floor {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              flats {
                  title
                  quadrature
                  promotion
                  image {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pdf {
                      publicURL
                  }
              }
          }
          f101519Json {
              numbers
              floor {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              flats {
                  title
                  quadrature
                  promotion
                  image {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pdf {
                      publicURL
                  }
              }
          }
          f1213Json {
              numbers
              floor {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              flats {
                  title
                  quadrature
                  promotion
                  image {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pdf {
                      publicURL
                  }
              }
          }
          f18Json {
              numbers
              floor {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              flats {
                  title
                  quadrature
                  promotion
                  image {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pdf {
                      publicURL
                  }
              }
          }
          f20Json {
              numbers
              floor {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              flats {
                  title
                  quadrature
                  promotion
                  image {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
                  pdf {
                      publicURL
                  }
              }
          }
      }
  `)

  let cplxArray = data.f911141617Json;

  if (complexNumbers === `9, 11, 14, 16, 17`) {
    cplxArray = data.f911141617Json
  } else if (complexNumbers === `10, 15, 19`) {
    cplxArray = data.f101519Json
  } else if (complexNumbers === `12, 13`) {
    cplxArray = data.f1213Json
  } else if (complexNumbers === `18`) {
    cplxArray = data.f18Json
  } else if (complexNumbers === `20`) {
    cplxArray = data.f20Json
  }



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
      }, 700)
      setCurrentFlat(flat)
    } else if (stateItem.clicked === true) {
      setStateItem({
        clicked: !stateItem,
      })
    } else if (stateItem.clicked === false) {
      clicked()
      setTimeout(() => {
        setStateItem({
          clicked: !stateItem.clicked,
        })
      }, 700)
      setCurrentFlat(flat)
    }
  }
  const disableItem = () => {
    document.querySelector('html').classList.toggle('lock-scroll');
    setDisabledItem(!disabledItem)
    setTimeout(() => {
      setDisabledItem(false)
    }, 1200)
  }

  return (
    <>
      <Modal state={state} disabled={disabled} clicked={clicked}>
        <div className="modal-header">
          <div className="modal-header-item">
            <h2>Планировка этажа домов № {complexNumbers}</h2>
          </div>
        </div>
        <div className="complex-plan-container">
          <div className="complex-plan-floor">
            <h3>Планировка этажа</h3>
            <Img
              fluid={cplxArray.floor.childImageSharp.fluid}
            />
          </div>
          <div className="complex-plan-flats">
            <h3>Планировки квартир</h3>
            <div className="complex-plan-flats-wrapper">
              {cplxArray.flats.map(flat => (
                <div className="complex-plan-flats-item" key={flat.title}>
                  <div className="complex-plan-flats-item-image">
                    <Img
                      fluid={flat.image.childImageSharp.fluid}
                    />
                  </div>
                  <button
                    className="button bordered"
                    onClick={() => handleItem(flat)}
                  >
                    смотреть планировки {flat.promotion ? (<span>Акция -20%</span>) : null}
                  </button>
                </div>
              ))}
              {/*<div className="complex-plan-flats-item">*/}
              {/*  <div className="complex-plan-flats-item-image">*/}
              {/*    <Image />*/}
              {/*  </div>*/}
              {/*  <button*/}
              {/*    className="button bordered"*/}
              {/*    onClick={() => handleItem()}*/}
              {/*  >*/}
              {/*    смотреть планировки*/}
              {/*  </button>*/}
              {/*</div>*/}
              {/*<div className="complex-plan-flats-item">*/}
              {/*  <div className="complex-plan-flats-item-image">*/}
              {/*    <Image />*/}
              {/*  </div>*/}
              {/*  <button*/}
              {/*    className="button bordered"*/}
              {/*    onClick={() => handleItem()}*/}
              {/*  >*/}
              {/*    смотреть планировки*/}
              {/*  </button>*/}
              {/*</div>*/}
              {/*<div className="complex-plan-flats-item">*/}
              {/*  <div className="complex-plan-flats-item-image">*/}
              {/*    <Image />*/}
              {/*  </div>*/}
              {/*  <button*/}
              {/*    className="button bordered"*/}
              {/*    onClick={() => handleItem()}*/}
              {/*  >*/}
              {/*    смотреть планировки*/}
              {/*  </button>*/}
              {/*</div>*/}
              {/*<div className="complex-plan-flats-item">*/}
              {/*  <div className="complex-plan-flats-item-image">*/}
              {/*    <Image />*/}
              {/*  </div>*/}
              {/*  <button*/}
              {/*    className="button bordered"*/}
              {/*    onClick={() => handleItem()}*/}
              {/*  >*/}
              {/*    смотреть планировки*/}
              {/*  </button>*/}
              {/*</div>*/}
              {/*<div className="complex-plan-flats-item">*/}
              {/*  <div className="complex-plan-flats-item-image">*/}
              {/*    <Image />*/}
              {/*  </div>*/}
              {/*  <button*/}
              {/*    className="button bordered"*/}
              {/*    onClick={() => handleItem()}*/}
              {/*  >*/}
              {/*    смотреть планировки*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </Modal>
      <ComplexItemMore
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

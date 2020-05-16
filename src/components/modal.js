import React, { useEffect, useRef } from "react"

import gsap from "gsap/gsap-core"

const Modal = ({state, disabled, clicked, children, modalClass = null}) => {
  let complex = useRef(null)
  let revealComplex = useRef(null)
  let revealComplexBackground = useRef(null)


  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealComplex, revealComplexBackground], {
        duration: 1,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.09,
        },
      })
      gsap.to(complex, {
        duration: 1,
        css: { display: "none" },
      })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(complex, {
        duration: 1,
        css: { display: "block" },
      })
      gsap.to([revealComplex, revealComplexBackground], {
        duration: 0,
        opacity: 1,
        skewY: 0,
        height: "100%",
      })
      gsap.from([revealComplexBackground, revealComplex], {
        duration: 1,
        height: 0,
        transformOrigin: "right top",
        skewY: 3,
        ease: "power3.inOut",
        stagger: {
          amount: 0.12,
        },
      })
    }
  }, [state])

  return (
    <div className={"modal " + modalClass } ref={el => (complex = el)}>
      <div className="modal-secondary-background-color" ref={el => (revealComplexBackground = el)}></div>
      <div className="modal-layer" ref={el => (revealComplex = el)}>
        <div className="container">
          <div className="row v-center space-between">
            <div className="modal-scroll">
              <div className="modal-wrapper">
                <button className="button-close" onClick={clicked} disabled={disabled}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

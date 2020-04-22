import React from "react"

import ButtonArrow from '../icons/button-arrow.svg'

const Button = ({ buttonType, targetType, link, children }) => (
  <a
    href={link}
    target={targetType === "blank" ? "_blank" : null}
    className={"button " + buttonType}
  >
    {children}
    {(buttonType === 'arrow' || buttonType === 'arrow-only') ? <ButtonArrow/>  : null}
  </a>
)

export default Button

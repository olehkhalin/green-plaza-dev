import React from "react"

import ComplexIcon from "../../icons/complex.svg"

const ComplexTab = ({children}) => {
  return (
    <>
      <div className="complex-flats-tab-icon">
        <ComplexIcon />
      </div>
      <div className="complex-flats-tab-content">№ {children}</div>
    </>
  )
}

export default ComplexTab

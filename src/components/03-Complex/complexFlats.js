import React from "react"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ComplexTab from "./complexTab"
import ComplexContent from "./complexContent"

const tabs = [
  `9, 11, 14, 16, 17`,
  `10, 15, 19`,
  `12, 13`,
  `18`,
  `20`,
]

const ComplexFlats = ({lang}) => {
  return (
    <Tabs className="complex-flats" id="flats">
      <div className="complex-flats-tabs-wrapper">
        <TabList className="complex-flats-tabs-container">
          {tabs.map(cplx => (
            <Tab className="complex-flats-tab" key={cplx}><ComplexTab>{cplx}</ComplexTab></Tab>
          ))}
        </TabList>
      </div>


      {tabs.map(cplx => (
        <TabPanel key={cplx}>
            <ComplexContent lang={lang} complex={cplx}/>
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default ComplexFlats

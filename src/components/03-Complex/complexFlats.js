import React from "react"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ComplexTab from "./complexTab"
import Slider from "react-slick"
import Image from "../image"
import ComplexContent from "./complexContent"

const tabs = [
  `9, 11, 14, 16, 17`,
  `10, 15, 19`,
  `12, 13`,
  `18`,
  `20`,
]

const ComplexFlats = () => {
  return (
    <Tabs className="complex-flats">
      <div className="complex-flats-tabs-wrapper">
        <TabList className="complex-flats-tabs-container">
          {tabs.map(cplx => (
            <Tab className="complex-flats-tab"><ComplexTab>{cplx}</ComplexTab></Tab>
          ))}
        </TabList>
      </div>

      <TabPanel>
          <ComplexContent/>
      </TabPanel>
      <TabPanel className="complex-flats-items-wrapper">
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  )
}

export default ComplexFlats

import React from "react"

import Infrastructure from "../../icons/infrastructure.svg"
import ResidentialComplexPlan from "../../icons/residential-complex-plan.svg"
import ComplexFlats from "./complexFlats"
import ComplexPlan from "./complexPlan"

const Complex = () => (
  <section className="section light complex">
    <div className="container">
      <div className="row v-center space-between">
        <h2>
          <span className="h2-line">Расположение домов и планировка квартир</span>
          <span className="h2-line">В ЖК <span className="h2-color">GREEN PLAZA</span></span>
        </h2>
      </div>
      <div className="row">
        <div className="complex-plans">
          <Infrastructure />
          <ComplexPlan/>
        </div>
      </div>
      <div className="row" id="flats">
        <ComplexFlats />
      </div>
    </div>
  </section>
)

export default Complex

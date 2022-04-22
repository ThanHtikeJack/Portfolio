import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeadingone}</h1>
            </Fade>
            <h3>{data.promotionHeadingtwo}</h3>
          <p>{data.promotionParaone}</p>
          <h3>{data.promotionHeadingthree}</h3>
          <p>{data.promotionParatwo}</p>
          <h3>{data.promotionHeadingfour}</h3>
          <p>{data.promotionParafour}</p>
          <p>{data.promotionParafive}</p>
          <p>{data.promotionParathree}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion

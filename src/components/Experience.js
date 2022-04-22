import React from "react"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Experience  = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-wrapper">
        <Fade bottom cascade>
              <h1>Experience</h1>
            </Fade>
            <p className="Job_two">
              <h2 className="job_title">{data.experienceJobtitletwo}</h2>
              <h4 className="companyname"> {data.experienceCompanynametwo}</h4>
              <span className="job_year">{data.experienceJobyeartwo}</span>
              <br></br>
              <br></br>
              <span>Responsibility</span>
              <span><ul>
                <li>{data.experienceResponsibilityli1}</li>
                <li>{data.experienceResponsibilityli2}</li>
                <li>{data.experienceResponsibilityli3}</li>
                <li>{data.experienceResponsibilityli4}</li>
                </ul></span>
            </p>
            <p className="Job_one">
              <h2 className="job_title">{data.experienceJobtitleone}</h2>
              <h3 className="companyname">{data.experienceCompanynameone}</h3>
              <span className="job_year">{data.experienceJobyearone}</span>
              <br></br>
              <br></br>
              <span>Responsibility</span>
              <span><ul>
                <li>{data.experienceResponsibilityli1_1}</li>
                <li>{data.experienceResponsibilityli1_2}</li>
                <li>{data.experienceResponsibilityli1_3}</li>
                <li>{data.experienceResponsibilityli1_4}</li>
                </ul></span>
            </p>
        </div>   
        </div>
      </div>
  )
}

export default Experience
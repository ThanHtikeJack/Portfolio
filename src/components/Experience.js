import React from "react"
import Fade from "react-reveal/Fade"
import Collapsible from 'react-collapsible';

import data from "../yourdata"

const Experience  = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-wrapper">
        <Fade bottom cascade>
              <h1>Experience</h1>
            </Fade>
            <div className="j_tech">
            <span className="company_logo">
              <img className="jtech" src={data.companyJtech} alt="J-tech"></img>
              </span>
            <Collapsible trigger="Web Develoer">
            <p className="job">
              <h3 className="companyname">
              <a className="company_link" 
                target="_blank"
                href={`${data.experienceComapanylink}`}> {data.experienceCompanynametwo}
                </a></h3>
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
            </Collapsible>
            </div>
            <div className="meglio_futuro">
            <span className="company_logo">
              <img className="megliofuturo" src={data.companyMegliofuturo} alt="J-tech"></img>
              </span>
            <Collapsible trigger="Back-End">
            <div className="border">
            <p className="job">
              <h3 className="companyname">
              <a className="company_link" 
                target="_blank"
                href={`${data.experienceComapanylinktwo}`}>{data.experienceCompanynameone}</a>
                </h3>
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
            </Collapsible>
          </div>
        </div>   
        </div>
      </div>
  )
}

export default Experience

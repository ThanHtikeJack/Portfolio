import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <p>{data.contactSubHeading}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "thanhtikesoe19989@gmail.com"
              }`}
              className="primary-btn"
            >
              Hi
              <span role="img" aria-label="Emoji">
                👋
              </span>
              <br></br>
              CONNECT WITH ME
            </a>
          </Fade>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
          © 2023 Than Htike Soe
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer

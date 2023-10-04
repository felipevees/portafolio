import React from "react";
import "./Contact.scss";

import github from "../../assets/icons/github-lg.png";
import linkedin from "../../assets/icons/linkedin-lg.png";
import whatsapp from "../../assets/icons/whatsapp-lg.png";
import gmail from "../../assets/icons/gmail-lg.png";

export function Contact() {
  return (
    <div className="Contact text-center mb-5" id="contactar">
      <div className="Contact__container container">
        <div className="d-flex justify-content-center p-5">
          <h1>Contactar</h1>
        </div>
        <div className="Contact__container__links row mb-5">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-4">
            <figure>
              <a href="https://wa.me/573172821594" target="_blank">
                <img className="icon" src={whatsapp} alt="whatsapp" />
                <h1>Whatsapp</h1>
              </a>
            </figure>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-4">
            <figure>
              <a href="mailto:juanfelipevelasquezescobar82@gmail.com">
                <img className="icon" src={gmail} alt="gmail" />
                <h1>Gmail</h1>
              </a>
            </figure>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-4">
            <figure>
              <a href="https://github.com/felipevees" target="_blank">
                <img className="icon" src={github} alt="github" />
                <h1>Github</h1>
              </a>
            </figure>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 mb-4">
            <figure>
              <a
                href="https://www.linkedin.com/in/juan-velasquez-escobar-a9a74123b/"
                target="_blank"
              >
                <img className="icon" src={linkedin} alt="linkedin" />
                <h1>Linkedin</h1>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

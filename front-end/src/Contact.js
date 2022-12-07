import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


  
const Contact = () => {
  return (
    <div>
      <h1 className="pageHeaders">
        Contact
      </h1>
      <br/>
      <br/>
      <br/>
      <div className="mockup-phone border-secondary">
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <div className="contactInfoDiv">
              <h1 class="contactHeader">Contact Me!</h1>
              <br/>
              <br/>
              <br/>
              <FontAwesomeIcon icon={faPhone} size="2xl" color="#f09ebc"/>
              <p className="contactText">(801)-123-4567</p>
              <br/>
              <FontAwesomeIcon icon={faEnvelope} size="2xl" color="#f09ebc"/>
              <p className="contactText">ameilya.designs@gmail.com</p>
              <br/>
              <FontAwesomeIcon icon={faInstagram} size="2xl" color="#f09ebc"/>
              <p className="contactText">@designs.meez</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};
  
export default Contact;
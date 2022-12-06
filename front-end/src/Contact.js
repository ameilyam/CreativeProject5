import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
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
            <h1>Contact Me!</h1>
            <FontAwesomeIcon icon={faPhone}/>
            <FontAwesomeIcon icon={faEnvelope}/>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Contact;
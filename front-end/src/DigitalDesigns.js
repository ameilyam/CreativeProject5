import React from "react";
  
const DigitalDesigns = () => {
  return (
    <div>
      <h1 className="pageHeaders">
        Digital Designs
      </h1>
      <br/>
      <br/>
      <div className="portfolio">
        <img className = "portfolioImage" src={require('./Images/Digital/digital1.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital2.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital3.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital4.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital5.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital6.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital7.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital8.PNG')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital9.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital10.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital11.png')} />
        <img className = "portfolioImage" src={require('./Images/Digital/digital12.png')} />
      </div>
      <br/>
    </div>
  );
};
  
export default DigitalDesigns;
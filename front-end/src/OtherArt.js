import React from "react";
  
const OtherArt = () => {
  return (
    <div>
      <h1 className="pageHeaders">
        Other Art
      </h1>
      <br/>
      <br/>
      <div className="portfolio">
        <img className = "portfolioImage" src={require('./Images/Art/art1.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Art/art2.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Art/art5.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Art/art7.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Art/art8.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Art/art9.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Art/art10.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Art/art11.JPG')} />
      </div>
      <br/>
    </div>
  );
};
  
export default OtherArt;
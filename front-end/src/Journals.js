import React from "react";
  
const Journal = () => {
  return (
    <div>
      <h1 className="pageHeaders">
        Journals
      </h1>
      <br/>
      <br/>
      <div className="portfolio">
        <img className = "portfolioImage" src={require('./Images/Journals/journal1.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal2.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal3.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal4.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal5.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal6.JPG')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal7.JPG')} />
        {/* <img className = "portfolioImage" src={require('./Images/Journals/journal8.jpg')} /> */}
        <img className = "portfolioImage" src={require('./Images/Journals/journal9.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal11.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal12.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal13.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal15.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal18.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal19.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal25.jpg')} />
        <img className = "portfolioImage" src={require('./Images/Journals/journal33.jpg')} />
      </div>
      <br/>
    </div>
  );
};
  
export default Journal;
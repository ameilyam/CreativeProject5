import React from "react";
  
const Home = () => {
  return (
    <div>
      <h1 className="pageHeaders">
        Home
      </h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item carousel-center relative w-full">
          <img  className="homeImage" src={require('./Images/Digital/digital5.png')}  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item carousel-center relative w-full">
          <img className="homeImage" src={require('./Images/Journals/journal33.jpg')} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item carousel-center relative w-full">
          <img className="homeImage" src={require('./Images/Signs/sign2.JPG')}  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item carousel-center relative w-full">
          <img className="homeImage" src={require('./Images/Art/art7.jpg')}  />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <h3>
        This is the home page
      </h3>
    </div>
  );
};
  
export default Home;
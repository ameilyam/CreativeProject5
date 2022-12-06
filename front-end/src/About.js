import React from "react";
import {NavLink} from 'react-router-dom';
import './App.css';

  
const About = () => {
  return (
    <div>
      <h1 className="pageHeaders">
        About
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img class ="object-scale-down w-20" src={require('./Images/profile.png')} alt="Album"/></figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title">Welcome to Designs Meez!</h2>
          <p className= "contactText">Hello! My name is Ameilya and I love creating art! I've 
            been creating art of all types for as long as I can remember, so I decided to officially create a page to show 
            off my work, and give others the opportunity to enjoy them as well!</p>
          <p className= "contactText">I'm based in Northern Utah but I absolutely love to travel, and I love drawing inspiration from all 
            of the amazing places I've been blessed to see.</p>
          <p className= "contactText">I love art in all forms, and you'll find on here specifically digital designs, hand-painted journals, 
            hand-drawn chalk signs for holidays and events, as well as acrylic paintings and other types of art.</p>
          <p className= "contactText">If you want to learn more about a specific piece or have an inquiry about a commission, feel
            free to contact me!</p>
          <h2 className= "contactText">Thanks so much for visiting my website! Xx</h2>
          <br/>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-wide justify-center"><NavLink to="../contact">Contact Me</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default About;
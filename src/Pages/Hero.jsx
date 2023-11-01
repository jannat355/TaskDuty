import React from "react";
import arrow from "../assets/eva_arrow-ios-back-fill.svg";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToTop =()=>{
    window.scroll({top:0, behavior:'smooth'})
  };
  return (
    <div className="container">
      <h1>
        <img src={arrow} alt="" />
        New Task
      </h1>

      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title">Task Title</h5>
         
          <input
            type="text"
            className="w-100 "
            placeholder="E.g Projectdefence,Assignments"
          />
        
      </div>

      <div className="field-container m-5 ">
        <h5 className="field-title">Description</h5>
         
          <input
            type="text"
            className="w-100 h-75 "
            placeholder="Briefly describe your task"
          />
        
      </div>

      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title">Tags</h5>
         
          <input
            type="text"
            className="w-100 "
            placeholder="Urgent,Imporant" 
          />
        
      </div>

    <div className="text-center">
    <button className="btn text-light m-5 alaign-items-center w-75">Done</button>
    </div>
    <Link onClick={scrollToTop} ><p className='text-center fs-4 mt-5' style={{color:'#974FD0'}}>Back to Top</p></Link>
     
    </div>
  );
};

export default Hero;

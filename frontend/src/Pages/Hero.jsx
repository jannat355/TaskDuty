import React,{useState}from "react";
import arrow from "../assets/eva_arrow-ios-back-fill.svg";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import {  toast } from 'react-toastify';
import toast from 'react-hot-toast';


const Hero = () => {
  const scrollToTop =()=>{
    window.scroll({top:0, behavior:'smooth'})
  };

  const [tasktitle,setTasktitle]=useState('');
  const [taskdescription,setDescription]=useState('');
  const [tags,setTags]=useState('');
  const navigate = useNavigate('')

  async function handleSubmit(e){
  e.preventDefault()
 try {
  const data = await axios.post('http://localhost:5050/api/user',{
   tasktitle,
   taskdescription,
   tags
  })
  console.log(data);
  if(data.status === 201){
    // alert(data.statusText)
    toast.success(data.statusText)
    navigate('/Tasks')
  }

} catch (error) {
  console.log(error);
  // alert(error.response.data.msg.message)
  
}
  }
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
            value={tasktitle} onChange={(e)=>setTasktitle(e.target.value)}
          />
        
      </div>

      <div className="field-container m-5 ">
        <h5 className="field-title">Description</h5>
         
          <input
            type="text"
            className="w-100 h-75 "
            placeholder="Briefly describe your task"
            value={taskdescription} onChange={(e)=>setDescription(e.target.value)}
          />
        
      </div>

      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title">Tags</h5>
         
          <input
            type="text"
            className="w-100 "
            placeholder="Urgent,Imporant" 
            value={tags} onChange={(e)=>setTags(e.target.value)}
          />
        
      </div>

    <div className="text-center">
     <button onClick={handleSubmit} className="btn text-light m-5 align-items-center w-75">Done</button>
    </div>
    <Link onClick={scrollToTop} ><p className='text-center fs-4 mt-5' style={{color:'#974FD0'}}>Back to Top</p></Link>
     
    </div>
  );
};

export default Hero;

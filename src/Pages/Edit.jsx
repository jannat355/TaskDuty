import React from 'react'
import '../styles/Edit.css'

const Edit = () => {
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
    <Link to ='/'><h5 className="text-primary text-center top">Back to top</h5></Link>

   
  </div>
  )
}

export default Edit
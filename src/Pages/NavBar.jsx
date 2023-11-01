import React from "react";
import { Link } from "react-router-dom";
import face from "../assets/Group 6.svg";
import taskDutyLogo from "../assets/task-duty-logo.svg";

const NavBar = () => {
  return (
    <div className="">
      <div className=" container d-flex justify-content-between align-items-center p-3  ">
        <div className="d-flex ">
          <Link to="/" className="text-decoration-none">
            <img src={taskDutyLogo} alt="" className="img-fluid"/>
          </Link>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <Link to="/Hero" className="text-decoration-none  fs-4 text-dark">
            New task
          </Link>
          <Link to="/Tasks" className="text-decoration-none fs-4 text-dark">
            
            All task
          </Link>
          <Link className="d-none d-md-block">
            <img src={face} alt=""  className="face"/>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;

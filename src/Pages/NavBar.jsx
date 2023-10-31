import React from "react";
import { Link } from "react-router-dom";
import face from "../assets/Group 6.svg";
import icon from "../assets/Group 1.svg";

const NavBar = () => {
  return (
    <div className="">
      <div className=" container d-flex justify-content-between align-items-center p-3  ">
        <div className="d-flex ">
          <Link to="/" className="text-decoration-none">
            <img src={icon} alt="" />
          </Link>

          <Link to="/" className="text-decoration-none">
            {" "}
            <h4 className="p-2 ">Task Duty</h4>
          </Link>
        </div>

        <div className="d-flex gap-5">
          <Link to="Hero" className="text-decoration-none">
            <p>New task</p>
          </Link>
          <Link to="Tasks" className="text-decoration-none">
            {" "}
            <p>All task</p>
          </Link>
          <Link>
            <img src={face} alt=""  className="face"/>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;

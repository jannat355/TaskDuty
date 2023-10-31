import React from "react";
import Plus from "../assets/Vector.svg";
import edit from "../assets/clarity_note-edit-line.svg";
import remove from "../assets/fluent_delete-24-regular.svg";
import "../styles/Tasks.css";
import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <div className="container">
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <h2>My Tasks</h2>
        <h5 className="d-flex gap-2">
          <img src={Plus} alt="" />
          <span className="ml-3">Add new Task</span>
        </h5>
      </div>
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-danger ms-3">urgent</h4>
          <div className="d-flex gap-3 me-3 my-3">
            <button
              style={{ backgroundColor: "purple" }}
              className="btn text-light"
            >
              <img src={edit} alt="" />
              Edit
            </button>

            <button className="btn delete border-radius">
              <img src={remove} alt="" />
              Delete
            </button>

            <div></div>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <h2>FinTech Website Update</h2>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-between align-items-center"></div>
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-success ms-3">Important</h4>
          <div className="d-flex gap-3 me-3 my-3">
            <button
              style={{ backgroundColor: "purple" }}
              className="btn text-light"
            >
              <img src={edit} alt="" />
              Edit
            </button>

            <button className="btn delete border-radius">
              <img src={remove} alt="" />
              Delete
            </button>

            <div></div>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <h2>Argo Website Update</h2>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-between align-items-center"></div>
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-danger ms-3">urgent</h4>
          <div className="d-flex gap-3 me-3 my-3">
            <button
              style={{ backgroundColor: "purple" }}
              className="btn text-light"
            >
              <img src={edit} alt="" />
              Edit
            </button>

            <button className="btn delete border-radius">
              <img src={remove} alt="" />
              Delete
            </button>

            <div></div>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <h2>FinTech Website Update</h2>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-between align-items-center"></div>
      <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-success ms-3">Important</h4>
          <div className="d-flex gap-3 me-3 my-3">
            <button
              style={{ backgroundColor: "purple" }}
              className="btn text-light"
            >
              <img src={edit} alt="" />
              Edit
            </button>

            <button className="btn delete border-radius">
              <img src={remove} alt="" />
              Delete
            </button>

            <div></div>
          </div>
        </div>
        <hr />
        <div className="mt-4">
          <h2>Argo Website Update</h2>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>

      <Link to="/" className="end text-center m-5">
        <h5>Back To Top</h5>
      </Link>
    </div>
  );
};
export default Tasks;

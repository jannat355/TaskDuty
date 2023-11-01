import React from "react";

import "../styles/Home.css";
import task from "../assets/Component 1.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" container ">
      <div className="row my-5 align-items-center justify-content-between">
        <div className="col-sm-12 col-lg-6">
          <h2>
            Manage Your Task on
            <p className="pod">TaskDuty</p>
          </h2>

          <p className=" my-3 1h-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolor quia, quasi quaerat placeat dicta similique blanditiis
            consequuntur autem, quod ipsam fugit voluptas quae expedita optio,
            saepe nihil odio dolore. Reprehenderit nulla, incidunt ut dolor qui
            doloremque nisi recusandae amet facere earum! Perferendis ut dolores
            explicabo ipsam. Dignissimos, a nobis!
          </p>
          <Link to="/Tasks">
            <button className="btn text-light border-radius  p-2">
              Go to My Tasks
            </button>
          </Link>
        </div>

        <div className="col-sm-12 col-lg-5">
          <img src={task} alt="" className="img-fluid " />
        </div>
      </div>
    </div>
  );
};

export default Home;

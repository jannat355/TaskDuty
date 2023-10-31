import React from "react";
import icon from "../assets/Group 1.svg";
import face from "../assets/Group 6.svg";
import "../styles/Home.css";
import task from "../assets/Component 1.svg";

const Home = () => {
  return (
    <div className=" container ">
      <div className="d-lg-flex mt-5 align-items-center ">
        <div className="w-75 ">
          <h2>
            Manage Your Task on
            <p className="pod">TaskDuty</p>
          </h2>

          <p className=" my-3 1h-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolor quia, <br /> quasi quaerat placeat dicta similique blanditiis
            consequuntur autem, <br /> quod ipsam fugit voluptas quae expedita
            optio, saepe nihil odio dolore. <br />
            Reprehenderit nulla, incidunt ut dolor qui doloremque nisi
            recusandae amet <br /> facere earum! Perferendis ut dolores
            explicabo ipsam. Dignissimos, a nobis!
          </p>
          <button className="btn text-light border-radius  p-2">
            Go to My Tasks
          </button>
        </div>

        <div className=" align-items-center">
          <img src={task} alt="" className="pic" />
        </div>
      </div>
    </div>
  );
};

export default Home;

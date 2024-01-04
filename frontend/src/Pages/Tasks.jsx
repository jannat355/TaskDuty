import React,{useState,useEffect} from "react";
// import Plus from "../assets/Vector.svg";
// import edit from "../assets/clarity_note-edit-line.svg";
// import remove from "../assets/fluent_delete-24-regular.svg";
import "../styles/Tasks.css";
import { Link } from "react-router-dom";
// import Spinner from react-router-dom;
import axios from 'axios'

const Tasks = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const fetch = await axios.get("http://localhost:5050/api/user");
      console.log(fetch.data);
      setData(fetch.data.task);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

   const handleDelete = async (userId) => {
        try {
          await axios.delete(`http://localhost:8080/api/user/${userId}`);
          navigate("/Tasks");
        } catch (error) {}
      };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <h2>My Tasks</h2>
        <h5 className="d-flex gap-2">
          <Link to="/Hero" className="text-decoration-none">
            <span className="ml-3 add">+Add new Task</span>
          </Link>
        </h5>
        </div>

         {/* {isLoading && <Spinner animation="border" />} */}
        {data.map((datum)=>{
          const{_id,tasktitle,taskdescription,tags}=datum

          return(
            <div key={_id} className="fetch">
              <div className="pass ">
              <p>{tags}</p>
              <div className="d-flex gap-2">
             <Link to='/SingleTask'> <button className=" bg">edit</button></Link>
             <button
                className="btn btn-danger w-50"
                onClick={() => handleDelete(data._id)}
              >
                delete
              </button>
              </div>
              </div>
             
              <h2>{tasktitle}</h2>
              <h4>{taskdescription}</h4>
              
              
                  
            </div>
          )
        })}


  
      
      

      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </div>
  );
};
export default Tasks;

import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SingleTask = () => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const {userId}=useParams()
    // const navigate = useNavigate(); 

    
    let getData = async () => {
        try {
          setIsLoading(true);
    
          let dataGotten = await axios.get(
            `http://localhost:5050/api/user/`
          );
          console.log(dataGotten.data);
          setData(dataGotten.data.task.msg);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      const handleDelete = async (_id) => {
        try {
          await axios.delete(`http://localhost:8080/api/user/${userId}`);
          navigate("/Tasks");
        } catch (error) {}
      };

      useEffect(() => {
        getData()
      });

  return (
    <div>
      <h2>{data.tasktitle}</h2>
      <h2>{data.taskdescription}</h2>
      <h2>{data.tags}</h2>


      
      <button
                className="btn btn-danger w-50"
                onClick={() => handleDelete(data._id)}
              >
                delete
              </button>
    </div>
  )
}

export default SingleTask
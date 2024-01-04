import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const UpdateTask = () => {
    const [tasktitle,setTasktitle]=useState('');
  const [taskdescription,setDescription]=useState('');
  const [tags,setTags]=useState('');
  const navigate = useNavigate('')


  
  return (
    <div>UpdateTask</div>
  )
}

export default UpdateTask
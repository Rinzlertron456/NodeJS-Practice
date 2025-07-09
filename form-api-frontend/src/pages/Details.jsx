import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const Details = () => {
  const location = useLocation();
  const { email,password } = location.state;
  // const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //   const fetchData=async()=>{
  //     const data = (await axios.get("http://localhost:3000/user")).data;
  //     setUserData(...data);
  //   }
  //   fetchData();
  // }, [])
  console.log("User Data in details page:-\nEmail:-",email,"\nPassword:-",password);
  
  return (
    <>
    <h1>Details:-</h1>

    </>
  )
}

export default Details
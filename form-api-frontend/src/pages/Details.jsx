import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const Details = () => {
//   const location = useLocation();
//   const { firstName, lastName, email, password, phoneNumber, address, city, state, zipCode, country } = location.state;
const [dataFetched, setDataFetched] = useState(false)
  const [userData, setUserData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    address:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
  });
  const [id, setId] = useState(0);
  const handleUserInfo = (newId) => {
    console.log("Id Entered:- ",newId);
    setId(newId);  
  }
  const getUserData=async()=>{
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        console.log("User Data:", response.data);
        setUserData(response.data);
        setDataFetched(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  return (
    <>
    <div className="id-container">
        <h1>Enter User Id for more information:-</h1>
        <input type="number" value={id} onChange={(e)=>handleUserInfo(e.target.value)}/>
        <button onClick={getUserData}>Get User Data</button>
    </div>
    {dataFetched&&<h1>Details:-</h1>}
    {dataFetched&&<form className='form-container'>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" value={userData.firstName} disabled/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" value={userData.lastName} disabled/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={userData.email} disabled/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Phone Number" value={userData.phoneNumber} disabled/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" value={userData.address} disabled/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" value={userData.city} disabled/>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" placeholder="Enter State" value={userData.state} disabled/>
                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" placeholder="Enter Zip Code" value={userData.zipCode} disabled/>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Enter Country" value={userData.country} disabled/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>}
    </>
  )
}

export default Details
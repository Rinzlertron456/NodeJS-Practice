import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const Details = () => {
  const location = useLocation();
  const { firstName, lastName, email, password, phoneNumber, address, city, state, zipCode, country } = location.state;
  // const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //   const fetchData=async()=>{
  //     const data = (await axios.get("http://localhost:3000/user")).data;
  //     setUserData(...data);
  //   }
  //   fetchData();
  // }, [])
  
  return (
    <>
    <h1>Details:-</h1>
    <form className='form-container'>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="firstName" className="form-control" placeholder="Enter First Name" value={firstName} onChange={(e)=>setData({...data,firstName:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="lastName" className="form-control" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setData({...data,lastName:e.target.value})} disabled/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setData({...data,email:e.target.value})} required disabled/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>setData({...data,password:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>setData({...data,phoneNumber:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" value={address} onChange={(e)=>setData({...data,address:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" value={city} onChange={(e)=>setData({...data,city:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" placeholder="Enter State" value={state} onChange={(e)=>setData({...data,state:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" placeholder="Enter Zip Code" value={zipCode} onChange={(e)=>setData({...data,zipCode:e.target.value})} required disabled/>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Enter Country" value={country} onChange={(e)=>setData({...data,country:e.target.value})} required disabled/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
    </>
  )
}

export default Details
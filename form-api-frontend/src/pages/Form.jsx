import React, { useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  const [data,setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    address:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
  });
  const navigate=useNavigate();
  const handleData=async(e)=>{
    e.preventDefault();
    console.log(data);
    if(data.password===data.confirmPassword){
        console.log("Password matched");
        const response = await axios.post("http://localhost:3000/form", data);
        console.log("Data submitted successfully:", response.data);
        // try {
        //     const response = await axios.post("http://localhost:3000/form", data);
        //     console.log("Data submitted successfully:", response.data);
        // } catch (error) {
        //     console.error("Error submitting data:", error);
        // }
    }
    else console.log("Password not matched");
    
    navigate("/user",{state:data});
  }
  return (
    <>
            <form className='form-container' onSubmit={handleData}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="firstName" className="form-control" placeholder="Enter First Name" value={data.firstName} onChange={(e)=>setData({...data,firstName:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="lastName" className="form-control" placeholder="Enter Last Name" value={data.lastName} onChange={(e)=>setData({...data,lastName:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={data.confirmPassword} onChange={(e)=>setData({...data,confirmPassword:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Phone Number" value={data.phoneNumber} onChange={(e)=>setData({...data,phoneNumber:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" value={data.address} onChange={(e)=>setData({...data,address:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter City" value={data.city} onChange={(e)=>setData({...data,city:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" placeholder="Enter State" value={data.state} onChange={(e)=>setData({...data,state:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input type="number" className="form-control" placeholder="Enter Zip Code" value={data.zipCode} onChange={(e)=>setData({...data,zipCode:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Enter Country" value={data.country} onChange={(e)=>setData({...data,country:e.target.value})} required/>
                </div>
                {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </>
  )
}

export default Form
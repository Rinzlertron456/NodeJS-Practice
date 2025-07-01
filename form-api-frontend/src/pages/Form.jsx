import React, { useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [data,setData] = useState({
    email:'',
    password:'',
  });
  const handleData=async(e)=>{
    e.preventDefault();
    console.log(data);
    await axios.post('http://localhost:3000/form',data);
  }
  return (
    <>
            <form className='form-container' onSubmit={handleData}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    </>
  )
}

export default Form
import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const navigate=useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const fetchAllUsersData=async()=>{
            try {
                const response = await axios.get("http://localhost:3000/users");
                setUsers(response.data);
                console.log("Users Data:", response.data);
            } catch (error) {
                console.error("Error fetching users data:", error);
            }
        }
        fetchAllUsersData();
    },[])
    const handleAddUser=()=>{
        navigate("/form");
    }
    const handleSearchUser=()=>{
        navigate("/user")
    }
  return (
    <>
    <div className="header-container">
        <h1>Users List</h1>
        <div className="btn-container">
            <button onClick={handleAddUser}>Add New User</button>
            <button onClick={handleSearchUser}>Search User By ID</button>
        </div>
    </div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Address</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Zip Code</td>
                    <td>Country</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zipCode}</td>
                            <td>{user.country}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default UserList;
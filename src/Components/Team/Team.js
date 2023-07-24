import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Adduser from './Adduser';
import Mycontext from '../../Context';
import axios from 'axios';

function Team(props) {

    const[user,setdata]=useState("")
    const{userdata}=useContext(Mycontext)
    useEffect(()=>{
        const email={
            email:userdata.email
        }
       
        axios.post('http://localhost:3040/user/getusers',email)
        .then((res)=>{
          setdata(res.data)
         
        })
        .catch((error)=>{
          console.log(error)
        })
    })
    return (
        <div className='d-flex w-100vh'>
        <Sidebar/>
        <div className='d-flex flex-column flex-wrap' style={{width:"100%"}}>
        <Navbar/>
       {user ? <div className='container'>
         <h2>Team</h2>
            <Adduser/>
            <table className='table mt-2'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Start date</th>
                    <th>Due date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(items=>
                  <tr>
                        <td>{items.firstName}{items.lastName}</td>
                        <td>full stack developer</td>
                        <td>{items.email}</td>
                        <td></td>
                        <td></td>
                        <td><button className='btn btn-danger'><i class="fa fa-trash" aria-hidden="true"></i></button></td>

                    </tr>
                       )}
                </tbody>
            </table>

        </div>:null}
        </div>
        </div>
    );
}

export default Team;
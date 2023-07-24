import React from 'react';
import Newproject from './Newproject';
import { useEffect } from 'react';
import axios from 'axios'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { useContext } from 'react';
import Mycontext from '../../Context';
import { useState } from 'react';


function Projects(props) {
    const[projectdata,setdata]=useState("")
    const{userdata}=useContext(Mycontext)
    
    useEffect(()=>{
        const email={
            email:userdata.email
        }
       
        axios.post('http://localhost:3040/user/projects',email)
        .then((res)=>{
            const completed=res.data.filter((items)=>items.status!=="Completed")
          setdata(completed)
         
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
{projectdata ? <div className='container'>
      <Newproject/>
            <table className='table mt-2'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Assignee</th>
                    <th>Status</th>
                    <th>Start date</th>
                    <th>Due date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {projectdata.map(items=>
                  <tr>
                        <td>{items.projectName}</td>
                        <td>{items.projectOwner}</td>
                        <td>{items.status}</td>
                        <td>{items.startDate}</td>
                        <td>{items.finishDate}</td>
                        <td><button className='btn btn-danger'><i class="fa fa-trash" aria-hidden="true"></i></button>
                        <button className='btn btn-warning'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>

                    </tr>)}
                    
                </tbody>
            </table>
            
            
        </div>: null}
        </div>
        </div>
    );
}

export default Projects;
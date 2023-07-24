import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import Mycontext from '../../Context';


function Newproject(props) {

const{userdata}=useContext(Mycontext)
const [project,setproject]=useState({email:userdata.email})   

const handler=(e)=>{
    const{name,value}=e.target
    setproject({...project,[name]:value})
    console.log(project)
}
const submit=(e)=>{
     e.preventDefault()
      axios.post('http://localhost:3040/user/createproject',project)
      .then((res)=>{
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })
}
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">+ New project</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div className='container mt-3'>
             <h5>Create Project</h5>
             <form className='form mt-3'>
                <div className='row'>
                <div className=' col-md-4 '>
                    <div className='form-group'>
                    <label>Name</label>
                    <input type='text' name='projectName' className='form-control' onChange={handler}></input>
                    </div>
                    <div className='form-group'>
                    <label>Project owner</label>
                    <input type='text' name='projectOwner' className='form-control' onChange={handler}></input>
                    </div>
                </div>
                
                <div className='col-md-8'>
                <div className='form-group'>
                    <label>Start date</label>
                    <input type='date' name='startDate' className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <label>Finish date</label>
                    <input type='date' name='finishDate' className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <select  name='status' className='form-control' onChange={handler}>
                        <option style={{border:'1px solid',backgroundColor:'blue'}}>New</option>
                        <option><span>In Progress</span></option>
                        <option><span>Completed</span></option>
                        <option><span>On Hold</span></option>
                        <option style={{border:'1px solid',backgroundColor:'red'}}>Cancelled</option>
                    </select>
                </div>
                </div>
                </div>
                <div>
                    <button className='btn btn-primary'  onClick={submit}>Create</button>
                </div>
                
             </form>
      </div>
    </div>
  </div>
</div>
            </div>
    );
}

export default Newproject;
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import Mycontext from '../../Context';

function Editproject(props) {
 
    const{userdata}=useContext(Mycontext)
    const [project,setproject]=useState({email:userdata.email})   
    const[editproject,setedit]=useState("")

  const handler=(e)=>{
    const{name,value}=e.target
    setproject({...project,[name]:value})
    console.log(project)
  }  

  const editdata=(items)=>{
    setedit(items)
  }

  const submit=()=>{

  }
    return (
        <div>
              <button className='btn btn-warning' onClick={()=>{editdata(props.values)}} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div className='container mt-3'>
             <form className='form mt-3'>
                <div className='row'>
                <div className=' col-md-4 '>
                    <div className='form-group'>
                    <label>Name</label>
                    <input type='text' name='projectName' className='form-control' value={editproject.projectName}  onChange={handler}></input>
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

export default Editproject;
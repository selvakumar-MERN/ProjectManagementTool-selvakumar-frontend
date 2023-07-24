import React from 'react';
import { useContext } from 'react';
import Mycontext from '../../Context';
import { useState } from 'react';
import axios from 'axios';


function Addtask(props) {

   
   
    const{userdata}=useContext(Mycontext)
    const[search,setsearch]=useState("")
    const [taskdata,setvalue]=useState({email:"selva81222@gmail.com"})
   
    
    
    
 const handler=(e)=>{
         const{name,value}=e.target
         setvalue({...taskdata,[name]:value})
         console.log(taskdata)
 }   

 const handlesearch=(e)=>{
    const value= userdata.team.filter(item => item.useremail.includes(e.target.value))
    setsearch(value)
 }

 const submit=(e)=>{
    e.preventDefault()
     axios.post('http://localhost:3040/user/createtask',taskdata)
     .then((res)=>{
       console.log(res)
     })
     .catch((error)=>{
       console.log(error)
     })
}
    return (
          <div>
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">+ New Task</button>

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
     <div className='container mt-3'>
             <h5>Create task</h5>
             <form className='form mt-3'>
                <div className='row'>
                <div className=' col-md-4 '>
                    <div className='form-group'>
                    <label>Task Name</label>
                    <input type='text' name='taskName' className='form-control' onChange={handler}></input>
                    </div>
                    <div className='form-group'>
                    <label>Project Name</label>
                    <input type='text' name='projectName' className='form-control' onChange={handler}></input>
                    </div>
                    <div className='form-group'>
                    <label>Assigned To</label>
                     <input type='text' name='assignedTo' list='assign' autoComplete='on' className='form-control' onChange={(e)=>{handler(e);handlesearch(e)}}></input>
                    {search? <datalist id='assign'>
                       { search.map(items=>
                       <option>{items.useremail}</option>)}
                
                     </datalist>:<datalist id='assign'><option>No user mATCH</option></datalist>}
                    </div>
                    <div>
                    <label>Document</label>
                     <input type='file' name='' className='form-control' onChange={handler}></input>
                    </div>
                </div>
                
                <div className='col-md-8'>
                    <div className='form-group'>
                        <label>Task Description</label>
                        <textarea name='taskDescription' className='form-control' onChange={handler}></textarea>
                    </div>
                <div className='form-group'>
                    <label>Start date</label>
                    <input type='date' name='startDate' className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <label>Finish date</label>
                    <input type='date' name='finishDate' className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <label>Status</label>
                    <select  name='status' className='form-control' onChange={handler}>
                        <option >Choose one</option>
                        <option style={{border:'1px solid',backgroundColor:'blue'}}>New</option>
                        <option><span>In Progress</span></option>
                        <option><span>Completed</span></option>
                        <option style={{border:'1px solid',backgroundColor:'red'}}>Cancelled</option>
                    </select>
                </div>
                </div>
                </div>
                <div>
                    <button className='btn btn-primary m-2'  onClick={submit}>Create</button>
                </div>
                
             </form>
      </div>
    </div>
  </div>
</div>
            </div>
    );
}

export default Addtask;
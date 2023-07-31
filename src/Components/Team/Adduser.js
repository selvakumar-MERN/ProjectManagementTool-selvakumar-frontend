import React, { useContext, useState } from 'react';
import axios from 'axios';
import Mycontext from '../../Context';

function Adduser(props) {
    const{userdata}=useContext(Mycontext)
const [error,seterror]=useState("")
const [user,setuser]=useState("")


const submit=()=>{
    const details={
          email:userdata.email,
          firstName:user.firstName,
          lastName:user.lastName,
          useremail:user.email
    }
    axios.post('https://projectmangementtool-selvakumar-backend.onrender.com/user/adduser',details)
    .then((res)=>{
     console.log(res)
    })
    .catch((error)=>{
     console.log(error)
    })
}
const search=(e)=>{
    e.preventDefault()
   const email= {
    email: document.getElementById("searchemail").value
   }
    axios.post('https://projectmangementtool-selvakumar-backend.onrender.com/user/search',email)
   .then((res)=>{
    seterror("")
     setuser(res.data)
     window.location.reload()
   })
   .catch((error)=>{
    setuser("")
     seterror(error.response.data)
   })
}
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">+ New user</button>

<div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
        <div className='container'>
            <h3>Add user</h3>
            <form className='form my-4'>
            <input id='searchemail' type='search' placeholder='email' name='email'></input>
            <button onClick={search} className='btn btn-primary'>search</button>
            </form>
           { user ? <div className='container'>
          <h5>Name: {user.firstName}{user.lastName}</h5>
           <h5>Email: {user.email}</h5>
           <button className='btn btn-warning m-2' onClick={submit}>Add user</button>
        </div>:null}
        {error ?<div style={{color:"red"}}>{error}</div>:null}
    
    </div>
  </div>
</div>
</div>
            
        </div>
    );
}

export default Adduser;
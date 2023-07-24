import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(props) {
const [sucess,setsucess]=useState("")
const [error,seterror]=useState("")
const [users,setuser]=useState({})
const [load,setload]=useState(true)
const navigate=useNavigate()
const handler=(e)=>{
    const{name,value}=e.target;
     setuser({...users,[name]:value})
     }   
const submit=(e)=>{    
    e.preventDefault();
//API fetching     
    axios.post('http://localhost:3040/user/login',users) 
    .then((res)=>{
        seterror("")
       if(res.status==="200"){
        setsucess("Login sucessfull")
       }
      window.localStorage.setItem("projecttoken",res.data)
      navigate("../Dashboard")
  
    })
    .catch((error)=>{
        setsucess("")
        const {data}=error.response
        seterror(data)
        
   })
    
}   
    return (
        <div>
            <nav className="navbar navbar-light bg-dark justify-content-between">
  <a  className="navbar-brand ml-4" href='/' style={{color:"white"}} >Project Management Tool</a>
  
  
      </nav>
        <div className='container'>
        
            <div className='row'>
                <div className='col-md-6'>
                    
                     <h1 className='mt-4'>One platform to streamline all workflows</h1>
                     <p>Your all-in-one platform to manage projects, organize work, enhance collaboration and accelerate execution across all departments.</p>
                </div>
            <div className='col-md-6'>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">

                    <div className="row">

                        <div className="col-lg-12">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>

                                <form className="user">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" onChange={handler} name='email' placeholder="Enter Email Address..."></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user" onChange={handler} name='password' placeholder="Password"></input>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                            <input type="checkbox" className="custom-control-input"></input>
                                            <label className="custom-control-label" >Remember
                                                Me</label>
                                        </div>
                                        {error !== null ? <span className='text-danger'>{error}</span> : null}
                                        {sucess !== null ? <span className='text-success'>{sucess}</span> : null}
                                    </div>
                                    <button style={{backgroundColor:"#008260",color:"white"}} onClick={(e)=>{submit(e);setload(false)}} className="btn btn-user btn-block">
                                    { load ? <span> Login</span> : <div className='spinner-border text-primary ' role='status'>
                                             </div>}
                                    </button>

                                </form>
                                <hr></hr>
                                <div className="text-center">
                                    <Link to='/forgotpassword'
                                        className="small" >Forgot Password?
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link to='/register'
                                        className="small">Create an Account!
                                    </Link>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    );
}

export default Login;
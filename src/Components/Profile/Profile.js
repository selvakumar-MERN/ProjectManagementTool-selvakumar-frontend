import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useContext } from 'react';
import Mycontext from '../../Context';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Editprofile from './Editprofile';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile(props) {
    const notify = () => toast("Image updated sucessfully");
    const{userdata}=useContext(Mycontext)
    const[imageurl,setimage]=useState("")

    function previewfiles(file){
        const reader= new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setimage(reader.result)
            
        }
    }
     
    const handlechange=(e)=>{
          const file=e.target.files[0]
          previewfiles(file)
          
    }

    const submit=(e,id)=>{
        e.preventDefault()
           const image={
               profileimage: imageurl
           }

           console.log(image)
           axios.post(`https://projectmangementtool-selvakumar-backend.onrender.com/user/upload/profile/${id}`,image)
           .then((res)=>{
              notify()
             return(res)
            
           })
           .catch((error)=>{  
             return(error)
           })
       }
    
    return (
        <div className='d-flex'>
        <Sidebar/>
        <div className='d-flex flex-column flex-wrap' style={{width:"100%"}}>
        <Navbar/>
          <div className='container' >
            <h2>Profile</h2>
            <Form className='m-4'>
                <Row >
                    <Col md={2}>
                    <img src={userdata.imageUrl} style={{borderRadius:"50%"}} width={"100px"} height={"150px"} alt='profileimage'></img>
                    <div className='m-2'>
                        <label style={{fontWeight:"bold"}}>Change Profile</label>
                        <input type='file' id='profileimage' onChange={(e)=>{handlechange(e)}} ></input>
                        <div>
                            <button className='btn btn-primary m-2 ' onClick={(e)=>{submit(e,userdata._id)}} >Upload</button>
                            <ToastContainer />
                        </div>
                    </div>
                    </Col>
                    <Col md={10}>
                        <div>
                        <label style={{fontWeight:"bold"}}>First name : </label>
                        <span style={{color:"blue"}} className='mx-1'>{userdata.firstName}</span>
                        </div>
                        <div>
                        <label style={{fontWeight:"bold"}}>Last name : </label>
                        <span style={{color:"blue"}} className='mx-1'>{userdata.lastName}</span>
                        </div>
                        <div>
                        <label style={{fontWeight:"bold"}}>Email  :</label>
                        <span style={{color:"blue"}} className='mx-1'>{userdata.email}</span>
                        </div>
                        <div>
                        <label style={{fontWeight:"bold"}}>Role  :</label>
                        <span style={{color:"blue"}} className='mx-1'>{userdata.role}</span>
                        </div>
                        <div>
                            <Editprofile />
                        </div>
                    </Col>

                </Row>
                </Form>
        </div>
        </div>
        </div>


    );
}

export default Profile;
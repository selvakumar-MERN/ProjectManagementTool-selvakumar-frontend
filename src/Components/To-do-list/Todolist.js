import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { useEffect } from 'react';
import { useState } from 'react';
import Mycontext from '../../Context';
import { useContext } from 'react';
import { FormSelect,Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import axios from 'axios';

function Todolist(props) {
    const{userdata}=useContext(Mycontext)
    const[show,setshow]=useState(false)
    const[todo,settodo]=useState("")
  const[tododata,setdata]=useState("")
  const handleshow=(item)=>{setshow(true); settodo(item)}
    const handleclose=()=>setshow(false)
    useEffect(()=>{
        const email={
            email:userdata.email
        }
       
        axios.post('http://localhost:3040/user/gettodo',email)
        .then((res)=>{
            console.log(res)
            const completed=res.data.filter((items)=>items.status!=="Completed"&& items.status!=="In review")
          setdata(completed)
         
        })
        .catch((error)=>{
          console.log(error)
        })
    },[userdata.email])

    const submit=(id)=>{
           const link={
            email:userdata.email, submittedlink:document.getElementById("githubLink").value}
           axios.post(`http://localhost:3040/user/inreview/${id}`,link)
           .then((res)=>{
              handleclose()
              // return(res)
            
           })
           .catch((error)=>{
              return(error)
           })
    }

    const completereview=(id)=>{
        const link={
            email:userdata.email, status:document.getElementById("status").value}
           axios.post(`http://localhost:3040/user/reviewedtask/${id}`,link)
           .then((res)=>{
               handleclose()
              // return(res)
              
            
           })
           .catch((error)=>{
             return (error)
           })
    }
    
    return (
        <div className='d-flex w-100vh'>
        <Sidebar/>
        <div className='d-flex flex-column flex-wrap' style={{width:"100%"}}>
        <Navbar/>
        {tododata ? <div className='container'>
      
            <table className='table mt-2'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Project Name</th>
                    <th>Assigned By</th>
                    <th>Start date</th>
                    <th>Due date</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {tododata.map(items=>
                  <tr>
                         <td>{items.taskName}</td>
                        <td>{items.projectName}</td>
                        <td>{items.assignedBy}</td>
                        <td>{items.startDate}</td>
                        <td>{items.finishDate}</td>
                        <td>{items.status}</td>
                        <td><button className='btn btn-danger m-2'><i class="fa fa-trash" aria-hidden="true"></i></button>
                        <button className='btn btn-warning m-2' onClick={()=>{handleshow(items)}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>

                    </tr>)}
                    
                </tbody>
            </table>
            
            
        </div>:null}
       {todo.status!=="waiting for review" ?
            <Modal show={show}>
            <ModalHeader>
                <ModalTitle>Task Details</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={6}>
                <label>Task Tittle</label>
                <h6>{todo.taskName}</h6>
                <label>Project Name</label>
                <h6>{todo.projectName}</h6>
                <label>Task Description</label>
                <p>{todo.taskDescription}</p>
                </Col>
                <Col md={6}>
                <label>Start Date</label>
                <p>{todo.startDate}</p>
                <label>Due Date</label>
                <p>{todo.finishDate}</p>
                <label>{todo._id}</label>
                </Col>
                <Form>
                   <FormGroup>
                    <FormLabel>Github link</FormLabel>
                    <FormControl type='text' placeholder='Enter the code link' id='githubLink' required></FormControl>
                    <FormText>Please Check before submitting for review</FormText>
                   </FormGroup>
                </Form>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button variant='primary'  onClick={()=>{submit(todo._id)}}>Submit</Button>
                <Button variant='secondary' onClick={handleclose}>close</Button>
            </ModalFooter>
        </Modal>
                :
                <Modal show={show}>
                <ModalHeader>
                    <ModalTitle>Task Details</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6}>
                    <label>Task Tittle</label>
                    <h6>{todo.taskName}</h6>
                    <label>Project Name</label>
                    <h6>{todo.projectName}</h6>
                    <label>Task Description</label>
                    <p>{todo.taskDescription}</p>
                    <label>Submitted By</label>
                    <p>{todo.assignedTo}</p>
                    </Col>
                    <Col md={6}>
                    <label>Start Date</label>
                    <p>{todo.startDate}</p>
                    <label>Due Date</label>
                    <p>{todo.finishDate}</p>
                    <label>Submitted Link</label>
                    <p>{todo.submissionlink}</p>
                    <label>Submitted On</label>
                    <p>{todo.date}</p>
                    </Col>
                    <Form>
                       <FormGroup>
                        <FormLabel>status</FormLabel>
                        <FormSelect type='text'  id='status' required>
                        <option>choose</option>
                        <option>Completed</option>
                        </FormSelect>
                        <FormText>Please review carefully</FormText>
                       </FormGroup>
                    </Form>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button variant='primary'  onClick={()=>{completereview(todo._id)}}>Submit</Button>
                    <Button variant='secondary' onClick={handleclose}>close</Button>
                </ModalFooter>
            </Modal>
                
                
                }
                </div>
        </div>
        
    );
}

export default Todolist;
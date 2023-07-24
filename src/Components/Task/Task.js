import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Addtask from './Addtask';
import { useContext ,useState, useEffect } from 'react';
import Mycontext from '../../Context';
import axios from 'axios';
import { FormSelect , Button, Col, Form, FormGroup, FormLabel, FormText, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';



function Task(props) {
    const[taskdata,setdata]=useState("")
    const{userdata}=useContext(Mycontext)
    const[show,setshow]=useState(false)
    const[todo,settodo]=useState("")

    const handleshow=(item)=>{setshow(true); settodo(item)}
    const handleclose=()=>setshow(false)
    
    useEffect(()=>{
        const email={
            email:userdata.email
        }
       
        axios.post('http://localhost:3040/user/gettask',email)
        .then((res)=>{
            console.log(res)
            const completed=res.data.filter((items)=>items.status!=="Completed")
          setdata(completed)
         
        })
        .catch((error)=>{
          console.log(error)
        })
    },[userdata.email])


    const submit =()=>{

    }
    return (
        <div className='d-flex w-100vh'>
            <Sidebar />
            <div className='d-flex flex-column flex-wrap' style={{ width: "100%" }}>
                <Navbar />
               
                {taskdata ? <div className='container'>
                <Addtask/>
      
            <table className='table mt-2'>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Project Name</th>
                    <th>Assigned To</th>
                    <th>Start date</th>
                    <th>Due date</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {taskdata.map(items=>
                  <tr>
                         <td>{items.taskName}</td>
                        <td>{items.projectName}</td>
                        <td>{items.assignedTo}</td>
                        <td>{items.startDate}</td>
                        <td>{items.finishDate}</td>
                        <td>{items.status}</td>
                        <td><button className='btn btn-danger m-2'><i class="fa fa-trash" aria-hidden="true"></i></button>
                        <button className='btn btn-warning m-2' onClick={()=>{handleshow(items)}}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>

                    </tr>)}
                    
                </tbody>
            </table>
            
            
        </div>: null}
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
                <label>Submitted Link</label>
                <p>{todo.submissionlink}</p>
                </Col>
                <Form>
                   <FormGroup>
                    <FormLabel>status</FormLabel>
                    <FormSelect type='text' placeholder='Enter the code link' id='githubLink' required>
                    <option>choose</option>
                    </FormSelect>
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
       

                </div>
            </div>
        
    );
}

export default Task;
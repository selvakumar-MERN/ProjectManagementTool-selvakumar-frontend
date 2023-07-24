import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Message.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Conversation({chat,currentuser}) {
    const[userdata,setuserdata]=useState(null)

    useEffect(()=>{
        const userId=chat?.members?.find((id)=>id!==currentuser)
        if(chat!==null){
        axios.get(`http://localhost:3040/user/${userId}`)
        .then((res)=>{
            setuserdata(res.data)
            console.log(userdata)
        })
        .catch((error)=>{
          return error
        })}
    },[chat,currentuser])
    
    return (
        <>
        <div className='message-output'></div>
            <Form >
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <Form.Control type='text' placeholder='Youe message'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Button variant='primary' type='submit' style={{width:"100%",backgroundColor:"orange"}}>
                            <i className='fas fa-paper-plane'></i>
                        </Button>
                    </Col>
                </Row>

            </Form>
          
            </>
    );
}

export default Conversation;
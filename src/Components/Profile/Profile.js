import React from 'react';
import { Button, Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Profile(props) {
    return (
        <div className='d-flex w-100vh'>
        <Sidebar/>
        <div className='d-flex flex-column flex-wrap' style={{width:"100%"}}>
        <Navbar/>
        <div className='container'>
            <h2>Profile</h2>
            <Form className='m-4'>
            <Row className='mb-2'>
                <Col md={6}>
                    <FormLabel>First Name</FormLabel>
                   <FormControl type='text' name='firstName'></FormControl>
                </Col>
                <Col md={6}>
                    <FormLabel>Last Name</FormLabel>
                   <FormControl type='text' name='lastName'></FormControl>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col md={6}>
                    <FormLabel>Email</FormLabel>
                   <FormControl type='email' name='email'></FormControl>
                </Col>
                <Col md={6}>
                    <FormLabel>Last Name</FormLabel>
                   <FormControl type='text'></FormControl>
                </Col>
            </Row>
              <Button variant='primary'>Update</Button>
            </Form>
            
        </div>
        </div>
        </div>
    );
}

export default Profile;
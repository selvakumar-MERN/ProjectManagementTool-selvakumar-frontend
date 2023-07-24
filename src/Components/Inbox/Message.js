import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Message({data,currentUserId}) {
    const[userdata,setuserdata]=useState(null)
    useEffect(()=>{
        const userId=data.members.find((id)=>id!==currentUserId)
          
        axios.get(`http://localhost:3040/user/${userId}`)
        .then((res)=>{
            setuserdata(res.data)
            
        })
        .catch((error)=>{
          return error
        })
    },)
        

    return (
        <>
          <Container>
            <h2>Chats</h2>
            <div>
                <img src={userdata ? 'profile.png': null} alt='' style={{width:"25px", height:"25px"}}></img>
                <div style={{fontSize:"0.8rem"}}>
                    <span>{userdata?.firstName}{userdata?.lastName}</span>
                </div>
            </div>
            <hr></hr>
          </Container>
          
            </>
    );
}

export default Message;
import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Message from './Message';
import { useState } from 'react';
import Mycontext from '../../Context';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Conversation from './Conversation';


function Inbox(props) {
    const [chat,setchat]=useState([])
    const{userdata}=useContext(Mycontext)
    const[currentchat,setcurrentchat]=useState(null)
    
    useEffect(()=>{
        
        axios.get(`http://localhost:3040/user/chat/${userdata._id}`)
        .then((res)=>{
            setchat(res.data)
            
        })
        .catch((error)=>{
          return error
        })
    },[userdata._id])
    return (
        <div className='d-flex w-100vh'>
        <Sidebar/>
        <div className='d-flex flex-column flex-wrap' style={{width:"100%"}}>
        <Navbar/>
                 <div className='container'>
                    <div className='row' >
                    <div className='col-md-6'>
                    {chat.map(chat=>
                            <div onClick={()=>setcurrentchat(chat)}>
                       <Message data={chat} currentUserId={userdata._id}/>
                            </div>
                        )}
                    </div>
                    <div className='col-md-6 mb-4'>
                       <Conversation chat={currentchat} currentuser={userdata._id}/>
                    </div>
                    </div>

                 </div>
        </div>
        </div>
    );
}

export default Inbox;
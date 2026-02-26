import React from 'react'
import { useUser } from '../context/userProvider';

const Chat = () => {
    const { user } = useUser(); 
    console.log(user, "user"); 
  return (
    <main> 
    <h1> Tars Chat App</h1>
    <div>

    </div>
    <div>
     {/* <h2>{username}</h2> */}
    </div>
    </main>
  )
}

export default Chat; 
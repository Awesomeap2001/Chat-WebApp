import React, { useState } from 'react'
import './Join.css';
import logo from '../../images/chat.png';
import {Link} from 'react-router-dom'

let user;

const Join = () => {

    const sendUser = () =>{
        user = document.getElementById('joinInput').value;
        document.getElementById('joinInput').value = "";
    }

    const [name, setName] = useState("")

  return (
    <div className="joinPage">
        <div className="joinContainer">
            <img src={logo} alt="logo" />
            <h1>CHAT APP</h1>
            <input type="text" id='joinInput' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)}/>
            <Link onClick={(e) => !name ? e.preventDefault() : null} to='/chat'><button onClick={sendUser} className='joinBtn'>Login</button></Link>
        </div>
    </div>
  )
}

export default Join
export {user}
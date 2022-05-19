import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let history = useNavigate();

    const handleClick = () => {
        history("/profile")
    }
  return (
    <div>
        <input type="text" placeholder='User Name'/>
        <input type="text" placeholder='Password'/>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

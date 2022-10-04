import React, { useState } from 'react'
import { TextField } from '@mui/material'
import axios from 'axios'
import './Login.css'
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom'


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false)
    const url = "signin"
    const Send = async e => {
        e.preventDefault();

        const {data} = await axios.post(url, {
            password,username
        }, { withCredentials: false });

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
        setNavigate(true)
    }
    if (navigate) {
        return <Navigate to="/Home" />
    }


    // async function Send() {
    //     let LoginRequest = {password,username}
    //     console.log(LoginRequest);

    //     let result= await fetch(url,{
    //         method: 'POST',
    //         body:JSON.stringify(LoginRequest),
    //         headers:{
    //             'Authorization': `Bearer ${localStorage.getItem("token")}`,
    //             "Content-Type":'application/json',
    //             "Accept":'application/json'
    //         }
    //     })
    //     result =await result.json()
    //     console.warn("result",result)    
    //     setNavigate(true);
    // }
    // if (navigate){
    //     return <Navigate to="Home" />
    // }

    return (
        <div className='layoutd'>
            <div className='Login'>

                <span className='title'>Login</span><br />
                <form>
                <TextField id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type your user name here" label="Username" fullWidth style={{ marginBottom: "10px", color: "red", width: "500px", marginLeft: "100px" }} /><br />
                <TextField id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password here" label="Password" fullWidth style={{ marginBottom: "10px", color: "red", width: "500px", marginLeft: "100px" }} /><br />
                <Button color='primary' variant='contained' style={{ width: "300px", marginLeft: "28%" }} onClick={Send}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;
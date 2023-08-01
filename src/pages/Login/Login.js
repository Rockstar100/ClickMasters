"use client";

import React, { useState ,useEffect } from 'react'
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components'
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message } from 'antd';
import {useDispatch} from 'react-redux'
import {signIn} from 'next-auth/react'
import {showLoading, hideLoading} from '../../redux/featuers/alertSlice'
function Login() {
   

 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const router = useRouter();
    const dispatch = useDispatch();


    const submitHandler = async (e)  => {
        e.preventDefault();
        const values = {
            email: email,
            password: password,
        };

        try {
            // dispatch(showLoading());
            const res = await axios.post('https://click-master.onrender.com/api/v1/users/login', values);
         

            // dispatch(hideLoading());
            if(res.data.success){
                localStorage.setItem("token", res.data.token);

                message.success("Login Successfull");
                router.push('/');
            } else {
                message.error(res.data.message);
            }
        } catch(error) {
            // dispatch(hideLoading());
            console.log(error);
            message.error("Invalid Credentials");
        }
    };

    const paperStyle = { padding: '20px', height: '50vh', width: '280px' };
    const labelStyle = { marginBottom: '5px', display: 'block' };
    const inputStyle = { padding: '5px',marginBottom: '15px',height:"40px", width: '100%' };
    const btnStyle = { margin: '20px auto', backgroundColor: 'black', color: 'white', padding: '5px 10px' };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white rounded-md shadow-lg" style={paperStyle}>
                <h2 className="text-center text-2xl font-bold">Login</h2>

                <form onSubmit={submitHandler}>
                    <label htmlFor="email" style={labelStyle}>Emails:</label>
                    <input className='rounded-md bg-gray-100 shadow-lg' type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" style={inputStyle} />

                    <label htmlFor="password" style={labelStyle}>Password:</label>
                    <input className='rounded-md  bg-gray-100 shadow-lg' type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" style={inputStyle} />

                    <button className='rounded-md '  type="submit" style={btnStyle}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
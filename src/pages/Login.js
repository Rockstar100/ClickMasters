import React, { useState } from 'react';
import Image from 'next/image'
import img from './f2.jpg';
import logo from './logo.png';
import axios from 'axios'
import { useRouter } from 'next/router';;
import { message } from 'antd';
import Link from 'next/link';
import {useDispatch} from 'react-redux'
import {showLoading, hideLoading} from '../redux/featuers/alertSlice'
function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
  
    const handleSubmit =async (event) => {
        event.preventDefault();
      
        const values = {
            email: email,
            password: password,
        };

        try {
            dispatch(showLoading());
            const res = await axios.post('http://localhost:8080/api/v1/users/login', values);
         

            dispatch(hideLoading());
            if(res.data.success){
                localStorage.setItem("token", res.data.token);

                message.success("Login Successfull");
                router.push('/');
            } else {
                message.error(res.data.message);
            }
        } catch(error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Invalid Credentials");
        }

    };

    return (
        <div className="grid grid-cols-2 gap-4 border-t-4 px-20 border-black-900 shadow-xl" >
        <div>        <Image
         src={img} alt="Image"width='50vw' height='100vh'

    /></div>
   
        <div className='my-auto'><Image
        className='mx-auto items-center'
      src={logo}
      alt="logo"
     
      width='50vw' height='20vh'
       marginTop='-90px'
    />
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8 	">
     
           
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                    required
                />
            </div>
          
           
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password:</label>
                <input
                    type='password'
                    id="password"
                    value={password}
                    onChange={(event) => setpassword(event.target.value)}
                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                    required
                />
            </div>
            {/* <button type="submit" className=" bg-black" >Submit</button> */}
            <p className='mb-3'><a href='#'>Forgot Password</a></p>

            <p className='mb-3'>New User?<Link href="/Register">Sign In</Link></p>
            <button  className="px-4 py-2 text-white bg-black rounded-md hover:bg-black-600  focus:outline-none focus:ring-2 focus:ring-black-500">
                Submit
            </button>
        
      
        </form></div>
        </div>
    );
}

export default Login;

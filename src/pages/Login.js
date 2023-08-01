import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import Link from 'next/link'
import { showLoading, hideLoading } from '../redux/featuers/alertSlice';
import bg_img from './bg-Login.jpg';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const values = {
      email: email,
      password: password,
    };

    try {
      dispatch(showLoading());
      const res = await axios.post('https://click-master.onrender.com/api/v1/users/login', values);

      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        message.success('Login Successful');
        router.push('/');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error('Invalid Credentials');
    }
  };

  return (
    <div className="flex justify-end items-center min-h-screen p-5 " style={{ backgroundImage: `url(${bg_img.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',paddingRight:'100px' }}>
      <div className="border-2 border-white p-8">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-5 mr-5 bg-white" style={{width: "100%" , marginRight:'200px'}}>
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
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
              required
            />
          </div>
          <p className='mb-3'><a href='#'> Forgot Password</a></p>
          <p className='mb-3'>New User?<Link href="/Register">Sign In</Link></p>
          <button className="px-4 py-2 text-white bg-black rounded-md hover:bg-black-600  focus:outline-none focus:ring-2 focus:ring-black-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

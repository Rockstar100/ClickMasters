import React from 'react'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Sidenav from './Sidenav'
import HomePage from './HomePage'
import ProtectedRoutes from '../Components/ProtectedRoutes'
import PublicRoute from '../Components/PublicRoute'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import {useDispatch } from 'react-redux';
import { getUser } from '../redux/featuers/userSlice';
import Spinner from '../Components/Spinner'
import axios from 'axios'
import PhotographerSideNav from './photographer/PhotographerSideNav'

const inter = Inter({ subsets: ['latin'] })

const styleForButton = {
  height: '50px',
  width: '50px'
}

// if (typeof document !== 'undefined') {
//   console.log(document.location.href);
// }

export default function Home() {
  const { loading } = useSelector(state => state.alert)
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.user)
  const [userData, setUserData] = useState();
const callAboutPage = async () => {
 
      try {
          const res = await axios.post('https://click-master.onrender.com/api/v1/users/getUserData',
          { token: localStorage.getItem('token') },
           {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem('token'),
              },
              credentials: 'include'
          });
         
          if(res.data.success){
            setUserData(res.data.data)
            dispatch(getUser(res.data.data))
        }
        else{
            localStorage.clear()
            
        }
        
    } 
     catch (error) {
        localStorage.clear()
        console.log(error);

    }
   
  };
     




  useEffect(() => {
    const token = localStorage.getItem('token');
      if(!users){
          callAboutPage();
          if (!token) {
            router.push('/Login');
          }
          else {
            router.push('/');
          }
      }
  }, [users,getUser])

 

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();



  const handleLogin = (token) => {
    // Store token in local storage and set isAuthenticated state to true
    localStorage.setItem('token', token);
    
  };

  const handleLogout = () => {
    // Remove token from local storage and set isAuthenticated state to false
    localStorage.removeItem('token');
   
  };

  return (
    <Wrapper>
      <Sidenav />
      {/* {loading ? (
        <Spinner />
      ) : ( */}
        <ProtectedRoutes>
        
            <HomePage />
          
        </ProtectedRoutes>
      {/* )} */}
    </Wrapper>
    // <PhotographerSideNav />  
  );
}

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col `
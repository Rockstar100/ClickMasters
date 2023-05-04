import React from 'react'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Login from './Login/Login'
import Link from 'next/link'
import Sidenav from './Sidenav'
import HomepageMap from './HomepageMap'
import HomePage from './HomePage'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { AuthContext } from './AuthContext'
const inter = Inter({ subsets: ['latin'] })
const styleForButton = {
  height: '50px',
  width: '50px'
}
if(typeof document !== 'undefined') {
  // you are safe to use the "document" object here
  console.log(document.location.href);
}


export default function Home() {

  // const currentLocation = window.location.href;

  // const maps = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: ,
  //   zoom:  ,
  // });
  const router = useRouter()
  const {currentUser} = useContext(AuthContext)

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // perform login and set isAuthenticated state to true
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // perform logout and set isAuthenticated state to false
    setIsAuthenticated(false);
  };

  console.log(currentUser)


  return (
   
    <Wrapper>
     <HomePage/>

   </Wrapper>
  );
}

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

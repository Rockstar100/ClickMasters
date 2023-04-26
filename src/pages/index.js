import React from 'react'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Login from './Login'
import Link from 'next/link'
import Sidenav from './Sidenav'
import HomepageMap from './HomepageMap'
import HomePage from './HomePage'
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


  // const maps = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: ,
  //   zoom:  ,
  // });
  

  return (
   
    <Wrapper>
     
      <HomePage />

   </Wrapper>
  );
}

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

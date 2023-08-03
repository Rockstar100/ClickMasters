import { useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { Avatar, Grid } from '@mui/material';
import HomepageMap from './HomepageMap'
import logo from './logo.png'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CameraIcon from '@mui/icons-material/Camera';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Sidenav from './Sidenav'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../redux/featuers/userSlice';
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })
const styleForButton = {
  height: '50px',
  width: '50px'
}



export default function HomePage() {
  const [user, setUser] = useState(null)

  const router = useRouter()

 
  const  users  = useSelector(state => state.user)
 
  

  const [userData, setUserData] = useState();


  return (
   
    <Wrapper>
     
     <Sidenav/>
      {/* <Map id="map" /> */}
      <MapWrapper>
      <HomepageMap id ="map"/>
      {/* <Sidenav /> */}
      
      <Header>
        
        {/* <UberLogo src= "https://theuniques.in//images/clickmasterslogo.png" /> */}
        <Profile>
      
       
          <Avatar sx={{ width: 80, height: 80 }} style={{margin:"20px"}} src ={users?.user?.profie_pic}></Avatar>   <Name>{users.user?.name}</Name>

          {/* <UserImage
          src={user && user.photoUrl}
          /> */}
        </Profile>
       
      </Header>
      <ActionButtons>
      <ActionButtonWrapper>
      <Link href ="/Search">

      <ActionButton>
       <AddAPhotoIcon  style={styleForButton} />
       Hire a Photographer</ActionButton>
      </Link>
      </ActionButtonWrapper>  
      <ActionButton>
       {users?.user?.isCameraman == true ?(
      <Link href ="/photographer/Login">
       <ActionButton>

      <CameraIcon style={styleForButton} />
      Login as Photographer</ActionButton>
      </Link>) : ( 
        <Link href ="/photographerRegister">
        <ActionButton>
 
       <CameraIcon style={styleForButton} />
       Become a Photographer</ActionButton>
       </Link>

      )
       }
      </ActionButton>
      <Help>
      <Link href ="/Help">
      <ActionButton>
      <SupportAgentIcon style={styleForButton}/>
      Help</ActionButton></Link>
      </Help>
      </ActionButtons>
      </MapWrapper>

    
  
   </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen 
 `


const ActionItems = tw.div`
h-96

`
const Header = tw.div `
flex justify-between items-center
`
const UberLogo = tw.img`
h-20 ml-10 mt-3
`
const Profile = tw.div`
flex items-center mr-10 mt-3
`
const UserImage =tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`
const Name = tw.div`
   w-20`
const ActionButtons = tw.div `
flex mt-5
`
const ActionButton = tw.div `
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl` 
// const ActionButtonImage =tw.img`
// h-3/5
// `
const InputButtons = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex item-center mt-8
`
const ActionButtonWrapper = tw.div`
flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`

const Help = tw.div`
flex-1 m-1
h-80 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`

const MapWrapper = tw.div`
flex-1 h-screen overflow-hidden`
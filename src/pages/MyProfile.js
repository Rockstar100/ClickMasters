import React, { useMemo } from 'react'
import tw from "tailwind-styled-components"
import { Typography, Grid,Avatar } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChartHorizontal from './ChartHorizontal';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { auth, provider } from "./firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { PhotographerDetail } from '../Data/PhotographerDetail';
import Sidenav from './Sidenav'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../redux/featuers/userSlice';
import profilepic from './profilepic.png';
import { data } from 'autoprefixer';
import { CldImage } from 'next-cloudinary';
import ProtectedRoutes from '../Components/ProtectedRoutes';
function MyProfile() {

 
    
    const [userData, setUserData] = useState();

    const callAboutPage = async () => {
 
        try {
            const res = await axios.post('http://localhost:8080/api/v1/users/getUserData',
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
          
      } 
       catch (error) {
         
          console.log(error);
  
      }
     
    };
 useEffect(() => {
       
            callAboutPage();
      
    }, [data])
    
 
    const router = useRouter()
 
    const StyleChart = { width: '100%' }
    const GridStyle = { width: '70%' }
    const [user, setUser] = useState(null)
   

    return (
        
        <Wrapper>
            <Sidenav />
            <ProtectedRoutes>
           
            <div className="flex font-sans">
                <div className="flex-none w-48 relative">
                    {/* <Image src={userData?.profile_pic} alt=""  className="absolute inset-0 w-auto h-full object-cover" loading="lazy" /> */}
                    <Avatar className="absolute inset-0 w-auto h-full object-cover" variant='square' sx={{ width: 100, height: 100 }} src ={userData?.profie_pic}></Avatar>
                </div>
                <form className="flex-auto p-6" method="GET">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-4xl font-semibold text-slate-900">
                            {/* {user && user.name} */}
                            {userData?.name}
                        </h1>

                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-6">
                            User
                        </div>
                    </div>
                    <Typography > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem a iste. Sed soluta modi sunt necessitatibus accusamus eius delectus amet aspernatur. Nisi possimus cumque praesentium atque ipsam, sint assumenda.\</Typography>

                    <div className="flex mt-9">
                        <StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon />
                    </div>

                    <div className="flex space-x-4 mt-10 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Edit Profile
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                Switch as a Photographer
                            </button>
                        </div>

                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>


                </form>

            </div>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            > <Grid style={GridStyle} >
                    <div class=" mt-12 p-8">
                        <h2 class="text-lg font-bold mb-4">Contact Information</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            <div>
                                <h3 class="text-md font-bold mb-2">Email</h3>
                                <p class="text-gray-700">{userData?.email}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Phone</h3>
                                <p class="text-gray-700">{userData?.phone}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Address</h3>
                                <p class="text-gray-700">{userData?.address.address}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Other Information</h3>
                                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis gravida semper. Donec accumsan velit eu arcu blandit, ut venenatis lacus dictum. </p>
                            </div>
                        </div>
                    </div>
                    <div style={StyleChart}>

                  </div>  
                  </Grid>
            </Grid ></ProtectedRoutes>
        </Wrapper>


    )
}

const Wrapper = tw.div`
    flex
    container
    p-5
    mt-10
    flex-col
    items-center
    justify-center
    h-full
    w-full
    py-2
    px-4

    ml-5
    `

export default MyProfile

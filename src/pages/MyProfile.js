import React from 'react'
import tw from "tailwind-styled-components"
import { Typography, Grid } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChartHorizontal from './ChartHorizontal';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import { auth, provider } from "./firebase"
import { onAuthStateChanged,signOut } from 'firebase/auth';


function MyProfile() {
    const StyleChart = { width: '100%' }
    const GridStyle = { width: '70%' }
    const [user, setUser] = useState(null)
    const router = useRouter()
    useEffect(() => {
       return onAuthStateChanged(auth, user => {
            if (user) {
                setUser({
                    name: user.displayName,
                    email: user.email,
                    adress: user.adress,
                    phone: user.phone,
                    photoUrl: user.photoURL,

                }
                )
            } else {
                setUser(null)
            }
        })
    }, [])
    
    return (
        <Wrapper>
        
            <div className="flex font-sans">
                <div className="flex-none w-48 relative">
                    <img src={user && user.photoUrl} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-4xl font-semibold text-slate-900">
                        {user && user.name}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            <CurrencyRupeeIcon /> 10/-
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-6">
                            Proffesional Photographer
                        </div>
                    </div>
                    <Typography >Me bhot achi photography krti hu bs pose marna nhi aat ah :) Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem a iste. Sed soluta modi sunt necessitatibus accusamus eius delectus amet aspernatur. Nisi possimus cumque praesentium atque ipsam, sint assumenda.\</Typography>

                    <div className="flex mt-9">
                        <StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon />
                    </div>

                    <div className="flex space-x-4 mt-10 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Edit Profile
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                Switch as a User
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
                                <p class="text-gray-700">{user && user.email}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Phone</h3>
                                <p class="text-gray-700">{user && user.phone}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Address</h3>
                                <p class="text-gray-700">{user && user.adress}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Other Information</h3>
                                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis gravida semper. Donec accumsan velit eu arcu blandit, ut venenatis lacus dictum. </p>
                            </div>
                        </div>
                    </div>
                    <div style={StyleChart}>
                        <ChartHorizontal />
                    </div></Grid>
            </Grid >
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

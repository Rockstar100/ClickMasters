
import React, { useMemo } from 'react'
import tw from "tailwind-styled-components"
import { Typography, Grid } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChartHorizontal from './ChartHorizontal';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { auth, provider } from "./firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { PhotographerDetail } from '../Data/PhotographerDetail';
import swal from 'sweetalert';
import Sidenav from './Sidenav'
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { getUser } from '../redux/featuers/userSlice';
import { message } from 'antd';
import axios from 'axios';
function PhotographerProfile() {

   
    const router = useRouter()
    const { details } = router.query
    const params = useParams();
    const [photographer, setPhotographer] = React.useState([]);
    const [data, setData] = useState([])
    const [user, setUser] = useState(null)
    const[date,setDate]=useState()
    const [Time,setTime]=useState()
    const [isAvailable, setIsAvailable] = useState()
   
  
    const { id } = router.query
   
    const getSelectedCamerman = async () => {
        try {
          const res = await axios.post("http://localhost:8080/api/v1/cameraman/getSelectedCameraman",
          {cameramanId:id},
         {
              headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
              },

            }
                );
          
          if (res.data.success) {
            setData(res.data.data)
          }
        }
        catch (error) {
          console.log(error);
        }
      }
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
              setUser(res.data.data)
              
             
          }
         
      } 
       catch (error) {
        
          console.log(error);
    
      }
     
    };
    const handleAvailable = async () => {
        try {
          const res = await axios.post("http://localhost:8080/api/v1/users/booking-avilability", {
            cameramanId: query.cameramanId,
            date, Time
          }, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
            },
          });
          if (res.data.success) {
            setIsAvailable(true)
            message.success(res.data.message)
          }
          else {
            message.error(res.data.message)
          }
      
        }
        catch(error){
          console.log(error)
        }
      
      
       }

    useEffect(() => {
        getSelectedCamerman ()
        callAboutPage()

        

    }, [id])
    if (!id) return null; // check if query object is not empty

    const handleBooking = async () => {
      try{
        setIsAvailable(true)
        // if(!date && !Time){
        //   return alert("Please select date and time")}
        const res = await axios.post("http://localhost:8080/api/v1/users/bookCameraman", 
        {cameramanId: id,
          userId: user._id,
          cameramanInfo: data,
          userInfo: user,
          date: "2021-10-10",
          time: "10:00",
          
        }, 
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
          }
        }
  
        )
        if(res.data.success){
          message.success("Cameraman hired",res.data.message)
        }
        else{
          message.error("Error while hiring")
        }
  
  
      }
      catch(error){
        console.log(error)
  
      }
    }
    const Click = (e) => {
        e.preventDefault();
        swal({
          title: "Are you sure?",
          text: "You want to hire this photographer!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
           
            swal("Notification was Sent to photographer.Be in touch for Further Details ", {
              icon: "success",

            });
          } else {
            swal("You have cancelled the hiring process!");
          }
        });
      }

    // console.log(name)

    const StyleChart = { width: '100%' }
    const GridStyle = { width: '70%' }
    
  

    return (
        <Wrapper>
            <Sidenav />

            <div className="flex font-sans">
                <div className="flex-none w-48 relative">
                    <img src={data?.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-4xl font-semibold text-slate-900">
                            {data?.name}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            <CurrencyRupeeIcon /> {data?.price}/h
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-6">
                            Proffesional Photographer
                        </div>
                    </div>
                    <Typography >{data?.description }</Typography>

                    <div className="flex mt-9">
                        <StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /><StarOutlineIcon />
                    </div>

                    <div className="flex space-x-4 mt-10 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                           
                            <Buttons onClick={Click} className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Hire
                            </Buttons>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                Message
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
                                <p class="text-gray-700">{data?.email}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Phone</h3>
                                <p class="text-gray-700">{data?.phone}</p>
                            </div>
                            <div>
                                <h3 class="text-md font-bold mb-2">Address</h3>
                                <p class="text-gray-700">{data?.address?.state}</p>

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
const Buttons = tw.button`
h-10 px-6 font-semibold rounded-md bg-black text-white`

export default PhotographerProfile


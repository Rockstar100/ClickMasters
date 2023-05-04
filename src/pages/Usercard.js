import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import tw from 'tailwind-styled-components'
import "../styles/Home.module.css"
// import { ProfessionalPhotographer } from './api/ProfessionalPhotographer';
import { Avatar, Grid, Paper, TextField, Button, Typography } from '@mui/material'
import { useEffect,useState } from 'react'
import Sidenav from './Sidenav'
import Link from 'next/link'
import MyProfile from './MyProfile';
import { PhotographerDetail } from '../Data/PhotographerDetail';
import swal from 'sweetalert';

export default function Usercard() {
    const [photographer, setPhotographer] = React.useState([]);
    
    useEffect(()=>{
    
        setPhotographer(PhotographerDetail)
     
    })
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



  return (

    <Wrapper>
<Sidenav/>
<Inside >
  <Insider >
  {photographer.map((PhotographerDetail => (
    <Box >
    
      {/* <div class="grid-cols-1 lg:col-span-3 items-center justify-center ">
        <div class="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-black-100 p-4"> */}
        <Avatar sx={{ width: 100, height: 100 }} src ={PhotographerDetail.image}></Avatar>
        {/* </div>
      </div> */}

      <div class="col-span-1 lg:col-span-9">
        <div class="text-center lg:text-left">
          <h2 class="text-2xl font-bold text-zinc-700">{PhotographerDetail.name}</h2>
          <p class="mt-2 font-semibold text-zinc-700">{PhotographerDetail.address}</p>
          <p class="mt-4 text-zinc-500">{PhotographerDetail.description}</p>
        </div>

        <div class="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
          <div>
            <p class="font-bold text-zinc-700">{PhotographerDetail.experience}</p>
            <p class="text-sm font-semibold text-zinc-700">Experience</p>
          </div>

          <div>
            <p class="font-bold text-zinc-700">{PhotographerDetail.rating}</p>
            <p class="text-sm font-semibold text-zinc-700">Ratings</p>
          </div>

          <div>
            <p class="font-bold text-zinc-700">{PhotographerDetail.price}/h</p>
            <p class="text-sm font-semibold text-zinc-700">Price</p>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-4">
          <Buttons onClick={Click}
           >Hire</Buttons>
          <Link
        href={{
          pathname: "/PhotographerProfile",
          query: {
              id: PhotographerDetail.id,
              // drop: drop

          }
      }}        onClick={() => {
          alert("Redirecting to Photographers profile");
        }}
      >
 <Buttons  >View Profile</Buttons>      </Link>

         
        </div>
      </div>
      
    </Box>
    )))}
  </Insider>
</Inside>
    </Wrapper>

  );
}
const Wrapper = tw.div`
flex-1 flex flex-col bg-gray-100 
`
const Inside = tw.div`
flex  p-1 justify-center items-center mt-10
`
const Insider = tw.div`
w-full rounded-xl  shadow-2xl shadow-black-200 bg-white m-2
`
const Box = tw.div`
grid grid-cols-1 gap-6 lg:grid-cols-12 border-2 border-black-500 bg-white p-4 rounded-xl shadow-2xl shadow-black-200 m-5
`
const Buttons = tw.button`
w-full rounded-xl border-2 border-black-500 bg-white px-3 py-2 font-semibold text-black-500 hover:bg-black hover:text-white
`
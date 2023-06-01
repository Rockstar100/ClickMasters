import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import tw from 'tailwind-styled-components'
import "../styles/Home.module.css"
// import { ProfessionalPhotographer } from './api/ProfessionalPhotographer';
import { Avatar, Grid, Paper, TextField, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import Link from 'next/link'
import MyProfile from './MyProfile';
import { PhotographerDetail } from '../Data/PhotographerDetail';
import swal from 'sweetalert';
import axios from 'axios';
import { useRouter } from 'next/router';
import { message } from 'antd'

export default function Usercard() {


  const [user, setUser] = useState([])
  const router = useRouter();
  const detail = router.query

  const [data, setData] = useState([])
  const [isAvailable, setIsAvailable] = useState(false)
  const [date, setDate] = useState("")
  const [Time, setTime] = useState("")
  const [ID, setID] = useState("")
  const [datas, setDatas] = useState([])

  const getAllCamerman = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/users/getAllCameraman',

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
      if (res.data.success) {
        setUser(res.data.data)


      }

    }
    catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {


    getAllCamerman()
    callAboutPage()
    

  }, [])
  const handleBooking = async (id) => {
    try {
      const resp = await axios.post("http://localhost:8080/api/v1/cameraman/getSelectedCameraman", {
        cameramanId: id
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      });
  
      if (resp.data.success) {
        setDatas(resp.data.data);
      } else {
        throw new Error("Error while hiring");
      }
  
      const res = await axios.post("http://localhost:8080/api/v1/users/bookCameraman", {
        cameramanId: id,
        userId: user._id,
        cameramanInfo: datas,
        userInfo: user,
        startdate: detail.sdate,
        enddate: detail.edate,
        eventType: detail.detail,
        Address: detail.pick,
        time: "12:00",
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        }
      });
  
      if (res.data.success) {
        message.success("Cameraman hired", res.data.message);
      } else {
        throw new Error("Error while hiring");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while processing your request");
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



  return (

    <Wrapper>
      <Sidenav />
      <Inside >
        <Insider >
          {data.map((data => (
            <Box >

              {/* <div class="grid-cols-1 lg:col-span-3 items-center justify-center ">
        <div class="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-black-100 p-4"> */}
              <Avatar sx={{ width: 100, height: 100 }} src={data?.image}></Avatar>
              {/* </div>
      </div> */}

              <div class="col-span-1 lg:col-span-9">
                <div class="text-center lg:text-left">
                  <h2 class="text-2xl font-bold text-zinc-700">{data.name}</h2>
                  <p class="mt-2 font-semibold text-zinc-700">{data.address.state}</p>
                  <p class="mt-4 text-zinc-500">{data.description}</p>
                </div>

                <div class="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
                  <div>
                    <p class="font-bold text-zinc-700">{data.experience}</p>
                    <p class="text-sm font-semibold text-zinc-700">Experience</p>
                  </div>

                  <div>
                    <p class="font-bold text-zinc-700">{data.rating}</p>
                    <p class="text-sm font-semibold text-zinc-700">Ratings</p>
                  </div>

                  <div>
                    <p class="font-bold text-zinc-700">{data.price}/h</p>
                    <p class="text-sm font-semibold text-zinc-700">Price</p>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-2 gap-4">
                  <Buttons onClick={() => { handleBooking(data._id) }}
                  >Hire</Buttons>
                  <Link
                    href={{
                      pathname: "/PhotographerProfile",
                      query: {
                        id: data._id,
                        startdate: detail.sdate,
                        enddate: detail.edate,
                        eventType: detail.detail,
                        Address: detail.pick,

                        // drop: drop

                      }
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
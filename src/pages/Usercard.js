import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import tw from "tailwind-styled-components";
import  PersistentDrawerLeft from './Sidenav';

import "../styles/Home.module.css";
// import { ProfessionalPhotographer } from './api/ProfessionalPhotographer';
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Link from "next/link";
import MyProfile from "./MyProfile";
import { PhotographerDetail } from "../Data/PhotographerDetail";
import swal from "sweetalert";
import axios from "axios";
import { useRouter } from "next/router";
import { message } from "antd";
// import {my pic} from '../public/my pic.jpg'

export default function Usercard() {
  const [user, setUser] = useState([]);
  const router = useRouter();
  const detail = router.query;

  const [data, setData] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [ID, setID] = useState("");
  const [datas, setDatas] = useState([]);

  const getAllCamerman = async () => {
    try {
      const res = await axios.get(
        "https://click-master.onrender.com/api/v1/users/getAllCameraman",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.data.success) {
        setData(res.data.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const callAboutPage = async () => {
    try {
      const res = await axios.post(
        "https://click-master.onrender.com/api/v1/users/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          // credentials: 'include'
        }
      );
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCamerman();
    callAboutPage();
  }, []);

  const handleBooking = async (id) => {
    console.log(id);
    try {
      const resp = await axios.post(
        "https://click-master.onrender.com/api/v1/cameraman/getSelectedCameraman",
        {
          cameramanId: id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (resp.data.success) {
        setDatas(resp.data.data);
      } else {
        throw new Error("Error while hiring");
      }

      const res = await axios.post(
        "https://click-master.onrender.com/api/v1/users/bookCameraman",
        {
          cameramanId: id,
          userId: user._id,
          cameramanInfo: datas,
          userInfo: user,
          startdate: detail.sdate,
          enddate: detail.edate,
          eventType: detail.detail,
          Address: detail.pick,
          time: "12:00",
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.data.success) {
        message.success("Cameraman hired", res.data.message);
      } else {
        throw new Error("Error while hiring");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while processing your request");
    }
  };
  const Click = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to hire this photographer!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          "Notification was Sent to photographer.Be in touch for Further Details ",
          {
            icon: "success",
          }
        );
      } else {
        swal("You have cancelled the hiring process!");
      }
    });
  };

  return (
    <>
   <PersistentDrawerLeft/>
    <div className=" flex flex-col justify-center " style={{ padding: "30px" ,paddingLeft : "350px", paddingTop:"50px", backgroundColor:"white" }}>
      {data.map((photographer) => (
        <div
          className="photographer-card shadow bg-body-tertiary rounded "
          key={photographer._id}
          style={{
            width:"70%",
            border: "1px solid black",
            marginBottom: "10px",
            borderRadius: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <div className="flex flex-row">
          <div className="image-wrapper rounded overflow-hidden">
            <img className=" shadow "
              style={{ width: "200px", height: "200px", borderRadius: "200px" }}
              src={photographer?.profilePic}
              alt="Photographer Avatar"
            />
          </div>
          <div className="m-5 pl-5">
          <div className="details">
            <h2 className="text-2xl font-bold text-zinc-700">
              {photographer.name}
            </h2>
            <p className="mt-2 font-semibold text-zinc-700">
              {photographer.address.state}
            </p>
            <p className="mt-4 text-zinc-500">{photographer.description}</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
            <div>
              <p className="font-bold text-zinc-700">
                {photographer.experience}
              </p>
              <p className="text-sm font-semibold text-zinc-700">Experience</p>
            </div>

            <div>
              <p className="font-bold text-zinc-700">{photographer.rating}</p>
              <p className="text-sm font-semibold text-zinc-700">Ratings</p>
            </div>

            <div>
              <p className="font-bold text-zinc-700">{photographer.price}/h</p>
              <p className="text-sm font-semibold text-zinc-700">Price</p>
            </div>
          </div>
          </div>
        
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {/* <button className="hire-button" onClick={() => handleBooking(photographer._id)}>Hire</button>
            {/* <Link> */}
            {/* <button className="profile-button">View Profile</button> */}
            {/* </Link> */}
            <div class="mt-6 grid grid-cols-2 gap-4">
              {/* <Buttons onClick={() => { handleBooking(data._id) }} */}
              <Buttons onClick={() => handleBooking(photographer._id)}>
                Hire
              </Buttons>

              {/* >Hire</Buttons> */}
              <Link
                href={`/PhotographerProfile?id=${photographer._id}&startdate=${detail.sdate}&enddate=${detail.edate}&eventType=${detail.detail}&Address=${detail.pick}`}
                // href={{
                //   pathname: "/PhotographerProfile",
                //   query: {
                //     id: data._id,
                //     startdate: detail.sdate,
                //     enddate: detail.edate,
                //     eventType: detail.detail,
                //     Address: detail.pick,

                //     // drop: drop

                //   }
                // }}
              >
                <Buttons style={{ backgroundColor: "black", color: "white" }}>
                  View Profile
                </Buttons>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
const Wrapper = tw.div`
flex-1 flex flex-col bg-gray-100 
`;
const Inside = tw.div`
flex  p-1 justify-center items-center mt-10
`;
const Insider = tw.div`
w-full rounded-xl  shadow-2xl shadow-black-200 bg-white m-2
`;
const Box = tw.div`
grid grid-cols-1 gap-6 lg:grid-cols-12 border-2 border-black-500 bg-white p-4 rounded-xl shadow-2xl shadow-black-200 m-5
`;
const Buttons = tw.button`
w-full rounded-xl border-2 border-black-500 bg-white px-3 py-2 font-semibold text-black-500 hover:bg-black hover:text-white
`;

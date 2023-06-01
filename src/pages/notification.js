// import * as React from 'react';
import axios from "axios";
import SideNav from './Sidenav';
import Notify from './Notify';
import React, { useEffect, useState } from "react";
import { getUser } from "../redux/featuers/userSlice";
import { set } from 'mongoose';



export default function Userlist() {
  const [users, setUsers] = useState(null);
  const [notification, setNotification] = useState(null)
  const [length, SetLength] = useState(null)
  const [nullNotification, setNullNotification] = useState(false)
  useEffect(() => {
    if (!users) {
        callAboutPage();
    }
  }, [users, getUser])
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
        console.log("notifiaction card", res.data.data)
        if (res.data.success) {
            // setUserData(res.data.data)
             setNotification(res.data.data.notification)
             SetLength(res.data.data.notification.length)
            // dispatch(getUser(res.data.data))
        }
        else {
            localStorage.clear()

        }

    }
    catch (error) {
        localStorage.clear()
        console.log(error);

    }

};


  return (
    <>
   <SideNav/>
  
    <Notify notification={notification} length={length}/>
    </>
  );
}


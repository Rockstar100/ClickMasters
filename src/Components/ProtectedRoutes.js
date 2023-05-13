import React, {useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/featuers/alertSlice';
import { setUser } from '../redux/featuers/userSlice';

function ProtectedRoutes({ children }) {

  const router = useRouter();


  // const getUser = async () => {
  //   try {
  //     const data = JSON.parse(localStorage.getItem('user'));
  //     // dispatch(showLoading())
  //     const res = await axios.post(
  //       'http://localhost:8080/api/v1/users/getUserData',
  //       { token: localStorage.getItem('token') },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.getItem('token')
  //         }
  //       }
  //     );
      
      
  //     // dispatch(hideLoading())
  //     if (res.data.success) {
  //       dispatch(setUser(res.data.data))
        
  //     } else {
  //       router.push('/Login/Login')
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     // dispatch(hideLoading())
  //   }
   
  // }
  
  useEffect(() => {
    if (typeof localStorage !== 'undefined' && !localStorage.getItem('token')  ) {
      router.push('/Login/Login');
     
      
    } else {
      // getUser();
    }

  }, []);



  return <>{children}</>;
}

export default ProtectedRoutes;

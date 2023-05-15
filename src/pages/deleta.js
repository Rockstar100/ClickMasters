import React, { use } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { DatePicker, TimePicker, message } from 'antd';
import { useSelector } from 'react-redux'
import moment from 'moment';
import { set } from 'mongoose';
function deleta() {
  const [data, setData] = useState([]);
  const { query } = useRouter();
  const [user, setUser] = useState();
  const[date,setDate]=useState()
  const [Time,setTime]=useState()
  const [isAvailable, setIsAvailable] = useState()
 

  // const { user } = useSelector(state => state.user)

  const getSelectedCamerman = async () => {
    try {
      if (!query.cameramanId) return; // check if query object is not empty
      const res = await axios.post("http://localhost:8080/api/v1/cameraman/getSelectedCameraman", {
        cameramanId: query.cameramanId
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      });
     
      if (res.data.success) {
        setData(res.data.data)
      }
    } catch (error) {
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
    getSelectedCamerman()
    callAboutPage()
  }, [query])

  if (!query.cameramanId) return null; // check if query object is not empty

  const handleBooking = async () => {
    try{
      setIsAvailable(true)
      if(!date && !Time){
        return alert("Please select date and time")}
      const res = await axios.post("http://localhost:8080/api/v1/users/bookCameraman", 
      {cameramanId: query.cameramanId,
        userId: user._id,
        cameramanInfo: data,
        userInfo: user,
        date: date,
        time: Time,
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

  return (
    <div>
      <h1>Deletar</h1>
      {
        data && (
          <div>
            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.gender}</h1>
            <DatePicker format="DD-MM-YYYY" 
           
            onChange={(value)=>
            { setIsAvailable(false)
              setDate(moment(value).format("DD-MM-YYYY"))}} />
            <TimePicker format="HH:mm" 
         
             onChange={()=>{
                setIsAvailable(false)
              setTime(
                "20:00"
                
               )
             }} />
            {/* <button onClick={handleAvailable}>Check Availability</button> */}
            {/* {isAvailable && <button onClick={handleBooking}>Book</button>} */}
            <button onClick={handleBooking}>Book</button>
          </div>
        )
      }
    </div>
  )
}

export default deleta

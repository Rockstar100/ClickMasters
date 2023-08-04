import React from 'react';
import {message} from 'antd';
import axios from "axios";
// import { Table } from 'react-bootstrap';
import { useState , useEffect} from 'react';

const DataTable = ({ data }) => {

  const[bookings,setBookings]=useState([])
  const Bookings = async () => {
      try{
          const res = await axios.get("https://click-master.onrender.com/api/v1/cameraman/cameraman-bookings", 
          {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem('token'),
              },

      })
     
      if(res.data.success){
          setBookings(res.data.data)
      }

      }
      catch(error){
          console.log(error)
      }
  }
  useEffect(() => {
      Bookings()
  }, [])
  // console.log("booking status",bookings)
  
  const handleAccept = async (record, status) => {
        
    // console.log("hey",record.id , status)
  
    try{
        const res = await axios.post("https://click-master.onrender.com/api/v1/cameraman/update-status", {
    
            bookingId:record._id,
            status,
      
    }
    , {
        headers:{
            Authorization: "Bearer " + localStorage.getItem('token'),

        }
    })
    console.log("hogya",res)
    if(res.data.success){
        message.success(res.data.message)
        Bookings()
    }


    }
    catch(error){
        console.log(error)
        message.error("Something went wrong")
    }
}


  if (!data || data.length === 0) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f8f8f8'
        }}
      >
        <h1 style={{ color: '#999999', fontSize: '24px' }}>No Bookings</h1>
      </div>
    );
  }

  return (
    <div
     
    >
      <div className="table-responsive " style={{borderTop: "2px solid grey" , marginTop:"30px"}}>
      <table class="table"   style={{  width:'80vw' , marginTop:"40px" ,marginLeft:"90px"}}
    >
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Avatar</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Start from</th>
      <th scope="col">End at</th>


    </tr>
  </thead>
  <tbody>

            {data.map((row, index) => (
              <tr scope="row" className='text-center' key={index}>
                <td  >{index + 1}</td>
                <td>
                  <img
                    src={row.imageUrl}
                    alt=""
                    className="w-10 h-10 rounded-full "
                  />
                </td>
                <td >{row.name}</td>
                <td >{row.Address}</td>
                <td >{row.Phone}</td>
                <td >{row.startDatetime}</td>
                <td >{row.endDatetime}</td>
                <td>   <div>
                {row.status === "pending" && (
                  <div>
                         <button onClick={()=>handleAccept(row, 'approved')} style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', marginRight:'5px' }}>Accept</button>
                      <button onClick={()=>handleAccept(row, 'rejected')} style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Reject</button>

                  </div>
                ) }
               </div> </td>
              </tr>
            ))}
          </tbody>
     </table>
      </div>
    </div>
  );
};

export default DataTable;

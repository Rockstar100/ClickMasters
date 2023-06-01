import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import { Table, message } from 'antd';
import moment from 'moment';
const PhotographerBooking = () => {
    const [data, setData] = useState([]);
    const[bookings,setBookings]=useState([])
    const Bookings = async () => {
        try{
            const res = await axios.get("http://localhost:8080/api/v1/cameraman/cameraman-bookings", 
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
    const handleAccept = async (record, status) => {
        
        try{
            const res = await axios.post("http://localhost:8080/api/v1/cameraman/update-status", {
                bookingId:record._id,
                status
        }
        , {
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),

            }
        })
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
   



    const columns = [
        {
            tittle:'ID',
            dataIndex:'_id',
          
        },
        {
            tittle:'Name',
            dataIndex:'name',
            render : (text,record) =>(
               <span> {record.cameramanInfo.name}</span>
            )
        },
        {
            tittle:'Email',
            dataIndex:'email',
            render : (text,record) =>(
                <span> {record.cameramanId.email}</span>
             )
    
        },
        {
            tittle:'Date&Time', 
            dataIndex:'date',
            render : (text,record) =>(
                <span> {moment(record.date).format('YYYY-MM-DD')}
                {moment(record.Time).format('HH:mm:ss')}
                </span>
                
                )
        },
        {
            tittle:'Status',
            dataIndex:'status',
            // render : (text,record) =>(
            //     <span> {record.status}</span>
            //     )
        },
        {
            tittle:'Action',
            dataIndex:'action',
            render : (text,record) =>(
               <div>
                {record.status === "pending" && (
                  <div>
                         <button onClick={()=>handleAccept(record, 'approved')} style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', marginRight:'5px' }}>Accept</button>
                      <button onClick={()=>handleAccept(record, 'reject')} style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Reject</button>

                  </div>
                ) }
               </div>
                )


        }
        
    ] 
  return (
    // <div><h1>PhotographerBooking</h1>\
    <>
<div style={{paddingLeft:'60px',paddingRight:'60px', backgroundColor:'#ffff'}} >
    <div  >
    <Box sx={{ bgcolor: 'black', height: '15vh' }} >
        <Typography px={3} pt={2} variant="h6" color={'white'} fontWeight="bold" >Hello Priyanshi!!</Typography>
        <Typography px={3} pb={2} variant="h8" color={'white'} >Hope You are doing Great!!!!</Typography>
    </Box>
   </div>
 <Table rowClassName={()=>'editable-row'} dataSource={bookings} bordered columns={columns} />
 </div>
    </>
  )
}

export default PhotographerBooking






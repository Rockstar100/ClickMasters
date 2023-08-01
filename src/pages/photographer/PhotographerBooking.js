import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import PhotographerSidenav from "./PhotographerSideNav";
import { Table, message } from 'antd';
import Calender from './Calender';
import moment from 'moment';
const PhotographerBooking = () => {
    const [data, setData] = useState([]);
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
   console.log("booking",bookings)
    useEffect(() => {
        Bookings()
    }, [])
    console.log("booking status",bookings)
    const handleAccept = async (record, status) => {
        
        try{
            const res = await axios.post("https://click-master.onrender.com/api/v1/cameraman/update-status", {
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
    console.log(columns)
  return (
    // <div><h1>PhotographerBooking</h1>\
        <>
        {/* <PhotographerSidenav/> */}
<div style={{paddingLeft:'60px',paddingRight:'60px', paddingTop:'70px', backgroundColor:'#ffff'}} >
    <div  >
    <Calender data={bookings}/>
   </div>
 <Table rowClassName={()=>'editable-row'} dataSource={bookings} bordered columns={columns} />
 </div>
    </>
  )
}

export default PhotographerBooking






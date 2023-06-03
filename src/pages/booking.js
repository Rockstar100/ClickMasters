import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Table } from 'antd';
import moment from 'moment';
const booking = () => {
    const [data, setData] = useState([]);
    const[bookings,setBookings]=useState([])
    const Bookings = async () => {
        try{
            const res = await axios.get("https://click-master.onrender.com/api/v1/users/user-bookings", {
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
    
] 
 
  return (
    <div>
        <h1>List</h1>
        <Table dataSource={bookings} columns={columns} />
        
    </div>
  )
}

export default booking
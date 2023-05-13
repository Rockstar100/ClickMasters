import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, message } from 'antd';
function photographer() {

  const [user,setUser] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8080/api/v1/admin/getAllCameraman',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          withCredentials: true
        }
      );
    


      if (res.data.sucess) {
        
        setUser(res.data.data)
      }

    }

    catch (error) {
      console.log(error)
    }
  } 
  // const handleAccountStatus = async (record,status) => {
  //   const { cameramanids, status } = req.body;
    
  //   try {
  //     const res = await axios.post(
  //       'http://localhost:8080/api/v1/admin/changeAccountStatus',
  //       {
  //         cameramanid: record._id, status: status
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         }

  //       }
  //      )
  //      console.log(status)
  //       if(res.data.success){
  //         message.success(res.data.message)
  //       }

  //   } 
  //   catch (error) {
  //     console.log("mera",error)


  //   }
  // }  
  const handleAccountStatus = async (record, status) => {
    console.log(record)
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/admin/changeAccountStatus',

        {
          cameramanid:record._id,userId:record.userId, status: status
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
     
      if(res.data.success){
        message.success(res.data.message)
       
      }
    } catch (error) {
      console.log("mera",error)
      message.error(error.response.data.message)
    }
  } 
  useEffect(() => {
  getData()
}, [])

const columns = [ 
  {
    title: 'Name',
    dataIndex: 'name',

  },
  {
    tittle : 'Email',
    dataIndex : 'email'
  },
  {
    tittle : 'Phone',
    dataIndex : 'phone'
  },
  {
    tittle : 'Created At',
    dataIndex : 'createdAt'
  },
  {
    tittle : 'Actions',
    dataIndex : 'actions',
    render : (text, record) => (
      <div className='d-flex'>
        {record.status === 'pending' ?(<button className='btn btn-primary' onClick={()=>handleAccountStatus(record, 'approved')}>
          Accept</button>) :( <button className='btn btn-primary'>Reject</button>)}
        {/* <button className='btn btn-primary' onClick={()=>handleAccountStatus(record, 'approved')}>Accept</button>
        <button className='btn btn-danger'>Delete</button> */}
      </div>

    ),
  },  

]

  return (
    <>
    <div>All photographer</div>
    <Table columns={columns}  dataSource={user} />
    </>
  )
}

export default photographer
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'antd';

function Users() {

  const [user,setUser] = useState([]);
  
    const getData = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8080/api/v1/admin/getAllUsers',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials: true
          }
        );
         
      
        
        if (res.data.sucess) { 
          setUser(res.data.data);
        }


      }

      catch (error) {
        console.log(error)
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
    title : 'Email',
    dataIndex : 'email'
  },
  {
    title : 'Phone',
    dataIndex : 'phone'
  },
  {
    title : 'Created At',
    dataIndex : 'createdAt'
  },
  {
    title : 'Actions',
    dataIndex : 'actions',
    render : (text, record) => (
      <div className='d-flex'>
        <button className='btn btn-danger'>Delete</button>
      </div>

    ),
  },  

]

  return (
    <>
    {/* <div>All users</div> */}
    <Table columns={columns} dataSource={user} />
    </>

  )
}

export default Users
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function UserDetail() {

  const [data,setData] = useState([]);
  
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
          setData(res.data.data);
        }


      }

      catch (error) {
        console.log(error)
      }
    }
    
    const deleteUser = async (id) => {
      console.log(id,"hiiii");
      try {
        const res = await axios.delete('http://localhost:8080/api/v1/admin/deleteUser', {
          data: { userId: id },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
          withCredentials: true
        });
    
        if (res.data.success) {
          alert('User Deleted');
        }
      } catch (error) {
        console.log(error);
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
        
       
        <button onClick={()=> deleteUser(record._id)} className='btn btn-danger'> <DeleteIcon/></button>
      </div>

    ),
  },  

]

  return (
    <>
    {/* <div>All users</div> */}
    <Table columns={columns} dataSource={data} />
    </>

  )
}


export default UserDetail
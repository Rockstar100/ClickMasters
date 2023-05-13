import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

function deleta() {
  const [data, setData] = useState([]);
  const { query } = useRouter();

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

  useEffect(() => {
    getSelectedCamerman()
  }, [query])

  if (!query.cameramanId) return null; // check if query object is not empty

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
          </div>
        )
      }
    </div>
  )
}

export default deleta

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Calender from './Calender';
import PhotographerTable from './PhotographerTable';


const PhotographerBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://click-master.onrender.com/api/v1/cameraman/cameraman-bookings", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      });

      if (response.data.success) {
        setBookings(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async (record, status) => {
    try {
      const response = await axios.post("https://click-master.onrender.com/api/v1/cameraman/update-status", {
        bookingId: record._id,
        status,
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      });

      if (response.data.success) {
        message.success(response.data.message);
        fetchBookings();
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  
  console.log("data",bookings)
//   const columns = [
//     {
//       title: 'Address',
//       dataIndex: 'Address',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'userInfo.phone',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'userInfo.email',
//     },
//     {
//       title: 'Date & Time',
//       dataIndex: 'time',
//       render: (text, record) => (
//         <span>
//           {moment(record.time).format('YYYY-MM-DD')}
//           {moment(record.time).format('HH:mm:ss')}
//         </span>
//       ),
//     },
//     {
//       title: 'Status',
//       dataIndex: 'status',
//     },
//     {
//       title: 'Action',
//       dataIndex: 'action',
//       render: (text, record) => (
//         <div>
//           {record.status === 'pending' && (
//             <>
//               <button
//                 onClick={() => handleAccept(record, 'approved')}
//                 style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', marginRight: '5px' }}
//               >
//                 Accept
//               </button>
//               <button
//                 onClick={() => handleAccept(record, 'reject')}
//                 style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}
//               >
//                 Reject
//               </button>
//             </>
//           )}
//         </div>
//       ),
//     },
//   ];

  return (
    <div style={{ paddingLeft: '60px', paddingRight: '60px', paddingTop: '150px', backgroundColor: '#ffffff' }}>
      <div  >
    <Calender data={bookings}/>
   </div>
   <PhotographerTable data = {bookings}/>
    </div>
  );
};

export default PhotographerBooking;

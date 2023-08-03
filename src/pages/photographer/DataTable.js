import React from 'react';
import { Table } from 'react-bootstrap';

const DataTable = ({ data }) => {
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
                         <button onClick={()=>handleAccept(record, 'approved')} style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px', marginRight:'5px' }}>Accept</button>
                      <button onClick={()=>handleAccept(record, 'reject')} style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Reject</button>

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

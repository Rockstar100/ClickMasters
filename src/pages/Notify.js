import React from 'react';

function NotificationComponent(notification, length) {
  const data = notification;

  return (
    <div>
      <div>
        {notification.length === 0 || notification.length == null ? (
          <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
            <h1 style={{ color: '#999999', fontSize: '24px' }}>No new notification</h1>
          </div>
        ) : (
          <div style={{ backgroundColor: '#ffffff', paddingTop: '50px', paddingBottom: '20px', paddingLeft: '80px', paddingRight: '80px' }}>

            {data.notification.map(notify => (
              <div style={{ border: '1px solid black', marginBottom:'10px', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '30px', paddingRight: '30px' }}>
                <div key={notify.type} style={{ display: 'flex', marginBottom: '20px' }}>
                  <div style={{ flex: 1, marginRight: '20px' }}>
                    <h1 style={{ color: '#333333', fontSize: '24px', fontWeight: '700', textTransform: 'capitalize', marginBottom: '0px' }}>{notify.type}</h1>
                    <p style={{ color: '#555555', fontSize: '17px', marginBottom: '20px' }}>{notify.message}</p>
                    <div>
                      <p><strong>Booking ID:</strong> {notify.data.bookingId}</p>
                      {/* <p><strong>Status:</strong> {notify.data.status}</p> */}
                      <p><strong>Cameraman ID:</strong> {notify.data.cameramanId}</p>
                    </div>
                  </div>
                  <div style={{ flex: 1, margin: '20px', marginTop: '40px' }}>
                    <div>
                      <p ><strong>Name:</strong> {notify.data.name}</p>
                      <p><strong>User ID:</strong> {notify.data.userId}</p>
                      <p><strong>Date:</strong> {notify.data.date}</p>
                    </div>
                    <div>
                      <p><strong>Time:</strong> {notify.data.time}</p>
                      <p><strong>Location:</strong> {notify.data.location}</p>
                    </div>
                  </div>
                  <div style={{ flex: 'none', marginLeft: '0px', alignSelf: 'center' }}>
                    {/* <a href={notify.onclickPath} style={{ color: '#000000', textDecoration: 'none', marginRight: '10px', border: '1px solid black', padding: '10px 20px', borderRadius: '5px' }}>Go to booking</a> */}
                    <button style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Cancel</button>
                  </div>
                </div>
              </div>
            ))}

          </div>

        )}
      </div>

    </div>
  );
}

export default NotificationComponent;

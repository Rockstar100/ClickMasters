import React,{useEffect,useState} from 'react';
import axios from 'axios';
import PhotographerSideNav from './PhotographerSideNav';

import PhotographerBooking from './PhotographerBooking';


const Homepage = () => {
    const [userData, setUserData] = useState();

    const callAboutPage = async () => {
 
        try {
            const res = await axios.post('https://click-master.onrender.com/api/v1/cameraman/getData',
            { token: localStorage.getItem('token') },
             {
                 headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                },
                credentials: 'include'
            });
            
            if(res.data.success){
          
              setUserData(res.data.data)
              console.log(userData)
              
          }
          else{
              localStorage.clear()
              
          }
          
      } 
       catch (error) {
          localStorage.clear()
          console.log(error);
  
      }
     
    };
       

  
  
  
    useEffect(() => {
        
            callAboutPage();
        
    }, [])


  return (
<><PhotographerSideNav/>



hello</>
  )
}

export default Homepage
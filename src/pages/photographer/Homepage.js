import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Homepage = () => {
    const [userData, setUserData] = useState();

    const callAboutPage = async () => {
 
        try {
            const res = await axios.post('http://localhost:8080/api/v1/cameraman/getData',
            { token: localStorage.getItem('token') },
             {
                 headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                },
                credentials: 'include'
            });
            console.log(res.data.data)
            if(res.data.success){
              setUserData(res.data.data)
              
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
       
  console.log(userData)
  
  
  
    useEffect(() => {
        
            callAboutPage();
        
    }, [])


  return (
    <div>Homepage </div>
  )
}

export default Homepage
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation';
import axios from 'axios'
function photographerprofile() {
    const user = useSelector(state => state.user)
    const params = useParams();
    const [cameraman,setCameraman] = useState(null);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setCPassword] = React.useState('');
    const [name, setname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [gender, setGender] = React.useState('female');
    
    const getCameraman = async () => {
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/cameraman/getCameramanInfo',
                {userId: params.id},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (res.data.success) {
                setCameraman(res.data.data)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
            const values = {
                name: name,
                email: email,
                password: password,
    
              
              };
    
        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/cameraman/updateCameramanInfo',
                {...values, userId: user._id},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            if (res.data.success) {
                setCameraman(res.data.data)
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (!cameraman) {
            getCameraman();
        }

    }, [])

  return (
    <>
    <div>photographerprofile</div>
    {
    cameraman && 
    (
      
                        <form
                      
                        onSubmit={{handleSubmit}}

                    >

                        <label for="name">Name:</label>
                        <input type="text" value={name} onInput={ e=>setname(e.target.value)} id="name" name="name" /><br />

                        <label for="email">Email:</label>
                        <input type="email"value={email} onInput={ e=>setEmail(e.target.value)} id="email" name="email" /><br />

                        <label for="password">Password:</label>
                        <input type="password" value={password} onInput={e=>setPassword(e.target.value)} id="password" name="password" /><br />

                        <input type="submit" value="Submit" />
              </form>
             
    )
    }
    </>

  )
}

export default photographerprofile

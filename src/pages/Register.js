import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/featuers/alertSlice';
import Image from 'next/image';
import img from './f2.jpg';
import logo from './logo.png';
// import bg_img from './bg-Login.jpg';
import bg_img from './BG_Gif.gif';

function Form() {
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState({
        address: '',
        state: '',
        pinCode: '',

    });
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [profileimg, setprofileimg] = useState(null);
    const [profileimgUrl, setprofileimgUrl] = useState(null);
    const [uploadingImg, setUploadingimg] = useState(false);
    const [imgpreview, setimgpreview] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();
  

    const handleImage = async (event) => {
        const file = event.target.files[0];
        if (file.size > 1048576) {
            return alert("File is too big, Image should less than 1mb!");

        }
        else {
            setprofileimg(file);
            setimgpreview(URL.createObjectURL(file));
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "Profile");
            formData.append("cloud_name", "dghpjm2df");
            try {
                setUploadingimg(true);
                const res = await axios.post(
                    "https://api.cloudinary.com/v1_1/dghpjm2df/image/upload",
                    formData
                );
                
                setprofileimgUrl(res.data.secure_url);
               
               
            } catch (error) {
                console.log(error);
                setUploadingimg(false);
            }
           



        }
        


    }
    console.log(profileimgUrl)

    const submitHandler = async (event) => {

        event.preventDefault();
       

        // handleImage(event);
      
        const values = {
            name: Name,
            email: email,
            password: password,
            phone: phoneNumber,
            address: Address,
            profie_pic: profileimgUrl,



        };
        

        try {

            dispatch(showLoading());
            const res = await axios.post('https://click-master.onrender.com/api/v1/users/register', values)
            dispatch(hideLoading());
       
            if (res.data.success) {

                message.success("User registered successfully")
                router.push('/Login');

            }
            else {
                message.error(res.data.message)
            }

        }
        catch (error) {
            dispatch(hideLoading());
            console.log(error)
            message.error("Something went wrong")

        }

    };

  return (
    <div className="flex justify-end items-center min-h-screen " style={{ backgroundImage: `url(${bg_img.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',paddingRight:'100px' }}>  
        <div className="border-2 border-black mt-5">
        <div className="grid p-5 ">
        
       

            <form onSubmit={submitHandler} className="max-w-lg mx-auto mb-8 bg-white p-5" style={{width: "100%" , marginRight:'200px'}} >
              <div className="mb-4">
                <label htmlFor="first-name" className="block mb-2 font-bold text-gray-700"> Name:</label>
                <input
                  type="text"
                  id="first-name"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                  required
                />
              </div>
              <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="PhoneNumber" className="block mb-2 font-bold text-gray-700">Phone:</label>
                        <input
                            type='tel'
                            id="PhoneNumber"
                            value={phoneNumber}
                            onChange={(event) => setphoneNumber(event.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first-name" className="block mb-2 font-bold text-gray-700"> Address:</label>
                        <input
                            type="text"
                            id="Address"
                            value={Address.address}
                            onChange={(event) => setAddress({ ...Address, address: event.target.value })}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last-name" className="block mb-2 font-bold text-gray-700">State:</label>
                        <input
                            type="state"
                            id="state"
                            value={Address.state}
                            onChange={(event) => setAddress({ ...Address, state: event.target.value })}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="PinCode" className="block mb-2 font-bold text-gray-700">PinCode:</label>
                        <input
                            type='tel'
                            id="PinCode"
                            value={Address.pinCode}
                            onChange={(event) => setAddress({ ...Address, pinCode: event.target.value })}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Password:</label>
                        <input
                            type='password'
                            id="password"
                            value={password}
                            onChange={(event) => setpassword(event.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="profilepic" className="block mb-2 font-bold text-gray-700">Upload Profile Pic:(JPG,PNG only)</label>
                        <input
                            type='file'
                            id="profilepic"
                            accept='image/*'
                            onChange = {(event)=>handleImage(event)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                            required
                        />
                    </div>
              <button className="px-4 py-2 text-white bg-black rounded-md hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-black-500">
                Submit
              </button>
            </form>
          </div>
        </div>
    
    </div>
  );
}

export default Form;

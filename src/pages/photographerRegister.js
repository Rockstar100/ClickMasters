import { useState, useEffect } from 'react';
import Image from 'next/image'
import imgs from './img.png';
import logo from './logo.png';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';;
import { message } from 'antd';
import {useDispatch} from 'react-redux'
import {showLoading, hideLoading} from '../redux/featuers/alertSlice'
import { getUser } from '../redux/featuers/userSlice';
function photographerRegister() {
  
  const dispatch = useDispatch()
 
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState({
        address: '',
        state: '',
        pinCode: '',

    });
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [AdharNumber, setAdharNumber] = useState('');
    const [AdharFile, setAdharFile] = useState('');
    const [PanNumber, setPanNumber] = useState('');
    const [PanFile, setPanFile] = useState('');
    const [showOtherDetails, setshowOtherDetails] = useState(true);
    const [TermsCondition, setTermsCondition] = useState('');
    const [userData, setUserData] = useState(null)
    const[experience, setExperiance] = useState("")
    const [price,Setprice] = useState("")

    // const dispatch = useDispatch()
    // const state = useSelector(state => state);
    const state = useSelector(state => state)
    const callAboutPage = async () => {

        try {
            const res = await axios.post('https://click-master.onrender.com/api/v1/users/getUserData',
            { token: localStorage.getItem('token') },
             {
                 headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                },
                // credentials: 'include'
            });
          
            if(res.data.success){
              setUserData(res.data.data)
              
          }
          
      } 
       catch (error) {
         
          console.log(error);
    
      }
     
    };
    useEffect(() => {
       
            callAboutPage();
      
    }, [])

  
    
  
  const router = useRouter();
    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },

        { label: 'Prefer not to say', value: 'prefer-not-to-say' }
    ];
    const handleSubmit = async(event) => {
        // setshowOtherDetails(false)
        event.preventDefault();
        const values = {
            name: userData.name,
            email: userData.email,
            password: password,
            gender : selectedValues,
            phone: userData.phone,
            address: userData.address,
            adharNumber: AdharNumber,
            adharFile: AdharFile,
            panNumber: PanNumber,
            panFile: PanFile,
            userId: userData._id,
            profilePic: userData.profie_pic,
            experience: experience,
            price: price

        };
        try {

            dispatch(showLoading());
            const res = await axios.post('https://click-master.onrender.com/api/v1/users/apply-cameraman', { ...values})
            dispatch(hideLoading());
          
            if (res.data.success) {

                message.success("User registered successfully")

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
    const [selectedValues, setSelectedValues] = useState([]);
    const handleClick = () => {
        if(showOtherDetails===true){
        setshowOtherDetails(false);
        }
        else{
            setshowOtherDetails(true);
        }

    }
    function handleChange(event) {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            
            setSelectedValues([value]);
        }
   

    };
    const handleClicked = () => {
        router.push('/')
    }


    

    if (showOtherDetails) {
        return (
            <>

                <div className="grid grid-cols-2 gap-4 border-t-4 p-20 border-black-900 shadow-xl" >
                    <div>    
                         <Image
                    src={imgs} alt="Image"
                />
                </div>
                         

                    <div>
                    <Image
                    className='mx-auto items-center'
                    src={ logo}
                    alt="logo"

                    width={200} height={200}
                />
                        
                       
                         <h1 className="max-w-lg mx-auto mb-8 text-xl	">Apply as a Photographer</h1>
                        {/* <h3></h3> */}
                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8 	">
                            
                            <div className="mb-4">
                                <label htmlFor="first-name" className="block mb-2 font-bold text-gray-700"> Name:</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    value= {userData?.name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block mb-2 font-bold text-gray-700" >Gender:</label>
                                {genderOptions.map(option => (
                                    <div className='flex-row' key={option.value}>
                                        <input
                                            type="checkbox"
                                            id={option.value}
                                            name="gender"
                                            value={option.value}
                                            checked={selectedValues.includes(option.value)}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor={option.value}>{option.label}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={userData?.email}
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
                                    value={userData?.phone}
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
                                    value={userData?.address.address}
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
                                    value={userData?.address.state}
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
                                    value={userData?.address.pinCode}
                                    onChange={(event) => setAddress({ ...Address, pinCode: event.target.value })}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 font-bold text-gray-700">Enter Your Experience</label>
                                <input
                                    type='Experiance'
                                    id="Experiance"
                                    value={experience}
                                    onChange={(event) => setExperiance(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="price" className="block mb-2 font-bold text-gray-700">Set Your Charges(Hourly)</label>
                                <input
                                    type='Experiance'
                                    id="Experiance"
                                    value={price}
                                    onChange={(event) => Setprice(event.target.value)}
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
                            {/* <button type="submit" className=" bg-black" >Submit</button> */}
                            <div className="mb-6 flex ">
                                <input

                                    type='checkbox'
                                    id="TermsCondition"
                                    value={TermsCondition}
                                    onChange={(event) => setTermsCondition(event.target.value)}
                                    className="px-3 py-2 border rounded-md outline-none"
                                    required
                                />  <label htmlFor="TermsCondition" className=" ml-6 block mb-2 font-bold text-gray-700">  Agree to our each and every <a href='#'> Terms & Condition</a></label>

                            </div>

                            <p className='mb-3'>Already a user?<a href='#'>Log In</a></p>
                            <button onClick={handleClick} className="px-4 py-2 text-white bg-black rounded-md hover:bg-black-600  focus:outline-none focus:ring-2 focus:ring-black-500">
                               Next
                            </button>


                        </form>
                    </div>
                </div></>
        )
    }
    else {
        return (
            <>

                <div className="grid grid-cols-2 gap-4 border-t-4 p-20 border-black-900 shadow-xl" >
                    <div>     
                    <Image
                    src={imgs} alt="Image"
                />
                    </div>

                    <div>

                        <img className='mx-auto items-center' src={logo} style={{ height: '20vh ', marginTop: '-50px' }}
                        />
                        <h1 className="max-w-lg mx-auto mb-8 text-xl	">Photographer Verification Form</h1>
                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8 	">
                        <div className="mb-6">
                                <label htmlFor="AdharNumber" className="block mb-2 font-bold text-gray-700">Adhar Card Number:</label>
                                <input
                                    type='tel'
                                    id="AdharNumber"
                                    value={AdharNumber}
                                    onChange={(event) => setAdharNumber(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                                 <label htmlFor="AdharFile" className="block mb-2 font-bold text-gray-700">Adhar Card :</label>
                                 <input
                                   type="file"
                                    id="AdharFile"
                                    value={AdharFile}
                                    onChange={(event) => setAdharFile(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="PanNumber" className="block mb-2 font-bold text-gray-700">Pan Card Number:</label>
                                <input
                                    type='tel'
                                    id="PanNumber"
                                    value={PanNumber}
                                    onChange={(event) => setPanNumber(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                                 <label htmlFor="AdharFile" className="block mb-2 font-bold text-gray-700">Pan Card Photo:</label>
                                 <input
                                   type="file"
                                    id="PanFile"
                                    value={PanFile}
                                    onChange={(event) => setPanFile(event.target.value)}
                                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black-500"
                                    required
                                />
                            </div>
                            <button onClick={handleClick} className="px-4 py-2 text-white bg-black rounded-md hover:bg-black-600  focus:outline-none focus:ring-2 focus:ring-black-500">
                                Back
                            </button>
                            <button onClick={handleClicked}  className="px-4 py-2 text-white bg-black rounded-md hover:bg-black-600  focus:outline-none focus:ring-2 focus:ring-black-500">
                                Apply Now
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

}

export default photographerRegister

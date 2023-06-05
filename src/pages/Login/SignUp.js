"use client";

import { Avatar, Grid, Paper, TextField, Button, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import tw from 'tailwind-styled-components'
import axios from 'axios'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { message } from 'antd';
import {useDispatch} from 'react-redux'
import {showLoading, hideLoading} from '../../redux/featuers/alertSlice'
const paperStyle = { padding: '30px 20px', width: "30vw", margin: "20px auto" }
const avatarStyle = { backgroundColor: 'green' }


function SignUp() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setCPassword] = React.useState('');
    const [name, setname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [gender, setGender] = React.useState('female');
    // proxy = "https://click-master.onrender.com"
    // const values = {
    //     email: email,
    //     password: password,

    //     fname: fname,

    // }
   

    const submitHandler = async (e) => {

        const values = {
            name: name,
            email: email,
            password: password,

          
          };
   

        try{

            dispatch(showLoading());
            const res = await axios.post('https://click-master.onrender.com/api/v1/users/register', values)
            dispatch(hideLoading());
           
            if(res.data.success){
               
                message.success("User registered successfully")

            }
            else{
                message.error(res.data.message)
            }

        }
        catch(error){
            dispatch(hideLoading());
            console.log(error)
            message.error("Something went wrong")

        }

    };



    const margintop = {
        marginTop: "15px ",

    }
    const marginbottom ={
        marginBottom:"15px"
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Wrapper>
            {/* <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center' style={margintop}>
                        <Avatar style={avatarStyle}><AddCircleOutlineIcon /></Avatar>
                        <h2>Sign Up</h2>
                        <Typography style={marginbottom} variant='caption' gutterBottom>Please fill this form to make an account</Typography>
                    </Grid> */}
                    <form
                        method='POST'
                        onSubmit={submitHandler}

                    >

                        <label for="name">Name:</label>
                        <input type="text" value={name} onInput={ e=>setname(e.target.value)} id="name" name="name" /><br />

                        <label for="email">Email:</label>
                        <input type="email"value={email} onInput={ e=>setEmail(e.target.value)} id="email" name="email" /><br />

                        <label for="password">Password:</label>
                        <input type="password" value={password} onInput={e=>setPassword(e.target.value)} id="password" name="password" /><br />

                        <input type="submit" value="Submit" />
                        {/* <TextField style={marginbottom} name='name' id="filled-basic" value={fname} onInput={ e=>setFname(e.target.value)} label="Enter Username" variant="filled" color="success" fullWidth required /> */}
                        {/*                   
                    <FormControl style={marginbottom}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={gender}
                            onInput={ e=>setGender(e.target.value)} style={{ display: 'initial' }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                        {/* <TextField style={marginbottom} name='email' id="filled-basic"  value={email} onInput={ e=>setEmail(e.target.value)} type='email' label='Email' variant="filled" color="success" fullWidth required /> */}
                        {/* <TextField style={marginbottom} id="filled-basic" value={phone} onInput={ e=>setPhone(e.target.value)} type='number' label='Phone Number'  variant="filled" color="success" fullWidth required /> */}
                        {/* <TextField style={marginbottom} id="filled-basic" name='password' value={password} onInput={e=>setPassword(e.target.value)} type='password' label='Password' variant="filled" color="success" fullWidth required /> */}
                        {/* <TextField style={marginbottom} id="filled-basic"value={cpassword} onInput={e=>setCPassword(e.target.value)} type='password' label='Confirm Password' variant="filled" color="success" fullWidth required /> */}

                        {/* <Checkbox {...label} defaultChecked color="success" />I accept all the terms and condition <br/>
                    <Button style={margintop} type='submit'  variant='contained'  fullWidth>Sign Up</Button> */}

                    </form>
                {/* </Paper> */}
            {/* </Grid> */}
        </Wrapper>
    )
}

export default SignUp

const Wrapper = tw.div`
mt-10 h-screen ml-10
`
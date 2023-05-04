import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import React, { useState ,useEffect } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from "../firebase"
import * as firebase from 'firebase/app';
import tw from 'tailwind-styled-components'
import {GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithCredential,signInWithEmailAndPassword} from "firebase/auth"
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';


function Login() {

    const {dispatch} = useContext(AuthContext)
    const [error, setError] =useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useRouter();
    console.log(email,password)
    const handleLogin = (e) => { 
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type: 'LOGIN', isAuthenticated: true, user: user})
            navigate.push('/')

        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
            setError(true)
        });
    }
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const paperStyle = { padding: 20, height: '60vh', width: 280 }
    const avatarStyle = { backgroundColor: green }
    const linkUnStyle = {
        textDecoration: 'none'
    }
    const btnstyle = {
        margin: "20px auto",
        backgroundColor: 'black'
    }
    return (
        <Wrapper>
            <form onSubmit={handleLogin}>
             <Grid align='center'>
             <h1 className="alert alert-info text-3xl mt-4 mb-4 " role="alert" align='center'>
            Welcome   to Click Masters
          </h1>
          <p className="mb-11">"We assure you to provide Best Photographers Near you at Best Prize"</p>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle} alt="Remy Sharp" src="" ><LockOutlinedIcon /></Avatar>
                        <h2> Sign In</h2>
                        <TextField id="filled-basic" onChange={e=>setEmail(e.target.value)} label="Enter Username" variant="filled" color="success" fullWidth />
                        <TextField id="filled-basic" onChange={e=>setPassword(e.target.value)} label="Password" type='password' variant="filled" color="success"  fullWidth  />
                       
                    </Grid>
                    <Checkbox {...label} defaultChecked color="success" />Remember Me
                    <br />

                    {/* <Button style={btnstyle} type="submit" onClick={()=> signInWithPopup(auth,provider)} variant="contained"  color="success" fullWidth>Sign In</Button> */}
                    <Button style={btnstyle} type="submit"  variant="contained"  color="success" fullWidth>Sign In</Button>
                <Typography>
                    <Link style={linkUnStyle} href='#'>Forgot Password</Link>
                </Typography>
                <Typography> Already have an account
                    <Link style={ linkUnStyle} href='/SignUp'>Sign Up</Link>
                    {error && <p className="text-red-500 text-center">Wrong email or Password</p> }
                </Typography>
                </Paper>
            </Grid>
            </form>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
mt-10 h-screen ml-10 mt-10
`



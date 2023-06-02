
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import React, { useEffect } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/router';
// import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// import { auth, provider } from "./firebase"
// import * as firebase from 'firebase/app';
import tw from 'tailwind-styled-components'


function Login() {

    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const paperStyle = { padding: 20, width: 280 }
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
             <Grid align='center'>
             <h1 className="alert alert-info text-3xl mt-4 mb-4 " role="alert" align='center'>
            Welcome   to Click Masters
          </h1>
          <p className="mb-11">"We assure you to provide Best Photographers Near you at Best Prize"</p>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle} sx={{ width: 80, height: 80 }} alt="Remy Sharp" src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" ></Avatar>
                        {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fgoogle-icon&psig=AOvVaw3DxfnGFV01i3GVkgUPPA5H&ust=1682663577938000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLism7q4yf4CFQAAAAAdAAAAABAE" alt="" /> */}
                        <Sign> Sign In With Google</Sign>
                        {/* <TextField id="filled-basic" label="Enter Username" variant="filled" color="success" fullWidth />
                        <TextField id="filled-basic" label="Password" type='password' variant="filled" color="success"  fullWidth  />
                        */}
                    </Grid>
                    {/* <Checkbox {...label} defaultChecked color="success" />Remember Me */}
                    {/* <br /><Button style={btnstyle} type="submit" onClick={()=> signInWithPopup(auth,provider)} variant="contained"  color="success" fullWidth>Sign In</Button> */}
                {/* <Typography>
                    <Link style={linkUnStyle} href='#'>Forgot Password</Link>
                </Typography>
                <Typography> Already have an account
                    <Link style={ linkUnStyle} href='#'>Sign Up</Link>
                </Typography> */}
                </Paper>
            </Grid>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
mt-10 h-screen ml-10 mt-10
`
const Sign = tw.h1`
text-xl mt-4 mb-4 text-black align-center justify-center
`
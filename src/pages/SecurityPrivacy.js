import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import Sidenav from './Sidenav'
import tw from "tailwind-styled-components"
function SecurityPrivacy() {
  return (
    <Wrapper>
<Sidenav/>
      {/* <Title>Security & Privacy</Title> */}
    <Typography variant="h4" noWrap component="div">
               <strong>    Change Password</strong>   
                    </Typography>
              <TextField id="filled-basic" label="Old Password" type='password' className='m-2' variant="filled" color="success" fullWidth required />
              <TextField id="filled-basic" label="New Password"  type='password'className='m-2' variant="filled" color="success" fullWidth required />
              <TextField id="filled-basic" label="Confirm New Password" className='m-2' type='password' variant="filled" color="success" fullWidth required />

    </Wrapper>
  )
}

const Wrapper = tw.div`
mt-10 h-screen ml-10
`
// const Title = tw.div`
// text-3xl font-bold
// `
export default SecurityPrivacy

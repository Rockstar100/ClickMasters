
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import tw from 'tailwind-styled-components'
import Sidenav from './Sidenav'
import swal from 'sweetalert';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CompletedOrder() {
  
  return (
    <Wrapper>
      <Sidenav/>
    <Paper
      sx={{
        p: 1,
        margin: '10px auto',
        maxWidth: 1000,
        flexGrow: 1,
        // marginTop: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Avatar sx={{ width: 85, height: 85 }} alt="complex" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Allen Walker
              </Typography>
              <Typography variant="body2" gutterBottom>
                Professional Shoot
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
           
          </Grid>
          <Grid item>
          {/* <Button color="secondary">Know More</Button> */}
          <Grids >
           <img width="70px" src="https://img.freepik.com/free-vector/illustration-reverse-clock-icon_53876-5629.jpg?w=740&t=st=1682631477~exp=1682632077~hmac=38c4cca30732072f4577a405f1943a486cbd901d7a7f9de119faf8c5db94a87b"/>
          <Typography variant="h6" color="">
                Pending
                </Typography>
            </Grids>
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 h-screen ml-10 mt-10 h-screen ml-10 
`
const Grids = tw.div`
flex justify-end items-center mr-10 mt-5
`
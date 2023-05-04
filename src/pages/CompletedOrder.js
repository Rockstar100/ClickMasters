
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
            <Avatar sx={{ width: 85, height: 85 }} alt="complex" src="https://img.freepik.com/free-photo/close-up-image-happy-good-looking-elegant-fifty-year-old-woman-wearing-warm-cozy-jumper-pearl-earrings-short-stylish-hairdo-being-good-mood-sitting-living-room_343059-4334.jpg?w=1060&t=st=1682656362~exp=1682656962~hmac=b922f815f6b4a93c0764b6ac71fc0b66f16ef33cda630610badf8e467c78b3a3" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} sm container>
          <Grid item xs container direction="column" spacing={1}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
            <strong>Anam Rashid</strong>    
              </Typography>
              <Typography variant="body2" gutterBottom>
            <strong>Requirement-</strong> Co-operate Photoshoot
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 103098765
              </Typography>
            </Grid>
           
          </Grid>
          <Grid item>
          {/* <Button color="secondary">Know More</Button> */}
          <Grids >
           <img width="50px" src="https://cdn-icons-png.flaticon.com/512/190/190411.png?w=740&t=st=1682630723~exp=1682631323~hmac=25fd86b7ac63293f19c0868e4a9f1c6b80efa85fd805a687cdeeea3b880ab59a"/>
          <Typography variant="h6" color="">
                Completed
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
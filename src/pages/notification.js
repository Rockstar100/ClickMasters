import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import tw from 'tailwind-styled-components'
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Userlist() {
  return (
    <Wrapper>
    <Paper
      sx={{
        p: 1,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        marginTop: 10,
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
                Name
              </Typography>
              <Typography variant="body2" gutterBottom>
                FProfessional Shoot
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
            <Button variant="contained" className='bg-black hover:bg-green-700' sx={{m:2, }}>
              Accept
            </Button>
            <Button variant="outlined" color="error">
              Decline
            </Button>
            </Grid>
          </Grid>
          <Grid item>
          <Button color="secondary">Know More</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Wrapper>
  );
}

const Wrapper = tw.div`
mt-10 h-screen ml-10 mt-10 h-screen ml-10 
`
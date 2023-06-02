import * as React from 'react';
import tw from 'tailwind-styled-components'
// import Userlist from './userlist';
import { useEffect,useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// function FormRow() {
//   return (
//     <React.Fragment>
      
     
//       {/* <Grid item xs={4}>
//         <Item><Userlist/></Item>
//       </Grid>
//       <Grid item xs={4}>
//         <Item><Userlist/></Item>
//       </Grid> */}
//     </React.Fragment>
//   );
// }

export default function Gridlist() {
  return (
    <Wrapper>
    <Box sx={{ flexGrow: 1 }}>
      
        <Grid container item spacing={3}>
        <Grid item xs={4}>
        <Item>
          {/* <Userlist/> */}
        </Item>
      </Grid>
       
        </Grid>
      
    </Box>
    </Wrapper>
  );
}

const Wrapper = tw.div`
mt-10 h-screen ml-10
`
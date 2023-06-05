import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { message } from 'antd';
import axios from 'axios';
import tw from "tailwind-styled-components"
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
// function Copyright() {
//   return (

//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const steps = ['Personal Details', 'Verification'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    // case 2:
    //   return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme(
  // {
  //   palette: {
  //     primary: {
  //       main: '#556cd6',
  //     },
  //   },
  // },
);

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const router = useRouter()
  const {user} = useSelector(state => state.user)
const handler = async(values)=>{

  try{
   const res = await axios.post('https://click-master.onrender.com/api/v1/apply-cameraman',{...values,userId : user._id},{
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
    },
    credentials: 'include'
   }) 
    if(res.data.success){
      message.success(res.data.message)

      // router.push('/')

    }
    else{
      message.error(res.data.message)

    }
    
  }
  catch(error){
    console.log(error)
    message.error("Something Went Wrong")


  }

}
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Wrapper>
    <ThemeProvider theme={theme}>
      <Boxs>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          height: '100%',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
       
      </AppBar>
      <Container component="main" style={{height:" 900px"}} maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
           Apply as a Photographer
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for Submitting Form.
              </Typography>
              <Typography variant="subtitle1">
                Your Registration Number is #2001539. We have captured your details and will
                contact you soon for further process. 
                
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Buttons onClick={handleBack} sx={{ mt: 3, ml: 1,Color: "black",backgroundColor: 'black' }}>
                    Back
                  </Buttons>
                )}

                <Buttons
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, backgroundColor: 'black', Color: "black" }
                }
                >
                  {activeStep === steps.length - 1 ? 'Appply Now' : 'Next'}
                </Buttons>
              </Box>
            </React.Fragment>
          )}
        </Paper>
       
      </Container>
      </Boxs >
    </ThemeProvider>
    </Wrapper>

  );
}

const Buttons = tw.button`
rounded-xl border-2 border-black-500 bg-white m-2 px-3 py-2 font-semibold text-black-500 hover:bg-black hover:text-white
`
const Wrapper = tw.div`
flex justify-center items-center h-full bg-gray-100
`
const Boxs = tw.div`
 h-full
`
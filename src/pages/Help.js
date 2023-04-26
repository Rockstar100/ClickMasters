import React, { useState } from 'react';
import { Typography ,Grid} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import tw from 'tailwind-styled-components'
const FaqSection = () => {
    const GridStyle ={paddingLeft:'10%' ,paddingRight:'10%'}
  const [showFaq1, setShowFaq1] = useState(false);
  const [showFaq2, setShowFaq2] = useState(false);
  const [showFaq3, setShowFaq3] = useState(false);

  return (
   
    <Wrapper>

      <Grid style={GridStyle} >
        
        <Grid align='center'>
            <Typography variant="h4" noWrap component="div">
               <strong>Frequently Asked Questions</strong>   
                    </Typography></Grid>
    <br/><br/>
        <Grid className="faq-question" onClick={() => setShowFaq1(!showFaq1)}>
      
         <strong ><Typography variant="h6">  <CheckIcon /> How do I create an account?</Typography></strong>
          {showFaq1 ? (
            <p>
              To create an account, click on the "Sign Up" button on the top right corner of the page and follow the prompts to enter your information.
            </p>
          ) : null}
        </Grid><br/>
        <Grid className="faq-question" onClick={() => setShowFaq2(!showFaq2)}>
          
          <strong ><Typography variant="h6">  <CheckIcon /> What payment methods do you accept?</Typography></strong>
          {showFaq2 ? (
            <p>
              We accept all major credit cards and PayPal.
            </p>
          ) : null}
        </Grid><br/>
        <Grid className="faq-question" onClick={() => setShowFaq3(!showFaq3)}>
        
          <strong ><Typography variant="h6">  <CheckIcon /> How can I cancel my subscription?</Typography></strong>
          {showFaq3 ? (
            <p>
              To cancel your subscription, go to your account settings and click on "Cancel Subscription". Follow the prompts to complete the cancellation process.
            </p>
          ) : null}
        </Grid><br/>

    </Grid>
    </Wrapper>
  );
};

const Wrapper = tw.div`
mt-10 h-screen ml-10
`

export default FaqSection;


import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import tw from 'tailwind-styled-components'
import Sidenav from './Sidenav'
const FaqSection = () => {
  const GridStyle = { paddingLeft: '10%', paddingRight: '10%' }
  const [showFaq1, setShowFaq1] = useState(false);
  const [showFaq2, setShowFaq2] = useState(false);
  const [showFaq3, setShowFaq3] = useState(false);
  const [showFaq4, setShowFaq4] = useState(false);
  const [showFaq5, setShowFaq5] = useState(false);
  const [showFaq6, setShowFaq6] = useState(false);
  const [showFaq7, setShowFaq7] = useState(false);
  const [showFaq8, setShowFaq8] = useState(false);
  const [showFaq9, setShowFaq9] = useState(false);





  return (

    <Wrapper>
      <Sidenav />
      <Grid style={GridStyle} >

        <Grid align='center'>
          <Typography variant="h4" noWrap component="div">
            <strong>Frequently Asked Questions</strong>
          </Typography></Grid>
        <br /><br />
        <Grid className="faq-question" onClick={() => setShowFaq4(!showFaq4)}>

          <strong ><Typography variant="h6">  <CheckIcon />How does your app work?</Typography></strong>
          {showFaq4 ? (
            <p>
              Our app is designed to help users hire photographers quickly and easily. Simply create an account, browse through our list of photographers, select the one that best fits your needs, and book them through our app. You can also chat with photographers directly through our messaging system to discuss your specific requirements.         </p>
          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq5(!showFaq5)}>

          <strong ><Typography variant="h6">  <CheckIcon /> What kind of photographers do you have on your platform?
          </Typography></strong>
          {showFaq5 ? (
            <p>
              We have a diverse range of photographers on our platform, including wedding photographers, portrait photographers, event photographers, commercial photographers, and more. All our photographers are vetted and have a proven track record of delivering high-quality work.         </p>
          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq9(!showFaq9)}>

          <strong ><Typography variant="h6">  <CheckIcon /> What kind of photographers do you have on your platform?
          </Typography></strong>
          {showFaq9 ? (
            <p>
              We have a diverse range of photographers on our platform, including wedding photographers, portrait photographers, event photographers, commercial photographers, and more. All our photographers are vetted and have a proven track record of delivering high-quality work.         </p>
          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq1(!showFaq1)}>

          <strong ><Typography variant="h6">  <CheckIcon /> How do I create an account?</Typography></strong>
          {showFaq1 ? (
            <p>
              To create an account, click on the "Sign Up" button on the top right corner of the page and follow the prompts to enter your information.
            </p>
          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq6(!showFaq6)}>

          <strong ><Typography variant="h6">  <CheckIcon />How much does it cost to hire a photographer through your app?
          </Typography></strong>
          {showFaq6 ? (
            <p>
              The cost of hiring a photographer varies depending on the photographer's experience, the type of photography you need, and the length of the shoot. We provide transparent pricing information for each photographer on our platform, so you can easily compare prices and choose the best option for your budget.            </p>
          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq8(!showFaq8)}>

          <strong ><Typography variant="h6">  <CheckIcon />How do you ensure the safety of my personal and payment information?
          </Typography></strong>
          {showFaq8 ? (
            <p>We take the security of your personal and payment information very seriously. Our platform uses industry-standard encryption and security measures to protect your data. We also partner with trusted payment providers to process all transactions securely.
</p>          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq7(!showFaq7)}>

          <strong ><Typography variant="h6">  <CheckIcon /> What if I'm not happy with the photographer's work?
          </Typography></strong>
          {showFaq7 ? (
            <p>
              We strive to ensure that all our photographers deliver high-quality work that meets your expectations. However, if you are not satisfied with the results, please let us know and we will work with you to find a solution. Depending on the situation, we may offer a refund or help you find a different photographer for your needs.</p>) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq2(!showFaq2)}>

          <strong ><Typography variant="h6">  <CheckIcon /> What payment methods do you accept?</Typography></strong>
          {showFaq2 ? (
            <p>
              We accept all major credit cards and PayPal.
            </p>
          ) : null}
        </Grid><br />
        <Grid className="faq-question" onClick={() => setShowFaq3(!showFaq3)}>

          <strong ><Typography variant="h6">  <CheckIcon /> How can I cancel my subscription?</Typography></strong>
          {showFaq3 ? (
            <p>
              To cancel your subscription, go to your account settings and click on "Cancel Subscription". Follow the prompts to complete the cancellation process.
            </p>
          ) : null}
        </Grid><br />

      </Grid>
    </Wrapper>
  );
};

const Wrapper = tw.div`
mt-10 h-screen ml-10
`

export default FaqSection;


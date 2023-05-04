import { Typography ,Grid} from '@mui/material'
import React from 'react'
import tw from "tailwind-styled-components"
import Sidenav from './Sidenav'
function TermsCondition() {
    const GridStyle ={paddingLeft:'10%' ,paddingRight:'10%'}
    const margins = {marginTop:'8%'}
    return (
        <Wrapper>
            <Sidenav/>
        <Grid style={GridStyle} >
        
        <Grid align='center' style={margins}>
            <Typography variant="h4" noWrap component="div">
               <strong>    Terms and Condition</strong>   
                    </Typography></Grid>
            <Typography variant='h7'>
<br/><br/>
                Welcome to our website, which offers photography services. By accessing our website, you agree to be bound by these terms and conditions.
<br/>
       <strong>  Description of Services</strong>    <br/>    
                We offer professional photography services for various purposes, including but not limited to weddings, events, portraits, and commercial photography. Our services include capturing, editing, and delivering high-quality photographs.
                <br/> <br/>
                <strong>          Payment Terms</strong>  <br/>
                The fees for our photography services are set out on our website and are payable in advance of the services being provided. We accept payment by credit card, debit card, and other methods as stated on our website. All payments are non-refundable.
                <br/> <br/>
                <strong>   Intellectual Property</strong>  <br/>
                We retain all copyright and other intellectual property rights in the photographs we produce. You are granted a non-exclusive, non-transferable license to use the photographs for your own personal or commercial use, subject to any restrictions stated in our agreement with you.
                <br/> <br/>
                <strong>   Client Obligations</strong>  <br/>
                You agree to provide us with all necessary information and access to enable us to perform our photography services. You also agree to cooperate with us and to comply with any reasonable requests we make in connection with the provision of our services.
                <br/> <br/>
                <strong>    Cancellation and Rescheduling</strong>  <br/>
                We understand that unforeseen circumstances may require you to cancel or reschedule your photography services. However, we require at least 48 hours' notice for any cancellation or rescheduling. Failure to provide sufficient notice may result in a cancellation fee.
                <br/> <br/>
                <strong>     Liability</strong>  <br/>
                We take great care in providing our photography services, but we cannot be held responsible for any loss, damage, or injury arising from our services, except where such loss, damage, or injury arises as a result of our negligence or breach of these terms and conditions.
                <br/> <br/>
                <strong>    Governing Law</strong>  <br/>
                These terms and conditions shall be governed by and construed in accordance with the laws of [insert your jurisdiction]. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [insert your jurisdiction].
                <br/> <br/>
                <strong>    Amendments</strong> 
                We reserve the right to amend these terms and conditions at any time by posting a revised version on our website. Your continued use of our website and services after the effective date of any amendments constitutes your acceptance of the amended terms and conditions.
                <br/> <br/>
                If you have any questions or concerns regarding these terms and conditions, please contact us at [insert contact information].
                <br/> <br/>
                Thank you for choosing our photography services!
            </Typography>
        </Grid>
        </Wrapper>
    )
}

const Wrapper = tw.div`
mt-10 h-screen ml-10 mt-10 h-full 
`
export default TermsCondition

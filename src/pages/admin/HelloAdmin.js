import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import { Bar } from 'react-chartjs-2';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Users from './users';
import Photographer from './photographer';

// import { set } from 'mongoose';




export default function HelloAdmin() {
    const [admin, setAdmin] = useState("Priya");
    const [showPhotographer, setshowPhotographer] = useState(true);
    const [showUser, setshowUser] = useState(false);
    const handlePhotographerClick = () => {
        setshowPhotographer(true);
        setshowUser(false);
    }

    const handleUserClick = () => {
        setshowPhotographer(false);
        setshowUser(true);
    }
    
    
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'black', height: '15vh' }} >
                    <Typography px={3} pt={2} variant="h6" color={'white'} fontWeight="bold" >Hello {admin}!!</Typography>
                    <Typography px={3} pb={2} variant="h8" color={'white'} >Hope You are doing Great!!!!</Typography>
                </Box>
                {/* <Box display="flex"> */}
                    <Box  mt={2}>
                        <Box mb={2}>
                            <ToggleButtonGroup color="primary" value={showPhotographer} exclusive aria-label="Platform">
                                <ToggleButton value="Photographer" onClick={handlePhotographerClick}>Photographer</ToggleButton>
                                <ToggleButton value="User" onClick={handleUserClick}>User</ToggleButton>

                            </ToggleButtonGroup>
                        </Box>
                        {showPhotographer ? <Photographer /> : <Users />}

                    </Box>
                  
                {/* </Box> */}
            </Container>
        </>
    );
}
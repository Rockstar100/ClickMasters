import React from 'react'
import HelloAdmin from './HelloAdmin'
import { Box } from '@mui/material'

function index() {
  return (
    <Box sx={{ bgcolor: 'white', height: '100vh' }} >
    <HelloAdmin/>
    </Box>
  )
}

export default index
import { Box, Typography } from '@mui/material'
import React from 'react'

const errorStyle={
    display:'flex',
    justifyContent:'center'
}
const ErrorScreen = () => {
    const error = "https://i.stack.imgur.com/01tZQ.png";
  return (
    
      <Box>
        <Typography>Error</Typography>
        <Box style={errorStyle}>

        <img src={error} alt="error" />
        </Box>
      </Box>
    
  );
}

export default ErrorScreen
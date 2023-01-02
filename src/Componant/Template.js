import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Template = () => {
  return (
    <div className='container'>
      
          <Box
              sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                      m: 1,
                      width: "auto",
                      height: 500,
                  },
              }}
          >
              <Paper elevation={3} />
              <Paper elevation={3} />
              <Paper elevation={3} />
              <Paper elevation={3} />
          </Box>
    </div>
  )
}

export default Template

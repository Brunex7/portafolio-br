import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Presentacion() {
  const containerStyle = {
    marginTop: '50px',
  };

  return (
    <Box
      id='presentacion'
      sx={{
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
      }}
    >
      <Container>
        <Typography variant='h5' align='left' sx={containerStyle}>
          Bruno Romero
        </Typography>
      </Container>
      <Container>
        <Typography variant='h2' align='left'>
          I'm a Full Stack Developer & UX/UI Designer.
        </Typography>
      </Container>
    </Box>
  );
}

export default Presentacion;
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Presentacion() {

  const boxStyle = {
    height: '100%',
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
  };

  const containerStyle = {
    marginTop: '50px',
  };

  return (
    <Box id='presentacion' sx={ boxStyle }>

      <Container sx={containerStyle}>
        <Typography variant='h5' align='left'>
          Bruno Romero
        </Typography>
        <Typography variant='h2' align='left'>
          I'm a Full Stack Developer & UX/UI Designer.
        </Typography>
      </Container>

    </Box>
  );
}

export default Presentacion;
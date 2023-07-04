import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Presentacion() {

  return (
    <Box
      id='presentacion'
      sx={{
        width: '97%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
      }}
    >
      <Container>
        <Typography variant='h5' align='left' marginTop={'50px'}>
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
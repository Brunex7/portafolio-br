import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImageGallery from './ImageGallery';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boxStyle = {
    backgroundColor: '#002b17',
    width: '100%',
    height: 'auto',
    marginTop: '40px',
    padding: '5px 0 50px 0',
  };

  const containerStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'30px',
    width:'100%'
  }

  const textStyle ={
    textAlign: 'center',
    margin: '20px',
    color:'#F2F0E9'
  }

  return (
    <Box id='desing' sx={ boxStyle }>
      <Container sx={{ color: '#F2F0E9', padding: '20px' }}>
        <Typography variant='h4' align='left'>
          Portfolio Highlights
        </Typography>
      </Container>

      <Container style={ containerStyle }>
        <Typography
          variant='h3'
          sx={ textStyle }
        >
          Here you can see some of my best designs as a graphic designer.
        </Typography>
          <ImageGallery />
      </Container>
    </Box>
  );
}

export default Home;

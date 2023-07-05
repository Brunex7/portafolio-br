import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImageGallery from './ImageGallery';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box id='desing'>
      <Container sx={{ color: '#000000', padding: '20px' }}>
        <Typography variant='h4' align='left'>
          Portfolio Highlights
        </Typography>
      </Container>

      <div
        style={{
          margin: '50px 8%',
          maxWidth: '1150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h3'
          color={'#000000'}
          sx={{
            textAlign: 'center',
            margin: '20px',
          }}
        >
          Here you can see some of my best designs as a graphic designer.
        </Typography>
        
        <Container
          sx={{
            backgroundColor: '#002b17',
            borderRadius: '55px',
            width: '100%',
            height: 'auto',
            marginTop: '40px',
            padding: '5px 0 50px 0',
          }}
        >
          <ImageGallery />
        </Container>
      </div>
    </Box>
  );
}

export default Home;

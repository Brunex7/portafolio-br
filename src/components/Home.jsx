import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';



function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box>
        <Container sx={{ color: '#000000', padding: '20px' }}>
          <Typography variant='h4' align='left'>
            Portfolio Highlights
          </Typography>
        </Container>
      </Box>
      <div style={{ margin: '50px 8%', maxWidth: '1150px' }}>
        <Typography variant='h3' color={'#000000'} sx={{opacity: imageLoaded ? 1 : 0, transition: 'opacity 1.0s'}}>
          Here you can see some of my best designs as a graphic designer.
        </Typography>
        <Container sx={{backgroundColor:'#002b17',borderRadius:'55px', width:'100%', height:'auto', mt:'40px', p:'5px 0 50px 0'}}>
          <ImageGallery />
        </Container>
      </div>
    </>
  );
}

export default Home;
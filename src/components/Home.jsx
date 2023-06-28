import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
        <Container sx={{ color: '#ffff', padding: '20px' }}>
          <Typography variant='h4' align='left'>
            Portfolio Highlights
          </Typography>
        </Container>
      </Box>
      <div style={{ margin: '50px 8%', maxWidth: '1150px' }}>
        <Typography variant='h3' color={'white'} sx={{opacity: imageLoaded ? 1 : 0, transition: 'opacity 1.0s'}}>
          Here you can see some of my best designs as a graphic designer.
        </Typography>
        <ImageGallery />
        <Container sx={{ display: 'flex', justifyContent: 'flex-end', mt:'50px', opacity: imageLoaded ? 1 : 0, transition: 'opacity 2.0s'}}>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              backgroundColor: 'none',
              color: 'white',
              '&:hover': {
                backgroundColor: '#750404',
              },
            }}
            component={Link} to='/about'
          >
            Go to About Me
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Home;
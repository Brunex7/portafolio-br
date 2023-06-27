import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../media/Images';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
        <Grid
          container
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridGap: '30px',
            marginTop:'50px'
          }}
        >
          {images.map((image, index) => (
            <Grid item key={index} xxs={12}>
              <div
                style={{
                  aspectRatio: '5/8',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '18px',
                  boxShadow: '4px 6px 8px #0f0f0f',
                  transform: imageLoaded ? 'scale(1)' : 'scale(0.5)',
                  transition: 'transform 0.6s',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 1.0s',
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
                {hoveredIndex === index && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 1,
                      transition: 'opacity 0.6s',
                    }}
                  >
                    <Typography variant='h6' style={{ color: '#ffffff' }}>
                      {image.title}
                    </Typography>
                  </div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
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
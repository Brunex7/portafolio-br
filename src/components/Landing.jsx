import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Presentacion from './Presentacion';
import { Link } from 'react-scroll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import fondo from '../assets/fondo.svg';


const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <>
    <Box
      sx={{
        position: 'relative',
        mx: 'auto',
        p: {
          xs: 2,
          sm: 5,
          md: 2,
        },
          minHeight: '800px',
          display: 'flex',
          flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          filter: 'blur(100px)',
          background: `url(${fondo}) center center/cover`,
        }}
      />
      <Container
        maxWidth="xs"
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', 
          position: 'relative', 
          zIndex: 1, 
          opacity: imageLoaded ? 1 : 0, 
          transition: 'opacity 3.0s',
          '@media (max-width: 600px)': {
            maxWidth: '100%',
            padding: '0 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }
        }}
      >
        <Typography 
          variant="h1" 
          align="center" 
          color="white" 
          sx={{
            '@media (max-width: 600px)': {
              fontSize: '70px',
            },
          }}>
          WELCOME
        </Typography>
      </Container>
      <Container 
      sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mt:-10, 
          position: 'relative', 
          zIndex: 1,
          opacity: imageLoaded ? 1 : 0, 
          transition: 'opacity 5.0s',
          '@media (max-width: 600px)': {
            mt:-6,
          },
        }}
      >
        <Button  sx={{ backgroundColor: 'none', color: 'white', height:'60px'}}>
          <Link to='presentacion' className='link' smooth>
            <Typography variant='body2'>to my portfolio</Typography>
            <ExpandMoreIcon style={{fontSize:'xx-large'}}/>
          </Link>
        </Button>
      </Container>
    </Box>
      <Presentacion />
        </>
  );
};

export default Landing;
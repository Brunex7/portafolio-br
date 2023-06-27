import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Presentacion from './Presentacion';
import { Link } from 'react-scroll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
          alignItems: 'center',
          justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          filter: 'blur(100px)',
          background: `url(https://res.cloudinary.com/dammsykk2/image/upload/v1687902343/fondo_qzwlun.jpg) center center/cover`,
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
              fontSize: '48px',
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
          mt: -35, 
          position: 'relative', 
          zIndex: 1,
          opacity: imageLoaded ? 1 : 0, 
          transition: 'opacity 4.0s'
        }}
      >
        <Typography variant="h6" align="center" color="white">
          to my portfolio
        </Typography>
      </Container>
      <Container 
      sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mt:20, 
          position: 'relative', 
          zIndex: 1,
          opacity: imageLoaded ? 1 : 0, 
          transition: 'opacity 5.0s'
        }}
      >
        <Button sx={{ backgroundColor: 'none', color: 'white'}}>
          <Link to='presentacion' className='link' smooth>
            <ExpandMoreIcon style={{fontSize:'xxx-large'}}/>
          </Link>
        </Button>
      </Container>
    </Box>
      <Presentacion />
        </>
  );
};

export default Landing;
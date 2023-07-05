import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-scroll';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Presentacion from './Presentacion';
import fondo from '../assets/fondo.svg';

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <>
      <Box 
        id='landing'
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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: `linear-gradient(to top, rgba(0, 0, 0, 20), rgba(0, 0, 0, 0)) 0 0/100% 100%, url(${fondo}) center center/cover`,
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
          }}
        >
          <Typography
            variant="h1"
            align="center"
            color="white"
            sx={{
              fontSize: '70px',
            }}
          >
            WELCOME
          </Typography>
        </Container>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -10,
            position: 'relative',
            zIndex: 1,
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 5.0s',
          }}
        >
          <Button
            sx={{
              backgroundColor: 'none',
              color: 'white',
              height: '60px',
            }}
          >
            <Link to="presentacion" className="link" smooth>
              <Typography variant="body2">to my portfolio</Typography>
              <ExpandMoreIcon style={{ fontSize: 'xx-large' }} />
            </Link>
          </Button>
        </Container>
      </Box>
      <Presentacion />
    </>
  );
};

export default Landing;

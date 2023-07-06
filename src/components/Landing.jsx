import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import { Transition } from 'react-transition-group';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Presentacion from './Presentacion';
import fondo from '../assets/fondo.svg';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
          }}
        >
          <Transition in={isVisible} timeout={duration}>
            {(state) => (
              <Typography
                variant="h1"
                align="center"
                color="white"
                sx={{
                  fontSize: '70px',
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                WELCOME
              </Typography>
            )}
          </Transition>
        </Container>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -16,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Transition in={isVisible} timeout={duration}>
            {(state) => (
              <Button
              sx={{
              backgroundColor: 'none',
              color: 'white',
              height: '60px',
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            >
            <Link to="presentacion" className="link" smooth>
              <Typography variant="body2">to my portfolio</Typography>
              <ExpandMoreIcon style={{ fontSize: 'xx-large' }} />
            </Link>
          </Button>
            )}
          </Transition>
        </Container>
      </Box>
      <Presentacion />
    </>
  );
};

export default Landing;

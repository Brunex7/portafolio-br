import React, { useEffect, useState } from 'react';
import { Box,Button,Container, Typography } from '@mui/material';
import { Transition } from 'react-transition-group';
import fondo from '../assets/fondo.svg';
import { Link } from 'react-scroll';

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

  const boxStyle = {
    position: 'relative',
    mx: 'auto',
    p: {
      xs: 2,
      sm: 5,
      md: 2,
    },
    minHeight: '700px',
    display: 'flex',
    flexDirection: 'column',
  };

  const divStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    filter:'blur(20px)',
    background: `linear-gradient(to top, rgba(0, 0, 0, 60), rgba(0, 0, 0, 0)) 0 0/100% 100%, url(${fondo}) center center/cover`,
  };

  const containerStyle1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    position: 'relative',
    zIndex: 1,
  };

  const containerStyle2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mt: -37,
    position: 'relative',
    zIndex: 1,
  };

  return (
    <>
      <Box id='landing' sx={ boxStyle }>
        <div style={ divStyle } />

        <Container sx={ containerStyle1 }>
          <Transition in={isVisible} timeout={duration}>
            {(state) => (
              <Typography
                variant="h1"
                align="center"
                sx={{
                  fontFamily:'rammet',
                  color:"#ffffff",
                  fontSize: '70px',
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                Bruno Romero
              </Typography>
            )}
          </Transition>
        </Container>

        <Container sx={ containerStyle2 }>
          <Transition in={isVisible} timeout={duration}>
            {(state) => (
              <Typography
              variant="h7"
              align="center"
              sx={{
                color:"#ffffff",
                fontSize: '35px',
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a Full Stack Developer & UX/UI Designer.
            </Typography>

            )}
          </Transition>
        </Container>
        <Container sx={ containerStyle2 }>
        <Transition in={isVisible} timeout={duration}>
            {(state) => (
              <Link Link to="project" className="link" smooth>
              <Button
              sx={{
                color:"#ffffff",
                fontSize: '10px',
                ...defaultStyle,
                ...transitionStyles[state],
                marginTop:'320px'
              }}
            >
              swipe
            </Button>
            </Link>

            )}
          </Transition>
        </Container>
      </Box>
    </>
  );
};

export default Landing;
import { Transition } from 'react-transition-group';
import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-scroll';

import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const NavFloating = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(currentScrollPosition > prevScrollPosition);
      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const animationDuration = 400;

  return (
    <Transition in={isVisible} timeout={animationDuration}>
      {state => (
        <Box
          sx={{
            position: 'fixed',
            borderRadius: '10px',
            width: '80%',
            height: '3%',
            left: '50%',
            bottom: '1%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            display: 'block',
            backgroundColor: '#00130a6f',
            backdropFilter: 'blur(5px)',
            boxShadow: '2px 1px 10px rgba(73, 73, 73, 0.8)',
            padding: '16px',
            cursor: 'pointer',
            opacity: state === 'entered' ? 1 : 0,
            transition: `opacity ${animationDuration}ms ease-in-out`,
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="space-around" alignItems="center" color={'#ffffff'}>
            <Link to="landing" className="link" smooth>
              <HomeIcon />
            </Link>
            <Link to="about" className="link" smooth>
              <PersonIcon />
            </Link>
            <Link to="desing" className="link" smooth>
              <DesignServicesIcon />
            </Link>
            <Link to="project" className="link" smooth>
              <WorkIcon />
            </Link>
          </Stack>
        </Box>
      )}
    </Transition>
  );
};


export default NavFloating;

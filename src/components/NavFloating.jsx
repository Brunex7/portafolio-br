import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FloatingNavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <AppBar position="fixed" sx={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s' }}>
      <Toolbar>
        <Link to="top" smooth={true} duration={500}>
          <IconButton
            color="inherit"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            sx={{ display: isVisible ? 'none' : 'block' }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Link>
        {/* Resto del contenido de la barra de navegación */}
      </Toolbar>
    </AppBar>
  );
};

export default FloatingNavBar;
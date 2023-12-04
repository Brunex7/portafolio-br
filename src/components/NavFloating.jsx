import { Transition } from 'react-transition-group';
import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const NavBox = styled(Box)`
  width: 100%;
  position: fixed;
  left: 50%;
  top: 97%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: block;
  background-color: #002b17;
  padding: 6px;
  cursor: pointer;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity ${({ animationDuration }) => animationDuration}ms ease-in-out;
`;

const NavIcon = styled(Box)`
  font-size: 24px;
  transition: transform ${({ animationDuration }) => animationDuration}ms, background-color ${({ animationDuration }) => animationDuration}ms ease-in-out, border-radius ${({ animationDuration }) => animationDuration}ms ease-in-out, box-shadow ${({ animationDuration }) => animationDuration}ms ease-in-out;

  &:hover {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  }
`;

const icons = {
  fontSize:'32px',
  color:'#fff'
}

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
        <NavBox state={state} animationDuration={animationDuration}>
          <Stack direction="row" spacing={2} justifyContent="space-around" alignItems="center" color={'#000000'}>
            <ScrollLink to="landing" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <HomeIcon style={icons} />
              </NavIcon>
            </ScrollLink>
            <ScrollLink to="project" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <DesignServicesIcon style={icons} />
              </NavIcon>
            </ScrollLink>
            <ScrollLink to="about" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <PersonIcon style={icons} />
              </NavIcon>
            </ScrollLink>
          </Stack>
        </NavBox>
      )}
    </Transition>
  );
};

export default NavFloating;
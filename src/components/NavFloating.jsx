import { Transition } from 'react-transition-group';
import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-scroll';
import styled from 'styled-components';

// import { Root } from '../assets/icons/logoRoot.svg';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const socialIconStyles = {
  color: '#000000',
};

const NavBox = styled(Box)`
  position: fixed;
  border-radius: 10px;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: block;
  background-color: #474747;
  padding: 6px;
  cursor: pointer;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transition: opacity ${({ animationDuration }) => animationDuration}ms ease-in-out;
`;

const NavIcon = styled(Box)`
  font-size: 24px;
  transition: transform ${({ animationDuration }) => animationDuration}ms, background-color ${({ animationDuration }) => animationDuration}ms ease-in-out, border-radius ${({ animationDuration }) => animationDuration}ms ease-in-out, box-shadow ${({ animationDuration }) => animationDuration}ms ease-in-out;

  &:hover {
    transform: scale(1.8);
    background-color: #474747;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const icons = {
  fontSize:'32px'
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
            <Link to="landing" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <HomeIcon style={icons} />
              </NavIcon>
            </Link>
            <Link to="project" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <DesignServicesIcon style={icons} />
              </NavIcon>
            </Link>
            <Link to="about" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <PersonIcon style={icons} />
              </NavIcon>
            </Link>
            {/* <Link to="desing" className="link" smooth>
              <NavIcon animationDuration={animationDuration}>
                <Root  style={icons}/>
              </NavIcon>
            </Link> */}
            <Link href="https://www.linkedin.com/in/bruno-romero-685188255/" target="_blank" rel="noopener">
              <NavIcon animationDuration={animationDuration} style={socialIconStyles}>
                <LinkedInIcon  style={icons} />
              </NavIcon>
            </Link>
            <Link href="https://github.com/Brunex7" target="_blank" rel="noopener">
              <NavIcon animationDuration={animationDuration} style={socialIconStyles}>
                <GitHubIcon  style={icons} />
              </NavIcon>
            </Link>
            <Link href="mailto:brunoromero200@gmail.com" target="_blank" rel="noopener">
              <NavIcon animationDuration={animationDuration} style={socialIconStyles}>
                <EmailIcon style={icons} />
              </NavIcon>
            </Link>
          </Stack>
        </NavBox>
      )}
    </Transition>
  );
};

export default NavFloating;
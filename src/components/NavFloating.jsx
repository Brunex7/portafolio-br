import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Link } from "react-scroll";

const NavFloating = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        borderRadius: '10px',
        width: '50%',
        height: '5%',
        left: '50%',
        bottom:'2%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        display: isVisible ? 'block' : 'none',
        backgroundColor: '#00130a6f',
        backdropFilter: 'blur(5px)',
        boxShadow: '2px 1px 10px rgba(73, 73, 73, 0.8)',
        padding: '16px',
        cursor:'pointer'
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
  );
};

export default NavFloating;
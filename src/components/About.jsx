import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import fotoP from '../assets/fotoPerfil.jpg';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showFullText, setShowFullText] = useState(false);

  const containerStyle = {
    marginTop: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
  };

  const divStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: `linear-gradient(to top, rgba(0, 0, 0, 20), rgba(0, 0, 0, 0)) 0 0/100% 100%, url(${fotoP}) center center/cover`,
  };


  const buttonStyle1 = {
    backgroundColor: '#002b17',
    color: 'white',
    padding: '15px',
    marginLeft: '-20px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#002b17',
    },
  };

  const buttonStyle2 = {
    backgroundColor: '#002b17',
    color: 'white',
    padding: '15px',
    marginLeft: '40px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#002b17',
    },
  };

 
  const toggleTextVisibility = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <>
      <Box id="about"/>
      <div style={ divStyle } />

      <Container style={containerStyle}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ ml: { md: '30px', xs: '0px' }, mt: { xs: '5%', md: '0' } }}>
            <Container sx={{ display: 'flex', mt: '10px' }}>
              <Button href="../RomeroBrunoCv.pdf" download startIcon={<CloudDownloadIcon />} sx={buttonStyle1}>
                Download CV
              </Button>

              <Button href="../Portafolio.pdf" download startIcon={<CloudDownloadIcon />} sx={buttonStyle2}>
                Download Porfolio
              </Button>
            </Container>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', mt: '30px', width: 'auto' }}>

          {showFullText ? (
            <>
              <Typography variant="h6" align="left" color="#D9D9D9">
                I'm Bruno Romero, a graduate of the SoyHenry Bootcamp in March 2023. I have experience in UX/UI Design
                and Graphic Design, and I'm currently continuing to learn and undertake projects on a self-taught basis.
              </Typography>
              <Typography variant="h6" align="left" mt="20px" color="#D9D9D9">
                My skillset includes proficiency in Agile methodologies, GIT, data structures, algorithms, and CSS
                frameworks. Additionally, I have hands-on experience with JavaScript, React, Redux, Node, Express, SQL,
                HTML, CSS, and Git. I excel in problem-solving and thoroughly enjoy working in a team environment.
              </Typography>
              <Typography variant="h6" align="left" mt="20px" color="#D9D9D9">
                For one year, I focused on freelance design, collaborating with clients and a Community Manager. Now, I'm
                excited to take on new challenges and further my professional growth in the fascinating world of
                programming. I look forward to contributing my skills and knowledge to future projects and continuing to
                progress in my career! English proficiency level: A2.
              </Typography>
            </>
          ) : (
            
            <>
              <Typography variant="h6" align="left" color="#D9D9D9">
                I'm Bruno Romero, a graduate of the SoyHenry Bootcamp in March 2023. I have experience in UX/UI Design
                and Graphic Design, and I'm currently continuing to learn and undertake projects on a self-taught basis.
                My skillset includes proficiency in Agile methodologies, GIT, data structures, algorithms, and CSS
                frameworks. Additionally, I have hands-on experience with JavaScript, React, Redux, Node, Express, SQL,
                HTML, CSS, and Git. I excel in problem-solving and thoroughly enjoy working in a team environment.
              </Typography>

              <Button onClick={toggleTextVisibility} sx={{color:'#047942'}}>
                See More
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}

export default About;

import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import fotoP from '../assets/fotoPerfil.jpg';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'30px'
  };

  const imageStyle = {
    borderRadius: '25px', 
    border:'6px solid #b8acac', 
    width: '90%',
    height:'90%', 
    maxWidth: '400px', 
    objectFit:'cover'
  };

  const buttonStyle1 = {
    backgroundColor: '#002b17',
    color: 'white',
    padding:'15px',
    marginLeft:'-20px',
    borderRadius:'14px',
    '&:hover': {
      backgroundColor: 'white',
      color:'#002b17'
    },
  };
  const buttonStyle2 = {
    backgroundColor: '#002b17',
    color: 'white',
    padding:'15px',
    marginLeft:'40px',
    borderRadius:'14px',
    '&:hover': {
      backgroundColor: 'white',
      color:'#002b17'
    },
  };

  return (
    <>
      <Box id ='about'>
        <Container sx={{ color: '#000000', padding: '20px' }}>
          <Typography variant='h4' align='left'>
            About Me
          </Typography>
        </Container>
      </Box>

      <Container style={containerStyle}>
      <Box
        sx={{
          display: 'flex',
          width:'100%',
          justifyContent:'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <img
          style={imageStyle}
          src={fotoP}
          alt='foto perfil'
        />
        <Box sx={{ ml:{md:'30px', xs:'0px'}, mt: { xs: '5%', md: '0' } }}>

          <Typography variant='h1' align='left' color= '#000000'>
            Bruno Romero
          </Typography>
          <Typography variant='h5' align='left' color= '#3E3E3E'>
            Full Stack Developer & Ux/Ui Designer
          </Typography>

          <Container sx={{ display: 'flex', mt:'10px' }}>
            <Button
              href='../RomeroBrunoCv.pdf'
              download
              startIcon={<CloudDownloadIcon />}
              sx={ buttonStyle1 }>
                Download CV
            </Button>

            <Button
              href='../Portafolio.pdf'
              download
              startIcon={<CloudDownloadIcon />}
              sx={ buttonStyle2 }>
                Download Porfolio
            </Button>
          </Container>

        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', mt:'30px', width:'auto'}}>
        <Typography variant='h6' align='left' color='#3E3E3E'>
        I'm Bruno Romero, a graduate of the SoyHenry Bootcamp in March 2023. I have experience in UX/UI Design and Graphic Design, and I'm currently continuing to learn and undertake projects on a self-taught basis.
        </Typography>
        <Typography variant='h6' align='left' mt='20px' color='#3E3E3E'>
        My skillset includes proficiency in Agile methodologies, GIT, data structures, algorithms, and CSS frameworks. Additionally, I have hands-on experience with JavaScript, React, Redux, Node, Express, SQL, HTML, CSS, and Git. I excel in problem-solving and thoroughly enjoy working in a team environment.
        </Typography>
        <Typography variant='h6' align='left' mt='20px' color='#3E3E3E'>
        For one year, I focused on freelance design, collaborating with clients and a Community Manager. Now, I'm excited to take on new challenges and further my professional growth in the fascinating world of programming.
        I look forward to contributing my skills and knowledge to future projects and continuing to progress in my career!
        English proficiency level: A2.
        </Typography>
      </Box>
      </Container>
    </>
  );
}

export default About;
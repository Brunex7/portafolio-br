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
          Hi, my name is Bruno Romero. I completed my studies at the Bootcamp SoyHenry in March 2023. Currently, I continue my learning in a self-taught manner, exploring new technologies and undertaking new projects.
        </Typography>
        <Typography variant='h6' align='left' mt='20px' color='#3E3E3E'>
          I have knowledge in UX/UI Design and experience in Graphic Design, which I have studied independently. This combination has allowed me to effectively manage my time and improve my soft skills, as I have had to seek and work with my own clients. While I specialize in Front-end, I also have knowledge in Back-end. My skills include mastery of agile methodologies, the use of GIT, data structures, algorithms, CSS frameworks, and design tools such as Illustrator and Photoshop. I have experience in both Front-end and Back-end development, as well as data architecture, using technologies such as JavaScript, React, Redux, Node, Express, SQL, HTML, CSS, and Git. I am skilled at problem-solving, adapt quickly to new challenges, and enjoy working in a team. Additionally, I have an A2 level of English proficiency.
        </Typography>
        <Typography variant='h6' align='left' mt='20px' color='#3E3E3E'>
          I am excited to take on new challenges and gain more experience to continue growing as a professional in the amazing world of programming. For a year, I dedicated myself to freelance design, collaborating with both my own clients and a Community Manager. I hope to contribute my skills and knowledge to future projects and continue progressing in this fascinating field.
        </Typography>
      </Box>
      </Container>
    </>
  );
}

export default About;
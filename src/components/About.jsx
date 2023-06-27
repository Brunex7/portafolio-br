import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import fotoP from '../assets/fotoPerfil.png';
import { Link } from 'react-router-dom';

function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <>
      <Box>
        <Container sx={{ color: '#ffff', padding: '20px' }}>
          <Typography variant='h4' align='left'>
            About Me
          </Typography>
        </Container>
      </Box>
      <div style={{ margin: '50px 8%', maxWidth: '1150px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ flex: '0 0 auto' }}>
          <img
            style={{ borderRadius: '18px', width: '100%', maxWidth: '300px', opacity: imageLoaded ? 1 : 0, transition: 'opacity 1.0s' }}
            onLoad={() => setImageLoaded(true)}
            src={fotoP}
            alt='foto perfil'
          />
        </Box>
        <Box sx={{ color: '#ffff',ml:{md:'30px', xs:'0px'}, mt: { xs: '5%', md: '0' }, opacity: imageLoaded ? 1 : 0, transition: 'opacity 3.0s' }}>
          <Typography variant='h1' align='left'>
            Bruno Romero
          </Typography>
          <Typography variant='h5' align='left'>
            Full Stack Developer & Ux/Ui Designer
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', color:'white', mt:'30px',  opacity: imageLoaded ? 1 : 0, transition: 'opacity 3.0s'}}>
          <Typography variant='h6' align='left'>
          Hi, my name is Bruno Romero. I completed my studies at the Bootcamp SoyHenry in March 2023. Currently, I continue my learning in a self-taught manner, exploring new technologies and undertaking new projects.
          </Typography>
          <Typography variant='h6' align='left' mt='20px'>
          I have knowledge in UX/UI Design and experience in Graphic Design, which I have studied independently. This combination has allowed me to effectively manage my time and improve my soft skills, as I have had to seek and work with my own clients. While I specialize in Front-end, I also have knowledge in Back-end. My skills include mastery of agile methodologies, the use of GIT, data structures, algorithms, CSS frameworks, and design tools such as Illustrator and Photoshop. I have experience in both Front-end and Back-end development, as well as data architecture, using technologies such as JavaScript, React, Redux, Node, Express, SQL, HTML, CSS, and Git. I am skilled at problem-solving, adapt quickly to new challenges, and enjoy working in a team. Additionally, I have an A2 level of English proficiency.
          </Typography>
          <Typography variant='h6' align='left' mt='20px'>
          I am excited to take on new challenges and gain more experience to continue growing as a professional in the amazing world of programming. For a year, I dedicated myself to freelance design, collaborating with both my own clients and a Community Manager. I hope to contribute my skills and knowledge to future projects and continue progressing in this fascinating field.
          </Typography>
        <Container sx={{ display: 'flex', justifyContent: 'flex-start', mt:'50px' }}>
          <Button
            sx={{
              backgroundColor: 'none',
              color: 'white',
              '&:hover': {
                backgroundColor: '#750404',
              },
            }}
            component={Link} to='/home'
            >
            Back to Portfolio
          </Button>
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'flex-end', mt:'-35px'}}>
          <Button
            sx={{
                backgroundColor: 'none',
                color: 'white',
                '&:hover': {
                    backgroundColor: '#750404',
                },
            }}
            component={Link} to='/projects'
            >
            Go to Projects
          </Button>
        </Container>
      </Box>
    </div>
    </>
  );
}

export default About;
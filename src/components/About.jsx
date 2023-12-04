import { Box, Button, Container, Stack, Typography, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import fotoP from '../assets/fotoPerfil.jpg';
import Tags from './Tags';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showFullText, setShowFullText] = useState(false);
  
  const toggleTextVisibility = () => {
    setShowFullText((prev) => !prev);
  };
  
  const icons = {
    fontSize:'40px',
    verticalAlign: 'middle',
  }

  const divStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: `linear-gradient(to top, rgba(0, 0, 0, 20), rgba(0, 0, 0, 0)) 0 0/100% 100%, url(${fotoP}) center center/cover`,
  };

  const div ={
    display: 'flex',
    width: '100%',
    height: '1px',
    background: '#D9D9D9',
  }

  const containerPrin ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const boxone ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',  
    alignItems:'center',
    margin:'10px', 
    marginTop:'400px'
  }
 
  const conteBut ={
    display: 'flex',
    flexDirection: 'row', 
    height: '35px',
    width:'180px',
    justifyContent:'space-between',
    marginRight:'970px',
    marginTop:'15px',
    marginBottom:'5px'
  }

  const boxcont ={
    display: 'flex',
    flexDirection: 'column',
  }

  const mockup ={
    width: '100%',
    height: '100%',
    backgroundColor:'#3d3d3d',
    borderRadius:'20px',
    marginTop:'20px',
    padding: 5,
  }

  const buttonStyle ={
    width: '80px',
    height: '30px',
    background: '#FFF',
    color: '#002b17',
    fontSize:'12px',
    borderRadius:'5px',
    '&:hover': {
      backgroundColor: '#002b17',
      color: '#ffffff',
    },
  }
  
  return (
  <>
    <div style={ divStyle } /> 
    <Box id="about" sx={boxcont}>
      <Container sx={containerPrin} >
        <Box sx={boxone}>
          <Typography variant='h4' color={'#fff'} width={'600px'} >About Me</Typography>
        </Box>
      <div style={div} />
          <Box sx={conteBut}>
          <Button
            href="../RomeroBrunoCv.pdf" 
            download
            target="_blank"
            rel="noopener noreferrer"
            sx={ buttonStyle }
          >
            CV
          </Button>
          <Button
            href="../Portafolio.pdf" 
            download
            target="_blank"
            rel="noopener noreferrer"
            sx={ buttonStyle }
          >
            PORTFOLIO
          </Button>
          </Box>
      </Container>
      <Container>
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
      </Container>
      <Container  sx={{marginBottom:'100px'}}>
      <Typography variant='h5' color={'#fff'} sx={{marginTop:'40px', marginBottom:'20px'}}>
          Skills
      </Typography>
      <Tags />
      <Typography variant='h5' color={'#fff'} sx={{marginTop:'40px', marginBottom:'20px'}}>
          Social Networks
      </Typography>
      <Container sx={mockup}>
      <Stack direction="row" alignItems="center" justifyContent="space-around" width={'100%'}>
      <Link href="https://www.linkedin.com/in/bruno-romero-685188255/" target="_blank" rel="noopener">
        <Typography variant="h6" color="#fff" align='center'>
          <LinkedInIcon style={icons} />
          LinkedIn
        </Typography>
      </Link>
      <Link href="https://github.com/Brunex7" target="_blank" rel="noopener">
        <Typography variant="h6" color="#fff" align='center'>
          <GitHubIcon style={icons} />
          GitHub
        </Typography>
      </Link>
      <Link href="mailto:brunoromero200@gmail.com" target="_blank" rel="noopener">
        <Typography variant="h6" color="#fff" align='center'>
          <EmailIcon style={icons} />
          Email
        </Typography>
      </Link>
    </Stack>
      </Container>
      </Container>
    </Box>
  </>
  );
}
export default About;

// import { Box, Button, CardContent, Container, Typography } from '@mui/material';
// import React, { useEffect} from 'react';


// function Description() {

 
// }

// export default Description;

import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import Footer from './Footer';
import projects from '../media/project';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = {
    backgroundColor: 'black',
    border: '5px solid #1F1F1F',
    animation: 'fade-in 3.0s ease-in-out',
    borderRadius: '18px',
  };

  const cardAnimation = `
    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  const containerStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const gridContainerStyle = {
    margin: '0 8%',
    maxWidth: '1150px',
    height: 'auto',
    backgroundColor: '#101010',
    borderRadius: '55px',
    padding: '50px',
  };

  const buttonStyle = {
    borderRadius: '40px',
    backgroundColor: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: '#750404',
    },
  };

  return (
    <>
      <style>{cardAnimation}</style>
      <Box>
        <Container sx={{ color: '#000000', padding: '20px' }}>
          <Typography variant='h4' align='left'>
            Projects
          </Typography>
        </Container>
      </Box>
      <Container sx={containerStyle}>
        <Container sx={gridContainerStyle}>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} style={{ animationDelay: `${index * 0.1}s`, opacity: imageLoaded ? 1 : 0 }}>
                <Card style={cardStyle}>
                  <CardMedia
                    style={{ height: '200px' }}
                    component="img"
                    image={project.image}
                    alt="Project Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'none',
                        color: '#ffffff',
                        '&:hover': {
                          backgroundColor: '#002b17',
                          color: '#ffffff',
                        },
                      }}
                    >
                      Deploy
                    </Button>
                    <Button
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: '#none',
                        color: '#ffffff',
                        '&:hover': {
                          backgroundColor: '#002b17',
                          color: '#ffffff',
                        },
                      }}
                    >
                      Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
          <ScrollLink to='footer' className='link' smooth>
            <Button sx={buttonStyle}>
              <ExpandMoreIcon />
            </Button>
          </ScrollLink>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;

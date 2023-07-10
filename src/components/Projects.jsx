import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

import Footer from './Footer';
import projects from '../media/project';

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = {
    backgroundColor: 'black',
    border: '5px solid #1F1F1F',
    animation: 'fade-in 3.0s ease-in-out',
    borderRadius: '18px',
  };

  const containerStyle = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'30px'
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
    backgroundColor: 'none',
    color: '#ffffff',
    borderRadius:'10px',
    '&:hover': {
      backgroundColor: '#002b17',
      color: '#ffffff',
    },
  };

  return (
    <>
      <Box id ='project'>
        <Container sx={{ padding: '30px' }}>
          <Typography variant='h4' align='left'>
            Projects
          </Typography>
        </Container>
      </Box>

      <Container sx={containerStyle}>
        <Container sx={gridContainerStyle}>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
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
                      sx={ buttonStyle }
                    >
                      Deploy
                    </Button>
                    <Button
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={ buttonStyle }
                    >
                      Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>

      <Footer />
      
    </>
  );
};

export default Projects;

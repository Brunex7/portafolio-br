import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import projects from '../media/project';

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = {
    backgroundColor: '#000000',
    border: '1px solid #636363',
    padding:'5px',
    animation: 'fade-in 3.0s ease-in-out',
    borderRadius: '10px',
    position: 'relative',
  };

  const containerStyle = {
    margin: '60px 0 60px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 10px 0 10px'
  };

  const descriptionStyle = {
    position: 'absolute',
    width: '90%',
    marginTop:'-55px',
    padding: '0 0 0 18px',
    textAlign: 'left',
    color: 'white',
    fontSize:'12px'
  };

  const buttonStyle = {
    backgroundColor: 'none',
    width:'100%',
    color: '#ffffff',
    fontSize:'12px',
    borderRadius:'5px',
    '&:hover': {
      backgroundColor: '#002b17',
      color: '#ffffff',
    },
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: ' 10px 10px 0 0',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  };

  const gradientStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
  };


  const contButtom = {
    display:'flex',
    padding:'0',
    alignItems:'center',
    marginTop:'5px'
  }

  return (
    <>
      <Box id ='project' sx={containerStyle}>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card style={cardStyle}>
                <div style={imageContainerStyle}>
                  <CardMedia
                    style={imageStyle}
                    component="img"
                    image={project.image}
                    alt="Project Image"
                  />
                  <div style={gradientStyle} />
                </div>
                  <CardContent style={descriptionStyle}>
                    <Typography variant="body4" color="white">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={contButtom}>
                  {project.deployLink && (
                  <Button
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={ buttonStyle }
                  >
                      view deploy
                  </Button>
                  )}
                  {project.codeLink && (
                    <Button
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={ buttonStyle }
                    >
                      view code
                    </Button>
                  )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
    </Box>
    </>
  );
};

export default Projects;
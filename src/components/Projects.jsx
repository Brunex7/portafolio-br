import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const Projects = ({data, onClick}) => {
  if(!data){
    return null;
  }
  
  const {id, image, description } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-200px 0px', 
  });

  const cardStyle = {
    backgroundColor: '#000000',
    border: '1px solid #636363',
    padding:'5px',
    animation: 'fade-in 3.0s ease-in-out',
    borderRadius: '10px',
    position: 'relative',
    transform: inView ? 'translateY(0)' : 'translateY(100px)', 
    opacity: inView ? 1 : 0,
    transition: 'transform 1s, opacity 1s',
  };

  const containerStyle = {
    margin: '60px 0 60px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '0 10px 0 10px'
  };

  const descriptionStyle = {
    position: 'absolute',
    width: '90%',
    marginTop:'-70px',
    padding: '0 0 0 18px',
    textAlign: 'left',
    color: 'white',
    fontSize:'12px'
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: ' 5px 5px 0 0',
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
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
  };

  return (
    <>
      <Box id ='project' sx={containerStyle}>
        <div ref={ref} >
                <Card style={cardStyle}>
                  <CardActionArea onClick={() => onClick(id)}>
                <div style={imageContainerStyle}>
                  <CardMedia
                    style={imageStyle}
                    component="img"
                    image={image}
                    alt="Project Image"
                    />
                  <div style={gradientStyle} />
                  <CardContent style={descriptionStyle}>
                    <Typography variant="h6" color="white">
                      {description}
                    </Typography>
                  </CardContent>
                </div>
                  </CardActionArea>
                </Card>

        </div>
    </Box>
    </>
  );
};

export default Projects;
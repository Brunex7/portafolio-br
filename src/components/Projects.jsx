import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import projects from '../media/project';
import Footer from './Footer';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const cardStyle = {
    backgroundColor: '#750404',
    border: '5px solid #750404',
  };
  
  const Projects = () => {
    return (
        <>
        <Box>
          <Container sx={{ color: '#ffff', padding: '20px' }}>
            <Typography variant='h4' align='left'>
              Projects
            </Typography>
          </Container>
        </Box>
        <div style={{ margin: '50px 8%', maxWidth: '1150px' }}>
        <Grid container spacing={2} justifyContent="center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card style={cardStyle}>
                    <CardMedia 
                    style={{borderRadius:'18px'}}
                    component="img" 
                    height="200" 
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
                        <Button href={project.deployLink} target="_blank" rel="noopener noreferrer"
                        sx={{
                            backgroundColor: 'white',
                            color: '#750404',
                            '&:hover': {
                                backgroundColor: 'none',
                                color: 'white'
                            },
                        }}>
                            Deploy
                        </Button>
                        <Button href={project.codeLink} target="_blank" rel="noopener noreferrer"
                        sx={{
                            backgroundColor: 'white',
                            color: '#750404',
                            '&:hover': {
                                backgroundColor: 'none',
                                color: 'white'
                            },
                        }}>
                            Code
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
        <Container sx={{ display: 'flex', justifyContent: 'flex-start', mt:'80px' }}>
          <Button
            sx={{
              backgroundColor: 'none',
              color: 'white',
              '&:hover': {
                backgroundColor: '#750404',
              },
            }}
            component={RouterLink} to='/about'
            >
            Back to About Me
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
            }}>
                <ScrollLink to='footer' className='link' smooth>
                    <ExpandMoreIcon/>
                </ScrollLink>
          </Button>
        </Container>
        </div>
        <Footer />
        </>
    );
};
  

export default Projects;
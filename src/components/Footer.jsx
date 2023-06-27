import React from 'react';
import { Container, Grid, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const footerStyles = {
  backgroundColor: '#f5f5f5',
  padding: '30px',
  marginTop: 'auto',
};

const socialIconStyles = {
  margin: '8px',
  color: '#750404',
  width:'30px',
  height:'30px'
};

const Footer = () => {
  return (
    <footer style={footerStyles} id='footer'>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p>&copy; {new Date().getFullYear()} My Portfolio</p>
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.linkedin.com/in/bruno-romero-685188255/" target="_blank" rel="noopener">
              <LinkedInIcon style={socialIconStyles} />
            </Link>
            <Link href="https://github.com/Brunex7" target="_blank" rel="noopener">
              <GitHubIcon style={socialIconStyles} />
            </Link>
            <Link href="mailto:brunoromero200@gmail.com" target="_blank" rel="noopener">
              <EmailIcon style={socialIconStyles} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

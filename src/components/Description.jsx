import { Box, Button, CardContent, Container, Typography } from '@mui/material';
import React, { useEffect} from 'react';
import ColorPalette from './PaletaDeColor';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



function Description({data, onClose}) {

  const {title, description, image, deployLink, codeLink, mockup, info, lowFi} = data;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }
 
  const conteBut ={
    display: 'flex',
    flexDirection: 'column', 
    height: '35px',
    alignItems:'flex-end',
    justifyContent: 'space-between'
  }
  const boxcont ={
    display: 'flex',
    flexDirection: 'column',
  }

  const mockupStyle ={
    width: '100%',
    backgroundColor:'#3d3d3d',
    borderRadius:'20px',
    margin:'20px 0 30px 0',
    objectFit:'cover'
  }

  const lowDes ={
    width: '100%',
    backgroundColor:'#3d3d3d',
    borderRadius:'20px',
    marginTop:'20px',
    marginBottom:'40px',
    padding: 0,
    objectFit:'cover'
  }

  const buttonStyle ={
    width: '50px',
    height: '15px',
    background: '#FFF',
    color: '#002b17',
    fontSize:'12px',
    borderRadius:'5px',
    '&:hover': {
      backgroundColor: '#002b17',
      color: '#ffffff',
    },
  }

  const buttonClose ={
    width: '50px',
    background: 'none',
    color: '#fff',
    fontSize:'12px',
    borderRadius:'0',
    '&:hover': {
      backgroundColor: '#002b17',
      color: '#ffffff',
    },
  }

  const imgStyle = {
    width: '100%',
    height: '550px',
    objectFit: 'cover',
    display: 'flex',
  }
  
  return (
  <>
    <Box sx={boxcont}>
      <Button onClick={onClose} sx={buttonClose}> <ArrowBackIosIcon/> </Button>
        <img src={image} alt={title} style={imgStyle} />
      <Container sx={containerPrin} >
        <Box sx={boxone}>
          <Typography variant='h4' color={'#fff'} width={'600px'} >{title}</Typography>
          <Container sx={conteBut}>
          <Button
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={ buttonStyle }
          >
            DEPLOY
          </Button>
          <Button
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={ buttonStyle }
          >
            CODE
          </Button>
          </Container>
        </Box>
      <div style={div} />
      </Container>
      <Container>
        <Typography variant='boby4' color={'#fff'} fontSize={'20px'}>
          {description}
        </Typography>
      </Container>
      <Container>
        <Typography variant='h5' color={'#fff'} sx={{marginTop:'40px'}}>
          Mockup
        </Typography>
        <CardContent>
          <img src={mockup} alt={title} style={mockupStyle}/>
      </CardContent>
        <Typography variant='boby4' color={'#fff'} fontSize={'20px'}>
          {info}
        </Typography>
        {/* <Typography variant='h5' color={'#fff'} sx={{marginTop:'40px', marginBottom:'20px'}}>
          ColorPalette
        </Typography> */}
        {/* <ColorPalette /> */}
        <Typography variant='h5' color={'#fff'} sx={{marginTop:'40px', marginBottom:'20px'}}>
          LowFi & Desing
        </Typography>
        <CardContent>
          <img src={lowFi} alt={title}  style={lowDes}/>
        </CardContent>
      </Container>
    </Box>
  </>
  );
}

export default Description;

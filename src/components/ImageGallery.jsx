import React, { useEffect, useState } from 'react'
import imagesGroup from '../media/Images';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function ImageGallery() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(true);
    }, []);
    
    return (
      <Grid
        container
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridGap: '30px',
          marginTop: '50px',
        }}
      >
        {imagesGroup.map((subGroup, subGroupIndex) => (
          <Grid item xs={12} key={subGroupIndex} sx={{opacity: imageLoaded ? 1 : 0, 
            transition: 'opacity 4.0s'}}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                  <Button
                    onClick={onClickHandler}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      color: '#750404',  
                    }}
                  >
                    <ArrowBackIosIcon />
                  </Button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                  <Button
                    onClick={onClickHandler}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: 0,
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      color: '#750404',
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </Button>
                )
              }
            >
              {subGroup.map((image, index) => (
                <div
                  key={index}
                  style={{
                    aspectRatio: '5/8',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '18px',
                  }}
                >
                  <Typography variant="h6" style={{ color: '#ffffff' }}>
                    {image.title}
                  </Typography>
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>
        ))}
      </Grid>
    );
  }
  
  export default ImageGallery;
  
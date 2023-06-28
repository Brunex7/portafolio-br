import React, { useState } from 'react'
import imagesGroup from '../media/Images';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function ImageGallery() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
  
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
          <Grid item xs={12} key={subGroupIndex}>
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
                      color:'#750404'
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
                      color:'#750404'
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
                    boxShadow: '4px 6px 8px #0f0f0f',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: imageLoaded ? 1 : 0,
                      transition: 'opacity 0.4s',
                    }}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {hoveredIndex === index && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 1,
                        transition: 'opacity 1.0s',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="h6" style={{ color: '#ffffff' }}>
                        {image.title}
                      </Typography>
                      <Typography variant="body2" style={{ color: '#ffffff', padding: '10px', marginBottom: '-140px' }}>
                        {image.description}
                      </Typography>
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
          </Grid>
        ))}
      </Grid>
    );
}
  
export default ImageGallery;
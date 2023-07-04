import React, { useEffect, useState } from 'react';
import imagesGroup from '../media/Images';
import { Grid, Typography } from '@mui/material';

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
        <Grid item xs={12} key={subGroupIndex} sx={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 4.0s' }}>
          {subGroup.map((image, index) => (
            <div
              key={index}
              style={{
                aspectRatio: `${image.width} / ${image.height}`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '18px',
              }}
            >
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
        </Grid>
      ))}
    </Grid>
  );
}

export default ImageGallery;

  
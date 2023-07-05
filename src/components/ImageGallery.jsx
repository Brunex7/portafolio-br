import React, { useEffect, useState } from 'react';
import imagesGroup from '../media/Images';
import { Grid } from '@mui/material';

function ImageGallery() {

  return (
    <Grid
      container
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '30px',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '30px',
        paddingRight: '30px',
      }}
    >
      {imagesGroup.map((subGroup, subGroupIndex) => (
        <Grid item xs={12} key={subGroupIndex}>
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
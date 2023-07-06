import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Transition } from 'react-transition-group';

import imagesGroup from '../media/Images';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

function ImageGallery() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Transition in={isVisible} timeout={duration}>
      {(state) => (
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
        ...defaultStyle,
        ...transitionStyles[state],
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
    )}
    </Transition>
  );
}

export default ImageGallery;
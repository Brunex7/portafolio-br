import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Transition } from 'react-transition-group';

import imagesGroup from '../media/Images';

const duration = 400;

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
    const handleScroll = () => {
      const element = document.getElementById('image-gallery');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = windowHeight - rect.height * 0.2;
        if (rect.top <= threshold && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="image-gallery">
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
    </div>
  );
}

export default ImageGallery;
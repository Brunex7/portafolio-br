import React from 'react';
import { Grid } from '@mui/material';
import Items from '../media/Icons';

const Tags = () => {

  return (
    <Grid container alignItems='center' justifyContent='center' spacing={1} sx={{width:'auto', marginBottom:'40px'}}>
        {Items.map((items, index) => (
            <Grid item key={index} sx={{width: '80px', margin:'4px'}}>
                <img src={items} alt={`Items ${index + 1}`} style={{width: '80px'}} />
            </Grid>
        ))}
    </Grid>
  );
};

export default Tags;
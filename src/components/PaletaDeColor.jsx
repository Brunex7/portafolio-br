import React from 'react';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

const colors = ['#220B4E', '#D4CDFF', '#410F70', '#FFFFFF', '#000000']; 

const ColorPalette = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");

    const boxSize = isMobile ? '3rem' : '10rem'; // Define el tamaño del cuadro en función del media query

    return (
        <Grid container spacing={1} justifyContent="space-between">
            {colors.map((color, index) => (
                <Grid item key={index}>
                    <div
                        style={{
                            width: boxSize,
                            height: boxSize,
                            border: '1px solid #000',
                            cursor: 'pointer',
                            backgroundColor: color,
                            borderRadius:'10px',
                        }}
                    ></div>
                </Grid>
            ))}
        </Grid>
    );
};

export default ColorPalette;

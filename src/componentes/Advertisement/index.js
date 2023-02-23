import * as React from 'react';
import './Advertisement.css'
import Box from '@mui/material/Box';

// Função Principal
export default function Advertisement() {


    return(
        <Box className='advertisement' sx={{
            margin: '30px',
            display: 'flex',
        }}>
            <img alt='advertisement' src='https://via.placeholder.com/1500x150'/>
        </Box>
    );

}

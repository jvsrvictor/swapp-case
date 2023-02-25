import * as React from 'react';
import './Advertisement.css'
import Box from '@mui/material/Box';

// Função Principal
export default function Advertisement() {


    return(
        <Box className='advertisement' sx={{
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
        }}> 
            <script src='https://www.swappcase.com/ad.js' type="text/javascript" ></script>
        </Box>
    );

}

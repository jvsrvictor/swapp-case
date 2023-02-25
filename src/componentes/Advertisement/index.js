import * as React from 'react';
import './Advertisement.css'
import Box from '@mui/material/Box';
import {Helmet} from "react-helmet";

// Função Principal
export default function Advertisement() {


    return(
        <Box className='advertisement' sx={{
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
        }}> 
            <Helmet>
                <script type="text/javascript" src='https://www.swappcase.com/ad.js'>
                </script>
            </Helmet>
        </Box>
    );

}

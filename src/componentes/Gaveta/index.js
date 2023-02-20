// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
// ----------------------------------------------------------
// COMPONENTE - GAVETA

// B I B L I O T E C A S

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

// OUTROS
import * as React from 'react';

// CSS
import './Gaveta.css'

// ICONES

// F U N Ç Õ E S

// Função Principal
export default function Gaveta (){
    const [gaveta, setGaveta] = React.useState(false)

    return(
        <div className='Gaveta'>
            <IconButton size='large' edge='start' onClick={()=>setGaveta(true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor='left' open={gaveta} onClose={()=>setGaveta(false)}>
                <Box p={2} width={'250px'} textAlign={'center'}>
                    <Typography variant='h6' component={'div'}>
                        Side Panel
                    </Typography>

                </Box>
            </Drawer>
        </div>
    );
}
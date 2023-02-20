// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
// ----------------------------------------------------------
// COMPONENTE - CABEÇALHO

// B I B L I O T E C A S

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// OUTROS
import * as React from 'react';

// CSS
import './Cabecalho.css'

// ICONES

// F U N Ç Õ E S

// Função Principal
export default function Cabecalho (){

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" align='center' sx={{ flexGrow: 1 }}>
                    swapp<strong>CASE</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
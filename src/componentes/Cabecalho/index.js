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

// ICONES
import logotipo from './swappcase.png'

// F U N Ç Õ E S

// Função Principal
export default function Cabecalho (){

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{display:'flex', justifyContent:'center'}} variant="h5" component="div" align='center' sx={{ flexGrow: 1 }}>
                    <img height={37} style={{}} src={logotipo} alt='Logotipo'/>&nbsp;SWAPP<strong>CASE</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
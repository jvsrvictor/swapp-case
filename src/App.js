// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
//
// COMPONENTE - APP

// B I B L I O T E C A S

// MUI
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// PROJETO
import PainelPrincipal from './componentes/PainelPrincipal/index.js'
import Advertisement from './componentes/Advertisement/index.js'
import Cabecalho from './componentes/Cabecalho/index.js'
import Gaveta from './componentes/Gaveta/index.js'
import Rodape from './componentes/Rodape/index.js'

// CSS
import './App.css'

// OUTROS
import * as React from 'react';

// FONTES
import '@fontsource/ubuntu';

// ICONES

// F U N Ç Õ E S

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ef6c00',
    },
    secondary: {
      main: '#b0bec5',
    },
    background: {
      default: '#424242',
      paper: '#212121',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
  },
});

// Função Principal
function App() {


  return (
    <ThemeProvider theme={theme}>
      <Cabecalho/>
      <Gaveta/>
      <Box sx={{
        backgroundColor: 'background.default',
        padding: { xs: "1em", md: "2em"},
      }}>
        {/* <Advertisement/> */}
        <PainelPrincipal/>
        {/* <Advertisement/> */}
        <Rodape/>
      </Box>
    </ThemeProvider>
  );
}

export default App;

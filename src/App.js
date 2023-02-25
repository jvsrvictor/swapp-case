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
import PainelBinario from './componentes/PainelBinario/index.js'
import PainelEfeitos from './componentes/PainelEfeitos/index.js'
import Cabecalho from './componentes/Cabecalho/index.js'
import Gaveta from './componentes/Gaveta/index.js'
import Rodape from './componentes/Rodape/index.js'

// CSS
import './App.css'

// OUTROS
import * as React from 'react';

// FONTES
import '@fontsource/ubuntu';
import Advertisement from './componentes/Advertisement/index.js';

// ICONES

// F U N Ç Õ E S

// Definição de Tema
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8a00',
    },
    secondary: {
      main: '#b0bec5',
    },
    background: {
      default: '#3f3f3f',
      paper: '#212121',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontSize: 16,
  },
});

// Função Principal
function App(props) {

  return (
    <ThemeProvider theme={theme}>
      <Cabecalho/>
      <Gaveta tool={props.tool}/>
      <Box sx={{
        backgroundColor: 'background.default',
        padding: { xs: "1em", md: "2em"},
        paddingTop: { xs: "0", md: "0"},
      }}>
        <Advertisement/>
        {
          {
            0: <PainelPrincipal />,
            1: <PainelBinario />,
            2: <PainelEfeitos />
          }[props.tool]
        }
        <Advertisement/>
        <Rodape/>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
// ----------------------------------------------------------
// COMPONENTE - RODAPÉ

// B I B L I O T E C A S

// MUI
import Typography from '@mui/material/Typography';

// CSS
import './Rodape.css'

// F U N Ç Õ E S

// Função Principal
export default function Rodape(){


    return(
        <Typography className='rodape' variant="h7" component="div" align='center' sx={{ flexGrow: 1 }}>
            Copyright ©2023 - 2023 | SWAPPCASE Ltd<br/>
            <a href='#'>Privacy Policy</a> | <a href='#'>Terms of Use</a> 
        </Typography>
    );
}
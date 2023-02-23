// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
// ----------------------------------------------------------
// COMPONENTE - RODAPÉ

// B I B L I O T E C A S

// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// PROJETO
import PoliticaPrivacidade from '../PoliticaPrivacidade/index.js'
import TermosUso from '../TermosUso/index.js'

// CSS
import './Rodape.css'

import * as React from 'react';

// F U N Ç Õ E S

// Função Principal
export default function Rodape(){
    const [openPrivacidade, setOpenPrivacidade] = React.useState(false);
    const [openTermos, setOpenTermos] = React.useState(false);

    const handleClickOpen = (policyType) => () => {
        if(policyType==='privacidade'){
            setOpenPrivacidade(true);
        }else{
            setOpenTermos(true);
        }

      };
    
      const handleClose = () => {
        setOpenPrivacidade(false);
        setOpenTermos(false);
      };

    return(
    <>
        <Dialog
            open={openTermos}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogContent>
                <TermosUso/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Ok, I agree</Button>
            </DialogActions>

        </Dialog>

        <Dialog
            open={openPrivacidade}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogContent>
                <PoliticaPrivacidade/>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Ok, i agree</Button>
            </DialogActions>

        </Dialog>

        <Typography className='rodape' variant="h7" component="div" align='center' sx={{ flexGrow: 1, marginTop:{ xs: 3 , md: 5} }}>
            Copyright ©2023 - 2023 | SWAPPCASE Ltd<br/>
            <a onClick={handleClickOpen('privacidade')}>Privacy Policy</a> | <a onClick={handleClickOpen('termos')}>Terms and Conditions</a> 
        </Typography>
    </>
        
    );
}
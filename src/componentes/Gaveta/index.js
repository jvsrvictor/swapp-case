// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
// ----------------------------------------------------------
// COMPONENTE - GAVETA

// B I B L I O T E C A S

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

// PROJETO
import PoliticaPrivacidade from '../PoliticaPrivacidade/index.js'
import TermosUso from '../TermosUso/index.js'
import SobreAutor from '../SobreAutor/index.js'

// OUTROS
import * as React from 'react';

// ICONES
import MenuIcon from '@mui/icons-material/Menu';

// F U N Ç Õ E S

// Função Principal
export default function Gaveta (){
    const [gaveta, setGaveta] = React.useState(false)

    const [openPrivacidade, setOpenPrivacidade] = React.useState(false);
    const [openTermos, setOpenTermos] = React.useState(false);
    const [openAutor, setOpenAutor] = React.useState(false);

    const handleClickOpen = (policyType) => () => {
        if(policyType==='privacidade'){
            setOpenPrivacidade(true);
        }else if(policyType==='termos'){
            setOpenTermos(true);
        }else{
            setOpenAutor(true);
        }
    };
    
    const handleClose = () => {
        setOpenPrivacidade(false);
        setOpenTermos(false);
        setOpenAutor(false);
    };

    return(
        <Box sx={
            {
                float:'left',
                position:'absolute',
                top:'6px',
                left:'15px',
            }
        }>
            <Dialog
                open={openTermos}
                onClose={handleClose}
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
            >
                <DialogContent>
                    <PoliticaPrivacidade/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok, i agree</Button>
                </DialogActions>
                
            </Dialog>

            <Dialog
                open={openAutor}
                onClose={handleClose}
            >
                <DialogContent>
                    <SobreAutor/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Nice</Button>
                </DialogActions>
                
            </Dialog>

            <IconButton size='large' edge='start' onClick={()=>setGaveta(true)}>
                <Tooltip title="More Tools">
                    <MenuIcon/>
                </Tooltip>
            </IconButton>

            <Drawer anchor='left' open={gaveta} onClose={()=>setGaveta(false)}>

                {/* CONTEUDO DA GAVETA LATERAL */}
                <Box width={'300px'} >
                    
                    <Typography padding={3} variant="h5" component="div" align='center' sx={{ flexGrow: 1 }}>
                    swapp<strong>case</strong>.com
                    </Typography>


                    <Divider />

                    <List>
                        <Typography padding={2} variant="h7" component="div" sx={{ flexGrow: 1 }}>
                            <strong>OTHER TOOLS</strong>
                        </Typography>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Wide Text Generator" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Strikethrough Text Generator" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Glitch Text Generator" />
                            </ListItemButton>
                        </ListItem>
                        
                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Reverse Text Generator" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Mirrored Text Generator" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Upside Down Text Generator" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Online Notepad/To Do List" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton disabled>
                                <ListItemText primary="Binary Text Converter" />
                            </ListItemButton>
                        </ListItem>

                    </List>

                    <Divider />

                    <List>
                        <Typography padding={2} variant="h7" component="div" sx={{ flexGrow: 1 }}>
                            <strong>ABOUT</strong>
                        </Typography>

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleClickOpen('termos')}>
                                <ListItemText primary="Terms and Conditions" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleClickOpen('privacidade')}>
                                <ListItemText primary="Privacy Policy" />
                            </ListItemButton>
                        </ListItem>

                        

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleClickOpen('autor')}>
                                <ListItemText primary="Author" />
                            </ListItemButton>
                        </ListItem>

                    </List>


                </Box>
            </Drawer>
        </Box>
    );
}
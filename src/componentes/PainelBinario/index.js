// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
//
// COMPONENTE - PAINEL CONVERSOR BINÁRIO

// B I B L I O T E C A S

// MUI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// CSS
import './PainelBinario.css'

// OUTROS
import * as React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

// ICONES
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

// F U N Ç Õ E S

// Função para notificação de Clipboard
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Função Principal
export default function PainelBinario() {

  // Sistema de UseState para as tabs
  const [value, setValue] = React.useState('text');
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue==='binary'){
      texto==='' ? setTexto('') : setTexto(converteBinario(texto))
    }else{
      texto==='' ? setTexto('') : setTexto(converteTexto(texto))
    }
    
  };

  // UseState para digitação do texto
  const [texto, setTexto] = React.useState('');
  const handleType = (event) =>{
    var textoTemp = event.target.value;
    value==='binary' ? setTexto(textoTemp.replace(/[^01 ]/g, "")) : setTexto(textoTemp)
    setCopiado(false)
  };

  // UseState para notificação de copiado
  const [copiado, setCopiado] = React.useState(false);
  const handleCopiado = () => {
    setCopiado(true);
  };

  const handleCopiadoClose = (event, reason) => {
    setCopiado(false);
  };


  // Função para apagar o conteúdo
  const apagarTexto = (event) =>{
    setTexto('');
    setCopiado(false)
  }

  // Função para baixar o texto em TXT
  function downloadTexto() {
    const blob = new Blob([texto], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Swappcase Text";
    link.href = url;
    link.click();
  }

  // Função para converter texto em Binário
  const converteBinario = (textoOriginal) => {
    var textoBinario = '';
    textoBinario = textoOriginal.split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    return textoBinario;
  }

  // Função para converter binário em Texto
  const converteTexto = (textoOriginal) => {
    textoOriginal = textoOriginal.split(' ');
    return textoOriginal.map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
  }
  

  return (
    <Box> 
      <Paper elevation={4}>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered >
              <Tab style={{fontWeight:'bold'}} className='toggleBtn' label="TEXT" value="text" />
              <Tab disabled icon={<SyncAltIcon/>} className='toggleBtn'></Tab>
              <Tab style={{fontWeight:'bold'}} className='toggleBtn' label="BINARY" value="binary" />
            </Tabs>
          </Box>
        </Box>

        <Box sx={{padding:5, paddingTop: 3, paddingBottom: 3 }}>
            <TextField
              id="filled-multiline-static"
              multiline
              minRows={7}
              value={texto}
              variant="standard"
              onInput={handleType}
              fullWidth
            />
        
          <Stack flexDirection={{ xs: "column", md: "row"}} className='actionBtn' spacing={1} style={{position: 'relative', top: 10, right:0 ,zIndex:1, float: 'right'}}>
            
            <Tooltip title="Copy to Clipboard">
              <IconButton aria-label="copy">
                <CopyToClipboard text={texto} onCopy={handleCopiado}>
                  <ContentCopyIcon />
                </CopyToClipboard>
              </IconButton>
            </Tooltip> 
            
            <Tooltip title="Download Text">
              <IconButton onClick={downloadTexto} aria-label="download">
                <DownloadIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Clear">
              <IconButton onClick={apagarTexto} aria-label="clear">
                <ClearIcon />
              </IconButton>
            </Tooltip>

          </Stack>
          
          <Box className='counter'>
            <Stack
              flexDirection={{ xs: "column", md: "row"}}
              >
              <p><strong>CHARACTERS:&nbsp;</strong>{texto.length}&nbsp;&nbsp;&nbsp;</p>
              {/* <p><strong>WORDS:&nbsp;</strong>{(!texto || /^\s*$/.test(texto)) ? 0 : texto.match(/[\w\d’'-]+/gi).length}&nbsp;&nbsp;&nbsp;</p>
              <p><strong>LINES:&nbsp;</strong>{(!texto || /^\s*$/.test(texto)) ? 0 : texto.split(/\r\n|\r|\n/).length}&nbsp;&nbsp;&nbsp;</p> */}

            </Stack>
          </Box>
        </Box>
        
      </Paper>

      <Snackbar open={copiado} autoHideDuration={6000} onClose={handleCopiadoClose}>
        <Alert onClose={handleCopiadoClose} severity="success" sx={{ width: '100%' }}>
          <strong>Text Copied!</strong>
        </Alert>
      </Snackbar>

    </Box>
  );
}

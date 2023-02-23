// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
//
// COMPONENTE - PAINEL PRINCIPAL

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
import './PainelPrincipal.css'

// OUTROS
import * as React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

// ICONES
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

// F U N Ç Õ E S

// Função para notificação de Clipboard
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Função Principal
export default function PainelPrincipal() {

  // Sistema de UseState para as tabs
  const [value, setValue] = React.useState('original');
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue==='original'){
      setTexto(textoOriginal)
    }else if(newValue==='sentence'){
      setTexto(sentenceCase(texto.toLocaleLowerCase()))
    }else if(newValue==='upper'){
      setTexto(texto.toLocaleUpperCase())
    }else if(newValue==='lower'){
      setTexto(texto.toLocaleLowerCase())
    }else if(newValue==='capitalize'){
      setTexto(capitalizeCase(texto.toLocaleLowerCase()))
    }else if(newValue==='invert'){
      setTexto(invertCase(texto))
    }else if(newValue==='alternate'){
      setTexto(alternateCase(texto))
    }
  };

  // Salvando o texto original em um UseState
  const [textoOriginal, setTextoOriginal] = React.useState('');
  const salvaTextoOriginal = (textoOriginal) =>{
    setTextoOriginal(textoOriginal)
  };

  // UseState para digitação do texto
  const [texto, setTexto] = React.useState('');
  const handleType = (event) =>{
    var textoTemp = event.target.value;
    setTexto(textoTemp)
    salvaTextoOriginal(textoTemp)
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

  // Função para inverter o case da frase
  const invertCase = (textoOriginal) => {
    var textoFinal = "";
    for(var i = 0; i<textoOriginal.length; i++){
        if(textoOriginal[i] === textoOriginal[i].toLowerCase()){
          textoFinal += textoOriginal[i].toUpperCase();
        }else {
          textoFinal += textoOriginal[i].toLowerCase();
        }
    }
    return textoFinal;
  }

  // Função para inverter o case da frase
  const alternateCase = (textoOriginal) => {
    var textoFinal = "";
    var flag = true;
    for(var i = 0; i<textoOriginal.length; i++){
      if(flag){
        textoFinal += textoOriginal[i].toLowerCase()
        flag = false;
      }else{
        textoFinal += textoOriginal[i].toUpperCase()
        flag = true;
      }
      
    }
    return textoFinal;
  }

  // Função para dar Uppercase na primeira letra de cada palavra
  const capitalizeCase = (textoOriginal) => {
    var textoFinal = textoOriginal.split(" ");
    console.log(textoFinal)
    
    for (let i = 0; i < textoFinal.length; i++) {
      textoFinal[i] = textoFinal[i][0].toUpperCase() + textoFinal[i].substr(1);
    }
   
    textoFinal = textoFinal.join(" ");
    return textoFinal;
  }


  // Função para converter o case para frase
  const sentenceCase = (textoOriginal) => {
    var textoFinal = textoOriginal.split(". ");
    textoFinal = textoFinal.filter(e => e !== '')
    
    for (let i = 0; i < textoFinal.length; i++) {
      textoFinal[i] = textoFinal[i][0].toUpperCase() + textoFinal[i].substr(1);
    }
    
    textoFinal = textoFinal.join(". ");
    return textoFinal;
  }

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
    link.download = "toggleCASE";
    link.href = url;
    link.click();
  }

  return (
    <Box> 
      <Paper elevation={4}>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons >
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Original" value="original" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Sentence Case" value="sentence" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="UPPERCASE" value="upper" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="lowercase" value="lower" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Capitalized Case" value="capitalize" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="iNVERT cASE" value="invert" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="aLtErNaTiNg cAsE" value="alternate" />
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
              <p><strong>WORDS:&nbsp;</strong>{(!texto || /^\s*$/.test(texto)) ? 0 : texto.match(/[\w\d\’\'-]+/gi).length}&nbsp;&nbsp;&nbsp;</p>
              <p><strong>LINES:&nbsp;</strong>{(!texto || /^\s*$/.test(texto)) ? 0 : texto.split(/\r\n|\r|\n/).length}&nbsp;&nbsp;&nbsp;</p>
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

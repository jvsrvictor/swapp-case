// Bibliotecas
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import './PainelPrincipal.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

// Icones
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

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
    if(newValue=='original'){
      setTexto(textoOriginal)
    }else if(newValue=='sentence'){
      setTexto(sentenceCase(texto))
    }else if(newValue=='upper'){
      setTexto(texto.toLocaleUpperCase())
    }else if(newValue=='lower'){
      setTexto(texto.toLocaleLowerCase())
    }else if(newValue=='capitalize'){
      setTexto(capitalizeCase(texto))
    }else if(newValue=='invert'){
      setTexto(invertCase(texto))
    }else if(newValue=='alternate'){
      setTexto(alternateCase(texto))
    }else if(newValue=='title'){
      setTexto(titleCase(texto))
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

  // Função para converter o case para título
  const titleCase = (textoOriginal) => {
    var textoFinal = textoOriginal.split(" ");
    console.log(textoFinal)
    
    for (let i = 0; i < textoFinal.length; i++) {
      textoFinal[i] = textoFinal[i][0].toUpperCase() + textoFinal[i].substr(1);
    }

    console.log(textoFinal)
    
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
    <Box
      sx={{
        //backgroundColor: '#2a2e32',
        padding: 7,
        '&:hover': {
          //backgroundColor: '#000000',
        },
      }}
    > 
      <Box sx={{
        //backgroundColor: '#FFFFFF',
        borderRadius:2,
        boxShadow:'0 1px 4px 0 rgb(0 0 0 / 37%)',
        '&:hover': {
          //backgroundColor: '#000000',
        },
      }}>


        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons >
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Original" value="original" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Sentence Case" value="sentence" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="UPPERCASE" value="upper" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="lowercase" value="lower" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Capitalized Case" value="capitalize" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="iNVERT cASE" value="invert" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="aLtErNaTiNg cAsE" value="alternate" />
              <Tab style={{textTransform:'none', fontWeight:'bold'}} className='toggleBtn' label="Title of Case" value="title" />
            </Tabs>
          </Box>
        </Box>

        <Box sx={{padding:5, paddingBottom:9, paddingTop: 3 }}>
            <TextField
              id="filled-multiline-static"
              multiline
              minRows={7}
              value={texto}
              variant="standard"
              onInput={handleType}
              fullWidth
              inputProps={{ maxLength: 5000 }}
            />
        
          <Stack direction="row" className='actionBtn' spacing={1} style={{position: 'relative', top: 10, right:0 ,zIndex:1, float: 'right'}}>
            
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
            <p>{texto.length} / 5.000</p>
          </Box>
        </Box>
        
      </Box>

      <Snackbar open={copiado} autoHideDuration={6000} onClose={handleCopiadoClose}>
        <Alert onClose={handleCopiadoClose} severity="success" sx={{ width: '100%' }}>
          Text Copied!
        </Alert>
      </Snackbar>

    </Box>
  );
}

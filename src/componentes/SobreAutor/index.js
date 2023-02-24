// SWAPPCASE.COM
// AUTOR: JVSRVICTOR
// DATA: 18/02/2023
// ----------------------------------------------------------
// COMPONENTE - SOBRE O AUTOR

// B I B L I O T E C A S

// CSS
import './SobreAutor.css'

//IMAGENS

// MUI
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


// F U N Ç Õ E S


// Função Principal
export default function SobreAutor(){
    return(
        <>  
            <h2>About the Author</h2>
            <Box sx={{
                display: 'flex',
                position: 'relative',
            }}>
                <Box sx={{
                    backgroundImage: 'url(https://github.com/jvsrvictor.png) ',
                    backgroundSize: '100% 100%',
                    height:100,
                    width: 100,
                    borderRadius:400,
                }}></Box>
                
                <h1 style={{marginLeft: 20,}}><Link underline="hover" color="inherit" href='https://github.com/jvsrvictor'>jvsrvictor</Link></h1>
            </Box>
            <p>Hello! My name is Victor and I am the author of this website. I'm a junior professional in Front End programming, more specifically in React. I've always enjoyed creating and developing systems. Therefore, I decided to carry out my degree in Computer Engineering at the <a href='https://ifce.edu.br/'>Federal Institute of Education, Science and Technology of Ceará (IFCE)</a>.</p>
            <p>During the bachelor's degree I had the opportunity to develop my passion for programming while exercising my experience in the most diverse types of projects, combining knowledge with good practices.</p>
            <p>Throughout my career, I've worked on several projects, from personal ones, which you can find on my GitHub, to public offices and companies of the Federal Government of Brazil. My focus has always been on helping companies grow through my natural expertise in the area of Computer Engineering, creating strategies that combine content, quality, innovative design and good user experience.</p>
        </>
    );
}
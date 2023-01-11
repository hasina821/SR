import React,{useState} from "react"
import {Modal,Box,Stack,Container } from "@mui/material"
import {styled,makeStyles} from "@mui/styles"
import { Height } from "@mui/icons-material"
import { Typography,Grid } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import StyledButton from "./StyledButton";
import { Color } from "../palette/color";
import { Link } from "react-router-dom"

const MystyledBox  = styled(Box)({
  width:'40%',
  overflowY:'scroll',
  background:'#fff',
  borderRadius:5,
  border:'none',
  padding:'2%',
  height:"600px"

})

export const Styleddivone=styled('h4')({
  textAlign:'center',
  color:'white',
  fontWeight:"bold",
  fontSize:"18px"
})

const CloseIconStyled = styled(CloseIcon)({
  cursor:'pointer',
  position:'relative',
  top:'3px',
  left:'95%',
  color:'red'
})
const StyledFirsttitle=styled('p')({
  color:Color.primary,
  fontSize:"18px",
  fontWeight:'800',
  lineHeight:'20px',
  textAlign:'center',
  marginBottom:'5%'
})

const PostCard  = styled(Box)({
    width:'40%',
    overflowY:'scroll',
    background:'#fff',
    borderRadius:5,
    border:'none',
    padding:'2%',
  })
  const useStyles = makeStyles((theme)=>({
    root: {
     height:'90px',
     width:'210px',
     fontFamily:'Arial',
     padding:'5px 5px 5px 5px',
     borderRadius:'5px',
     margin:'10px 0px 10px 0px',
     cursor:'pointer',
     fontSize:'16px',
     transition:'all 0.8s',
     '&:hover':{
          boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      "& a":{
        textDecoration:'none'
      }
    },
    model:{
      width:'100px',
      height:'22px',
      background:'#ED4C67',
      borderRadius:'5px',
      color:"white",
      textAlign:'center',
      fontWeight:'bold',
      '& .p-model':{
          fontSize:'11px',
          color:'#fff'
      }
    },
    model2:{
      width:'100px',
      height:'22px',
      color:"white",
      background:'#006266',
      borderRadius:'5px',
      textAlign:'center',
      fontWeight:'bold',
      '& .p-model':{
          fontSize:'11px',
          color:'#fff'
      }
    },
    title:{
      display:'flex',
      flexWrap:'wrap',
      textDecoration:'none',
      color:'#000',
      overflow:'auto',
      marginTop:'15px',
      '& .p-title':{
            fontWeight:'bold',
            
        }
    }
  }));

export default function PostModal ({nom,urgent,pdc,refe}) {
  const classes = useStyles();
  const [isOpen, setIsOpen] =  useState(false)
    
  const handleOpen = () =>{
    setIsOpen(true)
  }

  const handleClose = () =>{
    setIsOpen(false)
    
  }
  return(
    <>
    
      <Grid item xs={3} lg={3} md={3}>
                            <Modal
                                    open={isOpen}
                                    onClose={handleClose}
                                    sx={{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        overflowY:'scroll',
                                        paddingTop:'0px'
                                    }}
                                    > 
                                    <MystyledBox>
                                    <Box>
                                        <CloseIconStyled onClick={handleClose}/>
                                            <Box>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                    <Container>
                                                        <StyledFirsttitle>
                                                            {nom}
                                                        </StyledFirsttitle>
                                                        <Grid container gap={2}>
                                                            <Grid item xs={12} lg={12} >
                                                                    <img style={{width:"100%"}} src={`http://127.0.0.1:8000/${pdc}`}>
                                                                    </img>
                                                            </Grid>
                                                            <Grid item xs={12} lg={12}>
                                                                    <Stack spacing={1} mt={4} ml={3}>
                                                                        <Grid container spacing={1} pt={1}>
                                                                            <StyledButton 
                                                                                        variant='contained'   
                                                                                >
                                                                                <Link to={`/addpostclient/${refe}/${nom}`}>
                                                                                        <Styleddivone>
                                                                                                Postuler
                                                                                        </Styleddivone>
                                                                                </Link>
                                                                            </StyledButton> 
                                                                        </Grid>
                                                                    </Stack>
                                                            </Grid>
                                                        </Grid>
                                                    </Container>
                                                    </Grid>
                                                </Grid>  
                                        </Box>
                                    </Box>
                                    </MystyledBox>
                                </Modal>
                             <Box className={classes.root}  style={{
                                background: `url(http://127.0.0.1:8000/api/), #ddd`,
                                backgroundSize:'cover',
                                display:'flex',
                                flexDirection:'row'
                            }} >
                                <Box flex={3}>
                                <Box className={urgent=="1"?classes.model:classes.model2}>
                                    <h6  className='text-sm'>
                                        {urgent=="1"?"Urgent":"Assez urgent"}
                                    </h6>
                                </Box>
                                <Box className={classes.title}>
                                <Typography onClick={handleOpen} variant='p' className='p-title' style={{color:"#555"}} noWrap>
                                    {nom.length > 15 ?nom.slice(0,15) + "..." : nom}
                                </Typography>
                                </Box>  
                                </Box>
                                <Box sx={{ flex:1}}>
                                <IconButton 
                                    aria-label="Modifier"  
                                    title='Modifier'
                                    id='update-button' 
                                    sx={{ 
                                    backgroundColor: '#FFFFFFB0',
                                    '&:hover':{
                                        backgroundColor: '#172B4D',
                                        color:'#FFFFFFB0'
                                    } 
                                    }}
                                    onClick={() => handleOpen()}
                                >
                                    <EditIcon id='update-icon'   fontSize='1px' />
                                </IconButton>
                                </Box>
                            </Box>
                    </Grid>      
    </>
  )
}

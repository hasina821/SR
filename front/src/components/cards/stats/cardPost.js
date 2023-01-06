import * as React from 'react';
import { useState } from 'react';
import {Box, Typography,Modal} from '@mui/material';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {styled} from "@mui/styles";
import PostCardModal from '../../Modal/PostCardModal';

const MystyledBox  = styled(Box)({
    width:'40%',
    overflowY:'scroll',
    background:'#fff',
    borderRadius:5,
    border:'none',
    padding:'2%',
    height:"600px"

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
    width:'55px',
    height:'22px',
    background:'#500',
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
    color:'white',
    overflow:'auto',
    marginTop:'15px',
    '& .p-title':{
          fontWeight:'bold',
          
      }
  }
}));


export default function CardPost({ menu }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] =  useState(false)
  
  const handleOpen = () =>{
    setIsOpen(true)
  }

  const handleClose = () =>{
    setIsOpen(false)
  }
  const imageLink = "https://mediahttps://www.codeur.com/blog/wp-content/uploads/2018/12/codeur-developpeur-web.jpg.gettyimages.com/id/1176475543/fr/vectoriel/sc%C3%A8ne-de-for%C3%AAt-avec-laurore.jpg?s=612x612&w=gi&k=20&c=kVx724HVFcIP_SuCgZRAOgrxpOUbIouE7YUMJqk50JE=";

  {/*const path = "/kanban/" + menu.id*/}
  return (
    <>
        <Box className={classes.root}  style={{
            background: `url(${imageLink}), #ddd`,
            backgroundSize:'cover',
            display:'flex',
            flexDirection:'row'
        }} >
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
                    <PostCardModal handleClose={handleClose}/>
                </MystyledBox>
            </Modal>
            <Box flex={3} >
                <Box className={classes.model}>
                    <Typography variant='p' className='p-model'>
                        Urgent
                    </Typography>
                </Box>
                <Box className={classes.title}>
                <Typography onClick={handleOpen} variant='p' className='p-title' style={{color:"#555"}} noWrap>
                    {menu.name.length > 15 ? menu.name.slice(0,15) + "..." : menu.name}
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
    </>
  );
}
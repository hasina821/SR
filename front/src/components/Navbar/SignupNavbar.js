import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import {styled} from "@mui/styles"

export const StyledLink=styled('li')({
  listStyleType:'none',
  color:"#7f8c8d",
  flexGrow: 1,
  fontWeight:700,
  textDecoration:'none',
  
})

export default function SignupNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#dfe4ea',boxShadow:'none'}}>
        <Toolbar>
        <Avatar variant='square' style={{width:'200px',height:'50px'}} src='https://raw.githubusercontent.com/hasina821/Avaizo/56f81d1df54872e7ed8202e0463bd2da38026dfe/Front/public/logo.svg'>
          </Avatar>
          <Typography variant="h6" component="div" sx={{color:"#000b76",flexGrow: 1,fontWeight:900,marginLeft:'1%' }}>
            SMART-RECRUTE
          </Typography>
          <Link to='/login' style={{textDecoration:'none'}}>
            <StyledLink>SE CONNECTER</StyledLink>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
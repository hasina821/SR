import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {Avatar} from "@mui/material"
import {StyledLink} from "./SignupNavbar"

export default function AuthNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#dfe4ea',boxShadow:'none'}}>
        <Toolbar>
            <Link to='/' style={{textDecoration:'none'}}>
                <Avatar variant='square' style={{width:'200px',height:'50px'}} src='https://raw.githubusercontent.com/hasina821/Avaizo/56f81d1df54872e7ed8202e0463bd2da38026dfe/Front/public/logo.svg'>
                </Avatar>
            </Link>
            <Typography variant="h6" component="div" sx={{color:"#000b76",flexGrow: 1,fontWeight:700,marginLeft:'1%' }}>
                SMART-RECRUTE
            </Typography>
            <Link to='/signup' style={{textDecoration:'none'}}>
                <StyledLink>CREER UN COMPTE</StyledLink>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
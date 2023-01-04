import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {Avatar} from "@mui/material"
import {StyledLink} from "./SignupNav"

export default function AuthNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#dfe4ea',boxShadow:'none'}}>
        <Toolbar>
          <Avatar variant='square' style={{width:'100px',height:'50px'}} src='/images/logo12.png'>
          </Avatar>
          <Typography variant="h6" component="div" sx={{color:"#7f8c8d",flexGrow: 1,fontWeight:700,marginLeft:'1%' }}>
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
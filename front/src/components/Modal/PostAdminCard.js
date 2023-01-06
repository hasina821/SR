import React from 'react';
import {Box, Grid, Button} from "@mui/material"
import Section2 from './Section2';
import CloseIcon from '@mui/icons-material/Close';
import {styled} from "@mui/styles";

const CloseIconStyled = styled(CloseIcon)({
     cursor:'pointer',
     position:'relative',
     top:'3px',
     left:'95%',
     color:'red'
})

export default function PostAdminCard({handleClose}) {
     return (
          <Box>
               <CloseIconStyled onClick={handleClose}/>
               <Box>
                    <Grid container>
                         <Grid item xs={12}>
                              <Section2/>
                         </Grid>
                         {/*
                         <Grid item xs={12}>
                              <Section2/>
                         </Grid>
                         <Grid item xs={12} mt={5}>
                              <Grid container>
                                   {save === "Terminé" ?<Grid item xs={save === "Terminé" ? 4 : 1}>
                                        <Button
                                        variant='contained'
                                        color='success'
                                        
                                        >
                                             Terminé
                                        </Button> 
                                  
                                   </Grid>: ""}
                                   <Grid item xs={save === "Terminé" ? 4 : 6}>
                                   <Button
                                        style={{marginRight:'100px'}}
                                        variant='contained'
                                        color='primary'
                                        
                                        >
                                             Validé
                                        </Button>
                                   </Grid>
                                   <Grid item xs={save === "Terminé" ? 4 : 5}>
                                   { save === "Terminé" ? 
                                        <Button
                                        variant='contained'
                                        color='error'
                                        
                                        >
                                             à refaire
                                        </Button> 
                                   : 
                                        <Button
                                        variant='contained'
                                        color='warning'
                                        
                                        >
                                             Annuler
                                        </Button>
                                   }
                                   </Grid>
                              </Grid>
                         </Grid>
                          */}
                    </Grid>
                    
               </Box>
          </Box>

  );
}

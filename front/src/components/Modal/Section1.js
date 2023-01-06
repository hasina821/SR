import {Fragment, useState} from "react";
import {styled} from "@mui/styles"
import { Color } from "../palette/color";
import { Container, Grid,Stack } from "@mui/material";
import StyledButton from "./StyledButton";
import { Link } from "react-router-dom";


const StyledFirsttitle=styled('p')({
     color:Color.primary,
     fontSize:"18px",
     fontWeight:'800',
     lineHeight:'20px',
     textAlign:'center',
     marginBottom:'5%'
})

export const Styleddivone=styled('h4')({
     textAlign:'center',
     color:'white',
     fontWeight:"bold",
     fontSize:"18px"
})
export const StyleddivTwo=styled('div')({
     align:'left'
})
     


const Section1 = () =>{
     
     return(
          <Fragment>
               <Container>
                    <StyledFirsttitle>
                         Developpeur web
                    </StyledFirsttitle>
                    <Grid container gap={2}>
                         <Grid item xs={12} lg={12} >
                              <img style={{width:"100%"}} src="https://github.com/hasina821/ARATO/blob/main/src/components/Cards/320968335_686076262891005_7072427016859777276_n.jpg?raw=true">
                              </img>
                         </Grid>
                         <Grid item xs={12} lg={12}>
                              <Stack spacing={1} mt={4} ml={3}>
                                   <Grid container spacing={1} pt={1}>
                                        <StyledButton 
                                                  variant='contained'   
                                             >
                                             <Link to="/addpostclient">
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
          </Fragment>
     )
}

export default Section1;
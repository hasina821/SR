import {Fragment, useState} from "react";
import {styled} from "@mui/styles"
import { Color } from "../palette/color";
import { Container, Grid,Stack } from "@mui/material";
import StyledButton from "./StyledButton";
import { Link } from "react-router-dom";
import Pdf from "../../pages/pdf";

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
const Section2 = () =>{
     return(
          <Fragment>
               <Container>
                    <StyledFirsttitle>
                         FIDIMAHEFA Miharintsoa
                    </StyledFirsttitle>
                    <Grid container gap={2}>
                         <Grid item xs={12} lg={12} >
                              <Pdf pdflink="https://raw.githubusercontent.com/hasina821/ARATO/main/public/FIDIMAHEFA_MIHARINTSOA.pdf"/>
                         </Grid>
                         <Grid container>
                            <Grid item xs={6} lg={6}>
                                <Stack spacing={1} mt={4} ml={3}>
                                    <Grid container spacing={1} pt={1}>
                                            <StyledButton 
                                                    variant='contained'   
                                                >
                                                <Link to="/addpostclient">
                                                    <Styleddivone>
                                                        COMMENTER
                                                    </Styleddivone>
                                                </Link>
                                            </StyledButton> 
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} lg={6}>
                                <Stack spacing={1} mt={4} ml={3}>
                                    <Grid container spacing={1} pt={1}>
                                            <StyledButton 
                                                    style={{background:"#a00"}}
                                                    variant='contained' 
                                                >
                                                <Link to="/addpostclient">
                                                    <Styleddivone>
                                                                SUPPRIMER
                                                    </Styleddivone>
                                                </Link>
                                            </StyledButton> 
                                    </Grid>
                                </Stack>
                            </Grid>
                         </Grid>
                    </Grid>
               </Container>
          </Fragment>
     )
}

export default Section2;
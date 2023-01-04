import React from "react"
import {Grid} from "@mui/material"
import { makeStyles,styled } from "@mui/styles";
import {faTasks,faGamepad,faLayerGroup} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Color} from "../palette/color"

const StyledParagraph=styled('p')({
    fontSize:'12px',
    fontWeight: 400,
    lineHeight: 1.5,
    textSizeAdjust: '100%',
    

})
const useStyles=makeStyles({
    subtitle:{
        fontWeight: 400,
        lineHeight: 1.5,
        textSizeAdjust: '100%',
        
        
    },
    contain:{
        margin:'1% auto'
    },
    soussection:{
        verticalAlign:'baseline'
    },
    h3:{
        marginLeft:'4%'
    }
    
});

const Section2 = () =>{
    const classes=useStyles()
    return(
        <>
                <Grid container spacing={2} className={classes.contain}>
                    <Grid item xs={12} lg={3} xl={3} md={3} sm={3}>
                        <Grid container>
                                <Grid  item xs={2} lg={2} xl={2} md={2} sm={2}>
                                    <FontAwesomeIcon icon={faLayerGroup} style={{color:`${Color.primary}`,width:'100%',height:'40px',margin:'25% 2%'}}/>
                                </Grid>
                                <Grid  item xs={8} lg={8} xl={8} md={8} sm={8}><h3 className={classes.h3}>C'est quoi smart-recrute</h3>
                                    <StyledParagraph>
                                    Un outil  de gestion de candudatures et cv pour les postes chez smartone
                                    </StyledParagraph>
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} xl={3} md={3} sm={3}>
                        <Grid container className={classes.soussection}>
                            <Grid  item xs={2} lg={2} xl={2} md={2} sm={2}>
                                <FontAwesomeIcon icon={faGamepad} style={{color:`${Color.primary}`,width:'100%',height:'40px',margin:'25% 2%'}}/>
                            </Grid>
                            <Grid  item xs={8} lg={8} xl={8} md={8} sm={8}>
                                <h3 className={classes.h3}>Quels sont les avantages?</h3>
                                <StyledParagraph>
                                    La simplicité et facilité d’utilisation, efficacité et surtout la sécurité qui devra être avant tout.
                                </StyledParagraph>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} xl={3} md={3} sm={3}>
                        <Grid container>
                            <Grid  iitem xs={2} lg={2} xl={2} md={2} sm={2}>
                                <FontAwesomeIcon icon={faTasks} style={{color:`${Color.primary}`,width:'100%',height:'40px',margin:'25% 2%'}}/>
                            </Grid>
                            <Grid  item xs={8} lg={8} xl={8} md={8} sm={8}><h3 className={classes.h3}>Les fonctionnalités
                                    </h3>
                                <StyledParagraph>
                                Smart-recrute  est une application multi-plateforme et Multi-utilisateur. 
                                </StyledParagraph>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </>
    )
}

export default Section2;
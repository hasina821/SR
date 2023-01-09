import React from "react";
import {Box,Typography} from "@mui/material";
import {styled,makeStyles} from "@mui/styles";


const StyledPara = styled({
    fontSize:"8px"
})


const useStyles = makeStyles((theme)=>({
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
    model2:{
        width:'55px',
        height:'22px',
        background:'#006266',
        borderRadius:'5px',
        textAlign:'center',
        fontWeight:'bold',
        '& .p-model':{
            fontSize:'11px',
            color:'#fff'
        }
      }
  }));

const IsUrgent = ({urgent}) =>{
    const classes = useStyles();
    return(
        <>
            {urgent=="1"?
            <Box className={classes.model}>
                <StyledPara>
                    Urgent
                </StyledPara>
            </Box>
            :<Box className={classes.model2}>
                <StyledPara>
                   Pas urgent
                </StyledPara>
        </Box>}
        </>
    )
}

export default IsUrgent;
import React from "react"
import { Divider,Stack,Grid } from "@mui/material";
import {styled} from "@mui/styles"

const StyledLink=styled('li')({
    fontSize:'12px',
    margin:'0 5%',
    listStyleType:'none',
    color:'#636e72',
    cursor:'pointer'

})


const MiniFooter = ()=>{
    return(
        <>
        <Divider sx={{width:'100%',margin:'8% 2%'}}/>
        <div>
            <Grid container>
                <Grid item xs={12} lg={4} xl={4} md={4} sm={4}>

                </Grid>
                <Grid item xs={12} lg={4} xl={4} md={4} sm={4}>
                    <Stack direction="vertical">
                        <StyledLink><a href="http://www.institutfrancais-madagascar.com/">SMARTONE</a></StyledLink> 
                        <StyledLink><a href="https://www.institutfrancais-madagascar.com/contactes/">Contact</a></StyledLink>
                        <StyledLink><a href="https://www.institutfrancais-madagascar.com/qui-sommes-nous/">Nos services</a></StyledLink>
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={4} xl={4} md={4} sm={4}>
                    
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default MiniFooter;
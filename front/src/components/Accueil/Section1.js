import React,{useEffect,useRef} from "react"
import {Box,Grid,Divider,InputBase  } from "@mui/material"
import {makeStyles, styled} from "@mui/styles"
import lottie from "lottie-web"
import { Link } from "react-router-dom"
import { Color } from "../palette/color"
import SignupNav from "../Navbar/SignupNavbar"
import Section2 from "./Section2"
import MiniFooter from "./MiniFooter"


const StyledToposub=styled('p')({
    fontSize:'20px',
    fontWeight:'400',
    lineHeight: 1.5,
    textSizeAdjust: '100%'

});

export const StyledSearch=styled('div')({
    backgroundColor: "white",
    padding: "0 10px",
    height:'2rem',
    borderRadius: '5px 5px',
    width: "90%",
})


export const StyledInput=styled(InputBase)({
    borderRadius:'10px 10px',
    width:'100%'

})

const StyledSignup=styled('button')({
    appearance: 'none',
    alignItems: 'center',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    display: 'inline-flex',
    backgroundColor: Color.primary,
    border: '1px solid rgb(0, 101, 255)',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.4rem 4rem',
    color: 'rgb(255, 255, 255) !important',
    height:'2rem'
})

const useStyles=makeStyles({
    BoxContainer:{
        background:'#dfe4ea',
        padding:'50px 100px 100px 100px',
        height:'100vh'
    },
    Box1:{
        padding:'0px 40px 10px 40px'
    },
    title:{
        fontSize:'40px',
        fontWeight:'600',
    },
    contain:{
        alignContent:'center',
        margin:'0 auto',
        width:'80%'
    },
    contain1:{
        
        alignContent:'center',
        padding:'30px 100px 20px 100px',
        width:'50%',
    },
    
});



const Section1 = () =>{
    const classes=useStyles();
    let image = useRef(null);


    useEffect(()=>{
        lottie.loadAnimation({
               container: image.current,
               renderer: 'svg',
               loop: true,
               autoplay: true,
               animationData: require('./fond1.json')
          })
    },[])
    return(
        <>
        <div class="overflow-hidden w-full min-h-screen font-sans" style={{background:Color.primary}}>
            <div class="relative">
                    <img class="absolute opacity-70" src="https://raw.githubusercontent.com/tailwindcollections/tailwind-traffic-website/d208364918d92be9afb20d24e236fdb9bfc4fbf9/public/img/bg-1.svg" alt="">
                    </img>
                <SignupNav/>
                <div className={classes.BoxContainer}>
                    <Grid container className={classes.contain}>
                        <Grid  item xs={12} lg={7} xl={7} md={7} sm={7} >
                            <Box className={classes.Box1}>
                                <h1 className={classes.title}>Smart-recrute vous facilite les taches.</h1>
                                <StyledToposub>
                                Collaborez, gérez votre recrutement et fais confiance à Smart-recrute,on va vous facilite vos tâches.
                                </StyledToposub>
                                <Grid container>
                                    <Grid item xs={12} lg={8} xl={8} md={8} sm={8}>
                                        <StyledSearch>
                                            <StyledInput placeholder="Email"/>
                                        </StyledSearch>
                                    </Grid>
                                    <Grid item xs={12} lg={4} xl={4} md={4} sm={4}>
                                        <Link to='/signup'>
                                            <StyledSignup>S'inscrire</StyledSignup>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5} xl={5} md={5} sm={5}>
                            <div ref={image}></div>
                        </Grid>
                        <Divider sx={{width:'70%',margin:'2% 2%'}}/>
                    </Grid>
                    <Grid container className={classes.contain1}>
                        <Section2/>
                    </Grid>
                    <MiniFooter/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section1;
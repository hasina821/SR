import React,{useEffect,useRef} from "react"
import SignIn from "../../components/form/authform"
import { makeStyles } from "@mui/styles"
import AuthNav from "../../components/Navbar/AuthNavbar"
import { Container,Grid } from "@mui/material"
import axios from "axios";
import lottie from "lottie-web"
import {styled} from "@mui/styles"

const StyledDiv=styled('div')({
  
})

const useStyles=makeStyles({  
  root:{
    minHeight: '100vh',
    background:"#dfe4ea"
  }
})

export default function Signin(){
    const classes=useStyles();
    let image1 = useRef(null);
    let image2 = useRef(null);

    useEffect(() => {
      lottie.loadAnimation({
        container: image1.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./login1.json')
      })
      lottie.loadAnimation({
        container: image2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./login2.json')
      })
      {/*
      const token = localStorage.getItem('user-token') ? localStorage.getItem('user-token') : false;
      axios.defaults.headers.common['Authorization'] = token;
      try {
        console.log("login");
        
        axios.get(initialState.url + `verification`).then((res) => {
          if(res.data) {
            return history.push("/home");
          }
          else{
            localStorage.removeItem('user-token')
          }
        })
      } catch (error) {
        localStorage.removeItem('user-token')
      }
      */}
    }, []);
     return(
      <> 
          <main className={classes.root}>
            <AuthNav/>
            <Grid container>
              <Grid style={{marginTop:'15%'}} item xs={12}  lg={3} xl={3} md={3} sm={3}>
                <StyledDiv ref={image1}></StyledDiv>
              </Grid>
              <Grid  item xs={12}  lg={6} xl={6} md={6} sm={6}>
                <SignIn/>
              </Grid>
              <Grid style={{marginTop:'15%'}}  item xs={12}  lg={3} xl={3} md={3} sm={3}>
                <StyledDiv ref={image2}></StyledDiv>
              </Grid>
            </Grid>
          </main>
      </>
     )
}
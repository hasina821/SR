import React,{useEffect,useRef} from "react"
import SignUp from "../../components/form/signupform.js"
import { makeStyles } from "@mui/styles"
import SignupNav from "../../components/Navbar/SignupNavbar"
import {Grid } from "@mui/material"
import { Redirect } from 'react-router-dom';
import lottie from "lottie-web"

const useStyles=makeStyles({
  root:{
    minHeight: '100vh',
    background:"#dfe4ea"
  }
})
export default function Signin(){
    const classes=useStyles();
    const token = localStorage.getItem('user-token') ? localStorage.getItem('user-token') : false;
    /*if(token) {
        return <Redirect to="/home" />
    }*/

    let image1 = useRef(null);
    let image2 = useRef(null);

      useEffect(() => {
        lottie.loadAnimation({
          container: image1.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('./signup1.json')
        })
        lottie.loadAnimation({
          container: image2.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('./signup2.json')
        })
    },[])
     return(
          <> 
             <main className={classes.root}>
               <SignupNav/>
               <Grid container>
              <Grid style={{marginTop:'2%'}} item xs={12}  lg={3} xl={3} md={3} sm={3}>
                <div ref={image1}></div>
              </Grid>
              <Grid  item xs={12}  lg={6} xl={6} md={6} sm={6}>
                <SignUp/>
              </Grid>
              <Grid style={{marginTop:'20%'}}  item xs={12}  lg={3} xl={3} md={3} sm={3}>
                <div ref={image2}></div>
              </Grid>
            </Grid>
              </main>
          </>
     )
}

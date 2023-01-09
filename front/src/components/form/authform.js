import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Color } from '../palette/color';
import {useDispatch} from "react-redux";
import { userLogin } from '../../toolkit/auth';

const useStyle=makeStyles({
  root:{
    background:"url('/images/bacc.jpg')",
  },
  err:{
    color:"red",
    textAlign:'center'
  }
})

const theme = createTheme();

export default function SignIn(props) {
  const [erreur, setErreur] = useState(false);
  const classes=useStyle(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Votre adresse mail est obligatoire'),
      //.email('Veuilez entrer une adresse mail valide'),
    password: Yup.string()
      .required('Votre mot de passe est obligatoire')
      .min(6, 'Mot de passe tres court,il faut au moins 6 caracteres')
      .max(40, 'Mot de passe tres long,il ne doit pas depasser 40 caracteres')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleSignin = (data) => {
    try {
      dispatch(userLogin(data))
      navigate('/clientHome')
    } catch (error) {
      console.log(error.message);
    }
    
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          boxShadow={20}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            padding:"40px",
            borderRadius:"10px",
            background:'white',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: Color.primary }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Identifiez-vous
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleSignin)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register('email')}
                  fullWidth
                  id="email"
                  label="Votre addresse mail"
                  name="email"
                  autoComplete="email"
                />
              <Typography className={classes.err} variant='h8'>
              {errors.email?.message}
              </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register('password')}
                  fullWidth
                  name="password"
                  label="Votre mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <Typography className={classes.err} variant='h8'>
              {errors.password?.message}
              </Typography>
              </Grid>
            </Grid>
            <Grid sx={{  color: 'red' }}>
            {!!erreur && erreur}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:Color.primary }}
            >
                Connecter
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

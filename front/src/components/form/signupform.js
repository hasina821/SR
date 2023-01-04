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
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { initialState } from '../../toolkit/user';
import {Color} from "../palette/color"

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

export default function SignUp (props) {
  const history=useHistory();

  const classes=useStyle();
  const [erreur, setErreur] = useState(false);

  const validationSchema = Yup.object().shape({
     nom: Yup.string()
      .required('Votre nom est obligatoire'),
     prenom: Yup.string()
      .required('Votre prenom est obligatoire'),
    email: Yup.string()
      .required('Votre adresse mail est obligatoire')
      .email('Veuilez entrer une adresse mail valide'),
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

  const handleSignup = (data) => {
    axios.post(initialState.url + `auth/register/`, {
      "password": data.password,
      "firstName": data.nom,
      "lastName": data.prenom,
      "email": data.email
    })
    .then(res => {
      if(res.data) history.push("/");
    }).catch((err)=>{
      setErreur("Merci de bien vouloir vérifier les champs");
      console.log(erreur);
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          boxShadow={20}
          sx={{
            marginTop: 8,
            display: 'flex',
            padding:"40px",
            borderRadius:"10px",
            background:'white',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: Color.primary }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Creation d'un compte
          </Typography>
          <Box component="form" onSubmit={handleSubmit(handleSignup)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                  {...register('nom')}
                  fullWidth
                  id="nom"
                  label="Votre nom"
                  name="nom"
                />
              <Typography className={classes.err} variant='h8'>
              {errors.nom?.message}
              </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  {...register('prenom')}
                  fullWidth
                  id="prenom"
                  label="Votre prenom"
                  name="prenom"
                />
              <Typography className={classes.err} variant='h8'>
              {errors.prenom?.message}
              </Typography>
              </Grid>
               
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
              Creer un compte
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

import react, { useState }  from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './Signup'
import { toast } from 'react-toastify';
import { login } from '../service/api';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

const navigate=useNavigate();

  const [userData,setUserData]=useState({

    email:"",
    password:""
  })
  const handleSubmit = async(event) => {
    event.preventDefault();
    if( userData.password=="" || userData.email=="" ){
      toast.error("field is empty");
    }
    else{
      try{

        const response = await login(userData)
        console.log(response)
        if(response.status==200){
          localStorage.setItem("role",response.data.user.role)
          toast.success("Login successfully");
          if(response.data.user.role=="User"){
            navigate("/");
          }
          else if(response.data.user.role==="Admin"){
            navigate("/Signup")
          }
          else{
            navigate("/AddBookForm")
          }
        }
        else{
          toast.error(response.data)
        }
      }
      catch(err){
        
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error(err.response.data || 'An error occurred.');
        } else if (err.request) {
          // The request was made but no response was received
          toast.error('No response received from the server.');
        } else {
          // Something happened in setting up the request that triggered an Error
          toast.error('An error occurred: ' + err.message);
        }
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={userData.email}
              name="email"
              onChange={(e)=>{setUserData({...userData,email:e.target.value})}}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={userData.password
              }
              onChange={(e)=>{setUserData({...userData,password:e.target.value})}}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
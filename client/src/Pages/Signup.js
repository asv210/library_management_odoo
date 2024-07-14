import react, { useState } from 'react';
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
import { toast } from 'react-toastify';
import { register } from '../service/api';
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

const navigate=useNavigate();

  const [userData,setUserData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  console.log(userData.firstName)
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(userData.firstName=="" || userData.lastName=="" || userData.password=="" || userData.email=="" || userData.confirmPassword==""){
     return  toast.error("field is empty");
    }
    if(userData.password!=userData.confirmPassword){
       return toast.error("Passwords does not match")
    }
    else{
      try{

        const response = await register(userData)
        console.log(response)
        if(response.status==200){
          toast.success(response.data);
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
            boxShadow:'10',
            padding:'10px 30px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  value={userData.firstName}
                  onChange={(e)=>{setUserData({...userData,firstName:e.target.value})}}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={userData.lastName}
                  onChange={(e)=>{setUserData({...userData,lastName:e.target.value})}}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userData.email}
                  onChange={(e)=>{setUserData({...userData,email:e.target.value})}}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={userData.password}
                  onChange={(e)=>{setUserData({...userData,password:e.target.value})}}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  value={userData.confirmPassword}
                  onChange={(e)=>{setUserData({...userData,confirmPassword:e.target.value})}}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
            <Button
              onClick={()=>navigate("/Login")}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Back To Login
            </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
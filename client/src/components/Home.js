import React from 'react';
import { Container, Grid, TextField, Button, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Search, Notifications, ExitToApp } from '@mui/icons-material';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Public Library</Typography>
            <Button startIcon={<Notifications />} color="inherit">Notifications</Button>
            <Button startIcon={<ExitToApp />} color="inherit">Sign Out</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter book title or author"
            InputProps={{
              endAdornment: (
                <Button variant="contained" color="primary" startIcon={<Search />}>
                  Search
                </Button>
              ),
            }}
          />
          <Typography variant="h6" style={{ marginTop: '20px' }}>My Books</Typography>
          <Card variant="outlined" style={{ marginTop: '10px' }}>
            <CardContent>
              <Typography variant="h6">Clean Architecture: A Craftsman's Guide to Software Structure and Design</Typography>
              <Typography variant="body2" color="textSecondary">
                By Robert C. Martin
              </Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: '10px' }}>Toggle Reports</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar>M</Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Mitchell Admin</Typography>
                  <Typography variant="body2" color="textSecondary">YourCityName</Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" style={{ marginTop: '10px' }}>Contact Information:</Typography>
              <Typography variant="body2">123 Anywhere St.</Typography>
              <Typography variant="body2">Any City, ST 12345</Typography>
              <Typography variant="body2">(123) 456-7890</Typography>
              <Typography variant="body2">email@example.com</Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>Interests:</Typography>
              <Typography variant="body2">Tech, Reading, Sports</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

import React from 'react';
import { Container, Grid, TextField, Button, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Search } from '@mui/icons-material';
import book from './books.jpg'
import { redirect } from 'react-router-dom';
const books = [
  {
    image: book,
    title: 'The Testaments',
    author: 'Margaret Atwood',
    summary: 'A riveting sequel to The Handmaid\'s Tale.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Testaments',
    author: 'Margaret Atwood',
    summary: 'A riveting sequel to The Handmaid\'s Tale.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Testaments',
    author: 'Margaret Atwood',
    summary: 'A riveting sequel to The Handmaid\'s Tale.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Testaments',
    author: 'Margaret Atwood',
    summary: 'A riveting sequel to The Handmaid\'s Tale.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Testaments',
    author: 'Margaret Atwood',
    summary: 'A riveting sequel to The Handmaid\'s Tale.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Testaments',
    author: 'Margaret Atwood',
    summary: 'A riveting sequel to The Handmaid\'s Tale.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  {
    image: book,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    summary: 'A thrilling psychological mystery.',
  },
  // Add more book objects here as needed
];


const LandingPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Public Library</Typography>
            <Button variant="contained" color="secondary" href='/Login'>Log out</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search the books available in library"
            InputProps={{
              endAdornment: (
                <Button variant="contained" color="primary" startIcon={<Search />}>
                  Search
                </Button>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{ marginTop: '20px' }}>New Arrivals</Typography>
          {books.map((book, index) => (
            <Card key={index} variant="outlined" style={{ display: 'flex', marginTop: '10px' }}>
              <CardMedia
                component="img"
                style={{ width: 150 }}
                image={book.image}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary">by {book.author}</Typography>
                <Typography variant="body2">{book.summary}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{ marginTop: '20px' }}>Trending</Typography>
          {books.map((book, index) => (
            <Card key={index} variant="outlined" style={{ display: 'flex', marginTop: '10px' }}>
              <CardMedia
                component="img"
                style={{ width: 150 }}
                image={book.image}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle2" color="textSecondary">by {book.author}</Typography>
                <Typography variant="body2">{book.summary}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;

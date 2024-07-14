import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Card, CardContent, CardMedia, Pagination } from '@mui/material';
import { Search } from '@mui/icons-material';
import book from './books.jpg';

const books = [
  {
    image: book,
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    summary: 'A comprehensive guide to software architecture.',
  },
  {
    image: book,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary: 'Essential tips for modern software developers.',
  },
  {
    image: book,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary: 'Essential tips for modern software developers.',
  },
  {
    image: book,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary: 'Essential tips for modern software developers.',
  },
  {
    image: book,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary: 'Essential tips for modern software developers.',
  },
  {
    image: book,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary: 'Essential tips for modern software developers.',
  },
  {
    image: book,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary: 'Essential tips for modern software developers.',
  },
  // Add more book objects here as needed
];

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const booksPerPage = 3;
  const pageCount = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedBooks = books.slice((page - 1) * booksPerPage, page * booksPerPage);

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Public Library</Typography>
            <Grid>
              <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='/'>Home</Button>
              <Button variant="contained" color="secondary" href='/Login'>Sign In</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Books"
            InputProps={{
              endAdornment: (
                <Button variant="contained" color="primary" startIcon={<Search />}>
                  Search
                </Button>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ marginTop: '20px' }}>Search Results</Typography>
          {displayedBooks.map((book, index) => (
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
                <Button variant="contained" color="secondary" style={{ marginTop: '10px', marginRight: '10px' }}>Add to Cart</Button>
                <Button variant="contained" color="success" style={{ marginTop: '10px' }}>Read Now</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination count={pageCount} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchPage;

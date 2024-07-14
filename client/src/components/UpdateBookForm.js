import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Flare } from '@mui/icons-material';

const genres = [
  'Fiction',
  'Non-Fiction',
  'Mystery',
  'Fantasy',
  'Science Fiction',
  'Biography',
  'History',
  'Romance',
];

const UpdateBookForm = () => {
  const [bookDetails, setBookDetails] = useState({
    isbn: '',
    title: '',
    author: '',
    quantity: '',
    genre: '',
    publication: '',
    year: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookDetails);
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' ,boxShadow:'0px 0px 10px grey',borderRadius:'10px',height:'600px',padding:'30px',
        backgroundImage: "radial-gradient(lightblue,white)"}}>
      <Typography variant="h4" gutterBottom sx={{mb:'30px'}}>
        Update Book
      </Typography>
      <form onSubmit={handleSubmit} >
        <Grid container spacing={3} sx={{height:'100%'}}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="ISBN Number"
              name="isbn"
              value={bookDetails.isbn}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Title"
              name="title"
              value={bookDetails.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Author"
              name="author"
              value={bookDetails.author}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Available Quantity"
              name="quantity"
              type="number"
              value={bookDetails.quantity}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Genre</InputLabel>
              <Select
                name="genre"
                value={bookDetails.genre}
                onChange={handleChange}
                label="Genre"
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Publication"
              name="publication"
              value={bookDetails.publication}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Year of Publication"
              name="year"
              type="number"
              value={bookDetails.year}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container sx={{justifyContent:'end'}}> 
            <Button type="submit" variant="contained" color="primary" sx={{mt:'60px',width:'100%'}}>
              Update Book
            </Button>
                </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdateBookForm;

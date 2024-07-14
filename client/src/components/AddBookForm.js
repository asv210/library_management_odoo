import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Flare } from '@mui/icons-material';
import { addBook } from '../service/api';
import { toast } from 'react-toastify';

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

const AddBookForm = () => {
  const [bookDetails, setBookDetails] = useState({
    isbn: '',
    title: '',
    author: '',
    quantity: '',
    genre: '',
    publication: '',
    year: '',
    role:localStorage.getItem("role")
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

  const handleAddBook =async(e)=>{
    e.preventDefault();
    if( bookDetails.isbn=="" || bookDetails.title=="" || bookDetails.genre=="" ||  bookDetails.quantity=="" ||  bookDetails.author==""||  bookDetails.publication==""||  bookDetails.year=="" ){
      toast.error("field is empty");
    }
    else{
      try{
console.log(bookDetails)
        const response = await addBook(bookDetails)
        console.log(response)
        if(response.status==200){
          toast.success("Added book successfully");
          
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
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' ,boxShadow:'0px 0px 10px grey',borderRadius:'10px',height:'600px',padding:'30px',
        backgroundImage: "radial-gradient(lightblue,white)"}}>
      <Typography variant="h4" gutterBottom sx={{mb:'30px'}}>
        Add a New Book
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
            <Button type="submit" variant="contained" color="primary" sx={{mt:'60px',width:'100%'}} onClick={handleAddBook}>
              Add Book
            </Button>
                </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddBookForm;

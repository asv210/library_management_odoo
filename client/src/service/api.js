import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5004/api',
});

export const register = (user) => api.post('/users/register', user);
export const login = (user) => api.post('/users/login', user);
export const addBook = (book) => api.post('/books', book);
export const updateBook = (book) => api.put('/books', book);
export const deleteBook = (isbn) => api.delete('/books', { data: { isbn } });
export const searchBooks = (query) => api.get(`/books/search?query=${query}`);
export const borrowBook = (isbn, userId) => api.post('/borrow', { isbn, userId });
export const returnBook = (isbn, userId) => api.post('/return', { isbn, userId });

export default api;
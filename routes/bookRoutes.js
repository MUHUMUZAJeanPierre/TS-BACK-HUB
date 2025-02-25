const express = require('express');
const bookRoutes = express.Router();
const bookController = require('../controllers/bookControllers');

bookRoutes.post('/books', bookController.createBook);

bookRoutes.get('/books', bookController.getBooks);

bookRoutes.get('/books/:id', bookController.getBookById);

bookRoutes.put('/books/:id', bookController.updateBook);

bookRoutes.delete('/books/:id', bookController.deleteBook);

module.exports = bookRoutes;

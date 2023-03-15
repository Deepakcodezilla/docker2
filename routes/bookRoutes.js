const express = require('express');
const bookRoutes = express.Router()
const {postBooks ,getbookByID} = require('../controller/bookController');

bookRoutes.post('/post/books',postBooks)
bookRoutes.get('/get/books',getbookByID)


module.exports = bookRoutes;
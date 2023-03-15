const express = require('express')
const authorRoutes = express.Router();
const postAuthor = require('../controller/authorController');

authorRoutes.post('/post/author' , postAuthor);

module.exports = authorRoutes;
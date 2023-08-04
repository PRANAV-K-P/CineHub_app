const express = require('express');
const router = express.Router();

const controller = require('../controllers/movie.controller');

router.get('/search', controller.movieSearch);

router.get('/all', controller.allMovies)

router.post('/favourites');

module.exports = router;
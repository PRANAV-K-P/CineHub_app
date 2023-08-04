const asyncHandler = require('express-async-handler');
const axios = require('../../config/axiosInstance')


// @desc search movies
// @route GET /api/movies/search
// @access public
const movieSearch = asyncHandler(async (req, res) => {
    const { searchValue } = req.query;
  if (!searchValue) {
     res.status(400);
     throw new Error('Search value is required.');
  }
});

// @desc search movies
// @route GET /api/movies/all
// @access public
const allMovies = asyncHandler(async (req, res) => {
    const response = await axios.get();
});

module.exports = {movieSearch};
const asyncHandler = require("express-async-handler");
const axios = require("../../config/axiosInstance");
const apiKey = process.env.OMDB_API_KEY;

// @desc search movies
// @route GET /api/movies/search
// @access public
const movieSearch = asyncHandler(async (req, res) => {
  const searchValue = req.query.value;
  if (!searchValue) {
    res.status(400);
    throw new Error("Search value is required.");
  }
  const response = await axios.get(`/?s=${searchValue}&apikey=${apiKey}`);
  const movies = response.data.Search;
  if (!movies) {
    res.status(404);
    throw new Error("No movies found");
  }
  res.status(200).json(movies);
});

// @desc search movies
// @route GET /api/movies/all
// @access public
const allMovies = asyncHandler(async (req, res) => {
  const response = await axios.get(`/?s=movie&apikey=${apiKey}`);
  const movies = response.data.Search;
  if (!movies) {
    res.status(404);
    throw new Error("No movies found");
  }
  res.status(200).json(movies);
});

// @desc search movies
// @route GET /api/movies/fa
// @access public
const addToFavorite = asyncHandler(async (req, res) => {
  const imdbID = req.body.id;
  if (!imdbID) {
    res.status(400);
    throw new Error("Search value is required.");
  }
  const result = await axios.get(`/?i=${imdbID}&apikey=${apiKey}`);
  const movieInfo = result.data;
  if(!movieInfo.Response) {
    res.status(404);
    throw new Error("Movie not Found. Invalid imdbID");
  }
  let Favorites = []
  Favorites.push(movieInfo);
  console.log(Favorites)
  res.status(200).json(movieInfo);
});

module.exports = { movieSearch, allMovies,addToFavorite };

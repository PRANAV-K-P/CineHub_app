import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import Axios from "../axiosInstance";
import { allMovies } from "../url";
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    let URL;
    if (searchValue) {
      URL = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
    } else {
      URL = allMovies;
    }
    try {
      let response = await Axios.get(URL);
      if (response) {
        setMovies(response.data?.Search);
      }
    } catch (error) {
      console.log("Error fetching data: ", Error);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("favourite-movies")
    );
    setFavourites(movieFavourites);
  }, []);

  const saveFavourites = (items) => {
    localStorage.setItem("favourite-movies", JSON.stringify(items));
  };

  const favs = (newFavouriteList) => {
    setFavourites(newFavouriteList);
    saveFavourites(newFavouriteList);
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    // setFavourites(newFavouriteList);
    // saveFavourites(newFavouriteList);
    favs(newFavouriteList);
  };



  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    // setFavourites(newFavouriteList);
    // saveFavourites(newFavouriteList);
    favs(newFavouriteList);
  };

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center my-3">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            fav="true"
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>
        <div className="row d-flex align-items-center my-3">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="row">
          <MovieList
            fav="false"
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </>
  );
}

export default App;

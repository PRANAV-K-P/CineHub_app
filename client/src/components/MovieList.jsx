import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsArrowsFullscreen } from "react-icons/bs";

const MovieList = (props) => {
  const [clickedMovie, setClickedMovie] = useState(null);
  const [status, setStatus] = useState(false);
  const Favouritecomponent = props.favouriteComponent;



  const handleMovieClick = (movie) => {
    setStatus(true);
    setClickedMovie(movie);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setStatus(false);
    setClickedMovie(null);
  };

  return (
    <>
      {props.movies?.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start mt-3 position-relative"
          key={index}
         
        >
          <img src={movie.Poster} alt="movie" />
          {props.fav === "true" && <BsArrowsFullscreen className="h1 position-absolute full-screen-icon"  onClick={() => handleMovieClick(movie)}/>}
          
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <Favouritecomponent />
          </div>

          {status && clickedMovie && (
            <div className="above-all">
              <div className="w-100">
                <GrClose
                  className="display-4 bg-white ml-auto mr-5 mt-3 d-flex close-icon mt-5"
                  onClick={handleCloseModal}
                />

                <div className="row d-flex justify-content-center">
                  <div className="col-4">
                    <div className="card text-bg-dark">
                      <img src={clickedMovie.Poster} alt="movie" className="card-img" />
                      <div className="card-img-overlay ">
                        <div className="mt-5 pt-5 movie-detail-container ">
                        <h5 className="card-title opacity-100 h1 text-white">{clickedMovie.Title}</h5>
                        <h5 className="card-title h2 text-white">{clickedMovie.Year}</h5>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MovieList;

import { MovieMainContent } from "../movies/MovieMainContent";
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { addToFavorites, removeFromFavorites } from "../../redux/slices/moviesSlice";


export const MovieDetailsRoute = () => {
  const { movieDetails, favoriteMovies, loading, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const {
    Genre,
    Runtime,
    Director,
    Actors,
    imdbRating
  } = movieDetails;

  const onClickDeleteBtn = () => {
    dispatch(removeFromFavorites(movieDetails.imdbID));
  };

  const onClickAddBtn = () => {
    dispatch(addToFavorites(movieDetails.imdbID));
  };

  return (
    <div className="movie-details">
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && movieDetails.imdbID === id &&
        <MovieMainContent {...movieDetails}>
          <div className="genre">Genre: {Genre}</div>
          <div className="runtime">{Runtime}</div>
          <div className="director">Director: {Director}</div>
          <div className="actors">Actors: {Actors}</div>
          <div className="imdbRating">imdbRating: {imdbRating}</div>
          {favoriteMovies.some((movie) => movie.imdbID === movieDetails.imdbID) 
            ? <>
                <div className="movie-star details-star material-icons">star</div>
                <button className="favorites-btn delete-from-favorites_button" onClick={onClickDeleteBtn}>Delete from favorites</button>
              </>
            : <button className="favorites-btn add-to-favorites_button" onClick={onClickAddBtn}>Add to favorites</button>
          }
        </MovieMainContent>
      }
    </div>
  );
}

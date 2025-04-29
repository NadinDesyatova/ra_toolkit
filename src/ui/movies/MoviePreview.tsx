import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchMovieDetails } from "../../redux/slices/moviesSlice";

import { movieRoute } from "../../config/routes";
import { MovieMainContentType } from "../../common/components-types";
import { MovieMainContent } from "./MovieMainContent";


export const MoviePreview = (props: MovieMainContentType) => {
  const { favoriteMovies } = useAppSelector((state) => state.movies);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickMovie = () => {
    dispatch(fetchMovieDetails(props.imdbID));

    navigate(movieRoute(props.imdbID));
  };

  return (
    <div className="movie" onClick={onClickMovie}>
      {favoriteMovies.some((movie) => movie.imdbID === props.imdbID) &&
        <div className="movie-star preview-star material-icons">star</div>
      }
      <MovieMainContent {...props}/>
    </div>
  );
}

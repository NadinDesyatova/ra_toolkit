import { useAppSelector } from "../../hooks";

import { MoviePreview } from "../movies/MoviePreview";

export function FavoritesRoute() {
  const { favoriteMovies } = useAppSelector((state) => state.movies);

  return (
    <div className="main-container">
      <div className="favorites-title">Favorites</div>
      <div className="favorite-movies-container">
        {favoriteMovies.map((movie) => <MoviePreview key={movie.imdbID} {...movie}/>)}
      </div>      
    </div>
  );
};

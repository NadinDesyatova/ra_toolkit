import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchFoundMovies } from "../../redux/slices/moviesSlice";

import { MoviePreview } from "../movies/MoviePreview";
import { SearchForm } from "../search-field/SearchForm";
import { NotFoundMovie } from "../movies/NotFoundMovie";
import { foundMoviesRoute } from "../../config/routes";


export function FoundMoviesRoute() {
  const { foundMovies, loading, error } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const onClickResetBtn = () => setTextContent("");

  const [textContent, setTextContent] = useState("");
  const navigate = useNavigate();

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setTextContent(target.value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textContent.trim()) return;

    dispatch(fetchFoundMovies(textContent.trim()));

    navigate(foundMoviesRoute(textContent.trim()));
  };
 
  return (
    <div className="main-container">
      <div className="search-field_container">
        <SearchForm onClickResetBtn={onClickResetBtn} onChange={onChange} onSubmit={onSubmit} text={textContent} />
      </div>
      <div className="found-movies-container">
        {loading && <h4>Loading...</h4>}
        {error && <h4>{error}</h4>}
        {!loading && !error && foundMovies.map((movie) => <MoviePreview key={movie.imdbID} {...movie}/>)}
      </div>
      {!loading && !error && foundMovies.length === 0 && <NotFoundMovie />}
    </div>
  );
};

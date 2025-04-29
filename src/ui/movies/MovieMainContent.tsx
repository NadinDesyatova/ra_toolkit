import { MovieMainContentPropsType} from "../../common/components-types";
import { MoviePoster } from "./MoviePoster";


export const MovieMainContent = ({imdbID, Poster, Title, Year, children}: MovieMainContentPropsType) => {

  return (
    <div className="movie-content_main" id={imdbID}>
      <MoviePoster Poster={Poster} />
      <div className="movie-content_text-container">
        <div className="movie-title">{Title}</div>
        <div className="movie-year">Release year: {Year}</div>
        {children}
      </div>
    </div>
  );
}

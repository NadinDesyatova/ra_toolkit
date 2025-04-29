import { MoviePosterPropsType } from "../../common/components-types";

export const MoviePoster = ({Poster}: MoviePosterPropsType) => {
  return (
    <img className="poster-card" src={Poster} alt="" />
  );
}

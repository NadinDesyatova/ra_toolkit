import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks";
import { fetchFoundMovies } from "../../redux/slices/moviesSlice";

import { foundMoviesRoute } from "../../config/routes";
import { SearchForm } from "../search-field/SearchForm";


export function HomePageRoute() {
  const [textContent, setTextContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const onClickResetBtn = () => setTextContent("");

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
    </div>
  );
};

import { SearchFormPropsType } from "../../common/components-types";


export function SearchForm({onChange, onSubmit, onClickResetBtn, text}: SearchFormPropsType) {

  return (
    <form className="search-field_form" onSubmit={onSubmit}>
      <input className="input_movie-title" type="text" onChange={onChange} value={text} />
      <button type="button" onClick={onClickResetBtn} className="reset-button material-icons">close</button>
      <button type="submit" className="search-button material-icons">search</button>
    </form>
  );
};
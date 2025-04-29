import React from "react";


export type MovieDetailsType = {
  imdbID: string,
  Poster: string, 
  Title: string,
  Year: string,
  Genre: string,
  Runtime: string,
  Director: string,
  Actors: string,
  imdbRating: string,
  favorite?: boolean
}

export type MovieResponseByNameType = {
  imdbID: string,
  Poster: string, 
  Title: string,
  Year: string,
  Type: string
}

export type MovieMainContentType = {
  imdbID: string,
  Poster: string, 
  Title: string,
  Year: string,
  favorite?: boolean
}

export type MovieMainContentPropsType = {
  imdbID: string,
  Poster: string, 
  Title: string,
  Year: string,
  favorite?: boolean,
  children?: React.ReactNode
}

export type MoviesStateType = {
  foundMovies: MovieMainContentType[];
  favoriteMovies: MovieMainContentType[];
  movieDetails: MovieDetailsType,
  loading: boolean;
  error: string;
}

export type SearchFormPropsType = {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void, 
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  onClickResetBtn: React.MouseEventHandler<HTMLButtonElement>,
  text: string
};

export type MoviePosterPropsType = {
  Poster: string
}

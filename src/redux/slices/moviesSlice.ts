import {
  buildCreateSlice,
  asyncThunkCreator,
  PayloadAction,
} from "@reduxjs/toolkit";

import { 
  MovieResponseByNameType,
  MovieDetailsType, 
  MovieMainContentType, 
  MoviesStateType 
} from "../../common/components-types";


const initialState: MoviesStateType = {
  foundMovies: [],
  favoriteMovies: [],
  movieDetails: {
    imdbID: "",
    Poster: "", 
    Title: "",
    Year: "",
    Genre: "",
    Runtime: "",
    Director: "",
    Actors: "",
    imdbRating: ""
  },
  loading: false,
  error: "",
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const moviesSlice = createSliceWithThunk({
  name: "movies",
  initialState,
  selectors: {
    moviesState: (state) => state,
    foundMoviesList: (state) => state.foundMovies,
    favoriteMoviesList: (state) => state.favoriteMovies,
    movieDetailsObj: (state) => state.movieDetails
  },
  reducers: (create) => ({
    addToFavorites: create.reducer((state, action: PayloadAction<string>) => {
      const newFavoriteMovie = state.foundMovies.filter((movie) => movie.imdbID === action.payload)[0];
      state.favoriteMovies = state.favoriteMovies.concat({...newFavoriteMovie, favorite: true});
    }),
    removeFromFavorites: create.reducer((state, action: PayloadAction<string>) => {
      state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.imdbID !== action.payload);
    }),
    fetchFoundMovies: create.asyncThunk<MovieMainContentType[], string>(
      async (name, { rejectWithValue }) => {
        try {          
          const response = await fetch(`${import.meta.env.VITE_APP_MOVIES_URL}&s=${name}`);

          if (!response.ok) {
            return rejectWithValue("Nothing was found. Try to find another movie.");
          }

          const foundMovies = await response.json();

          return foundMovies.Response === "True"
            ? foundMovies.Search.map((movie: MovieResponseByNameType) => ({
              imdbID: movie.imdbID,
              Poster: movie.Poster, 
              Title: movie.Title,
              Year: movie.Year
            }))
            : [];
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = "";
        },
        fulfilled: (state, action) => {
          state.foundMovies = action.payload;
          state.error = "";
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.loading = false;
        },
      }
    ),
    fetchMovieDetails: create.asyncThunk<MovieDetailsType, string>(
      async (id, { rejectWithValue }) => {
        try {         
          const response = await fetch(`${import.meta.env.VITE_APP_MOVIES_URL}&i=${id}`);

          if (!response.ok) {
            return rejectWithValue("Nothing was found. Try to find another movie.");
          }

          const {
            imdbID,
            Poster, 
            Title,
            Year,
            Genre,
            Runtime,
            Director,
            Actors,
            imdbRating
          } = await response.json();

          return {
            imdbID,
            Poster, 
            Title,
            Year,
            Genre,
            Runtime,
            Director,
            Actors,
            imdbRating
          };
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = "";
        },
        fulfilled: (state, action) => {
          state.movieDetails = action.payload;
          state.error = "";
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.loading = false;
        },
      }
    ),
  }),
});

export const { 
  addToFavorites, 
  removeFromFavorites, 
  fetchFoundMovies, 
  fetchMovieDetails 
} = moviesSlice.actions;

export default moviesSlice.reducer;
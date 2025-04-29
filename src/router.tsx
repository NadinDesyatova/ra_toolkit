import { createBrowserRouter } from "react-router-dom";

import { HomePageRoute } from "./ui/routes/HomePage";
import { FoundMoviesRoute } from "./ui/routes/FoundMoviesRoute";
import { FavoritesRoute } from "./ui/routes/FavoritesRoute";
import { MovieDetailsRoute } from "./ui/routes/MovieDetailsRoute";

import { MainTemplate } from "./ui/MainTemplate";


import * as R from './config/routes';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        path: R.HOME_ROUTE,
        element: <HomePageRoute />,
      },
      {
        path: R.FOUND_MOVIES_ROUTE,
        element: <FoundMoviesRoute />,
      },
      {
        path: R.FAVORITES_ROUTE,
        element: <FavoritesRoute />
      },
      {
        path: R.MOVIE_ROUTE,
        element: <MovieDetailsRoute />,
      }
    ]
  }
]);
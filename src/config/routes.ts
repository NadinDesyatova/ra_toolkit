export const HOME_ROUTE = '/';

export const FAVORITES_ROUTE = '/favorites';

export const MOVIE_ROUTE = '/details/:id';

export const FOUND_MOVIES_ROUTE = '/movies/:name';

export const foundMoviesRoute = (name: string) => `/movies/${name}`;

// /:id -> /23
export const movieRoute = (id: string) => `/details/${id}`;

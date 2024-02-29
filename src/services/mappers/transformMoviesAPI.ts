import { IMovie, IMovieAPI } from "types/types";

export const transformMoviesAPI = (movies: IMovieAPI[]): IMovie[] => {
  return movies.map(({ Poster, Title, Type, Year, imdbID }) => {
    return {
      poster: Poster,
      title: Title,
      type: Type,
      year: Year,
      imdbID: imdbID,
    };
  });
};

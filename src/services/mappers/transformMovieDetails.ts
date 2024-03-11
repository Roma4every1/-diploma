import { IMovieDetails, IMovieDetailsAPI } from "types/types";

export const transformMovieDetails = (
  details: IMovieDetailsAPI,
): IMovieDetails => {
  return {
    actors: details.Actors,
    boxOffice: details.BoxOffice,
    country: details.Country,
    director: details.Director,
    genre: details.Genre,
    plot: details.Plot,
    poster: details.Poster,
    released: details.Released,
    runtime: details.Runtime,
    title: details.Title,
    type: details.Type,
    writer: details.Writer,
    year: details.Year,
    id: details.imdbID,
    imdbRating: details.imdbRating,
    totalSeasons: details.totalSeasons,
  };
};

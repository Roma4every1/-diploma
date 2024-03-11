export interface IMoviesAPIResponse {
  Search: IMovieAPI[];
  totalResults: null | string;
  Response: null | string;
}

export interface IMovieAPI {
  Poster: string;
  Title: string;
  Type: ContentType;
  Year: string;
  imdbID: string;
}
export interface IMovie {
  poster: string;
  title: string;
  type: ContentType;
  year: string;
  imdbID: string;
}

export type ContentType = "movie" | "series" | "episode";

export interface IMovieDetailsAPI {
  Actors: string;
  Awards: string;
  BoxOffice?: string;
  Country: string;
  Director: string;
  DVD?: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: IRatingsAPI[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Website?: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons?: string;
}

interface IRatingsAPI {
  Source: string;
  Value: string;
}

export interface IMovieDetails {
  actors: string;
  boxOffice?: string;
  country: string;
  director: string;
  genre?: string;
  plot: string;
  poster: string;
  released: string;
  runtime: string;
  title: string;
  type: string;
  writer: string;
  year: string;
  id: string;
  imdbRating: string;
  totalSeasons?: string;
}
export interface ISearchParams {
  title: string;
  type: ContentType | string;
  year: string;
  page: number;
}

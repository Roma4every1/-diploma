
import { fetchMovieByDetails } from "./movieDetailsSlice";
import {
  fetchMoviesSearch,
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
  updateTypeParam,
  deleteAllParams,
  createNextSearchPage,
  clearSearchMovies,
  resetYearParam,
  resetTypeParam,
} from "./moviesSearchSlice";
import { fetchMovies, createNextPage, clearMovies } from "./moviesSlice";
import {
  fetchNewMovies,
  createNextPageNewMovies,
  clearNewMovies,
} from "./newMoviesSlice";

export {
  fetchMovieByDetails,
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
  updateTypeParam,
  deleteAllParams,
  fetchMoviesSearch,
  fetchMovies,
  createNextPage,
  fetchNewMovies,
  createNextPageNewMovies,
  createNextSearchPage,
  clearMovies,
  clearNewMovies,
  clearSearchMovies,
  resetYearParam,
  resetTypeParam,
};

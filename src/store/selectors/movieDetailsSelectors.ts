import { RootState } from "../store";

export const getMovieDetails = (state: RootState) =>
  state.rootReducer.movieDetails;

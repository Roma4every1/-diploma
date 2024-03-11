import { RootState } from "../store";

export const getMovieDetails = (state: RootState) =>
  state.persistedReducer.movieDetails;

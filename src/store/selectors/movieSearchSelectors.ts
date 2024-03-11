import { RootState } from "../store";

export const getMoviesSearch = (state: RootState) =>
  state.persistedReducer.moviesSearch;

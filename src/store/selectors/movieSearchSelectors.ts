import { RootState } from "../store";

export const getMoviesSearch = (state: RootState) =>
  state.rootReducer.moviesSearch;

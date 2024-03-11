import { RootState } from "../store";

export const getNewMovies = (state: RootState) =>
  state.persistedReducer.newMovies;

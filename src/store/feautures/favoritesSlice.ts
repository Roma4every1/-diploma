import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieDetails } from "types/types";

interface IFavoritesState {
  favorites: IMovieDetails[];
  searchWord: string;
  sortedFavorites: IMovieDetails[];
}

const initialState: IFavoritesState = {
  favorites: [],
  searchWord: "",
  sortedFavorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IMovieDetails>) {
      const favorites = state.favorites.find(
        (movie) => movie.id === payload.id,
      );
      if (!favorites) state.favorites.push(payload);
    },
    removeFavorites(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.id !== payload;
      });
    },
    sortFavorites(state, { payload }: PayloadAction<string>) {
      state.sortedFavorites = state.favorites.filter((movie) => {
        return movie.title
          .toLocaleLowerCase()
          .includes(payload.toLocaleLowerCase());
      });
    },
    resetSortedFavorites(state) {
      state.sortedFavorites = [];
    },
    updateSearchword(state, { payload }: PayloadAction<string>) {
      state.searchWord = payload;
    },
  },
});

export default favoritesSlice.reducer;

export const {
  addToFavotires,
  removeFavorites,
  sortFavorites,
  resetSortedFavorites,
  updateSearchword,
} = favoritesSlice.actions;

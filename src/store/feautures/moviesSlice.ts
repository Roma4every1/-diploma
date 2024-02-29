import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "services/movieAPI";
import { IMovie, IMoviesAPIResponse } from "types/types";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  isMoreLoading: boolean;
  error: null | string;
  page: number;
}

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  isMoreLoading: false,
  error: null,
  page: 1,
};

const fetchMovies = createAsyncThunk<
  IMoviesAPIResponse,
  { page: number },
  { rejectValue: string }
>("movies/fetchMovies", async ({ page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getAll(page);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    createNextPage(state, { payload }: PayloadAction<boolean>) {
      payload ? (state.page = state.page + 1) : (state.page = 1);
    },
    clearMovies(state) {
      state.movies = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      if (state.movies.length === 0) {
        state.isLoading = true;
        state.error = null;
      } else {
        state.isMoreLoading = true;
      }
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      if (state.movies.length === 0) {
        state.isLoading = false;
        state.movies = state.movies.concat(transformMoviesAPI(payload.Search));
      } else {
        state.movies = state.movies.concat(transformMoviesAPI(payload.Search));
        state.isMoreLoading = false;
      }
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isMoreLoading = false;
      }
    });
  },
});

export default moviesSlice.reducer;
export { fetchMovies };

export const { createNextPage, clearMovies } = moviesSlice.actions;

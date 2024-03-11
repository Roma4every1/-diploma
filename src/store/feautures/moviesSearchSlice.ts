import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "services/movieAPI";
import {
  ContentType,
  IMovie,
  IMoviesAPIResponse,
  ISearchParams,
} from "types/types";

interface IMoviesSearchState {
  movies: IMovie[];
  isLoading: boolean;
  isMoreLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
}

const initialState: IMoviesSearchState = {
  movies: [],
  isLoading: false,
  isMoreLoading: false,
  error: null,
  searchParams: {
    title: "",
    type: "",
    year: "",
    page: 1,
  },
};

const fetchMoviesSearch = createAsyncThunk<
  IMoviesAPIResponse,
  ISearchParams,
  { rejectValue: string }
>(
  "moviesSearch/fetchMoviesSearch",
  async (searchParams, { rejectWithValue }) => {
    try {
      return await movieAPI.getMovieBySearchParams(searchParams);
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const moviesSearchSlice = createSlice({
  name: "moviesSearch",
  initialState,
  reducers: {
    resetMoviesSearch(state) {
      state.movies = [];
    },
    resetYearParam(state) {
      state.searchParams.year = "";
    },
    resetTypeParam(state) {
      state.searchParams.type = "";
    },
    updateTitleParam(state, { payload }: PayloadAction<string>) {
      state.searchParams.title = payload;
    },
    updateYearParam(state, { payload }: PayloadAction<string>) {
      state.searchParams.year = payload;
    },
    updateTypeParam(state, { payload }: PayloadAction<ContentType>) {
      state.searchParams.type = payload;
    },
    deleteAllParams(state) {
      state.searchParams = {
        title: "",
        type: "",
        year: "",
        page: 1,
      };
    },
    createNextSearchPage(state, { payload }: PayloadAction<boolean>) {
      payload
        ? (state.searchParams.page = state.searchParams.page + 1)
        : (state.searchParams.page = 1);
    },
    clearSearchMovies(state) {
      state.movies = [];
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchMoviesSearch.pending, (state) => {
      if (state.movies.length === 0) {
        state.isLoading = true;
        state.error = null;
      } else {
        state.isMoreLoading = true;
      }
    });
    builder.addCase(fetchMoviesSearch.fulfilled, (state, { payload }) => {
      if (state.movies.length === 0) {
        state.isLoading = false;
        state.movies = state.movies.concat(transformMoviesAPI(payload.Search));
      } else {
        state.movies = state.movies.concat(transformMoviesAPI(payload.Search));
        state.isMoreLoading = false;
      }
    });
    builder.addCase(fetchMoviesSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isMoreLoading = false;
      }
    });
  },
});

export default moviesSearchSlice.reducer;
export { fetchMoviesSearch };

export const {
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
  updateTypeParam,
  deleteAllParams,
  createNextSearchPage,
  clearSearchMovies,
  resetYearParam,
  resetTypeParam,
} = moviesSearchSlice.actions;

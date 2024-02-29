import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "services/movieAPI";
import { IMovie, IMoviesAPIResponse } from "types/types";

interface IMoviesState {
  newMovies: IMovie[];
  isLoading: boolean;
  isMoreLoading: boolean;
  error: null | string;
  page: number;
}

const initialState: IMoviesState = {
  newMovies: [],
  isLoading: false,
  isMoreLoading: false,
  error: null,
  page: 1,
};

const fetchNewMovies = createAsyncThunk<
  IMoviesAPIResponse,
  { page: number },
  { rejectValue: string }
>("newMovies/fetchNewMovies", async ({ page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getNewMovies(page);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState,
  reducers: {
    createNextPageNewMovies(state, { payload }: PayloadAction<boolean>) {
      payload ? (state.page = state.page + 1) : (state.page = 1);
    },
    clearNewMovies(state) {
      state.newMovies = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNewMovies.pending, (state) => {
      if (state.newMovies.length === 0) {
        state.isLoading = true;
        state.error = null;
      } else {
        state.isMoreLoading = true;
      }
    });
    builder.addCase(fetchNewMovies.fulfilled, (state, { payload }) => {
      if (state.newMovies.length === 0) {
        state.isLoading = false;
        state.newMovies = state.newMovies.concat(
          transformMoviesAPI(payload.Search),
        );
      } else {
        state.newMovies = state.newMovies.concat(
          transformMoviesAPI(payload.Search),
        );
        state.isMoreLoading = false;
      }
    });
    builder.addCase(fetchNewMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isMoreLoading = false;
      }
    });
  },
});

export default newMoviesSlice.reducer;
export { fetchNewMovies };
export const { createNextPageNewMovies, clearNewMovies } =
  newMoviesSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMovieDetails } from "services/mappers/transformMovieDetails";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "services/movieAPI";
import {
  IMovie,
  IMovieDetails,
  IMovieDetailsAPI,
  IMoviesAPIResponse,
} from "types/types";

interface IDetailsState {
  details: IMovieDetails;
  recommendations: IMovie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: IDetailsState = {
  isLoading: false,
  error: null,
  details: {} as IMovieDetails,
  recommendations: [],
};

export const fetchMovieByDetails = createAsyncThunk<
  { details: IMovieDetailsAPI; recommendations: IMoviesAPIResponse },
  string,
  { rejectValue: string }
>("movieDetails/fetchMovieByDetails", async (id, { rejectWithValue }) => {
  try {
    const details = await movieAPI.getDetailsById(id);

    const name = details.Title.split(" ")[0];
    const type = details.Type;
    const year = details.Year;

    const recommendations = await movieAPI.getMoviesRecommendations(
      name,
      type,
      year,
    );

    return { details, recommendations };
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchMovieByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = transformMovieDetails(payload.details);
      state.recommendations = transformMoviesAPI(
        payload.recommendations.Search,
      );
    });
    builder.addCase(fetchMovieByDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default movieDetailsSlice.reducer;

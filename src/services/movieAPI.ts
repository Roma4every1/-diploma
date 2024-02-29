import axios from "axios";
import {
  IMovieDetailsAPI,
  IMoviesAPIResponse,
  ISearchParams,
} from "types/types";
import { getRandomNumber } from "utils/getRandomNumber";

class MovieAPI {
  private readonly BASE_URL = "https://www.omdbapi.com/?apikey=d3a738c5" as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  private readonly wordForMovie = [
    "time", "love", "day", "life", "forest","dream", "wrong", "drive", "sky",
     "star", "she"
  ];

  private readonly getRandomWord = (array: string[]) => {
    return this.wordForMovie[getRandomNumber(0, this.wordForMovie.length - 1)];
  };

  public async getAll(page: number) {
    const params = {
      s: this.getRandomWord(this.wordForMovie),
      page: page,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", { params });

    return data;
  }

  public async getDetailsById(id: string) {
    const params = {
      i: id,
    };

    const { data } = await this.API.get<IMovieDetailsAPI>("", { params });

    return data;
  }

  public async getNewMovies(page: number) {
    const currentYear = new Date().getFullYear();

    const params = {
      s: this.getRandomWord(this.wordForMovie),
      y: currentYear,
      page: page,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", { params });

    return data;
  }

  public async getMoviesRecommendations(
    name: string,
    type: string,
    year: string,
  ) {
    const params = {
      s: name,
      type: type,
      y: year,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", { params });

    return data;
  }

  public async getMovieBySearchParams(
    searchParams: ISearchParams,
  ): Promise<IMoviesAPIResponse> {
    const params = {
      s: searchParams.title,
      type: searchParams.type,
      y: searchParams.year,
      page: searchParams.page,
    };

    const { data } = await this.API.get<IMoviesAPIResponse>("", {
      params,
    });

    return data;
  }
}

export const movieAPI = new MovieAPI();

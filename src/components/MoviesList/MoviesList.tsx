import { ErrorMessage, LoadingMovies, MovieListItem } from "components";
import { StyledMovieList } from "./styles";
import { IMovie } from "types/types";
import { useWindowSize } from "hooks";
import { Breackpoint } from "ui";

interface IProps {
  isLoading?: boolean;
  error?: string | null;
  movies: IMovie[];
  isNew?: boolean;
}

export const MoviesList = ({ isLoading, error, movies, isNew }: IProps) => {
  const { screenWidth } = useWindowSize();

  const getCardСount = (): number => {
    if (screenWidth) {
      if (screenWidth > 1900) {
        return 6;
      } else if (screenWidth > 1700) {
        return 5;
      } else if (screenWidth > 1200) {
        return 4;
      } else if (screenWidth > 800) {
        return 3;
      } else if (screenWidth > Breackpoint.SM) {
        return 2;
      }
    }
    return 1;
  };

  return movies.length === 0 ? (
    isLoading ? (
      <LoadingMovies />
    ) : error ? (
      <ErrorMessage>{error}</ErrorMessage>
    ) : (
      <StyledMovieList
        $CardСount={getCardСount()}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {movies.map((movie, index) => {
          return (
            <MovieListItem
              movie={movie}
              key={movie.imdbID}
              isNew={isNew}
              index={index}
            />
          );
        })}
      </StyledMovieList>
    )
  ) : (
    <StyledMovieList
      $CardСount={getCardСount()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {movies.map((movie, index) => {
        return (
          <MovieListItem
            movie={movie}
            key={movie.imdbID}
            isNew={isNew}
            index={index}
          />
        );
      })}
    </StyledMovieList>
  );
};

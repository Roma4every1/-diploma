import { StyledMovieList } from "./styles";
import { IMovieDetails } from "types/types";
import { MovieListItemFavorites } from "components";
import { useWindowSize } from "hooks";
import { Breackpoint } from "ui";

interface IProps {
  movies: IMovieDetails[];
}

export const MoviesListFavorites = ({ movies }: IProps) => {
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
  return (
    <StyledMovieList
      $CardСount={getCardСount()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {movies.map((movie, index) => {
        return (
          <MovieListItemFavorites movie={movie} key={movie.id} index={index} />
        );
      })}
    </StyledMovieList>
  );
};

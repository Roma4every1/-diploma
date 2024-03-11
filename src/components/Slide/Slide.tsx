import { NotFoundBox } from "components";
import { ROUTE } from "routes/routes";
import { IMovie } from "types/types";
import { Poster, StyledMovieListItem, Title } from "./styles";

interface IProps {
  movie: IMovie;
}

export const Slide = ({ movie }: IProps) => {
  const { title, poster, imdbID } = movie;

  return (
    <StyledMovieListItem to={`${ROUTE.MOVIE}${imdbID}`}>
      {poster === "N/A" ? (
        <NotFoundBox />
      ) : (
        <Poster
          src={poster}
          alt={`poster movie ${title} is still in development`}
        />
      )}
      <Title>{title}</Title>
    </StyledMovieListItem>
  );
};

import { TrendsIcon } from "assets";
import { NotFoundBox } from "components";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { ROUTE } from "routes/routes";
import { IMovie } from "types/types";
import { Poster, StyledMovieListItem, Title, Badge, Card } from "./styles";

interface IProps {
  movie: IMovie;
  isNew?: boolean;
  index: number;
}

export const MovieListItem = ({ movie, isNew, index }: IProps) => {
  const { title, poster, imdbID } = movie;
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((item) => ({
      opacity: 1,
      transition: { delay: item * 0.1 },
    }));
  }, []);

  const amountLoadings = Math.ceil(index / 10);

  return (
    <Card
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      custom={amountLoadings > 1 ? index - 10 * (amountLoadings - 1) : index}
      animate={controls}
    >
      <StyledMovieListItem to={`${ROUTE.MOVIE}${imdbID}`}>
        {poster === "N/A" ? (
          <NotFoundBox />
        ) : (
          <Poster
            src={poster}
            alt={`poster movie ${title} is still in development`}
          />
        )}
        {isNew && (
          <Badge>
            <TrendsIcon />
          </Badge>
        )}
        <Title>{title}</Title>
      </StyledMovieListItem>
    </Card>
  );
};

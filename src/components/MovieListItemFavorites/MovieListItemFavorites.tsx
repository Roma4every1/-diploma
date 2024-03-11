/* eslint-disable react-hooks/exhaustive-deps */
import { MouseEvent, useEffect } from "react";
import { FavoritesButtonIcon } from "assets";
import { NotFoundBox } from "components";
import { ROUTE } from "routes/routes";
import { useAppDispatch } from "store/hooks/hooks";
import { IMovieDetails } from "types/types";
import {
  Container,
  FavoritesButton,
  Poster,
  Rating,
  StyledMovieListItem,
  Title,
} from "./styles";
import { removeFavorites } from "store/feautures";
import { useAnimationControls } from "framer-motion";

interface IProps {
  movie: IMovieDetails;
  index: number;
}

export const MovieListItemFavorites = ({ movie, index }: IProps) => {
  const { title, poster, id, imdbRating } = movie;
  const dispatch = useAppDispatch();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((item) => ({
      opacity: 1,
      x: 1,
      transition: { delay: item * 0.1 },
    }));
  }, []);

  const handleAddFavorites = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(removeFavorites(id));
  };

  const amountLoadings = Math.ceil(index / 10);

  return (
    <Container
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      initial={{ x: -10 }}
      custom={amountLoadings > 1 ? index - 10 * (amountLoadings - 1) : index}
      animate={controls}
    >
      <StyledMovieListItem to={`${ROUTE.MOVIE}${id}`}>
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
      <FavoritesButton type="button" onClick={handleAddFavorites}>
        <FavoritesButtonIcon />
      </FavoritesButton>
      <Rating>{imdbRating}</Rating>
    </Container>
  );
};

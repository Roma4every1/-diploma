/* eslint-disable react-hooks/exhaustive-deps */
import { MoviesList, ShowMoreButton } from "components";
import { useEffect } from "react";
import {
  clearNewMovies,
  createNextPageNewMovies,
  fetchNewMovies,
} from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getNewMovies } from "store/selectors";
import { Container } from "./styles";

export const NewPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, newMovies, page, isMoreLoading } =
    useAppSelector(getNewMovies);
  const isNew = true;

  useEffect(() => {
    if (isNew) dispatch(clearNewMovies());
    if (!isNew) dispatch(createNextPageNewMovies(false));
  }, [dispatch, isNew]);

  useEffect(() => {
    dispatch(fetchNewMovies({ page }));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(createNextPageNewMovies(true));
  };

  return (
    <Container>
      <MoviesList
        movies={newMovies}
        error={error}
        isLoading={isLoading}
        isNew={isNew}
      />
      {!isLoading && !error && (
        <ShowMoreButton onClick={handleClick} isMoreLoading={isMoreLoading} />
      )}
    </Container>
  );
};

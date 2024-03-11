import React, { useEffect } from "react";
import { clearMovies, createNextPage, fetchMovies } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovies } from "store/selectors";
import { MoviesList, ShowMoreButton } from "components";
import { ROUTE } from "routes/routes";
import { useMatch } from "react-router-dom";
import { Container } from "./styles";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, movies, page, isMoreLoading } =
    useAppSelector(getMovies);
  const isHomePage = useMatch(ROUTE.HOME);

  useEffect(() => {
    if (isHomePage) dispatch(clearMovies());
    if (isHomePage) dispatch(createNextPage(false));
  }, [dispatch, isHomePage]);

  useEffect(() => {
    dispatch(fetchMovies({ page }));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(createNextPage(true));
  };

  return (
    <Container>
      <MoviesList movies={movies} error={error} isLoading={isLoading} />

      {!isLoading && !error && (
        <ShowMoreButton onClick={handleClick} isMoreLoading={isMoreLoading} />
      )}
    </Container>
  );
};

import { FavoritesButtonIcon } from "assets";
import {
  DescriptionElement,
  ErrorMessage,
  LoadingMovies,
  NotFoundBox,
} from "components";
import { MouseEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  fetchMovieByDetails } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMovieDetails} from "store/selectors";

import {
  StyledPage,
  BadgeContainer,
  Container,
  Description,
  FavoritesButton,
  Genre,
  InfoContainer,
  MainInfo,
  MovieTitle,
  Poster,
  PosterContainer,
  Rating,
  Recommendations,
  Runtime,
  Wrapper,
} from "./styles";
import { Slider } from "containers/Slider/Slider";

export const DetailsMoviePage = () => {
  const { imdbID = "" } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, error, details, recommendations } =
    useAppSelector(getMovieDetails);

  useEffect(() => {
    dispatch(fetchMovieByDetails(imdbID));
  }, [dispatch, imdbID]);

  const {
    actors,
    boxOffice,
    country,
    director,
    genre,
    plot,
    poster,
    released,
    runtime,
    title,
    writer,
    year,
    id,
    imdbRating,
    totalSeasons,
  } = details;

  const handleAddFavorites = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return isLoading ? (
    <LoadingMovies />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <StyledPage>
      <Wrapper>
        <PosterContainer>
          {poster === "N/A" ? (
            <NotFoundBox />
          ) : (
            <Poster
              src={poster}
              alt={`poster movie ${title} is still in development`}
            />
          )}
        
          
              <FavoritesButtonIcon />
     
        </PosterContainer>

        <Container>
          <MainInfo>
            {genre && <Genre>{genre.split(", ").join(" • ")}</Genre>}
            <MovieTitle>{title}</MovieTitle>
            <BadgeContainer>
              <Rating>{imdbRating}</Rating>
              <Runtime>{runtime}</Runtime>
            </BadgeContainer>
          </MainInfo>

          <Description>{plot}</Description>

          <InfoContainer>
            {totalSeasons && totalSeasons !== "N/A" && (
              <DescriptionElement
                infoTitle="Seasons"
                description={totalSeasons}
              />
            )}
            {year !== "N/A" && (
              <DescriptionElement infoTitle="Year" description={year} />
            )}
            {released && (
              <DescriptionElement infoTitle="Released" description={released} />
            )}
            {boxOffice && boxOffice !== "N/A" && (
              <DescriptionElement
                infoTitle="BoxOffice"
                description={boxOffice}
              />
            )}
            {country !== "N/A" && (
              <DescriptionElement infoTitle="Country" description={country} />
            )}
            {actors !== "N/A" && (
              <DescriptionElement infoTitle="Actors" description={actors} />
            )}
            {director !== "N/A" && (
              <DescriptionElement infoTitle="Director" description={director} />
            )}
            {writer !== "N/A" && (
              <DescriptionElement infoTitle="Writers" description={writer} />
            )}
          </InfoContainer>
          <Recommendations>Recommendations</Recommendations>
        </Container>
      </Wrapper>
      <Slider
        recommendations={recommendations}
        isLoading={isLoading}
        error={error}
      />
    </StyledPage>
  );
};

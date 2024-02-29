import { SearchIcon } from "assets";
import { Badge } from "components";
import { useDebounce, useInput } from "hooks";
import { MouseEventHandler, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import {
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
  deleteAllParams,
  clearSearchMovies,
  resetTypeParam,
  resetYearParam,
} from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getMoviesSearch } from "store/selectors";
import { Button, Container, StyledSearchInput, BadgeContainer } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const SearchInput = ({ toggleModal }: IProps) => {
  const { inputValue, onChange, setInputValue } = useInput();
  const debounceValue = useDebounce(inputValue, 1500);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearchPage = useMatch(ROUTE.SEARCH);
  const isNewPage = useMatch(ROUTE.NEW);
  const isFavoritesPage = useMatch(ROUTE.FAVORITES);
  const { searchParams } = useAppSelector(getMoviesSearch);

  const currentYear = new Date().getFullYear().toString();

  useEffect(() => {
    if (isFavoritesPage && debounceValue) {
    } else {
      if (isNewPage) dispatch(updateYearParam(currentYear));
      dispatch(updateTitleParam(debounceValue));
      debounceValue && navigate(ROUTE.SEARCH);
      if (debounceValue === "") {
        dispatch(resetMoviesSearch());
      }
    }
  }, [debounceValue]);

  // useEffect(() => {
  //   !isSearchPage && setInputValue("");
  //   dispatch(resetMoviesSearch());
  //   dispatch(updateSearchword(""));
  // }, [isSearchPage]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleModal(true);
  };

  const handleResetTitle = () => {
    dispatch(deleteAllParams());
    dispatch(clearSearchMovies());
    navigate(ROUTE.HOME);
  };

  const handleResetType = () => {
    dispatch(resetTypeParam());
    dispatch(clearSearchMovies());
  };

  const handleResetYear = () => {
    dispatch(resetYearParam());
    dispatch(clearSearchMovies());
  };

  return (
    <Container>
      <BadgeContainer>
        {searchParams.title && (
          <Badge text={searchParams.title} onClick={handleResetTitle} />
        )}
        {searchParams.type && (
          <Badge text={searchParams.type} onClick={handleResetType} />
        )}
        {searchParams.year && (
          <Badge
            text={searchParams.year === currentYear ? "new" : searchParams.year}
            onClick={handleResetYear}
          />
        )}
      </BadgeContainer>

      <StyledSearchInput
        onChange={onChange}
        placeholder="Search..."
        value={inputValue}
      />
      {!isFavoritesPage && (
        <Button onClick={handleClick} type="button">
          <SearchIcon />
        </Button>
      )}
    </Container>
  );
};

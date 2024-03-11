import { useToggle } from "hooks";
import React, { useEffect, useLayoutEffect } from "react";
import { Outlet, useMatch } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { AsideNav, ModalFilters, Navbar } from "containers";
import { Container, Wrapper } from "./styles";
import { ROUTE } from "routes/routes";
import {
  clearSearchMovies,
  createNextSearchPage,
  deleteAllParams,
} from "store/feautures";

export const MainTemplate = () => {
  const { themeMode } = useAppSelector(getUserInfo);
  const [isOpen, toggleModal] = useToggle(false);
  const isSearchPage = useMatch(ROUTE.SEARCH);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isSearchPage) {
      // dispatch(clearSearchMovies());
      // dispatch(deleteAllParams());
      createNextSearchPage(false);
    }
  }, [isSearchPage]);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <Wrapper>
      <Navbar toggleModal={toggleModal} />
      <Container>
        <AsideNav />
        <Outlet />
      </Container>
      <ModalFilters toggleModal={toggleModal} isOpen={isOpen} />
    </Wrapper>
  );
};

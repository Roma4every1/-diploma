import { useToggle } from "hooks";
import { useEffect, useLayoutEffect } from "react";
import { Outlet, useMatch } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { AsideNav, ModalFilters, Navbar } from "containers";
import { Container, Wrapper } from "./styles";
import { ROUTE } from "routes/routes";
import {
  createNextSearchPage,
} from "store/feautures";

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle(false);
  const isSearchPage = useMatch(ROUTE.SEARCH);

  useEffect(() => {
    if (!isSearchPage) {
      createNextSearchPage(false);
    }
  }, [isSearchPage]);
 
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

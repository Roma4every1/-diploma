import { ROUTE } from "routes/routes";
import { Customlink } from "components";
import { Copyright, NavList, StyledAsideNav, StyledIcon } from "./styles";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";

export const AsideNav = () => {
  return (
    <StyledAsideNav>
      <NavList>
        <Customlink to={ROUTE.HOME}>
          <StyledIcon>
            <HomeIcon />
          </StyledIcon>{" "}
          Home
        </Customlink>
        <Customlink to={ROUTE.NEW}>
          <StyledIcon>
            <TrendsIcon />
          </StyledIcon>{" "}
          New
        </Customlink>
        <Customlink to={ROUTE.FAVORITES}>
          <StyledIcon>
            <FavoritesIcon />
          </StyledIcon>{" "}
          Favorites
        </Customlink>
        <Customlink to={ROUTE.SETTINGS}>
          <StyledIcon>
            <SettingsIcon />{" "}
          </StyledIcon>
          Settings
        </Customlink>
      </NavList>
      <Copyright>Copyright © 2024 Pixema</Copyright>
    </StyledAsideNav>
  );
};

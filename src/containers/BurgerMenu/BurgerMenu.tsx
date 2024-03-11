import {
  CloseIcon,
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "assets";
import { Customlink } from "components";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { fetchSignOutUser } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { ButtonOut } from "../UserEmblem/styles";
import { Container, ButtonClose, NavList, StyledIcon, Wrapper } from "./styles";

interface IProps {
  toggleisOpen: () => void;
  isOpen: boolean;
}

export const BurgerMenu = ({ toggleisOpen, isOpen }: IProps) => {
  const { isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOut = () => {
    toggleisOpen();
    dispatch(fetchSignOutUser())
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME);
      });
  };

  const handleClick = () => {
    toggleisOpen();
  };

  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 1,
      },
      transitionEnd: {
        opacity: 0,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          initial="closed"
          exit="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <Container>
            <NavList>
              <Customlink to={ROUTE.HOME} onClick={handleClick}>
                <StyledIcon>
                  <HomeIcon />
                </StyledIcon>{" "}
                Home
              </Customlink>
              <Customlink to={ROUTE.NEW} onClick={handleClick}>
                <StyledIcon>
                  <TrendsIcon />
                </StyledIcon>{" "}
                New
              </Customlink>
              <Customlink to={ROUTE.FAVORITES} onClick={handleClick}>
                <StyledIcon>
                  <FavoritesIcon />
                </StyledIcon>{" "}
                Favorites
              </Customlink>
              <Customlink to={ROUTE.SETTINGS} onClick={handleClick}>
                <StyledIcon>
                  <SettingsIcon />{" "}
                </StyledIcon>
                Settings
              </Customlink>

              {isAuth ? (
                <>
                  <ButtonOut type="button" onClick={handleOut}>
                    Log out
                  </ButtonOut>
                </>
              ) : (
                <>
                  <Customlink to={ROUTE.SIGN_IN} onClick={handleClick}>
                    Sign in
                  </Customlink>
                  <Customlink to={ROUTE.SIGN_UP} onClick={handleClick}>
                    Sign up
                  </Customlink>
                </>
              )}
            </NavList>

            <ButtonClose type="button" onClick={handleClick}>
              <CloseIcon />
            </ButtonClose>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

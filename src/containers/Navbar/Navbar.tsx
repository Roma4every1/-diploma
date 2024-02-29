import { LogoIconLight, LogoIconDark, BurgerIcon } from "assets";
import { ROUTE } from "routes/routes";
import { BurgerButton, Container, StyledLink, Wrapper } from "./styles";
import { useToggle, useWindowSize } from "hooks";
import { BurgerMenu, SearchInput, UserEmblem } from "containers";
import { Breackpoint } from "ui";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Navbar = ({ toggleModal }: IProps) => {
  const { screenWidth } = useWindowSize();
  const [isOpen, toggleisOpen] = useToggle(false);

  return (
    <Container>
      <Wrapper>
        <StyledLink to={ROUTE.HOME}>
         <LogoIconDark />
        </StyledLink>

        <SearchInput toggleModal={toggleModal} />
        {screenWidth && screenWidth > Breackpoint.MD ? (
          <UserEmblem />
        ) : (
          !isOpen && (
            <BurgerButton type="button" onClick={() => toggleisOpen()}>
              <BurgerIcon />
            </BurgerButton>
          )
        )}
        {isOpen && <BurgerMenu toggleisOpen={toggleisOpen} isOpen={isOpen} />}
      </Wrapper>
    </Container>
  );
};

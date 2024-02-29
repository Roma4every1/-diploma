import { AnimatePresence } from "framer-motion";
import { useToggle } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { Avatar } from "components";
import {
  Arrow,
  StyledUserEmblem,
  UserInfo,
  Text,
  DropDown,
  Container,
  StyledLink,
  ButtonOut,
} from "./styles";

export const UserEmblem = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChoise = () => {
    toggleOpen();
  };


  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      display: "flex",
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <Container>
      <StyledUserEmblem type="button" onClick={handleChoise} $isOpen={isOpen}>
        <UserInfo>
          <Avatar />
        <Text>Sign In</Text>
        </UserInfo>
        <Arrow $isOpen={isOpen} />
      </StyledUserEmblem>
      <AnimatePresence>
        {isOpen && (
          <DropDown
            initial="closed"
            exit="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            
                <StyledLink to={ROUTE.SETTINGS}>Edit</StyledLink>
                <ButtonOut type="button" >
                  Log out
                </ButtonOut>
       
        
                <StyledLink to={ROUTE.SIGN_IN}>Sign in</StyledLink>
                <StyledLink to={ROUTE.SIGN_UP}>Sign up</StyledLink>
            
            
          </DropDown>
        )}
      </AnimatePresence>
    </Container>
  );
};

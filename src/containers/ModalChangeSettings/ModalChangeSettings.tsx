import { Portal } from "containers";
import { AnimatePresence } from "framer-motion";
import { PortalTarget } from "../Portal/Portal";
import { Container, Text, Wrapper } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
  isOpen: boolean;
}

const variants = {
  open: {
    opacity: 1,
    y: 200,
    transition: {
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 1,
    },
    transitionEnd: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  },
};

export const ModalChangeSettings = ({ isOpen }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <AnimatePresence>
        {isOpen && (
          <Wrapper>
            <Container
              initial="closed"
              exit="closed"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <Text>Your credentials have been successfully updated!</Text>
            </Container>
          </Wrapper>
        )}
      </AnimatePresence>
    </Portal>
  );
};

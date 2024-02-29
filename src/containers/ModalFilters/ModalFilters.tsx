import { Filters, Portal } from "containers";
import { AnimatePresence } from "framer-motion";
import { PortalTarget } from "../Portal/Portal";
import { Container } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
  isOpen: boolean;
}

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 1,
    },
    transitionEnd: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 1,
      },
    },
  },
};

export const ModalFilters = ({ toggleModal, isOpen }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <AnimatePresence>
        {isOpen && (
          <Container
            initial="closed"
            exit="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            <Filters toggleModal={toggleModal} />
          </Container>
        )}
      </AnimatePresence>
    </Portal>
  );
};

import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  border-radius: 30px;
  background: ${Color.Dark};

  ${Media.SM} {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 100px 40px 40px;

  ${Media.SM} {
    padding: 150px 30px 100px;
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  min-width: 56px;
  min-height: 56px;
  background: #7b61ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${Color.Light} 0px 5px 20px 0px;
  }

  ${Media.SM} {
    right: 10px;
  }
`;

const NavList = styled.div`
  display: grid;
  grid-gap: 40px;
`;

const StyledIcon = styled.div`
  margin-right: 20px;
`;

export { Container, ButtonClose, NavList, StyledIcon, Wrapper };

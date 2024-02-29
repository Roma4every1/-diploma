import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, Media, H6, H4 } from "ui";
import { arrowDown, arrowRight } from "assets";
import { Link } from "react-router-dom";

type isOpen = { $isOpen: boolean };

const Container = styled.div`
  position: relative;
  margin-left: 40px;
  min-width: 200px;
`;

const StyledUserEmblem = styled.button<isOpen>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 10px;
  border-radius: 10px;
  background: ${({ $isOpen }) => ($isOpen ? Color.PrimaryLight : "none")};
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${Color.PrimaryLight};
  }

  &:active {
    box-shadow: 0px 0px 10px 0px rgba(237, 243, 247, 0.24);
  }

  ${Media.MD} {
    position: absolute;
    right: 0px;
    top: 32px;
  }

  ${Media.SM} {
    position: absolute;
    right: 0px;
    top: 32px;
  }
`;

const Text = styled.p`
  margin-left: 20px;
  ${H6}
  color: ${Color.ThemeWhite};

  ${Media.MD} {
    display: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.div<isOpen>`
  height: 20px;
  width: 20px;
  background-position: center;
  background: no-repeat
    ${({ $isOpen }) => ($isOpen ? `url(${arrowDown})` : `url(${arrowRight})`)};

  ${Media.MD} {
    display: none;
  }
`;

const DropDown = styled(motion.div)`
  position: absolute;
  top: 70px;
  grid-gap: 3px;
  flex-direction: column;
  width: 100%;
`;

const StyledLink = styled(Link)`
  padding: 17px 0px 15px 20px;
  border-radius: 10px;
  background: ${Color.Graphite};
  color: ${Color.White};
  transition: color 0.1s, scale 0.3s;
  ${H4};
  cursor: pointer;

  &:hover {
    color: ${Color.PrimaryLight};
    scale: 1.02;
  }

  &:active {
    color: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
  }
`;

const ButtonOut = styled.button`
  padding: 17px 0px 15px 20px;
  border-radius: 10px;
  background: ${Color.Graphite};
  text-align: left;
  ${H4};
  color: ${Color.White};
  cursor: pointer;
  transition: color 0.1s, scale 0.3s;

  &:hover {
    color: ${Color.PrimaryLight};
    scale: 1.02;
  }

  &:active {
    color: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
  }
`;

export {
  Container,
  StyledUserEmblem,
  Text,
  UserInfo,
  Arrow,
  DropDown,
  StyledLink,
  ButtonOut,
};

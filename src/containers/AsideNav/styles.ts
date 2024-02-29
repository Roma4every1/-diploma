import styled from "styled-components";
import { Body, Media } from "ui";

const StyledAsideNav = styled.div`
  position: fixed;
  z-index: 1;
  top: 152px;
  left: 62px;
  height: 100%;

  ${Media.MD} {
    display: none;
    top: 0px;
    left: 0px;
  }
`;

const NavList = styled.div`
  display: grid;
  grid-gap: 40px;
`;

const StyledIcon = styled.div`
  margin-right: 20px;
`;

const Copyright = styled.p`
  position: fixed;
  bottom: 64px;
  ${Body}
`;

export { StyledAsideNav, NavList, StyledIcon, Copyright };

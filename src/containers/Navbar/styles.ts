import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding-right: 122px;
  background: ${Color.ThemeBlack};

  ${Media.MD} {
    padding-right: 80px;
  }
`;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 300px 3fr 1fr;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 56px;
  background: ${Color.ThemeBlack};
  transition: all 0.7s;

  ${Media.MD} {
    display: flex;
    max-width: 100%;
    padding-bottom: 48px;
  }

  ${Media.SM} {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    padding-bottom: 50px;
    margin: 0px 10px;
  }
`;

const StyledLink = styled(Link)`
  z-index: 20;

  ${Media.MD} {
    margin-right: 5px;
  }

  ${Media.SM} {
    position: absolute;
    top: 41px;
    left: 0;
  }
`;

const BurgerButton = styled.button`
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 56px;
  min-height: 56px;
  background: ${Color.Primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${Color.Light} 0px 5px 20px 0px;
  }
`;

export { Wrapper, StyledLink, BurgerButton, Container };

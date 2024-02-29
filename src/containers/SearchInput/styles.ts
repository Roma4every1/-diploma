import styled from "styled-components";
import { Color, Media } from "ui";

const Container = styled.div`
  position: relative;
  width: 100%;

  ${Media.MD} {
    margin-right: 100px;
  }

  ${Media.SM} {
    margin-right: 0px;
  }
`;

const StyledSearchInput = styled.input`
  min-height: 56px;
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 16px 20px;

  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  background: #323537;
  transition: all 0.3s;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #80858b;
  }

  &:focus {
    background: #323537;
    outline: 2px #7b61ff;
    outline-style: solid;
  }

  &:disabled {
    background-color: ${Color.Secondary};
    color: #afb2b6;
  }

  &:-moz-ui-invalid {
    outline: 2px ${Color.Error};
  }

  ${Media.MD} {
    margin-right: 22px;
    margin-left: 22px;
  }

  ${Media.SM} {
    margin: 80px 0px 0px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  height: 100%;
  background: none;
  cursor: pointer;
  fill: #80858b;
  stroke: #80858b;
  transition: scale 0.3s;

  &:hover {
    fill: ${Color.PrimaryLight};
    stroke: ${Color.PrimaryLight};
  }

  &:active {
    scale: 0.95;
  }

  ${Media.SM} {
    top: 40px;
    right: 25px;
  }
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  display: flex;
  grid-gap: 16px;
  justify-content: start;
  align-items: center;

  ${Media.MD} {
    top: 65px;
    left: 20px;
  }

  ${Media.SM} {
    top: 145px;
    left: 0;
  }
`;

export { StyledSearchInput, Button, Container, BadgeContainer };

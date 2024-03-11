import styled from "styled-components";
import { Color } from "ui";

type isDarkTheme = { $isDarkTheme: boolean };

export const Button = styled.button<isDarkTheme>`
  position: relative;
  height: 20px;
  width: 32px;
  align-self: center;
  border-radius: 10px;
  border: none;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? Color.Primary : Color.Secondary};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? Color.PrimaryLight : Color.Light};
  }
`;

export const Circle = styled.div<isDarkTheme>`
  position: absolute;
  top: 2px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "2px" : "14px")};
  height: 16px;
  width: 16px;
  background-color: ${Color.White};
  border-radius: 50%;
  transition: left 0.5s;

  &:disabled {
    background-color: ${({ $isDarkTheme }) => {
      return $isDarkTheme ? Color.PrimaryLight : Color.Light;
    }};
  }
`;

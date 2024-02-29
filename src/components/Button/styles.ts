import styled from "styled-components";
import { Color, Media, H6 } from "ui";

const StyledButton = styled.button`
  width: 100%;
  padding-top: 17px;
  padding-bottom: 15px;
  background-color: #7b61ff;
  border-radius: 10px;
  ${H6};
  color: ${Color.White};

  transition: background-color 0.3s, box-shadow 0.3s;

  cursor: pointer;

  &:hover {
    background-color: #917cff;
  }

  &:disabled {
    color: #afb2b6;
    background-color: #80858b;
  }

  &:active {
    box-shadow:#afb2b6 0px 5px 29px 0px;
  }

  ${Media.MD} {
    padding: 16px;
  }
`;

export { StyledButton };

import styled from "styled-components";
import { Color, Media, H6 } from "ui";

const StyledButton = styled.button`
  width: 100%;
  padding-top: 17px;
  padding-bottom: 15px;
  background-color: ${Color.Primary};
  border-radius: 10px;
  ${H6};
  color: ${Color.White};

  transition: background-color 0.3s, box-shadow 0.3s;

  cursor: pointer;

  &:hover {
    background-color: ${Color.PrimaryLight};
  }

  &:disabled {
    color: ${Color.Light};
    background-color: ${Color.Secondary};
  }

  &:active {
    box-shadow: ${Color.Light} 0px 5px 29px 0px;
  }

  ${Media.MD} {
    padding: 16px;
  }
`;

export { StyledButton };

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H6, Media } from "ui";

const StyledNote = styled(Link)`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-top: 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${Color.White};
  fill: ${Color.White};
  transition: all 0.3s;

  &:hover {
    color: ${Color.PrimaryLight};
    fill: ${Color.PrimaryLight};
  }

  &:active {
    color: ${Color.Primary};
    fill: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
    fill: ${Color.Light};
  }

  ${Media.SM} {
    margin-top: 10px;
  }
`;

const Text = styled.p`
  margin-right: 5px;
  ${H6}
`;

export { StyledNote, Text };

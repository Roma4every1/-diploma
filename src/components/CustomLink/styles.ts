import { Link, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color, H4 } from "ui";

type isActive = { $isActive: PathMatch<string> | null };

const StyledCustomLink = styled(Link)<isActive>`
  display: flex;
  ${H4};
  color: ${({ $isActive }) => ($isActive ? "#7b61ff" : Color.Secondary)};
  fill: ${({ $isActive }) => ($isActive ? "#7b61ff" : Color.Secondary)};

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
`;

export { StyledCustomLink };

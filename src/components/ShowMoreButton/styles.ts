import styled from "styled-components";
import { Color, H6 } from "ui";

const StyledShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  grid-gap: 10px;
  padding: 8px 24px;
  border-radius: 10px;
  background: #323537;
  border: none;
  ${H6};
  color: white;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${Color.Light} 0px 5px 20px 0px;
  }
`;

export { StyledShowMoreButton };

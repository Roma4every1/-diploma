import styled from "styled-components";
import { Color, H6, Media } from "ui";

const Container = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  padding: 8px 24px;
  border-radius: 40px;
  background: #323537;

  ${Media.MD} {
    padding: 4px 20px;
  }
`;

const Text = styled.div`
  color: white;
  ${H6};
`;

const ButtonClose = styled.button`
  cursor: pointer;
  background: none;
  transition: scale 0.3s;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.95;
  }
`;

export { Container, Text, ButtonClose };

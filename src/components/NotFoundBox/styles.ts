import styled from "styled-components";
import { Color, Media } from "ui";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 14px;
  background: ${Color.Light};

  ${Media.MD} {
    height: 279px;
  }

  ${Media.SM} {
    max-height: 100%;
  }
`;

export { Box };

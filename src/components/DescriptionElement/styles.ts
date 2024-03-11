import styled from "styled-components";
import { Color, H6, Media } from "ui";

const Container = styled.div`
  display: flex;
  ${H6};
`;

const InfoTitle = styled.h3`
  min-width: 150px;
  color: ${Color.Light};

  ${Media.MD} {
    min-width: 120px;
  }
`;

const Description = styled.h3`
  font-weight: 500;
`;

export { Container, InfoTitle, Description };

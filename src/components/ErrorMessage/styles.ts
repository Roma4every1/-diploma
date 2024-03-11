import styled from "styled-components";
import { Color, H6 } from "ui";

const StyledErrorMessage = styled.p`
  margin-top: -22px;
  margin-bottom: -26px;
  ${H6};
  font-weight: 400;
  color: ${Color.Error};
`;

export { StyledErrorMessage };

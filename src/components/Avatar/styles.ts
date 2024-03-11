import styled from "styled-components";
import { Color } from "ui";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  min-width: 56px;

  color: ${Color.White};
  font-size: 20px;
  font-weight: 700;

  border-radius: 10px;
  background-color: ${Color.Primary};
`;

export { StyledAvatar };

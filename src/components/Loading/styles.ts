import styled from "styled-components";
import { Button } from "antd";
import { Color } from "ui";

const StyledLoading = styled(Button)`
  width: 100%;
  min-height: 53px;
  font-size: 35px;
  background: #7b61ff;
  border-radius: 10px;
  text-align: center;

  color: ${Color.White};
`;

export { StyledLoading };

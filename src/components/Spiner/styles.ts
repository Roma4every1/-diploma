import styled, { keyframes } from "styled-components";
import { Color } from "ui";

const spinner = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
        transform: rotate(360deg);
    }
`;

const StyledSpiner = styled.div`
  height: 25px;
  width: 25px;
  border: 3px solid ${Color.White};
  border-bottom: 3px solid ${Color.White};
  border-right: 3px solid ${Color.White};
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;

export { StyledSpiner };

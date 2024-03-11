import styled from "styled-components";
import { Color } from "ui";

const Ring = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, ${Color.Secondary} 0%, ${Color.Primary} 50%, 0.4);
  border: 3px solid transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: ${Color.Secondary};
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px ${Color.Secondary};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid ${Color.Secondary};
    border-right: 3px solid ${Color.Secondary};
    border-radius: 50%;
    animation: animateC 2s linear infinite; 
  }
;


  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
;`

export { Ring };
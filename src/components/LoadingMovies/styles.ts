import styled from "styled-components";
import { Color } from "ui";

const Ring = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #80858b 0%, #7b61ff 50%, 0.4);
  border: 3px solid transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: #80858b;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #80858b;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #80858b;
    border-right: 3px solid #80858b;
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
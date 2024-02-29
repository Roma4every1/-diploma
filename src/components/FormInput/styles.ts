import styled from "styled-components";
import { Color, Media } from "ui";

const StyledFormInput = styled.input`
  width: 100%;
  margin-top: 8px;
  max-height: 56px;
  border: none;
  border-radius: 10px;
  padding: 16px 20px;

  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  background:  #323537;
  transition: all 0.3s;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #80858b;
  }

  &:focus {
    background:  #323537;
    outline: 2px $#7b61ff;
    outline-style: solid;
  }

  &:disabled {
    background-color: #80858b;
    color: #80858b;
  }

  &:-moz-ui-invalid {
    outline: 2px ${Color.Error};
  }

  ${Media.SM} {
    margin-bottom: 20px;
  }
`;

export { StyledFormInput };

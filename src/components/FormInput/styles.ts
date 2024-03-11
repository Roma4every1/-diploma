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
  color: ${Color.ThemeWhite};

  background: ${Color.Graphite};
  transition: all 0.3s;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: ${Color.Secondary};
  }

  &:focus {
    background: ${Color.Graphite};
    outline: 2px ${Color.Primary};
    outline-style: solid;
  }

  &:disabled {
    background-color: ${Color.Secondary};
    color: ${Color.Light};
  }

  &:-moz-ui-invalid {
    outline: 2px ${Color.Error};
  }

  ${Media.SM} {
    margin-bottom: 20px;
  }
`;

export { StyledFormInput };

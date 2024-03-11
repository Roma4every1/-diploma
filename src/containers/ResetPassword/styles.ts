import styled from "styled-components";
import { Color, H2, H6, Media } from "ui";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  width: 100%;
  width: 574px;
  padding: 40px;
  border-radius: 40px;
  background-color: ${Color.Dark};

  ${Media.SM} {
    width: 100%;
    grid-gap: 32px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;

  ${Media.SM} {
    grid-gap: 20px;
  }
`;

const FormFieldName = styled.label`
  ${H6};
  color: ${Color.White};
`;

const FormName = styled.h2`
  color: ${Color.ThemeWhite};
  ${H2}
`;

const StyledErrorMessage = styled.div`
  text-align: center;
`;

export { FormName, Container, FormFieldName, StyledForm, StyledErrorMessage };

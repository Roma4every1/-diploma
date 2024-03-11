import styled from "styled-components";
import { Color, H2, H6, Media } from "ui";
import { Link } from "react-router-dom";

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
  ${H2};
`;

const StyledErrorMessage = styled.div`
  text-align: center;
`;

const Note = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  ${H6};
  font-weight: 500;

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.p`
  color: ${Color.Secondary};
`;

const LinkNote = styled(Link)`
  color: ${Color.Primary};

  &:hover {
    color: ${Color.PrimaryLight};
  }

  &:active {
    color: ${Color.Primary};
  }

  &:disabled {
    color: ${Color.Light};
  }
`;

const ResetPasswordLink = styled(Link)`
  font-size: 14px;
  color: ${Color.Secondary};

  &:hover {
    color: ${Color.PrimaryLight};
  }

  &:active {
    color: ${Color.Primary};
  }
`;

export {
  FormName,
  Container,
  FormFieldName,
  Note,
  StyledForm,
  LinkNote,
  StyledErrorMessage,
  Text,
  ResetPasswordLink,
};

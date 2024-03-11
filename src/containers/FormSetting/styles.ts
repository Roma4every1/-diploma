import styled from "styled-components";
import { Color, H2, H6, Media } from "ui";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-top: 152px;

  ${Media.MD} {
    grid-template-columns: 1fr;
  }

  ${Media.SM} {
    margin-top: 20px;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 40px;

  ${Media.SM} {
    grid-gap: 32px;
  }
`;

const SectionName = styled.h2`
  ${H2}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;

  ${Media.SM} {
    grid-gap: 18px;
  }
`;

const FildsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 40px;
  padding: 40px;
  border-radius: 10px;
  background: ${Color.Dark};

  ${Media.SM} {
    flex-direction: column;
    grid-gap: 15px;
    padding: 24px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  width: 50%;

  ${Media.SM} {
    grid-gap: 20px;
    width: 100%;
  }
`;

const FormFieldName = styled.label`
  ${H6};
  color: ${Color.White};
`;

const Button = styled.button`
  width: 25%;
  padding-top: 17px;
  padding-bottom: 15px;
  border-radius: 10px;
  ${H6};
  color: ${Color.White};
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:disabled {
    color: ${Color.Light};
    background-color: ${Color.Secondary};
  }

  &:active {
    box-shadow: ${Color.Light} 0px 5px 29px 0px;
  }

  ${Media.MD} {
    width: 50%;
    padding: 16px;
  }

  ${Media.SM} {
    width: 100%;
  }
`;

const StyledButtonCancel = styled(Button)`
  background-color: ${Color.Graphite};

  &:hover {
    background-color: ${Color.Secondary};
  }
`;

const StyledButtonSave = styled(Button)`
  background-color: ${Color.Primary};
  width: 25%;

  &:hover {
    background-color: ${Color.PrimaryLight};
  }

  ${Media.MD} {
    width: 50%;
  }
`;

const StyledErrorMessage = styled.div`
  margin-top: 22px;
  text-align: center;

  ${Media.SM} {
    margin-top: 15px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  grid-gap: 40px;
  width: 100%;
  justify-content: end;

  ${Media.MD} {
    grid-gap: 33px;
    width: 100%;
  }

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }
`;

const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Color.White};
`;

const ThemeContainer = styled(FildsContainer)`
  flex-direction: row;
`;

const Title = styled.h3`
  ${H6}
`;

const Description = styled.h3`
  ${H6};
  font-weight: 400;
`;

export {
  Wrapper,
  SectionName,
  Container,
  FildsContainer,
  Box,
  FormFieldName,
  StyledForm,
  StyledButtonCancel,
  StyledErrorMessage,
  ButtonBox,
  StyledButtonSave,
  Title,
  Description,
  ThemeBox,
  ThemeContainer,
};

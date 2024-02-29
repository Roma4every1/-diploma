/* eslint-disable indent */
import { StylesConfig } from "react-select";
import styled from "styled-components";
import { Color, H2, H6, Media } from "ui";
import { ISelectOption } from "./Filters";

const Container = styled.div`
  display: grid;
  grid-gap: 40px;
`;

const StyledFilters = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  padding: 48px 40px;
  border-radius: 20px;
  background: ${Color.Dark};

  ${Media.MD} {
    padding: 40px 30px;
    width: 70%;
  }

  ${Media.SM} {
    padding: 20px;
    width: 100%;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: none;
  transition: scale 0.3s;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.95;
  }
`;

const FormName = styled.h2`
  color: ${Color.White};
  ${H2};
`;

const FormFieldName = styled.label`
  display: grid;
  grid-gap: 15px;
  ${H6};
  color: ${Color.White};
`;

const Button = styled.button`
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

const CustomStyles: StylesConfig<ISelectOption, boolean> = {
  control: (styles, { isDisabled, isFocused, hasValue }) => ({
    ...styles,
    position: "relative",
    minWidth: "100%",
    minHeight: "56px",
    borderRadius: "10px",
    background: isDisabled ? Color.Secondary : Color.Graphite,
    border: "1px solid",
    borderColor: isFocused
      ? Color.Primary
      : hasValue
      ? Color.Primary
      : Color.Graphite,
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    fontSize: "16px",
    color: isFocused ? Color.Primary : Color.White,
    backgroundColor: isFocused ? Color.Graphite : Color.Dark,
  }),
  valueContainer: (styles) => ({
    ...styles,
    color: `${Color.White}`,
    fontSize: "16px",
    border: "1px solid",
    borderColor: Color.Graphite,
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    width: 0,
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: "16px",
    color: Color.White,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: Color.White,
  }),
  menuList: (styles) => ({
    ...styles,
    background: Color.Graphite,
    borderRadius: "10px",
  }),
  menu: (styles) => ({
    ...styles,
    background: Color.Graphite,
    borderRadius: "10px",
  }),
};

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const ButtonReset = styled(Button)`
  background-color: ${Color.Graphite};

  &:hover {
    background-color: ${Color.Secondary};
  }
`;

export {
  StyledFilters,
  FormName,
  FormFieldName,
  CloseButton,
  ButtonReset,
  CustomStyles,
  Box,
  ButtonContainer,
  Container,
};

import { ChangeEvent } from "react";
import { StyledFormInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

export const FormInput = ({
  placeholder,
  type,
  value,
  onChange,
  defaultValue,
}: IProps) => {
  return (
    <StyledFormInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

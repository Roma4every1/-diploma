import { ReactNode } from "react";
import { StyledErrorMessage } from "./styles";

interface IProps {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: IProps) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

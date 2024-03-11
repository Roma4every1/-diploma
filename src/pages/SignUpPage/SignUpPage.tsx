import {ReturnHomePageLink } from "components";
import { FormSignUp } from "containers";
import { StyledSignUpPage } from "./styles";

export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <FormSignUp />
      <ReturnHomePageLink />
    </StyledSignUpPage>
  );
};

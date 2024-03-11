import {ReturnHomePageLink } from "components";
import { FormSignIn } from "containers";
import { StyledSignInPage } from "./styles";

export const SignInPage = () => {
  return (
    <StyledSignInPage>
      <FormSignIn />
      <ReturnHomePageLink />
    </StyledSignInPage>
  );
};

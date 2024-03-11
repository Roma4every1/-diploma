import { ReturnHomePageLink } from "components";
import { Resetpassword } from "containers";
import { StyledResetPasswordPage } from "./styles";

export const ResetPasswordPage = () => {
  return (
    <StyledResetPasswordPage>
      <Resetpassword />
      <ReturnHomePageLink />
    </StyledResetPasswordPage>
  );
};

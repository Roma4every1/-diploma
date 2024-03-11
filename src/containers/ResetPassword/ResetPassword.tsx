import { Button, ErrorMessage, FormInput, Loading } from "components";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { fetchResetPassword, resetError } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import {
  FormName,
  FormFieldName,
  StyledErrorMessage,
  StyledForm,
  Container,
} from "./styles";

export type ResetValues = {
  email: string;
};

export const Resetpassword = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // после ошибки и пару секунд

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ResetValues>();

  const onSubmit: SubmitHandler<ResetValues> = (userData) => {
    dispatch(fetchResetPassword(userData))
      .unwrap()
      .then(() => {
        navigate(ROUTE.SIGN_IN_OTHER_WAY);
      })
      .finally(() => {
        reset();
      });
  };

  useEffect(() => {
    if (error) dispatch(resetError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const validationRules = {
    email: {
      required: "Email is requared",
      pattern: {
        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        message: "Please insert a valid email address",
      },
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Reset Password</FormName>
      <Container>
        <FormFieldName>
          Email
          <Controller
            control={control}
            name="email"
            rules={validationRules.email}
            render={({ field: { value, onChange } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="Your email"
                type="text"
              />
            )}
          />
        </FormFieldName>

        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Container>

      {error && (
        <StyledErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
        </StyledErrorMessage>
      )}
      {isPendingAuth ? <Loading /> : <Button type="submit" text="Enter" />}
    </StyledForm>
  );
};

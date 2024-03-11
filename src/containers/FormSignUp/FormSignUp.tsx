/* eslint-disable indent */
import { useEffect, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  FormName,
  FormFieldName,
  LinkNote,
  Note,
  StyledErrorMessage,
  StyledForm,
  Text,
  Container,
} from "./styles";
import { ErrorMessage, Loading, FormInput, Button } from "components";
import { ROUTE } from "routes/routes";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { fetchSignUpUser, resetError } from "store/feautures";
import { useNavigate } from "react-router-dom";

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormSignUp = () => {
  const { isPendingAuth, error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm<SignUpValues>();

  const password = useRef({});

  password.current = watch("password", "");

  const onSubmit: SubmitHandler<SignUpValues> = (userData) => {
    dispatch(fetchSignUpUser(userData))
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME);
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
    name: {
      required: "Name is requared",
      maxLength: {
        value: 50,
        message: "Name must be less than 50 characters long",
      },
      pattern: {
        value: /[A-Za-z]/,
        message: "Name must contain only letters",
      },
    },
    email: {
      required: "Email is requared",
      pattern: {
        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        message: "Please insert a valid email address",
      },
    },
    password: {
      required: "Password is requared",
      minLength: {
        value: 6,
        message: "Password must contain at least 6 characters",
      },
      pattern: {
        value: /(?=.*\d)(?=.*[a-z]).{6,}/,
        message: `${"Password must contain at least one number and one uppercase"} +
        ${"and lowercase letter, and at least 6 or more characters"}`,
      },
    },
    confirnPassword: {
      required: "Confirm  your password",
      validate: (value: {}) =>
        value === password.current || "The passwords don't match",
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormName>Sign Up</FormName>
      <Container>
        <FormFieldName>
          Name
          <Controller
            control={control}
            name="userName"
            rules={validationRules.name}
            render={({ field: { value, onChange } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="Your name"
                type="text"
              />
            )}
          />
        </FormFieldName>

        {errors.userName && (
          <ErrorMessage>{errors.userName.message}</ErrorMessage>
        )}

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

        {!errors.userName && errors.email && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}

        <FormFieldName>
          Password
          <Controller
            control={control}
            name="password"
            rules={validationRules.password}
            render={({ field: { value, onChange } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="Your password"
                type="password"
              />
            )}
          />
        </FormFieldName>

        {!errors.userName && !errors.email && errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <FormFieldName>
          Confirm password
          <Controller
            control={control}
            name="confirmPassword"
            rules={validationRules.confirnPassword}
            render={({ field: { value, onChange } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="Confirm password"
                type="password"
              />
            )}
          />
        </FormFieldName>
        {!errors.userName &&
          !errors.email &&
          !errors.password &&
          errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
      </Container>

      {error && (
        <StyledErrorMessage>
          <ErrorMessage>{error}</ErrorMessage>
        </StyledErrorMessage>
      )}
      {isPendingAuth ? <Loading /> : <Button type="submit" text="Sign up" />}

      <Note>
        <Text>Already have an account? </Text>{" "}
        <LinkNote to={ROUTE.SIGN_IN_OTHER_WAY}> Sign In</LinkNote>
      </Note>
    </StyledForm>
  );
};

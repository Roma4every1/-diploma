import { MouseEventHandler } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Box,
  Container,
  FildsContainer,
  SectionName,
  StyledErrorMessage,
  StyledForm,
  Wrapper,
  FormFieldName,
  ButtonBox,
  StyledButtonSave,
  StyledButtonCancel,
  Title,
  Description,
  ThemeBox,
  ThemeContainer,
} from "./styles";
import {
  ErrorMessage,
  Loading,
  FormInput,
  Switch,
} from "components";
import {   ModalChangeSettings } from "containers";
import { ROUTE } from "routes/routes";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import {
  fetchUpdateEmail,
  fetchUpdatePassword,
  updateUserName,
} from "store/feautures";
import { useNavigate } from "react-router-dom";
import { useToggle } from "hooks";

export type SignUpValues = {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
};

export const FormSetting = () => {
  const { name, email, isPendingAuth, error, themeMode } =
    useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOpen, toggleModal] = useToggle(false);

  const {
    handleSubmit,
    resetField,
    control,
    formState: { errors },
    // watch,
  } = useForm<SignUpValues>();

  const onSubmit: SubmitHandler<SignUpValues> = (userData) => {
    dispatch(updateUserName(userData.userName));
    dispatch(fetchUpdateEmail(userData))
      .unwrap()
      .then(() => dispatch(fetchUpdatePassword(userData)).unwrap())
      .finally(() => {
        resetField("password");
        resetField("newPassword");
        resetField("confirmPassword");
        toggleModal();
        setTimeout(() => {
          toggleModal();
        }, 2000);
        setTimeout(() => {
          navigate(ROUTE.HOME);
        }, 3300);
      });
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(ROUTE.HOME);
  };

  // const newPassword = watch("newPassword", "");

  const validationRules = {
    name: {
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
      pattern: {
        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        message: "Please insert a valid email address",
      },
    },
    password: {
      minLength: {
        value: 6,
        message: "Password must contain at least 6 characters",
      },
      pattern: {
        value: /(?=.*\d)(?=.*[a-z]).{6,}/,
        message: `Password must contain at least one number and one uppercase +
          and lowercase letter, and at least 6 or more characters`,
      },
    },
    confirnPassword: {
      // validate: (value: {}) =>
      //   value === newPassword || "The passwords don't match",
    },
  };

  return (
    <>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <SectionName>Profile</SectionName>

            <FildsContainer>
              <Box>
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
                        defaultValue={name ? name : "User"}
                        placeholder="Your name"
                        type="text"
                      />
                    )}
                  />
                </FormFieldName>

                {errors.userName && (
                  <ErrorMessage>{errors.userName.message}</ErrorMessage>
                )}
              </Box>

              <Box>
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
                        defaultValue={email ? email : ""}
                        placeholder="Your email"
                        type="text"
                      />
                    )}
                  />
                </FormFieldName>

                {!errors.userName && errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </Box>
            </FildsContainer>
          </Container>

          <Container>
            <SectionName>Password</SectionName>
            <FildsContainer>
              <Box>
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
              </Box>
              <Box>
                <FormFieldName>
                  New password
                  <Controller
                    control={control}
                    name="newPassword"
                    rules={validationRules.password}
                    render={({ field: { value, onChange } }) => (
                      <FormInput
                        onChange={onChange}
                        value={value}
                        placeholder="New password"
                        type="password"
                      />
                    )}
                  />
                </FormFieldName>

                {!errors.userName && !errors.email && errors.newPassword && (
                  <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
                )}

                <FormFieldName>
                  Confirm new password
                  <Controller
                    control={control}
                    name="confirmPassword"
                    rules={validationRules.confirnPassword}
                    render={({ field: { value, onChange } }) => (
                      <FormInput
                        onChange={onChange}
                        value={value}
                        placeholder="Confirm new password"
                        type="password"
                      />
                    )}
                  />
                </FormFieldName>

                {!errors.userName &&
                  !errors.email &&
                  !errors.password &&
                  !errors.newPassword &&
                  errors.confirmPassword && (
                    <ErrorMessage>
                      {errors.confirmPassword.message}
                    </ErrorMessage>
                  )}
              </Box>
            </FildsContainer>
          </Container>

          {error && (
            <StyledErrorMessage>
              <ErrorMessage>{error}</ErrorMessage>
            </StyledErrorMessage>
          )}

          <Container>
            <SectionName>Color mode</SectionName>

            <ThemeContainer>
              <ThemeBox>
                <Title>{themeMode.toUpperCase()}</Title>
                <Description>Use {themeMode} theme</Description>
              </ThemeBox>
              <Switch />
            </ThemeContainer>
          </Container>

          <ButtonBox>
            <StyledButtonCancel type="button" onClick={handleClick}>
              Cancel
            </StyledButtonCancel>
            {isPendingAuth ? (
              <Loading />
            ) : (
              <StyledButtonSave type="submit">Save</StyledButtonSave>
            )}
          </ButtonBox>
        </StyledForm>
      </Wrapper>
      <ModalChangeSettings toggleModal={toggleModal} isOpen={isOpen} />
    </>
  );
};

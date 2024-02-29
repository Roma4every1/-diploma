import { CloseIcon } from "assets";
import { Button, ErrorMessage, FormInput } from "components";
import React, { MouseEventHandler } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { ROUTE } from "routes/routes";
import {
  updateTitleParam,
  updateTypeParam,
  updateYearParam,
} from "store/feautures";
import { useAppDispatch } from "store/hooks/hooks";
import { ContentType } from "types/types";
import {
  Box,
  ButtonContainer,
  ButtonReset,
  CloseButton,
  Container,
  CustomStyles,
  FormFieldName,
  FormName,
  StyledFilters,
} from "./styles";

export type FiltresValues = {
  type: ContentType;
  title: string;
  year: string;
};

export interface ISelectOption {
  readonly label: string;
  readonly value: ContentType | string;
}

const options: ISelectOption[] = [
  { value: "", label: "all type" },
  { value: "movie", label: "movie" },
  { value: "series", label: "series" },
  { value: "episode", label: "episode" },
];

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Filters = ({ toggleModal }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FiltresValues>();

  const onSubmit: SubmitHandler<FiltresValues> = (filters) => {
    navigate(ROUTE.SEARCH);
    dispatch(updateTitleParam(filters.title));
    dispatch(updateYearParam(filters.year));
    dispatch(updateTypeParam(filters.type));
    reset();
    toggleModal(false);
  };

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    reset();
  };

  const onClose: MouseEventHandler<HTMLButtonElement> = () => {
    toggleModal(false);
    reset();
  };

  const validationRules = {
    title: {
      required: "Name is requared",
    },
    year: {
      minLength: {
        value: 4,
        message: "Incorrect format",
      },
      maxLength: {
        value: 4,
        message: "Incorrect format",
      },
      pattern: {
        value: /^[0-9]+$/,
        message: "You can only enter numbers",
      },
    },
  };

  return (
    <StyledFilters onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Box>
          <FormName>Filters</FormName>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Box>
        <FormFieldName>
          Type
          <Controller
            control={control}
            name="type"
            render={({ field: { value, onChange } }) => (
              <Select
                defaultValue={options[0]}
                options={options}
                onChange={(options) => options && onChange(options.value)}
                styles={CustomStyles}
                isSearchable={false}
                isMulti={false}
              />
            )}
          />
        </FormFieldName>

        <FormFieldName>
          Full or short movie name
          <Controller
            control={control}
            name="title"
            rules={validationRules.title}
            render={({ field: { value, onChange } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="Name"
                type="text"
              />
            )}
          />
        </FormFieldName>
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}

        <FormFieldName>
          Year
          <Controller
            control={control}
            name="year"
            rules={validationRules.year}
            render={({ field: { value, onChange } }) => (
              <FormInput
                onChange={onChange}
                value={value}
                placeholder="year"
                type="text"
              />
            )}
          />
        </FormFieldName>

        {!errors.title && errors.year && (
          <ErrorMessage>{errors.year.message}</ErrorMessage>
        )}
        <ButtonContainer>
          <ButtonReset type="button" onClick={handleReset}>
            Clear filters
          </ButtonReset>

          <Button type="submit" text="Show results" />
        </ButtonContainer>
      </Container>
    </StyledFilters>
  );
};

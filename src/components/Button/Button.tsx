import { StyledButton } from "./styles";

interface IProps {
  type: "button" | "submit" | "reset";
  text: string;
}

export const Button = ({ type, text }: IProps) => {
  return <StyledButton type={type}>{text}</StyledButton>;
};

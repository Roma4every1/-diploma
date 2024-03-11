import { CloseIcon } from "assets";
import { Container, Text, ButtonClose } from "./styles";

interface IProps {
  text: string;
  onClick: () => void;
}

export const Badge = ({ text, onClick }: IProps) => {
  return (
    <Container>
      <Text>{text}</Text>
      <ButtonClose type="button" onClick={onClick}>
        <CloseIcon />
      </ButtonClose>
    </Container>
  );
};

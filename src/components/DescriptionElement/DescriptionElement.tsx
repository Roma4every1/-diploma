import { Container, Description, InfoTitle } from "./styles";

interface IProps {
  infoTitle: string;
  description: string;
}

export const DescriptionElement = ({ infoTitle, description }: IProps) => {
  return (
    <Container>
      <InfoTitle>{infoTitle}</InfoTitle>
      <Description>{description}</Description>
    </Container>
  );
};

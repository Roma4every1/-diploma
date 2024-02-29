import { Spiner } from "components";
import { StyledShowMoreButton } from "./styles";

interface IProps {
  onClick: () => void;
  isMoreLoading?: boolean;
}

export const ShowMoreButton = ({ onClick, isMoreLoading }: IProps) => {
  return (
    <StyledShowMoreButton onClick={onClick} disabled={isMoreLoading}>
      Show more {isMoreLoading && <Spiner />}
    </StyledShowMoreButton>
  );
};

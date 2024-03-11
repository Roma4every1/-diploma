import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { StyledCustomLink } from "./styles";

interface IProps {
  to: ROUTE;
  children: ReactNode;
  onClick?: () => void;
}

export const Customlink = ({ to, children, onClick }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $isActive={isActive} to={to} onClick={onClick}>
      {children}
    </StyledCustomLink>
  );
};

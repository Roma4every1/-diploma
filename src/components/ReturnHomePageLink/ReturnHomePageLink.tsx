import { ReturnIcon } from "assets";
import { ROUTE } from "routes/routes";
import { StyledNote, Text } from "./styles";

export const ReturnHomePageLink = () => {
  return (
    <StyledNote to={ROUTE.HOME}>
      <Text>Go back to the home page</Text> <ReturnIcon />
    </StyledNote>
  );
};

import { UserIcon } from "assets";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { getUserAbbreviation } from "utils/getUserAbbreviation";
import { StyledAvatar } from "./styles";

export const Avatar = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);

  return (
    <StyledAvatar>
      {isAuth && name !== "User" && name !== "" ? (
        <div>{name && getUserAbbreviation(name)}</div>
      ) : (
        <UserIcon />
      )}
    </StyledAvatar>
  );
};

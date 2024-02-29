import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H4, Media } from "ui";

const StyledMovieListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: #7b61ff;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 357px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 14px;

  ${Media.MD} {
    height: 279px;
  }

  ${Media.SM} {
    height: 100%;
  }
`;

const Title = styled.h2`
  ${H4}
  color: inherit;
`;

export { StyledMovieListItem, Poster, Title };

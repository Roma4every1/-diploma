import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H4, Media } from "ui";

const Card = styled(motion.div)``;

const StyledMovieListItem = styled(Link)`
  position: relative;
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

const Badge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 28px;
  border-radius: 6px;
  background: #7b61ff;
  fill: ${Color.White};
`;

const Title = styled.h2`
  ${H4}
  color: inherit;
`;

export { StyledMovieListItem, Poster, Title, Badge, Card };

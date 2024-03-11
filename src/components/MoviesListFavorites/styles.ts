import { motion } from "framer-motion";
import styled from "styled-components";
import { Media } from "ui";

type CardСount = { $CardСount: number };

const StyledMovieList = styled(motion.div)<CardСount>`
  display: grid;
  grid-template-columns: repeat(${({ $CardСount }) => $CardСount}, 1fr);
  grid-gap: 40px;
  padding-top: 10px;

  ${Media.MD} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    padding-top: 0px;
  }

  ${Media.SM} {
    grid-template-columns: 1fr;
  }
`;

export { StyledMovieList };

import { motion } from "framer-motion";
import styled from "styled-components";
import { Media } from "ui";
import { Loading } from "../Loading/Loading";

type CardСount = { $CardСount: number };

const StyledMovieList = styled(motion.div)<CardСount>`
  display: grid;
  grid-template-columns: repeat(${({ $CardСount }) => $CardСount}, 1fr);
  justify-content: space-between;
  grid-gap: 40px;
  margin-top: 152px;
  padding: 10px 0px 64px;

  ${Media.MD} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    padding: 0px 0px 56px;
  }

  ${Media.SM} {
    grid-template-columns: 1fr;
    margin-top: 35px;
    padding: 0px 0px 50px;
  }
`;

const StyledLoading = styled(Loading)`
  background: none;
  font-size: 50px;

  ${Media.SM} {
    font-size: 40px;
  }
`;

export { StyledMovieList, StyledLoading };
